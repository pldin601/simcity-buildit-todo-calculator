import * as React from "react";
import style from "./ProductPicture.module.css";

export default function ProductPicture({ product }) {
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    import(`../images/${product.toLowerCase()}.png`).then(({ default: src }) =>
      setImage(src)
    );
  }, [product]);

  return (
    <>
      {image !== null ? (
        <img className={style.productPicture} src={image} alt={product} />
      ) : (
        <div className={style.placeholder} />
      )}
    </>
  );
}
