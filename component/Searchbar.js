import { useStateContext } from "../context/useStateContext";

const Searchbar = () => {
  const {getSearchText, search} = useStateContext()
  return (
    <div className="searchbar">
      <form action="" className="form" onSubmit={search}>
        <input
          type="search"
          onChange={getSearchText}
        />
      </form>
    </div>
  );
};

export default Searchbar;
