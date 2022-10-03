fetch('./todo.json')
    .then((res) => res.json())
    .then((data) => {
        displayitems(data.todo)
    })

let itemsEl = document.getElementById('items')

function displayitems(data) {
    let itemsHTML = ''

    console.log(data)
    console.log(data[2])

    displayFeatureditem(data[2])

        for (let item of data) {
            itemsHTML += `
            <div class="card mb-2">
                <div class="card-body">
                    <h2 class="card-text">${item.title}</h2>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
            `
        }

        itemsEl.innerHTML = itemsHTML

        let itemsEls = document.querySelectorAll('#items .card')

        for (let i = 0; i < itemsEls.length; i++) {
            itemsEls[i].addEventListener('click', (event) => {
                let itemInfo = data[i]
                displayFeatureditem(itemInfo)
            })
        }
}

function displayFeatureditem(item) {
    let featureditemEl = document.getElementById('featured-item')

    let tasksHTML = ''

    for (let task in item.tasks) {
        tasksHTML += `
        <li>${task}: ${item.tasks[task]}</li>
        `
    }

    let itemHTML = `
    <h2>${item.title}</h2>
    <p>Description: ${item.description}</p>
    <h3>Tasks:</h3>
    <ul>
        ${tasksHTML}
    <ul>
    `
    featureditemEl.innerHTML = itemHTML
}