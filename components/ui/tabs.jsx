"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

// Root Component ကို Responsive ဖြစ်အောင် flex direction ပြောင်းထားပါတယ်
const Tabs = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    // xl (laptop) မှာ ဘေးတိုက်ပြဖို့ flex-row၊ ဖုန်းမှာ အပေါ်အောက်ပြဖို့ flex-col
    className={cn("flex flex-col xl:flex-row gap-[60px]", className)}
    {...props}
  />
))
Tabs.displayName = TabsPrimitive.Root.displayName

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    // ဖုန်းမှာ အလယ်မှာရှိနေဖို့ mx-auto၊ Laptop မှာ ဘယ်ဘက်ကပ်ဖို့ xl:mx-0
    className={cn(
      "flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center w-full bg-[#27272c] text-white rounded-lg p-3 text-base font-medium transition-all duration-300",
      "ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      // Active ဖြစ်ချိန်မှာ ပုံထဲကလို စိမ်းပြာရောင် (Accent) ပြောင်းလဲမှု
      "data-[state=active]:bg-[#00ff99] data-[state=active]:text-[#1c1c22] data-[state=active]:font-bold data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "min-h-[70vh] w-full outline-none",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }