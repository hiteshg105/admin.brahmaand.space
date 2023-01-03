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
export default class EditResource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: "",
      link: "",
      comment: "",
      topics: [],
      type: "",
      format: "",
      resTitle: "",
      language: [],
      relYear: [],
      category: "",
      sub_category: "",
      status: "",
      aprv_status: "",
      img: "",
      creatorName: "",
      getallcat: [],
      getallsub: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidUpdate() {
    console.log(this.state.category);
    const subcat = this.state.category;

    // if (subcat) {
    //   axiosConfig
    //     .get(`/admin/listbycategory/${subcat}`)
    //     .then((response) => {
    //       console.log(response.data.data);
    //       this.setState({ getallsub: response.data.data });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
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
          language: response.data.data.language,
          relYear: response.data.data.relYear,
          category: response.data.data.category.title,
          sub_category: response.data.data.sub_category.title,
          img: response.data.data.img,
          creatorName: response.data.data.creatorName,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/admin/getallCategory")
      .then((response) => {
        console.log(response.data.data);
        this.setState({ getallcat: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandlerupdate = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;

    axiosConfig
      .post(`/admin/edit_promotion/${id}`, this.state)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted Successfully!", "Success");
        this.props.history.push("/app/brahmaand/resource/resourceList");
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
        if (response.data.data.status == "Deactive") {
          swal("Submitted Successfully!", "Deactived");
          this.props.history.push("/app/brahmaand/resource/resourceList");
        }
        if (response.data.data.status == "Active") {
          swal("Submitted Successfully!", "Actived");
          this.props.history.push("/app/brahmaand/resource/resourceList");
        }
        // swal("Success!", "Submitted SuccessFull!", "success");
        //   this.props.history.push("/app/brahmaand/resource/resourceList");
      })
      .catch((error) => {
        console.log(error);
      });
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
                  href="/app/brahmaand/resource/resourceList"
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
                Edit Promotion Resource
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/brahmaand/resource/resourceList")
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
                    {/* <Col lg="6" className="mt-1">
                      <Label style={{ fontSize: "20px" }} className="mx-1">
                        Catogory :
                      </Label>
                     
                      <select
                        name="category"
                        value={this.state.category}
                        className="mx-2  form-control"
                        onChange={this.handleChange}
                      >
                        <option>{this.state.category}</option>
                        {this.state.getallcat?.map((allCategory) => (
                          <option
                            value={allCategory?._id}
                            key={allCategory?._id}
                          >
                            {allCategory?.title}
                          </option>
                        ))}
                      </select>
                    </Col>
                    <Col lg="6" className="mt-1">
                      <Label style={{ fontSize: "20px" }} className="mx-1">
                        Sub-Catogory :
                      </Label>
                     
                      <select
                        name="sub_category"
                        value={this.state.sub_category}
                        className="mx-2  form-control"
                        onChange={this.handleChange}
                      >
                        <option>{this.state.sub_category}</option>
                        {this.state.getallsub?.map((allCategor) => (
                          <option value={allCategor?._id} key={allCategor?._id}>
                            {allCategor?.title}
                          </option>
                        ))}
                      </select>
                    </Col>
                    <Col lg="6" className="mt-1">
                      <Label style={{ fontSize: "20px" }} className="mx-1">
                        Release-Year :
                      </Label>
                      <input
                        type="text"
                        name="relYear"
                        value={this.state.relYear}
                        className="mx-2 py-2 form-control"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col lg="6" className="mt-1">
                      <Label style={{ fontSize: "20px" }} className="mx-1">
                        Language :
                      </Label>
                      <input
                        type="text"
                        name="language"
                        value={this.state.language}
                        className="mx-2 py-2 form-control"
                        onChange={this.handleChange}
                      />
                    </Col> */}
                    <Col lg="6" className="mt-1">
                      <Label style={{ fontSize: "20px" }} className="mx-1">
                        creatorName:
                      </Label>
                      <input
                        type="text"
                        name="creatorName"
                        value={this.state.creatorName}
                        className="mx-2 py-2 form-control"
                        onChange={this.handleChange}
                      />
                    </Col>
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
                      {/* <input
                        name="type"
                        value={this.state.type}
                        type="text"
                        className="mx-2 py-2 form-control"
                        onChange={this.handleChange}
                      /> */}
                      <select
                        name="type"
                        value={this.state.type}
                        className="mx-2  form-control"
                        onChange={this.handleChange}
                      >
                        <option>{this.state.type}</option>
                        <option>Free</option>
                        <option>Paid</option>
                      </select>
                    </Col>

                    <Col lg="6" className="mt-1">
                      <Label style={{ fontSize: "20px" }} className="mx-2">
                        Format :{" "}
                      </Label>
                      {/* <input
                        type="text"
                        name="format"
                        value={this.state.format}
                        className="mx-2 py-2 form-control"
                        onChange={this.handleChange}
                      /> */}
                      <select
                        name="format"
                        value={this.state.format}
                        className="mx-2  form-control"
                        onChange={this.handleChange}
                      >
                        <option>{this.state.format}</option>
                        <option>Video</option>
                        <option>Text</option>
                        <option>Video & Text</option>
                      </select>
                      {/* <option>Video</option>
                        <option>Text</option>
                        <option>Video & Text</option>
                      </input> */}
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

                    <Col lg="6" className="mt-1">
                      {" "}
                      <Label style={{ fontSize: "20px" }} className="mx-2">
                        Description :{" "}
                      </Label>
                      <textarea
                        name="desc"
                        type="text"
                        rows="5"
                        cols="20"
                        value={this.state.desc}
                        className="mx-2 py-2 form-control"
                        onChange={this.handleChange}
                      />
                    </Col>
                    <Col lg="6" className="mt-1">
                      {" "}
                      <Label style={{ fontSize: "20px" }} className="mx-2">
                        Image :{" "}
                      </Label>
                      <Row>
                        <img
                          className="mx-3"
                          height={160}
                          src={this.state.img}
                          alt="uploaded Image"
                        />
                      </Row>
                      <Row>
                        <textarea
                          type="file"
                          rows="5"
                          cols="20"
                          name="img"
                          value={this.state.img}
                          className="mx-2 mt-2 py-2 form-control"
                          onChange={this.handleChange}
                        />
                      </Row>
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

            <Form className="m-1 mx-2" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
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
                    className="mr-2 mb-1 mx-2"
                  >
                    Update
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
