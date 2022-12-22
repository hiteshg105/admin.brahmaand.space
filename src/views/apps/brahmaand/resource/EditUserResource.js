import React, { Component } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
// import { history } from "../../../history";
import { Route } from "react-router-dom";
import swal from "sweetalert";
import Accordion from "react-bootstrap/Accordion";
import { FiArrowDown } from "react-icons/fi";
export default class EditUserResource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: "",
      link: "",
      comment: "",
      topics: "",
      type: "",
      format: "",
      resTitle: "",
      aprv_status: "",
      // userData: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/getone_reslist/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({
          // userData: response.data.data,
          desc: response.data.data.desc,
          link: response.data.data.link,
          comment: response.data.data.comment,
          topics: response.data.data.topics,
          type: response.data.data.type,
          format: response.data.data.format,
          resTitle: response.data.data.resTitle,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  changeHandler1 = (e) => {
    this.setState({ aprv_status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandlerupdate = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/admin/edit_submit_rsrc/${id}`, this.state)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted Successfully!", "Success");
        this.props.history.push("/app/brahmaand/resource/userResourceList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/admin/approve_submit_resrc/${id}`, this.state)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFully!", "success");
        this.props.history.push("/app/brahmaand/resource/userResourceList");
      })
      .catch((error) => {
        console.log(error);
      });
    // axiosConfig
    //   .post(`/admin/edit_submit_rsrc/${id}`, this.state)
    //   .then((response) => {
    //     console.log(response);
    //     swal("Success!", "Submitted SuccessFully!", "success");
    //     this.props.history.push("/app/brahmaand/resource/userResourceList");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem
                  href="/app/brahmaand/resource/userResourceList"
                  tag="a"
                >
                  Resource List
                </BreadcrumbItem>
                <BreadcrumbItem active>Edit Resource List</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Resource List
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/brahmaand/resource/userResourceList")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandlerupdate}>
              <Row>
                <Col lg="12" md="12" sm="12">
                  <h2 className=" mb-2 d-flex justify-content-center">
                    <b>Update here</b>
                  </h2>
                  <Row className="">
                    <Col lg="6" className="mt-1">
                      <Label style={{ fontSize: "20px" }} className="mx-1">
                        Comment :
                      </Label>
                      <input
                        type="text"
                        name="comment"
                        value={this.state.comment}
                        className="mx-2 py-2 form-control"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col lg="6" className="mt-1">
                      {" "}
                      <Label style={{ fontSize: "20px" }} className="mx-2">
                        Topic :{" "}
                      </Label>
                      <input
                        type="text"
                        name="topics"
                        value={this.state.topics}
                        className="mx-2 py-2 form-control"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col lg="6" className="mt-1">
                      <Label style={{ fontSize: "20px" }} className="mx-2">
                        Type :{" "}
                      </Label>
                      <input
                        name="type"
                        value={this.state.type}
                        type="text"
                        className="mx-2 py-2 form-control"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col lg="6" className="mt-1">
                      {" "}
                      <Label style={{ fontSize: "20px" }} className="mx-2">
                        Description :{" "}
                      </Label>
                      <input
                        name="desc"
                        type="text"
                        value={this.state.desc}
                        className="mx-2 py-2 form-control"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col lg="6" className="mt-1">
                      <Label style={{ fontSize: "20px" }} className="mx-2">
                        Format :{" "}
                      </Label>
                      <input
                        type="text"
                        name="format"
                        value={this.state.format}
                        className="mx-2 py-2 form-control"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col lg="6" className="mt-1">
                      {" "}
                      <Label style={{ fontSize: "20px" }} className="mx-2">
                        link :{" "}
                      </Label>
                      <input
                        type="text"
                        name="link"
                        value={this.state.link}
                        className="mx-2 py-2 form-control"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col lg="6" className="mt-1">
                      {" "}
                      <Label style={{ fontSize: "20px" }} className="mx-2">
                        Opt-Title :{" "}
                      </Label>
                      <input
                        type="text"
                        name="resTitle"
                        value={this.state.resTitle}
                        className="mx-2 py-2 form-control"
                        onChange={this.handleChange}
                      />
                    </Col>
                  </Row>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-2 mb-1 mx-2 mt-2"
                  >
                    Update Data
                  </Button.Ripple>
                  {/* <button
                      type="button"
                      class=" mx-2 btn btn-success"
                    ></button> */}
                </Col>
              </Row>
            </Form>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2 ">
                  <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                    <Label className="mb-1">
                      <h4>Status</h4>
                    </Label>
                    <div
                      className="form-label-group"
                      onChange={this.changeHandler1}
                    >
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="aprv_status"
                        value="Active"
                      />
                      <span style={{ marginRight: "20px" }}>Active</span>

                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="aprv_status"
                        value="Deactive"
                      />
                      <span style={{ marginRight: "3px" }}>Deactive</span>
                    </div>
                  </Col>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-2 mb-1"
                  >
                    Update
                  </Button.Ripple>
                </Col>
              </Row>
              <Row></Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
