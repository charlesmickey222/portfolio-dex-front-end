import { Post,Profile } from "../../types/models";
interface PostFeedProps {
  posts:Post[];
}
const PostFeed = (props:PostFeedProps) => {
  const { posts } = props
  return ( 
  <div className="postContainer">
    {posts.map((post:Post)=>
      <h1 key={post.id}>{post.portfolioLink}</h1>
    )}
    
  </div> );
}

export default PostFeed;