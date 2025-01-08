import BackNavigate from "../../common/BackNavigate";

const MyAccount = () => {

  return (
    <div className=" bg-white">
      {/* Main Content */}
      <div className="flex-grow">
        {/* Overview Section */}
        <section className="p-4">
          <h2 className="text-xl font-medium mb-4">Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white shadow rounded">
              <h3 className="text-lg font-semibold">Total Price</h3>
              <p className="text-gray-600">$23,400</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="text-lg font-semibold">Total Orders</h3>
              <p className="text-gray-600">1,230</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="text-lg font-semibold">New Customers</h3>
              <p className="text-gray-600">450</p>
            </div>
            <div className="p-6 bg-white shadow rounded">
              <h3 className="text-lg font-semibold">Products Sold</h3>
              <p className="text-gray-600">980</p>
            </div>
          </div>
        </section>
      </div>
     <BackNavigate />
    </div>
  );
};

export default MyAccount;
