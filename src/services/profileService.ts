// services
import * as tokenService from './tokenService'

// types
import { Profile } from '../types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles(): Promise<Profile[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Profile[]
  } catch (error) {
    throw error
  }
}

async function getProfileByName(username:string):Promise<Profile>{
  try {
    const res = await fetch(`${BASE_URL}/${username.replaceAll(' ', '+')}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Profile
  } catch (error) {
    throw error
  }
}
async function getProfileById(profileId:number):Promise<Profile> {
  try {
    const res = await fetch(`${BASE_URL}/id-search/${profileId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Profile
  } catch (error) {
    throw error
  }
}
async function addPhoto(
  photoData: FormData, 
  profileId: number
): Promise<string> {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
    return await res.json() as string
  } catch (error) {
    throw error
  }
}

async function addPortfolioLink(
  linkData:FormData,
  profileId:number
):Promise<string>{
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/add-link`,{
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: linkData
    })
    return await res.json() as string
  } catch (error) {
    throw error
  }
}

export { getAllProfiles, addPhoto, addPortfolioLink, getProfileByName, getProfileById  }
