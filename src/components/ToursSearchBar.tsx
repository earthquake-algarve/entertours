'use client'

import { Check, ChevronsUpDown, Search } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"

const tours = [
    {
        value: "piedade",
        label: "Ponta da Piedade",
    },
    {
        value: "benagil",
        label: "Grutas de Benagil",
    },
    {
        value: "geres",
        label: "Cachoeiras dos Gerês",
    },
    {
        value: "alto",
        label: "Bairro Alto",
    },
]

export default function ToursSearchBar() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    return (
        <>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-96 h-12 justify-between"
                    >
                        <Search size={35} color="#bababa" />
                        {value
                            ? tours.find((tour) => tour.value === value)?.label
                            : "Search for tours..."}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-96 p-0">
                    <Command>
                        <CommandInput placeholder="Search tours..." />
                        <CommandList>
                            <CommandEmpty>No tours found.</CommandEmpty>
                            <CommandGroup>
                                
                                {tours.map((tour) => (
                                    
                                    <CommandItem
                                        className="cursor-pointer"
                                        key={tour.value}
                                        value={tour.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === tour.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        <Link href="/tour">{tour.label}</Link>
                                       
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </>
    )
}
