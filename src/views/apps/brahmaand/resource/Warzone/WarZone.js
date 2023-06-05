import React, { useState, useEffect } from "react";
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

import axiosConfig from "../../../../../axiosConfig";
import swal from "sweetalert";
import axios from "axios";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../../assets/scss/plugins/extensions/editor.scss";

function WarZone() {
  const [category, setCategory] = useState("");
  const [sub_category, setSub_category] = useState("");
  const [sub_categoryp, setSub_categoryp] = useState("");
  const [sub_categorys, setSub_categorys] = useState("");
  const [desc, setDesc] = useState("");
  const [NewView, setNewView] = useState(false);
  const [ListofResource, setListofResource] = useState([]);
  const [categoryT, setCategoryT] = useState([]);
  const [sub_categoryT, setSub_categoryT] = useState([]);
  const [yrN, setYrN] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [sellang, setSellang] = useState([]);
  const [searchitem, setSearchitem] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [homePage, setHomePage] = useState("");

  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedList);
    var selectItem1 = [];

    for (let i = 0; i < selectedList.length; i++) {
      selectItem1.push(selectedList[i]._id);
    }
    console.log("aaaa", selectItem1);
    setSellang(selectItem1);
  };

  const onEditorStateChange = (editorState) => {
    // editorState.preventDefault();
    setEditorState(editorState);

    setDesc(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };
  // console.log(sub_categoryp);

  const getSubcatdata = () => {
    axiosConfig
      .get(`/admin/listbysubcategory/${sub_category}`)
      .then((res) => {
        // console.log(res.data.data);
        setListofResource(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handlesearchdescription();
    }
  };

  const handlesearchdescription = () => {
    if (searchitem) {
      axiosConfig
        .post(`/user/search_topic_title`, {
          searchinput: searchitem,
        })
        .then((res) => {
          console.log(res.data.data);
          // setCategry(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else swal("Alert", "Enter topic and title first");

    axiosConfig
      .post(`/user/search_promotion`, {
        searchinput: searchitem,
      })
      .then((res) => {
        // console.log(res.data.data);
        if (res.data.data !== "" && res.data.data !== null) {
          //   setPromotion(res.data.data);
          console.log(res.data.data);
        }
      })
      .catch((err) => {});
  };

  const addWar = async (e) => {
    e.preventDefault();
    if (
      category &&
      sub_category &&
      sub_categoryp &&
      sub_categorys &&
      startDate &&
      endDate
    ) {
      const data = await axiosConfig.post(`/add/warzone`, {
        isHomePage: homePage,
        category: category,
        resource1: sub_categoryp,
        resource2: sub_categorys,
        startDate: startDate,
        endDate: endDate,
      });
      // console.log(data.data);
      if (data.data.status) {
        swal("War Added Successfully");
        setCategory("");
        setSub_category("");
        setSub_categoryp("");
        setSub_categorys("");
        setStartDate("");
        setEndDate("");
      }
    } else {
      swal("All field are mandatory");
    }
  };

  function onRemove(selectedList, removedItem) {
    console.log(selectedList);
  }

  useEffect(() => {
    if (searchitem) {
      handlesearchdescription();
    }
  }, [searchitem]);

  useEffect(() => {
    listbycategorydata();
    getallcategorydata();
    getallyear();
    // getalllang();
  }, [category]);

  useEffect(() => {
    if (sub_category) {
      getSubcatdata();
    }
  }, [sub_category]);

  // sub Category
  const listbycategorydata = () => {
    if (category !== "" && category !== undefined && category !== null) {
      axios
        .get(`https://backend.brahmaand.space/admin/listbycategory/${category}`)
        .then((response) => {
          console.log(response);
          setSub_categoryT(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return null;
    }
  };

  // category
  const getallcategorydata = () => {
    axiosConfig
      .get("/admin/getallCategory")
      .then((response) => {
        // console.log(response);
        setCategoryT(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getallyear = () => {
    axiosConfig
      .get("/user/allYear")
      .then((response) => {
        // console.log(response.data.data);
        setYrN(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
                <BreadcrumbItem
                  href="/app/brahmaand/resource/resourceList"
                  tag="a"
                >
                  WarZone
                </BreadcrumbItem>
                <BreadcrumbItem active> Your WarZone</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add WarZone
              </h1>
            </Col>
            <Col></Col>
          </Row>
          <CardBody>
            <Form className="m-1">
              <Row>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <FormGroup>
                    <Label>Category Name</Label>
                    <CustomInput
                      type="select"
                      name="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>select Category</option>
                      {categoryT?.map((allCategory) => (
                        <option value={allCategory?._id} key={allCategory?._id}>
                          {allCategory?.title}
                        </option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <FormGroup>
                    <Label>Sub-Category Name</Label>
                    <CustomInput
                      type="select"
                      name="sub_category"
                      value={sub_category}
                      onChange={(e) => setSub_category(e.target.value)}
                    >
                      <option>select SubCategory</option>
                      {sub_categoryT?.map((allSubCategory) => (
                        <option
                          value={allSubCategory?._id}
                          key={allSubCategory?._id}
                        >
                          {allSubCategory?.title}
                        </option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <FormGroup>
                    <Label>Resource list</Label>
                    <CustomInput
                      type="select"
                      name="sub_category"
                      value={sub_categoryp}
                      onChange={(e) => setSub_categoryp(e.target.value)}
                    >
                      <option>Select Resource</option>
                      {ListofResource?.map((allSubCategory) => (
                        <option
                          value={allSubCategory?._id}
                          key={allSubCategory?._id}
                        >
                          {allSubCategory?.sub_category?.title}-
                          {allSubCategory?.creatorName}
                        </option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <FormGroup>
                    <Label>Category Name</Label>
                    <CustomInput
                      type="select"
                      name="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>select Category</option>
                      {categoryT?.map((allCategory) => (
                        <option value={allCategory?._id} key={allCategory?._id}>
                          {allCategory?.title}
                        </option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <FormGroup>
                    <Label>Sub-Category Name</Label>
                    <CustomInput
                      type="select"
                      name="sub_category"
                      value={sub_category}
                      onChange={(e) => setSub_category(e.target.value)}
                    >
                      <option>select SubCategory</option>
                      {sub_categoryT?.map((allSubCategory) => (
                        <option
                          value={allSubCategory?._id}
                          key={allSubCategory?._id}
                        >
                          {allSubCategory?.title}
                        </option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <FormGroup>
                    <Label>Second Resource list</Label>
                    <CustomInput
                      type="select"
                      name="sub_category"
                      value={sub_categorys}
                      onChange={(e) => setSub_categorys(e.target.value)}
                    >
                      <option>Select Resource</option>
                      {ListofResource?.map((allSubCategory) => (
                        <option
                          value={allSubCategory?._id}
                          key={allSubCategory?._id}
                        >
                          {allSubCategory?.sub_category?.title}-
                          {allSubCategory?.creatorName}
                        </option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="4" md="4" className="mb-2">
                  <FormGroup>
                    <Label>Start Date</Label>

                    <CustomInput
                      type="date"
                      onChange={(e) => setStartDate(e.target.value)}
                      value={startDate}
                      className="form-control"
                    ></CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="4" md="4" className="mb-2">
                  <FormGroup>
                    <Label>End Date</Label>
                    <CustomInput
                      type="date"
                      onChange={(e) => setEndDate(e.target.value)}
                      value={endDate}
                      className="form-control"
                    ></CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="4" md="4" className="mb-2">
                  <FormGroup>
                    <Label>Home Page</Label>

                    <Input
                      type="checkbox"
                      onChange={(e) => setHomePage(e.target.checked)}
                      value={homePage}
                      className="mt-1 h-25 w-25 d-flex"
                    ></Input>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Button
                    onClick={(e) => addWar(e)}
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

export default WarZone;
