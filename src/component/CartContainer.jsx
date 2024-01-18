import { useSelector, useDispatch } from "react-redux";
import Cartitem from "./CartItem";

import { clearAll } from "../feature/cartSlice";

const Cartcontainer = () => {
  const { priceTotal, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <section className="cart">
      <header>
        {amount < 0 ? (
          <>
            <h2>Your Cart </h2>
            <h4 className="empty-cart">is empty</h4>
          </>
        ) : (
          <>
            <Cartitem />
            <div className="bawah">
              <hr />
              <div className="bawah2">
                <div className="total">Total</div>
                <div className="totalAmount">{`$ ${priceTotal}`}</div>
              </div>
              <div className="btn-position">
                <button className="clear" onClick={() => dispatch(clearAll())}>
                  Clear All
                </button>
              </div>
            </div>
          </>
        )}
      </header>
    </section>
  );
};

export default Cartcontainer;
