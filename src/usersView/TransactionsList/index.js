import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

export default function TransactionsList() {
  const [userTransactions, setUserTransactions] = useState([]);

  useEffect(() => {
    axios
    .get(`http://localhost:8000/getTransactionsByUser/test1234`)
    .then((res) => {
      setUserTransactions(res.data.data);
    })
    .catch((err) => {
      console.log("error from transactions", err);
    });
    return () => {
      setUserTransactions([]);
    };
  }, []);
  return (
    <div className="table-responsive-y">
      <table className="table table-responsive table-hover usertable mt-4">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Current Price</th>
            <th scope="col">Market</th>
            <th scope="col">Advice</th>
            <th scope="col">Info</th>
            <th scope="col">Coins</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {userTransactions?.map(
            ({ amount, market, cost, side, info, userName, date }, index) => {
              return (
                <tr>
                  <td style={{ textTransform: "capitalize" }}>{userName}</td>
                  <td>{Math.round(cost)}</td>
                  <td>{market}</td>
                  <td
                    style={{
                      color: side === "buy" ? "green" : "red",
                      textTransform: "capitalize",
                    }}
                  >
                    {side}
                  </td>
                  <td>{info ? "True" : "False"}</td>
                  <td>{Math.round(amount)}</td>
                  <td>{new Date(date).toLocaleDateString()}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}
