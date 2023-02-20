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
import axiosConfig from "../../../../axiosConfig";
import { FiArrowDown } from "react-icons/fi";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import axios from "axios";
import { Routes, useParams } from "react-router-dom";
import imageToBase64 from "image-to-base64/browser";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-toastify/dist/ReactToastify.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import Select from "react-select";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

function AddResource() {
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [sub_category, setSub_category] = useState("");
  const [type, setType] = useState("");
  const [format, setFormat] = useState("");
  const [topics, setTopics] = useState([]);
  const [desc, setDesc] = useState("");
  const [resTitle, setResTitle] = useState("");
  const [creatorName, setCreatorName] = useState("");
  const [relYear, setRelYear] = useState([]);
  const [comment, setComment] = useState("");
  const [selectedLang, setSelectedLang] = useState([]);
  const [categoryT, setCategoryT] = useState([]);
  const [sub_categoryT, setSub_categoryT] = useState([]);
  const [yrN, setYrN] = useState([]);
  const [langL, setLangL] = useState([]);
  const [yrName, setYrName] = useState([]);
  const [cat_img, setCat_img] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [sellang, setSellang] = useState([]);
  const [img, setimg] = useState("");
  const [status, setStatus] = useState("");
  const Params = useParams();
  console.log(status);
  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedList);
    var selectItem1 = [];

    for (var i = 0; i < selectedList.length; i++) {
      selectItem1.push(selectedList[i]._id);
    }
    console.log("aaaa", selectItem1);
    setSellang(selectItem1);
  };
  //   const getindividualdata = () => {
  //     axiosConfig.get(`/admin/getone_reslist/${id}`){}
  //   };
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    setDesc(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };

  var fileUpload = (e) => {
    const files = e.target.files;
    const file = files[0];
    imageToBase64(file);
    imageToBase64();
  };
  const imageToBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };
  const onLoad = (fileString) => {
    const image64 = fileString.split(",");

    setCat_img(image64[1]);
    // base64code = fileString;
  };

  useEffect(() => {
    getOnelistResoure();
  }, []);

  const getOnelistResoure = () => {
    axios
      .get(`http://65.1.135.77:9000/admin/getone_reslist/${Params.id}`)
      .then((res) => {
        console.log(res.data.data);
        setComment(res.data.data.comment);
        setCategory(res.data.data.category.title);
        setType(res.data.data.type);
        setSub_category(res.data.data.sub_category.title);
        setTopics(res.data.data.topics);
        setResTitle(res.data.data.resTitle);
        setRelYear(res.data.data.relYear);
        setLangL(res.data.data.language);
        setimg(res.data.data.img);
        setLink(res.data.data.link);
        setFormat(res.data.data.format);
        setDesc(res.data.data.desc);
        setCreatorName(res.data.data.creatorName);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("object");
    // const formdata = new FormData();
    // formdata.append("link", link);
    // formdata.append("category", category);
    // formdata.append("sub_category", sub_category);
    // formdata.append("type", type);
    // formdata.append("format", format);
    // formdata.append("language", sellang);
    // formdata.append("topics", topics);
    // formdata.append("desc", desc);
    // formdata.append("resTitle", resTitle);
    // formdata.append("creatorName", creatorName);
    // formdata.append("relYear", yrName);
    // formdata.append("comment", comment);
    // formdata.append("img", cat_img);

    console.log(
      "all data",
      link,
      category,
      sub_category,
      type,
      creatorName,
      topics,
      yrName,
      format,
      desc,
      comment,
      cat_img
      // sellang
    );

    // axios
    //   .post(`http://65.1.135.77:9000/admin/edit_promotion/${Params.id}`, {
    //     link: link,
    //     category: category,
    //     sub_category: sub_category,
    //     type: type,
    //     format: format,
    //     language: sellang,
    //     topics: topics,
    //     desc: desc,
    //     resTitle: resTitle,
    //     creatorName: creatorName,
    //     relYear: relYear,
    //     comment: comment,
    //     img: cat_img,
    //   })
    //   .then((response) => {
    //     console.log(response.data.data);
    //     swal("Success!", "Submitted SuccessFully!", "success");

    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     swal("Someting went wrong");
    //   });
  };

  const handlestautschange = (e) => {
    e.preventDefault();
    console.log(status);
    axios
      .post(`http://65.1.135.77:9000/admin/approve_submit_resrc/${Params.id}`, {
        aprv_status: status,
      })
      .then((response) => {
        console.log(response);
        if (response.data.data.aprv_status == "Deactive") {
          swal("Submitted Successfully!", "Deactived");
          this.props.history.push("/app/brahmaand/resource/resourceList");
        }
        if (response.data.data.aprv_status == "Active") {
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
  function onRemove(selectedList, removedItem) {
    console.log(selectedList);
  }

  useEffect(() => {
    listbycategorydata();
    getallcategorydata();
    getallyear();
    getalllang();
  }, [category]);

  const listbycategorydata = () => {
    if (category !== "" && category !== undefined && category !== null) {
      axios
        .get(`http://65.1.135.77:9000/admin/listbycategory/${category}`)
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
        console.log(response);
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
        console.log(response.data.data);
        setYrN(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getalllang = () => {
    axiosConfig
      .get("/user/allLang")
      .then((response) => {
        console.log(response);
        setLangL(response.data.data);
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
                  Resource List
                </BreadcrumbItem>
                <BreadcrumbItem active>Edit Resource</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Resource
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
            <Form
              className="m-1"
              // onSubmit={submitHandler}
            >
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <FormGroup>
                    <Label> Creator Name :</Label>
                    <Input
                      type="text"
                      name="creatorName"
                      placeholder="Enter Name"
                      value={creatorName}
                      onChange={(e) => setCreatorName(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <FormGroup>
                    <Label>Link</Label>
                    <Input
                      type="text"
                      name="link"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <FormGroup>
                    <Label>Category Name</Label>
                    <CustomInput
                      type="select"
                      name="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>{category}</option>
                      {categoryT?.map((allCategory) => (
                        <option value={allCategory?._id} key={allCategory?._id}>
                          {allCategory?.title}
                        </option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <FormGroup>
                    <Label>Sub-Category Name</Label>
                    <CustomInput
                      type="select"
                      name="sub_category"
                      value={sub_category}
                      onChange={(e) => setSub_category(e.target.value)}
                    >
                      <option>{sub_category}</option>
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
                <Col lg="6" md="6" className="mb-2">
                  <FormGroup>
                    <Label>Type</Label>
                    {/* <CustomInput
                      type="select"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option>Select Type</option>
                      <option value="Free">Free</option>
                      <option value="Paid">Paid</option>
                    </CustomInput> */}
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
                <Col lg="6" md="6" className="mb-2">
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
                      {/* <option value="Video & Text">Video & Text</option> */}
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6" className="mb-2">
                  <Label>Upload Image</Label>
                  {/* <CustomInput
                    type="file"
                    //   multiple
                    onChange={onChangeHandler}
                  /> */}
                  <input
                    type="file"
                    // style={{ background: "#F1F1F1" }}
                    className="form-control imageuserupload"
                    onChange={fileUpload}
                    // onChange={fileUpload}
                  />
                </Col>
                {/* <Col lg="6" md="6" className="mb-2 languageselect">
                  <FormGroup> */}
                {/* <Label>Language</Label> */}

                {/* <Multiselect
                      placeholder="Select language"
                      options={langL}
                      // selectedValues={selectedValues}
                      onSelect={onSelect}
                      onRemove={onRemove}
                      displayValue="language"
                    /> */}
                {/* </FormGroup>
                </Col> */}
                <Col lg="6" md="6" className="mb-2">
                  <FormGroup>
                    <Label>Topic</Label>
                    <Input
                      type="text"
                      name="topics"
                      placeholder="Enter topic"
                      value={topics}
                      onChange={(e) => setTopics(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6" className="mb-2">
                  <Label>Optional</Label>
                  <Accordion>
                    <AccordionItem>
                      <Col
                        lg="12"
                        className="d-flex justify-content-end align-items-end"
                      >
                        <AccordionItemButton
                          style={{
                            paddingLeft: "517px",
                            paddingRight: "10px",
                            marginRight: "-10px",
                            marginTop: "1px",
                            height: "37px",
                            backgroundColor: "white",
                            borderRadius: "0.5rem",
                            border: "1px solid #d9d9d9",
                          }}
                        >
                          <FiArrowDown />
                        </AccordionItemButton>
                      </Col>
                      <AccordionItemPanel>
                        <Form>
                          <FormGroup>
                            <Label>Title</Label>
                            <Input
                              type="text"
                              name="resTitle"
                              value={resTitle}
                              onChange={(e) => setResTitle(e.target.value)}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label>Release Year</Label>
                            <CustomInput
                              type="select"
                              name="relYear"
                              value={yrName}
                              onChange={(e) => setYrName(e.target.value)}
                            >
                              <option>select Year</option>
                              {yrN?.map((allYear) => (
                                <option value={allYear?._id} key={allYear?._id}>
                                  {allYear?.yrName}
                                </option>
                              ))}
                            </CustomInput>
                          </FormGroup>
                          <FormGroup>
                            <Label>Descripition</Label>
                            {/* <Editor
                              toolbarClassName="demo-toolbar-absolute"
                              wrapperClassName="demo-wrapper"
                              editorClassName="demo-editor"
                              editorState={editorState}
                              onEditorStateChange={onEditorStateChange}
                              toolbar={{
                                options: [
                                  "inline",
                                  "blockType",
                                  "fontSize",
                                  "fontFamily",

                                  "image",
                                ],
                                inline: {
                                  options: [
                                    "bold",
                                    "italic",
                                    "underline",
                                    "strikethrough",
                                    "monospace",
                                  ],
                                  bold: {
                                    className: "bordered-option-classname",
                                  },
                                  italic: {
                                    className: "bordered-option-classname",
                                  },
                                  underline: {
                                    className: "bordered-option-classname",
                                  },
                                  strikethrough: {
                                    className: "bordered-option-classname",
                                  },
                                  code: {
                                    className: "bordered-option-classname",
                                  },
                                },
                                blockType: {
                                  className: "bordered-option-classname",
                                },
                                fontSize: {
                                  className: "bordered-option-classname",
                                },
                                fontFamily: {
                                  className: "bordered-option-classname",
                                },
                                image: {
                                  className: "bordered-option-classname",
                                },
                              }}
                            /> */}
                            <textarea
                              id="w3review"
                              name="w3review"
                              rows="6"
                              cols="50"
                              className="form-control"
                              value={desc}
                              onChange={(e) => {
                                setDesc(e.target.value);
                              }}
                            ></textarea>
                          </FormGroup>
                          <FormGroup>
                            <Label>Comments</Label>
                            <Input
                              type="text"
                              name="comment"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                            />
                          </FormGroup>
                        </Form>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </Col>
              </Row>
              <Col lg="6" md="6" className="mb-2">
                <FormGroup>
                  <Label>image</Label>
                  <img
                    className="mx-3"
                    height={230}
                    width={250}
                    src={img}
                  ></img>
                </FormGroup>
              </Col>
              <Row>
                <Col>
                  <Button
                    onClick={submitHandler}
                    color="primary"
                    className="mr-1 mb-1"
                  >
                    Update Content
                  </Button>
                </Col>
              </Row>
            </Form>
            <Row>
              <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                <Label className="mb-1">
                  <h4>Status</h4>
                </Label>
                <div
                  className="form-label-group"
                  // onChange={changeHandler1}
                >
                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    onChange={() => {
                      setStatus("Active");
                    }}
                  />
                  <span style={{ marginRight: "20px" }}>Active</span>

                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    onChange={() => {
                      setStatus("Deactive");
                    }}
                  />
                  <span style={{ marginRight: "3px" }}>Deactive</span>
                </div>
                <Button.Ripple
                  color="primary"
                  onClick={handlestautschange}
                  className="mr-2 mb-1 mx-2"
                >
                  Update
                </Button.Ripple>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default AddResource;
