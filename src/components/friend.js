import Button from "./button";

export default function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <>
      <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt={friend.name}></img>
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You own {friend.name} {Math.abs(friend.balance)} $
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} own you
            {Math.abs(friend.balance)} $
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "select"}
        </Button>
      </li>
    </>
  );
}
