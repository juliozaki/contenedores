

export const Detalle = ({ rowed = [] }) => {
    console.log(rowed);
    return (
        <div className="row card">
            <img src={`../public/${rowed.image}.jpeg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{rowed.id + ' - ' + rowed.nombre}</h5>
                <p className="card-text">Dirección: <b>{rowed.direccion}</b></p>
                <p className="card-text">Teléfono: <b>{rowed.telefono}</b></p>
            </div>
        </div>
    )
}
