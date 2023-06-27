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

// const BASE_URL = "http://localhost:9000/";
const BASE_URL = "https://backend.brahmaand.space";

export default class EditContentCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: "",
      link: "",
      comment: "",
      creatorName: "",
      topics: [],
      type: "",
      format: "",
      language: [],
      languageshow: [],
      relYearshow: "",
      relYear: [],
      category: "",
      categoryshow: "",
      resTitle: "",
      sub_category: "",
      sub_categoryshow: "",
      status: "",
      isHomePage: false,
      // aprv_status: "",
      img: "",
      getallcat: [],
      getallsub: [],
      getrelYear: [],
      getalllang: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    return this.setState({ [e.target.name]: e.target.value });
  }

  getCategory = async (subcat) => {
    axiosConfig
      .get(`/admin/listbycategory/${subcat}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({ getallsub: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
    // }
  };
  componentDidUpdate() {
    // console.log(this.state.category);
    const subcat = this.state.category;
    // console.log(subcat);
    // this.getCategory(subcat);
    if (subcat) {
      axiosConfig
        .get(`/admin/listbycategory/${subcat}`)
        .then((response) => {
          // console.log(response.data.data);
          this.setState({ getallsub: response.data.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  componentDidMount() {
    // console.log("first")
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/content/creator/get_single_content_data/${id}`)
      .then((response) => {
        console.log(response.data.data.status);
        this.setState({
          desc: response.data.data.desc,
          link: response.data.data.link,
          creatorName: response.data.data.creatorName,
          topics: response.data.data.topics,
          format: response.data.data.format,
          languageshow: response.data.data.language,
          language: response.data.data.language,
          img: `${response.data.data.img}`,
          categoryshow: response.data.data.category.title,
          category: response.data.data.category._id,
          sub_categoryshow: response.data.data.sub_category.title,
          sub_category: response.data.data.sub_category._id,
          isHomePage: response.data.data.isHomePage,
          status: response.data.data.status,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/admin/getallCategory")
      .then((response) => {
        // console.log(response.data.data);
        this.setState({ getallcat: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/user/allYear")
      .then((response) => {
        // console.log(response.data.data);
        this.setState({ getrelYear: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axiosConfig
      .get("/user/allLang")
      .then((response) => {
        // console.log(response.data.data);
        this.setState({ getalllang: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler1 = (e) => {
    console.log(e.target.value);
    this.setState({ status: e.target.value });
  };
  changeHandler2 = (e) => {
    console.log(e.checked);
    this.setState({ isHomePage: e.checked });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandlerupdate = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;

    axiosConfig
      .put(`/content/update/admin/${id}`, this.state)
      .then((response) => {
        console.log(response);
        if (response.data.status === true) {
          swal("Submitted Successfully!", "Success");

          this.props.history.push("/app/brahmaand/resource/userContentCreator");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  submitHandler = (e) => {
    e.preventDefault();
    let { id } = this.props.match.params;

    axiosConfig
      .post(`/admin/edit_promotion/${id}`, this.state)
      .then((response) => {
        console.log(response);
        if (response.data.message == "success") {
          swal("Submitted Successfully!", "Deactived");
          this.props.history.push("/app/brahmaand/resource/resourceList");
        }
        if (response.data.message == "success") {
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
                      history.push("/app/brahmaand/resource/userContentCreator")
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
                        Category :-{" "}
                        <span style={{ color: "green" }}>
                          {this.state.categoryshow}
                        </span>
                      </Label>
                      <select
                        name="category"
                        placeholder={this.state.categoryshow}
                        // value={this.state.category}
                        className="mx-2 form-control"
                        onChange={(e) => this.handleChange(e)}
                      >
                        <option>{this.state.categoryshow}</option>
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
                        Sub_category :-{" "}
                        <span style={{ color: "green" }}>
                          {this.state.sub_categoryshow}
                        </span>
                      </Label>
                      <select
                        name="sub_category"
                        placeholder={this.state.sub_categoryshow}
                        className="mx-2  form-control"
                        onChange={this.handleChange}
                      >
                        <option>{this.state.sub_categoryshow}</option>
                        {this.state.getallsub?.map((allCategor) => (
                          <option value={allCategor?._id} key={allCategor?._id}>
                            {allCategor?.title}
                          </option>
                        ))}
                      </select>
                    </Col>
                    {/* <Col lg="6" className="mt-1">
                      <Label style={{ fontSize: "20px" }} className="mx-1">
                        Rel-Year : -
                        <span style={{ color: "green" }}>
                          {this.state.relYearshow}
                        </span>
                      </Label>

                      <select
                        name="relYear"
                        placeholder={this.state.relYearshow}
                        className="mx-2 form-control"
                        onChange={this.handleChange}
                      >
                        <option>{this.state.relYearshow}</option>
                        {this.state.getrelYear?.map((relYear) => (
                          <option value={relYear?._id} key={relYear?._id}>
                            {relYear?.yrName}
                          </option>
                        ))}
                      </select>
                    </Col> */}
                    <Col lg="6" className="mt-1">
                      <Label style={{ fontSize: "20px" }} className="mx-1">
                        language : -
                        <span className="mx-2" style={{ color: "green" }}>
                          {this.state.languageshow?.map((languageshow) => (
                            <span key={languageshow?._id}>
                              {languageshow?.language}{" "}
                            </span>
                          ))}
                        </span>
                      </Label>

                      <select
                        name="language"
                        placeholder={this.state.languageshow?.map(
                          (languageshow) => (
                            <span key={languageshow?._id}>
                              {languageshow?.language}{" "}
                            </span>
                          )
                        )}
                        className="mx-2 form-control"
                        onChange={this.handleChange}
                      >
                        <option>{this.state.languageshow[0]?.language}</option>
                        {this.state.getalllang?.map((getalllang) => (
                          <option value={getalllang?._id} key={getalllang?._id}>
                            {getalllang?.language}
                          </option>
                        ))}
                      </select>
                    </Col>
                    <Col lg="6" className="mt-1">
                      <Label style={{ fontSize: "20px" }} className="mx-1">
                        CreatorName :
                      </Label>
                      <input
                        type="text"
                        name="creatorName"
                        value={this.state.creatorName}
                        className="mx-2 py-2 form-control"
                        onChange={this.handleChange}
                      />
                    </Col>
                    {/* <Col lg="6" className="mt-1">
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
                    </Col> */}
                    <Col lg="6" className="mt-1">
                      {" "}
                      <Label style={{ fontSize: "20px" }} className="mx-2">
                        Topic :
                      </Label>
                      <input
                        type="text"
                        name="topics"
                        value={this.state.topics}
                        className="mx-2 py-2 form-control"
                        onChange={this.handleChange}
                      />
                    </Col>
                    {/* <Col lg="6" className="mt-1">
                      <Label style={{ fontSize: "20px" }} className="mx-2">
                        Type :-{this.state.type}
                      </Label>
                      <select
                        name="type"
                        value={this.state.type}
                        className="mx-2  form-control"
                        onChange={this.handleChange}
                      >
                        <option className="mb-1 mt-1">{this.state.type}</option>
                        <option className="mb-1 mt-1">Free</option>
                        <option className="mb-1 mt-1">Paid</option>
                      </select>
                    </Col> */}

                    <Col lg="6" className="mt-1">
                      <Label style={{ fontSize: "20px" }} className="mx-2">
                        Format :{this.state.format}
                      </Label>
                      <select
                        name="format"
                        value={this.state.format}
                        className="mx-2  form-control"
                        onChange={this.handleChange}
                      >
                        <option className="mb-1 mt-1">
                          {this.state.format}
                        </option>
                        <option className="mb-1 mt-1">Video</option>
                        <option className="mb-1 mt-1">Text</option>
                        {/* <option>Video & Text</option> */}
                      </select>
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
                    {/* <Col lg="6" className="mt-1">
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
                    </Col> */}

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
                        <Row>
                          <img
                            style={{ borderRadius: "15px" }}
                            className="mx-3"
                            height={160}
                            src={`${this.state.img}`}
                            alt="uploaded Image"
                          />
                        </Row>
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
                  {/* <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-2 mb-1 mx-2 mt-2"
                  >
                    Update Data
                  </Button.Ripple> */}
                  {/* <button
                      type="button"
                      class=" mx-2 btn btn-success"
                    ></button> */}
                </Col>
              </Row>

              {/* <Form className="m-1 mx-2" onSubmit={this.submitHandler}> */}
              <Row>
                <Col lg="6" md="6" sm="6" className="mt-1">
                  <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                    <Label className="mb-1">
                      <h4>Status</h4>
                    </Label>
                    <div
                      className="form-label-group"
                      // onChange={this.changeHandler1}
                    >
                      <input
                        // defaultChecked
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Active"
                        checked={this.state.status === "Active"}
                        onChange={(e) =>
                          this.setState.status({
                            status: e.target.value,
                          })
                        }
                      />
                      <span style={{ marginRight: "20px" }}>Active</span>

                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Deactive"
                        checked={this.state.status === "Deactive"}
                        onChange={(e) =>
                          this.setState.status({
                            status: e.target.value,
                          })
                        }
                      />
                      <span style={{ marginRight: "3px" }}>Deactive</span>
                    </div>
                  </Col>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                    <div
                      style={{ marginTop: "18px" }}
                      className="align-items-start d-flex flex-column cursor-pointer"
                    >
                      <Label className="mb-1">
                        <h4>Home Page</h4>
                      </Label>

                      <input
                        className=""
                        type="checkbox"
                        checked={this.state.isHomePage}
                        onChange={(e) =>
                          this.setState({ isHomePage: e.target.checked })
                        }
                      />
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
            {/* </Form> */}
          </CardBody>
        </Card>
      </div>
    );
  }
}
