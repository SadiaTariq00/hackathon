




// import { getProducts } from '@/sanity/getproducts';
// import Image from 'next/image';



// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   category: string;
//   discountPercent: number;
//   isNew: boolean;
//   imageUrl: string;
//   colors: string[];
//   sizes: string[];
// }

// const ProductPage = async () => {
//   const products: Product[] = await getProducts(); // Define the type here

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="border rounded-lg shadow-lg p-6 flex flex-col items-center justify-between bg-white hover:shadow-xl transition-shadow duration-300"
//           >
//             <div className="w-full h-56 relative mb-4">
//               <Image
//                 src={product.imageUrl}
//                 alt={product.name}
//                 fill
//                 className="object-cover rounded-lg"
//               />
//             </div>
//             <h2 className="text-lg font-semibold mb-2 text-center">{product.name}</h2>
//             <p className="text-gray-600 text-xs text-start mb-2">{product.description}</p>
//             <p className="font-bold text-sm text-center">${product.price}</p>
//             <p className="text-sm text-gray-500 text-center">Category: {product.category}</p>
//             <p className="text-sm text-red-500  text-center">
//               Discount: {product.discountPercent}%
//             </p>
//             {product.isNew && <p className="text-green-500 font-semibold text-center">New Arrival!</p>}
//             <p className="text-sm text-gray-500 text-center">Colors: {product.colors.join(', ')}</p>
//             <p className="text-sm text-gray-500 text-center">Sizes: {product.sizes.join(', ')}</p>
      
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;



"use client"
import React, { useEffect, useState } from "react";
import { createClient } from '@sanity/client';
import Image from "next/image";

const client = createClient({
  projectId: "9f34m2aa",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  productImage: {
    assest: {
      _ref: string;
    };
  };
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
  *[type == "product"]{
  _id,
  title,
  price,
  description,
  discountPercentage,
  "imageUrl": productImage.assest->url,
  tags,
  }
  
    `;
      const data = await client.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching:", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };


  const truncateDescription = (description: string) => {
    return description.length > 100 ? description.substring(0, 100) + "..." : description;
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-600 mt-4 mb-4 ">
        Products From API&aopos;s Data
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>

              <p className="text-slate-800 mt-2 text-sm">
                {truncateDescription(product.description)}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-slate-600 font-bold"> ${product.price}</p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-blue-900">
                      {product.discountPercentage}% OFF
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-slate-300 text-black rounded-full x-2 py-1 "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="mt-4 w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-700"
              onClick={() => addToCart(product)}
              >
              Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-slate-200 p-6 rounded-lg shadow-md">
<h2 className="text-lg font-black text-red-800">Cart Summary</h2>
{cart.length > 0 ? (
  <ul className="space-y-4">
    {cart.map((item, index) => (
      <li
      key={index}
      className="flex justify-between items-center bg-white shdow-sm p-4 rounded-md"

      >
        <div>
          <p className="font-medium text-slate-700">{item.title}</p>
        <p className="text-sm text-blue-700">${item.price.toFixed(2)}</p>
        </div>
<Image
src={item.imageUrl}
alt={item.title}
width={50}
height={50}
className="rounded-md"

/>
      </li>
    ))}

  </ul>
) : (
  <p className="text-black text-center">Your Cart Is Empty</p>
)}
      </div>
    </div>
  );
};

export default ProductCards;
