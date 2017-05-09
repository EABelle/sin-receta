import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ActionGetApp from 'material-ui/svg-icons/action/get-app';
import IconButton from 'material-ui/IconButton';
var MediaQuery = require('react-responsive');
var albums = require('./const/albums')
var NOTICIA = albums.noticia
var MOMENTO = albums.momento
var URLS = require('./const/links')
var MOMENTO_URL = URLS.mdf
var NOTICIA_URL = URLS.not

function getDisco(imageUrl, link){
  return(
    <div className="discoContainer">
      <div className="discoItemContainer" >
        <img src={imageUrl} width={240} className="discoTapa"/>
      </div>
      <div className="discoItemContainer" >
        <a href={link}>
        <FlatButton
          label="DESCARGAR DISCO"
          primary={true}
          />
        </a>
      </div>
    </div>

  )
}

function tablaDisco(disc, name){
  return(
    <div>
      <table className="table" id="datesTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th style={{textAlign: 'center'}}>Descargar</th>
          </tr>
        </thead>
        <tbody>
          {
            disc.map((song)=>{
              return(
                <tr key={song.name}>
                  <th scope="row">{song.id}</th>
                  <td>{song.name}</td>
                  <td style={{textAlign: 'center', padding: 0}}>
                    <IconButton href={"http://"+URLS.host+":3001/download/"+song.url}>
                      <ActionGetApp />
                    </IconButton>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}



export default class Albums extends React.Component {
  render() {
    return(
      <div id="discosTitleContainer">
        <MediaQuery query='(max-width: 768px)'>
          <h5 className="discosTitle" id="discosTitleMin">
            Discos:
          </h5>
        </MediaQuery>
        <MediaQuery query='(min-width: 769px)'>
          <h4 className="discosTitle" id="discosTitleMax">
            Discos:
          </h4>
        </MediaQuery>
        <div id="discosContainer">
          {getDisco("../images/momento/momento-cover.jpg", MOMENTO_URL)}
          {tablaDisco(MOMENTO, "Momento de Furia")}
          {getDisco("../images/momento/noticia-cover.jpg", NOTICIA_URL)}
          {tablaDisco(NOTICIA, "Noticia Oficial")}
        </div>
      </div>

    )
  }
}
