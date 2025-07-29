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
      <VideoSlider />
    </div>
  );
}
export default Home;
