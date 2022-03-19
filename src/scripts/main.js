import "./customElement.js";

function main() {
  const randomCatUrl =
    "https://api.thecatapi.com/v1/images/search?limit=6&page=100&order=DESC";
  const breedCatUrl = "https://api.thecatapi.com/v1/breeds";
  const getCats = async () => {
    try {
      const response = await fetch(`${randomCatUrl}`);
      const responseJson = await response.json();
      // console.log(responseJson);
      // console.log(response);
      renderAllCats(responseJson);
    } catch (error) {
      // console.log("bbbbbbbbbb");
    }
  };

  const getCatBreed = async () => {
    try {
      const response = await fetch(`${breedCatUrl}`);
      const responseJson = await response.json();
      renderCatBreed(responseJson);
    } catch (error) {
      // console.log("aaaaaaaaaaaa");
    }
  };

  const renderCatBreed = (cats) => {
    // console.log(cats);
    const listBookElement = document.querySelector("#listBreed");
    listBookElement.innerHTML = "";

    cats.forEach((cat) => {
      // console.log(cat.url);
      listBookElement.innerHTML += `
                    <div class="card-breed">
                    <img src="${cat.image.url}"></img>
                    <div class="card-content">

                        <h1>${cat.name}</h1>
                        <p>${cat.description}</p>
                        </div>
                    </div>
            `;
    });
  };

  const catBreedSearch = (keyword) => {
    const filter = keyword.toUpperCase();
    console.log(filter);
    const item = document.querySelectorAll(".card-breed");
    console.log(item);
    for (let i = 0; i < item.length; i++) {
      const titlesText = item[i].textContent || item[i].innerText;

      if (titlesText.toUpperCase().indexOf(filter) > -1) {
        item[i].style.display = "";
      } else {
        item[i].style.display = "none";
      }
    }
  };

  const renderAllCats = (cats) => {
    // console.log(cats);
    const listCatsElement = document.querySelector("#listCats");
    listCatsElement.innerHTML = "";

    cats.forEach((cat) => {
      // console.log(cat.url);
      listCatsElement.innerHTML += `
      
                        <div class="card-body">
                        <img src="${cat.url}"></img>
                        </div>
                   
            `;
    });
  };
  document.getElementById("refreshBtn").addEventListener("click", () => {
    getCats();
    document.getElementById("breedTitle").innerHTML = "Ras Kucing";
  });

  const formSearch = document.getElementById("searchBreed");

  document.getElementById("refreshBtnBreed").addEventListener("click", () => {
    getCatBreed();
    formSearch.reset();
  });
  document.addEventListener("DOMContentLoaded", () => {
    getCats();
    getCatBreed();

    formSearch.addEventListener("submit", (event) => {
      event.preventDefault();

      const inputSearch = document.getElementById("myInput").value;

      catBreedSearch(inputSearch);
    });
  });
}

export default main;
