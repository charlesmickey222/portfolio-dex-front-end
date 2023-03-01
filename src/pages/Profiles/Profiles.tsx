// npm packages
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// services
import * as profileService from '../../services/profileService'

// types
import { Profile } from '../../types/models'
interface ProfilesProps{
  profiles:Profile[];
}
const Profiles = (props:ProfilesProps): JSX.Element => {
  const [profiles, setProfiles] = useState<Profile[]>(props.profiles)

  if(!profiles.length) return <p>No profiles yet</p>

  return (
    <>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.map((profile: Profile) =>
        <Link key={profile.id} to={`/profiles/${profile.name.replaceAll(' ', '+')}`} state={{profile}}> {profile.name} </Link>
      )}
    </>
  )
}

export default Profiles
