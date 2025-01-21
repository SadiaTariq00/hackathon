// "use client"
// import Image from "next/image";
// import { FaStar } from "react-icons/fa";
// import { useParams } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Check, Minus, Plus } from "lucide-react";

// const star = [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>]

// interface Iproducts{
//     title:string,
//     price:string,
//     id:number
//     rating?:string,
//     old_price?:string
//     img_url:string
//     img1:string,
//     img2:string,
//     img3:string,
// }

// let product:Iproducts[] = [
//     {
//      title:"T-SHIRT WITH TAPE DETAILS",
//      id:1,
//      price:"$120",
//      img_url:"/product1.png",
//      img1:"/detail1.png",
//       img2:"/detail2.png",
//      img3:"/detail3.png",
    
//     },
//     {
//      title:"SKINNY FIT JEANS",
//      id:2,
//      price:"$120",
//      img_url:"/product2.png",
//      old_price:"$200",
//      img1:"/detail1.png",
//      img2:"/detail2.png",
//      img3:"/detail3.png",
    
//     },
//     {
//      title:"CHECKERED SHIRT",
//      id:3,
//      price:"$120",
//      img_url:"/product3.png",
//      img1:"/detail1.png",
//      img2:"/detail2.png",
//      img3:"/detail3.png",
    
//     },
//     {
//      title:"SLEEVE STRIPED T-SHIRT",
//      id:4,
//      price:"$120",
//      img_url:"/product4.png",
//      old_price:"$200",
//      img1:"/detail1.png",
//      img2:"/detail2.png",
//      img3:"/detail3.png",
    

//     }
// ]

// export default function Pro_Detail(){
//     const params = useParams();
//     const id = params.id 
//     const item = product.find((item)=> item.id === Number(id))
//     if(!item){
//         return <h1>Product not found</h1>
//     }

//     return(
//         <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0">
//             {/* left */}
//               <div className=" flex sm:flex-col  justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
//                 {/* images */}
//                 <Image src={item.img1} className=" w-[100px] sm:w-full h-[100px] sm:h-[150px] border-2 border-black rounded-3xl" alt="productdetaile" width={200} height={400}></Image>
//                 <Image src={item.img2} className=" w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt="productdetaile" width={200} height={400}></Image>
//                 <Image src={item.img3} className=" w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt="productdetaile" width={200} height={400}></Image>
//               </div>
//                {/* mid div */}
//                <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
//                <Image src={item.img3} alt="productdetaile" className="w-full h-[95%]" width={200} height={400}></Image>
//                </div>
//                {/* right div */}
//                <div className=" w-full sm:w-[600px] h-[500px] mt-3 order-3">
//                    <h1 className="text-2xl md:text-3xl font-bold">One Life Graphic T-shirt</h1>
//                    <div className="flex text-yellow-400">
//                       {star}
//                    </div>
//                    <p className="font-bold mt-1">{item.price} <span>{item.old_price}</span> </p>
//                    <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
//                    {/* select color */}
//                    <div className=" mt-5">
//                     <p className="text-gray-500">Select Colors</p>
//                     <div className="flex space-x-3 mt-2">
//                     <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full  flex justify-center items-center"><Check className="text-white opacity-0  hover:opacity-100 cursor-pointer"/></div>
//                       <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex justify-center items-center"><Check className="text-white opacity-0  hover:opacity-100 cursor-pointer"/></div>
//                       <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex justify-center items-center"><Check className="text-white opacity-0  hover:opacity-100 cursor-pointer"/></div>
//                     </div>
//                    </div>
//                    {/* Choose Size */}
//                    <div className="mt-4">
//                     <p className="text-gray-500">Choose Size</p>
//                     <div className="flex space-x-3 mt-2">  
//                     <div className="w-[80px]   h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Small</div>
//                       <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Medium</div>
//                       <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Large</div>
//                       <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">X-Large</div>
//                     </div>
//                    </div>
//                     {/* BTNS */}
//                    <div className="flex justify-start items-center mt-7 space-x-4">
//                    <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">
//                     <Minus/>
//                     1
//                     <Plus/>
//                    </div>
//                    <Button className="bg-black text-white w-[300px]">Add to Cart</Button>
//                </div>
//                </div>
              
              

//         </div>
//     )
// }



"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";

import NewProducts from "@/components/newProducts";
import CustomerTestimonials from "@/components/reviews";
import { BreadcrumbCollapsed } from "@/app/components/Breadcrumb";



interface IProduct {
  title: string;
  price: string;
  id: number;
  rating?: number;
  old_price?: string;
  img_url: string;
  img1: string;
  img2: string;
  img3: string;
}

const products: IProduct[] = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 1,
    price: "$120",
    img_url: "/product1.png",
    img1: "/detail1.png",
    img2: "/detail2.png",
    img3: "/detail3.png",
    rating: 4.5,
  },
  {
    title: "SKINNY FIT JEANS",
    id: 2,
    price: "$120",
    old_price: "$200",
    img_url: "/product2.png",
    img1: "/detail1.png",
    img2: "/detail2.png",
    img3: "/detail3.png",
    rating: 4.0,
  },
  {
    title: "CHECKERED SHIRT",
    id: 3,
    price: "$120",
    img_url: "/product3.png",
    img1: "/detail1.png",
    img2: "/detail2.png",
    img3: "/detail3.png",
    rating: 3.5,
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 4,
    price: "$120",
    old_price: "$200",
    img_url: "/product4.png",
    img1: "/detail1.png",
    img2: "/detail2.png",
    img3: "/detail3.png",
    rating: 4.8,
  },
];

export default function ProductDetail() {
  const params = useParams();
  const id = params?.id;

  // Find the product based on the `id` parameter
  const product = products.find((item) => item.id === Number(id));
  if (!product) {
    return <h1 className="text-center text-xl font-bold mt-10">Product not found</h1>;
  }

  return (
<>
<BreadcrumbCollapsed/>

    <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0 max-w-screen-2xl  mx-auto">
      {/* Left Section */}
      <div className="flex sm:flex-col justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
        <Image
          src={product.img1}
          className="w-[100px] sm:w-full h-[100px] sm:h-[150px] border-2 border-black rounded-3xl"
          alt={`${product.title} detail`}
          width={200}
          height={400}
        />
        <Image
          src={product.img2}
          className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3"
          alt={`${product.title} detail`}
          width={200}
          height={400}
        />
        <Image
          src={product.img3}
          className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3"
          alt={`${product.title} detail`}
          width={200}
          height={400}
        />
      </div>

      {/* Middle Section */}
      <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
        <Image
          src={product.img3}
          alt={`${product.title}`}
          className="w-full h-[95%]"
          width={200}
          height={400}
        />
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3">
        <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
        <div className="flex text-yellow-400">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={index < Math.round(product.rating || 0) ? "text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <p className="font-bold mt-1">
          {product.price}{" "}
          {product.old_price && <span className="line-through text-gray-500">{product.old_price}</span>}
        </p>
        <p>
          This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable
          fabric, it offers superior comfort and style.
        </p>

        {/* Select Color */}
        <div className="mt-5">
          <p className="text-gray-500">Select Colors</p>
          <div className="flex space-x-3 mt-2">
            <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full flex justify-center items-center">
              <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
            </div>
            <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex justify-center items-center">
              <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
            </div>
            <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex justify-center items-center">
              <Check className="text-white opacity-0 hover:opacity-100 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Choose Size */}
        <div className="mt-4">
          <p className="text-gray-500">Choose Size</p>
          <div className="flex space-x-3 mt-2">
            <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
              Small
            </div>
            <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
              Medium
            </div>
            <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
              Large
            </div>
            <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
              X-Large
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-start items-center mt-7 space-x-4">
          <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
            <Minus />
            1
            <Plus />
          </div>
          <Button className="bg-black text-white w-[300px]">Add to Cart</Button>
        </div>
      </div>
  
    </div>
    <CustomerTestimonials/>
    <NewProducts/>
    </>
  );
}
