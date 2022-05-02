import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../redux/favorites/favoriteSlice";
import HeartIcon from "./HeartIcon";

const OFF_STATE = {
  outlineColor: "#000",
  fillColor: "#fff",
};
const ON_STATE = {
  outlineColor: "#000",
  fillColor: "#ff0000",
};
const HOVER_STATE = {
  outlineColor: "#fff",
  fillColor: "#e9e9e9",
};

export default function FavoriteButton({ id }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.favorites?.ids?.includes(id));
  const [uiState, setUiState] = useState(OFF_STATE);
  useEffect(() => {
    if (isFavorite) {
      setUiState(ON_STATE);
    } else {
      setUiState(OFF_STATE);
    }
  }, [isFavorite]);

  function handleClick() {
    dispatch(toggleFavorite(id));
  }

  function handleMouseover() {
    setUiState(HOVER_STATE);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="block w-16 h-16 flex justify-center items-center"
    >
      <HeartIcon
        size={32}
        outlineColor={uiState.outlineColor}
        fillColor={uiState.fillColor}
      />
    </button>
  );
}
