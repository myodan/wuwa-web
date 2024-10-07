import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import { Provider } from "~/components/ui/provider";
import { Header } from "./header";

const notoSans = Noto_Sans_KR({ subsets: ["latin"] });

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

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
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
