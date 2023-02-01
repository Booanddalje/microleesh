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

    page() {
        this.bodyElem.innerHTML = `
            <div class="tascoPage"></div>
        `;
    }


    pageOff() {
        let gg = document.querySelector('.tascoPage');

        gg.style.transform = 'translateY(-300vh)';
        this.bodyElem.classList.remove('active');

        setTimeout(() => {
            gg.remove();
        },1000);

        
        
        
    }
}

/* <div class="anima">
    <div class="first"></div>
    <div class="last"></div>
</div> */