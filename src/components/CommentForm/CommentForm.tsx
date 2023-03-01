import { NewCommentFormData } from "../../types/forms";
import { useState } from "react";
import { Post } from "../../types/models";
interface CommentFormProps{
  post:Post;
  handleComment:(formdata:NewCommentFormData, postId:number)=>void;
}
const CommentForm = (props:CommentFormProps) => {
  const {post,handleComment} = props
  const [formData,setFormData] = useState<NewCommentFormData>({
    content:''
  })

  const handleChange = (evt:React.ChangeEvent<HTMLInputElement>) =>{
    setFormData({...formData, [evt.target.name]:evt.target.value})
  }
  const handleSubmit = async(evt:React.FormEvent)=>{
    evt.preventDefault()
    try {
      handleComment(formData,post.id)
    } catch (error) {
      throw error
    }
  }
  const {content} = formData
  return ( <form onSubmit={handleSubmit}>
    <input 
    type='text'
    name='content'
    id='commentContent'
    value={content}
    onChange={handleChange}
    />
    <button type='submit'>submit</button>
  </form> );
}

export default CommentForm;