import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold ">Your cart, {username}</h2>

      <ul className="divide-y divide-gray-200 border-b mt-3 ">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-4">
        <Button to="/order/new" type="primary">
          Order pizzas{" "}
        </Button>
        <Button onClick={() => dispatch(clearCart())} type="secondary">
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
