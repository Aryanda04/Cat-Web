import jumbotronImg from "./../img/jumbotron.webp";

class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
      :host {
          display: block;
          width: 100%;
          background-color: #886F6F;
          color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      }
      h2 {
        text-align:center;
          padding: 16px;
          font-size:32px;
      }
  </style>
      <h2>Meow World</h2>`;
  }
}

class Jumbotron extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    img{
      width:100%;
      height:35vh;
    }
</style>
    <img src="${jumbotronImg}" alt="jumbotron img"></img>


        `;
  }
}

customElements.define("banner-bar", Jumbotron);

customElements.define("app-bar", AppBar);
