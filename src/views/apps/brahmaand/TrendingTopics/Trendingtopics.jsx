import React, { useState, useEffect } from "react";
import { Container, Row, Col, Label, Table } from "reactstrap";
import axios from "axios";
import swal from "sweetalert";

function Trendingtopics() {
  const [trendingTopics, setTrendingTopics] = useState("");
  const [trendingsearch, setTrendingsearch] = useState("");

  const handledeletetopic = (id) => {
    console.log(id);
    if (id !== "") {
      axios
        .get(`https://backend.brahmaand.space/admin/dltTrending/${id}`)
        .then((res) => {
          console.log(res.data.message);
          if (res.data.message == "deleted") {
            swal("Deleted Successfully");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const gettrendingdata = () => {
    axios
      .get(`https://backend.brahmaand.space/admin/getTrending`)
      .then((res) => {
        console.log(res.data.data);
        setTrendingsearch(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    gettrendingdata();
  }, []);

  const handletopicsubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://backend.brahmaand.space/admin/addTrending`, {
        topics: trendingTopics.toLowerCase(),
      })
      .then((res) => {
        console.log(res.data.data);
        if (res.data.message == "success") {
          swal("Topics added Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container style={{ height: "auto", width: "100%" }} className="card">
        <Row className="">
          <Label className="mt-2 mx-5 mb-2">
            <h3>
              Add Trending Topic-
              <span style={{ fontSize: "16px" }}>Single at a time</span>
            </h3>
          </Label>
        </Row>
        <Row className="mb-2">
          <Col className="mx-3" lg="3">
            <input
              value={trendingTopics}
              onChange={(e) => {
                setTrendingTopics(e.target.value);
              }}
              className="form-control"
              type="text"
            />
          </Col>
          <Col lg="3">
            <button
              onClick={handletopicsubmit}
              type="button"
              class="btn btn-success"
            >
              Add
            </button>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mt-2 mb-2">
          <h4>Your Trending Topics</h4>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead aria-colspan={1}>
                <tr>
                  <th>No.</th>
                  <th>Trending Topic</th>
                  <th>Action</th>
                  {/* <th>Dollar</th>
                  <th>Action</th> */}
                </tr>
              </thead>
              <tbody>
                {trendingsearch !== ""
                  ? trendingsearch?.map((data, index) => (
                      <tr key={data?._id}>
                        <td>{index + 1}</td>
                        <td>{data?.topics}</td>
                        <td>
                          <Row>
                            <Col lg="3">
                              <button
                                onClick={() => handledeletetopic(data._id)}
                                type="button"
                                class="btn btn-success"
                              >
                                Delete
                              </button>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Trendingtopics;
