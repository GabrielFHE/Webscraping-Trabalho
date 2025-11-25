
function criar(doc){
        let noticia = doc.querySelectorAll("._evg")
        let ul = document.createElement("ul")
        noticia.forEach(element =>{
            let li = document.createElement("li")
            li.innerHTML = element.innerHTML
            ul.appendChild(li)
        })
        document.body.appendChild(ul)
    }

function scrap(){
    fetch("https://cors-anywhere.com/https://ge.globo.com/").then(response => {
        if(!response.ok){
            throw new Error("Chamada HTTP Falhou")
        }
        return response.text()
    }).then(dados =>{
        let parser = new DOMParser()
        let doc = parser.parseFromString(dados, "text/html")
        criar(doc)
    }).catch(erro => alert(erro))
}
function popularEvento(){
    document.querySelector("#btn").addEventListener("click", evt =>{
        scrap()
    })
}

window.onload = popularEvento
