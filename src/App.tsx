// npm modules 
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import ProfilePage from './pages/ProfilePage/ProfilePage'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as postsService from './services/postService'
// stylesheets
import './App.css'

// types
import { User, Profile,Post} from './types/models'
import NewPost from './pages/NewPost/NewPost'
import { NewPostForm } from './types/forms'
import HomePage from './pages/HomePage/HomePage'


function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [profiles,setProfiles] = useState<Profile[]>([])
  const [profile,setProfile]=useState<Profile>()
  const [posts,setPosts] = useState<Post[]>([])
  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handlePost = async(formData:NewPostForm):Promise<void>=>{
    try {
      const newProfile = await postsService.createPost(formData)
      setProfiles(profiles.map((profile) => (
        profile.id === newProfile.id ?newProfile:profile
      )))
    } catch (error) {
      console.log(error)
    }
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }

    user ? fetchProfiles() : setProfiles([])

  }, [user])

useEffect(():void=>{
  const fetchProfile = async():Promise<void> =>{
    try {
      if(user) {
        const targetProfile:Profile = await profileService.getProfileById(user.profile.id)!
        setProfile(targetProfile)
      }
    } catch (error) {
      console.log(error)
    }
  }
  user ? fetchProfile():setProfile(undefined)
},[user])
    useEffect(():void=>{
      const fetchPosts = async():Promise<void>=>{
        try {
          const postData:Post[]= await postsService.getPosts()
          setPosts(postData)
        } catch (error) {
        console.log(error) 
        }
      }
      user?fetchPosts():setPosts([])
    },[user])
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
        path="/home"
        element={<ProtectedRoute user={user}>
          <HomePage profile={profile} posts={posts}/>
        </ProtectedRoute>}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles profiles={profiles}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route 
        path="/profiles/:id"
        element={
          <ProtectedRoute user={user}>
            <ProfilePage user={user}/>
          </ProtectedRoute>
        }
        />
        <Route 
        path='/new-post'
        element={
          <ProtectedRoute user={user}>
            <NewPost handlePost={handlePost} profile={profile?profile:null} />
          </ProtectedRoute>
        }
        />
      </Routes>
    </>
  )
}

export default App
