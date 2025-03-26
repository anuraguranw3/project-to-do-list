import { createSlice } from "@reduxjs/toolkit";
import { getWeather } from "./weatherAPI";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchWeatherStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchWeatherFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } = weatherSlice.actions;

export const fetchWeatherThunk = (city = "Bhopal") => async (dispatch) => {
  dispatch(fetchWeatherStart());
  try {
    const weatherData = await getWeather(city);
    dispatch(fetchWeatherSuccess(weatherData));
  } catch (error) {
    dispatch(fetchWeatherFailure(error.message));
  }
};

export default weatherSlice.reducer;