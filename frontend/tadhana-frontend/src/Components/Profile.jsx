import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Profile({ response }) {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "My Profile";
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="profile-card py-5 py-10">
              <div className="text-center"></div>
              <img
                className="rounded-circle"
                src={response.data.profilePicture}
              ></img>
              <div className="text-center mt-3">
                <span className="bg-secondary p-1 px-4 rounded text-white">
                  Pro
                </span>
                <h5 className="mt-2 mb-0">{response.data.name}</h5>
                <span>{response.data.jobDescription}</span>
                <div className="px-4 mt-1">
                  <p className="fonts">{response.data.aboutUser}</p>
                </div>
                <br />
                <br />
                <div className="buttons">
                  <button
                    className="btn btn-outline-primary px-4"
                    onClick={() => {
                      navigate("/login", { replace: true });
                    }}
                  >
                    Logout
                  </button>
                  <button className="btn btn-primary px-4 ms-3">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
