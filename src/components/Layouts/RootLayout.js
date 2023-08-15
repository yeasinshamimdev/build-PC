import Logo from '@/assets/img/logo.png';
import user from '@/assets/img/user.jpeg';
import Image from 'next/image';
import Link from 'next/link';


const RootLayout = ({children}) => {
  
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-indigo-400 to-blue-500 p-0">
        <div className="navbar-start">
        <Link href={'/'} className="btn bg-indigo-400 text-green-400 normal-case text-xl hidden lg:flex ml-2">
          <Image src={Logo} alt={'Logo'} width={60} height={50} />
        </Link>
          <div className="dropdown flex lg:hidden">
            <Link href='#' className='btn btn-ghost  text-white' >
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
               </Link>
              <ul  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href={'/'}  className="link link-hover text-white tex-xl font-sans" >Home</Link></li>
              <li><Link href={'/product'}  className="link link-hover text-white tex-xl font-sans" >Products</Link></li>
                <li><Link href={'/processor'}  className="link link-hover text-white tex-xl font-sans" >Processor</Link></li>
                <li><Link href={'/motherboard'}  className="link link-hover text-white tex-xl font-sans">Motherboard</Link></li>
                <li><Link href={'/ram'}  className="link link-hover text-white tex-xl font-sans">RAM</Link></li>
                <li><Link href={'/power-supply-unit'}  className="link link-hover text-white tex-xl font-sans">Power Supply Unit</Link></li>
                <li><Link href={'/storage'}  className="link link-hover text-white tex-xl font-sans">Storage Device</Link></li>
                <li><Link href={'/monitor'}  className="link link-hover text-white tex-xl font-sans">Monitor</Link></li>
                <li><Link href={'/others'}  className="link link-hover text-white tex-xl font-sans">Others</Link></li>
              </ul>
          </div> 
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className=' gap-6'>
            <Link href={'/'} className='btn btn-ghost text-white'>Home</Link>
            <Link href={'/product'} className='btn btn-ghost text-white'>Products</Link>
            <div className="dropdown ">
                <Link href='#' className='btn btn-ghost  text-white' >PC Components </Link>
              <ul  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href={'/processor'}  className="no-underline hover:bg-slate-600 text-white tex-xl font-sans" >Processor</Link></li>
                <li><Link href={'/motherboard'}  className="no-underline hover:bg-slate-600 text-white tex-xl font-sans">Motherboard</Link></li>
                <li><Link href={'/ram'}  className="no-underline hover:bg-slate-600 text-white tex-xl font-sans">RAM</Link></li>
                <li><Link href={'/power-supply-unit'}  className="no-underline hover:bg-slate-600 text-white tex-xl font-sans">Power Supply Unit</Link></li>
                <li><Link href={'/storage'}  className="link link-hover text-white tex-xl font-sans">Storage Device</Link></li>
                <li><Link href={'/monitor'}  className="no-underline hover:bg-slate-600 text-white tex-xl font-sans">Monitor</Link></li>
                <li><Link href={'/others'}  className="no-underline hover:bg-slate-600 text-white tex-xl font-sans">Others</Link></li>
              </ul>
            </div> 
          </div>
        </div>
        <div className="navbar-end pr-2">
          <div className='flex justify-center gap-4'>
            <Link href={"/pc-builder"} className={"btn btn-primary lg:mr-10 btn-sm lg:btn-md mt-2 md:mt-0 "}>PC Builder</Link>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  <span className="badge badge-sm indicator-item">0</span>
                </div>
              </label>
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                  <span className="font-bold text-white text-lg">0 Items</span>
                  <span className="text-info">Subtotal: $000</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image src={user} width={100} height={100} responsive alt='user image' />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link href={"/"} className="justify-between text-white no-underline hover:bg-slate-600">
                    Profile
                  </Link>
                </li>
                <li><Link href={"/"} className="no-underline text-white hover:bg-slate-600">Settings</Link></li>
                <li><Link href={"/"} className="no-underline text-white hover:bg-slate-600">Logout</Link></li>
              </ul>
            </div>  
          </div>
        </div>
      </div>
      <div>
        {children}
      </div>
      <footer className="footer bg-base-200 text-base-content font-sans">
        <div className='lg:p-10 pl-10 pt-10'>
          <Image src={Logo} alt='Logo' width={50} height={50} />
          <p>Yeasin Shamim<br/>A Full Stack Developer</p>
        </div> 
        <div className='lg:p-10 pl-10 '>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </div> 
        <div className='lg:p-10 pl-10 '>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </div> 
        <div className='lg:p-10 pl-10 pb-10'>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
        <p className='bg-base-200 text-center pb-4 pt-8 text-base-content m-0 font-sans text-xs lg:text-sm'>
          Copyright © 2023 - All right reserved by <br/>Yeasin Shamim</p>
  </div>
  );
};
export default RootLayout;