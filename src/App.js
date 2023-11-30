import { useState } from "react";
import FormAddFriend from "./components/formAddFriend";
// import { initialFriends } from "./components/data";
import FormSplitBill from "./components/formSplitBill";
import Button from "./components/button";
import FriendsList from "./components/frindsList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFrend] = useState(true);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFrend((show) => !show);
  }

  function handlerAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFrend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((currentSletected) =>
      currentSletected?.id === friend.id ? null : friend
    );
    setShowAddFrend(false);
  }

  function handleSplitBill(value) {
    // update balance of friend
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectFriend={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handlerAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}{" "}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
