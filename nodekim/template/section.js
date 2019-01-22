const section = (getNav) =>{
    let pTag = '';
    let hrefData;
    let href = []
    
    console.log(hrefData)
    for(i=0;i<getNav.length;i++){
        hrefData = getNav[i].replace(/\s/gi, "").split('.')[1];
        href.push(hrefData)
        
        pTag += `<li>
                    <a href="${href[i]}">
                        <div id="gameText" class="gameText">
                            <p>${getNav[i]}</p>
                        </div>
                    </a>
                </li>   
                `
    }
    return `
    <section>
        <nav>
            <ul>
                ${pTag}
            </ul>
        </nav>
        <article>
            <ul id="dataInjection">
                <!-- <li>
                    <a >
                        <div class="utubeImg">
                            <img src="http://placehold.it/200x200" alt="200*300">
                        </div>
                        <div class="utubeText">
                            유튜브 텍스트
                        </div>
                    </a>
                </li> -->
            </ul>
        </article>
        <div class="popup" id="popup" style="display:none;">
            <div class="close"><a href=""> X</a></div>
            <div class="pop">
                <iframe id=Vcontents width="1349" height="480" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </section>  
    `
}

module.exports = section