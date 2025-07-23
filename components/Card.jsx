'use client';
import { memo, useState } from 'react';

export const Card = memo(({ pokemon }) => {
    const [isImageLoading, setIsImageLoading] = useState(true);

    return (
        <section
            className="w-[150px] border-1 border-solid border-[gray] 
            rounded-[10px] border-b-[5px] border-b-solid border-b-[black] 
            border-r-[5px] border-r-solid border-r-[black] flex flex-col 
            justify-center items-center gap-[10px] pb-[10px]"
            // onClick={() => router.push(`/detail/${pokemon.id}`)}
        >
            {isImageLoading ? (
                <div className="w-[120px] h-[120px] leading-[120px]">로딩중......</div>
            ) : null}
            <img
                onLoad={() => setIsImageLoading(false)}
                className="w-[120px] h-[120px]"
                src={pokemon.front}
                style={{ display: isImageLoading ? 'none' : 'block' }}
                alt={pokemon.name}
                loading='lazy'
            />
            <div>
                {pokemon.name}
            </div>
        </section>
    );
});
