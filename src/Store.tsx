import { createStore } from "redux";

const initalState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const reducer = (state = initalState, action: any) => {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan < 0) return state;
      return { ...state, loan: state.loan + action.payload };
    case "account/payLoan":
      if (state.loan < 0)
        return { ...state, loan: 0, balance: state.balance - state.loan };
      break;
    default:
      return state;
  }
};

const store = createStore(reducer);

//action creators

function deposit(amount: number) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}

function withdraw(amount: number) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}

function requestLoan(amount: number) {
  return {
    type: "account/requestLoan",
    payload: amount,
  };
}

function payLoan(amount: number) {
  return {
    type: "account/payLoan",
    payload: amount,
  };
}

store.dispatch(deposit(1000));

console.log(store.getState());
