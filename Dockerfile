# Multi-stage ultra-optimized Dockerfile for Next.js 16 + Bun
FROM oven/bun:1-alpine AS base
WORKDIR /app

# Step 1: Install dependencies only when lockfile changes
FROM base AS deps
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Step 2: Build the production application
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set production environment for build time optimization
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV BUILD_STANDALONE=true

RUN bun run build

# Step 3: Minimal production runner stage
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create a non-root system user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy standalone server build output and static assets
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["bun", "server.js"]
