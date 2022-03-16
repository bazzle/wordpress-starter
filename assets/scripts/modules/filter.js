const elem = document.querySelector('.js-filter-select input');
if (elem) {
    elem.addEventListener('focus',function(i){
        elem.closest('.filter__pill').classList.add('focus');
    })
}
