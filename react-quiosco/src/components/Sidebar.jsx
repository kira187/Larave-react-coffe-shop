import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"

export default function Sidebar() {
 
  const { categorias } = useQuiosco()

  return (
    <div className="md:w-72">
      <div className="p-4">
        <img src="img/logo.svg" alt="Imagen logo" className="w-40" />
      </div>

      <div className="mt-10">
        { categorias.map( categoria => (
          < Categoria  categoria={categoria} key={categoria.id}/>
        )) }
      </div>

      <div className="my-5 px-5">
          <button
            className="text-center bg-red-500 w-full p-3 font-bold text-white truncate hover:bg-red-600 duration-300"
            type="button"
          >
            Cancelar Orden
          </button>
      </div>
    </div>
  )
}
