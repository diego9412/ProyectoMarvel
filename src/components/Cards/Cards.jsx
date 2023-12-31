import React, { useEffect, useState } from "react";
import "./cards.css";
import Card from "../../elements/Card/Card";
import axios from "axios";

const Cards = (props) => {
  const [datos, setDatos] = useState([]);
  const ts = 2;
  const publicKey = "77d5d2752c62c83e2d997a5755e3b5aa";
  const hash = "cd8d6c6f7375aeaf8b2864d5e1dd76ac";
  //developer.marvel.com/documentation/authorization
  // https://www.md5hashgenerator.com/ ts, private public
  const category = "comics";
  const url = `https://gateway.marvel.com/v1/public/${category}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  useEffect(() => {
    const requestApi = async () => {
      try {
        const answer = await axios.get(url);
        console.log(datos);
        setDatos(answer.data.data.results);
      } catch (error) {
        console.error("Hubo un error: ", error);
      }
    };
    requestApi();
  }, [url]);

  const handleLogOut = () => {
    setUser([]);
  };

  return (
    <main className="container">
      <h1>Our Comics</h1>
      <div className="cards">
        {datos.map((item) => (
          <Card
            key={item.id}
            cardPath={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
            cardTitle={item.title}
            id={item.id}
          ></Card>
        ))}
      </div>
    </main>
  );
};

export default Cards;
