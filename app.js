window.onload = () => {
    let links = document.querySelectorAll('.menu-link');

    for(let link of links) {
        link.addEventListener('click', function(e){
            e.preventDefault();

            let id = link.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
}