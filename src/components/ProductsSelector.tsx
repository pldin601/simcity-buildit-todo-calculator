import * as React from "react";
import ProductPicture from "./ProductPicture";
import products from "../domain/products";
import { Order } from "../domain/order";
import { Dispatch } from "react";
import { OrderReducerAction } from "../use/orderReducer";

export interface ProductsSelectorProps {
  order: Order;
  index: number;
  dispatch: Dispatch<OrderReducerAction>;
}

export const ProductsSelector: React.FC<ProductsSelectorProps> = ({
  order,
  index,
  dispatch
}) => {
  const productsToAdd = React.useMemo(() => {
    return products.filter(it => !(it in order));
  }, [order]);

  const handleProductClick = React.useCallback(
    (product: any) => () => {
      dispatch({ type: "ADD_TO_ORDER", index, product });
    },
    [dispatch]
  );

  return (
    <div className={"productIcons"}>
      {React.Children.toArray(
        productsToAdd.map(product => (
          <span className={"productItem"} onClick={handleProductClick(product)}>
            <ProductPicture product={product} />
          </span>
        ))
      )}
    </div>
  );
};
