import "../styles/home.css";
import Slideshow from "../components/imageSlider";
import VideoSlider from "../components/videoSlider"; // Import the VideoSlider component

function Home() {
  return (
    <div className="home">
      <Slideshow />
      <h1>Hi, Welcome Guys</h1>
      <p>This is a simple home page.</p>
      <VideoSlider />
    </div>
  );
}
export default Home;
