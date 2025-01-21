
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import Image from "next/image";
import Update from "./update";



export default function Footer(){
    return(
        <main className="bg-[#F0F0F0] relative p-7 md:px-12 w-full h-full   md:h-[400px] flex flex-col  justify-start items-center mt-32">
          
           <span className="absolute  top-[-60px]">
           <Update />
           </span>
           
        <div className="w-full h-[60%] flex flex-col md:flex-row justify-between items-start mt-52  md:mt-20 border-b-2 pb-5">
             {/* top div */}
             <div className="w-full md:w-[40%] mt-5">
                <h1 className="text-2xl md:text-3xl font-extrabold">SHOP.CO</h1>
                <p className="mt-2 text-sm text-gray-700 font-sans ">We have clothes that suits your style and which you&apos;re proud to wear. From women to men.</p>
                  <div className="flex space-x-2 mt-3">
                         <FaTwitter className="text-xl "/>
                        <BsFacebook className="text-xl"/>
                       <FaInstagram className="text-xl"/>
                    <FaSquareGithub className="text-xl"/>
                  </div>
             </div>
             {/* bottom div */}
             <div className=" w-full grid grid-cols-2 md:grid-cols-4 justify-between md:place-items-center ">
                {/* box1 */}
             <div className="mt-4 ">
                <h2 className="text-xl font-bold ">COMPANY</h2>
                <ul className="space-y-2  text-gray-700">
                    <li className="font-sans">About</li>
                    <li className="font-sans">Features</li>
                    <li className="font-sans">Works</li>
                    <li className="font-sans">Career</li>
                </ul>
             </div>
             {/* box 2 */}
             <div>
                <h2 className="text-xl font-bold  mt-4">HELP</h2>
                <ul  className="space-y-2  text-gray-700">
                    <li className="font-sans">Customer Support</li>
                    <li className="font-sans">Delivery Details</li>
                    <li className="font-sans">Terms & Conditions</li>
                    <li className="font-sans">Privacy Policy</li>
                </ul>
             </div>
             {/* box3 */}
             <div >
                <h2 className="text-xl font-bold  mt-4">FAQ</h2> 
                <ul className="space-y-2  text-gray-700">
                    <li className="font-sans">Account</li>
                    <li className="font-sans">Manage Deliveries</li>
                    <li className="font-sans">Orders</li>
                    <li className="font-sans">Payments</li>
                </ul>
             </div>
             {/* box4 */}
           <div >
                <h2 className="text-xl  font-bold mt-4">RESOURCES</h2>
                <ul className="space-y-2  text-gray-700">
                    <li className="font-sans">Free eBooks</li>
                    <li className="font-sans">Development Tutorial</li>
                    <li className="font-sans">How to - Blog</li>
                    <li className="font-sans">Youtube Playlist </li>
                </ul>
             </div>
             {/* complete */}
             </div>
        </div>
        <div className=" w-full flex flex-col md:flex-row items-center mt-5 md:mt-7 justify-between">
            <p className="text-xs md:text-sm text-gray-700 font-sans">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="flex mt-4 md:mt-0">
                <Image src={"/Visa.png"}     
                className="w-[50px]" width={100} height={100} alt="visa"></Image>
                <Image src={"/Badge.png"} 
                className="w-[50px]" width={100} height={100} alt="visa"></Image>
                <Image src={"/paypal.png"}   
                className="w-[50px]" width={100} height={100} alt="visa"></Image>
                <Image src={"/applepay.png"}   
                className="w-[50px]" width={100} height={100} alt="visa"></Image>
                <Image src={"/gpay.png"}     
                className="w-[50px]" width={100} height={100} alt="visa"></Image>
            </div>
        </div>
        
        </main>
    )
}