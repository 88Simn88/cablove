import { Link } from "react-router-dom"
import media from "../assets/index2"
import './gallery2.css'
import React, { useState } from 'react'
import {motion} from 'framer-motion'

const Gallery2 = () => {
  const [file, setFile] = useState(null)


  return (
    <div className='gallery_container mt-20'>
      <motion.div 
       initial={{ opacity: 0, x: -10}}
       animate={{ opacity: 1, x: 0}}
       transition={{ease: "easeIn", duration: 1}} 

      className="mt-[70px] text-black text-center p-[15px] font-bold text-4xl"> Plataforma 360 </motion.div>

      
      <motion.div 
      
      initial={{ opacity: 0, x: 10}}
      animate={{ opacity: 1, x: 0}}
      transition={{ease: "easeIn", duration: 1}} 
      
      className="w-full flex md:flex-row md:justify-center flex-col md:h-72 gap-10 bg-gradient-to-r from-white via-blue-200 to-white md:mb-5 p-5">
        <div className=" m-auto md:m-0">
          <img className=" h-full rounded-lg shadow-2xl shadow-black " src="./img/360/fotos 360/360a-5.jpg" alt="" />
        </div>

        <div className="m-8 md:w-1/2">

          <p>
           ✅ Videos 360° para que los invitados se diviertan con esta experiencia.
          </p>
          <p>
          ✅ Es una base con brazo móvil, que gira y genera Videos 360°, Full HD, con efectos agregados y un marco personalizado.
          </p>
          <p>
          ✅ VIDEOS INCREIBLES que todos querrán compartir en sus redes sociales.
          </p>

          <p>
          ✅ Videos ilimitados en las horas de alquiler.
          </p>
          <p>
          ✅ Los videos se suben a la nube, y se comparte un código QR para que los invitados puedan descargar
            y compartir sus videos en el evento.
          </p>
          <p>
            ✅  Personal Idóneo operando el equipo.
          </p>
        </div>

      </motion.div>


      <div className=" h-48 md:h-32 flex flex-col items-center mb-20 gap-10">
      <div className="w-5/6 h-1 w-40 border-solid border-t-2 border-blue-500 p-0 mt-20 md:mt-5"></div>
      <Link 
       to="/contact" 
       className='h-14 bg-lime-500 rounded p-3 cursor-pointer text-white font-bold text-xl hover:scale-95 shadow-lg shadow-black'
      // onClick={() => window.scroll(0,0)}
       >¡Reserva Ya!</Link>
        <p className="pb-10 md:self-start">¡Clickeá en la foto o video para verlos más grandes!</p>
      </div>

      <div className="gallery_media_container">
        {
          media.map((file, index) => (
            <div className="media" key={index}
              onClick={() => setFile(file)}>
              {
                file?.type === 'image'
                  ? <img src={file.url} alt="" />
                  : <video src={`${file.url}#t=0.001`} muted preload="metadata" />
              }
            </div>
          ))
        }
      </div>

      <div className="popup-media" style={{ display: file ? 'block' : 'none' }}>
        <span onClick={() => setFile(null)}>&times;</span>

        {
          file?.type === 'video'
            ? <video src={file?.url} muted autoPlay controls />
            : <img src={file?.url} />
        }
      </div>

    </div>
  )
}

export default Gallery2