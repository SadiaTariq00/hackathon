// import Image from "next/image";
// import Link from "next/link";
// import { FaStar } from "react-icons/fa";

// interface Iproducts{
//     title:string,
//     price:string,
//     id:number
//     rating?:string,
//     old_price?:string,
//     img_url:string,
//     discount?:string
// }

// const product:Iproducts[] = [
//     {
//      title:"T-shirt with Tape Details",
//      id:1,
//      price:"$120",
//      img_url:"/shirt1.png",
//      rating:"4.5/5",
//     },
//     {
//      title:"Skinny Fit Jeans",
//      id:1,
//      price:"$240",
//      img_url:"/pant.png",
//      old_price:"$260",
//        rating:"3.5/5",
//        discount:"-20%"
//     },
//     {
//      title:"Checkered Shirt",
//      id:1,
//      price:"$180",
//      img_url:"/shirt2.png",
//      rating:"4.5/5",
//     },
//     {
//      title:"Sleeve Striped T-shirt  ",
//      id:1,
//      price:"$130",
//      img_url:"/shirt3.png",
//      old_price:"$160",
//      rating:"4.5/5",
//       discount:"-20%",
//     }
// ]
// const star = [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>]

// export default function Products(){
//     return(
//         <div className="w-full h-full sm:h-[500px] mt-10">
//             <h1 className="text-3xl md:text-4xl font-extrabold text-center">NEW ARRIVALS</h1>
//             <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
//                 {
//                     product.map((data)=>{
//                         return(
//                               <div>
//                                 <Link href={`/products/${data.id}`}>
//                                   <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
//                                   <Image src={data.img_url} alt={data.title}
//                                   className="w-full h-full rounded-[20px]"
//                                  width={200} height={200}></Image>
                                 
//                                   </div>
//                                   </Link>
//                                 <div>
//                                 <p className="text-lg mt-2 font-bold">{data.title}</p>
//                                 <p className="flex text-yellow-400">{star} 
//                                     <span className="text-gray-700 ml-1 text-sm">{data.rating}</span>
//                                 </p>
                               
//                                 <p  className="font-bold mt-1">{data.price} <span className="text-gray-400 font-bold line-through"> {data.old_price} </span>
//                                 <span className="text-red-600 font-normal text-xs ml-4 bg-red-100  rounded-xl">{data.discount}</span>
//                                 </p>
//                                 </div>
//                               </div>
//                         )
//                     })
//                 }
//             </div>
//             <button className=" mt-7 w-[240px]  h-10 border-2 rounded-2xl  ml-20 md:ml-[600px] hover:bg-slate-300">View All</button>
//         </div>
//     )
// }
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface Iproducts {
  title: string;
  price: string;
  id: number;
  rating?: string;
  old_price?: string;
  img_url: string;
  discount?: string;
}

const products: Iproducts[] = [
  {
    title: "T-shirt with Tape Details",
    id: 1,
    price: "$120",
    img_url: "/shirt1.png",
    rating: "4.5/5",
  },
  {
    title: "Skinny Fit Jeans",
    id: 1,
    price: "$240",
    img_url: "/pant.png",
    old_price: "$260",
    rating: "3.5/5",
    discount: "-20%",
  },
  {
    title: "Checkered Shirt",
    id: 1,
    price: "$180",
    img_url: "/shirt2.png",
    rating: "4.5/5",
  },
  {
    title: "Sleeve Striped T-shirt",
    id: 1,
    price: "$130",
    img_url: "/shirt3.png",
    old_price: "$160",
    rating: "4.5/5",
    discount: "-20%",
  },
];

export default function Products() {
  return (
    <div className="w-full h-full sm:h-[500px] mt-10  max-w-screen-2xl mx-auto ">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center">
        NEW ARRIVALS
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
        {products.map((data) => {
          const ratingValue = parseFloat(data.rating || "0");
          return (
            <div key={data.id} className="mb-6 md:mb-0">
              <Link href={`/products/${data.id}`}>
                <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                  <Image
                    src={data.img_url}
                    alt={data.title}
                    className="w-full h-full rounded-[20px]"
                    width={200}
                    height={200}
                  />
                </div>
              </Link>
              <div>
                <p className="text-lg mt-2 font-bold">{data.title}</p>
                <p className="flex text-yellow-400">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={index < Math.round(ratingValue) ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                  <span className="text-gray-700 ml-1 text-sm">{data.rating}</span>
                </p>
                <p className="font-bold mt-1">
                  {data.price}{" "}
                  <span className="text-gray-400 font-bold line-through">
                    {data.old_price}
                  </span>
                  <span className="text-red-600 font-normal text-xs ml-4 bg-red-100 rounded-xl">
                    {data.discount}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="mt-7 w-[240px] h-10 border-2 rounded-2xl ml-20 md:ml-[600px] hover:bg-slate-300">
        View All
      </button>

    </div>
    
  );
}
