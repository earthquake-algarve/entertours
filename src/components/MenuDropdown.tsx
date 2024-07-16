import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AlignJustify } from "lucide-react"
import Link from "next/link"

export default function MenuDropdown() {
  return (
      <DropdownMenu>
          <DropdownMenuTrigger><AlignJustify /></DropdownMenuTrigger>
          <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Link href="/">Tours</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/">Cities</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/">Categories</Link></DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
  )
}
