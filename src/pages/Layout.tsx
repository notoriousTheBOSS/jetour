import { lazy, Suspense } from "react";
import Spinner from "../components/UI/Spinner/Spinner";
const Models = lazy(() => import("./Models/Models"));
const Intro = lazy(() => import("./Intro/Intro"));
const About = lazy(() => import("./About/About"));
const Service = lazy(() => import("./Service/Service"));
const Header = lazy(() => import("../components/Header/Header"));
const Footer = lazy(() => import("../components/Footer/Footer"));

const Layout = () => {
    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Header />
                <Intro />
                <Models />
                <About />
                <Service />
                <Footer />
            </Suspense>
        </>
    );
};

export default Layout;
