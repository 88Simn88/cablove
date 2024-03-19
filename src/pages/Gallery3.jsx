import React from 'react'
import { motion } from 'framer-motion'
import media from '../assets/index3'
import './gallery3.css'
import { Link } from 'react-router-dom'

const Gallery3 = () => {
  return (
    <motion.div className='slider-container'>
      <h2 className='slider-title'>Tunel <span className='text-lime-400'> Led</span> Infinito</h2>

      <div className='h-fit m-5'>

        <div className='md:h-72 w-4/5 flex flex-col md:flex-row md:w-2/3 m-auto mb-5 '>
          <div id="textos" className='md:w-1/2 m-5'>
            <p className='mb-4 text-lg text-white'>
              Diversión y Más Color para tu evento.
            </p>
            <p className='mb-4 text-white'>
               ✅ Novedoso Túnel LED con  efecto Infinito  lumínicos a diferentes velocidades, combinando los colores.
            </p>
            <p className='mb-4 text-white'>
            ✅ Tamaño ideal para no incomodar en salones. Tiene capacidad para  3/4  personas.
            </p>
            <p className='mb-4 text-white'>
            ✅ Los Videos se toman en alta calidad con Camara full HD.
            </p>
          </div>
          <div className='h-full'>
            <img className="h-full rounded-lg shadow-2xl shadow-black" src="./img/tunel led/fotos/tled2.jpg" alt="" />
          </div>
        </div>


        <div className='md:h-72 w-4/5 flex flex-col-reverse md:flex-row md:w-2/3 m-auto mb-5 '>

          <div className='h-full'>
            <img className="h-full rounded-lg shadow-2xl shadow-black" src="./img/tunel led/fotos/tled1.jpg" alt="" />
          </div>

          <div id='textos' className='md:w-1/2 m-7 '>
          <p className='mb-4 text-white'>
              ✅ Edición en el momento, para poder descargarlos y disfrutarlos en el mismo evento.
            </p>
            <p className='mb-4 text-white'>
            ✅ Pantalla para exhibir Videos durante la fiesta.
            </p>
            <p className='mb-4 text-white'>
            ✅ Videos en ALTA CALIDAD para usar en pantallas y redes sociales.
            </p>
            <p className='mb-4 text-white'>
            ✅ Entregamos el video de cada invitado para que se lo descargue en el celular y lo pueda postear en sus redes.
            </p>
          </div>

        </div>

        <div className='flex flex-col items-center mt-10'>
        <Link to="/contact" className='h-14 bg-lime-500 rounded p-3 cursor-pointer text-white font-bold text-xl mb-5 hover:scale-95 shadow-lg shadow-black'>¡Reserva Ya!</Link>
          <p className='text-white mb-5 self-start'>
            ¡Deslizá para ver las fotos y videos! ➡
          </p>
        </div>

      </div>


      <motion.div className='slider' drag='x'
        dragConstraints={{ right: 0, left: -8700 }} >

        {media.map((file, index) => (
          <motion.div className='item' key={index}>
            {
              file.type === 'image'
                ? <img className="image-item" src={file.url} alt="" />
                : <video className="video-item" src={`${file.url}#t=0.001`} muted loop="true" preload="metadata" autoPlay controls />
            }
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Gallery3