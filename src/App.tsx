import { useQuery } from "react-query";

//Types
export type CartItemType = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.herokuapp.com/products")).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "product",
    getProducts
  );
  console.log(data);
  return <div className="App">Start</div>;
};

export default App;
