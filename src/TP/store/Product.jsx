import { useEffect, useState } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [categories, setCategories] = useState([]);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
        setAllProducts(json);
      });
  };

  const getCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((json) => setCategories(json));
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = document.getElementById("search").value;
    setInputValue(inputValue);

    const filtered = allProducts.filter((product) =>
      product.title.includes(inputValue) ||
      product.id.toString().includes(inputValue) ||
      product.description.includes(inputValue)
    );

    setProducts(filtered);
  };

  const filterByCategory = (category) => {
    const filtered = allProducts.filter((product) => product.category === category);
    setProducts(filtered);
  };

  const resetFilter = () => {
    setProducts(allProducts);
  };

  return (
    <>
      <div className="container-fluid m-5 w-75">
        <h1>Liste des Produits:</h1>

        <div className="form-group mb-3">
          <input type="text" id="search" className="form-control mb-2" />
          <button className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>

       
        <div className="mb-3">
          <button className="btn btn-secondary me-2" onClick={resetFilter}>
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className="btn btn-outline-success me-2 mb-2"
              onClick={() => filterByCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Image</th>
              <th>Rating/Vote</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>
                  <img src={product.image} style={{ width: "100px", height: "100px" }} alt={product.title}
                  />
                </td>
                <td className="badge rounded-pill bg-primary mt-5 ms-4">
                  {product.rating.rate} / {product.rating.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
