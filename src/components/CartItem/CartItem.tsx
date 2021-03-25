import Button from "@material-ui/core/Button";
import { CartItemType } from "../../Types";
import { Wrapper } from "./CartItem.styles";
import { useDispatch } from "react-redux";
import RemoveIcon from "@material-ui/icons/Remove";
import { addToCart, removeItemFromCart } from "../../state/actions";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

type Props = {
  item: CartItemType;
};

const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  const imgURL: string =
    item.image.slice(0, 21) + "herokuapp." + item.image.slice(21);

  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>
        <div className="information">
          <div className="price-container">
            <p className="price">Price</p>
            <p>${item.price}</p>
          </div>
          <div className="buttons">
            <IconButton
              className="icon-button"
              onClick={() => dispatch(removeItemFromCart(item.id))}
            >
              <RemoveIcon className="icon" />
            </IconButton>
            <p className="amount">{item.amount}</p>

            <IconButton
              className="icon-button"
              onClick={() => dispatch(addToCart(item))}
            >
              <AddIcon className="icon" />
            </IconButton>
          </div>
          <div className="total-container">
            <p className="total">Total</p>
            <p>${(item.price * item.amount).toFixed(2)}</p>
          </div>
        </div>
      </div>
      <img src={imgURL} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
