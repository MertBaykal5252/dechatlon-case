import React, { useEffect, useState } from 'react';
import UserList from '../users/UserList';

const pagePerCount = 10;

const Users = () => {
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

        const filtered = users.filter(({ firstName, lastName }) => firstName.toLowerCase().search(value) > -1 || lastName.toLowerCase().search(value) > -1);
        setFilteredUsers(filtered)
    }

    useEffect(() => {
        const API = `https://dummyapi.io/data/v1/user?&limit=${pagePerCount}&page=${pageNumber}`;
        setIsLoading(true)
        fetch(API, {
            method: 'GET',
            headers: {
                "app-id": "63ece745d921a32f719a1097",
            },
        }).then(datas => datas.json()).then(datas => {
            setUsers(datas.data);
            setFilteredUsers(datas.data);
            setIsLoading(false)
        })
    }, [pageNumber])


    return (
        <div className="home">
            <div className='border border-gray p-10 mb-5'>
                <input onInput={(e) => search(e.currentTarget.value)} />
            </div>
            {
                !filteredUsers.length
                    ?
                    <div>Not found any Users</div>
                    :
                    ''}

            <UserList datas={filteredUsers} />
            <div className='flex gap-x-2' disabled={loading}>
                <button className='p-3 min-w-[100px]' disabled={pageNumber <= 1} onClick={prev}>Geri</button>
                <button disabled className='page-counter'>{pageNumber}</button>
                <button className='p-3 min-w-[100px]' disabled={users.length < pagePerCount} onClick={next}>İleri</button>
            </div>
        </div>
    )
}

export default Users;