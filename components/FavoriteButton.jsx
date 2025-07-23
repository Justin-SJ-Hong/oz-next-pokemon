'use client';

import { useDispatch, useSelector } from 'react-redux';
import { favoriteSlice } from '../RTK/slice';

export default function FavoriteButton({ pokemonId }) {
  const isFavorite = useSelector(
    (state) => state.favorite.some((item) => item === pokemonId)
  );
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(favoriteSlice.actions.removeFromFavorite({ pokemonId }));
    } else {
      dispatch(favoriteSlice.actions.addToFavorite({ pokemonId }));
    }
  };

  return (
    <button onClick={handleClick} className={isFavorite ? 'text-[red]' : ''}>
      {isFavorite ? '♥' : '♡'}
    </button>
  );
}
