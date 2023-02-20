import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { Route } from "react-router-dom";
// import axiosConfig from "../../../../../src/axiosConfig.js";
import axios from "axios";
import swal from "sweetalert";

function Edituserdata() {
  const [dollar, setDollar] = useState("");
  const Params = useParams();

  const handleSubmitPayout = () => {
    // e.preventDefault();

    axios
      .post(`http://65.1.135.77:9000/admin/payout/${Params.id}`, {
        payout: dollar,
      })
      .then((res) => {
        console.log(res.data.message);
        if (res.data.message == "success") {
          swal("Updated Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2 className="d-flex justify-content-center">Update dollar Payout</h2>
      <Row className=" mx-1 mt-2 mb-2 ">
        <Col></Col>
        <Col lg="2">
          <Route
            render={({ history }) => (
              <button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/brahmaand/leaderboard/userearning/")
                }
              >
                Back
              </button>
            )}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        {/* <Col lg="4">
          <h5>Meteors </h5>
          <input className="form-control" type="text" />
        </Col> */}
        <Col lg="4">
          <h5>Dollar value</h5>
          <input
            className="form-control"
            type="number"
            onChange={(e) => {
              setDollar(e.target.value);
            }}
            value={dollar}
          />
        </Col>
        <Col style={{ marginTop: "26px" }}>
          <button
            // type="button"
            onClick={handleSubmitPayout}
            class="btn btn-success"
          >
            Update
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default Edituserdata;
