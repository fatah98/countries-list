import React from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";

const DetailsPage = () => {
  const { cca_code } = useParams();

  return (
    <main className="">
      {/* <Loader /> */}
      <p>DetailsPage --- {cca_code}</p>
    </main>
  );
};

export default DetailsPage;
