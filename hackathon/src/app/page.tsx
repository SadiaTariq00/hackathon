import React from "react";

import Hero from "./components/Hero";
import Brands from "./components/Brands";

import Dressstyle from "./components/Dressstyle";
import Products from "./products/page";
import TopSelling from "./products/Selling";
import CustomerCarousel from "@/components/Happycustomer";
import ProductCards from "./Product/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Brands />
      <Products />
      <TopSelling />
      <ProductCards/>
      <Dressstyle />
      <CustomerCarousel />
    </div>
  );
}
