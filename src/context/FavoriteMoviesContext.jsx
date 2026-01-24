import { useContext, createContext, useState } from "react";

const FavoriteContext = createContext();

function ProviderFavoriteContext({ children }) {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  function toggleFavorite(movie) {
    const find = favoriteMovies.find((m) => m.id === movie.id);
    if (!find) {
      setFavoriteMovies([...favoriteMovies, movie]);
    } else {
      const filterMovies = favoriteMovies.filter((m) => m.id !== find.id);
      setFavoriteMovies(filterMovies);
    }
  }

  const value = {
    toggleFavorite,
    favoriteMovies,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

function useFavoriteContext() {
  return useContext(FavoriteContext);
}

export { ProviderFavoriteContext, useFavoriteContext };
