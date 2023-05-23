import React, { useState, useEffect } from "react";
import { Component } from "react";

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
import { FiArrowDown } from "react-icons/fi";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
import imageToBase64 from "image-to-base64/browser";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../../assets/scss/plugins/extensions/editor.scss";
import Select from "react-select";

function WarZone() {
  // const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [sub_category, setSub_category] = useState("");
  const [sub_categoryp, setSub_categoryp] = useState("");
  const [sub_categorys, setSub_categorys] = useState("");
  const [type, setType] = useState("");
  // const [format, setFormat] = useState("");
  const [topics, setTopics] = useState([]);
  const [desc, setDesc] = useState("");
  const [resTitle, setResTitle] = useState("");
  const [creatorName, setCreatorName] = useState("");
  const [NewView, setNewView] = useState(false);
  const [Views, setViews] = useState("");
  const [Viewss, setViewss] = useState("");
  const [Subs, setSubs] = useState("");
  const [Subsc, setSubsc] = useState("");
  const [Rating, setRating] = useState("");
  const [Ratings, setRatings] = useState("");
  const [Like, setLike] = useState("");
  const [DisLike, setDisLike] = useState("");
  const [DisLikes, setDisLikes] = useState("");
  const [Likes, setLikes] = useState("");
  const [Publish, setPublish] = useState("");
  const [Publishs, setPublishs] = useState("");
  const [comment, setComment] = useState("");
  const [ListofResource, setListofResource] = useState([]);
  const [categoryT, setCategoryT] = useState([]);
  const [sub_categoryT, setSub_categoryT] = useState([]);
  const [yrN, setYrN] = useState([]);
  const [langL, setLangL] = useState([]);
  const [yrName, setYrName] = useState([]);
  const [cat_img, setCat_img] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [sellang, setSellang] = useState([]);
  const [searchitem, setSearchitem] = useState("");

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
  console.log(sub_categoryp);
  const getSubcatdata = () => {
    axiosConfig
      .get(`/admin/listbysubcategory/${sub_category}`)
      .then((res) => {
        console.log(res.data.data);
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

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const formdata = new FormData();
  //   formdata.append("link", link);
  //   formdata.append("category", category);
  //   formdata.append("sub_category", sub_category);
  //   formdata.append("type", type);
  //   formdata.append("format", format);
  //   formdata.append("language", sellang);
  //   formdata.append("topics", topics);
  //   formdata.append("desc", desc);
  //   if (resTitle !== "") {
  //     formdata.append("resTitle", resTitle);
  //   }
  //   if (creatorName !== "") {
  //     formdata.append("creatorName", creatorName);
  //   }

  //   if (yrName !== "") {
  //     formdata.append("relYear", yrName);
  //   }

  //   formdata.append("comment", comment);
  //   if (cat_img !== "") {
  //     formdata.append("img", cat_img);
  //   } else {
  //       formdata.append("img", facts);
  //   }

  //   axios
  //     .post(`https://backend.brahmaand.space/admin/admin_Sub_resrc`, formdata)

  //     .then((response) => {
  //       console.log(response.data);
  //       if (response.data.message == "success") {
  //         swal("Success!", "Submitted SuccessFully!", "success");
  //         // history.push("/app/brahmaand/resource/resourceList");
  //         // setLink("");
  //         setCategory("");
  //         setSub_category("");
  //         setType("");
  //         // setFormat("");
  //         setTopics("");
  //         setDesc("");

  //         setCreatorName("");
  //         setResTitle("");
  //         setComment("");
  //         setSellang("");
  //         setYrName("");
  //         setCat_img("");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //       swal("Someting went wrong");
  //     });
  // };
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

  // const getalllang = () => {
  //   axiosConfig
  //     .get("/user/allLang")
  //     .then((response) => {
  //       // console.log(response);
  //       setLangL(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

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
            <Col>
              {/* <Route
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
              /> */}
            </Col>
          </Row>
          <CardBody>
            <Form
              className="m-1"
              // onSubmit={submitHandler}
            >
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
                {NewView ? (
                  <>
                    <Col lg="4" md="4" sm="4" className="mb-2">
                      <FormGroup>
                        <Label>Resource list for Second</Label>
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
                        <Label> Rating of another</Label>

                        <CustomInput
                          type="text"
                          onChange={(e) => setRatings(e.target.value)}
                          value={Ratings}
                          className="form-control"
                        ></CustomInput>
                      </FormGroup>
                    </Col>
                    <Col lg="4" md="4" className="mb-2">
                      <FormGroup>
                        <Label> total Views</Label>

                        <CustomInput
                          type="text"
                          onChange={(e) => setViewss(e.target.value)}
                          value={Viewss}
                          className="form-control"
                        ></CustomInput>
                      </FormGroup>
                    </Col>
                    <Col lg="4" md="4" className="mb-2">
                      <FormGroup>
                        <Label>Subscribers of second person</Label>

                        <CustomInput
                          type="text"
                          onChange={(e) => setSubsc(e.target.value)}
                          value={Subsc}
                          className="form-control"
                        ></CustomInput>
                      </FormGroup>
                    </Col>
                    <Col lg="4" md="4" className="mb-2">
                      <FormGroup>
                        <Label>Year of Publish</Label>

                        <CustomInput
                          type="text"
                          onChange={(e) => setPublishs(e.target.value)}
                          value={Publishs}
                          className="form-control"
                        ></CustomInput>
                      </FormGroup>
                    </Col>
                    <Col lg="4" md="4" className="mb-2">
                      <FormGroup>
                        <Label> Likes on Youtube</Label>

                        <CustomInput
                          type="text"
                          onChange={(e) => setLikes(e.target.value)}
                          value={Likes}
                          className="form-control"
                        ></CustomInput>
                      </FormGroup>
                    </Col>
                    <Col lg="4" md="4" className="mb-2">
                      <FormGroup>
                        <Label> Dislikes on Youtube</Label>

                        <CustomInput
                          type="text"
                          onChange={(e) => setDisLikes(e.target.value)}
                          value={DisLikes}
                          className="form-control"
                        ></CustomInput>
                      </FormGroup>
                    </Col>
                  </>
                ) : (
                  <>
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
                    <Col lg="4" md="4" className="mb-2">
                      <FormGroup>
                        <Label> Rating</Label>

                        <CustomInput
                          type="text"
                          onChange={(e) => setRating(e.target.value)}
                          value={Rating}
                          className="form-control"
                        ></CustomInput>
                      </FormGroup>
                    </Col>
                    <Col lg="4" md="4" className="mb-2">
                      <FormGroup>
                        <Label>Views</Label>

                        <CustomInput
                          type="text"
                          onChange={(e) => setViews(e.target.value)}
                          value={Views}
                          className="form-control"
                        ></CustomInput>
                      </FormGroup>
                    </Col>
                    <Col lg="4" md="4" className="mb-2">
                      <FormGroup>
                        <Label>Subscribers</Label>

                        <CustomInput
                          type="text"
                          onChange={(e) => setSubs(e.target.value)}
                          value={Subs}
                          className="form-control"
                        ></CustomInput>
                      </FormGroup>
                    </Col>
                    <Col lg="4" md="4" className="mb-2">
                      <FormGroup>
                        <Label>Year of Publish</Label>

                        <CustomInput
                          type="text"
                          onChange={(e) => setPublish(e.target.value)}
                          value={Publish}
                          className="form-control"
                        ></CustomInput>
                      </FormGroup>
                    </Col>
                    <Col lg="4" md="4" className="mb-2">
                      <FormGroup>
                        <Label> Likes on Youtube</Label>

                        <CustomInput
                          type="text"
                          onChange={(e) => setLike(e.target.value)}
                          value={Like}
                          className="form-control"
                        ></CustomInput>
                      </FormGroup>
                    </Col>
                    <Col lg="4" md="4" className="mb-2">
                      <FormGroup>
                        <Label> Dislikes on Youtube</Label>

                        <CustomInput
                          type="text"
                          onChange={(e) => setDisLike(e.target.value)}
                          value={DisLike}
                          className="form-control"
                        ></CustomInput>
                      </FormGroup>
                    </Col>
                  </>
                )}

                {/* <Col>
                  <Button
                    onClick={handlesearchdescription}
                    color="primary"
                    // type="submit"
                    className="mr-1 mb-1"
                  >
                    Add 1st person
                  </Button>
                </Col> */}
                {/* <Col lg="4" md="4" className="mb-2">
                  <FormGroup>
                    <Label>Type</Label>

                    <select
                      onChange={(e) => setType(e.target.value)}
                      value={type}
                      className="form-control"
                    >
                      <option>Select type</option>
                      <option>Free</option>
                      <option>Paid</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col lg="4" md="4" className="mb-2">
                  <FormGroup>
                    <Label>Format</Label>
                    <CustomInput
                      type="select"
                      value={format}
                      onChange={(e) => setFormat(e.target.value)}
                    >
                      <option>Select Format</option>
                      <option value="Video">Video</option>
                      <option value="Text">Text</option>
                    </CustomInput>
                  </FormGroup>
                </Col> */}

                {/* <Col lg="4" md="4" className="mb-2 languageselect">
                  <FormGroup>
                    <Label>Language</Label>

                    <Multiselect
                      placeholder="Select language"
                      options={langL}
                      // selectedValues={selectedValues}
                      onSelect={onSelect}
                      onRemove={onRemove}
                      displayValue="language"
                    />
                  </FormGroup>
                </Col> */}
                {/* <Col lg="4" md="4" className="mb-2 languageselect">
                  <FormGroup>
                    <Label>Search Warzone Title</Label>

                    <input
                      value={searchitem}
                      type="text"
                      onKeyDown={handleEnter}
                      placeholder=" Search for the title (e.g. Java) "
                      className="searchprd inputareaa searchba form-control "
                      onChange={(e) => {
                        setSearchitem(e.target.value);
                      }}
                    />
                  </FormGroup>
                </Col> */}
              </Row>
              {NewView ? (
                <>
                  <Row>
                    <Col lg="2">
                      <Button
                        onClick={() => setNewView(false)}
                        color="primary"
                        // type="submit"
                        className="mr-1 mb-1"
                      >
                        Go back
                      </Button>
                    </Col>
                    <Col lg="2">
                      <Button
                        onClick={(e) => e.preventDefault()}
                        // onClick={() => setNewView(false)}
                        color="primary"
                        className="mr-1 mb-1"
                      >
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </>
              ) : (
                <>
                  <Row>
                    <Col>
                      <Button
                        onClick={() => setNewView(true)}
                        color="primary"
                        // type="submit"
                        className="mt-2"
                      >
                        Next
                      </Button>
                    </Col>
                  </Row>
                </>
              )}
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default WarZone;
