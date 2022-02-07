import axios from "axios";
import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import arrowRight from "../../assets/arrow-right.svg";
import Modal from "../DescriptionModal";


export default function LogsList() {
  const { user } = useParams();
  const [logs, setLogs] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('')
  useEffect(() => {
    axios
      .get(`http://localhost:8000/logs `)
      .then((res) => {
        setLogs(res.data.Log);
      })
      .catch((err) => {
        console.log("error from logs", err);
      });
  }, []);

  const handleModalClose = () => {
      setOpenModal(false)
  }

  const handleDescriptionModal = (description)=>{
    setOpenModal(!openModal)
    setCurrentDescription(description)
  }
  return (
      <>
      {(openModal) && <Modal handleModalClose={handleModalClose} description={currentDescription} />}
    <div className="table-responsive-y">
      <table className="table table-responsive table-hover usertable mt-4">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Current Price</th>
            <th scope="col">Market</th>
            <th scope="col">Advice</th>
            <th scope="col">Coins</th>
            <th scope="col">Balance</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {logs?.map(
            ({ quantity, market, currentPrice, advice, userName, balance, description="" }, index) => {
              return (
                <tr>
                  <td style={{ textTransform: "capitalize" }}>{userName}</td>
                  <td>{currentPrice.toFixed(2)}</td>
                  <td>{market}</td>
                  <td
                    style={{
                      color: advice === "buy" ? "green" : "red",
                      textTransform: "capitalize",
                    }}
                  >
                    {advice}
                  </td>
                  <td>{Math.round(quantity)}</td>
                  <td>{balance}</td>
                 <td className="d-flex align-items-center border-bottom show-transaction-link" onClick={()=>handleDescriptionModal(description)}>
                  View Description{" "}
                  <img
                    src={arrowRight}
                    className="arrow-right-img"
                  />
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
    </>
  );
}
