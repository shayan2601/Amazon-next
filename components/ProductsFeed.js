import Products from "./Products";

function ProductsFeed({ products }) {
  return (
    <div className="xs:-mt-10">
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-36 mx-auto">
        {products
          .slice(0, 4)
          .map(({ title, description, id, price, category, image, rating }) => (
            <Products
              title={title}
              description={description}
              id={id}
              key={id}
              price={price}
              s
              category={category}
              image={image}
              rating={rating}
            />
          ))}
        <img className="md:col-span-full" src="https:links.papareact.com/dyz" />

        <div className="md:col-span-2">
          {products
            .slice(4, 5)
            .map(
              ({ title, description, id, price, category, image, rating }) => (
                <Products
                  title={title}
                  description={description}
                  id={id}
                  key={id}
                  price={price}
                  category={category}
                  image={image}
                  rating={rating}
                />
              )
            )}
        </div>
        {products
          .slice(5, products.length)
          .map(({ title, description, id, price, category, image, rating }) => (
            <Products
              title={title}
              description={description}
              id={id}
              key={id}
              price={price}
              s
              category={category}
              image={image}
              rating={rating}
            />
          ))}
      </div>
    </div>
  );
}

export default ProductsFeed;
