import taskReducer from './tasksSlice';
import { configureStore } from "@reduxjs/toolkit";;

export default configureStore({
    reducer:{
        tasks: taskReducer,
    }
})