import { Link } from "react-router-dom"

export default function Registro() {
  return (
    <>
        <h1 className="text-4xl font-bold">Crea tu cuenta</h1>
        <p>Crea tu cuenta llenando el formulario</p>

        <div className="bg-white shadow-lg rounded-xl mt-10 px-10 py-10">
            <form action="">
                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="name">
                        Nombre: 
                    </label>
                    <input
                        id="name"
                        className="mt-2 w-full p-3 bg-gray-100 rounded-lg outline-slate-200"
                        type="text" 
                        name="name"
                        placeholder="Ingresa tu nombre"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="name">
                        Email: 
                    </label>
                    <input
                        id="email"
                        className="mt-2 w-full p-3 bg-gray-100 rounded-lg outline-slate-200"
                        type="email" 
                        name="email"
                        placeholder="Ingresa tu email"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="name">
                        Password: 
                    </label>
                    <input
                        id="password"
                        className="mt-2 w-full p-3 bg-gray-100 rounded-lg outline-slate-200"
                        type="password" 
                        name="pasword"
                        placeholder="Ingresa tu Password"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-slate-800"
                        htmlFor="name">
                        Confirma tu password: 
                    </label>
                    <input
                        id="password_confirmation"
                        className="mt-2 w-full p-3 bg-gray-100 rounded-lg outline-slate-200"
                        type="password" 
                        name="password_confirmation"
                        placeholder="Confirma tu password"
                    />
                </div>

                <input 
                    type="submit" 
                    value="Crear cuenta"
                    className="bg-blue-600 hover:bg-blue-700 duration-300 transition text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded"
                />
            </form>
        </div>

        <nav className="mt-5">
        <p>
        Ya tienes cuenta ? 
          <Link 
            to="/auth/login"
            className="hover:text-blue-400 hover:underline"> 
            Inicia Sesión
        	</Link>
        </p>
      </nav>
    </>
  )
}

