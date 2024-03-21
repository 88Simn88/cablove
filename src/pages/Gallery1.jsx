import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import media from '../assets/index1'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'

const Gallery1 = () => {



  return (
    <div className='mt-20 w-full  flex flex-col  items-center bg-gradient-to-r from-blue-200 via-white to-blue-200'>

      <div className='xl:1/2 pt-10 h-fit md:w-3/4 flex flex-col items-center gap-10 '>
        <motion.div 
         initial={{ opacity: 0, x: 10}}
         animate={{ opacity: 1, x: 0}}
         transition={{ease: "easeIn", duration: 1}} 
        
        className='text-center text-4xl font-bold '>Fotocabina</motion.div>

        <motion.div 
         //animate={{x:-10}}
        /*  initial={{ x:-10}}
         animate={{ x: 0}}
         */
        initial={{ opacity: 0, x: -10}}
        animate={{ opacity: 1, x: 0}}
        transition={{ease: "easeIn", duration: 1}} 
        className='h-3/4 w-4/5 md:h-60 md:w-62 flex flex-col items-center md:flex-row md:bg-gradient-to-r from-blue-600 to-white bg-gradient-to-b from-blue-600 to-white rounded-lg shadow-md shadow-black'>
          <div className='w-full md:w-1/2 p-5'>
            <p className='text-center text-2xl'>
              Nuestros servicios incluyen:
            </p>
            <p className='text-center text-lg mt-5 '>
              Cabina inflable de 2x2 metros.
            </p>
            <p className='text-center text-lg mt-5'>
              🧍‍♂️ Operador.
            </p>
            <p className='text-center text-lg mt-5'>
              🎭 Cotillon para sacarse las fotos más divertidas.
            </p>
          </div>

          <div className='h-full '>
            <img className='h-full md:rounded-r-lg rounded-b-lg' src="./img/fotocabina/fotcab5.jpg" alt="" />
          </div>

        </motion.div>


        <motion.div 
         initial={{ opacity: 0, x: 10}}
         animate={{ opacity: 1, x: 0}}
         transition={{ease: "easeIn", duration: 1}} 
        
        className='h-3/4 w-4/5 md:h-60 md:w-full flex flex-col rounded-lg items-center md:flex-row bg-gradient-to-b from-blue-600 to-white md:gap-24 gap-5 shadow-md shadow-black md:rounded-lg'>
          <div className='md:h-full h-72 mt-8 md:mt-0'>
            <img className="h-full md:rounded-l-lg rounded-lg m" src="./img/fotoimpr1.jpg" alt="" />
          </div>

          <div className='pb-5 md:pb-0'>
            <p className='text-center text-lg'>
              🖨 Impresiones fotográficas ilimitadas y personalizadas.
            </p>
            <p className='text-center text-lg mt-8'>
              🚚 Traslado al lugar del evento según zona de cobertura.
            </p>
          </div>
        </motion.div>


          <motion.div 
           initial={{ opacity: 0, x: -10}}
           animate={{ opacity: 1, x: 0}}
           transition={{ease: "easeIn", duration: 1}} 
          
          className='h-3/4 w-4/5 md:h-60 md:w-98 flex flex-col items-center md:flex-row bg-gradient-to-b from-blue-600 to-white md:gap-24 shadow-md shadow-black rounded-lg'>
            <div className='md:w-3/4 mt-5 md:mt-0'>
              <p className='text-center text-lg'>
                🖨 Diseños exclusivos.
              </p>
              <p className='text-center text-lg mt-8'>
                🎊 Diversión asegurada.
              </p>
            </div>


            <div className='md:h-full h-72 mt-5 md:mt-0 mb-5 md:mb-0'>
              <img className="h-full md:rounded-r-lg rounded-lg" src="./img/fotoimpr3.jpg" alt="" />
            </div>

          </motion.div>


        <div>

        </div>

      </div>

    <Link 
    to="/contact" 
    className='bg-lime-500 rounded p-4 cursor-pointer text-white font-bold text-xl shadow-lg shadow-black hover:scale-95'
    //onClick={() => window.scroll(0,0)}
    >Reserva Ya!</Link>

      <div className=' mb-10 mx-8 md:w-2/3 pt-20'>
        <ImageGallery items={media} />
      </div>

    </div>
  )
}

export default Gallery1