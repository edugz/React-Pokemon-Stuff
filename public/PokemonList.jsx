const baseURL = (pokemonNumber) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;
};
const PokemonList = [
  {
    id: 1,
    name: "Lucario",
    sprite: baseURL(448),
    signatureMove: "Aura Sphere",
  },
  {
    id: 2,
    name: "Blaziken",
    sprite: baseURL(257),
    signatureMove: "Blaze Kick",
  },
  { id: 3, name: "Lugia", sprite: baseURL(249), signatureMove: "Aeroblast" },
  { id: 4, name: "Mew", sprite: baseURL(151), signatureMove: "Transform" },
  { id: 5, name: "Garchomp", sprite: baseURL(445), signatureMove: "Outrage" },
  { id: 6, name: "Milotic", sprite: baseURL(350), signatureMove: "Surf" },
];

export default PokemonList;
