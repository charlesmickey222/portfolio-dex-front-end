import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { User,Profile } from "../../types/models";
import { Link } from "react-router-dom";
import { PortfolioLinkData } from "../../types/forms";
interface ProfilePageProps {
  user:User|null;
}
const ProfilePage = (props:ProfilePageProps) => {
  const {user} = props
  const location = useLocation()
  const [profile,setProfile]=useState<Profile>(location.state.profile)
  const [ownsProfile,setOwnsProfile]=useState<Boolean>(false)
  const [portfolioLinkData,setPortfolioLinkData] = useState<PortfolioLinkData>()
  useEffect(()=>{
    if(user){
      if (user.profile.id === profile.id){
        setOwnsProfile(true)
      }
    }
  })
  const handleChange = (evt:React.ChangeEvent<HTMLInputElement>)=>{
    setPortfolioLinkData({...portfolioLinkData, ['portfolioLink']:evt.target.value})
  }

  const handleSubmit = async(evt:React.FormEvent)=>{
    evt.preventDefault()
    try {
      
    } catch (error) {
      console.log(error)
    }
  }


  if(!profile) return <h1>Loading Profile</h1>
  return ( 
  <>
  <div className="photoFrame" style={{'height':'10px','width':'10px','overflow':'hidden'}}>{profile.photo?<img src={profile.photo}/>:<img src='/noPhoto.jpg'/>}</div>
  <h1>{profile.name}</h1>
  </> );
}

export default ProfilePage;