import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/headlines")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Can't Get Data");
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div></div>;
}

export default App;
