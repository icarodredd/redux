const initalStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(
  state = initalStateAccount,
  action: any
) {
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
}

export function deposit(amount: number) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}

export function withdraw(amount: number) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}

export function requestLoan(amount: number) {
  return {
    type: "account/requestLoan",
    payload: amount,
  };
}

export function payLoan(amount: number) {
  return {
    type: "account/payLoan",
    payload: amount,
  };
}
