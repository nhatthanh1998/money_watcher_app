import React from "react";
import { TOTAL } from "../queryData/Query";
import {Query} from 'react-apollo'
import {client} from'../components/App'
export default class Total extends React.Component{
    constructor(props){
        super(props)
        this.state={
            income:0,
            expanse:0,
            total:0
        }
    }
    render(){
        
        
        const stylePlus = {
            fontFamily: "Amatic SC, cursive",
            fontSize: "5rem",
            color: "#1de9b6"
        }
        const styleMinus = {
            fontFamily: "Amatic SC, cursive",
            fontSize: "5rem",
            color: "#ff1744"
        }
        return(
            <Query query={TOTAL}>
                {
                    ({error,loading,data})=>{
                        if(loading){
                            return <div>....</div>
                        }
                        if(data){
                            var income = 0,outcome = 0,total = 0
                            for(var i=0;i<data.incomes.length;i++){
                                income += Number(data.incomes[i].money)
                            }
                            for(var i=0;i<data.outcomes.length;i++){
                                outcome += Number(data.outcomes[i].money)
                            }
                            total = income - outcome
                            var style = null
                            var warning = ""
                            if(total >= 0){
                                style = stylePlus
                                
                            }else{
                                style = styleMinus
                                
                            }
                            if(total < 0){
                                if(total < 0 && total >-300){
                                    warning = ".HEY! WATCH YOUR DEPT NOW.IT MINUS!"
                                }if(total <-300&total > -1000){
                                    warning=".RED ALERT!BE CAREFUL.YOU ARE RUN OUT OF MONEY NOW"
                                }else{
                                    warning=".YOU'RE OUT OF CONTROL.PLEASE STOP SPENDING AND START WORKING NOW!"
                                }
                            }
                            if(total >=0){
                                if(total>=0&& total < 500){
                                    warning = "IT IS GOOD TO GO."
                                }
                                if(total > 500  && total < 1000){
                                    warning:"AWESOME!YOU'RE NOW CAN DO LOT OF THINGS!"
                                }else{
                                    warning:"MONEY MAKER MACHINE! YOUR SO GOOD IN MAKING MONKEY!"
                                }
                            }
                            

                            
                            return<span style = {style}>YOUR CURRENT MONEY IS {total} $ {warning} </span>
                        }
                    }
                }
            </Query>
        )
    }
}
