import React from "react";
import useFetch from "../Hooks/useFetch";

function JokeCall() {
  const { data, loading, error } = useFetch(
    "https://v2.jokeapi.dev/joke/Programming?lang=es"
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>There was an error</h1>;

  const printTwoParts = (dataAux) => {
    if (dataAux?.type === "twopart")
      return (
        <h1>
          {dataAux?.setup}:{dataAux?.delivery}
        </h1>
      );
    else return <div></div>;
  };

  const printSingle = (dataAux) => {
    if (dataAux?.type === "single") return <h1>{data?.joke}</h1>;
    else return <div></div>;
  };

  return (
    <div>
      {printSingle(data)}
      {printTwoParts(data)}
    </div>
  );
}

export default JokeCall;
