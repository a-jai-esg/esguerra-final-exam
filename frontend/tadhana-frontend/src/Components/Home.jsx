import React from "react";
import Navbar from "./Navbar";

function Profile() {
  const defaultProfile = [
    {
      name: "Jennie Kim",
      email: "jennie@tadhana.com",

      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Jennie_Kim_Marie_Claire_Korea_2020.png/220px-Jennie_Kim_Marie_Claire_Korea_2020.png",

      about:
        "Hello, My name is Jennie Kim, I am an actress, singer, and designer from South Korea.",
    },
  ];

  return (
    <>
      <Navbar />
      {defaultProfile.map((profile) => {
        return (
          <>
            <div className="card w-75">
              <div className="card-body">
                <h5 className="card-title">{profile.description}</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Profile;
