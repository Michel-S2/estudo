import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCartIcon } from "lucide-react"
import { Separator } from "../ui/separator"
 
export function CartSidebar() {
  return (
    <Sheet>

      <SheetTrigger asChild>
        <Button variant="outline">
            <ShoppingCartIcon/>
            <p>Carrinho</p>
        </Button>
      </SheetTrigger>

      <SheetContent>

        <SheetHeader>
          <SheetTitle>Pedido</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-5 my-3">
            ...
        </div>

        <Separator className="my-4"/>

        <div className="flex justify-between items-center text-xs">
            <div>Subtotal</div>
            <div>...</div>
        </div>

        <Separator className="my-4"/>

        <div className="text-center">
            <Button>Finalizar Compra</Button>
        </div>

      </SheetContent>
    </Sheet>
  )
}