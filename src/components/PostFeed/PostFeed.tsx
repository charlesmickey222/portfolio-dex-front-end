import { Post,Profile } from "../../types/models";
import PostPreview from "../Post/PostPreview";
interface PostFeedProps {
  posts:Post[];
  profiles:Profile[];
}
const PostFeed = (props:PostFeedProps) => {
  const { posts,profiles } = props
  return ( 
  <div className="feed">
    {posts.map((post:Post)=>
      <PostPreview key={post.id} profiles={profiles} author={profiles[post.author-1]} post={post} />
    )}
    
  </div> );
}

export default PostFeed;