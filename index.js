const input = document.getElementById("input")
const result = document.getElementById("results")


const listItem = []
input.addEventListener("input", (e) => filterData(e.target.value))





async function getData() {

    const res = await fetch("https://randomuser.me/api/?results=50")

    const { results } = await res.json()

    result.innerHTML = ""

    results.forEach((curr) => {

        const li = document.createElement("li")
        li.classList.add("user")
        li.innerHTML = `
        <li class="user">
                    <img src="${curr.picture.large}" alt="" class="user-img">
                <div class = "user-info"> <h3 class="user-name"> ${curr.name.first} </h3>
                <p>${curr.location.city}, ${curr.location.country}</p></div> 
                </li>`

        listItem.push(li)
        result.appendChild(li)
    })

}

getData()

function filterData(searchInput) {
    listItem.forEach((curr) => {
        if (curr.innerText.toLowerCase().includes(searchInput.toLowerCase())) {
            curr.classList.remove("hide")
        } else {
            curr.classList.add("hide")
        }
    })

}

filterData()

