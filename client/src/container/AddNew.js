import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ADD_OUTCOME, ADD_INCOME } from "../queryData/Mutation";
import { INCOME_LIST, EXPENSE_LIST } from "../queryData/Query";
import { Mutation } from "react-apollo";
import { client } from "../components/App";
import App from '../components/App'

const fontStyle = {
  fontFamily: "Rock Salt, cursive"
};

export default class AddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mutationType: "ADD_INCOME",
      name: "",
      money: null
    };
  }

  render() {
    var mutation = null
    var query = null
    if (this.state.mutationType === "ADD_INCOME") {
      mutation = ADD_INCOME;
      query = INCOME_LIST;
    } else {
      mutation = ADD_OUTCOME;
      query = EXPENSE_LIST;
    }
    return (
      <Mutation mutation={mutation} update={
        (cache,{data})=>{
          const list = cache.readQuery({query:query})
          if(data.addIncome){
            list.incomes.push(data.addIncome)
          }else{
            list.outcomes.push(data.addOutcome)
          }
          cache.writeQuery({
            query: query,
            data:list
          });
        }
      }>
        {addNew => (
          <div className="container" style={{ marginTop: "5rem" }}>
            <form
              onSubmit={e => {
                e.preventDefault();
                addNew({
                  variables: { name: this.state.name, money: this.state.money }
                }).then(() => {
                  document.getElementById("name").value = "";
                  document.getElementById("money").value="";
                });
              }}
            >
              <div className="input-group row">
                <div
                  className="input-group-prepend"
                  style={{ fontFamily: "Amatic SC, cursive" }}
                >
                  <span
                    className="input-group-text"
                    style={{ fontSize: "1.7rem" }}
                  >
                    New Activities
                  </span>
                </div>
                <input
                  id="name"
                  placeholder="Activities name"
                  type="text"
                  className="form-control"
                  style={{
                    fontSize: "1.7rem",
                    width: "30rem",
                    fontFamily: "Amatic SC, cursive",
                    fontWeight: "bold",
                    height:"5rem"
                  }}
                  autoComplete="off"
                  onChange={e => {
                    this.setState({
                      name: e.target.value
                    });
                  }}
                />
                <input
                  id="money"
                  placeholder="$  values "
                  type="number"
                  className="form-control"
                  style={{
                    fontSize: "1.7rem",
                    fontFamily: "'Rock Salt', cursive"
                  }}
                  autoComplete="off"
                  onChange={e => {
                    this.setState({
                      money: Number(e.target.value)
                    });
                  }}
                />
                <select
                  className="custom-select col"
                  style={{ fontSize: "1.7rem", height:"5rem" }}
                  defaultValue={this.state.mutation}
                  onChange={e => {
                    this.setState({
                      mutationType: e.target.value
                    });
                  }}
                >
                  <option
                    className="income"
                    style={{ fontSize: "1.7rem" }}
                    value="ADD_INCOME"
                  >
                    +
                  </option>
                  <option
                    className="outcome"
                    style={{ fontSize: "1.7rem" }}
                    value="ADD_OUTCOME"
                  >
                    -
                  </option>
                </select>
                <button
                  type="submit"
                  className="btn-control btn btn-success"
                  style={{
                    fontSize: "1.7rem",
                    fontFamily: "'Rock Salt', cursive"
                  }}
                >
                  ADD
                </button>
              </div>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}
