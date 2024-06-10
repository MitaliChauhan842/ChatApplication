import React, { useMemo, useCallback } from "react";

// styles
import style from "./conversationPage.module.css";

// hooks
import useFetchChatHistory from "./hooks/useFetchChatHistory";

// helpers
import {
  getChatListContainerStyle,
  handleMessageSubmit,
} from "./helpers/conversationPage.helper";

// components
import ChatList from "./organisms/chatList";
import MessageInput from "./molecules/messageInput";

const ConversationPage = (props) => {
  const {
    height,
    selectedUserId,
    userMetadata,
    currentUserInfo,
    setUserMetadata,
  } = props;
  console.log("height", height);
  const conversationPageContainerStyles = useMemo(() => ({ height }), [height]);
  const chatListContainerStyle = useMemo(
    () => getChatListContainerStyle(height),
    [height]
  );

  const { chatHistory, setChatHistory } = useFetchChatHistory(
    selectedUserId,
    userMetadata
  );

  console.log("chatHistory", chatHistory);

  const onSubmit = useCallback(
    (message) =>
      handleMessageSubmit({
        selectedUserId,
        userMetadata,
        currentUserInfo,
        chatHistory,
        setChatHistory,
        message,
        setUserMetadata,
      }),
    [
      selectedUserId,
      userMetadata,
      currentUserInfo,
      chatHistory,
      setChatHistory,
      setUserMetadata,
    ]
  );

  return (
    <div
      className={style.conversationPageContainer}
      style={conversationPageContainerStyles}
    >
      <div style={chatListContainerStyle} className={style.chatListContainer}>
        <ChatList
          selectedUserId={selectedUserId}
          userMetadata={userMetadata}
          currentUserInfo={currentUserInfo}
          chatHistory={chatHistory}
          setChatHistory={setChatHistory}
        />
      </div>
      <MessageInput
        onSubmit={onSubmit}
        chatMessageInputClassName={style.chatMessageInput}
        sendButtonClassName={style.sendButton}
        inputFieldClassName={style.inputField}
      />
    </div>
  );
};

export default ConversationPage;
