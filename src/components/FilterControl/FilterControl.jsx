import React, { useState } from "react";
import PropTypes from "prop-types";
import FilterGroup from "../FilterGroup";

const FilterControl = ({
  fields,
  groups,
  onFilterValueChanged,
  filterValue,
}) => {
  const [filterControlValue, setFilterControlValue] = useState(filterValue);

  const handleFilterValueChanged = (newFilterValue) => {
    setFilterControlValue(newFilterValue);
    onFilterValueChanged(newFilterValue);
  };

  return (
    <div className="fc">
      <FilterGroup
        fields={fields}
        groups={groups}
        filterValue={filterControlValue}
        onFilterValueChanged={handleFilterValueChanged}
      />
    </div>
  );
};

FilterControl.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.any).isRequired,
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      caption: PropTypes.string,
    })
  ),
  filterValue: PropTypes.shape({
    groupName: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.any),
  }),
  onFilterValueChanged: PropTypes.func.isRequired,
};

FilterControl.defaultProps = {
  groups: [
    {
      name: "and",
      caption: "And",
    },
    {
      name: "or",
      caption: "Or",
    },
  ],
  filterValue: {
    groupName: "and",
    items: [],
  },
};

export default FilterControl;
