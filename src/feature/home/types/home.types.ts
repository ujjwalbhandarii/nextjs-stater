import { LucideIcon } from 'lucide-react';

export interface ArchitectureChildNode {
  name: string;
  desc: string;
}

export interface ArchitectureNode {
  id: string;
  name: string;
  type: 'folder' | 'file';
  icon: LucideIcon;
  title: string;
  badge: string;
  desc: string;
  children?: ArchitectureChildNode[];
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
}

export interface CommandItem {
  label: string;
  cmd: string;
  desc: string;
}

export interface TechBadge {
  label: string;
  icon: LucideIcon;
}
