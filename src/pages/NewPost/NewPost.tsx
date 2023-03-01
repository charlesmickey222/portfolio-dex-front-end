import { useState } from "react";
import { NewPostForm } from "../../types/forms";

const NewPost = () => {
  const [formData,setFormData]=useState<NewPostForm>({
    portfolioLink:'',
    caption:'',
  })
  const handleChange = (evt:React.ChangeEvent<HTMLInputElement>) =>{
    setFormData({...formData,[evt.target.name]:evt.target.value})
  }
  const {portfolioLink,caption} = formData
  return ( <form>
    <label htmlFor="portfolioLink"> Link To Portfolio </label>
    <input type='text' name='portfolioLink' id='portfolioLink' onChange={handleChange}/>
    <label htmlFor="caption"> inquiry </label>
    <input type='text' name='caption' id='caption' onChange={handleChange}/>
    <button type='submit'>submit</button>
  </form> );
}

export default NewPost;