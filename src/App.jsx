import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import { DetailedCard } from "./components/DetailedCard";

export default function App() {
	return (
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path="/" element={<MainSection/>}/>
				<Route path="/:id" element={<DetailedCard/>}/>
			</Routes>
		</BrowserRouter>
	)
}