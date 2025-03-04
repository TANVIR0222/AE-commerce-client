import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import { useUpdateAddressMutation } from "../../../app/feature/addressApi/addressApi";

const EditeAddressDetails = ({data,close}) => {
    //  react hook form
    const { register, handleSubmit } = useForm({
        defaultValues : {
            id : data._id,
            userId : data.userId,
            addressline :data.addressline,
            city : data.city,
            state : data.state,
            country : data.country,
            pincode : data.pincode,
            mobile : data.mobile 
        }
    })

    //  update address api 
    const [updateAddress , {isLoading}] = useUpdateAddressMutation();


    //  handle submit post edite data 
    const onSubmit = async(data)=>{

        try {
            const {success} = await updateAddress(data).unwrap();
            if(success){
                toast.success("Address Edite Successfully")
                close();
            }
        } catch (error) {
          console.log(error);
            
        }
        
    }
    return (
        <section className='bg-black fixed top-0 left-0 right-0 bottom-0 z-50 bg-opacity-70 h-screen overflow-auto'>
        <div className='bg-white p-4 w-full max-w-lg mt-8 mx-auto rounded'>
            <div className='flex justify-between items-center gap-4'>
                <h2 className='font-semibold'>Edit Address</h2>
                <button onClick={close} className='hover:text-red-500'>
                    <IoClose  size={25}/>
                </button>
            </div>
            {/* edite address  form */}
            <form className='mt-4 grid gap-4' onSubmit={handleSubmit(onSubmit)}>
                <div className='grid gap-1'>
                    <label htmlFor='addressline'>Address Line :</label>
                    <input
                        type='text'
                        id='addressline' 
                        className='border focus:outline-none focus:border-black  p-2 rounded'
                        {...register("addressline",{required : true})}
                    />
                </div>
                {/*  */}
                <div className='grid gap-1'>
                    <label htmlFor='city'>City :</label>
                    <input
                        type='text'
                        id='city' 
                        className='border focus:outline-none focus:border-black  p-2 rounded'
                        {...register("city",{required : true})}
                    />
                </div>
                {/*  */}
                <div className='grid gap-1'>
                    <label htmlFor='state'>State :</label>
                    <input
                        type='text'
                        id='state' 
                        className='border focus:outline-none focus:border-black  p-2 rounded'
                        {...register("state",{required : true})}
                    />
                </div>
                {/*  */}
                <div className='grid gap-1'>
                    <label htmlFor='pincode'>Pincode :</label>
                    <input
                        type='text'
                        id='pincode' 
                        className='border focus:outline-none focus:border-black  p-2 rounded'
                        {...register("pincode",{required : true})}
                    />
                </div>
                {/*  */}
                <div className='grid gap-1'>
                    <label htmlFor='country'>Country :</label>
                    <input
                        type='text'
                        id='country' 
                        className='border focus:outline-none focus:border-black  p-2 rounded'
                        {...register("country",{required : true})}
                    />
                </div>
                {/*  */}
                <div className='grid gap-1'>
                    <label htmlFor='mobile'>Mobile No. :</label>
                    <input
                        type='text'
                        id='mobile' 
                        className='border focus:outline-none focus:border-black  p-2 rounded'
                        {...register("mobile",{required : true})}
                    />
                </div>
                {/*  */}
                <button type='submit' className='bg-primary w-full rounded text-white  py-2 font-semibold mt-4 hover:bg-textPrimary'> {isLoading ? 'Loading...' : 'Submit' } </button>
            </form>
        </div>
    </section>
    );
};

export default EditeAddressDetails;