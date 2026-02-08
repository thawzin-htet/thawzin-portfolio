import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Backticks
        `flex h-[48px] w-full rounded-md border border-white/10 
         bg-primary px-4 py-5 text-base font-light text-white 
         placeholder:text-white/60 outline-none 
         focus:border-accent transition-all duration-500`,
        className
      )}
      {...props} 
    />
  );
}

export { Input }