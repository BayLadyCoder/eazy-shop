import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { addToCart } from "../../state/actions";
// Types
import { CartItemType } from "../../Types";

// Styles
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  // handleAddToCart: (item: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  const imgURL = item.image.slice(0, 21) + "herokuapp." + item.image.slice(21);
  return (
    <Wrapper>
      <img src={imgURL} alt={item.title} />
      <div>
        <p className="item-title">{item.title}</p>
        <p className="item-description">{item.description}</p>
        <p className="item-price">${item.price}</p>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(addToCart(item))}
      >
        Add to Cart
      </Button>
    </Wrapper>
  );
};

export default Item;
