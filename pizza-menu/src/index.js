import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {
        // && Operator Rendering + Rendering Lists
        numPizzas !== 0 && (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone ove, all organic, all delicious.
            </p>
            <ul className="pizzas">
              {pizzas.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        )
      }
    </main>
  );
}

function Pizza({ pizzaObj }) {
  const photoPath = `../${pizzaObj.photoName}`;
  const isSoldOut = pizzaObj.soldOut;

  // multiple returns rendering
  //if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${isSoldOut ? "sold-out" : ""}`}>
      <img src={photoPath} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{isSoldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const openHour = 12;
  const closeHour = 20;

  const hour = new Date().getHours();
  const isOpen = hour >= openHour && hour <= closeHour;

  // ternary operator rendering
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
