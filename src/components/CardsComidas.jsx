




export const CardsComidas = () => {

    const comidas = [
        {
            id: 1,
            title: "Pollo Teriyaki",
            image: "https://www.hola.com/horizon/landscape/85cf4a70b86d-pollo-adobe-t.jpg?im=Resize=(960),type=downsize"
        },
        {
            id: 2,
            title: "Ensalada Mediterranea",
            image: "https://comedera.com/wp-content/uploads/sites/9/2024/10/ensalada-mediterranea-de-tomate-aceitunas-y-queso-feta.jpg?fit=1316,877&crop=0px,69px,1316px,740px"
        },
        {
            id: 3,
            title: "Quinoa bowl",
            image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2012/06/Quinoa-Fruit-Salad1.jpg"
        },
        {
            id: 4,
            title: "Salmón a la plancha",
            image: "https://www.foodpal-app.com/uploads/images/meals/18943/lachs-auf-gegrilltem-gemuese-63db50d3ed76d-800.webp"
        },
        {
            id: 5,
            title: "Wrap Integral de Pollo",
            image: "https://dietaantiinflamatoriaysalud.com/wp-content/uploads/2023/07/michaelcops_Create_a_high-resolution_appealing_photographic_ima_0091fb93-9d69-419a-8e04-2b32ae76b84f.png.webp"
        },
        {
            id: 6,
            title: "Curry de lentejas rojas",
            image: "https://d36fw6y2wq3bat.cloudfront.net/recipes/curry-de-lentejas-rojas/900/curry-de-lentejas-rojas_version_1698738243.jpg"
        },
        {
            id: 7,
            title: "Tacos de Portobello",
            image: "https://s.lightorangebean.com/media/20241030211134/Plant-Based-Portobello-Tacos_done.jpg.webp"
        },
        {
            id: 8,
            title: "Pasta Integral al Pesto",
            image: "https://www.recetasjudias.com/wp-content/uploads/2016/06/Pasta-al-Pesto.jpg"
        }

    ]
    return(
        <div className="container">
            <div className="row " 
            style={{display: "flex", justifyContent: "center", gap: "10px"}}>
                {comidas.map((item) => (
                    <div key={item.id} className="card" 
                    style={{width: "20rem", height: "20rem", justifyContent: "center"}}>
                        <img src={item.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <a href="#" className="btn btn-outline-warning ">Go somewhere</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}