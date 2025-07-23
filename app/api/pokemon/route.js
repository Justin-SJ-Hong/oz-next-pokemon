import { NextResponse } from "next/server";

export const fetchAPI = async (pokemonId) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`, {method: "GET"});
    const data = await response.json();

    const pokemonData = {
        id: pokemonId,
        name: data.names.find(el => el.language.name === 'ko')?.name,
        description: data.flavor_text_entries.find(el => el.language.name === 'ko')?.flavor_text,
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
    }

    return pokemonData;
}

export async function GET(req) {
    const maxId = process.env.NEXT_PUBLIC_LIST_LIMIT;

    const numberArray = Array.from({length: maxId}, (_, i) => i + 1);

    const data = await Promise.all(numberArray.map((id) => fetchAPI(id)));

    return NextResponse.json({pokemonData: data})
}