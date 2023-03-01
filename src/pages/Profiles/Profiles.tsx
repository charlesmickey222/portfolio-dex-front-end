// npm packages
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// services
import * as profileService from '../../services/profileService'

// types
import { Profile } from '../../types/models'

const Profiles = (): JSX.Element => {
  const [profiles, setProfiles] = useState<Profile[]>([])

  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProfiles()
  }, [])

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
