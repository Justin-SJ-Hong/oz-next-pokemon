import FlipCard from "../../../components/FlipCard";
import NotFound from "../../not-found";

export default async function Detail({ params }) {

    const { pokemonId } = params;

    const res = await fetch(`https://oz-next-pokemon-sigma.vercel.app/api/pokemon/${pokemonId}`, {
        method: "GET",
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("포켓몬 정보를 불러오지 못했습니다.");
    }

    const { pokemonData } = await res.json();

    if(Number(pokemonId) < 1 || Number(pokemonId) > process.env.NEXT_PUBLIC_LIST_LIMIT) {
        return <NotFound />
    } else {
        return (
            <div className="bg-white flex flex-col justify-center items-center border py-[30px] px-[60px] rounded-[10px] border-b-[8px] border-r-[8px] border-black">
                <div className="text-[24px] mb-[10px]">
                    {pokemonData.name}
                </div>
                <div className="whitespace-pre-wrap text-center">{pokemonData.description}</div>
                {/* <img className="w-[200px]" src={pokemon.front} /> */}
                <FlipCard front={pokemonData.front} back={pokemonData.back} />
            </div>
        )
    }
}