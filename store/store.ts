import { configureStore } from "@reduxjs/toolkit";
import { authApiSlice } from "./api/authApiSlice";
import { clientApiSlice } from "./api/clientApiSlice";
import { plansApiSlice } from "./api/plansApiSlice";
import { chatbotApiSlice } from "./api/chatbotApiSlice";
import { enrollmentFormApiSlice } from "./api/enrollmentFormSlice";

const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [clientApiSlice.reducerPath]: clientApiSlice.reducer,
    [plansApiSlice.reducerPath]: plansApiSlice.reducer,
    [chatbotApiSlice.reducerPath]: chatbotApiSlice.reducer,
    [enrollmentFormApiSlice.reducerPath]: enrollmentFormApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware,
      clientApiSlice.middleware,
      plansApiSlice.middleware,
      chatbotApiSlice.middleware,
      enrollmentFormApiSlice.middleware
    ),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
