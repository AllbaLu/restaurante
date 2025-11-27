




export const CardsComidas = () => {

    const comidas = [
        {
            id: 1,
            title: "Salmon",
            image: "https://www.nutrioli.com/wp-content/uploads/2024/05/una-guia-para-una-alimentacion-saludable.jpg"
        },
        {
            id: 2,
            title: "Salad",
            image: "https://www.nutrioli.com/wp-content/uploads/2024/05/una-guia-para-una-alimentacion-saludable.jpg"
        },
        {
            id: 3,
            title: "Fruit",
            image: "https://www.nutrioli.com/wp-content/uploads/2024/05/una-guia-para-una-alimentacion-saludable.jpg"
        },
        {
            id: 4,
            title: "soup",
            image: "https://www.nutrioli.com/wp-content/uploads/2024/05/una-guia-para-una-alimentacion-saludable.jpg"
        },
        {
            id: 5,
            title: "chicken",
            image: "https://www.nutrioli.com/wp-content/uploads/2024/05/una-guia-para-una-alimentacion-saludable.jpg"
        }

    ]
    return(

        <div className="container " 
        style={{display: "flex", justifyContent: "center", gap: "10px"}}>
            {comidas.map((item) => (
                <div key={item.id} className="card" 
                style={{width: "18rem", height: "18rem", justifyContent: "center"}}>
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <a href="#" className="btn btn-outline-warning ">Go somewhere</a>
                    </div>
                </div>
            ))}
        </div>
    )
}