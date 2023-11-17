/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardsCollection from "../cardsCollection/CardsCollection";
import NavBar from "../nav-bar/NavBar";

const HomePage = () => {
  const [cardsData, setCardsData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [fullData, setFullData] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.magicthegathering.io/v1/cards?page=${pageNo}&pageSize=20`
      );

      setCardsData((previous) => [...previous, ...data.cards]);
      setFullData((previous) => [...previous, ...data.cards]);
      setIsLoading(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  const makeSearch = (value: any) => {
    console.log(value);

    if (value !== "") {
      const searchResult = fullData.filter(
        (item) => item.name.includes(value) && item.imageUrl
      );

      const uniqueArray = Array.from(new Set(searchResult.map((item) => item.name)))
        .map((name) => searchResult.find((item) => item.name === name));

      setCardsData(uniqueArray);
    } else {
      setPageNo(1);
    }
  };

  return (
    <section>
      <NavBar search={makeSearch} />
      <div>
        {isLoading ? (
          <CardsCollection cards={cardsData} />
        ) : (
          <>Loading Data...</>
        )}
      </div>
      <div className="w-full flex justify-around my-5">
        <button
          type="button"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-auto"
          onClick={() => {
            setPageNo((previous) => previous + 1);
          }}
        >
          Load More Data
        </button>
      </div>
    </section>
  );
};

export default HomePage;
