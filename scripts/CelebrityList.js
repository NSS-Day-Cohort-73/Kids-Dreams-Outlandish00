import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "celebrity"){
            window.alert(`${itemClicked.dataset.name} plays ${itemClicked.dataset.sport}`)
        }
    }
)

export const Celebrities = () => {
    let html = "<ol>"

    for (const star of celebrities) {
        html += `<li data-id="${star.id}" data-type="celebrity" data-name= "${star.name}" data-sport="${star.sport}" id="star--${star.id}">
                    ${star.name}
                </li>`
    }

    html += "</ol>"
    return html
}
