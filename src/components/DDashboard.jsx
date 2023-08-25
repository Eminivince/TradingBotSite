import React from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { Link } from "react-router-dom";
import Avatar from "../assets/images/Avatar.png";
import Deposit from "../assets/images/Deposit.png";
import Earn from "../assets/images/Earn.png";
import Withdraw from "../assets/images/Withdraw.png";
import Arbitrage from "../assets/images/Arbitrage.png";
import Transactions from "../assets/images/Transactions.png";

const DDashboard = () => {
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
    <div>
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
    </div>
  )
}

export default DDashboard