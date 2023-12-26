import "./App.css";
import AppName from "./components/AppName";
import Description from "./components/Description";
import DateAndTime from "./components/DateAndTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <center>
      <AppName />
      <Description />
      <DateAndTime />
    </center>
  );
}

export default App;
