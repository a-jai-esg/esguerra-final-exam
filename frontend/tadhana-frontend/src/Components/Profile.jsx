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
          <div className="container mt-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-7">
                <div className="profile-card py-5 py-10">
                  <div className="text-center"></div>
                  <img
                    className="rounded-circle"
                    src={profile.profilePicture}
                  ></img>
                  <div className="text-center mt-3">
                    <span className="bg-secondary p-1 px-4 rounded text-white">
                      Pro
                    </span>
                    <h5 className="mt-2 mb-0">{profile.name}</h5>
                    <span>UI/UX Designer</span>
                    <div className="px-4 mt-1">
                      <p className="fonts">{profile.about}</p>
                    </div>
                    <br />
                    <br />
                    <div className="buttons">
                      <button className="btn btn-outline-primary px-4">
                        Logout
                      </button>
                      <button className="btn btn-primary px-4 ms-3">
                        Delete My Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Profile;
