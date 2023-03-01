import { Post,Profile } from "../../types/models";
import PostPreview from "../Post/PostPreview";
interface PostFeedProps {
  posts:Post[];
}
const PostFeed = (props:PostFeedProps) => {
  const { posts } = props
  return ( 
  <div className="postContainer">
    {posts.map((post:Post)=>
      <PostPreview key={post.id} post={post} />
    )}
    
  </div> );
}

export default PostFeed;