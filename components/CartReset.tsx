"use client";

import { useEffect } from "react";
import { useAddToCartStore } from "@/stores/add_to_cart_store";

export default function CartResetter() {
  const resetCart = useAddToCartStore((state) => state.resetCart);

  useEffect(() => {
    resetCart();
  }, [resetCart]);

  return null;
}
