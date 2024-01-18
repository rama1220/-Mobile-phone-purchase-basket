// Cartitem.jsx
import plus from "../img/plus.png";
import min from "../img/min.png";
import { cartItems } from "../feature/cartItem";
// import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementItem, decrementItem } from "../feature/cartSlice";

const Cartitem = () => {
  const sum = (obj) => Object.values(obj).reduce((acc, curr) => acc + curr, 0);
  const dispatch = useDispatch();
  const itemCounts = useSelector((state) => state.cart.cartItems);

  console.log(sum(itemCounts));

  return (
    <section className="cart">
      <h2>Your Cart</h2>
      <header>
        {cartItems.map((item) => (
          <div className="box-item" key={item.id}>
            <div className="pict">
              <img src={item.img} alt={item.title} />
            </div>
            <h1>{item.title}</h1>
            <h3>Price: {item.price}</h3>
            <h3>Total: {itemCounts[item.id] || 0}</h3>
            <div className="navigate">
              <div className="plus">
                <img src={plus} alt="plus" onClick={() => dispatch(incrementItem({ itemId: item.id }))} />
              </div>
              <div className="min">
                <img src={min} alt="minus" onClick={() => dispatch(decrementItem({ itemId: item.id }))} />
              </div>
            </div>
          </div>
        ))}
      </header>
    </section>
  );
};

export default Cartitem;
