import { useLocation} from "react-router";
import { useState } from "react";
import { Post,Profile } from "../../types/models";
const PostDetailsPage = () => {
  const location = useLocation()
  const [post,setPost] = useState<Post>(location.state.post)
  const [author,setAuthor] = useState<Profile>(location.state.author)

  return (
  <div>
    {author&&<h1>postedBy: {author.name}</h1>}
    <a href={`https://${post.portfolioLink}`}> portfolio website</a>
    {post.caption&&<p>seeking:{post.caption}</p>}
  </div>

  );
}

export default PostDetailsPage;