import React, { memo } from "react";

// styles
import style from "./conversationListHeader.module.css";

const ConversationListHeader = () => {
  return (
    <div className={style.conversationListHeader}>
      <div className={style.conversationListHeaderText}>Chat</div>
    </div>
  );
};

export default memo(ConversationListHeader);
