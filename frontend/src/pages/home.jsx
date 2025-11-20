import { CardsComidas } from "../components/CardsComidas"
import { Footer } from "../components/Footer"

import { Navbar } from "../components/navbar"




export const Home = () => {
    return(
        <>
            <Navbar />
            <h1 className="mx-5 mb-5">Tu Restaurant</h1>
            <CardsComidas />
            <Footer />
        </>
    )
}