import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const style = {
  marginRight:5,
  marginLeft: 5
}

function getDisco(imageUrl){
  return(
    <div style={{display: 'inline-block', marginLeft: 30, marginRight: 30}}>
      <div style={{
          display: 'block',
          textAlign: 'center',
          position: 'relative',
          margin: '10 auto'
        }}>
        <img src={imageUrl} width={240} style={{border: 'solid white 1px', backgroundColor: 'black'}}/>
      </div>
      <div style={{
          display: 'block',
          textAlign: 'center',
          position: 'relative',
          margin: '10 auto'
      }}>
        <FlatButton
          label="DESCARGAR DISCO"
          primary={true}
          />
      </div>
    </div>

  )
}

function tablaDisco(disc, name){
  return(
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {
            disc.map((song)=>{
              return(
                <tr>
                  <th scope="row">{song.id}</th>
                  <td>{song.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

const NOTICIA = [
  {
    id: 1,
    name: "Saber Elegir"
  },
  {
    id: 2,
    name: "Hombres Dragones"
  },
  {
    id: 3,
    name: "Libres de Destrucción"
  },
  {
    id: 4,
    name: "La cuenta perfecta"
  },
  {
    id: 5,
    name: "Seguro"
  },
  {
    id: 6,
    name: "Acorralados"
  },
  {
    id: 7,
    name: "Revoluciones"
  },
  {
    id: 8,
    name: "Jericó"
  },
  {
    id: 9,
    name: "Legión"
  },
  {
    id: 10,
    name: "Gorriónz de Mayo"
  },
]

const MOMENTO = [
  {
    id: 1,
    name: "Araña de ciudad"
  },
  {
    id: 2,
    name: "Arma letal"
  },
  {
    id: 3,
    name: "Mutación"
  },
  {
    id: 4,
    name: "Línea del Sol"
  },
  {
    id: 5,
    name: "Crayones masticados"
  },
  {
    id: 6,
    name: "Conquistarán"
  },
  {
    id: 7,
    name: "Instinto animal"
  },
  {
    id: 8,
    name: "Mahatma"
  },
  {
    id: 9,
    name: "Circo grotesco"
  },
  {
    id: 10,
    name: "Deus ex machina"
  },

  {
    id: 11,
    name: "Hubo"
  },
  {
    id: 12,
    name: "Ángeles de plástico"
  },
  {
    id: 13,
    name: "Noticia Oficial"
  },
]

export default class Albums extends React.Component {
  render() {
    return(
      <div style={{marginTop: 250, color: 'white'}}>
        {getDisco("../images/momento/MdF-logo.png")}
        {tablaDisco(NOTICIA, "Noticia Oficial")}
        {getDisco("../images/momento/MdF-logo.png")}
        {tablaDisco(MOMENTO, "Momento de Furia")}
      </div>

    )
  }
}
