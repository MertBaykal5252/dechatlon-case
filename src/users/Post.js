import { Link } from 'react-router-dom'
const Post = ({data}) => {
    return (
            <div className="max-w-xs p-2 border border-gray-500 rounded-xl bg-blue-300">
                <div className="flex flex-col h-full justify-between">
                    <div className="post-card__img">
                        <img src={data.image} alt="User" />
                    </div>
                    <div className="post-card__info">
                        <div className="post-card__info-title text-2xl">
                            {data.text}
                        </div>
                        <div className="post-card__info-date text-xs">
                            {data.publishDate}
                        </div>
                        <div className="post-card__info-owner text-center">
                            <div className='post-card__info-owner_picture text-center mt-4'>
                                <img className='m-auto max-w-[72px]' src={data.owner.picture} alt="Owner"/>
                            </div>
                            <div className='post-card__info-owner_name text-xl'>
                                {data.owner.title} {data.owner.firstName} {data.owner.lastName}
                            </div>
                        </div>
                    </div>

                    <div className='post-card__btn border border-red-700 bg-red-700 max-w-[200px] m-auto p-1 rounded-md'>
                        <Link to={`/users/${data.owner.id}`} className="undeline text-white">For User Detail</Link>
                    </div>
                </div>
            </div>
        
    );
}

export default Post;