const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const WINES_URL = `${BASE_URL}/wines`
const main = document.querySelector('main')
const sidebar = document.getElementById('sidebar')

getWines(WINES_URL)

function getWines(WINES_URL){
    fetch(WINES_URL)
    .then(res => res.json( ))
    .then(wines => wines.forEach(wine => {
        listWine(wine)
    })
)}

function listWine(wine){
    const div = document.createElement('div')
    const a = document.createElement('a')
    a.textContent = wine.name
    a.href = `${WINES_URL}/${wine.id}`
    div.addEventListener('click', (e) => e.preventDefault(displayWine(wine)))
    // let txt = wine.name
    // div.innerHTML = link_to (wine.name), `${WINES_URL}/${wine.id}`
    sidebar.append(div)
    div.append(a)
}

function displayWine(wine){
    main.textContent = ""
    const img = document.createElement('img')
    // const update_btn = document.createElement('button')
    img.src = wine.image_url
    main.append(img)
    displayInfo(wine)
}
function displayInfo()
    // const table = document.createElement('table'),
    // const div = document.createElement('div')