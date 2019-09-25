import * as React from "react";

export default function ProductPicture({ product }) {
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    import(`../images/${product}.png`).then(({ default: src }) =>
      setImage(src)
    );
  }, [product]);

  return <>{image && <img src={image} alt={product} />}</>;
}
