import React from "react"
import Carousel from "../../components/header/Carousel"
import CurrentNews from "../../components/article/CurrentNewsModule"
import ArticleList from "../../components/article/InformationList"

export default function Information() {
    return(
        <>
            <Carousel/>
            <div className="grid--container">
                <ArticleList/>
                <CurrentNews/>
            </div>
        </>
    )
}