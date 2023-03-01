import { NewPostForm } from '../types/forms'
import * as tokenService from './tokenService'
import { Profile,Post } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/posts`
async function createPost(formData:NewPostForm):Promise<Profile>{
  try {
    const res = await fetch(BASE_URL,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tokenService.getToken()}`,
        },
        body: JSON.stringify(formData),
      })
      return await res.json() as Profile;
  } catch (error) {
    throw error
  }
}

async function getPosts():Promise<Post[]>{
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as  Post[]
  } catch (error) {
    throw error
  }
  
}

export  {
  createPost, getPosts
}