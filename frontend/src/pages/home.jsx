import { CardsComidas } from "../components/CardsComidas"
import { Footer } from "../components/Footer"

import { Navbar } from "../components/navbar"
import video from "../assets/istockphoto-video.mp4"
import { Descripcion } from "../components/Descripcion"
import { Eligenos } from "../components/Eligenos"



export const Home = () => {
    return (
        <>
           <Navbar /> 
            <div className="home position-relative h-100 d-flex flex-column justify-content-center">
                <video controls autoPlay loop muted style={{width: "1200px", height: "100%"}} src={video} typeof="video/mp4" alt="restaurant" className="hero-background" />

                <div className="container-xxl text-center content-overlay">
                    <div className="mb-2 text-uppercase">
                        <div className="name p-3 ">
                            <h2 className="display-1" style={{ WebkitTextStrokeWidth: "thin" }}>
                                <em><strong> Sabores de la Tierra</strong></em>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            
            <Descripcion />
            <CardsComidas />
            <Eligenos />
            <Footer />
        </>
    )
}