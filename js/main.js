const ulList = document.querySelector("ul");

fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
  .then((Response) => Response.json())
  .then((data) => {
    console.log("Data:", data);
    const pokemons = data.results;

    for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      ulList.innerHTML += `<li>${pokemon.name}</li>`;
    }
  });


  fetch("https://dummyjson.com/products")
  .then((Response) => Response.json())
  .then((data) => {
    console.log("Data:", data);
    const dummy = dummy.products;
  });