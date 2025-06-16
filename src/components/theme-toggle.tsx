
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react" 
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils" // Import cn

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme() // Use resolvedTheme for icon logic

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost" 
          size="icon"
          className="text-foreground border border-foreground/30 hover:bg-foreground/10 hover:text-foreground focus-visible:ring-foreground"
        >
          {/* Conditional class application based on resolvedTheme */}
          <Sun className={cn("h-[1.2rem] w-[1.2rem] transition-all", resolvedTheme === 'light' ? 'rotate-0 scale-100' : '-rotate-90 scale-0')} />
          <Moon className={cn("absolute h-[1.2rem] w-[1.2rem] transition-all", resolvedTheme !== 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0')} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("ocean")}>
          Ocean
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("forest")}>
          Forest
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
