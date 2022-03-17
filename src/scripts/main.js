function main() {
  const randomCatUrl =
    "https://api.thecatapi.com/v1/images/search?limit=3&page=100&order=DESC";
  const breedCatUrl = "https://api.thecatapi.com/v1/breeds";
  const getBook = async () => {
    try {
      const response = await fetch(`${randomCatUrl}`);
      const responseJson = await response.json();
      console.log(responseJson);
      // console.log(response);
      renderAllCats(responseJson);
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const getCatBreed = async () => {
    try {
      const response = await fetch(`${breedCatUrl}`);
      const responseJson = await response.json();
      console.log(responseJson);
      // console.log(response);
      renderCatBreed(responseJson);
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const renderCatBreed = (cats) => {
    console.log(cats);
    const listBookElement = document.querySelector("#listBreed");
    listBookElement.innerHTML = "";

    cats.forEach((cat) => {
      console.log(cat.url);
      listBookElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body">
                        <h1>${cat.name}</h1>
                        <p>${cat.description}</p>
                        <img src="${cat.image.url}"></img>
                        </div>
                    </div>
                </div>
            `;
    });
  };

  const renderAllCats = (cats) => {
    console.log(cats);
    const listBookElement = document.querySelector("#listBook");
    listBookElement.innerHTML = "";

    cats.forEach((cat) => {
      console.log(cat.url);
      listBookElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body">
                        <img src="${cat.url}"></img>
                        </div>
                    </div>
                </div>
            `;
    });
  };
  document.getElementById("refreshBtn").addEventListener("click", function () {
    getBook();
  });
  document.addEventListener("DOMContentLoaded", () => {
    getBook();
    getCatBreed();
  });
}

export default main;
