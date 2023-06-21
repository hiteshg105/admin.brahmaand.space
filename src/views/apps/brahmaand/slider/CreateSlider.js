import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  CustomInput,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

import axiosConfig from "../../../../axiosConfig";
import swal from "sweetalert";
import axios from "axios";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

function CreateSlider() {
  const [file, setFile] = useState("");
  const [count, setCount] = useState("");
  const [link, setLink] = useState("");

  const fileRef = useRef();

  const selectFile = (event) => {
    setFile(event.target.files[0]);
  };
  // console.log(file);
  const addSlider = async (e) => {
    e.preventDefault();
    if (file && count && link) {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("count", count);
      formData.append("link", link);
      const data = await axiosConfig.post(`/add/header`, formData);
      // console.log(data);
      if (data.data.success) {
        swal("Slider Create Successfully");
        setCount("");
        fileRef.current.value = null;
        // setFile(null);
        setLink("");
      } else {
        swal("Slider Already exist");
      }
    } else {
      swal("All Field Are Mandatory");
    }
  };

  return (
    <>
      <div>
        <Row>
          <Col sm="12">
            <div>
              <Breadcrumb listTag="div">
                <BreadcrumbItem href="/analyticsDashboard" tag="a">
                  Home
                </BreadcrumbItem>
                {/* <BreadcrumbItem
                  href="/app/brahmaand/resource/resourceList"
                  tag="a"
                >
                  WarZone
                </BreadcrumbItem> */}
                <BreadcrumbItem active>Add Slider</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Slider
              </h1>
            </Col>
            <Col></Col>
          </Row>
          <CardBody>
            <Form className="m-1">
              <Row>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <FormGroup>
                    <Label>Slider Image</Label>
                    <input
                      ref={fileRef}
                      type="file"
                      name="topics"
                      // placeholder=""
                      // value={this.state.topics}
                      className="form-control"
                      onChange={selectFile}
                    />
                  </FormGroup>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <FormGroup>
                    <Label>Count Of Slider</Label>
                    <input
                      placeholder="Enter Number"
                      type="number"
                      name="topics"
                      value={count}
                      className="form-control"
                      onChange={(e) => setCount(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <FormGroup>
                    <Label>Slider Link</Label>
                    <input
                      placeholder="Enter link"
                      type="text"
                      name="topics"
                      value={link}
                      className="form-control"
                      onChange={(e) => setLink(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    onClick={(e) => addSlider(e)}
                    color="primary"
                    // type="submit"
                    className="mt-2"
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default CreateSlider;
