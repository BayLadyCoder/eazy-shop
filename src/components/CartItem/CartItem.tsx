import Button from "@material-ui/core/Button";
import { CartItemType } from "../../Types";
import { Wrapper } from "./CartItem.styles";
import { useDispatch } from "react-redux";

import { addToCart, removeItemFromCart } from "../../state/actions";

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
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.price * item.amount).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            className="button"
            size="small"
            disableElevation
            variant="contained"
            onClick={() => dispatch(removeItemFromCart(item.id))}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            className="button"
            size="small"
            disableElevation
            variant="contained"
            onClick={() => dispatch(addToCart(item))}
          >
            +
          </Button>
        </div>
      </div>
      <img src={imgURL} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
