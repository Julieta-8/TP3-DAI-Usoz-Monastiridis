async function obtenerPais(nombrePais) {// usar async siempre que se usa una api
const fe = await fetch(`https://restcountries.com/v3.1/name/${nombrePais}`);
  const data = await res.json();
const pasi = data [0];
console.log("País:", pais.name.common);
console.log("Capital:", pais.capital[0]);
console.log("Región:", pais.region);
console.log("Población:", pais.population);
}
obtenerPais("Argentina");