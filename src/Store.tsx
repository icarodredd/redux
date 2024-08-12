import { combineReducers, createStore } from "redux";

const initalStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initalStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const accountReducer = (state = initalStateAccount, action: any) => {
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

function createCustomer(fullName: any, nationalId: any) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalId,
      createdAt: new Date().toDateString(),
    },
  };
}

function updateName(fullName: any) {
  return {
    type: "account/updateName",
    payload: fullName,
  };
}

function customerReducer(state = initalStateCustomer, action: any) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "account/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

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
store.dispatch(createCustomer("John Doe", "1234567890"));

console.log(store.getState());
