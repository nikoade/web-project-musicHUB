async function handleArtistResponse(){

    /* biography and info */
    artistInfo = await getArtistInfo()
    var id = artistInfo.artists[0].idArtist
    
    console.log(artistInfo)

    var biography = artistInfo.artists[0].strBiographyEN
    var artistName = artistInfo.artists[0].strArtist
    var imgUrl = artistInfo.artists[0].strArtistFanart
    var img = document.createElement("IMG")


    /* artist image */

    img.setAttribute("src", imgUrl)
    img.setAttribute("width", "400")
    img.setAttribute("alt", "No photo found")
    var imageHolder = document.getElementById("photo-holder")
    removeAllChildNodes(imageHolder)
    imageHolder.appendChild(img);
    var biographyHolder = document.getElementById("artist-biography")
    var nameHolder = document.getElementById("artist-name")
    
    biographyHolder.innerHTML = biography

    nameHolder.innerHTML = artistName

    /* album list */
    var albumHolder = document.getElementById("album-list")
    var albums = await getArtistAlbums(id)

    console.log(albums.album)

    removeAllChildNodes(albumHolder)
    var ul = document.createElement('ul')
    ul.classList.add('grid-list')
    albums.album.forEach(element => {
        var li = document.createElement('li')
        var name = element.strAlbum
        var imgUrlalbum = element.strAlbumThumb

        var imgAlbum = document.createElement("IMG")
        imgAlbum.setAttribute("src", imgUrlalbum)
        imgAlbum.setAttribute("width", "150")
        imgAlbum.setAttribute("alt", "No photo found");
        
        var nm = document.createElement('p')
        nm.innerHTML = name
        
        var a = document.createElement('a');
        a.setAttribute('href',  "albumList.html?albumId=" + element.idAlbum)
        
        a.appendChild(imgAlbum)
        li.appendChild(a)
        li.appendChild(nm)
        ul.appendChild(li)
    });

    albumHolder.appendChild(ul)

}

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

var albumId = window.location.href.split('=')[1]
