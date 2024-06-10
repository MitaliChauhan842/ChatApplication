// constants
import USER_LIST from "../../data/userList";

export const fetchUserMetadata = (setUserMetadata, setCurrentUserInfo) => {
  setUserMetadata(USER_LIST);
  setCurrentUserInfo(USER_LIST["01"]);
};
