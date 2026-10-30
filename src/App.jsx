
	import Home from "./Home";
	import { BrowserRouter, Route ,Routes} from "react-router-dom";
	import Counter from "./Counter";
	import Mang from "./Manger";
	export default function App() {
		return (
			<div data-theme="light"> 
				<BrowserRouter>
					<Routes>	
						<Route path="/"  element={<Home/>} />
						<Route path="/Counter.jsx"  element={<Counter/>} />
						<Route path="/Mang"  element={<Mang/>} />
					</Routes>		
				</BrowserRouter>
			</div>
		);
	}


	