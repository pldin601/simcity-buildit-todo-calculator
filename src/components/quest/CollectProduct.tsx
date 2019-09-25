import * as React from "react";
import ProductPicture from "../ProductPicture";

export default function CollectProduct({ product, quantity }) {
  return (
    <div>
      <ProductPicture product={product} />
      Collect {quantity} of {product}.
    </div>
  );
}
