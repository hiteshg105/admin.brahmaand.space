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
export default class EditSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      count: "",
      link: "",
      image: "",
    };
  }

  async componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/get/single/header/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({ count: response.data.data.count });
        this.setState({ link: response.data.data.link });
        this.setState({ image: response.data.data.image });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  changeHandler = (e) => {
    // console.log()
    this.setState({ file: e.target.files[0] });
  };
  //   changeHandler = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  //   console.log(this.state.file)
  submitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state.file);
    let { id } = this.props.match.params;
    axiosConfig
      .put(`/update/single/header/${id}`, {
        link: this.state.link,
        count: this.state.count,
        image: this.state.image,
      })
      .then((response) => {
        if (response.data.success) {
          swal("Success!", "Submitted Successfully!", "Success");
          this.props.history.push("/app/brahmaand/list/slider");
        }
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
                <BreadcrumbItem href="/app/brahmaand/list/slider" tag="a">
                  Slider List
                </BreadcrumbItem>
                <BreadcrumbItem active>Edit Slider</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Slider
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/brahmaand/list/slider")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Slider Image</Label>
                  <Input
                    required
                    type="file"
                    name="username"
                    placeholder="Enter name"
                    // value={this.state.username}
                    onChange={this.changeHandler}
                  ></Input>
                </Col> */}
                <Col lg="6" md="6" className="mb-2">
                  <Label>Count of Slider</Label>
                  <Input
                    name="rating"
                    type="number"
                    value={this.state.count}
                    onChange={(e) => this.setState({ count: e.target.value })}
                  ></Input>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>link</Label>
                  <Input
                    name="comment"
                    type="text"
                    value={this.state.link}
                    onChange={(e) => this.setState({ link: e.target.value })}
                  ></Input>
                </Col>
              </Row>
              <Row>
                {/* <Label>Slider Image</Label> */}
                <Row>
                  <img
                    style={{ borderRadius: "15px" }}
                    className="mx-3"
                    height={160}
                    src={this.state.image}
                    alt="uploaded Image"
                  />
                </Row>

                <textarea
                  type="file"
                  rows="5"
                  cols="20"
                  name="img"
                  value={this.state.image}
                  onChange={(e) => this.setState({ image: e.target.value })}
                  className="mx-2 mt-2 py-2 form-control"
                />
              </Row>

              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <br></br>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
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
