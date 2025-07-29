import "../styles/home.css";
import Slideshow from "../components/imageSlider";
import VideoSlider from "../components/videoSlider"; // Import the VideoSlider component
import SlideUpBox from "../components/sildeUpBox"; // Import the Aeroplane component
import Aeroplane from "../components/aeroplane";
import Proffesinal from "../components/proffesinalSummary";
import Project from "../components/project";

function Home() {
  return (
    <div className="home">
      <Slideshow />
      <h1>
        <center>Hi, Welcome Guys</center>
      </h1>
      <SlideUpBox />
      <Aeroplane />
      <Proffesinal />
      <Project />
    </div>
  );
}
export default Home;
