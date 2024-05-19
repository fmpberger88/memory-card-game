import axios from "axios";

const getRandomPokemonIds = (count, maxId) => {
    const ids = new Set();
    while (ids.size < count) {
        ids.add(Math.floor(Math.random() * maxId) + 1);
    }
    return Array.from(ids);
}

export const fetchPokemonIds = async (count = 30) => {
    const pokemonIds = getRandomPokemonIds(count, 151); // Limiting to first 151 Pokémons
    console.log(pokemonIds);
    const promises = pokemonIds.map((id) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`));
    const results = await Promise.all(promises);

    return results.map(result => ({
        id: result.data.id,
        name: result.data.name,
        image: result.data.sprites.front_default,
        flipped: true,
    }));
}