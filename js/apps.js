

function manuCategories() {
    const url = 'https://openapi.programming-hero.com/api/news/categories'
    fetch(url)
        .then(res => res.json())
        .then(data => displayManuCategories(data.data.news_category))
};

// .data.news_category[0]
const getDivOfManuCategory = document.getElementById('manu-categories');
// console.log(createDivOfNav)

displayManuCategories = (categories) => {
    // console.log(categories);
    categories.forEach(category => {
        console.log(category)

        const createUl = document.createElement('ul');

        createUl.classList.add('text-primary', 'fs-4', 'text-decoration-none', 'bg-warning', 'createUl-hover')
        createUl.innerHTML = `<li>${category.category_name}</li>`



        getDivOfManuCategory.appendChild(createUl)
    });

}


manuCategories()