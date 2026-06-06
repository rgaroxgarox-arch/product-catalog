import { useEffect, useState } from "react";
import api from "./services/api";

import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import Pagination from "./components/Pagination";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [selectedCategory,
    setSelectedCategory] =
    useState("all");

  const [selectedProduct,
    setSelectedProduct] =
    useState(null);

  const [sortOrder, setSortOrder] =
    useState("");

  const [currentPage,
    setCurrentPage] =
    useState(1);

  const productsPerPage = 8;

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response =
        await api.get("/products");

      setProducts(response.data);
    } catch {
      setError("Gagal mengambil data");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response =
        await api.get(
          "/products/categories"
        );

      setCategories(response.data);
    } catch {
      console.log("Error kategori");
    }
  };

  const handleAddCart = (product) => {
    toast.success(
      `${product.title} ditambahkan`
    );
  };

  let filteredProducts = products.filter(
    (product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  if (selectedCategory !== "all") {
    filteredProducts =
      filteredProducts.filter(
        (product) =>
          product.category ===
          selectedCategory
      );
  }

  if (sortOrder === "asc") {
    filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortOrder === "desc") {
    filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  const lastIndex =
    currentPage * productsPerPage;

  const firstIndex =
    lastIndex - productsPerPage;

  const currentProducts =
    filteredProducts.slice(
      firstIndex,
      lastIndex
    );

  const totalPages = Math.ceil(
    filteredProducts.length /
      productsPerPage
  );

  if (loading)
    return <h1>Loading...</h1>;

  if (error)
    return <h1>{error}</h1>;

  return (
    <>
      <ToastContainer />

      <div className="header">
        <h1>🛒 Product Catalog</h1>
             <p>
                 Temukan produk terbaik dengan
                 harga terbaik
            </p>
    </div>


      <div className="container">
        <h1></h1>

        <nav className="navbar">
           <div className="logo">
            ShopMart
           </div>

           <div className="cart-icon">
             🛒 Cart
           </div>
         </nav>

         <section className="hero">
            <h1>
                Temukan Produk Terbaik
            </h1>

             <p>
                Belanja mudah, cepat dan aman
             </p>
         </section>

        <div className="filters">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={
              selectedCategory
            }
            setSelectedCategory={
              setSelectedCategory
            }
          />

          <select
            onChange={(e) =>
              setSortOrder(
                e.target.value
              )
            }
          >
            <option value="">
              Sort Harga
            </option>

            <option value="asc">
              Termurah
            </option>

            <option value="desc">
              Termahal
            </option>
          </select>
        </div>

        <div className="product-grid">
          {currentProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
                onDetail={
                  setSelectedProduct
                }
                onAddCart={
                  handleAddCart
                }
              />
            )
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={
            setCurrentPage
          }
        />

        <ProductModal
          product={selectedProduct}
          onClose={() =>
            setSelectedProduct(null)
          }
        />
      </div>
    </>
  );
}

export default App;