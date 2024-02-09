class NumberElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 58px;
            height: 58px;
            flex-shrink: 0;
            background: #ffffff;
            margin: 8px;
            text-align: center;
            font-family: "Red Hat Display";
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            border-radius: 5px;
        }
        </style>
        <div>1</div>
      `;
    }
}

customElements.define('header-component', Header);