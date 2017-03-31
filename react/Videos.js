import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 250,
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'n1twQOqkf-s',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    //setTimeout(stopVideo, 6000);
    //done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

function getJSONData(yourUrl) {
  var Httpreq = new XMLHttpRequest();
  try {
      Httpreq.open("GET", yourUrl, false);
      Httpreq.send(null);
  } catch (ex) {
      alert(ex.message);
  }
  return Httpreq.responseText;
}

function showVideoList(username, writediv, maxnumbervideos, apikey) {
    try {
        //document.getElementById(writediv).innerHTML = "";
        var keyinfo = JSON.parse(getJSONData("https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=" + username + "&key=" + apikey));
        var userid = keyinfo.items[0].id;
        var channeltitle = keyinfo.items[0].snippet.title;
        var channeldescription = keyinfo.items[0].snippet.description;
        var channelthumbnail = keyinfo.items[0].snippet.thumbnails.default.url; // default, medium or high
        /*//channel header
        document.getElementById(writediv).innerHTML += "<div style='width:100%;min-height:90px;'>"
            + "<a href='https://www.youtube.com/user/" + username + "' target='_blank'>"
            + "<img src='" + channelthumbnail + "' style='border:none;float:left;margin-right:10px;' alt='" + channeltitle + "' title='" + channeltitle + "' /></a>"
            + "<div style='width:100%;text-align:center;'><h1><a href='https://www.youtube.com/user/" + username + "' target='_blank'>" + channeltitle + "</a></h1>" + channeldescription + "</div>"
            + "</div>";*/
        var videoinfo = JSON.parse(getJSONData("https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=" + userid + "&maxResults=" + maxnumbervideos + "&key=" + apikey));
        var videos = videoinfo.items;
        var videocount = videoinfo.pageInfo.totalResults;
        // video listing
        for (var i = 0; i < videos.length; i++) {
            var videoid = videos[i].id.videoId;
            var videotitle = videos[i].snippet.title;
            var videodescription = videos[i].snippet.description;
            var videodate = videos[i].snippet.publishedAt; // date time published
            var videothumbnail = videos[i].snippet.thumbnails.default.url; // default, medium or high
            /*
            document.getElementById(writediv).innerHTML += "<hr /><div style='width:100%;min-height:90px;'>"
                + "<a href='https://www.youtube.com/watch?v=" + videoid + "' target='_blank'>"
                + "<img src='" + videothumbnail + "' style='border:none;float:left;margin-right:10px;' alt='" + videotitle + "' title='" + videotitle + "' /></a>"
                + "<h3><a href='https://www.youtube.com/watch?v=" + videoid + "' target='_blank'>" + videotitle + "</a></h3>" + videodescription + ""
                + "</div>";
                */
        return videos
        }
    } catch (ex) {
        alert(ex.message);
        return(null)
    }
  }

export default class Videos extends React.Component {

  constructor(){
    super()
    this.state = {
      videos: []
    }
  }

  componentWillMount() {
    let videos = showVideoList("7sinreceta", "videos", 25, "AIzaSyCvmdO2Xjg37cfWcRxtPp-F0Nwh5XPq1ss");
    this.setState({videos: videos})
  }

  render() {
    let videos = this.state.videos.map((video)=>{
      var videoid = video.id.videoId;
      var videotitle = video.snippet.title;
      var videodescription = video.snippet.description;
      var videodate = video.snippet.publishedAt; // date time published
      var videothumbnail = video.snippet.thumbnails.default.url; // default, medium or high
      var link = 'https://www.youtube.com/watch?v='+videoid
      return(
        <img src={videothumbnail} />
      )
    })
    console.log(videos)
    return(
      <div style={styles.root}>
        <p>Canal de youtube</p>
        {videos}
      </div>
    )
  }
}
