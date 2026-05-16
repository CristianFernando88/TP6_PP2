import { useState } from "react";
import { Card } from "./Card"
const productos = [
        {
            id: 1,
            nombre: "Yerba Mate La Merced",
            precio: 1890,
            categoria: "Almacén",
            enStock: true
        },
        {
            id: 2,
            nombre: "Dulce de Leche San Ignacio",
            precio: 1250,
            categoria: "Lácteos",
            enStock: true
        },
        {
            id: 3,
            nombre: "Alfajores Havanna",
            precio: 1850,
            categoria: "Golosinas",
            enStock: true
        },
        {
            id: 4,
            nombre: "Vino Malbec Norton",
            precio: 3250,
            categoria: "Bebidas con Alcohol",
            enStock: false
        },
        {
            id: 5,
            nombre: "Medialunas de Manteca",
            precio: 890,
            categoria: "Panadería",
            enStock: true
        },
        {
            id: 6,
            nombre: "Queso Cremoso La Paulina",
            precio: 1650,
            categoria: "Lácteos",
            enStock: true
        },
        {
            id: 7,
            nombre: "Chorizo Parrillero",
            precio: 2450,
            categoria: "Carnes",
            enStock: false
        },
        {
            id: 8,
            nombre: "Fernet Branca 750ml",
            precio: 2950,
            categoria: "Bebidas con Alcohol",
            enStock: true
        },
        {
            id: 9,
            nombre: "Facturas Surtidas",
            precio: 1100,
            categoria: "Panadería",
            enStock: true
        },
        {
            id: 10,
            nombre: "Arroz Tío Luca",
            precio: 880,
            categoria: "Almacén",
            enStock: true
        }
    ];
const ProductList = ()=>{
    const [categorias,setCategorias] = useState("Todas");
    const [enStock,setEnStock] = useState(false);
    const selectCategorias = ["Todas",...new Set(productos.map(product => product.categoria))];
    const productosFiltrados = productos.filter(product => {
        if (categorias.length > 0 && categorias !== "Todas" && product.categoria !== categorias) {
            return false;
        }
        if (enStock && !product.enStock) {
            return false;
        }
        return true;
    });
    return(
        <div className="container">
            <h2>Lista de Productos</h2>
            <form className="form-filter">
                <label>
                    Categoría:
                    <select value={categorias} onChange={(e) => setCategorias(e.target.value)}>
                        <option value="">Todas</option>
                        <option value="Almacén">Almacén</option>
                        <option value="Lácteos">Lácteos</option>
                        <option value="Golosinas">Golosinas</option>
                        <option value="Bebidas con Alcohol">Bebidas con Alcohol</option>
                        <option value="Panadería">Panadería</option>
                        <option value="Carnes">Carnes</option>
                    </select>
                </label>
                <label>
                    En Stock:
                    <input type="checkbox" checked={enStock} onChange={(e) => setEnStock(e.target.checked)} />
                </label>
            </form>
            <div className="container-card">
                {productosFiltrados.length>0?(productosFiltrados.map(product => (
                    <Card key={product.id} 
                    title={product.nombre} 
                    description={product.categoria} 
                    precio={`$${product.precio}`} >
                        {product.enStock ?<p>En Stock </p> : <p>Fuera de Stock</p>}
                    </Card>
                ))):(<p>No hay productos disponibles</p>)}
            </div>
        </div>
    )
}
export default ProductList;