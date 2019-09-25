import * as React from "react";
import ProductPicture from "../ProductPicture";

export default function ProduceProduct({ product, quantity }) {
  return (
    <div>
      Produce {quantity} of <ProductPicture product={product} />.
    </div>
  );
}
