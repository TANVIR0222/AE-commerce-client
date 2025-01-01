
const CheckOutPage = () => {
    return (
        <div>
            <div className='w-full max-w-md bg-white py-4 px-2'>
          {/**summary**/}
          <h3 className='text-lg font-semibold'>Summary</h3>
          <div className='bg-white p-4'>
            <h3 className='font-semibold'>Bill details</h3>
            <div className='flex gap-4 justify-between ml-1'>
              <p>Items total</p>
              <p className='flex items-center gap-2'><span className='line-through text-neutral-400'>{DisplayPriceInBDT(totalPrice)}</span><span>{DisplayPriceInBDT(totalDiscountedPrice)}</span></p>
            </div>
            <div className='flex gap-4 justify-between ml-1'>
              <p>Quntity total</p>
              <p className='flex items-center gap-2'>{totalQty} item</p>
            </div>
            <div className='flex gap-4 justify-between ml-1'>
              <p>Delivery Charge</p>
              <p className='flex items-center gap-2'>Free</p>
            </div>
            <div className='font-semibold flex items-center justify-between gap-4'>
              <p >Grand total</p>
              <p>{DisplayPriceInBDT(totalDiscountedPrice)}</p>
            </div>
          </div>
          <div className='w-full flex flex-col gap-4'>
            <button onClick={handleOnlinePayment} className='py-2 px-4 bg-green-600 hover:bg-green-700 rounded text-white font-semibold' >Online Payment</button>
            <button onClick={handleCashOnDelivery} className='py-2 px-4 border-2 border-green-600 font-semibold text-green-600 hover:bg-green-600 hover:text-white'>Cash on Delivery</button>
          </div>
        </div>
      </div> 
    );
};

export default CheckOutPage;