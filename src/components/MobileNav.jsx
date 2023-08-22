import React from 'react'
import Depositt from "../assets/images/Deposit.png";
import Earn from "../assets/images/Earn.png";
import Withdraw from "../assets/images/Withdraw.png";
import Arbitrage from "../assets/images/Arbitrage.png";
import Transactions from "../assets/images/Transactions.png";
import { Link } from 'react-router-dom';

export const MobileNav = () => {
    const navElements = [
        {
          name: "Dashboard",
          image: Depositt,
        },
        {
          name: "Deposit",
          image: Depositt,
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
        <div className="flex flex-row bg-slate-900 h-[80px] w-screen justify-between items-center  bottom-0 fixed px-3 text-sm md:hidden">
              {navElements.map((element, index) => (
                <Link key={index} to={`/${element.name}`}>
                  <div className="flex flex-col text-white items-center   cursor-pointer duration-300 h-[100%]">
                    <img src={element.image} alt={`${element.name}`} className="w-8 h-8 text-blue-950" />
                    <p>{element.name}</p>
                  </div>
                </Link>
              ))}
            </div>
    </div>
  )
}
