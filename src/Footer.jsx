import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white bg-[width: 100px] w-full absolute -bottom-40 h-40  flex flex-col items-center
    pt-10 gap-10'>

      <div className="w-2/3 h-1 border-solid border-t-2 border-blue-500 p-0 "></div>

      <div className='flex flex-col md:flex-row md:gap-24 gap-10'>

        <div className='h-40 hover:scale-105 flex justify-center items-center'>
          <img className="h-full rounded-full shadow-lg shadow-black  " src="./img/logosf.png" alt="" />
        </div>

        <div className=" w-90 h-10 flex flex-col gap-5" >

          <div className='w-30 h-30 mt-5 flex flex-col items-center'>
            <p className='mb-3'>
              Contactanos para poder acompañarte
            </p>
            <p className='mb-3'>
              En tu próximo evento
            </p>
            <p>
              Y así hacerlo inolvidable.
            </p>
          </div>

          <div className='h-12 flex justify-center gap-5 '>

            <a className="h-full" href="https://instagram.com/cabinaslove?igshid=NmQ2ZmYxZjA="
              target="_blank">
              <img className="h-full rounded" src="./img/icoinstasf.jpg" alt="" />
            </a>
            <a className="h-full" href="https://www.facebook.com/cabinalove?mibextid=ZbWKwL"
              target="_blank">
              <img className="h-full rounded" src="./img/icofacesf.jpg" alt="" />
            </a>
            <a className="h-full" href="https://api.whatsapp.com/send?phone=1150412236"
              target="blank">
              <img className="h-full rounded" src="./img/icowhatsf.jpg" alt="" />
            </a>
          </div>

        </div>

        <div className='h-20 w-30 mt-32 md:mt-0 flex flex-col items-center'>
          <h3 className='text-xl font-bold mb-4'>Datos de contacto</h3>
          <p className='mb-3'>📱 11-50412236/11-41705082</p>
          <p className='mb-3'>✉ love.cabinas@gmail.com</p>
          <p className='mb-3'>⌚ Atendemos las 24 horas</p>
          <p className='mb-3'>💰 Efectivo - Mercado Pago - Transferencia</p>
        </div>

      </div>

      <div className="w-5/6 h-1 border-solid border-t-2 border-blue-500 p-0 mt-20 md:mt-5"></div>

      <div className=' flex justify-around items-center m-0 p-0'>
        <p className='p-2'>Copyright © 2024</p>
        <p className='p-2'>Coded by Simn</p>
      </div>
    </div>
  )
}

export default Footer