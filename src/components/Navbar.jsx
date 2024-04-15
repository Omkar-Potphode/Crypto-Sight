import { Logo } from '../assets';

const Navbar = () => {
  return (
    <>
    <nav className='py-6 absolute w-full z-10 bg-gray-500'>
        <div className='container mx-auto flex justify-between items-center'>
            <img src={Logo} alt='Logo' className='h-12'/>

            <div className='hidden md:flex items-center space-x-20 text-lg font-OpenSans'>
                <a href="#features" className="hover:text-red-300">Features</a>
                <a href="#how-it-works" className="hover:text-red-300">How it works</a>
                <a href="#about" className="hover:text-red-300">About</a>
                <a href="#faq" className="hover:text-red-300">FAQ</a>
                <button className='hover:text-blue-500'>
                    Login
                </button>
            </div>

        </div>
    </nav>
    </>
  )
}

export default Navbar;