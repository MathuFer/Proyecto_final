import { useState, useContext, useEffect } from "react";
import { ProductosContext } from "../context/ProductosProvider";
import { Link } from 'react-router-dom';
import "../components/styeComponents/Card.css";

const Card = () => {
  const [productosAleatorios, setProductosAleatorios] = useState([]);
  
  const { productos, cart, setCart } = useContext(ProductosContext);

  const addToCart2 = (id) => {
    const existingProduct = cart.find((producto) => producto.id === id);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((producto) =>
          producto.id === id ? { ...producto, quantity: producto.quantity + 1 } : producto
        )
      );
    } else {
      const tocart = productos.find((producto) => producto.id === id);
      setCart((prevCart) => [...prevCart, { ...tocart, quantity: 1 }]);
    }
  };

  const seleccionarProductosAleatorios = () => {
    const productosMezclados = [...productos].sort(() => Math.random() - 0.5);
    const productosSeleccionados = productosMezclados.slice(0, 5);
    setProductosAleatorios(productosSeleccionados);
  };

  useEffect(() => {
    seleccionarProductosAleatorios();
  }, [productos]);

  return (
    <div className="productos">
      <div className="contenedor-producto">
        {productosAleatorios.map((product) => (
          <div key={product.id} className="producto">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <p>Precio: {product.price.toLocaleString("es-CL", { style: "currency", currency: "CLP" })}</p>
            <button
              className="ver-detalles"
              onClick={() => addToCart2(product.id)}
            >
              Añadir
            </button>
            <Link to={`/product/${product.id}`} className="ver-detalles">Ver detalles</Link>
          </div>
        ))}
      </div>
      <div>
        <Link to="/tienda">
          <button className="boton-tienda">Tienda</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
