import React from "react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowCircleLeft, FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Loader } from "../components/Loader";

const DetailsPage = () => {
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState(null);
  const { cca_code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const countryDetails = async () => {
      try {
        const resp = await fetch(
          `https://restcountries.com/v2/alpha/${cca_code}`
        );
        const data = await resp.json();
        const parsedData = {
          flag: data.flags.png,
          population: data.population ?? 0,
          countryName: data.name,
          nativeName: data.nativeName,
          capital: data.capital,
          region: data.region,
          subregion: data.subregion,
          topLevelDomain: data.topLevelDomain[0],
          currencies: data.currencies,
          languages: data.languages,
          borders: data.borders,
        };
        console.log(parsedData);
        setCountry(parsedData);
        setLoading(false);
        // console.log(data);
      } catch (err) {
        console.log(err);
        toast.error("An error occurred while fetching the countries data");
        setTimeout(() => {
          navigate("..");
        }, 2000);
      }
    };

    countryDetails();
  }, []);

  return (
    <main className="flex flex-col gap-5 p-5 mx-auto max-w-7xl">
      {loading && <Loader />}
      <div className="flex flex-col gap-8 dark:text-DarkModeText">
        <div className="">
          <Link
            to=".."
            className="bg-white dark:bg-DarkModeBackground dark:text-white flex items-center gap-1 shadow-md p-2 hover:text-slate-800 rounded px-3 max-w-max"
          >
            <FaArrowCircleLeft />
            <span>Back</span>
          </Link>
        </div>
        <div className="flex flex-col gap-5 md:gap-10 md:flex-row  lg:items-center lg:gap-x-12">
          <div className="xl:flex-[1]">
            <img src={country?.flag} className="w-full xl:w-3/4" alt="" />
          </div>
          <div className="xl:flex-1">
            <h1 className="text-2xl font-bold">{country?.countryName}</h1>
            <div className="flex flex-col lg:flex-row gap-8 mt-5 lg:gap-24">
              <div className="flex flex-col gap-2">
                <p className="flex gap-1">
                  <span className="font-bold">Native Name:</span>
                  {country?.nativeName}
                </p>
                <p className="flex gap-1">
                  <span className="font-bold">Population:</span>
                  {Intl.NumberFormat().format(country?.population)}
                </p>
                <p className="flex gap-1">
                  <span className="font-bold">Region:</span>
                  {country?.region}
                </p>
                <p className="flex gap-1">
                  <span className="font-bold">Sub Region:</span>
                  {country?.subregion}
                </p>
                <p className="flex gap-1">
                  <span className="font-bold">Capital:</span>
                  {country?.capital}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="flex gap-1">
                  <span className="font-bold">Top Level Domain:</span>
                  {country?.topLevelDomain}
                </p>
                <p className="flex gap-1">
                  <span className="font-bold">Currencies:</span>
                  {country?.currencies
                    ?.map((c) => {
                      return c.name;
                    })
                    ?.join(",")}
                </p>
                <p className="flex gap-1">
                  <span className="font-bold">Languages:</span>
                  {country?.languages
                    ?.map((c) => {
                      return c.name;
                    })
                    ?.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
