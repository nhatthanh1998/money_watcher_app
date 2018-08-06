import gql from 'graphql-tag'

export const INCOME_LIST = gql`
query getIncomesList{
  incomes{
    _id
    name
    money
  }
}
`

export const EXPENSE_LIST = gql`query expenses{
    outcomes{
      _id
      name
      money
    }
  }
`

export const TOTAL = gql`query total{
  outcomes{
    _id
    name
    money
  }
  incomes{
    _id
    name
    money
  }
}
`

