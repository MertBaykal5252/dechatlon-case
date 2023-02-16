import Post from "./Post";
import React from "react";
const PostList = ({datas}) => {
    return (
        <div className="flex flex-wrap justify-center gap-10 my-14">
            {datas?.map((data,i) => <Post key={i}  data={data} />)}
        </div>
    );
}

export default PostList;