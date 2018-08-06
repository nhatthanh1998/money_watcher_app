import gql from 'graphql-tag'

export const ADD_INCOME = gql`
mutation addIncome($name:String!,$money:Int!){
    addIncome(name:$name,money:$money){
      _id
      name
      money
    }
  }
`
export const DELETE_INCOME = gql`
mutation deleteIncome($_id:String!){
    deleteIncome(_id:$_id){
        _id
        name
        money
    }
}
`

export const ADD_OUTCOME = gql`
mutation addIncome($name:String!,$money:Int!){
    addOutcome(name:$name,money:$money){
      _id
      name
      money
    }
  }
`


export const DELETE_OUTCOME = gql`
mutation deleteOutcome($_id:String!){
    deleteOutcome(_id:$_id){
        _id
        name
        money
    }
}
`