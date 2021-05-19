import Header  from "./Components/Header/header";
import Routes from "./routes";
import Footer from './Components/Footer/footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css'
function App() {
  return (
    <div>
    <Header/>
    <Routes/>
    <Footer/>
    </div>
  );
}

export default App;
