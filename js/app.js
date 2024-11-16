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
    const cal = params.get('calculate')
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

    // calculation
    function loadCalcPage(calcPage) {
        const currentUrl = window.location.pathname;
        const params = new URLSearchParams(window.location.search);
        params.set('calculate', calcPage);
        window.location.href = currentUrl + '?' + params.toString();
    }
    const calBtns = document.querySelectorAll('.attendance-calculation-content');
    const calResults = document.querySelectorAll('.calc-result');
    calBtns.forEach(btn=>{
        btn.addEventListener('click', ()=> {
            loadCalcPage(btn.getAttribute('data'))
        });
    });

    if (cal) {
        calResults.forEach(res => {
            res.classList.add('d-none')
            if(res.getAttribute('data') === cal) {
                res.classList.remove('d-none');
            }
        });
    }

    if (page !== 'attendance-calculation' && cal) {
        params.delete('calculate');
        window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    }
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


// suggestions
// Show the suggestions box when the input field gains focus
function showSuggestions() {
    const suggestionBox = document.getElementById('suggestion-box');
    suggestionBox.style.display = 'block';
}

// Filter suggestions based on the user's query
function filterSuggestions(query) {
    const suggestionBox = document.getElementById('suggestion-box');
    const suggestions = suggestionBox.querySelectorAll('.suggestion-item');
    query = query.trim().toLowerCase();

    if (query === "") {
        suggestions.forEach(item => item.style.display = 'block');
        return;
    }

    suggestions.forEach(item => {
        if (item.textContent.toLowerCase().includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Handle suggestion selection
// Show the suggestions box and the clear button when focusing on the input
function showSuggestions() {
    const suggestionBox = document.getElementById('suggestion-box');
    suggestionBox.style.display = 'block';
}

function showClearButton() {
    const searchInput = document.querySelector('.search-input');
    const clearButton = document.querySelector('.clear-button');

    if (searchInput.value.trim() !== "") {
        clearButton.style.display = 'inline'; // Show the clear button
    } else {
        clearButton.style.display = 'none'; // Hide the clear button if the input is empty
    }
}

function filterSuggestions(query) {
    const suggestionBox = document.getElementById('suggestion-box');
    const suggestions = suggestionBox.querySelectorAll('.suggestion-item');
    query = query.trim().toLowerCase();

    if (query === "") {
        suggestions.forEach(item => item.style.display = 'block');
        return;
    }

    suggestions.forEach(item => {
        if (item.textContent.toLowerCase().includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Clear the input field and hide the clear button
// Show the suggestions box when the input field gains focus
function showSuggestions() {
    const suggestionBox = document.getElementById('suggestion-box');
    suggestionBox.style.display = 'block';
}

// Filter suggestions based on the user's query
function filterSuggestions(query) {
    const suggestionBox = document.getElementById('suggestion-box');
    const suggestions = suggestionBox.querySelectorAll('.suggestion-item');
    query = query.trim().toLowerCase();

    if (query === "") {
        suggestions.forEach(item => item.style.display = 'block');
    } else {
        suggestions.forEach(item => {
            if (item.textContent.toLowerCase().includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Toggle the visibility of the clear button
    toggleClearButton(query);
}

// Show or hide the clear button based on input value
function toggleClearButton(query) {
    const clearButton = document.querySelector('.clear-btn');
    if (query !== "") {
        clearButton.classList.add('visible');
    } else {
        clearButton.classList.remove('visible');
    }
}

// Handle suggestion selection
// function selectSuggestion(element) {
//     const searchInput = document.querySelector('.search-input');
//     const form = document.querySelector('.search-form');

//     // Set the input value to the clicked suggestion
//     searchInput.value = element.textContent;

//     // Hide the suggestion box
//     document.getElementById('suggestion-box').style.display = 'none';

//     // Submit the form programmatically
//     form.requestSubmit(); // This triggers the form's onsubmit handler
// }

// // Handle form submission
// function searchWithInput(event) {
//     event.preventDefault(); // Prevent the default form submission

//     const searchInput = document.querySelector('.search-input');
//     const query = searchInput.value;

//     // Perform search logic here (e.g., send to server or log to console)
//     console.log(`Performing search for: ${query}`);
// }

// // Clear the search input field
// function clearInput() {
//     const searchInput = document.querySelector('.search-input');
//     searchInput.value = ""; // Clear the input value

//     // Hide the suggestion box
//     document.getElementById('suggestion-box').style.display = 'none';

//     // Hide the clear button
//     toggleClearButton("");
// }

// // Hide the suggestions box when clicking outside
// document.addEventListener('click', function(event) {
//     const suggestionBox = document.getElementById('suggestion-box');
//     const searchInput = document.querySelector('.search-input');

//     if (!suggestionBox.contains(event.target) && event.target !== searchInput) {
//         suggestionBox.style.display = 'none';
//     }
// });


// Show suggestions when input is focused
function showSuggestions() {
    const suggestionBox = document.getElementById('suggestion-box');
    suggestionBox.style.display = 'block';
}

// Filter suggestions based on user input
function filterSuggestions(query) {
    const suggestionBox = document.getElementById('suggestion-box');
    const suggestions = suggestionBox.querySelectorAll('.suggestion-item');
    query = query.trim().toLowerCase();

    if (query === "") {
        suggestions.forEach(item => item.style.display = 'block');
        return;
    }

    suggestions.forEach(item => {
        if (item.textContent.toLowerCase().includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Handle selecting a suggestion
function selectSuggestion(element) {
    const searchInput = document.querySelector('.search-input');
    searchInput.value = element.textContent; // Set the input value to the clicked suggestion
    document.getElementById('suggestion-box').style.display = 'none';
    performSearch(searchInput.value); // Optionally perform the search immediately
}

// Handle form submission
function searchWithInput(event) {
    event.preventDefault(); // Prevent the default form submission
    const searchInput = document.querySelector('.search-input');
    performSearch(searchInput.value);
}

// Perform the search action (you can replace this with your own logic)
function performSearch(query) {
    console.log("Performing search with query:", query);
}

// Show the clear button if there's text in the search input
function showClearButton() {
    const searchInput = document.querySelector('.search-input');
    const clearButton = document.querySelector('.clear-button');
    
    // Show the button if there's text or if the input is focused
    if (searchInput.value.trim() !== "" || document.activeElement === searchInput) {
        clearButton.style.display = "block";  // Show the clear button
    } else {
        clearButton.style.display = "none";   // Hide the clear button if empty and not focused
    }
}
// Clear the input field when the clear button is clicked
function clearSearchInput() {
    const searchInput = document.querySelector('.search-input');
    searchInput.value = "";  // Clear the input field
    showClearButton();       // Update the button visibility
}

// Hide suggestions when clicking outside of the form
document.addEventListener('click', function(event) {
    const suggestionBox = document.getElementById('suggestion-box');
    if (!suggestionBox.contains(event.target) && !event.target.classList.contains('search-input')) {
        suggestionBox.style.display = 'none';
    }
});
