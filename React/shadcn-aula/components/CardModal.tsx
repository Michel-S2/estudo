"use client"

import { useState } from "react"
import { Check, LucideChevronsDown } from "lucide-react"

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
import { Role } from "@/app/types/role"

const roles = [
  {
    value: "usuario",
    label: "Usuário",
    description: "Tem acesso, mas não pode editar"
  },
  {
    value: "membro",
    label: "Membro",
    description: "Tem acesso e pode comentar"
  },
  {
    value: "desenvolvedor",
    label: "Desenvolvedor",
    description: "Tem acesso, pode editar e comentar"
  },
  {
    value: "proprietario",
    label: "Proprietario",
    description: "Tem acesso total"
  }
]

type Props = {
  value: Role;
  setValue: (newValue: Role) => void
}

export function CardModal({ value, setValue }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
        >
          {value
            ? roles.find(role => role.value === value)?.label
            : "Selecione a função..."}
          <LucideChevronsDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0">
        <Command>
          <CommandInput placeholder="Nova Função" />
          <CommandList>
            <CommandEmpty>Nenhuma função encontrada.</CommandEmpty>
            <CommandGroup>
              {roles.map((role) => (
                <CommandItem
                  key={role.value}
                  value={`${role.value}`}
                  onSelect={currentValue => {
                    setValue(currentValue as Role )
                    setOpen(false)
                  }}
                >
                    <div> 
                        <p>{role.label}</p>
                        <p className="text-muted-foreground text-sm">{role.description}</p>
                    </div>
                  <Check
                    className={cn(
                      "ml-auto",
                      value === role.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
