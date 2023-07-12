import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginState: false,
  busData: null,
  selectedDate: null,
  availableBuses: null,
  selectedBus: [],
  passengerInfo: [],
  contactInfo: null,
  paymentDetails: null,
};

export const busSlicer = createSlice({
  name: "BUS_RESERVE",
  initialState,
  reducers: {
    setLoginState(state, action) {
      state.loginState = !!state.loginState;
    },
    setBusData(state, action) {
      state.busData = action.payload;
    },
    setSelectedDate(state, action) {
      state.selectedDate = action.payload;
    },
    setAvailableBuses(state, action) {
      state.availableBuses = action.payload;
    },
    setSelectedBus(state, action) {
      state.selectedBus = action.payload;
    },
    setPassengerInfo(state, action) {
      console.log("function called");
      let data = action.payload;

      state.passengerInfo = [...data];
    },
    setContactInfo(state, action) {
      console.log("function called");
      state.contactInfo = action.payload;
    },
    setPaymentDetails(state, action) {
      state.paymentDetails = action.payload;
    },
  },
});

export const {
  setLoginState,
  setBusData,
  setSelectedDate,
  setAvailableBuses,
  setPassengerInfo,
  setContactInfo,
  setPaymentDetails,
} = busSlicer.actions;

export default busSlicer.reducer;
