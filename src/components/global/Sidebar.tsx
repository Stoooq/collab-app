import Link from "next/link";
import Home from "../icons/home";
import Settings from "../icons/settings";
import Payment from "../icons/paymentold";

const Sidebar = () => {
	return (
		<nav className="sticky top-0 h-screen">
			<div className="p-4">
				<Link href="/">Collab</Link>
			</div>
			<div className="flex flex-col items-center px-4 gap-4">
				<Link href="/dashboard">
					<Home selected={false} />
				</Link>
				<Link href="/settings">
					<Settings selected={false} />
				</Link>
        <Payment selected={false} />
			</div>
		</nav>
	);
};

export default Sidebar;
