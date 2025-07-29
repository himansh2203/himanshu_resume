import "../styles/home.css";
import Slideshow from "../components/imageSlider";
import VideoSlider from "../components/videoSlider"; // Import the VideoSlider component
import SlideUpBox from "../components/sildeUpBox";

function Home() {
  return (
    <div className="home">
      <Slideshow />
      <h1>
        <center>Hi, Welcome Guys</center>
      </h1>
      <SlideUpBox />
      <p>This is a simple home page.</p>
      <VideoSlider />
    </div>
  );
}
export default Home;
