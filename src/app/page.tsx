import { FlipWords } from "@/components/global/FlipWords";
import Navbar from "@/components/global/Navbar";

export default function Home() {
	const words = ["effective", "friendly", "transparent"];

	return (
		<>
			<Navbar />
			<div className="p-8 mt-8 text-8xl container">
				<p className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
					Create
				</p>
				<FlipWords words={words} className="font-bold" /> <br />
				<p className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
					space to work with collab
				</p>
			</div>
			<div className="w-[100px] h-[100px] bg-slate-100 sticky top-10">BOX</div>
			<div className="h-[2000px]">cos</div>
		</>
	);
}
