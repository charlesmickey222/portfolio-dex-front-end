import { useState } from "react";
import { NewPostForm } from "../../types/forms";
import * as postService from "../../services/postService"
import { useNavigate } from "react-router";
import { Profile } from "../../types/models";


interface NewPostProps{
  handlePost:(formData:NewPostForm)=>void;
  profile:Profile|null;
}
const NewPost = (props:NewPostProps) => {
  const navigate = useNavigate()
  const {handlePost,profile} = props
  const [formData,setFormData]=useState<NewPostForm>({
    portfolioLink:'',
    caption:'',
  })
  const handleChange = (evt:React.ChangeEvent<HTMLInputElement>) =>{
    setFormData({...formData,[evt.target.name]:evt.target.value})
  }
  const handleSubmit = async(evt:React.FormEvent)=>{
    evt.preventDefault()
    try {
      if(formData.portfolioLink){
        await handlePost(formData)
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }
  const {portfolioLink,caption} = formData

  return ( 
    <form onSubmit={handleSubmit}>
      <label htmlFor="portfolioLink"> Link To Portfolio </label>
      <input type='text'
      name='portfolioLink'
      id='portfolioLink'
      value={portfolioLink}
      onChange={handleChange}/>
      <label htmlFor="caption"> inquiry </label>
      <input type='text' 
      name='caption' 
      id='caption' 
      value={caption}
      onChange={handleChange}/>
      <button type='submit'>submit</button>
    </form> 
  );
}

export default NewPost;