import { useState } from "react";
import ChatApp from "./chatApp/ChatApp";
import "./styles.css";

export default function App() {
  const [selectedUserId, setSelectedUserId] = useState("ax");
  console.log("Selected User ID:", selectedUserId);
  return (
    <div className="App">
      <ChatApp />
    </div>
  );
}
