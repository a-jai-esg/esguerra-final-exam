import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

function Home() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    document.title = "Job Listings Available";
    fetch("http://192.168.1.5:4000/app/getprofiles")
      .then((response) => response.json())
      .then((json) => {
        setProfiles(json);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h5 className="site-title mt-2 mb-0">Job Listings</h5>
      </div>

      {profiles.map((profile) => {
        return (
          <>
            <div className="vh-50">
              <MDBContainer>
                <MDBRow className="justify-content-center">
                  <MDBCol md="9" lg="7" xl="5" className="mt-5">
                    <MDBCard style={{ borderRadius: "15px" }}>
                      <MDBCardBody className="p-4">
                        <div className="d-flex text-black">
                          <div className="flex-shrink-0">
                            <MDBCardImage
                              style={{ width: "180px", borderRadius: "10px" }}
                              src={profile.profilePicture}
                              alt="Generic placeholder image"
                              fluid
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <MDBCardTitle>{profile.name}</MDBCardTitle>
                            <MDBCardText>{profile.aboutUser}</MDBCardText>
                            <div className="d-flex justify-content-start rounded-3 p-2 mb-2">
                              <div>
                                <p className="small text-muted mb-1">
                                  {profile.address}
                                </p>
                                <p className="mb-0">{profile.jobDescription}</p>
                              </div>
                            </div>
                            <div className="d-flex pt-1">
                              <MDBBtn outline className="me-1 flex-grow-1">
                                Chat
                              </MDBBtn>
                              <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                            </div>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </div>
            <br />
          </>
        );
      })}
    </>
  );
}

export default Home;
