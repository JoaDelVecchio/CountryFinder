const Filter = ({ setFilterValue, filterValue }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Find countries"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
    </div>
  );
};

export default Filter;
