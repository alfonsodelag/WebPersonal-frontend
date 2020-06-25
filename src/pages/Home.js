import React from 'react';
import MainBanner from "../components/Web/MainBanner";
import { Helmet } from "react-helmet";
import HomeCourses from "../components/Web/HomeCourses";
import HowMyCoursesWork from "../components/Web/HowMyCoursesWork";
import ReviewCourses from "../components/Web/ReviewsCourses";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Alfonso De La Guardia</title>
                <meta
                    name="description"
                    content="Home  | Programming website"
                    data-react-helmet="true" />
            </Helmet>
            <MainBanner />
            <HomeCourses />
            <HowMyCoursesWork />
            <ReviewCourses />
        </>
    );
}