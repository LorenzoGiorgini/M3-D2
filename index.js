window.onload = () => {

    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "54af5d148emsh7c584bbc4786506p1619efjsn5c4304c1b056"
        }
    })

        // WAITING
        .then(response => response.json()
        )
        .then(body => {

            // DOM MANIPULATION
            console.log(body)

            const row = document.getElementById("album-row")
            console.log(row)

            for (let i = 0; i < body.data.length; i++) {
                const obj = body.data[i]
                console.log(obj)

                const col = document.createElement("div")
                col.className = "col-2"

                col.innerHTML = `
                <div class="card card-sizing">
                    <img
                    src="${obj.album.cover_medium}"
                    class="card-img-top"
                    alt="img-fluid"
                    />
                    <div class="card-body">
                    <h5 class="card-title">${obj.album.title}</h5>
                    </div>
                </div>
                `
                row.appendChild(col)
            }
        })
        .catch(error => console.error(error))
}