import image from "../assets/imagen_footer.png"



export const Footer = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="card mb-3" style={{ maxwidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="display-1" style={{ WebkitTextStrokeWidth: "thin" }}>
                                    <em><strong> ¡Comer sano nunca fue tan fácil</strong></em>
                                            <h1>en Talavera!</h1>   
                                </h2>
                                <div className="container mt-5">
                                    <div className="row g-5">
                                        <div className="col-5 mst-5">
                                            <div className="p-3 border bg-light">Contacto</div>
                                        </div>
                                        <div className="col-5 ms-3">
                                            <div className="p-3 border bg-light">Redes sociales</div>
                                        </div>
                                        <div className="col-6 mt-5">
                                            <div className="p-3 border bg-light">Compromiso
                                                <p> 
                                                    Gracias por confiar en la comida consciente
                                                </p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="mt-2">
                    <p>Author: David Rivero<br />
                        <a href="mailto:hege@example.com">rivero@example.com</a></p>
                </footer>
            </div>
        </>
    )
}