import Button from "@material-ui/core/Button";

// Types
import { CartItemType } from "../App";

// Styles
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (item: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  const imgURL = item.image.slice(0, 21) + "herokuapp." + item.image.slice(21);
  return (
    <Wrapper>
      <img src={imgURL} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
    </Wrapper>
  );
};

export default Item;
