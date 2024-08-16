const initalStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export default function accountReducer(
  state = initalStateAccount,
  action: any
) {
  switch (action.type) {
    case "account/convertingCurrency":
      return { ...state, isLoading: true };
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
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

export function deposit(amount: any, currency: any) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch: any) {
    const host = "api.frankfurter.app";
    const data = await fetch(
      `https://${host}/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const json = await data.json();
    const converted = json.rates.USD;

    return dispatch({ type: "account/deposit", payload: converted });
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
