import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import AddNew from "../container/AddNew";
import List from "../container/List";
import Total from '../container/Total'
const SectionBoard = styled.section`
width:100%;
height:100vh;

margin-top:-5.1rem;
background-image: linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url("./img/background.png");




`
export default class DashBoard extends React.Component {
  render() {
    return (
      <SectionBoard>
      <div className="container">
        <div className="row" style={{ marginTop: "5rem" }}>
          <div className="col" style={{ textAlign: "center" }}>
            <span
              style={{
                fontFamily: "Amatic SC, cursive",
                fontSize: "7rem",
                color: "#1de9b6"
              }}
            >
              MONEY WATCHER APP
            </span>
          </div>
        </div>
        <div className="row" style={{ marginTop: "5rem" }}>
          <div className="col" style={{ textAlign: "center" }}>
            <Total/>
          </div>
        </div>
        <div className="row" style={{ marginTop: "5rem" }}>
          <div className="col" style={{ textAlign: "center" }}>
            <span
              style={{
                fontFamily: "Amatic SC, cursive",
                fontSize: "7rem",
                color: "#1de9b6"
              }}
            >
              Income
            </span>
          </div>
          <div className="col" style={{ textAlign: "center" }}>
            <span
              style={{
                fontFamily: "Amatic SC, cursive",
                fontSize: "7rem",
                color: "#ff1744"
              }}
            >
              Expense
            </span>
          </div>
        </div>
        <List />
        <AddNew />
      </div>
      </SectionBoard>
    );
  }
}
