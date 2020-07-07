import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function Character() {
  //   const [char, setChar] = useState([]);
  //   //   const [char2, setChar2] = useState([]);
  //   useEffect(() => {
  //     axios
  //       //   .get("https://rickandmortyapi.com/api/character")
  //       .get("https://swapi.py4e.com/api/people/")
  //       .then((response) => {
  //         console.log(response.data);
  //         // console.log(response.data.results[1]);
  //         // const getResults = Object.values(response.data.results);
  //         // getResults.map((item) => {
  //         // response.data.results.forEach((data) => {
  //         //   setChar(response.data);
  //         // });
  //         // setChar(response.data.results[0]);
  //         // setChar2(response.data.results[1]);
  //         setChar(response.data);
  //       })
  //       .catch((error) => {
  //         console.log("the data was not returned", error);
  //       });
  //   }, []);

  //   return (
  //     <div>
  //       {char.map((e) => {
  //         return (
  //           <CharacterCard name={e.name} hair={e.hair_color} dob={e.birth_year} />
  //         );
  //       })}
  //     </div>
  //   );
  // }

  const [char, setChar] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people/")
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
          <CharacterCard
            name={data.name}
            hair={data.hair_color}
            dob={data.birth_year}
            home={data.homeworld}
          />
        );
      })}
    </div>
  );
}
