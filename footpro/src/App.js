import Routes from "./routes";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div>
      <Header/>
      <Routes/>
    </div>
  );
}

export default App;
