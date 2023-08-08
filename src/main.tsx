import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router.tsx";
import { Action, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

function counter(state = 0, action: Action<string>) {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		default:
			return state;
	}
}

const store = configureStore({
	reducer: counter,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<React.StrictMode>
			<Router />
		</React.StrictMode>
	</Provider>,
);
