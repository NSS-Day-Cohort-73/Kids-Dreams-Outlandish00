import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kid) => {
    
    for (const celebrity of celebrities) {
        if (kid.celebrityId === celebrity.id){
            let kidsStar = celebrity
            return kidsStar
        }
            
    }
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid)
        html += `
            <li>
                 ${kid.name} will be making memories with ${kidsStar.name}, a ${kidsStar.sport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

