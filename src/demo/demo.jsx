import React, { useState } from "react";
import FilterControl from "../filterControl";
import { filterValue, fields, groups } from "./data";

const stringifyFilterValue = (filterValue) =>
  JSON.stringify(filterValue, null, "  "); // Use consistent indentation

const FilterControlDemo = () => {
  const [filterValueText, setFilterValueText] = useState(
    stringifyFilterValue(filterValue)
  );

  // useEffect(() => {
  //   setFilterValueText(stringifyFilterValue(filterValue));
  // }, [filterValue]); // Update filterValueText on filterValue change

  const handleFilterValueChanged = (newFilterValue) => {
    setFilterValueText(stringifyFilterValue(newFilterValue));
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "30px" }}>
        <FilterControl
          fields={fields}
          groups={groups}
          filterValue={filterValue}
          onFilterValueChanged={handleFilterValueChanged}
        />
      </div>
      <div>
        <h3>Filter value:</h3>
        <pre>{filterValueText}</pre>
      </div>
    </div>
  );
};

export default FilterControlDemo;
