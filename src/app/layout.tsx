import { SpeedInsights } from "@vercel/speed-insights/next";
import { type Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import { Header } from "./header";
import { Provider } from "./provider";

const notoSans = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "WuWa",
	description: "",
};

type Props = {
	children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
	return (
		<html lang="ko" suppressHydrationWarning>
			<body className={notoSans.className}>
				<Provider>
					<Header />
					{children}
				</Provider>
				<SpeedInsights />
			</body>
		</html>
	);
};

export default RootLayout;
