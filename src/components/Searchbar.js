const Searchbar = () => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Restaurants"
        className="searchbar"
      />
      <button className="btn">Search</button>
    </div>
  );
};

export default Searchbar;
