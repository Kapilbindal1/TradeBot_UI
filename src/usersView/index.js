import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import searchIcon from "../assets/search.svg";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import UsersList from "./UsersList";
import TransactionsList from "./TransactionsList";
import arrowRight from "../../src/assets/arrow-right.svg";

const UsersView = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useParams();
  const handleSearch = (searchText) => {
    setSearch(searchText);
    let filtered = users.filter((item) =>
      item.name.toLowerCase().startsWith(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const showTransactions = (userName) => {
    navigate(`/transactions/${userName}`);
  };
  const viewLogs = (userName) => {
    navigate(`/logs/${userName ? userName : user.toString()}`)
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log("error from users", err);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="col-md-12 table-container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <h2 className="mb-0">
                  {location.pathname.includes("/transactions")
                    ? "Latest Transactions"
                    : "TradeBot Users"}
                </h2>
              </div>
              <div className="col-md-4">
                {!location.pathname.includes("/transactions") && (
                  <h4 className="mb-0 total-user">
                    Total Users: <span>{users.length}</span>
                  </h4>
                )}
              </div>

              {!location.pathname.includes("/transactions") ? (
                <div className="col-md-4">
                  <div className="input-group rounded">
                    <input
                      type="search"
                      className="form-control rounded"
                      placeholder={"Search by name"}
                      aria-label="Search"
                      aria-describedby="search-addon"
                      onChange={(e) => {
                        handleSearch(e.target.value);
                      }}
                    />
                    <img className="search-icon" src={searchIcon} />
                  </div>
                </div>
              ) : (
                <div
                  className="col-md-4 detail-logs"
                >
                  <button type="button" class="btn viewlogs-btn" onClick={viewLogs}>
                    View Logs{" "}
                    <img src={arrowRight} className="arrow-right-img" />{" "}
                  </button>
                </div>
              )}
            </div>
            {location.pathname.includes("/transactions") ? (
              <TransactionsList />
            ) : (
              <UsersList
                users={users}
                viewLogs={viewLogs}
                showTransactions={showTransactions}
                filteredData={filteredData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersView;
