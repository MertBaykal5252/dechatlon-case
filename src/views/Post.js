import React, { useEffect, useState } from 'react';
import { AppHeaderConfig } from '../config';
import PostList from '../users/PostList';

const Post = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const API ="https://dummyapi.io/data/v1/post?&limit=10";
        fetch(API, {
            method: 'GET',
            ...AppHeaderConfig,
        }).then(datas => datas.json()).then(datas => setUsers(datas.data)) 
    },[])

    return (  
        <div className="home">
            <PostList datas={users} />
        </div>
    )
}

export default Post;