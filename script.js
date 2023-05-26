let data = document.querySelector('#date');
data.innerHTML = new Date().getFullYear();


const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    const navHeight = nav.getBoundingClientRect().height;
    const scroolHeight = window.pageYOffset;

    if(scroolHeight>navHeight) {
        nav.classList.add('fixed')
    } else {
        nav.classList.remove('fixed')
    }
})


const links = document.querySelectorAll('.scroll-link')
const button = document.querySelector('.icon');

links.forEach(function(item) {
    item.addEventListener('click', function(e){
        e.preventDefault()
        const navHeight = nav.getBoundingClientRect().height;
        const element = document.getElementById(item.getAttribute('href').slice(1));
        const position = element.offsetTop - navHeight;
        const lista = document.querySelector('ul');

        

        if(navHeight > 300) {
            const adjustHeight = navHeight-lista.offsetTop
            window.scrollTo(0,`${position+adjustHeight}`);
            
            lista.classList.remove('show');
            button.classList.remove('close');
        } else {
            window.scrollTo(0,`${position}`);
        }

    })
})


button.addEventListener('click', (e)=>{
    const target = e.currentTarget;
    const lista = document.querySelector('ul');
    target.classList.toggle('close');
    lista.classList.toggle('show');

})