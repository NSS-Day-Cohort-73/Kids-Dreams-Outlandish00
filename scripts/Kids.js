import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedItem = clickEvent.target

        if (clickedItem.dataset.type === "child"){
            window.alert(`${clickedItem.dataset.name} wish is ${clickedItem.dataset.wish}`)
        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" data-name= "${child.name}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }

    html += "</ol>"
    return html
}

