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
  }
};
