import React from "react";
import PropTypes from "prop-types";

// Lodash
import _noop from "lodash/noop";

// Constants
import { EMPTY_OBJECT } from "../../constants/chatApp.general";
import { HEADER_HEIGHT } from "./molecules/userList/constants/userList.constants";

// components
import UserList from "./molecules/userList";
import ConversationListHeader from "./molecules/converstaionListHeader";

// Styles
import style from "./conversations.module.css";

const ConversationList = (props) => {
  const {
    userMetadata,
    selectedUserId,
    setSelectedUserId,
    height,
    currentUserInfo,
  } = props;
  return (
    <div className={style.conversationsContainer}>
      <ConversationListHeader />
      <UserList
        userMetadata={userMetadata}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
        height={height - HEADER_HEIGHT}
        currentUserInfo={currentUserInfo}
      />
    </div>
  );
};

ConversationList.propTypes = {
  userMetadata: PropTypes.object,
  selectedUserId: PropTypes.string,
  setSelectedUserId: PropTypes.func,
  currentUserInfo: PropTypes.object,
  height: PropTypes.number,
};

ConversationList.defaultProps = {
  userMetadata: EMPTY_OBJECT,
  currentUserInfo: EMPTY_OBJECT,
  selectedUserId: undefined,
  setSelectedUserId: _noop,
  height: 0,
};

export default ConversationList;
