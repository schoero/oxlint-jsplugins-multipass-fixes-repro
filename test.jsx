/**
 * Two eslint rules are active:
 * 1. better-tailwindcss/enforce-consistent-class-order: 
 *    should order tailwind classes with variants to the end.
 * 2. better-tailwindcss/enforce-consistent-line-wrapping:
 *    should wrap lines with different variants on a new line.
 */
const _ = () => <div class="hover:opacity-50 bg-red-500" />