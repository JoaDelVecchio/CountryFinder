const Filter = ({ setFilterValue, filterValue }) => {
  <div>
    find countries
    <input
      type="text"
      placeholder="find countries"
      value={filterValue}
      onChange={(e) => setFilterValue(e.target.value)}
    />
  </div>;
};

export default Filter;
