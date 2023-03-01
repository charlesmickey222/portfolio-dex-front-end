import { NewCommentFormData, NewPostForm } from '../types/forms'
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

async function addCommentToPost(formData:NewCommentFormData, postId:number):Promise<Post>{
  try {
    const res = await fetch(`${BASE_URL}/${postId}`,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
      body: JSON.stringify(formData),
    })
    return await res.json() as Post
  } catch (error) {
    throw error
  }
}

async function getPostsByAuthor(profileId:number):Promise<Post[]>{
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Post[]
  } catch (error) {
    throw error
  }
}

async function deletePost(postId:number){
  try {
    const res = await fetch(`${BASE_URL}/${postId}`,{
      method:'DELETE',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
  } catch (error) {
    throw error
  }
}

export  {
  createPost, 
  getPosts,
  addCommentToPost,
  getPostsByAuthor,
  deletePost
}