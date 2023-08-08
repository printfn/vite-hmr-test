import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<ul>
				<li>
					<Link to="/a">/a</Link>
				</li>
				<li>
					<Link to="/b">/b</Link>
				</li>
				<li>
					<Link to="/c">/c</Link>
				</li>
				<li>
					<Link to="/d">/d</Link>
				</li>
			</ul>
			<Suspense fallback={<div>Loading...</div>}>
				<Outlet />
			</Suspense>
		</>
	);
}

export default App;
