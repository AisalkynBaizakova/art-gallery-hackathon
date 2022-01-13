import React from "react";
import { Link } from "react-router-dom";
import "./CashOut.css";

const CashOut = () => {
  function handleClickAlert() {
    alert("Thanks a lot for purchase!");
  }
  return (
    <div className="back">
      <div className="checkout_form">
        <h1>Enter card details</h1>
        <div className="card_number" id="card-container">
          <img
            className="visa"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
          />
          <input
            type="text"
            maxLength="16"
            className="input"
            id="card"
            placeholder="0000 0000 0000 0000"
          />
          <div id="logo"></div>
        </div>
        <div className="card_grp">
          <div className="expiry_date">
            <input
              type="text"
              maxLength="2"
              className="expiry_input"
              data-mask="00"
              placeholder="00"
            />
            <input
              type="text"
              maxLength="2"
              className="expiry_input"
              data-mask="00"
              placeholder="00"
            />
          </div>
          <div className="cvc">
            <input
              type="text"
              maxLength="3"
              className="cvc_input"
              data-mask="000"
              placeholder="000"
            />
            <div className="cvc_img">
              ?
              <div className="img">
                <img src="https://i.imgur.com/2ameC0C.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Link to="/">
          {" "}
          <div onClick={handleClickAlert} className="btn">
            Purchase
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CashOut;
