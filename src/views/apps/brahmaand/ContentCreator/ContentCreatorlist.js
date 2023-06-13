import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Eye, Edit, Trash2, ChevronDown } from "react-feather";
//import classnames from "classnames";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import Switch from "react-switch";
import swal from "sweetalert";

class ContentCreatorlist extends React.Component {
  state = {
    rowData: [],
    aprv_status: "",
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 100,
        filter: true,
      },
      {
        headerName: "Link",
        field: "link",
        width: 110,
        cellRendererFramework: (params) => {
          // console.log(params.data.link);
          return (
            <div className="d-flex align-items-center cursor-pointer">
              {params.data.link?.map((e, i) => (
                <span key={i}>{e}</span>
              ))}
              {/* <span>{params.data.link}</span> */}
            </div>
          );
        },
      },
      {
        headerName: "Category",
        field: "title",
        width: 110,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex  align-items-center cursor-pointer">
              <span>{params.data.category?.title}</span>
            </div>
          );
        },
      },
      {
        headerName: "SubCategory",
        field: "title",
        width: 110,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.sub_category?.title}</span>
            </div>
          );
        },
      },

      {
        headerName: "Format",
        field: "format",
        width: 110,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex  align-items-center cursor-pointer">
              <span>{params.data.format}</span>
            </div>
          );
        },
      },
      {
        headerName: "Language",
        field: "language",
        width: 110,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              {params.data.language?.map((lang) => (
                <span key={lang._id}>{lang?.language}</span>
              ))}
            </div>
          );
        },
      },
      {
        headerName: "Image",
        field: "img",
        filter: true,
        width: 110,
        cellRendererFramework: (params) => {
          return (
            <img
              className="w-50 h-50  rounded-circle"
              src={`https://backend.brahmaand.space/${params.data.img}`}
            />
          );
        },
      },
      {
        headerName: "Topic",
        field: "topics",
        width: 110,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.topics}</span>
            </div>
          );
        },
      },
      {
        headerName: "Descripition",
        field: "desc",
        width: 110,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.desc}</span>
            </div>
          );
        },
      },
      {
        headerName: "Status",
        field: "aprv_status",
        filter: true,
        width: 110,
        cellRendererFramework: (params) => {
          //   console.log(params);
          return params.data.status == "Active" ? (
            <div className="badge badge-pill badge-success">
              {params.data.status}
            </div>
          ) : params.data.status == "Deactive" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.status}
            </div>
          ) : null;
        },
      },
      {
        headerName: "Actions",
        field: "sortorder",
        width: 110,
        display: "flex",
        alignItems: "center",
        cellRendererFramework: (params) => {
          return (
            <div
              className="actions cursor-pointer d-flex align-items-center"
              style={{ height: "50px" }}
            >
              <Route
                render={({ history }) => (
                  <Switch
                    height={20}
                    width={40}
                    // className="mt-1"
                    id="exampleSwitch"
                    checked={params.data.status === "Active" ? true : false}
                    onChange={(e) => {
                      this.updateContent(params.data._id, e);
                    }}
                    color="primary"
                  />
                  // <Edit
                  //   className="mr-50"
                  //   color="blue"
                  //   // onClick={() =>
                  //   //   history.push(
                  //   //     `/app/brahmaand/resource/editUserResource/${params.data._id}`
                  //   //   )
                  //   // }
                  // />
                )}
              />

              <Trash2
                size={20}
                color="red"
                onClick={() => {
                  let selectedData = this.gridApi.getSelectedRows();
                  this.runthisfunction(params.data._id);
                  this.gridApi.updateRowData({ remove: selectedData });
                }}
              />
            </div>
          );
        },
      },
    ],
  };

  async componentDidMount() {
    await axiosConfig.get(`get_all/content/creator`).then((response) => {
      const rowData = response.data.data;
      //   console.log(rowData);
      this.setState({ rowData });
    });
  }
  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.delete(`/content/delete/admin/${id}`).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  async updateContent(id, checked) {
    // console.log(id);
    // console.log(checked);
    await axiosConfig
      .put(`/content/update/admin/${id}`, {
        status: checked ? "Active" : "Deactive",
      })
      .then(
        (response) => {
          const me = this.state.rowData.map((row) => {
            if (row._id === id) {
              return {
                ...row,
                status: checked ? "Active" : "Deactive",
              };
              // console.log(row);
            } else {
              return row;
            }
          });
          this.setState({ rowData: me });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };

  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      // console.log(rowData),
      <Row className="app-user-list">
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 sm="6" className="float-left">
                  Content Creator
                </h1>
              </Col>
              {/* <Col className="pt-4">
                                    <Route
                                        render={({ history }) => (
                                            <Button
                                                className=" btn btn-success float-right"
                                                onClick={() => history.push("/app/brahmaand/resource/addResource")}
                                            >
                                                Add
                                            </Button>
                                        )}
                                    />
                                </Col> */}
            </Row>
            <CardBody>
              {this.state.rowData === null ? null : (
                <div className="ag-theme-material w-100 my-2 ag-grid-table">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="mb-1">
                      <UncontrolledDropdown className="p-1 ag-dropdown">
                        <DropdownToggle tag="div">
                          {this.gridApi
                            ? this.state.currenPageSize
                            : "" * this.state.getPageSize -
                              (this.state.getPageSize - 1)}{" "}
                          -{" "}
                          {this.state.rowData.length -
                            this.state.currenPageSize * this.state.getPageSize >
                          0
                            ? this.state.currenPageSize * this.state.getPageSize
                            : this.state.rowData.length}{" "}
                          of {this.state.rowData.length}
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(20)}
                          >
                            20
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(50)}
                          >
                            50
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(100)}
                          >
                            100
                          </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(134)}
                          >
                            134
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div className="table-input mr-1">
                        <Input
                          placeholder="search..."
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="export-btn">
                        <Button.Ripple
                          color="primary"
                          onClick={() => this.gridApi.exportDataAsCsv()}
                        >
                          Export as CSV
                        </Button.Ripple>
                      </div>
                    </div>
                  </div>
                  <ContextLayout.Consumer>
                    {(context) => (
                      <AgGridReact
                        gridOptions={{}}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        floatingFilter={false}
                        pagination={true}
                        paginationPageSize={this.state.paginationPageSize}
                        pivotPanelShow="always"
                        enableRtl={context.state.direction === "rtl"}
                      />
                    )}
                  </ContextLayout.Consumer>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default ContentCreatorlist;