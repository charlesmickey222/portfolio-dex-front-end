import { Comment,Profile } from "../../types/models";
export interface CommentDisplayProps{
  comment:Comment;
  author:Profile;
}
const CommentDisplay = (props:CommentDisplayProps) => {
  const {comment,author} = props
  return ( 
  <>
  <h4>{author.name}</h4>
  <p>{comment.content}</p>
  </> 
  );
}

export default CommentDisplay;