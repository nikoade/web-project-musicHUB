
async function getArtistInfo() {
    var artistName = document.getElementById("search-artist").value
    return fetch(`https://theaudiodb.com/api/v1/json/1/search.php?s=${artistName}`)
        .then((response)=>response.json())
        .then((responseJson)=>{return responseJson})
}

async function getArtistAlbums(id){
    return fetch(`https://theaudiodb.com/api/v1/json/1/album.php?i=${id}`)
        .then((response)=>response.json())
        .then((responseJson)=>{return responseJson})
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

var songId = window.location.href.split('=')[1]
if(songId === undefined) songId = 32736482
console.log(songId)
getSongInfo(songId)

async function handleSongResponse(songInfo){
    console.log(songInfo)
    var songName = songInfo.track[0].strTrack
    
    var nameHolder = document.getElementById("songName-holder")
    nameHolder.innerHTML = songName

    var musicVid = songInfo.track[0].strMusicVid
    var musicPlayerHolder = document.getElementById("musicPlayer-holder");
    if(musicVid != undefined){
        var left = musicVid.substring(0,musicVid.indexOf("watch"))
        var right = musicVid.substring(musicVid.indexOf("=")+ 1)
        musicVid = left + "embed/" + right
        console.log(musicVid)
    }
    musicPlayerHolder.setAttribute("src", musicVid )

}


function getSongInfo(songId){
    fetch(`https://theaudiodb.com/api/v1/json/1/track.php?h=${songId}`)
        .then((response)=>response.json())
        .then((responseJson)=>{handleSongResponse(responseJson)})
}

