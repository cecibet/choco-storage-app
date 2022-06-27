import App from "./App";
import AuthContextProvider from "../Context/AuthContextProvider";

export default function AppWrappers () {
    return (
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    )
};