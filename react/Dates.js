import React from 'react';
var MediaQuery = require('react-responsive');

var host = "31.220.58.84"

const style = {
  marginRight:5,
  marginLeft: 5
}

function tablaFechas(fechas){
  return(
    <div>
      <table className="table" style={{fontFamily: 'roboto'}}>
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

const FECHAS = [
  {
    fecha: "Sáb 29/4 - 21:00 hs",
    lugar: "Teatro Verdi - Av. Alte. Brown 726",
    ciudad: "CABA",
    detalles: <a
      target="_blank"
      href = "https://www.facebook.com/events/1272262689555836/"
      >
        <span style={{color: "darkRed"}}> IR AL EVENTO </span>
    </a>,
  },
  {
    fecha: "Sáb 17/6",
    lugar: "Teatro Verdi - Av. Alte. Brown 726",
    ciudad: "CABA",
    detalles: "-",
  },
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
  },

]

export default class Albums extends React.Component {
  render() {
    return(
      <div style={{paddingBottom: 30}}>
        <MediaQuery query='(max-width: 768px)'>
          <h4 style={{textAlign: 'center', color: 'white', marginTop: '10%', position:'relative', fontFamily: 'helvetica'}}>
            Próximas Fechas:
          </h4>
        </MediaQuery>
        <MediaQuery query='(min-width: 769px)'>
          <h3 style={{textAlign: 'center', color: 'white', marginTop: '5%', position:'relative', fontFamily: 'helvetica'}}>
            Próximas Fechas:
          </h3>
        </MediaQuery>
        <div style={{color: 'white', margin: "0 auto", width: "75%", marginTop: 30, marginBottom: 250, position:'relative'}}>
          {tablaFechas(FECHAS)}
        </div>
      </div>

    )
  }
}
