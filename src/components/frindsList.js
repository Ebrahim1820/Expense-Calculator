import Friend from "./friend";

export default function FriendsList({
  friends,
  onSelectFriend,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
