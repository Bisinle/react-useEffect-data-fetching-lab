import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((res) => res.json())
      .then((data) => {
        setImage(data.message);
        setLoading(false);
      });
  }, []);

  console.log(image);
  return (
    <div className="App">
      {loading ? <p>Loading</p> : <img src={image} alt="A Random Dog" />}
    </div>
  );
}

export default App;
