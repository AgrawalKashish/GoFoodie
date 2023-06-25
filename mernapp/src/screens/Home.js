import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/cart";
import Carousel from "../components/Carousel";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel/>
      <div>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
      </div>
      <Footer />
    </div>
  );
}
