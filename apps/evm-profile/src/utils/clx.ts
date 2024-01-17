import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export { clsx, twMerge, type ClassValue };
export const clx = (...classes: ClassValue[]) => twMerge(clsx(...classes));
