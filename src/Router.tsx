import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Post } from "./pages/Post";
import { Blog } from "./pages/Blog";

export function Router() {
	return(
		<Routes>
			<Route path="/" element={<DefaultLayout/>}>
				<Route path="/" element={<Blog/>}/>
				<Route path="/post/:id" element={<Post/>}/>
			</Route>
		</Routes>
	)
}