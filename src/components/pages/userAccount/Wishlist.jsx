import BackNavigate from "../../common/BackNavigate";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$120",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$250",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Laptop Stand",
      price: "$40",
      image: "https://via.placeholder.com/150",
    },
  ];

  const handleRemove = (id) => {
    console.log(`Remove item with id: ${id}`);
  };

  const handleAddToCart = (id) => {
    console.log(`Add item with id: ${id} to cart`);
  };
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-12 py-6">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6">My Wish List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-white shadow rounded-lg flex flex-col justify-between"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 sm:h-48 md:h-64 object-cover rounded mb-4"
            />
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              {item.name}
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              {item.price}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => handleAddToCart(item.id)}
                className="flex items-center gap-2 px-3 md:px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
              >
                <AiOutlineShoppingCart />
                <span className="text-sm md:text-base">Add to Cart</span>
              </button>
              <button
                onClick={() => handleRemove(item.id)}
                className="flex items-center gap-2 px-3 md:px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
              >
                <AiOutlineDelete />
                <span className="text-sm md:text-base">Remove</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <BackNavigate />
    </div>
  );
};

export default Wishlist;
