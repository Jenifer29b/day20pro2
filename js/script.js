const url1 = "https://bible-api.com/"

const submit = document.getElementById("submit")

submit.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("clicked")

    //get the values from the input fields
    const book = document.getElementById("book").value
    const chapter = document.getElementById("chapter").value
    const verse = document.getElementById("verse").value
    const url = `${url1}${book}+${chapter}:${verse}?translation=kjv`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("output").innerHTML =` <b>Verse</b> : ${data.text}  <b>${book} ${chapter}:${verse} </b>`
        })
        .catch(err => console.log(err))
})