let month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "December"]
let continue__ = false;
function EditContent(content) {
    let container = document.getElementById("AnnouncementPoster");
    //if (!container) throw new Error("No given DIV object"); return;
    container.innerHTML = "";
    content.forEach((div) => {
        let store = `<div class="card">
        <a id="${div['link']}"></a>
      <span class="date">${div["date"].getDate()} ${month_name[div["date"].getMonth() - 1]} ${div["date"].getFullYear()}</span>
      <img class="-image-" src="${div["image"]}" onerror="this.style.display='none'"/>
      <figcaption>${div["figcaption"]}</figcaption>
      <h4>${div["title"]}</h4>
      <p>${div["contains"]}
      </p>
    </div>`;
        container.innerHTML += store;
    })
    
}