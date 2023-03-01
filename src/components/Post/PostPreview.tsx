import { Post,Profile } from "../../types/models";
import { Link, useNavigate } from "react-router-dom";
interface PostPreviewProps {
  post:Post;
  author:Profile;
}
const PostPreview = (props:PostPreviewProps) => {
  const {post, author} = props
  return(
    <Link to={`/posts/${(post.id)}`} state={{post, author}} >
      {author&&<h2>{author.name}</h2>}
      <h4>{post.caption}</h4>
    </Link>
  )}
export default PostPreview;