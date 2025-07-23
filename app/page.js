import { Card } from "../components/Card";
import Link from "next/link";

const getAllPokemon = async () => {
  const pokemonList = await fetch("http://localhost:3000/api/pokemon", {
    method: "GET",
    headers: {"Content-Type" : "application/json"},
    cache: "no-store",
  });
  const pokemonData = await pokemonList.json();

  return {pokemonData: [...pokemonData.pokemonData]}
}

export default async function Home() {
  const {pokemonData} = await getAllPokemon();
  return (
    <>
      <div className='bg-[gray] flex flex-wrap gap-[20px] 
                      justify-center pt-[20px] pb-[20px]'>
        {pokemonData.map((pokemon) => (
          <Link key={pokemon.id} href={`/detail/${pokemon.id}`}>
            <Card key={pokemon.id} pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </>
  );
}
