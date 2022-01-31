import { useState, useEffect } from "react";
import "../styles.css";

export default function Quotes() {
  const [dataSimpson, setDataSimpson] = useState([]);

  const handleApi = async () => {
    const response = await fetch(
      "https://simpsons-quotes-api.herokuapp.com/quotes"
    );
    const data = await response.json();
    console.log(data);

    setDataSimpson(data);
  };

  useEffect(() => {
    handleApi();
  }, []);

  const handleClick = () => {
    handleApi();
  };

  return (
    <div className="App">
      <div>
        {dataSimpson.map(({ quote, character, image }) => {
          return (
            <>
              {" "}
              <h2>{character}</h2>
              <img src={image} alt={character} />
              <p>
                <span>{quote}</span>
              </p>{" "}
            </>
          );
        })}
        <button onClick={handleClick}>Random quote</button>
      </div>
    </div>
  );
}
