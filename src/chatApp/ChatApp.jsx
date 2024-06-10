import React, { useState } from "react";
import PropTypes from "prop-types";

// Containers
import withWindowDimensions from "./containers/withWindowDimensions";

// Styles
import style from "./chatApp.module.css";

// Custom Hooks
import useFetchUserMetadata from "./hooks/useFetchUserMetadata";
import ConversationList from "./organisms/converstaionList/conversationList";

// components
import ChatWindow from "./organisms/chatWindow";

const ChatApp = (props) => {
  const { height, width } = props;
  const [selectedUserId, setSelectedUserId] = useState(undefined);
  console.log("Selected User ID:", selectedUserId);

  const { userMetadata, currentUserInfo, setUserMetadata } =
    useFetchUserMetadata();

  return (
    <div className={style.chatAppContainer}>
      <ConversationList
        userMetadata={userMetadata}
        currentUserInfo={currentUserInfo}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
        height={height}
      />
      <ChatWindow
        userMetadata={userMetadata}
        currentUserInfo={currentUserInfo}
        selectedUserId={selectedUserId}
        height={height}
        setUserMetadata={setUserMetadata}
      />
    </div>
  );
};

ChatApp.propTypes = {
  height: PropTypes.number,
};

ChatApp.defaultProps = {
  height: 0,
};

export default withWindowDimensions(ChatApp);
