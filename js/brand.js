export class brand {
    constructor() {
        this.bodyElem = document.createElement('div');
        this.bodyElem.classList.add('anima');
        document.body.appendChild(this.bodyElem);
    }

    show() {
        this.bodyElem.innerHTML = `
            <div class="first"></div>
            <div class="last"></div>
        `;

        const timerId = setTimeout(() => {
            this.bodyElem.classList.add('active');
            clearTimeout(timerId);
        }, 500);
       
    }
}

