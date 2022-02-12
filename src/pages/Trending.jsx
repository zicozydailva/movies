import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import './trending.css'
import SingleContent from "../components/SingleContext";
import CustomPagination from "../components/pagination/CustomPagination"

const Trending = () => {
  const [page, setPage] = useState(1)
  const [content, setContent] = useState();

  const fetchTrending = async () => {
    try {
      const {data} = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=c6b2f83c1a2bfa8a51adcd48f1e5c77d&page=${page}`
      );
      setContent(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [ page]);
  return  <div>
  <span className="pageTitle">Trending</span>
  <div className="trending">
    {content &&
      content.map((c) => (
        <SingleContent
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title || c.name}
          date={c.first_air_date || c.release_date}
          media_type={c.media_type}
          vote_average={c.vote_average}
        />
      ))}
  </div>
  <CustomPagination setPage={setPage} />
</div>
};

export default Trending;
