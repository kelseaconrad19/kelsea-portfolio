import Aos from "aos";
import { useEffect } from "react";
import "../styles/index.scss";
import dynamic from "next/dynamic";
import ContextProvider from "../Context/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
	ssr: false,
});

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		Aos.init({
			duration: 1200,
		});
	}, []);
	return (
		<>
			<AnimatedCursor
				innerSize={8}
				outerSize={44}
				color="238, 97, 146"
				outerAlpha={0.3}
				innerScale={0.7}
				outerScale={1.2}
			/>
			<ContextProvider>
				<Component {...pageProps} />
			</ContextProvider>
		</>
	);
}

// export { rockSalt };
export default MyApp;
