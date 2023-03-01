import PostFeed from "../../components/PostFeed/PostFeed";
import { Post,Profile } from "../../types/models";
interface HomePageProps{
  profile:Profile|null;
  posts:Post[];
}
const HomePage = (props:HomePageProps) => {
  const {profile,posts} = props
  return ( 
  <>
  <PostFeed posts={posts}/>
  </> );
}

export default HomePage;