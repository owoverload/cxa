import React, { useState , useEffect } from 'react';
// import logo from './logo.svg';
import './Transaction.css';
import { TransactionContract } from "./setup";
import {ShowTransactions } from "./ShowTransactions";

function Transaction (props) {
  
    let [hawkers , setHawkers] = useState([{name:'Dolor Sit',amount:0}, {name:'Jerry',amount:0}, {name:'Larry',amount:0}, {name:'Barry',amount:0}])
   
    useEffect(()=>{
        setHawkers(hawkers => hawkers.map(
            (el)=>{
                let displayAmount=TransactionContract.totalAmountFor(el.name).toNumber()
                return Object.assign({},el,{amount:displayAmount})
            }
          
          ))
    },[])


let handleOffer = (hawker,amount) => {
    TransactionContract.setAmount(hawker,amount)
    let displayAmount=TransactionContract.totalAmountFor(hawker).toNumber()
    setHawkers(hawkers => hawkers.map(
      (el)=>el.name===hawker? Object.assign({},el,{amount:displayAmount}):el
    
    ))
  }

  
    return (
      <div className="Transaction">
        <header className="Transaction-header">
          <h1 className="Transaction-title">Welcome to Ethereum</h1>
        </header>
        <p className="Transaction-intro">
          Transaction in Ethereum
        </p>
        <div className="Transaction-table">
          <ShowTransactions hawkers={hawkers} offer={handleOffer}/>
        </div>
      </div>
    );
}


export default Transaction;