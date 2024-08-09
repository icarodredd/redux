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
  }
};
