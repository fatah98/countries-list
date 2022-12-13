import React from "react";
import CountryBox from "../components/CountryBox";
import RegionDropdown from "../components/RegionDropdown";
import SearchBox from "../components/SearchBox";
import flag from "../assets/flag.jpg";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Loader } from "../components/Loader";
const Homepage = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
          toast.success("Countries data fetched successfully");
          const parsedData = data.map((item) => {
            return {
              cca: item.cca2,
              capital: item.capital ? item.capital[0] : "Unknown",
              region: item.region === "Americas" ? "America" : item.region,
              population: item.population ?? 0,
              countryName: item.name.common,
              flag: item.flags.png,
            };
          });
          setCountries(parsedData);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          toast.error("An error occurred while fetching the countries data");
        });
    };

    fetchData();
  }, []);
  const filteredCountries = countries
    .filter((country) => {
      return (
        search.length >= 0 &&
        country.countryName.toLowerCase().includes(search.toLocaleLowerCase())
      );
    })
    .filter((country) => {
      return region === "All" || region === country.region;
    });
  return (
    <main className="flex flex-col gap-5 p-5 mx-auto max-w-7xl">
      {loading && <Loader />}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0">
        <SearchBox search={search} setSearch={setSearch} />
        <RegionDropdown region={region} setRegion={setRegion} />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => {
            return (
              <CountryBox
                cca={country.cca.toLowerCase()}
                countryName={country.countryName}
                population={new Intl.NumberFormat().format(country.population)}
                region={country.region}
                capital={country.capital}
                flag={country.flag}
                key={country.cca}
              />
            );
          })
        ) : (
          <p
            style={{
              gridColumn: "1/-1",
            }}
            className="text-red-700 text-center italic mt-8"
          >
            No Countries matches your search... Please try again
          </p>
        )}
      </div>
    </main>
  );
};

export default Homepage;
