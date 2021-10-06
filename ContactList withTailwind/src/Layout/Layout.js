import { useState } from 'react'
import Navigation from '../components/Navigation'
import {BiRightArrowAlt} from 'react-icons/bi'


function Layout({ children }) {
    const [isShow, setIsShow] = useState(false)
    const showMenu = () => {
        setIsShow(!isShow)

    }
    return (
        <main className='md:h-screen w-full flex'>

            <span onClick={showMenu} className="bg-gray-300 md:hidden opacity-60 text-lg w-12 h-12 flex items-center justify-end  transition-all  rounded-full text-black absolute top-1/2 -left-7  p-1 cursor-pointer "> <BiRightArrowAlt className="text-2xl "/> </span>

            
               
                <div onClick={showMenu} className={`md:hidden fixed  transition-all  w-2/3 z-10 h-full border-r-2 bg-red-800 text-gray-300 ${isShow?'left-0':'-left-80'}`} >
                    <Navigation />
                </div>
            
            <div className="md:w-2/12  hidden md:block h-full border-r-2 bg-red-800 text-gray-300 " >
                <Navigation />
            </div>

            <div className="md:w-10/12 w-full h-full min-h-screen bg-gray-200" >
                {children}
            </div>

        </main>
    )
}

export default Layout
