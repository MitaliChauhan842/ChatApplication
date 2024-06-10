import React, { useCallback } from "react";
import PropTypes from "prop-types";

// style
import style from "./chatList.module.css";

// constants
import {
  EMPTY_OBJECT,
  EMPTY_ARRAY,
} from "../../../../../../constants/chatApp.general";

// compoenents
import ChatCard from "./molecules/chatCard/";

const ChatList = ({
  currentUserInfo,
  userMetadata,
  selectedUserId,
  chatHistory,
  setChatHistory,
}) => {
  const renderChatCard = useCallback(
    (chat) => {
      const { id } = chat;
      return (
        <ChatCard
          key={id}
          userMetadata={userMetadata}
          selectedUserId={selectedUserId}
          chat={chat}
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
          currentUserInfo={currentUserInfo}
          className={style.chatCardContainer}
        />
      );
    },
    [userMetadata, selectedUserId, setChatHistory, chatHistory, currentUserInfo]
  );

  return <div>{chatHistory.map(renderChatCard)}</div>;
};

ChatList.propTypes = {
  currentUserInfo: PropTypes.object,
  userMetadata: PropTypes.object,
  selectedUserId: PropTypes.string,
  chatHistory: PropTypes.array,
};

ChatList.defaultProps = {
  currentUserInfo: EMPTY_OBJECT,
  userMetadata: EMPTY_OBJECT,
  selectedUserId: undefined,
  chatHistory: EMPTY_ARRAY,
};

export default ChatList;
