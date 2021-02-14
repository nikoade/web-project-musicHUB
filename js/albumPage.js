
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

async function handleAlbumResponse(albumInfo){
    
    var albumNameHolder = document.getElementById("albumName-holder")
    
    console.log(albumInfo)
    albumNameHolder.innerHTML = albumInfo.album[0].strAlbum
    var songListHolder = document.getElementById("songList-holder")
    var albumDescHolder = document.getElementById("albumDesc-holder")
    var albumPhoto = document.getElementById("albumPhoto")
    albumPhoto.setAttribute("width", "400")
    albumPhoto.setAttribute("alt", "No photo found")
    albumPhoto.setAttribute("src", albumInfo.album[0].strAlbum3DFace)
    var albumDesc = albumInfo.album[0].strDescriptionEN
    if(albumDesc === undefined) albumDesc = "no description available"
    albumDescHolder.innerHTML = albumDesc

    var albumId = albumInfo.album[0].idAlbum
    var ul = document.createElement("ul")

    fetch(`https://theaudiodb.com/api/v1/json/1/track.php?m=${albumId}`)
        .then((response)=>response.json())
        .then((songs)=>{
            songs.track.forEach(element => {
                console.log(element)
                var li = document.createElement("li")
                var nm = document.createElement('p')
                var a = document.createElement('a');

                var txt = document.createTextNode(element.strTrack)
                
                a.setAttribute('href',  "songList.html?songId=" + element.idTrack)
                nm.appendChild(txt);
                a.appendChild(nm)
                li.appendChild(a)
                ul.appendChild(li)
            });
        })
    songListHolder.appendChild(ul)
}

var albumId = window.location.href.split('=')[1]
if(albumId === undefined) albumId = 2110840
getAlbumInfo(albumId)


function getAlbumInfo(albumId){
    fetch(`https://theaudiodb.com/api/v1/json/1/album.php?m=${albumId}`)
        .then((response)=>response.json())
        .then((responseJson)=>{handleAlbumResponse(responseJson)})
}

