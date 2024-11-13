document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    function loadPage(page) {
        const currentUrl = window.location.pathname;
        const params = new URLSearchParams(window.location.search);
        params.set('page', page);
        window.location.href = currentUrl + '?' + params.toString();
    }

    // Add click event listeners for elements with the class 'dashboard-content'
    const dashboardContent = document.querySelectorAll('.dashboard-content');
    dashboardContent.forEach(content => {
        content.addEventListener('click', () => {
            loadPage(content.getAttribute('data'));
        });
    });

    const asideMenu = document.querySelectorAll('.aside-menu');
    asideMenu.forEach(menu => {
        menu.addEventListener('click', ()=> {
            loadPage(menu.getAttribute('data'))
        });
    });

    // Set the title based on the 'page' parameter in the URL
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');
    if (page) {
        document.getElementById('title').textContent = `IPI | ${page.toUpperCase()}`;
        asideMenu.forEach(menu=> {
            menu.classList.remove('selected')
            if(menu.getAttribute('data') === page){
                menu.classList.add('selected')
            } 
        });
        const pageContents = document.querySelectorAll('.content');
        pageContents.forEach(content => {
            content.classList.add('d-none');
            if(content.getAttribute('data') === page) {
                content.classList.remove('d-none');
            }
        }); 
    } else {
        var dashboard = document.getElementById('dashboard');
        dashboard.classList.add('selected')
    }
});
