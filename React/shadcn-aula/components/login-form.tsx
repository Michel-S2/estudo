"use client"
 
import { z } from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Form } from "./ui/form"
import { Button } from "./ui/button"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    email: z.string().email('Digite um email válido'),
    senha: z.string().min(5, 'Senha muito curta')
})

export const LoginForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {email: "", senha: ''},
      })
      

      const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
      }

    return (

        <Card className="w-96">

            <CardHeader>
                <CardTitle>Faça o Login</CardTitle>
                <CardDescription>Insira seus dados para o login</CardDescription>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Digite seu email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                        )}/>

                        <FormField
                            control={form.control}
                            name="senha"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Senha</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Digite sua senha" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                        )}/>

                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </CardContent>

        </Card>
    )
}