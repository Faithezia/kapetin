"use client";
import React from "react";
import Image from "next/image";
import { pastryList, sandwichList } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useAddToCartStore } from "@/stores/add_to_cart_store";
import { toPascalCase } from "@/utils/text-formatter";

const SandwichList = () => {
  const { addToCartItem, items } = useAddToCartStore();

  return (
    <div className="flex flex-col p-5">
      <div className="flex flex-row items-end content-end gap-2 mb-5">
        <Image
          alt=""
          src={"/menu_images/sandwhich.png"}
          width={50}
          height={50}
        />
        <h1 className="text-3xl font-bold">SANDWICH</h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {sandwichList.map((sandwich, i) => {
          const isAvailable = sandwich.quantity > 1;
          const isAddedToCart = items.some(
            (e) => e.id === sandwich.id && e.category === sandwich.category,
          );
          return (
            <div
              className="h-80 w-full border-2 rounded-2xl overflow-hidden flex flex-col"
              key={i}
            >
              <div className="relative h-[70%] w-full">
                <Image
                  alt=""
                  src={sandwich.imageSrc}
                  fill
                  className="object-cover"
                  sizes="100%"
                  loading="eager"
                />
              </div>
              <div className="h-[40%] p-4">
                <h2 className="font-bold text-lg line-clamp-1">
                  {toPascalCase(sandwich.name)}
                </h2>
                <p
                  className={cn(
                    "text-sm font-medium",
                    isAvailable ? "text-gray-600" : "text-red-500",
                  )}
                >
                  {isAvailable ? "Available" : "Not-available"}
                </p>
                <div className="flex justify-between py-3">
                  <p className="font-bold">₱{sandwich.price.toFixed(2)}</p>
                  <Button
                    className="bg-[#A47251] cursor-pointer"
                    onClick={() => addToCartItem(sandwich, sandwich.category)}
                    disabled={isAddedToCart}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SandwichList;
