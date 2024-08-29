import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import StyleProvider from "./context/StyleProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StyleProvider>
        <App />
    </StyleProvider>
);


