
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Polish Command: Replace sharp animations with smooth ease-in-out, reduce distance
export const fadeIn = {
  initial: { opacity: 0, y: 10 }, // Reduced from 20 to 10
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeInOut" } // Slower, smoother
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1 // Polish Command: Delay animations slightly
    }
  }
};
