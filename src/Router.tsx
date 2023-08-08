import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import { lazy } from "react";

const LazyClassComponent = lazy(
	() => import("./components/LazyClassComponent"),
);
const LazyFunctionalComponent = lazy(
	() => import("./components/LazyFunctionalComponent"),
);

const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="a" element={<FunctionalComponent />} />
			<Route path="b" element={<ClassComponent />} />
			<Route path="c" element={<LazyFunctionalComponent />} />
			<Route path="d" element={<LazyClassComponent />} />
		</Route>,
	),
);

export function Router() {
	return <RouterProvider router={routes} />;
}
