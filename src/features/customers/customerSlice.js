import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});
console.log(customerSlice);
export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
/*
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
*/
