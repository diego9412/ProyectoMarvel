import "./cardDetailComic.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetailComic = () => {
  const [detalle, setDetalle] = useState([]);
  const { id } = useParams();
  const ts = 2;
  const publicKey = "77d5d2752c62c83e2d997a5755e3b5aa";
  const hash = "cd8d6c6f7375aeaf8b2864d5e1dd76ac";
  const category = "comics";
  const url = `https://gateway.marvel.com/v1/public/${category}/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  useEffect(() => {
    const requestApi = async () => {
      try {
        const answer = await axios.get(url);
        setDetalle(answer.data.data.results[0]);
        console.log(answer.data.data.results[0]);
      } catch (error) {
        console.error("Se presento este error: " + error);
      }
    };
    requestApi();
  }, []);

  if (!detalle || !detalle.thumbnail) {
    return (
      <div class="spinner-grow text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <main className="container">
      <h1>Comic Detail</h1>
      <div className="card-detail">
        <img
          src={`${detalle.thumbnail.path}/portrait_uncanny.${detalle.thumbnail.extension}`}
        />
        <div className="card-detail-info">
          <h2>{detalle.title}</h2>
          <h3>To know more about the comic: </h3>
          <h4>
            <a href={detalle.urls[0].url} target="_blank">
              {detalle.urls[0].url}
            </a>
          </h4>
          <h3>Price: </h3>
          <h4>$ {detalle.prices[0].price} USD</h4>
          <h4>
            **** It is important to clarify that this price applies to the
            online format ****
          </h4>
        </div>
      </div>
    </main>
  );
};

export default CardDetailComic;
