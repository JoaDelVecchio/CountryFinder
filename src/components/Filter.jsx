const Filter = ({ setFilterValue, filterValue }) => {
  <div>
    <p>find countries</p>
    <input
      type="text"
      placeholder="find countries"
      value={filterValue}
      onChange={(e) => setFilterValue(e.target.value)}
    />
  </div>;
};

export default Filter;
