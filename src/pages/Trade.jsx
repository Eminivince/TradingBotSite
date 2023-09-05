import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hand from "../assets/images/Iphonehand.png";
import {
  MdSpaceDashboard,
  MdAccountBalanceWallet,

} from "react-icons/md";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaMoneyCheck } from "react-icons/fa";
import { AiFillCreditCard, AiFillQuestionCircle } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Avatar from "../assets/images/Avatar.png";

import { Link } from "react-router-dom";

import { MobileNav } from "../components/MobileNav";

const Trade = () => {
  const [data, setData] = useState({});
  const [selectedPair, setSelectedPair] = useState(null);

  const [mobileTrade, setMobileTrade] = useState(false);
  const [selectedContent, setSelectedContent] = useState('iiii');

  const toggleMobileTrade = () => {
    setMobileTrade((prevState) => !prevState);
    console.log("clicked");
  };

  const handlePairClick = (exchangeA, exchangeB) => {
    setSelectedPair({
      pool: `${exchangeA}/${exchangeB}`,
      poolA: `${exchangeA}`,
      poolB: `${exchangeB}`,
      priceA: data[exchangeA].price,
      priceB: data[exchangeB].price,
      // Add other relevant data as needed
    });
  };

  const updateSimulatedPrice = (price) => {
    const randomPercent = (Math.random() * (0.01 - 0.002) + 0.002) / 100;
    return price + price * randomPercent;
  };

  const calculateDifference = (priceA, priceB) => {
    const diff = ((priceB - priceA) / priceA) * 100;
    return diff.toFixed(2);
  };

  const fetchPriceAndSetForExchanges = async (
    exchangeList,
    url,
    pricePath,
    originalExchange
  ) => {
    try {
      const response = await fetch(url);
      const result = await response.json();

      const originalPrice = pricePath
        .split(".")
        .reduce((obj, key) => obj && obj[key], result);

      const updatedData = {};
      exchangeList.forEach((exchange) => {
        const randomizedPrice = updateSimulatedPrice(parseFloat(originalPrice));
        updatedData[exchange] = {
          price: randomizedPrice.toFixed(2),
          difference: calculateDifference(originalPrice, randomizedPrice),
          volume: "N/A", // Adjust as needed.
        };
      });

      setData((prev) => ({
        ...prev,
        [originalExchange]: {
          price: originalPrice,
          difference: "0.00", // No difference for the original price
          volume: "N/A",
        },
        ...updatedData,
      }));
    } catch (error) {
      console.error(`Error fetching data: `, error);
    }
  };

  useEffect(() => {
    const binanceExchanges = ["KucPool", "HubPool"];
    fetchPriceAndSetForExchanges(
      binanceExchanges,
      "https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT",
      "lastPrice",
      "Binance"
    );

    const kucoinExchanges = ["OkPool", "KrakPool", "HubPool", "PoolA"];
    fetchPriceAndSetForExchanges(
      kucoinExchanges,
      "https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT",
      "lastPrice",
      "Kucoin"
    );

    const interval = setInterval(() => {
      setData((prevData) => {
        const updatedData = {};
        for (const exchange in prevData) {
          const newPrice = updateSimulatedPrice(
            parseFloat(prevData[exchange].price)
          );
          updatedData[exchange] = {
            ...prevData[exchange],
            price: newPrice.toFixed(2),
            difference: calculateDifference(prevData.Binance.price, newPrice), // Assuming you want to compare with Binance's price. Adjust as needed.
          };
        }
        return updatedData;
      });
    }, 700);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(selectedContent);
}, [selectedContent]);

  const exchanges = Object.keys(data);

  return (
    <div className="bg-slate-300 pb-8 relative h-[100%] md:h-[150vh]">
      <div className="bg-white">
        <Navbar />
      </div>

      <header className="md:px-24 md:grid md:grid-cols-8 md:gap-3 flex justify-between md:space-x-5 mt-6 w-[96vw] md:w-full mx-auto">
        <div className="profile w-[100%] rounded-md md:flex items-center col-span-2 shadow-xl bg-white justify-around cursor-pointer hidden">
          <img
            src={Avatar}
            alt="ProfilePic"
            className="w-12 hover:animate-pulse duration-300"
          />
          <div className="flex flex-col items-center">
            <p className="font-bold text-2xl">Hi David,</p>
            <p className="font-semibold text-gray-600 text-sm hover:underline">
              ayomidedavid@gmail.com{" "}
            </p>
          </div>
        </div>
        <div className="balancce w-[100%] rounded-md col-span-3 flex justify-between font-bold items-center md:px-4 px-2 py-4 mr-1 shadow-xl bg-black text-white">
          <MdAccountBalanceWallet className="text-3xl" />
          <div className="flex flex-col items-center">
            <p className="text-xs md:text-base">Wallet balance</p>
            <p className="md:text-2xl">$5,200</p>
            <p className="text-xs md:text-base">1% Monthly Growth</p>
          </div>
          <h1 className="nd:text-4xl">75%</h1>
        </div>
        <div className="balancce w-[100%] rounded-md col-span-3 flex justify-between font-bold items-center md:px-4 px-2 py-4 ml-1 shadow-xl bg-green-700 text-white">
          <BsFillRocketTakeoffFill className="text-3xl" />
          <div className="flex flex-col items-center">
            <p className="text-xs md:text-base">Pending Trade</p>
            <p className="md:text-2xl">$3,600</p>
            <p className="text-xs md:text-base">1% Monthly Growth</p>
          </div>
          <h1 className="md:text-4xl">25%</h1>
        </div>
      </header>
      <main className="md:px-24 mt-6 md:grid md:grid-cols-8 md:space-x-6 justify-between">
        <div className="sidebarr bg-white rounded-md w-[98%] col-span-2 shadow-xl hidden md:block">
          <div className="mb-14">
            <Link to="/Dashboard">
              <div className="flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium bg-slate-400 cursor-pointer duration-300">
                <MdSpaceDashboard className="text-4xl text-blue-950" />
                <p>Dashboard</p>
              </div>
            </Link>
            <div className="flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400 cursor-pointer duration-300">
              <FaMoneyCheck className="text-4xl text-blue-950" />
              <p>Deposit</p>
            </div>
            <div className="flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400 cursor-pointer duration-300">
              <AiFillCreditCard className="text-4xl text-blue-950" />
              <p>Withdrawal</p>
            </div>
            <div className="flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400 cursor-pointer duration-300">
              <MdSpaceDashboard className="text-4xl text-blue-950" />
              <p>Trade</p>
            </div>
            <div className="flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400">
              <MdSpaceDashboard className="text-4xl text-blue-950" />
              <p>Transactions</p>
            </div>
            <div className="flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400 cursor-pointer duration-300">
              <BsFillRocketTakeoffFill className="text-4xl text-blue-950" />
              <p>Earn</p>
            </div>
          </div>
          <div className="supportt">
            <div className="flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400 cursor-pointer duration-300">
              <AiFillQuestionCircle className="text-4xl text-blue-950" />
              <p>Support</p>
            </div>
            <div className="flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium hover:bg-slate-400 cursor-pointer duration-300">
              <RiLogoutBoxRLine className="text-4xl text-blue-950" />
              <p>Logout</p>
            </div>
          </div>
        </div>
        <div className="rounded-md shadow-xl md:grid md:grid-cols-2 md:gap-3 md:w-[100%] w-[96vw] mx-auto col-span-6">
          {mobileTrade && <div className="md:hidden">
          <div className="bg-white shadow-xl h-[100%] rounded-md p-2 flex flex-col space-y-4 items-center">
            <div className="mb-1 self-start">
              <div className="py-2 px-4 rounded-md text-white bg-blue-950">
                Select
              </div>
            </div>
            <div className="flex  w-full justify-between space-x-2 md:space-x-0">
              <div className="py-2 border-2 w-32 text-center font-medium border-blue-950 rounded-md">
                Differences
              </div>
              <div className="py-2 border-2 w-32 text-center font-medium border-blue-950 rounded-md">
                Buy From
              </div>
              <div className="py-2 border-2 w-32 text-center font-medium border-blue-950 rounded-md">
                Sell At
              </div>
            </div>

            <div className="w-full px-4">
              <div>
                {exchanges.map((exchangeA, idxA) =>
                  exchanges.slice(idxA + 1).map((exchangeB) => (
                    <div
                      key={`${exchangeA}-${exchangeB}`}
                      onClick={() => {
                        handlePairClick(exchangeA, exchangeB);
                        toggleMobileTrade();
                        setSelectedContent({
                          
                          exchangeA: exchangeA,
                          exchangeB: exchangeB,
                          difference: calculateDifference(data[exchangeA].price, data[exchangeB].price),
                          priceA: data[exchangeA].price,
                          priceB: data[exchangeB].price
                          
                      });
                    }}

                      className="flex justify-between w-full mb-2 border-2 border-slate-500 p-2 rounded-lg hover:cursor-pointer hover:bg-slate-300"
                    >
                      <div className="flex flex-col">
                        <h1 className="font-semibold">
                          {calculateDifference(
                            data[exchangeA].price,
                            data[exchangeB].price
                          )}
                          %
                        </h1>
                        <h1>BTC/ETH</h1>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="font-semibold">{exchangeA}</h1>
                        <h1>${data[exchangeA].price}</h1>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="font-semibold">{exchangeB}</h1>
                        <h1>${data[exchangeB].price}</h1>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          </div>
}


          {!mobileTrade &&
          <div className="bg-white shadow-xl min-h-[90vh] rounded-md p-2 md:flex flex-col items-center">
            <div className="mb-1 self-start">
              <div className="py-2 px-4 rounded-md text-white bg-blue-950">
                Confirm
              </div>
            </div>

            <div className="w-full">
              <div>
                <h1 className="text-4xl font-bold mt-2 mb-5 text-center">
                  Pair Details
                </h1>
                <div>
                  <div className="flex justify-between w-full font-semibold text-xl mb-5 px-3 border-b-2 pb-4 border-slate-600">
                    <h1>Pool</h1>
                    <p>-</p>
                    <div>
                      {selectedContent.exchangeA ? (
                        <h1>
                          {(selectedContent.exchangeA)}/{(selectedContent.exchangeB)}
                        </h1>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between w-full font-semibold text-xl mb-5 px-3 border-b-2 pb-4 border-slate-600">
                    <h1>Pairs</h1>
                    <p>-</p>
                    <h1>ETH/BTC</h1>
                  </div>
                  <div className="flex justify-between w-full font-semibold text-xl mb-5 px-3 border-b-2 pb-4 border-slate-600">
                    <h1>{`${selectedContent.exchangeA}`} Marker</h1>
                      <p>-</p>
                      <h1>{`${selectedContent.priceA}`}</h1>
                  </div>
                  <div className="flex justify-between w-full font-semibold text-xl mb-10 px-3 border-b-2 pb-4 border-slate-600">
                  <h1>{`${selectedContent.exchangeB}`} Marker</h1>
                      <p>-</p>
                      <h1>{`${selectedContent.priceB}`}</h1>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold mt-2 mb-5 text-center">
                  Trade Details
                </h1>
                <div>
                  <div className="flex justify-between w-full font-semibold text-xl mb-5 px-3 border-b-2 pb-4 border-slate-600">
                    <h1>Trade Timer</h1>
                    <p>-</p>
                    <h1>3 Hrs 30 Mins</h1>
                  </div>
                  <div className="flex justify-between w-full font-semibold text-xl mb-5 px-3 border-b-2 pb-4 border-slate-600">
                    <h1>Arbitrage Profit</h1>
                    <p>-</p>
                    <h1>{`${(selectedContent.priceB - selectedContent.priceA ).toFixed(2)}`}</h1>
                  </div>
                  <div className="flex justify-between w-full font-semibold text-xl mb-10 px-3 border-b-2 pb-4 border-slate-600">
                    <h1>Platform Fee</h1>
                    <p>-</p>
                    <h1>{`${(((selectedContent.priceB - selectedContent.priceA ).toFixed(2)) / 3000).toFixed(5)}`}</h1>
                  </div>
                </div>
              </div>
            </div>

            <div
              className=" w-fit py-2 px-12 rounded-md bg-blue-950 text-white "
              onClick={() => toggleMobileTrade()}
            >
              <button type="submit">TRADE</button>
            </div>
          </div>
          }

        </div>
      </main>
      <div className="mt-8 absolute bottom-0 w-full">
        <MobileNav />
      </div>
    </div>
  );
};

export default Trade;
