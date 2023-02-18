import useQuiosco from "../hooks/useQuiosco"

export default function Categoria({ categoria }) {
	
	const { id, icono, nombre } = categoria
	const { handleClickCategoria, categoriaActual } = useQuiosco()

  	return (
		<div className={`${categoriaActual.id === id ? "bg-amber-400" : "bg-white"} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 duration-300 hover:text-gray-600 hover:font-semibold cursor-pointer group`}> 
			<img 
				src={`/img/icono_${icono}.svg`} 
				alt="Imagen Icono"
				className="w-12 group-hover:scale-110"
			/>
			<button 
				className="text-lg font-bold truncate"
				type="button"
				onClick={ () => handleClickCategoria(id) }
			>
				{ nombre }
			</button>
		</div>
  	)
}
