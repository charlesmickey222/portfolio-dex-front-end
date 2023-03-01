import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { User,Profile,Post } from "../../types/models";
import { Link } from "react-router-dom";
import { PortfolioLinkData } from "../../types/forms";
import * as postService from '../../services/postService'
import PostPreview from "../../components/Post/PostPreview";
interface ProfilePageProps {
  user:User|null;
}
const ProfilePage = (props:ProfilePageProps) => {
  const {user} = props
  const location = useLocation()
  const [profile,setProfile]=useState<Profile>(location.state.profile)
  const [ownsProfile,setOwnsProfile]=useState<Boolean>(false)
  useEffect(()=>{
    if(user){
      if (user.profile.id === profile.id){
        setOwnsProfile(true)
      }
    }
  })


  if(!profile) return <h1>Loading Profile</h1>
  return ( 
  <>
  <div className="photoFrame" style={{'height':'10px','width':'10px','overflow':'hidden'}}>{profile.photo?<img src={profile.photo}/>:<img src='/noPhoto.jpg'/>}</div>
  <h1>{profile.name}</h1>
  </> );
}

export default ProfilePage;