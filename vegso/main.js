const url = "https://raw.githubusercontent.com/Laci5555/portfolio_json/refs/heads/main/data_json"

getData(url, renderData)

function renderData(data){
    console.log(data);
    data.forEach(element => {

        const topicsListItems = element.topics.map(topic => `<li>${topic}</li>`).join('');

        document.querySelector(".munkáim").innerHTML += `
            <div class="card">
                <div class="kep">
                    <img src="${element.photo_url}" alt="">
                </div>
                <div class="szoveg">
                    <h1>${element.title}</h1>
                    <p>Témakörök:</p>
                    <ul class="ul">
                        ${topicsListItems}
                    </ul>
                    <a href="https://github.com/Laci5555/portfolio_json">Github link</a>
                    <a href="https://voteappkam.netlify.app/">Weboldal link</a>
                </div>
            </div>
        `
        
    });
}

function adatmentes(){
    let elemek = Array.from(document.querySelectorAll(".cont"));
    let ertekek = Array.from(elemek).map(input => input.value);
    let message = document.querySelector('.textarea').value;

    let lista = []

    //console.log(ertekek);
    //console.log(message);

    ertekek.forEach(item => {
        lista.push(item)
    })

    lista.push(message)
    console.log(lista);
}