import Logo from '@/assets/img/logo.png';
import user from '@/assets/img/user.jpeg';
import Image from 'next/image';
import Link from 'next/link';


const RootLayout = ({children}) => {
  
  return (
    <div>
      <div className="navbar bg-indigo-400 p-0">
        <div className="navbar-start">
        <Link href={'/'} className="btn bg-indigo-400 text-green-400 normal-case text-xl xs:hidden lg:flex ml-2">
          <Image src={Logo} alt={'Logo'} width={50} height={40} />
        </Link>
        </div>
        <div className="navbar-center">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Homepage</a></li>
              <li><a>Portfolio</a></li>
              <li><a>About</a></li>
            </ul>
          </div> 
          <div className='sm:hidden lg:flex gap-6'>
            <Link href={'/'} className='btn btn-ghost text-white'>Home</Link>
            <div className="dropdown ">
                <Link href='#' className='btn btn-ghost  text-white' >Pc </Link>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href={'/'} className="underline" >Homepage</Link></li>
                <li><Link href={'/'}  className="underline">Portfolio</Link></li>
                <li><Link href={'/'}  className="underline">About</Link></li>
              </ul>
            </div> 
          </div>
        </div>
        <div className="navbar-end pr-2">
          <div className='flex justify-center gap-4'>
            <Link href={"/"} className={"btn btn-primary mr-10"}>Build PC</Link>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image src={user} width={100} height={100} alt='user image' />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link href={"/"} className="justify-between">
                    Profile
                  </Link>
                </li>
                <li><Link href={"/"}>Settings</Link></li>
                <li><Link href={"/"}>Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        {children}
      </div>
      <footer className="footer bg-base-200 text-base-content">
        <div className='p-10'>
          <Image src={Logo} alt='Logo' width={50} height={50} />
          <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
        </div> 
        <div className='p-10'>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </div> 
        <div className='p-10'>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </div> 
        <div className='p-10'>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
  </div>
  );
};
export default RootLayout;