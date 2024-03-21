import React, { useState } from 'react'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {
    let Links =[
      {name:"Fotocabina",link:"fotocabina"},
      {name:"Plataforma 360",link:"plataforma360"},
      {name:"Tunel Led",link:"tunelled"},
      {name: "Contacto", link:"contact"}
    
    //   {name:"CONTACT",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10' >
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        {/* <ion-icon name="logo-ionic"></ion-icon> */}
        </span>
       <Link to={"/"} 
       //onClick={() => window.scroll(0,0)} 
       className='flex gap'>
        <div className='h-12'><img className="h-full rounded-full shadow shadow-black" src="./img/logo.jpg" alt="" /></div>
       <div className='flex items-center pl-2'>
         Cabinas Love
         </div>
         </Link> 
        
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      {/* <ion-icon name={open ? 'close':'menu'}></ion-icon> */}
        {
            open ?
            <AiOutlineClose fontSize={28} />
            : <HiMenuAlt4 fontSize={28} />
  }
      {/* <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=> setToggleMenu(true)} /> */}
      </div>

      <ul className={`mt-0 pt-5 md:pt-1 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white rounded md:z-auto z-[-1] left-0 w-2/3 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'
            onClick={()=>setOpen(!open)}>
             <Link className='text-white hover:text-black p-3 rounded hover:scale-95 duration-500 bg-gradient-to-b from-[#000000cc] to-blue-500 shadow shadow-black ' 
          //<Link className='text-gray-800 hover:text-black hover:bg-h-10 hover:border-solid hover:border-t-2 hover:border-blue-500 duration-500 bg-gradient-to-r from-black via-blue-500 to-black' 

          // onClick={() => window.scroll(0,0)}
             to={`/${link.link}`}>{link.name}</Link>
            </li>
          ))
        }
      
      </ul>
      </div>
    </div>
  )
}

export default Navbar