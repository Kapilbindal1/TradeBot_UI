import React from "react";
import "./index.css";
import arrowRight from "../../assets/arrow-right.svg";
import userIcon from "../../assets/user.svg";

export default function UsersList ({users, filteredData, showTransactions, viewLogs}) {
    return ( <div className="col-md-12 mt-4 content-section">
    <div className="row pt-4 header-section">
      <div className="col-md-1"></div>
      <div className="col-md-3">Username</div>
      <div className="col-md-2">Coins</div>
      <div className="col-md-2">Balance</div>
      <div className="col-md-4">Actions</div>
    </div>
    <div className="col-md-12 p-4 pt-0 pb-0 table-main">
    {users.length > 0 &&
      (filteredData.length > 0 ? filteredData : users).map((item) => {
        return (
          <div className="row align-items-center table-data">
            <div className="col-md-1">
              <img
                src={userIcon}
                className="user-img"
              />
            </div>
            <div className="col-md-3"><p className="mb-0">{item.name.split("_")[0]}</p></div>
            <div className="col-md-2">
              <p className="mb-0">{Math.round(item.coinsCount)}</p>
            </div>
            <div className="col-md-2"><p className="mb-0">{Math.round(item.balance)}</p></div>
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-6">
                  <button type="button" class="btn viewlogs-btn" onClick={()=>viewLogs(item.name)}>View Logs</button>
                </div>
                <div
                  className="col-md-6"
                >
                  <div className="d-flex align-items-center show-transaction-link" onClick={()=>showTransactions(item.name)}>
                  Show All Transactions{" "}
                  <img
                    src={arrowRight}
                    className="arrow-right-img"
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
  </div>)
}