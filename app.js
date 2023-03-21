// to select all element of same class 
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioSect = document.querySelector('#portfolio');
const certBtn = document.querySelector('.cert-btn');

function PageTransitions(){
    // portfolio button
    portfolioBtn.addEventListener('click', function(){
        let currentBtn = document.querySelectorAll('.active-btn');
        currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
        sectBtn[2].className += ' active-btn'; // sectBtn[2] = portfolio
        sectBtns.forEach((btn)=>{
            btn.classList.remove('active');
        })
        portfolioSect.classList.add('active')
        
        //hide other sections
        sections.forEach((section)=>{
            section.classList.remove('active');
        });

        portfolioSect.classList.add('active');
    })

    // certifications button
    certBtn.addEventListener('click', function(){
        document.getElementById("certifications").scrollIntoView();
    })

    // button click active class
    for(let i=0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            this.className += ' active-btn';
        })
    }

    // sections active
    allSections.addEventListener('click',(e) =>{
        const id = e.target.dataset.id;
        console.log(id)
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active')
            
            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            console.log(element)
            element.classList.add('active');
        }
    });

    // Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    });
}

PageTransitions();