const popup = document.getElementById('popup');
document.onkeydown = (evt) => {
evt = evt || window.event;
    if (evt.keyCode == 27) {
        popup.style.display = "none";
    }
};
const search = document.getElementById('searchHint').innerText;

// const url = ****** &key='google API 인증키 필요'
const url =`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=viewCount&q=${search}&type=video&videoDefinition=high&key=`
fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(myJson) {
    const getData = document.getElementById('dataInjection');
    const listItem = myJson.items;
    for(i=0; i < listItem.length; i++){
        getData.innerHTML += `            
                            <li>
                                <a herf="/">
                                    <div class="utubeImg">
                                        <img id="${listItem[i].id.videoId}" src=${listItem[i].snippet.thumbnails.high.url} >
                                    </div>
                                    <div class="utubeText">
                                        <p>${listItem[i].snippet.title}</p> 
                                        <p>${listItem[i].snippet.channelTitle}</p>
                                        <p>${listItem[i].snippet.description}</p>                      
                                    </div>
                                </a>
                            </li>`
    }
})
.then(()=>{
    const bts = document.getElementsByClassName('utubeImg');
    const popUP = document.getElementsByClassName('popup')[0];
    const Vcontents = document.getElementById('Vcontents')
    const utubeUrl = "https://www.youtube.com/embed/"
    const utubeClick = (i)=>{
        bts[i].addEventListener('click',(e)=>{
            popUP.style.display = 'block'
            Vcontents.src =  utubeUrl+ e.path[0].id
        })
    }
    for(i=0; i<bts.length; i++){
        utubeClick(i);
    }    
});