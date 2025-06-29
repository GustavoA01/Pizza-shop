import { Search, ArrowRight, X } from "lucide-react"
import { TableCell, TableRow } from "../../../components/ui/table"
import { Button } from "../../../components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "../../../components/ui/dialog"
import { OrderDetails } from "./order-details"

export const OrderTableRow = () => {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger>
            <Button variant="outline" size="xs">
              <Search className="h=3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <OrderDetails />
          </DialogContent>
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        awefwefewfg
      </TableCell>
      <TableCell className="text-muted-foreground">15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span>Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Gustavo</TableCell>
      <TableCell className="font-medium">R$ 149,00</TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="h-3 w-3 mr-1" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="h-3 w-3 mr-2" /> Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
