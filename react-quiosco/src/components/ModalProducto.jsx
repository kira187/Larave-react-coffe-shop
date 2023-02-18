import useQuiosco from "../hooks/useQuiosco"
import { formatearDinero } from "../helpers";
import {useState} from 'react'

export default function ModalProducto() {

	const {producto, handleClickModal} = useQuiosco();
	const [ cantidad, setCantidad ] = useState(1)

  return (
    <div className="md:flex gap-10">
			<div className="md:w-1/3">
				<img 
					src={`/img/${producto.imagen}.jpg`} 
					alt={`Imagen producto ${producto.nombre}`} />
			</div>
			<div className="md:w-2/3">
				<div className="flex justify-end">
					<button onClick={handleClickModal}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</button>
				</div>

				<h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
				<p className="mt-5 font-black text-5xl text-amber-500">
					{ formatearDinero(producto.precio)}
				</p>

				<div className="flex gap-4 mt-5">
					<button 
						className="cursor-pointer" 
						type="button"
						onClick={() => {
							if (cantidad <= 1) return
							setCantidad(cantidad - 1)
						}}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
						</svg>
					</button>
					<p className="text-3xl">{cantidad}</p>
					<button
						type="button"
						onClick={() => {
							if (cantidad >= 5) return
							setCantidad(cantidad + 1)
						}}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}		stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
						</svg>
					</button>
				</div>

				<button className="bg-blue-600 hover:bg-blue-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded">
					Añadir
				</button>
			</div>
    </div>
  )
}