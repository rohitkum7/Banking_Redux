const initalStateCustomer = {
  name: "",
  nationalId: "",
  createdAt: "",
};

export default function customerReducer(state = initalStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payLoad.fullName,
        nationalId: action.payLoad.nationalId,
        createdAt: action.payLoad.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payLoad };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payLoad: {
      fullName,
      nationalId,
      createdAt: new Date().toISOString(),
    },
  };
}

export function updateName(fullName) {
  return {
    type: "customer/updateName",
    payload: fullName,
  };
}
