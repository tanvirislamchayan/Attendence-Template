window.addEventListener("load", function() {
    const loaderSection = document.getElementById("loader-section");
    loaderSection.style.display = "none";
});


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
    const pageContents = document.querySelectorAll('.content');

    if (page) {
        document.getElementById('title').textContent = `IPI | ${page.toUpperCase()}`;
        asideMenu.forEach(menu=> {
            menu.classList.remove('selected')
            if(menu.getAttribute('data') === page){
                menu.classList.add('selected')
            } 
        });
        pageContents.forEach(content => {
            content.classList.add('d-none');
            if(content.getAttribute('data') === page) {
                content.classList.remove('d-none');
            }
        }); 
    } else {
        var dashboard = document.getElementById('dashboard');
        dashboard.classList.add('selected')
        pageContents.forEach(content => {
            content.classList.add('d-none');
            if(content.getAttribute('data') === 'dashboard') {
                content.classList.remove('d-none');
                content.classList.add('d-block');

            }
        });
        
    }

    const addBtn = document.querySelectorAll('.add-btn');
    const addForm = document.querySelectorAll('.add-form');
    const cancelBtn = document.querySelectorAll('.cancel-btn');
    
    addBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            pageContents.forEach(content => {
                content.classList.add('d-none');
            });
            addForm.forEach(form => {
                if (form.getAttribute('data') === btn.getAttribute('data')) {
                    form.classList.remove('d-none');
                }
            });
        });
    });
    
    cancelBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            addForm.forEach(form => {
                form.classList.add('d-none');
            });
            pageContents.forEach(content => {
                loadPage(page)
            });
        });
    });
    
    
});


// image preveiw                                
function previewImage(event) {
    const preview = document.getElementById('preview');
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

// Teacher image preview
function previewTeacherImage(event) {
    const preview = document.getElementById('teacher_preview'); // Use the correct img element ID
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

// department image preview
function previewDepartmentImage(event) {
    const preview = document.getElementById('dep-img-preview'); // Target the img element for preview
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result; // Set the img src to the file data URL
        }
        reader.readAsDataURL(file); // Read the file as a data URL
    }
}