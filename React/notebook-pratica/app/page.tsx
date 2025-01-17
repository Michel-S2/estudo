"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchemaZod } from "./types/LoginSchemaZod";

export default function Home() {
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(LoginSchemaZod)
  })

  const handleLoginForm = () => {
    alert('Dados Enviados')
  }


  return (
    <div className="p-3 container mx-auto">
      <h1 className="text-center text-2xl">Formulário de Cadastro</h1>

      <form onSubmit={handleSubmit(handleLoginForm)}>
        <div>
          <input 
            {...register('name')}
            className="border border-white px-3 py-2 m-3 text-black"
            placeholder="Digite seu nome"
          />
          {errors.name && <p>{errors.name.message as string}</p>}
        </div>

        <div>
          <input 
            {...register('lastName')}
            className="border border-white px-3 py-2 m-3 text-black "
            placeholder="Digite seu sobrenome"
          />
          {errors.lastName && <p>{errors.lastName.message as string}</p>}
        </div>

        <div>
          <input 
            {...register('age', {valueAsNumber: true})}
            className="border border-white px-3 py-2 m-3 text-black"
            placeholder="Digite sua idade"
          />
          {errors.age && <p>{errors.age.message as string}</p>}
        </div>

        <input type="submit" value="Cadastrar" />
      </form>

    </div>
  );
}
