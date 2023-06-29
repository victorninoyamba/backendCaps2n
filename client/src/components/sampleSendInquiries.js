import React, { Component, useState } from "react";

export default function SampleSendInquiries() {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      fname &&
      lname &&
      contact &&
      email &&
      address &&
      occupation &&
      message &&
      status
    ) {
      console.log(
        fname,
        mname,
        lname,
        contact,
        email,
        address,
        occupation,
        message,
        status
      );
      fetch("http://localhost:5000/sendinquiry", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          mname,
          lname,
          contact,
          email,
          address,
          occupation,
          message,
          status,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Inquiry Sent!");
          } else {
            alert("Something went wrong");
          }
        });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Send Inquiries</h3>

            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Middle name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Middle name"
                onChange={(e) => setMname(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onChange={(e) => setLname(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Contact No.</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Contack No."
                onChange={(e) => setContact(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label>Occupation</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Occupation"
                onChange={(e) => setOccupation(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Message</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Status</label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="status"
                  value="pending"
                  checked={status === "pending"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label className="form-check-label">Pending</label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Send Inquiries
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
