import React, { useState } from "react";
import Card from "./components/Card";
import "./index.css";

const App = () => {
  const users = [
    {
      name: "Rajesh Sharma",
      city: "Mumbai",
      age: 25,
      profession: "Software Engineer",
      profile_photo: "https://example.com/profiles/rajesh_sharma.jpg",
    },
    {
      name: "Priya Gupta",
      city: "Delhi",
      age: 25,
      profession: "Doctor",
      profile_photo: "https://example.com/profiles/priya_gupta.jpg",
    },
    {
      name: "Arjun Reddy",
      city: "Hyderabad",
      age: 25,
      profession: "Mechanical Engineer",
      profile_photo: "https://example.com/profiles/arjun_reddy.jpg",
    },
    {
      name: "Meera Nair",
      city: "Kochi",
      age: 25,
      profession: "Teacher",
      profile_photo: "https://example.com/profiles/meera_nair.jpg",
    },
    {
      name: "Vikram Singh",
      city: "Jaipur",
      age: 25,
      profession: "Civil Engineer",
      profile_photo: "https://example.com/profiles/vikram_singh.jpg",
    },
  ];

  return (
    <div>
      <div className="flex p-10">
        {users.map((element, idx) => {
          return (
            <Card
              key={idx}
              username={element.name}
              age = {element.age}
              city={element.city}
              profession={element.profession}
              photo={element.profile_photo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
