const elem_year = document.querySelector('.js-year');

if(elem_year){
    const currentYear= new Date().getFullYear();
    elem.textContent = currentYear;
}