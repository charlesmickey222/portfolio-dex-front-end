import { Post,Profile } from "../../types/models";
import PostPreview from "../Post/PostPreview";
interface PostFeedProps {
  posts:Post[];
  profiles:Profile[];
  profile:Profile|null;
}
const PostFeed = (props:PostFeedProps) => {
  const { posts,profiles,profile } = props
  return ( 
  <div className="feed">
    {posts.map((post:Post)=>
      <PostPreview key={post.id} profiles={profiles} profile={profile} author={profiles[post.author-1]} post={post} />
    )}
    
  </div> );
}

export default PostFeed;