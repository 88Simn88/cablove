
import { Link } from "react-router-dom"
import "./home.css"



const Home = () => {


  return (

    <div className='home_container'>
      <div className='banner'>
        <div className='banner_container'>

          {/*   <div className='buttons-container'>
            <Link className='bg-lime-500 rounded p-2 m-2 text-white'
              to='/cabinas'>Cabinas</Link>

            <Link className='bg-lime-500 rounded p-2 m-2 text-white'
              to='/plataforma360'>Plataforma 360</Link>

            <Link className='bg-lime-500 rounded p-2 m-2 text-white'
              to='/tunelled'>Tunel Led</Link>
          </div> */}

          <h1 className='text-white font-bold text-4xl absolute -top-40 -left-32 md:left-0'>Cabinas Love</h1>
          <p className='text-white absolute top-40 left-0'>Las mejores cabinas para tus eventos</p>
          {/* <Link to="/contact" className='bg-lime-500 rounded p-1 text-white '> ¡Reserva ya!</Link> */}
        </div>

        <div className='banner_overlay'></div>
      </div>

      <div className="h-fit w-full flex flex-col bg-gradient-to-b from-black via-blue-500 to-black  pb-20">
        <h2 className="text-white text-center font-bold text-4xl mt-10 mb-10">Nuestros Servicios</h2>

        <div className="w-5/6 h-1 w-40 border-solid border-t-2 border-white self-center p-0 mb-10"></div>

        <div className="md:h-4/5 w-full flex flex-col md:flex-row md:justify-around gap-10 items-center ">

          <div className="w-[300px] md:h-1/3 md:mt-20 flex flex-col gap-5 bg-[#ffffff15] p-5 rounded-lg shadow-lg shadow-black">
            <div className="h-full p-7 md:p-0">
              <img className="h-full rounded-lg" src="./img/fotocabina/fotcab5.jpg" alt="" />
            </div>

            <div className="w-4/5 self-center h-1 border-solid border-t-2 border-[#ffffff80] p-0"></div>

            <div className="flex flex-col items-center">
              <h3 className="text-white font-bold text-2xl mb-3">Fotocabina</h3>
              <p className="text-white text-center">
                Fotocabina de 2x2 para sacarte
                </p>
                <p className="text-white text-center">
                fotos geniales con diseños  
                </p>
                <p className="text-white text-center">
                únicos y quedarte con el  
                </p>
                <p className="text-white text-center mb-5">
                 mejor recuerdo de tu evento.
                </p>
              <Link to="/fotocabina" className="text-white font-bold bg-lime-500 p-3 mb-3 rounded shadow-sm shadow-black">Ver más...</Link>

            </div>
          </div>

          <div className="w-[300px] md:h-1/3 flex flex-col gap-5 bg-[#ffffff15] p-5 rounded-lg shadow-lg shadow-black">
            <div className="h-full p-7 md:p-0">
              <img className="h-full rounded-lg" src="./img/360/fotos 360/360a-5.jpg" alt="" />
            </div>

            <div className="w-4/5 self-center h-1 border-solid border-t-2 border-[#ffffff80] p-0"></div>

            <div className="flex flex-col items-center">
              <h3 className="text-white font-bold text-2xl mb-3">Plataforma 360</h3>
              <p className="text-white text-center">
                Plataforma circular con brazo móvil
                </p>
                <p className="text-white text-center">
                 que gira y genera videos 
                </p>
                <p className="text-white text-center">
                 espectaculares en 360° 
                </p>
                <p className="text-white text-center mb-5">
                 personalizados y con calidad HD.
                </p>

              <Link to="/plataforma360" className="text-white font-bold bg-lime-500 p-3 mb-3 rounded shadow-sm shadow-black">Ver más...</Link>

            </div>
          </div>

          <div className="w-[300px] md:h-1/3 md:mt-20 flex flex-col gap-5 bg-[#ffffff15] p-5 rounded-lg shadow-lg shadow-black">
            <div className="h-full p-7 md:p-0">
              <img className="h-full rounded-lg" src="./img/tunel led/fotos/tled2.jpg" alt="" />
            </div>

            <div className="w-4/5 self-center h-1 border-solid border-t-2 border-[#ffffff80] p-0"></div>

            <div className="flex flex-col items-center">
              <h3 className="text-white font-bold text-2xl mb-3">Tunel Led Infinito</h3>
              <p className="text-white text-center">
                Novedoso Túnel LED con efecto 
                </p>
                <p className="text-white text-center">
                lumínico infinito que genera videos 
                </p>
                <p className="text-white text-center">
                con música y distintos efectos para 
                </p>
                <p className="text-white text-center mb-5">
                tus redes sociales.
                </p>

              <Link to="/tunelled" className="text-white font-bold bg-lime-500 p-3 mb-3 rounded shadow-sm shadow-black">Ver más...</Link>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home