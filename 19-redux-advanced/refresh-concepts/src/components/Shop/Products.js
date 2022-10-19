import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector } from "react-redux";
const Products = (props) => {
  const products = useSelector((state) => state.products.products);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products ? (
          products.map((p) => (
            <ProductItem
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              description={p.description}
            />
          ))
        ) : (
          <h1>No Producst to Show</h1>
        )}
      </ul>
    </section>
  );
};

export default Products;
