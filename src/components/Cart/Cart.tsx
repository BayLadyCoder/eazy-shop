import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../../Types";
import Button from "@material-ui/core/Button";

type Props = {
  cartItems: CartItemType[];
};

const Cart: React.FC<Props> = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.amount;
  }, 0);
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <p>Cart is empty.</p>
      )}
      <div className="checkout-container">
        <h3 className="checkout-total">Total*: ${total}</h3>
        <Button
          fullWidth
          className="checkout-button"
          color="primary"
          variant="contained"
        >
          Checkout
        </Button>
      </div>
    </Wrapper>
  );
};

export default Cart;
