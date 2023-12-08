// const ulList = document.querySelector("ul");

// fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
//   .then((Response) => Response.json())
//   .then((data) => {
//     console.log("Data:", data);
//     const pokemons = data.results;

//     for (let i = 0; i < pokemons.length; i++) {
//       const pokemon = pokemons[i];
//       ulList.innerHTML += `<li>${pokemon.name}</li>`;
//     }
//   });

const cards = document.querySelector(".ulList1");

fetch("https://dummyjson.com/products")
  .then((Response) => Response.json())
  .then((data) => {
    console.log("Data:", data);
    const products = data.products;

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      cards.innerHTML +=`<div class="card">${product.title}
      <img src="${product.thumbnail}"
      <h3>&euro;${product.price}</h3> 
      <h3>&euro;${product.discountPercentage}</h3>
      </div> `
    }
  });
