import React from "react"
import Row from "./Row"
import request from '../request'
import Banner from "./Banner"
import Nav from "./Nav"

function App() {

    return (

        <div>
            <Nav></Nav>
            <Banner />
            <Row title="PANDITFLIX ORIGINALS" fetchUrl={request.fetchOriginals} />
            <Row title="Trending Now" fetchUrl={request.fetchTrending} />
            <Row title="Action" fetchUrl={request.fetchAction} />
            <Row title="Comedy" fetchUrl={request.fetchComedy} />
            <Row title="Horror" fetchUrl={request.fetchHorror} />
            <Row title="Romance" fetchUrl={request.fetchRomance} />
            <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
        </div>
    )
}

export default App