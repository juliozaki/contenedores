import { useEffect, useState } from 'react';
import { Detalle } from './Detalle';

export const App = () => {

  const [inmuebles, setInmuebles] = useState([]);
  const [index, setIndex] = useState(-1);
  const [rowed, setRowed] = useState({
    id: 0,
    nombre: '',
    direccion: '',
    telefono: '',
    image: ''
  });

  useEffect(() => {
    getFetch();
    //console.log('UseFetch');
  },
    []
  );

  useEffect(() => {

    const selectRow = () => {

      if (inmuebles.length > 0) {

        for (let i = 0; i < inmuebles.length; i++) {

          if (inmuebles[i].id == index) {

            setRowed({
              id: inmuebles[i].id,
              nombre: inmuebles[i].nombre,
              direccion: inmuebles[i].direccion,
              telefono: inmuebles[i].telefono,
              image: inmuebles[i].image
            });

          }

        }

      }

    }
    selectRow();
    //console.log('UseFetch2');

  },
    [index]
  );


  const getFetch = async () => {

    const resp = await fetch('http://localhost:8080/inmueble');
    await new Promise(resolve => setTimeout(resolve, 500));

    setInmuebles(await resp.json());
  }

  //console.log(inmuebles);
  //console.log(index);

  return (
    <div className="container">

      <div className="row py-3 mt-4 align-items-center">
        <div className="row py-2 mt-1 align-items-center">
          <div className="col-sm-3 mb-3 align-content-center" />

          <div className="col-sm-3 mb-3 align-content-center">
            <div className="row border">
              <h3>Listado de Inmuebles</h3>
              <ul className="list-group">
                {
                  inmuebles.map((row) => (
                    <li className="list-group-item list-group-item-action"

                      key={row.id}
                      id={row.id}
                      onClick={(e) => {
                        setIndex(e.target.id);
                      }}
                    >
                      {row.id + ' - ' + row.nombre}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          <div className="col-sm-3 mb-3 align-content-center">
            <Detalle rowed={rowed} />
          </div>
        </div>
      </div>

    </div>
  )
}
