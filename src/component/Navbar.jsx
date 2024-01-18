import { useSelector } from "react-redux";
import keranjang from "../img/keran.png";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <>
      <nav className="navbar">
        <div className="left">Redux-tools</div>
        <div className="right">
          <div className="inside-box">
            <h6 className="amount">{amount}</h6>
            <img src={keranjang} alt="" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
