import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Used Physics Book",
      claimedBy: null,
      sold: false,
      claimExpiresAt: null,
    },
  ]);

  // Scenario 1
  const claimItem = (id, user) => {
    setItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          if (item.claimedBy || item.sold) {
            alert("Item no longer available");
            return item;
          }

          return {
            ...item,
            claimedBy: user,
            claimExpiresAt: Date.now() + 10000,
          };
        }
        return item;
      })
    );
  };

  // Scenario 2
  const confirmPickup = (id) => {
    setItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            sold: true,
          };
        }
        return item;
      })
    );
  };

  const expireClaim = (id) => {
    setItems(prev =>
      prev.map(item => {
        if (
          item.id === id &&
          item.claimExpiresAt &&
          Date.now() > item.claimExpiresAt &&
          !item.sold
        ) {
          return {
            ...item,
            claimedBy: null,
            claimExpiresAt: null,
          };
        }
        return item;
      })
    );
  };

  // Scenario 3
  const markSold = (id) => {
    setItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            sold: true,
          };
        }
        return item;
      })
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dorm Marketplace</h1>

      {items.map(item => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{item.name}</h3>

          <p>
            Status:{" "}
            {item.sold
              ? "Sold"
              : item.claimedBy
              ? `Claimed by ${item.claimedBy}`
              : "Available"}
          </p>

          <button onClick={() => claimItem(item.id, "Student A")}>
            Claim (Student A)
          </button>

          <button onClick={() => claimItem(item.id, "Student B")}>
            Claim (Student B)
          </button>

          <button onClick={() => confirmPickup(item.id)}>
            Confirm Pickup
          </button>

          <button onClick={() => expireClaim(item.id)}>
            Expire Claim
          </button>

          <button onClick={() => markSold(item.id)}>
            Mark as Sold
          </button>
        </div>
      ))}
    </div>
  );
}
