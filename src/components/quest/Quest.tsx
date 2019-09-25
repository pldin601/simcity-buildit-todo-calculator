import * as React from "react";
import ProduceProduct from "./ProduceProduct";
import CollectProduct from "./CollectProduct";

export default function Quest({ log }) {
  return (
    <div>
      {React.Children.toArray(
        log.map(({ product, quantity, message }) => {
          if (message === "START") {
            return <ProduceProduct product={product} quantity={quantity} />;
          }
          return <CollectProduct product={product} quantity={quantity} />;
        })
      )}
    </div>
  );
}
