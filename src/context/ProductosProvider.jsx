import { createContext, useEffect, useState } from "react";

export const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/productos.json");
        if (!response.ok) {
          throw new Error("No se pudieron cargar los productos");
        }
        const productos = await response.json();
        setProductos(productos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Eliminar producto del carrito
  const eliminarDelPedido = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <ProductosContext.Provider
      value={{ productos, setProductos, cart, setCart, eliminarDelPedido }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductosProvider;
