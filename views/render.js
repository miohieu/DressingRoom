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
window.show = (type) => {
const array = tabItems.filter(el => el.type === type)

    console.log("array", array)

}

window.mapWell = (type) => {
    const well = getDom(".well")
    let content = "";
    tabItems.filter(e => e.type === type).map(el => {
        content += `
        <img src="${el.imgSrc_jpg}"
         onclick=show("${type}") 
        style=p
            width:"400px"
        }> 
        `

        well.innerHTML = content
    })

}
