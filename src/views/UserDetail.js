import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppHeaderConfig } from '../config';

const UserDetail = () => {

    const [detail, setDetail] = useState({})
    const { id } = useParams();
    console.log(detail);

    useEffect(() => {
        async function getDatas() {
            const res = await (
                await fetch(`https://dummyapi.io/data/v1/user/${id}`, AppHeaderConfig)
            ).json()

            setDetail(res);
        }

        id && getDatas()
    }, [])

    return (
        <div>
            <div>
                {detail.picture}
            </div>
            <div className='flex items-center'>
                <div>{detail.title}</div>
                <div>{detail.firstName}</div>
                <div>{detail.lastName}</div>
            </div>
            <div>
                {detail.gender}
            </div>
            <div className='flex items-center'>
                <div>{detail.email}</div>
                <div>{detail.phone}</div>
            </div>

            <div>
                {detail.location?.street}
                {detail.location?.city}
                {detail.location?.state}
                {detail.location?.country}
                {detail.location?.timezone}
            </div>
            <div>
                {detail.registeredDate}
            </div>
        </div>
    )
}

export default UserDetail;