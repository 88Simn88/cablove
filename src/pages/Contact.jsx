import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target

        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.send(
            //datos a modificar
          //  SERVICE_ID= "service_g8lrib3"
          //  TEMPLATE_ID= "template_cxcmmlu"
          "service_g8lrib3",
            "template_cxcmmlu",
            {
                from_name: form.name,
                to_name: 'Samuel',
                from_email: form.email,
                to_email: 'love.cabinas@gmail.com', 
                message: form.message,

            },
        
            "bpbvUbEmwGZ3Okub0"
            //PUBLIC_KEY="bpbvUbEmwGZ3Okub0"
        
        )
            .then(() => {
                setLoading(false)
                alert('Gracias. Nos contactaremos con usted lo antes posible')

                setForm({
                    name: '',
                    email: '',
                    message: '',
                })
            }, (error) => {
                setLoading(false)

                console.log(error)

                alert('Algo no funcionó')
            }
            )

    }

    return (
        <section >
            <div className="h-screen bg-cover bg-center  relative bg-[url(./img/fiesta.jpg)]">

                <div className='' >
                    <h3 className='font-bold text-4xl text-white absolute z-[1] top-40 left-10 md:left-20'>Contacto</h3>

                    <p className='text-2xl text-white absolute z-[1] bottom-20 left-10 md:left-20'> Hablemos sobre como va a ser tu próximo Evento...</p>
                </div>

                <div className='absolute t-0 w-screen h-screen bg-[#000000bb]'> </div>

            </div>


            <div className=' h-fit bg-gradient-to-b from-black via-blue-500 to-black flex flex-col pb-10 '>
                <div className='h-10 mt-12 mb-12 flex m-auto gap-10'>
                    <div className='h-20'>
                        <img className="h-full" src="./img/logosf.png" alt="" />
                    </div>

                    <div className='flex flex-col'>
                        <p className='text-white text-center font-bold text-2xl pb-4'>
                            ¡Reserva ya!
                        </p>
                        <h3 className='text-white text-center text-2xl '>
                            Contacto</h3>
                    </div>



                </div>


                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className=' w-3/4 h-1/2 relative
                m-auto mt-12 flex flex-col gap-8'
                >

                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Tu nombre</span>

                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder='¿Cuál es tu nombre?'
                            className=' py-4 px-6 rounded-lg
                        outlined-none border-none font-medium shadow-lg shadow-black'
                        />
                    </label>

                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>
                            Tu email
                        </span>

                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder='¿Cuál es tu email?'
                            className=' py-4 px-6 rounded-lg
                        outlined-none border-none font-medium shadow-lg shadow-black'
                        />
                    </label>

                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>
                            Tu mensaje (Dejanos fecha y localidad del evento y un número de whatsapp así nos comunicamos con vos)
                                
                        </span>

                        <textarea name="message" rows="7"
                            value={form.message}
                            onChange={handleChange}
                            placeholder='Detalles de reserva'
                            className=' py-4 px-6 rounded-lg
                        outlined-none border-none font-medium shadow-lg shadow-black'
                        />

                    </label>

                    <button
                        type='submit'
                        className='bg-lime-400 py-3 px-8 outline-none text-white
                    font-bold shadow-md shadow-primary rounded-xl hover:scale-95'>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>
            </div>
        </section>

    )
}

export default Contact