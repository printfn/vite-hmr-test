import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<ul>
				<li>
					<Link to="/a">/a (works)</Link>
				</li>
				<li>
					<Link to="/b">/b (works)</Link>
				</li>
				<li>
					<Link to="/c">/c (works)</Link>
				</li>
				<li>
					<Link to="/d">/d (broken)</Link>
				</li>
			</ul>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</>
	);
}

export default App;
