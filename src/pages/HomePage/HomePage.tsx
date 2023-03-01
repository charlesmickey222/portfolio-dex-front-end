import PostFeed from "../../components/PostFeed/PostFeed";
import { Post,Profile } from "../../types/models";
interface HomePageProps{
  profile:Profile|null;
  posts:Post[];
  profiles:Profile[];
}
const HomePage = (props:HomePageProps) => {
  const {profile,posts, profiles} = props
  return ( 
  <>
  <PostFeed profiles={profiles} posts={posts}/>
  </> );
}

export default HomePage;