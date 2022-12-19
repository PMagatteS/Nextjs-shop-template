import { useStateContext } from "../context/useStateContext";
import {BiSearchAlt} from 'react-icons/bi'

const Searchbar = () => {
  const {getSearchText, search} = useStateContext()
  return (
    <div className="searchbar">
      <form action="" className="form" onSubmit={search}>
        <div className="search-button">
        <BiSearchAlt className="search-icon"></BiSearchAlt>
        </div>
        <input
          type="search"
          onChange={getSearchText}
        />
      </form>
    </div>
  );
};

export default Searchbar;
