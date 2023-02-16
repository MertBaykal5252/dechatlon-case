import React, { useEffect, useState } from 'react';
import { AppHeaderConfig } from '../config';
import PostList from '../users/PostList';
const pagePerCount = 10;
const Post = () => {
    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setIsLoading] = useState(false);

    const prev = () => { setPageNumber(currentData => currentData - 1 || 1) }
    const next = () => { setPageNumber(currentData => currentData + 1) }

    const search = (value) => {
        if (!value) {
            setFilteredUsers(users);
            return;
        }

        const filtered = users.filter(({ owner }) => owner.firstName.toLowerCase().search(value) > -1 || owner.lastName.toLowerCase().search(value) > -1);
        setFilteredUsers(filtered)
    }

    useEffect(() => {
        const API =`https://dummyapi.io/data/v1/post?&limit=${pagePerCount}&page=${pageNumber}`;
        fetch(API, {
            method: 'GET',
            ...AppHeaderConfig,
        }).then(datas => datas.json()).then(datas => {
            setUsers(datas.data);
            setFilteredUsers(datas.data);
            setIsLoading(false)
        }) 
    },[pageNumber])

    return (  
        <div className="home">
            <div className='border border-gray p-1 sm:p-10 mb-5 flex justify-center'>
                <h1 className='pr-3 text-sm sm:text-base'>Filter Users :</h1>
                <input onInput={(e) => search(e.currentTarget.value)} />
            </div>
            {
                !filteredUsers.length
                    ?
                    <div>Not found any Users</div>
                    :
                    ''}

            <PostList datas={filteredUsers} />
            <div className='flex gap-x-2' disabled={loading}>
                <button className='p-3 min-w-[100px]' disabled={pageNumber <= 1} onClick={prev}>Geri</button>
                <button disabled className='page-counter'>{pageNumber}</button>
                <button className='p-3 min-w-[100px]' disabled={users.length < pagePerCount} onClick={next}>İleri</button>
            </div>
        </div>
    )
}

export default Post;