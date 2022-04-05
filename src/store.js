import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./component/spotifyplaylist/utility/authslice";

export default configureStore({
    reducer: {
        auth: authReducer,
    },
  })