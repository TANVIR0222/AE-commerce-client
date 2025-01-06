import React from 'react';

const UserErrorView = ({error}) => {
    return (
        <div>
            <p className="text-[16px] font-light italic  text-red-500  ">{error}</p>
        </div>
    );
};

export default UserErrorView;