var host = process.env.NODE_ENV === prod ? "www.sinreceta.com.ar" : "31.220.58.84"
var mdfURL="http://"+host+":3001/download/sin-receta-momento-de-furia.zip"
var notURL = "http://"+host+":3001/download/sin-receta-noticia-oficial.zip"
var urls={
  mdf: mdfURL,
  not: notURL,
  host: host,
}

module.exports = urls
