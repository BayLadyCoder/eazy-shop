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
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => dispatch(addToCart(item))}>Add to Cart</Button>
    </Wrapper>
  );
};

export default Item;
