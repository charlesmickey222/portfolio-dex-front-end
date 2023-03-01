import { Post,Profile } from "../../types/models";
import { Link, useNavigate } from "react-router-dom";
import './PostPreview.css'
interface PostPreviewProps {
  post:Post;
  author:Profile;
  profiles:Profile[]
}
const PostPreview = (props:PostPreviewProps) => {
  const {post, author, profiles} = props
  return(<div className='postContainer'>
    <Link to={`/posts/${(post.id)}`}   state={{post, author, profiles}} >
      {author&&<h2>{author.name}</h2>}
      <h4>{post.caption}</h4>
    </Link>
    </div>
  )}
export default PostPreview;