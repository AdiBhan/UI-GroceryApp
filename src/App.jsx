import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LogoImage from "./backgroundpic.jpg";
import GroceryList from "./components/body";
import Footers from "./components/footer";
function App() {
  var sectionStyle = {
    backgroundImage: `url(${LogoImage})`,
  };

  const background =
    "App bg-repeat  bg-gradient-to-r from-red-500 via-purple-500 to-blue-500  justify-center items-center overflow-hidden ";
  return (
    <div className={background}>
      <GroceryList></GroceryList>

      <Footers></Footers>
    </div>
  );
}

export default App;
