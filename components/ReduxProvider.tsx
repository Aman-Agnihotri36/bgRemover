'use client'

import { makeStore } from "@/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react'

interface ReduxProviderProps {
    children: React.ReactNode;
}
const store = makeStore();
let persistor = persistStore(store)


export const ReduxProvider = ({ children }: ReduxProviderProps) => {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>;
};

export default ReduxProvider;
