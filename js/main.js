import { brand } from './brand.js';


let headerNavElem;
let headerItemElems;
let menuPageElems;
let mainNavElems;

let identityPageElems;
let uxuiElem;
let brandingElem;
let studyElem;
let leesanghyeonElem;

let contain;
let contain2;
let contain3;

let tascoPage;

function setElems() {
	headerNavElem = document.querySelector('.header-nav');
    headerItemElems = document.querySelectorAll('.header-nav-item');
    menuPageElems = document.querySelector('.menu');
    mainNavElems = document.querySelector('.main-nav');

    identityPageElems = document.querySelector('.identity');
    uxuiElem = document.querySelector('.uxui');
    brandingElem = document.querySelector('.branding');
    studyElem = document.querySelector('.study');
    leesanghyeonElem = document.querySelector('.leesanghyeon');

    contain = document.querySelector('.list-container');
    contain2 = document.querySelector('.list-container2');
    contain3 = document.querySelector('.list-container3')
}

function menuClose() {
    menuPageElems.addEventListener('transitionend', () => {
        // close transition 끝나면 class = close 제거
        menuPageElems.classList.remove('close');
    });

    menuPageElems.classList.add('close');
    menuPageElems.classList.remove('active');
} 

function menuOpen() {
    const timeId = setTimeout( () => {
        menuPageElems.classList.add('active');
        clearTimeout(timeId);
    // 이거 셋타임아웃 해줘야 하는데 셋타임아웃 좀 더 공부하고 하기. coloso 2시8분경
    },2350);
}





window.addEventListener('load', () => {

    setElems();



    // header click
    headerNavElem.addEventListener('click', (e) => {
        console.log(e.target.dataset.link);

        if(e.target.dataset.link === "1") {
            menuPageElems.classList.add('active');
        } else if (e.target.dataset.link === "2") {
            identityPageElems.classList.add('active');
        }
    });
    

    // identity
    identityPageElems.addEventListener('click', (e) => {
        console.log(e.target);
        
        if(e.target.classList.contains('back')) {

            identityPageElems.addEventListener('transitionend', () => {
                // close transition 끝나면 class = close 제거
                identityPageElems.classList.remove('close');
            });

            identityPageElems.classList.add('close');
            identityPageElems.classList.remove('active');
        }

    });


   
    //mobile - menu click
    menuPageElems.addEventListener('click', (e) => {
        console.log(e.target);
        

        // if를 back을 클릭하면 없어지게끔 바꿔보기. css pointer events 사용해서.
        if(e.target.classList.contains('back')) {
            menuClose();
        }
       
        if(e.target.dataset.menu === 'uxui') {
            menuClose();

            uxuiElem.dataset.main = 'true';
        }

        if(e.target.dataset.menu === 'branding'){
            menuClose();

            brandingElem.dataset.main = 'true';
        }

        if(e.target.dataset.menu === 'study'){
            menuClose();

            studyElem.dataset.main = 'true';
        }

        if(e.target.dataset.menu === 'self'){
            menuClose();

            leesanghyeonElem.dataset.main = 'true';
        }


    });//menuPageElems


    uxuiElem.addEventListener('click', function(e){
        if(e.target.classList.contains('back')){
            uxuiElem.dataset.main = 'false'; 
            menuOpen();
        }
    });//uxuiElem

    brandingElem.addEventListener('click', function(e){
        if(e.target.classList.contains('back')){
            brandingElem.dataset.main = 'false'; 
            menuOpen();
        }
    });//branding

    studyElem.addEventListener('click', function(e){
        if(e.target.classList.contains('back')){
            studyElem.dataset.main = 'false'; 
            menuOpen();
        }
    });//study

    leesanghyeonElem.addEventListener('click', function(e){
        if(e.target.classList.contains('back')){
            leesanghyeonElem.dataset.main = 'false'; 
            menuOpen();
        }
    });


    window.addEventListener('resize', function(e){
        let 현재 = window.innerWidth;
        if(현재 >= 1025){
            menuClose();
        }
        if(현재 < 750){
            contain.style.left = 9.867 + '%';
            contain3.style.left = 9.867 + '%';

            contain.style.transform = ` translateX(0)`;
            contain3.style.transform = ` translateX(0)`;
        }
        if(현재 >= 750){
            contain.style.left = 50 + '%';
            contain3.style.left = 50 + '%';

            contain.style.transform = ` translateX(calc(-50% + 14px))`;
            contain3.style.transform = ` translateX(calc(-50% + 14px))`;
        }
    });


   
    mainNavElems.addEventListener('click', (e) => {
        console.log(e.target);
        
        
        if(e.target.dataset.menu === 'uxui'){
            uxuiElem.dataset.main = 'true';
        }
        if(e.target.dataset.menu === 'branding'){
            brandingElem.dataset.main = 'true';
        }
        if(e.target.dataset.menu === 'study'){
            studyElem.dataset.main = 'true';
        }
        if(e.target.parentNode.dataset.menu === 'self'){
            leesanghyeonElem.dataset.main = 'true';
        }
        
        
    });
    
    
    let w = window.matchMedia('screen and (max-width: 750px)');
    let w2 = window.matchMedia('screen and (min-width: 751px)');
    


    window.addEventListener('scroll', function(e) {
        // maxScroll양을 구하여 그 퍼센트만큼 contain의 translateX가 움직여라.
        let maxScrollValue = document.body.offsetHeight - window.innerHeight;
        let xMove = window.pageYOffset / maxScrollValue * 80;
        console.log(xMove);
        
        if (w.matches) {

            contain.style.transform = `translateX(${ - xMove }%)`;
            contain2.style.transform = `translateX(${ - xMove }%)`;
            contain3.style.transform = `translateX(${ - xMove }%)`;

        }

        if(w2.matches) {

            contain2.style.transform = `translateX(${ - xMove }%)`;

        }
        
    }); 
   


    tascoPage = new brand();
    
    let anima = document.querySelector('.anima');

    contain2.addEventListener('click', (e) => {
          

        if(e.target.classList.contains('tasco')){
            console.log(e.target);
            tascoPage.show();
            
            const one = setTimeout(() => {
                document.querySelector('.first').style.backgroundColor = '#000000';
                clearTimeout(one);
            }, 750)
           
            const two = setTimeout(() => {
                document.querySelector('.last').style.backgroundColor = '#000000';
                clearTimeout(two);
            },2000);
            

            const three = setTimeout(() => {
                console.log('2초');
                // anima.classList.remove('active');
                document.querySelector('.first').remove();
                document.querySelector('.last').remove();
                tascoPage.page();
                clearTimeout(three);
            }, 2500)
            
            window.addEventListener('scroll', function ggg () {
                let tascoP = document.querySelector('.tascoPage');
        
                let maxScrollValue = document.body.offsetHeight - window.innerHeight;
                let xMove = window.pageYOffset / maxScrollValue * 300 ;
                
                tascoP.style.transform = `translateY(${ - xMove }vh)`;
        
                anima.addEventListener('click', () => {
                    window.removeEventListener('scroll', ggg);
                    tascoPage.pageOff(); 
                });
            });


            

            
            
        }// e타겟 tasco

    });


   

   
    
  


    // 1024이상에서 work메뉴들을 클릭하고 close하면 줄어들때 갑자기 menupage가 열린다.
    // 1024에서 줄어들때 menupage 열리지 않게 하라.

    
    
   
  
    
});











 
    // const mediaQueryList = window.matchMedia('(min-width: 1025px)');
   

    // const changeHandler = (e) => {
    //     console.log(e.target);
    //     console.log('changed!');
    //     console.log(w);
    //     if(window.matchMedia('(min-width: 1025px)').matches){
    //         console.log('성공했다.');
    //     }
    // }

    // mediaQueryList.addEventListener('change', changeHandler)


























//matchMedia 관련.

// const mediaQueryList = window.matchMedia('(min-width: 769px)');

        // document 가 미디어 쿼리를 충족시키는것에 대해 변화가 생기면 콘솔에 로깅한다
        // const changeHandler = (e) => {
        //     console.log(e.target);
        //     console.log('changed!');
        //     if(window.matchMedia('(min-width: 769px)').matches){
        //         console.log('성공했다.');
        //         //여기
        //         if(uxuiElem.dataset.main = 'true'){
        //             uxuiElem.dataset.main = 'false';
        //         }
        //         if(menuPageElems.classList.contains('active')){

        //             menuPageElems.addEventListener('transitionend', () => {
        //                 // close transition 끝나면 class = close 제거
        //                 menuPageElems.classList.remove('close');
        //             });
                    
        //             menuPageElems.classList.add('close');
        //             menuPageElems.classList.remove('active');
        //         }

        //     }
        // }

        // 769px 을 기준으로 document width 가 바뀔 때 마다 이벤트 핸들러를 호출한다

        // mediaQueryList.addEventListener('change', changeHandler)
        // 작동하긴함. 이걸 기준으로 바꿔보기

        
    