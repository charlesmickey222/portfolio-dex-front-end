import { useLocation} from "react-router";
import { useState } from "react";
import { Post,Profile, Comment } from "../../types/models";
import CommentForm from "../../components/CommentForm/CommentForm";
import { NewCommentFormData } from "../../types/forms";
import CommentDisplay from "../../components/Comment/CommentDisplay";
import './PostDetailsPage.css'
interface PostDetailsPageProps{
  handleComment:(formData:NewCommentFormData,postId:number)=>void;
}
const PostDetailsPage = (props:PostDetailsPageProps) => {
  const {handleComment}= props
  const location = useLocation()
  const [post,setPost] = useState<Post>(location.state.post)
  const [author,setAuthor] = useState<Profile>(location.state.author)
  const [comments,setComments]=useState<Comment[]>(post?.comments? post.comments:[])
  const [profiles,setProfiles] = useState<Profile[]>(location.state.profiles)
  return (
    <>
  <div className='fullPost'>
    {author&&<h1>postedBy: {author.name}</h1>}
    <a href={`https://${post.portfolioLink}`} target="_blank" rel="noopener noreferrer"> portfolio website</a>
    {post.caption&&<p>seeking:{post.caption}</p>}
  </div>
  <div className="commentForm">
  <CommentForm handleComment={handleComment} post={post}/>
  {comments.length?comments.map((comment)=>(
    <CommentDisplay key={comment.id} comment={comment} author={profiles[comment.commentAuthor -1]}/>
  ))
  :
  <h2>no comments</h2>
  }
  </div>
  </>
  );
}

export default PostDetailsPage;