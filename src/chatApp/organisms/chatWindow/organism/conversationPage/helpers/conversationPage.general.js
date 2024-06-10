import {
  EMPTY_ARRAY,
  EMPTY_OBJECT,
} from "../../../../../constants/chatApp.general";

export const handleMessageSubmit = ({
  selectedUserId,
  userMetadata = EMPTY_OBJECT,
  currentUserInfo = EMPTY_ARRAY,
  chatHistory = EMPTY_ARRAY,
  message,
  setUserMetadata,
}) => {
  const selectedUserInfo = userMetadata[selectedUserId] || EMPTY_OBJECT;
  const { conversationId } = selectedUserInfo;
};
