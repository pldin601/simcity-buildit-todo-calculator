import * as React from "react";
import { toUpper, first } from "lodash";
import style from "./ProductPicture.module.css";

export default function ProductPicture({ product }) {
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    import(`../images/${product.toLowerCase()}.png`).then(
      ({ default: src }) => setImage(src),
      () => {}
    );
  }, [product]);

  const firstBigLetter = toUpper(first(product));

  return (
    <span title={product}>
      {image !== null ? (
        <img className={style.productPicture} src={image} alt={product} />
      ) : (
        <div className={style.placeholder}>{firstBigLetter}</div>
      )}
    </span>
  );
}
