// app/api/pokemon/[id]/route.js
import { NextResponse } from 'next/server';

const fetchAPI = async (pokemonId) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
  if (!response.ok) throw new Error("Failed to fetch from PokeAPI");

  const data = await response.json();

  return {
    id: Number(pokemonId),
    name: data.names.find(el => el.language.name === 'ko')?.name,
    description: data.flavor_text_entries.find(el => el.language.name === 'ko')?.flavor_text,
    front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
    back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
  };
};

export async function GET(_, { params }) {
  try {
    const id = params.pokemonId;
    const data = await fetchAPI(id);
    return NextResponse.json({ pokemonData: data });
  } catch (err) {
    return NextResponse.json({ message: 'Not Found' }, { status: 404 });
  }
}
