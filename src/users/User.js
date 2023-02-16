import { Link } from 'react-router-dom'
const User = ({data}) => {
    return (
            <div className="user-card max-w-xs p-2 border border-gray-500 rounded-xl bg-blue-300">
                <div className="user-card__wrapper flex flex-col h-full justify-between">
                    <div className="user-card__img m-auto">
                        <img className='max-w-[72px]' src={data.picture} alt="User" />
                    </div>
                    <div className="user-card__info">
                        <div className="user-card__info-owner text-center">
                            <div className='user-card__info-owner_name text-xl my-3'>
                                {data.title} {data.firstName} {data.lastName}
                            </div>
                        </div>
                    </div>

                    <div className='user-card__btn border border-red-700 bg-red-700 max-w-[200px] m-auto p-1 rounded-md'>
                        <Link to={`/users/${data.id}`} className="undeline text-white">For User Detail</Link>
                    </div>
                </div>
            </div>
        
    );
}

export default User;