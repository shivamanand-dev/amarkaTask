/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { StyledPairsCard } from "./StyledPairsCard";

import find from "../../images/find.svg";
import bubblemaps from "../../images/bubblemaps.51902376 1.svg";
import etherscan from "../../images/etherscan-logo-light-circle 1.svg";
import medium from "../../images/Medium.svg";
import discord from "../../images/ic_baseline-discord.svg";
import twitter from "../../images/ci_twitter.svg";
import telegram from "../../images/bxl_telegram.svg";
import computer from "../../images/mi_computer.svg";
import copy from "../../images/copy.svg";
import Buttons from "../Buttons";

const PairsCard = ({ data }) => {
  const n = data.profilePic;
  console.log(data.profilePic);
  return (
    <StyledPairsCard>
      <div className="profileDetails">
        <div>
          <img src={require(`../../images/${n}.png`)} width={137} alt="" />
        </div>
        <div className="icons">
          <img src={computer} width={15} />
          <img src={telegram} width={15} />
          <img src={twitter} width={15} />
          <img src={discord} width={15} />
          <img src={medium} width={15} />
          <img src={etherscan} width={15} />
          <img src={bubblemaps} width={15} />
        </div>

        <div className="timeListing">
          <p>Time Listed</p>
          <p className="time">{data.time} Hours</p>
        </div>
      </div>

      <div className="details">
        <div className="flex userDetail">
          <p className="name">{data.name}</p>
          <p className="profitEarned">{data.profit}</p>
          <select name="" className="timeDropdown" value="24hr">
            <option value="24hr">24HRS</option>
          </select>
        </div>
        <p className="subTitle">{data.subTitle}</p>

        <div className="userStats">
          <ul>
            <li>LIQUIDITY: {data.stats.liquidity}</li>
            <li>MARKET CAP: {data.stats.marketCap}</li>
            <li>24H VOLUME: {data.stats.volume}</li>
            <li>TOTAL SUPPLY: {data.stats.supply}</li>
          </ul>
        </div>

        <div className="flex wallet">
          <p className="flex">
            <span>Contract:</span> 0xaa1db055d53f14f7e6a13e01097b17db620d3ef4
            <img src={copy} width={15} />
          </p>
          <p className="flex">
            <span>Pair:</span> 0x8ab4309019d7674c6112eb32698a30fdcba6a278
            <img src={copy} width={15} />
          </p>
        </div>

        <div className="flex featureContainer">
          {data.features.map((e) => {
            return (
              <div className="flex featureItem" key={e.name}>
                {e.status === "green" && <div className="greenIndicator"></div>}
                {e.status === "warning" && (
                  <div className="warningIndicator"></div>
                )}
                <p>{e.name}</p>
              </div>
            );
          })}
        </div>

        <div className="buttons flex">
          <Buttons btnText="Trade" />
          <Buttons btnText="CHART" type="" />
          {data.isPoor && (
            <Buttons
              btnText="Poor structure but low risk of a scam."
              type="warning"
            />
          )}
        </div>
      </div>
      <div className="rating flex">
        <div
          className="pentagon"
          style={{ background: data.rating > 90 ? "#498D21" : "#c77802" }}
        >
          <p className="ratingText">
            <span style={{ fontSize: "24px" }}>{data.rating}</span>
            <br />
            <span
              style={{
                fontSize: "10px",
                color: "rgba(255, 255, 255, 0.5)",
                position: "relative",
                top: "-10px",
              }}
            >
              /100
            </span>
          </p>
        </div>

        <div className="findBtn flex">
          <img src={find} alt="" />
        </div>
      </div>
    </StyledPairsCard>
  );
};

export default PairsCard;
