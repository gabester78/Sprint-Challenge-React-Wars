import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function Character() {
  //   const [char, setChar] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get("https://swapi.co/api/people/1")
  //       .then((response) => {
  //         console.log(response.data.results);
  //         // const getResults = Object.values(response.data.results);
  //         // getResults.map((item) => {
  //         setChar(response.data.results);
  //       })
  //       .catch((error) => {
  //         console.log("the data was not returned", error);
  //       });
  //   }, []);

  return (
    <div>
      {/* {char.map((data) => { */}
      {/* return ( */}
      <CharacterCard
      // name={data.name}
      // hair={data.hair_color}
      // dob={data.birth_year}
      // home={data.homeworld}
      />
      {/* );
      })} */}
    </div>
  );
}
