import React, { useState, useEffect } from "react";

const PatitoDeGoma = () => {
  const [state, setState] = useState({
    seller: "La tienda de Pepito",
    productName: "Patito de goma",
    productPrice: 0.99,
    productDescription: "Patito de goma de color amarillo super molón",
    productImage:
      "https://img.ltwebstatic.com/images3_pi/2022/09/05/1662354364718fabf83ae0e87166953c3910d474c4_thumbnail_600x.webp",
  });

  const asignId = () => {
    setState((prevState) => {
      console.log(prevState);

      return {
        ...prevState, // manten toda la info original y cambiame solo la que te especifíco abajo
        id: 1,
        productPrice: 99.99,
        productImage:
          "https://media.nauticamilanonline.com/c/product/patito-goma-the-flash-dc-comics-520x520.jpg",
      };
    });
  };

  useEffect(() => {
    console.log("Componente se monta == ComponentDidMount");

    return () => console.log("El component se desmonta === ComponentDidMount");
  }, [state]);

  return (
    <div>
      {/* <h1>AssignId</h1>
      {JSON.stringify(state)}
      <button onClick={asignId}>Asignar ID</button>
      <p>{state.id}</p>
      <p>{state.seller}</p>
      <p>{state.productName}</p>
      <p>{state.productPrice}</p>
      <p>{state.productDescription}</p>
      <img src={state.productImage} alt="" /> */}
    </div>
  );
};

export default PatitoDeGoma;
