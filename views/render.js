import getDom from "../controllers/getElement.js";
import data from "../data/Data.json" assert {type: "json"}

const navPillsData = data.navPills
const tabItems = data.tabPanes



export function mapNavPills() {
    const navPills = getDom(".nav-pills")
    let content = " ";
    navPillsData.map(el => {
        content += `
            <li class="nav_items"> 
             <button class="btn btn-outline-warning" onclick=mapWell("${el.type}")>
             ${el.showName} 
             </button>
             </li>`
    }
    )
    navPills.innerHTML = content
}
window.mapWell = (type) => {
    const well = getDom(".well")
    let content = "";
    tabItems.filter(e => e.type === type).map(el => {
        content += `

        <img class="${el.id}" src="${el.imgSrc_jpg}"
         onclick= "show('${el.type}' , '${el.id}')"
        style="{
            width:299
        }">         <span>${el.name} </span> 
        `

    })
    well.innerHTML = content

}
window.show = (type, id) => {
    const imgDiv = getDom(`.${id}`)

    if(imgDiv) {
        imgDiv.classList.toggle("active")
    }
    const array = tabItems.filter(el => el.type === type)
    let t = ``;
    const i = `${type}`
    if (type === "shoes") {
        t = ".feet"
    }



    if (type === "handbags") {
        t = ".handbag"
    }

    if (type === "hairstyle") {
        t = ".hairstyle"
    }

    if (type === "necklaces") {
        t = ".necklace"
    }
    if (type === "background") {
        t = ".background"
        const imgLink = array.find(e => e.id === id).imgSrc_png
        const div = getDom(t)
        div.style.backgroundImage = `url(${imgLink})`
        return
    }
    if (type === "topclothes") {

        t = ".topclothes"
        const imgLink = array.find(e => e.id === id).imgSrc_png
        const div = getDom(t)
        div.style.backgroundImage = `url(${imgLink})`

        return
    }
    if (type === "botclothes") {
        t = ".botclothes"
        const imgLink = array.find(e => e.id === id).imgSrc_png
        console.log("link", imgLink)
        const div = getDom(t)
        div.style.backgroundImage = `url(${imgLink})`
        return
    }
    const imgLink = array.find(e => e.id === id).imgSrc_png
    const div = getDom(t)
    div.innerHTML = `<img src="${imgLink}">`
}


