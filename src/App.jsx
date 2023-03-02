import "./App.css";
import { useState, useEffect } from "react";
import { Ring } from "react-awesome-spinners";

function App() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [counter, setCounter] = useState(0);

  const url =
    "https://api.giphy.com/v1/gifs/search?api_key=qbJze5GSpd3UhrOIouNn80kXmkE3OEhN&q=thor&limit=25&offset=0&rating=g&lang=en";

  // 1. Fetch

  // const getGifs = async () => {
  //   const response = await fetch(url);
  //   const { data } = await response.json();

  //   const gifs = data.map((gif) => {
  //     return {
  //       id: gif.id,
  //       title: gif.title,
  //       images: gif.images.downsized_small,
  //     };
  //   });
  //   // console.log(gifs);
  //   return setGifs(gifs);
  // };

  // getGifs();

  /*   const addValue = () => {
    setCounter(counter + 1);
  }; */

  // 2. useEffect
  // useEffect(async () => {}, []);

  // 3. useEffect Iterable
  useEffect(() => {
    setError(false);
    setLoading(true);
    const fetchData = () => {
      try {
        setTimeout(async () => {
          // Simplemente me faltaba el async ya que es una función asincrona y tengo awaits dentro -_-
          const response = await fetch(url);
          const { data } = await response.json();
          const gifs = data.map((gif) => {
            return {
              id: gif.id,
              title: gif.title,
              images: gif.images.original.url,
            };
          });
          setGifs(gifs);
          setLoading(false);
        }, 5000);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return (
    <>
      {/* <button onClick={addValue}>Add Value </button> */}

      {error ?? "Fetch not working"}
      {loading ? <Ring /> : null}
      {gifs
        ? gifs.map((gif) => (
            <div key={gif.id}>
              <h3>{gif.title}</h3>
              <img src={gif.images} alt={gif.title} />
            </div>
          ))
        : "No hay información disponible"}
    </>
  );
}

export default App;
