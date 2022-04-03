import React from "react";
import  "./Search.css";

const Search = () => {
  return (
    <form action="" className="Search__Box">
      <div className="wrap-input100 validate-input mb-3 d-flex align-items-center">
        <i className="fas fa-search" />
        <input
          className="input100"
          type="text"
          name="search"
          placeholder="Buscar.."
        />
        <span className="focus-input100"></span>
      </div>
    </form>
  );
};

function SearchBar(props) {
  const { value, setValue } = props;
  const search = (e) => {
    setValue(e.target.value);
  };
  console.log(value);
  return (
    <div className={"wrap-input100"}>
      <input
        type={"text"}
        placeholder="Search..."
        value={value}
        onChange={search}
        className={"input100"}
      />
    </div>
  );
}

export default Search;
