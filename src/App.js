import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";
import Layout from "./components/Layout";
import ScrollTop from "./hoc/ScrollTop";
import NotFound from "./pages/NotFound";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const SingleService = lazy(() => import("./pages/SingleService"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Blog = lazy(() => import("./pages/Blog"));
const Contacts = lazy(() => import("./pages/Contacts"));

const app = [
    { path: "/", element: Home },
    { path: "/about", element: About },
    { path: "/services", element: Services },
    { path: "/services/:slug", element: SingleService },
    { path: "/gallery", element: Gallery },
    { path: "/blog", element: Blog },
    { path: "/contacts", element: Contacts },
];

const RoutesContainer = () => (
    <Suspense fallback={<Spinner position="full" />}>
        <Routes>
            <Route element={<Layout />}>
                {app.map((route, key) => {
                    const RouteComponent = ScrollTop(route.element);
                    return (
                        <Route
                            key={key}
                            path={route.path}
                            element={<RouteComponent />}
                        />
                    );
                })}
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Route>
        </Routes>
    </Suspense>
);

export default RoutesContainer;