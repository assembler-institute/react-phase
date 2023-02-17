import { useEffect } from "react";
import products from "../../../assets/db/db";
import CounterApp from "../Counter/CounterApp";

// Funcion getItem

import "./products.css";

const Cart = () => {
  // const counter = "lo que el contador de cada producto diga";
  useEffect(() => {
    // lógica para guardar en localStorage
  }, [products]);

  return (
    <>
      {products.map(({ id, img, title, price, description }) => (
        <div className="m-2 p-2" key={id}>
          <div className="container">
            <div className="card">
              <img src={img} alt="" />
              <div className="card-body">
                <div className="row">
                  <div className="card-title">
                    <h4>{title}</h4>
                    <h3>{price}€</h3>
                  </div>
                  <div className="view-btn">
                    <a href="/">View Details</a>
                  </div>
                </div>
                <hr />
                <p>{description}</p>
                <div className="btn-group">
                  <div className="btn">
                    <a href="/">Buy Now</a>
                  </div>
                  <CounterApp />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
