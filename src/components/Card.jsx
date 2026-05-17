export function Card({ title, description, imagen, precio,children }) {
    return (
        <div className="card">
            <img src={imagen} alt="" className="image"/>
            <h2 className="title">{title}</h2>
            <p className="description">{description}</p>
            <p className="price">{precio}</p>
            {children}
        </div>
    );
}