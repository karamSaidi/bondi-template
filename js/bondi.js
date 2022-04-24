let searchToggle = document.querySelector('.search-box > button');
let searchForm = document.querySelector('.search-box > form');

searchToggle.onclick = () => {
    searchForm.classList.add('d-flex');
    searchForm.classList.remove('d-lg-none');
    searchToggle.classList.add('d-none');
    searchToggle.classList.remove('d-lg-block');
}



// ==================== starrt shuffle
let switcherLis = document.querySelectorAll(".switcher li");
let imgs = document.querySelectorAll('.shuffle div');


switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

// Manage Imgs
function manageImgs() {
    imgs.forEach((img) => {
        if (this.dataset.cat.toLowerCase() == 'all') {
            // img.style.display = 'block';
            img.classList.add('get-in');
            img.classList.remove('get-out');
            setTimeout(function () {
                img.style.display = 'block';
            }, 500);
        }
        else {
            img.classList.add('get-out');
            img.classList.remove('get-in');
            setTimeout(function () {
                img.style.display = 'none';
            }, 500);

        }
    });



    document.querySelectorAll(`[data-type="${this.dataset.cat}"]`).forEach((el) => {
        el.classList.remove('get-out');
        el.classList.add('get-in');
        setTimeout(function () {
            el.style.display = 'block';
        }, 500);
    });
}
// ========================= end shuffle