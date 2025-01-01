import React from "react";
import { Link } from "react-router";

const Information = () => {
  return (
    <div className="fle-col">
        <Link to={'/contact'} ><p className=" texthover font-normal text-[16px] cursor-pointer text-textPrimary ">Contact</p></Link>
        <Link to={'/about'} ><p className=" texthover font-normal text-[16px] cursor-pointer text-textPrimary ">About us</p></Link>
        <Link to={'/blog'} ><p className=" texthover font-normal text-[16px] cursor-pointer text-textPrimary ">Blog</p></Link>  
    </div>
  );
};

export default Information;
