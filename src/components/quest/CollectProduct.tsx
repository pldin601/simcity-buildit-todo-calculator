import * as React from "react";
import ProductPicture from "../ProductPicture";

export default function CollectProduct({ product, quantity }) {
  return (
    <div>
      Collect {quantity} of <ProductPicture product={product} />.
    </div>
  );
}
