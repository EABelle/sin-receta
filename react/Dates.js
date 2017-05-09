import React from 'react';
var MediaQuery = require('react-responsive');
var host = "31.220.58.84"

function tablaFechas(fechas){
  return(
    <div>
      <table className="table" id="datesTable" >
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Lugar</th>
            <th>Ciudad</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {
            fechas.map((fecha)=>{
              return(
                <tr key={fecha.fecha}>
                  <th scope="row">{fecha.fecha}</th>
                  <td>{fecha.lugar}</td>
                  <td>{fecha.ciudad}</td>
                  <td>{fecha.detalles}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

const FECHAS = [/*
  {
    fecha: "Sáb 29/4 - 21:00 hs",
    lugar: "Teatro Verdi - Av. Alte. Brown 726",
    ciudad: "CABA",
    detalles: <a
      target="_blank"
      href = "https://www.facebook.com/events/1272262689555836/"
      >
        <span className="dateLink"> IR AL EVENTO </span>
    </a>,
  },*/
  {
    fecha: "Sáb 20/5",
    lugar: "Kirie Music Club - Bolívar 813",
    ciudad: "CABA",
    detalles: "-",
  },
  {
    fecha: "Sáb 17/6",
    lugar: "Teatro Verdi - Av. Alte. Brown 726",
    ciudad: "CABA",
    detalles: "Rock In Boca",
  },
  /* //FECHAS FUTURAS CONFIRMADAS
  {
    fecha: "Sáb 12/8",
    lugar: "Teatro Verdi - Av. Alte. Brown 726",
    ciudad: "CABA",
    detalles: "-",
  },
  {
    fecha: "Sáb 14/10",
    lugar: "Teatro Verdi - Av. Alte. Brown 726",
    ciudad: "CABA",
    detalles: "-",
  },
  {
    fecha: "Sáb 16/12",
    lugar: "Teatro Verdi - Av. Alte. Brown 726",
    ciudad: "CABA",
    detalles: "-",
  },*/

]

export default class Albums extends React.Component {
  render() {
    return(
      <div id="datesHead">
        <MediaQuery query='(max-width: 768px)'>
          <h4 className="datesTitle" id="datesTitleMin">
            Próximas Fechas:
          </h4>
        </MediaQuery>
        <MediaQuery query='(min-width: 769px)'>
          <h3 className="datesTitle" id="datesTitleMax">
            Próximas Fechas:
          </h3>
        </MediaQuery>
        <div id="datesTableHead">
          {tablaFechas(FECHAS)}
        </div>
      </div>

    )
  }
}
