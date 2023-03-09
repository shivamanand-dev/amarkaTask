import React from "react";
import MessageCard from "../MessageCard";
import { StyledChatBox } from "./StyledChatBox";

import data from "./data.json";

const ChatBox = () => {
  return (
    <StyledChatBox>
      {data.map((e, i) => {
        return <MessageCard key={i} data={e} />;
      })}
      <input type="text" placeholder="Write Your Message" />
    </StyledChatBox>
  );
};

export default ChatBox;
