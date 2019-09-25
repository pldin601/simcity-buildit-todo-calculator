import * as React from "react";
import ProductPicture from "../ProductPicture";

export default function ProduceProduct({ product, quantity }) {
  return (
    <div>
      <ProductPicture product={product} />
      Produce {quantity} of {product}.
    </div>
  );
}
