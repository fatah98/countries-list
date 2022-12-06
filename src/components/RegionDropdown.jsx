import React from "react";

const regions = [
  "All",
  "Africa",
  "America",
  "Asia",
  "Europe",
  "Oceania",
  "Antarctic",
];
const RegionDropdown = ({ region, setRegion }) => {
  return (
    <div className="shadow px-1">
      <select
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        className="w-full oultine-none focus:ring-0 border-none bg-LightModeElements text-LightModeText dark:bg-DarkModeElements dark:text-DarkModeText"
      >
        {regions.map((region, index) => {
          return (
            <option value={region} key={index} className="">
              {region}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default RegionDropdown;
