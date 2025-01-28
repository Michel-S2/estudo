import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"

type Props = {
    error: string
}

export const ErrorMessage = ({ error }: Props) => {
    return (
        <div className="w-full max-w-2xl">
        <Alert variant={"destructive"}>
          <AlertCircle/>
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
      </div>
    )
}