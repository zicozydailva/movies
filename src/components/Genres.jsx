import { Chip } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  genres,
  setGenres,
  selectedGenres,
  setSelectedGenres,
  type,
  setPage,
}) => {
    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };
    
      const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=c6b2f83c1a2bfa8a51adcd48f1e5c77d&language=en-US`
    );
    setGenres(data.genres);
  };
  useEffect(() => {
    fetchGenres();

    // To unmount the api call
    return () => {
      setGenres({});
    };
        // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: 2 }}
            color="primary"
            clickable
            size="small"
            key={genre.id}
            onDelete={() => handleRemove(genre)}

          />
        ))}

      {genres &&
        genres.map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: 2 }}
            clickable
            size="small"
            key={genre.id}
            onClick={() => handleAdd(genre)}

          />
        ))}
    </div>
  );
};

export default Genres;
