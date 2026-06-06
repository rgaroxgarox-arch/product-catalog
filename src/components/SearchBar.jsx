function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Cari produk..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />
  );
}

export default SearchBar;