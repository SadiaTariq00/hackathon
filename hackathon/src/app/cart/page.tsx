

import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Delete, Minus, Plus } from "lucide-react";
import Image from "next/image";

interface Icart {
  imageurl: string;
  title: string;
  id: number;
  size: string;
  color: string;
  price: string;
}

const cartItem: Icart[] = [
  {
    imageurl: "/shirt7.png",
    title: "Gradient Graphic T-shirt",
    id: 1,
    size: "Large",
    color: "White",
    price: "$145",
  },
  {
    imageurl: "/shirt2.png",
    title: "Checkered Shirt",
    id: 2,
    size: "Medium",
    color: "Red",
    price: "$180",
  },
  {
    imageurl: "/pant.png",
    title: "Skinny Fit Jeans",
    id: 3,
    size: "Large",
    color: "Blue",
    price: "$240",
  },
];

export default function Cart() {
  return (
    <>
      <div className="pl-5">
        <Breadcrumb />
        <h1 className="text-2xl font-bold mt-2">Your Cart</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start gap-6 mt-6 px-5">
        {/* Left Section */}
        <div className="w-full md:w-[700px] border rounded-lg bg-white shadow-md">
          {cartItem.map((item) => {
            return (
              <div
                className="flex justify-between items-center p-4 border-b last:border-0"
                key={item.id}
              >
                <div className="flex gap-4 items-start">
                  <Image
                    src={item.imageurl}
                    alt={item.title}
                    className="rounded-lg"
                    width={100}
                    height={100}
                  />
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                    <p className="font-bold text-lg">{item.price}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <Delete className="text-red-500 cursor-pointer" />
                  <div className="flex items-center justify-between bg-gray-100 rounded-full w-[100px] h-[40px] px-3 text-gray-600">
                    <Minus className="cursor-pointer" />
                    <span>1</span>
                    <Plus className="cursor-pointer" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[400px] border rounded-lg bg-white shadow-md p-5">
          <h1 className="text-xl font-bold mb-4">Order Summary</h1>
          <div className="space-y-3">
            <p className="flex justify-between text-gray-700">
              Subtotal <span>$565</span>
            </p>
            <p className="flex justify-between text-gray-700">
              Discount (-20%) <span className="text-red-500">-$113</span>
            </p>
            <p className="flex justify-between text-gray-700">
              Delivery Fee <span>$15</span>
            </p>
            <p className="flex justify-between font-bold text-lg">
              Total <span>$467</span>
            </p>
          </div>
          <div className="flex mt-4">
            <input
              className="bg-gray-100 w-full py-2 px-4 rounded-xl text-gray-600 outline-none"
              placeholder="Add promo code"
            />
            <Button className="rounded-full">Apply</Button>
          </div>
          <Button className="w-full mt-4 rounded-full bg-black text-white py-3">
            Go to Checkout →
          </Button>
        </div>
      </div>
    </>
  );
}
