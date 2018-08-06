import React from "react";
import { Query,Mutation } from "react-apollo";
import {client} from '../components/App'
import App from '../components/App'
import "bootstrap/dist/css/bootstrap.min.css";
import { EXPENSE_LIST, INCOME_LIST,DATA } from "../queryData/Query";
import {DELETE_INCOME,DELETE_OUTCOME} from '../queryData/Mutation'
export default class List extends React.Component {
  render() {
    
    return (
      <div className="container">
        <div
          className="row"
          style={{
            textAlign: "center",
            fontSize: "3rem",
            fontFamily: "Amatic SC, cursive",
          }}
        >
          <div className="col pr-5">
            <div className="row">
              <div className="col-7">Activities Name</div>
              <div className="col-3">Value</div>
              
            </div>
            <Query query={INCOME_LIST}>
              {({ error, loading, data }) => {
                if (loading) {
                  return <div>....</div>;
                }
                if (data) {
                  return data.incomes.map(income => {
                    return (
                      <div className="row" style={{ color: "#1de9b6" }}>
                        <div className="col-7">{income.name}</div>
                        <div className="col-3">$ {income.money}</div>
                        <div className="col-2">
                          <Mutation mutation ={DELETE_INCOME}
                          update={
                            (cache,{data})=>{
                              const list = cache.readQuery({query:INCOME_LIST})
                              const now = list.incomes.filter(income=>income._id !== data.deleteIncome._id)
                              list.incomes = now
                              cache.writeQuery({
                                query:INCOME_LIST,
                                data:list
                              })
                            }
                          }
                          >
                          {
                            deletedIncome =>(
                              <a style={{ color: "red",textDecoration:"none" }} onClick={()=>{
                                deletedIncome({
                                  variables:{_id:income._id}
                                })
                              }}>Delete</a>
                            )
                            }
                          
                          </Mutation>
                          
                        </div>
                      </div>
                      
                      
                    );
                  });
                  
                }
                if (error) {
                  return <div>error</div>;
                }
              }}
            </Query>
          </div>
          <div className="col pl-5">
            <div className="row">
              <div className="col-7">Activities Name</div>
              <div className="col-3">Money</div>
            </div>
            <Query query={EXPENSE_LIST}>
              {({ error, loading, data }) => {
                if (loading) {
                  return <div>....</div>;
                }
                if (data) {
                  return data.outcomes.map(outcome => {
                    return (
                      <div className="row" style={{ color: "#ff1744" }}>
                        <div className="col-7">{outcome.name}</div>
                        <div className="col-3">$ {outcome.money}</div>
                        <div className="col-2">
                          <Mutation 
                          mutation ={DELETE_OUTCOME}
                          update={
                            (cache,{data})=>{
                              const list = cache.readQuery({
                                query:EXPENSE_LIST
                              })
                              const now = list.outcomes.filter(outcome=>outcome._id !== data.deleteOutcome._id)
                              list.outcomes = now
                              cache.writeQuery({
                                query:EXPENSE_LIST,
                                data:list
                              })
                            }
                          }
                          >
                          {
                            deletedOutcome =>(
                              <a style={{ color: "#1de9b6",textDecoration:"none" }} onClick={()=>{
                                deletedOutcome({
                                  variables:{_id:outcome._id}
                                }).then(()=>{
                                })
                              }}>Delete</a>
                            )
                            }
                          
                          </Mutation>
                          
                        </div>
                      </div>
                    );
                  });
                }
                if (error) {
                  return <div>error</div>;
                }
              }}
            </Query>
          </div>
        </div>
      </div>
    );
  }
}
