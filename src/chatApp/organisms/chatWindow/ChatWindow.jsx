import React from "react";
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// Constants
import { EMPTY_OBJECT } from "../../constants/chatApp.general";
import { CHAT_WINDOW_HEADER_HEIGHT } from "./constants/chatWindow.general";

// style
import style from "./chatWindow.module.css";

// components
import ChatWindowHeader from "./molecules/chatWindowHeader";
import ConversationPage from "./organism/conversationPage";

const ChatWindow = (props) => {
  const {
    userMetadata,
    currentUserInfo,
    selectedUserId,
    height,
    setUserMetadata,
  } = props;

  return (
    <div className={style.chatWindowContainer}>
      <ChatWindowHeader
        userMetadata={userMetadata}
        currentUserInfo={currentUserInfo}
        selectedUserId={selectedUserId}
      />
      <ConversationPage
        height={height - CHAT_WINDOW_HEADER_HEIGHT}
        selectedUserId={selectedUserId}
        userMetadata={userMetadata}
        currentUserInfo={currentUserInfo}
        setUserMetadata={setUserMetadata}
      />
    </div>
  );
};

ChatWindow.propTypes = {
  userMetadata: PropTypes.object,
  selectedUserId: PropTypes.string,
  currentUserInfo: PropTypes.object,
  height: PropTypes.number,
  setUserMetadata: PropTypes.func,
};

ChatWindow.defaultProps = {
  userMetadata: EMPTY_OBJECT,
  currentUserInfo: EMPTY_OBJECT,
  selectedUserId: undefined,
  height: 0,
  setUserMetadata: _noop,
};

export default ChatWindow;
