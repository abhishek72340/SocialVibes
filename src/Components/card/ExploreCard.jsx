
import PostCard from './PostCard';

export default function ExploreCard({ post }) {

    return (
        <div>
            {
                post.map((data) => <PostCard data={data} />)
            }

        </div>
    )
}
