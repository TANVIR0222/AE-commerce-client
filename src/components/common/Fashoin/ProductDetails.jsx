


const ProductDetails = ({data}) => {
    const { id, name, brand, description, image } = data;
    console.log(name);
    
    return (
        <div className="h-[350px] border">
            <div className="p-8 space-y-3">
               <h1 className="text-[16px] font-normal"> Product name : <span className=" font-light">{name}</span>  </h1> 
               <h1 className="text-[16px] font-normal"> Description : <span className="font-light">{description}</span>  </h1>
               <h1 className="text-[16px] font-normal"> Brands : <span className="font-light">{brand}</span>  </h1>

            </div>
        </div>
    );
};

export default ProductDetails;