
const SearchPage = () => {
    return (
      <div className="flex  gap-2 items-center justify-center w-full mx-auto p-4 md:ml-5">
      <input
        type="text"
        className="w-[270px] sm:w-72 lg:w-96 p-2 focus:outline-none border border-black rounded text-center"
        placeholder="Search"
      />
      <button className="text-sm text-white font-medium bg-primary py-2 px-3 md:px-5 uppercase rounded hover:bg-black transition duration-300">
        Search
      </button>
    </div>
    
    );
};

export default SearchPage;