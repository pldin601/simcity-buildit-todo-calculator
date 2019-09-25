import * as React from "react";
import ProductPicture from "../ProductPicture";

export default function ProduceProduct({ product, quantity }) {
  return (
    <div>
      Start production of {quantity} of <ProductPicture product={product} />.
    </div>
  );
}
