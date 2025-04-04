import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers';

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production', // Enables Redux DevTools in development mode
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Automatically includes thunk
});

export default store;