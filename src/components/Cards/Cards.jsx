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
  const url = `http://gateway.marvel.com/v1/public/${category}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  useEffect(() => {
    const requestApi = async () => {
      try {
        const answer = await axios.get(url);
        setDatos(answer.data.data.results);
        console.log(datos);
      } catch (error) {
        console.error("Hubo un error: ", error);
      }
    };
    requestApi();
  }, []);

  https: return (
    <main className="container">
      <div className="cards">
        {datos.map((item) => (
          <Card
            key={item.id}
            cardPath={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
            cardTitle={item.title}
          ></Card>
        ))}
        {/* <Card
          cardPath=""
          cardTitle="Marvel Comic"
          cardDescription="Hola mundo"
        ></Card> */}
      </div>
    </main>
  );
};

export default Cards;
