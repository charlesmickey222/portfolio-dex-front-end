import { Post,Profile } from "../../types/models";
import { Link, useNavigate } from "react-router-dom";
import './PostPreview.css'
interface PostPreviewProps {
  post:Post;
  author:Profile;
  profiles:Profile[];
  profile:Profile|null;
}
const PostPreview = (props:PostPreviewProps) => {
  const {post, author, profiles, profile} = props

  const onSubmit = async(evt:React.FormEvent<HTMLButtonElement>):Promise<void>=>{
    try {
      
    } catch (error) {
      console.log(error)
    }
  }
  return(<div className='postContainer'>
    {(profile?.id === author.id)&&<button type="submit">x</button>}
    <Link to={`/posts/${(post.id)}`}   state={{post, author, profiles}} >
      {author&&<h2>{author.name}</h2>}
      <h4>{post.caption}</h4>
    </Link>
    </div>
  )}
export default PostPreview;