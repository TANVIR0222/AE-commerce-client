import React from 'react';
import { Link } from 'react-router';

const NavigateLogin = () => {
    return (
        <div>
        <p className='text-[14px] font-light text-textPrimary texthover'>
          Already have account ?{" "}
          <Link
            to={"/login"}
            className=" "
          >
            Login
          </Link>
        </p>
        </div>
    );
};

export default NavigateLogin;