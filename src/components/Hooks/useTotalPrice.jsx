import useCart from "./useCart";

const useTotalPrice = () => {
  const { product } = useCart();

  // Calculate total price
  const totalPrice = product?.reduce((total, item) => {
    const itemTotal = item?.data?.data?.reduce((sum, productItem) => {
      const quantity = productItem.quantity || 1; // Assume quantity is 1 if not provided
      return sum + productItem.price * quantity; // Accumulate the price for each item
    }, 0);
    return total + itemTotal;
  }, 0);

  // Calculate total price
  const totalOldPrice = product?.reduce((total, item) => {
    const itemTotal = item?.data?.data?.reduce((sum, productItem) => {
      const quantity = productItem.quantity || 1; // Assume quantity is 1 if not provided
      return sum + productItem.oldPrice * quantity; // Accumulate the price for each item
    }, 0);
    return total + itemTotal;
  }, 0);

  return { totalPrice , totalOldPrice};
};

export default useTotalPrice;
