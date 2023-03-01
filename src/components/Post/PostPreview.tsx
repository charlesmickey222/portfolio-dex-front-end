import { Post } from "../../types/models";

interface PostPreviewProps {
  post:Post
}
const PostPreview = (props:PostPreviewProps) => {
  const {post} = props
  return(
    <div>
      <a href={`${post.portfolioLink}`}>Portfolio </a>
      <h4>{post.caption}</h4>
    </div>
  )}
export default PostPreview;