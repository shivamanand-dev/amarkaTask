import React from "react";
import { StyledMessageCard } from "./StyledMessageCard";

const MessageCard = ({ data }) => {
  const profilePic = data.profilePic;

  return (
    <StyledMessageCard>
      <div className="flex">
        <div className="profilePic">
          <img
            src={require(`../../images/${profilePic}.png`)}
            width={63}
            alt=""
          />
        </div>

        <div className="message">
          <div className="flex">
            <span className="name">{data.name}</span>{" "}
            <span className="subtitle">{data.subtitle}</span>{" "}
          </div>
          <div>
            <p>
              {data.message
                .split(" ")
                .map((word) =>
                  word.startsWith("$") ? (
                    <span className="boldGreen">{word} </span>
                  ) : (
                    word + " "
                  )
                )}
            </p>
          </div>
        </div>
      </div>
    </StyledMessageCard>
  );
};

export default MessageCard;
