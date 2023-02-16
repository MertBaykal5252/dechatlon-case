import User from "./User";
import React from "react";
const UserList = ({datas}) => {
    return (
        <div className="users-all flex flex-wrap justify-center gap-10 my-14">
            {datas?.map((data,i) => <User key={i}  data={data} />)}
        </div>
    );
}

export default UserList;