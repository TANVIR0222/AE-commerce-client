const CommonButton = () => {
  return (
    <div>
      <button className="relative inline-block px-6 py-2 font-medium text-black rounded overflow-hidden group">
        <span className="absolute inset-0 bg-primary transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out"></span>
        <span className="absolute inset-0 bg-red transform translate-x-0 group-hover:translate-x-full transition-all duration-300 ease-in-out"></span>
        <span className="relative z-10 block">Hover Me</span>
      </button>
    </div>
  );
};

export default CommonButton;
