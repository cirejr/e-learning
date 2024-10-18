import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength) + '...';
  }
}

export function generateCourseCode(title: string) {
  return title
    .toLowerCase() 
    .trim() 
    .replace(/[^\w\s-]/g, '') 
    .replace(/\s+/g, '-')   
    .replace(/--+/g, '-'); 
}

