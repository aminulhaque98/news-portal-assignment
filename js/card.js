// /*Manu Categories js part */

// function manuCategories() {
//     const url = 'https://openapi.programming-hero.com/api/news/categories'
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayManuCategories(data.data.news_category))
// };


// const getDivOfManuCategory = document.getElementById('manu-categories');
// // console.log(createDivOfNav)

// displayManuCategories = (categories) => {
//     // console.log(categories);
//     categories.forEach(category => {
//         console.log(category)
//         const { category_id, category_name } = category;

//         const createUl = document.createElement('ul');
//         // console.log(createUl)
//         createUl.classList.add('text-primary', 'fs-4', 'createUl-hover');

//         createUl.innerHTML = `<a onclick="newsLoadCategory('${category_id}')" class="text-decoration-none " )">${category_name}</a>`;

//         getDivOfManuCategory.appendChild(createUl)
//     });

// }

// /**All news in a category **/

// newsLoadCategory = (category_id) => {
//     console.log(category_id)
//     const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
//     console.log(url);
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayNewsCategry(data.data))
// };


// displayNewsCategry = (newsPortal) => {
//     console.log(newsPortal)

//     const getNewsPortalSection = document.getElementById('news-category-field')
//     getNewsPortalSection.innerHTML = ``;

//     for (const news of newsPortal) {
//         console.log(news);


//         const createDiv = document.createElement('div')

//         createDiv.classList.add('row', 'g-0')
//         createDiv.innerHTML = `
//         <div class="col-md-4">
//         <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
//         </div>
//         <div class="col-md-8">
//         <div class="card-body">
//             <h5 class="card-title ">${news.title}</h5>
//             <p class="card-text">${news.details}</p>
//             <div>
//             <img src="${news.author.img}" class=" img-fluid rounded-circle h-25 w-25  " alt="...">
//             <div><span>${news.author.name}</span>
//             <p class="card-text"><small class="text-muted">${news.author.published_date}</small>
//             </p></div>
//             </div>
//         </div>
//         </div>

// `
//         // .slice(0, 300)
//         getNewsPortalSection.appendChild(createDiv)
//     }

// }






// manuCategories()