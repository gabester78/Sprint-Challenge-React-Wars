import React from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [char, setChar] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then((response) => {
        console.log(response.data);
        setChar(response.data.results);
      })
      .catch((error) => {
        console.log("the data was not returned", error);
      });
  }, []);

  return (
    <div>
      {char.map((data) => {
        return (
          <Character
            name={data.name}
            hair={data.hair_color}
            dob={data.birth_year}
            home={data.homeworld}
          />
        );
      })}
    </div>
  );
};

export default App;
