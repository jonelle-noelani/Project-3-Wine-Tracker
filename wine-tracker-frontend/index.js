const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const WINES_URL = `${BASE_URL}/wines`
const USER_ONE = `${USERS_URL}/1`
const main = document.querySelector('main')
const sidebar = document.getElementById('sidebar')

getWines(WINES_URL)
getUser(USER_ONE)

function clickTitle(WINES_URL, USER_ONE){
    const h1 = document.querySelector('h1')
    h1.addEventListener('click', (e) => e.preventDefault(window.history.pushState('', 'Title', '/j.noelani/Flatiron/Project-3/Project-3-Wine-Tracker/wine-tracker-frontend/index.html')))
}

function getWines(WINES_URL){
    sidebar.innerHTML = ""
    fetch(WINES_URL)
    .then(res => res.json( ))
    .then(wines => wines.forEach(wine => {
        listWine(wine)
    }),
        addWineBtn(),
        clickTitle()
)}

function getUser(USER_ONE){
    fetch(USER_ONE)
    .then(res => res.json( ))
    .then(user => {
        // const header = document.querySelector('header')
        const h1 = document.querySelector('h1')
        const div = document.createElement('div')
        const a = document.createElement('a')

        a.textContent = user.name
        a.id = "user-name"
        a.href = `${USER_ONE}`

        div.addEventListener('click', (e) => e.preventDefault(displayUser(user)))
        // header.append(div)
        h1.append(div)
        div.append(a)
    })
}

function listWine(wine){
    const div = document.createElement('div')
    
    const a = document.createElement('a')
    a.textContent = wine.name
    a.id = "wine_list"
    a.href = `${WINES_URL}/${wine.id}`
    div.addEventListener('click', (e) => e.preventDefault(displayWine(wine)))
    
    sidebar.append(div)
    div.append(a)
}

function addWineBtn(){
    const div = document.createElement('div')
    const btn = document.createElement('button')
    btn.innerText = 'Add New Wine'
    btn.className = "btn btn-outline-secondary"
    btn.id = "add_new"
    sidebar.append(div)
    div.append(btn)

    let h2 = document.createElement('h2')
    h2.textContent = "Add New Wine"
    btn.addEventListener('click', (e) => e.preventDefault(wineForm(h2)))
}

function displayWine(wine){
    main.textContent = ""
    row_div = document.createElement('div')
    row_div.className = "row"

    const img = document.createElement('img')
    img.src = wine.image_url
    img.className = "img-area"
    row_div.append(img)
    main.append(row_div)
    displayInfo(wine, row_div)
    displayReviews(wine, row_div)
}

function displayInfo(wine, row_div){
    const section = document.createElement('section')
    const div = document.createElement('div')
    div.innerText = `Name of the Winery: ${wine.name}`
    const div1 = document.createElement('div')
    div1.innerText = `Grape Varietal:  ${wine.varietal}`
    const div2 = document.createElement('div')
    div2.innerText = `Type of Wine:  ${wine.wine_type}`
    const div3 = document.createElement('div')
    div3.innerText = `Country of Origin:  ${wine.country}`
    const div4 = document.createElement('div')
    div4.innerText = `Price:  $${wine.price}`

    let h2 = document.createElement('h2')
    h2.textContent = "Edit Wine"

    section.append(div, div1, div2, div3, div4)
    row_div.append(section)
    main.append(row_div)
    //
    const btn = document.createElement('button')
    btn.innerText = 'Edit Wine'
    
    section.append(btn)
    btn.addEventListener('click', (e) => e.preventDefault(wineForm(h2, wine)))
    //
    const delete_btn = document.createElement('button')
    delete_btn.innerText = 'Delete Wine'
    
    section.append(delete_btn)
    delete_btn.addEventListener('click', (e) => e.preventDefault(deleteWine(wine.id, section)))
}

function wineForm(h2, wine){
    main.innerHTML = ''
    let attributes = ['name', 'varietal', 'wine_type', 'country', 'price', 'image_url']
    let form = document.createElement('form')
    let submit = document.createElement('input')
    
    submit.type = 'submit'
    
    attributes.forEach(thing => {
        const div = document.createElement('div')
        let label = document.createElement('label')
        let input = document.createElement('input')
        label.for = thing
        label.textContent = thing.toUpperCase( )
        input.name = thing
        
        wine? input.value = wine[input.name] : input.placeholder = "put something here"
        
        div.append(label, input)
        form.append(div)
    })
    form.append(submit)
    main.append(h2, form)
    form.addEventListener('submit', (e) => e.preventDefault(handleSubmit(e, wine)))
}
// handler
function handleSubmit(e, value){
    e.preventDefault()
    let wine = {
        name: e.target.name.value,
        varietal: e.target.varietal.value,
        wine_type: e.target.wine_type.value,
        country: e.target.country.value,
        price: e.target.price.value,
        image_url: e.target.image_url.value
    }
    value? updateWine(wine, value.id) : postWine(wine)
}
// fetches and actions
function postWine(wine){
    fetch(WINES_URL, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(wine)
    })
    .then(res => res.json())
    .then(wine => {
        listWine(wine),
        displayWine(wine)
    })
    .catch(error => {
        console.error('Errors: ', error)
    })
}

function updateWine(wine, id){
    fetch(`${WINES_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(wine)
    })
    .then(res => res.json())
    .catch(error => {
        console.error('Errors: ', error)
    })
    listWine(wine)
    displayWine(wine)
}

function deleteWine(id){
    fetch(`${WINES_URL}/${id}`, {
        method: `DELETE`
    })
    .then(() => {
        let deletedWine = document.querySelector('section')
        deletedWine.remove()
        let deleteimg = document.querySelector('img')
        deleteimg.remove()
        getWines(WINES_URL)
    })
}
/// reviews  
function displayReviews(wine, row_div){
    wine.reviews.forEach(review => {
        const section = document.createElement('section')
        const div = document.createElement('div')
        div.innerText = `Review By: Jonelle`
        const div1 = document.createElement('div')
        div1.innerText = `Rating:  ${review.rating}`
        const div2 = document.createElement('div')
        div2.innerText = `Review:  ${review.review}`

        section.append(div, div1, div2)
        row_div.append(section)
        main.append(row_div)

        const btn = document.createElement('button')
        btn.innerText = 'Add Review'
    
        section.append(btn)
        btn.addEventListener('click', (e) => e.preventDefault(console.log("mkay")))
    })
}
// user
function displayUser(user){
    main.textContent = ""
    row_div = document.createElement('div')
    row_div.className = "row"

    const img = document.createElement('img')
    img.src = user.image_url
    img.className = "img-area"
    row_div.append(img)
    main.append(row_div)
    displayUserInfo(user, row_div)
}

function displayUserInfo(user,row_div){
    const section = document.createElement('section')
    const div = document.createElement('div')
    div.innerText = `User Name: ${user.name}`
    const div1 = document.createElement('div')
    div1.innerText = `Favorite Wine:  ${user.favorite_wine}`

    section.append(div, div1)
    row_div.append(section)
    main.append(row_div)
}