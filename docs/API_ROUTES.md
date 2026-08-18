# 🌐 API Routes & Backend Service Architecture

This document defines the architectural standards for creating robust, production-grade **Next.js App Router API Routes (`route.ts`)** and backend services.

---

## 📍 Directory Location & Delegation

In accordance with our thin-shell principles:

1. **Route Handlers (`src/app/api/`)**: API files live in `src/app/api/<route-path>/route.ts`. They act as thin HTTP controllers responsible for request parsing, validation, authentication checks, and returning standardized HTTP responses.
2. **Feature Services (`src/feature/<feature-name>/services/`)**: All database operations, external API calls, third-party integrations, and business logic MUST live in feature services or server modules.

```
src/
├── app/
│   └── api/
│       └── [feature]/
│           └── route.ts          # Thin HTTP Route Controller
└── feature/
    └── [feature]/
        ├── services/             # Backend business logic & DB calls
        └── types/                # API Request/Response Types
```

---

## 📦 Standardized API Response Format

All API routes must return a consistent JSON response structure:

```ts
export type ApiResponse<T = unknown> = {
  success: boolean;
  message?: string;
  data?: T;
  error?: {
    code: string;
    details?: unknown;
  };
};
```

### Response Helpers Blueprint

```ts
// src/utils/api-response.ts
import { NextResponse } from 'next/server';

export function successResponse<T>(data: T, message?: string, status = 200) {
  return NextResponse.json({ success: true, message, data }, { status });
}

export function errorResponse(
  message: string,
  code = 'BAD_REQUEST',
  status = 400,
  details?: unknown,
) {
  return NextResponse.json(
    {
      success: false,
      error: { code, details },
      message,
    },
    { status },
  );
}
```

---

## 💡 Standard API Route Controller Example

Below is the standard blueprint for an API route (`src/app/api/users/route.ts`):

```ts
import { NextRequest } from 'next/server';
import { successResponse, errorResponse } from '@/utils/api-response';
import { userService } from '@/feature/users/services/user.service';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Number(searchParams.get('limit')) || 10;

    const users = await userService.getUsers({ limit });
    return successResponse(users, 'Users fetched successfully');
  } catch (error) {
    console.error('[API_USERS_GET_ERROR]:', error);
    return errorResponse('Failed to fetch users', 'INTERNAL_SERVER_ERROR', 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.email || !body.name) {
      return errorResponse(
        'Email and name are required',
        'VALIDATION_ERROR',
        400,
      );
    }

    const newUser = await userService.createUser(body);
    return successResponse(newUser, 'User created successfully', 201);
  } catch (error) {
    console.error('[API_USERS_POST_ERROR]:', error);
    return errorResponse('Failed to create user', 'INTERNAL_SERVER_ERROR', 500);
  }
}
```

---

## 🛡️ HTTP Status Code Standards

| Code  | Status                | Usage                                         |
| :---- | :-------------------- | :-------------------------------------------- |
| `200` | OK                    | Successful GET, PUT, or DELETE request        |
| `201` | Created               | Successful resource creation (POST)           |
| `400` | Bad Request           | Validation errors or invalid payloads         |
| `401` | Unauthorized          | Missing or invalid authentication token       |
| `403` | Forbidden             | Authenticated user lacks required permissions |
| `404` | Not Found             | Requested resource does not exist             |
| `500` | Internal Server Error | Unhandled server or database exceptions       |
