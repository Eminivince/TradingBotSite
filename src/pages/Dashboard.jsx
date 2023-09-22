import React from "react";
import Navbar from "../components/Navbar";
import Hand from "../assets/images/Iphonehand.png";
import { MdSpaceDashboard, MdAccountBalanceWallet } from "react-icons/md";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaMoneyCheck } from "react-icons/fa";
import { AiFillCreditCard, AiFillQuestionCircle } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Avatar from "../assets/images/Avatar.png";
import Deposit from "../assets/images/Deposit.png";
import Earn from "../assets/images/Earn.png";
import Withdraw from "../assets/images/Withdraw.png";
import Arbitrage from "../assets/images/Arbitrage.png";
import Transactions from "../assets/images/Transactions.png";
import Chart from "../components/Chart";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { MobileNav } from "../components/MobileNav";
import Usernav from "../components/Usernav";


const Dashboard = () => {
    const navElements = [
        {
          name: "Dashboard",
          image: Deposit,
        },
        {
          name: "Deposit",
          image: Deposit,
        },
        {
          name: "Withdraw",
          image: Withdraw,
        },
        {
          name: "Trade",
          image: Arbitrage,
        },
        {
          name: "Transactions",
          image: Transactions,
        },
        {
          name: "Earn",
          image: Earn,
        },
      ];

  return (
    <div className="bg-slate-300 md:h-[150vh] h-[105vh] relative">
      <div className="bg-white">
        <Usernav />
      </div>
      <div className="h-screen">
        <header className="md:px-24 md:grid md:grid-cols-8 md:gap-3 md:justify-between space-x-2 md:space-x-5 mt-6 flex px-2 ">
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
          <div className="balancce w-[100%] rounded-md md:col-span-3 flex justify-between font-bold items-center px-4 shadow-xl bg-black text-white py-6 md:py-0">
            <MdAccountBalanceWallet className="md:text-3xl" />
            <div className="flex flex-col items-center">
              <p className="text-xs">Wallet balance</p>
              <p className="md:text-2xl">$5,200</p>
              <p className="hidden md:block">1% Monthly Growth</p>
            </div>
            <h1 className="md:text-4xl">75%</h1>
          </div>
          <div className="balancce w-[100%] rounded-md md:col-span-3 flex justify-between font-bold items-center px-4 shadow-xl bg-green-700 text-white py-6 md:py-0">
            <BsFillRocketTakeoffFill className="md:text-3xl" />
            <div className="flex flex-col items-center">
              <p className="text-xs">Pending Trade</p>
              <p className="md:text-2xl">$3,600</p>
              <p className="hidden md:block">1% Monthly Growth</p>
            </div>
            <h1 className="md:text-4xl">25%</h1>
          </div>
        </header>

        <main className="md:px-24 mt-6 md:grid md:grid-cols-8 md:space-x-6 md:justify-between ">
          <div className="sidebarr bg-white rounded-md w-[98%] col-span-2 shadow-xl hidden md:block">
            <div className="mb-14">
              {navElements.map((element, index) => (
                <Link key={index} to={`/${element.name}`}>
                  <div className="flex items-center space-x-6 m-3 p-2 rounded-md text-xl font-medium bg-slate-400 cursor-pointer duration-300">
                    <img src={element.image} alt={`${element.name}`} className="text-4xl text-blue-950" />
                    <p>{element.name}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="supportt hidden md:block">
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
          <div className="graphnsection w-[100%] md:col-span-6  rounded-md md:shadow-xl flex flex-col md:space-y-4">
            <div className="bg-white shadow-xl md:h-[65%] mx-4 rounded-md p-2 flex flex-col md:justify-between items-center">
              <div className="mb-4 self-start">
                <div className="py-2 px-4 rounded-md text-white bg-blue-950">
                  Total
                </div>
              </div>
              <div className="mb-1 flex flex-col items-center py-8">
                <p className="font-medium text-gray-400">Total Balance</p>
                <h1 className="font-bold text-2xl">
                  $<span>3,600.00</span>
                </h1>
              </div>

              <div className=" w-full h-full bg-slate-400 md:h-40 rounded-lg p-2 ">
                <Chart />
              </div>
            </div>
            <div className="btm--info md:flex w-[100%] h-[35%] space-x-6 hidden">
              <div className="buy bg-white shadow-xl w-[100%] rounded-md h-[100%] flex flex-col items-center space-y-5 pt-4 font-semibold">
                <div className="flex space-x-4 w-fit">
                  <button
                    type="button"
                    className="border border-blue-950 py-2 px-7"
                  >
                    Buy
                  </button>
                  <button type="button ">Sell</button>
                </div>
                <div>
                  <h1>Select Coin</h1>
                </div>
              </div>
              <div className="tx bg-white shadow-xl w-[100%] rounded-md h-[100%]">
                TX
              </div>
            </div>
            <MobileNav />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
