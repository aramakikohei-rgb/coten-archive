import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatYear(year: number): string {
  if (year < 0) return `紀元前${Math.abs(year)}年`;
  return `${year}年`;
}

export function formatYearRange(start: number, end: number): string {
  return `${formatYear(start)} 〜 ${formatYear(end)}`;
}

export function formatYearShort(year: number): string {
  if (year < 0) return `${Math.abs(year)} BCE`;
  return `${year}`;
}
