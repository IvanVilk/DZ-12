const news = document.querySelector("#news");

let apiUrl = "https://newsapi.org/v2/";
let apiKey = "b0cfe66f16374e759ef4b1863457ad77";


type TNews = {
    title: string;
    author: string;
    description: string;
    urlToImage: string;
}


async function fetchNews() {
    let response = await fetch(`${apiUrl}everything?q=apple&from=2024-11-21&to=2024-11-21&sortBy=popularity&apiKey=${apiKey}`);
    let obj = await response.json()
    console.log(obj.articles);
    renderNews(obj.articles);
}
fetchNews()

function renderNews(newsArr: TNews[]) {
    newsArr.forEach(newItem => {
        const listItem = document.createElement('div');
        listItem.className = "news_item";
        news?.appendChild(listItem);

        const imgItem = document.createElement('img');
        imgItem.src = newItem.urlToImage;
        listItem.appendChild(imgItem);

        const titleItem = document.createElement('h2');
        titleItem.innerHTML = newItem.title;
        listItem.appendChild(titleItem);

        const authorItem = document.createElement('h3');
        authorItem.innerHTML = newItem.author;
        listItem.appendChild(authorItem);

        const descriptionItem = document.createElement('p');
        descriptionItem.innerHTML = newItem.description;
        listItem.appendChild(descriptionItem);
    })
    
}