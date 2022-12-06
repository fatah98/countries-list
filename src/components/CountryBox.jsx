import React from "react";
import { Link } from "react-router-dom";

const CountryBox = ({
  cca,
  flag,
  countryName,
  population,
  region,
  capital,
}) => {
  return (
    <Link
      to={`/details/${cca}`}
      className="overflow-hidden shadow-lg rounded-md bg-white dark:bg-DarkModeElements text-LightModeText dark:text-DarkModeText"
    >
      <div className="flex flex-col overflow-hidden">
        <img
          style={{
            aspectRatio: "3/2",
          }}
          className="w-full object-cover"
          src={flag}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-5 p-5">
        <h2 className="font-bold text-xl">{countryName}</h2>
        <div className="flex flex-col gap-2">
          <p className="flex gap-2">
            <span className="font-bold">Population:</span>
            <span>{population}</span>
          </p>
          <p className="flex gap-2">
            <span className="font-bold">Region:</span>
            <span>{region}</span>
          </p>
          <p className="flex gap-2">
            <span className="font-bold">Capital:</span>
            <span>{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryBox;
