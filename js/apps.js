/*Manu Categories js part */

function manuCategories() {
    const url = 'https://openapi.programming-hero.com/api/news/categories'
    fetch(url)
        .then(res => res.json())
        .then(data => displayManuCategories(data.data.news_category))

        .catch(error => console.log(error))
};


const getDivOfManuCategory = document.getElementById('manu-categories');
// console.log(createDivOfNav)

displayManuCategories = (categories) => {
    // console.log(categories);
    categories.forEach(category => {
        console.log(category)
        const { category_id, category_name } = category;

        const createUl = document.createElement('ul');
        // console.log(createUl)
        createUl.classList.add('text-primary', 'fs-4', 'createUl-hover');

        createUl.innerHTML = `<a onclick="newsLoadCategory('${category_id}')" class="text-decoration-none " )">${category_name}</a>`;

        getDivOfManuCategory.appendChild(createUl)
    });

}

/**All news in a category **/

newsLoadCategory = (category_id) => {
    console.log(category_id)
    // start loader 
    toggleSoinner(true);

    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayNewsCategry(data.data))

        .catch(error => console.log(error))
};


displayNewsCategry = (newsPortal) => {
    console.log(newsPortal)

    const CountNews = document.getElementById('counts-category')
    const length = newsPortal.length;
    console.log(length)

    if (newsPortal.length) {
        CountNews.innerText = newsPortal.length
    } else {
        CountNews.innerText = 'Items not founded'
    }

    const newsContainer = document.getElementById('news-category-field')
    newsContainer.innerHTML = ``;

    for (const news of newsPortal) {
        console.log(news);

        const newsDiv = document.createElement('div')
        newsDiv.classList.add('row', 'my-2', 'g-0', 'bg-light', 'border', 'shadow-lg', 'rounded')

        newsDiv.innerHTML = `
        <div class="col-md-4 p-4">
        <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8 p-2">
        <div class="card-body">
            <h5 class="card-title">${news.title}</h5> <br>
            <p class="card-text short-text">${news.details.slice(0, 500) + '...'}</p>
        </div> <br>

        <div class="d-flex justify-content-between ">
            <div class="d-flex w-25">
            <div class=" ">
            <img src="${news.author.img}" class=" img-fluid rounded-circle sizing align-items-center " alt="..."> 
            <p class="d-inline">${news.author.name}</p>
            <small class=" "></small>
        </div>
            </div>  
            <div>
            <p class="fs-3 fw-semibold"> <i class="fa-solid fa-eye"></i> ${news.total_view}M  </p> 
            </div>
            <div>
            <i class="fa-regular fa-star-sharp"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            </div>

            <div>
            <button onclick="loadDerailsInModal('${news._id}')" class="border-0" data-bs-toggle="modal" data-bs-target="#newsDetailsModel"><i class="fa-solid fa-arrow-right"></i></button> 
            </div>
        </div>
    </div>

`
        newsContainer.appendChild(newsDiv)
    }
    // end loader 
    toggleSoinner(false);

}
/**show modal details here **/

const loadDerailsInModal = async (news_id) => {
    // loader start 
    toggleSoinner(true);
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`
    try {
        const res = await fetch(url)
        const data = await res.json()
        displayDetails(data)
    }
    catch (error) {
        console.log(error)
    }

}

displayDetails = (details) => {
    console.log(details)

    const title = document.getElementById('authorTitleLabel');
    title.innerText = details.data[0].author.name ? details.data[0].author.name : ' no data abilable'


    const detailsField = document.getElementById('newsDetailsBody')

    detailsField.innerHTML = `
            <div class="col-md-4 p-4">
                <img src="${details.data[0].image_url}" class="img-fluid rounded-start" alt="...">
            </div>
                <div class="col-md-8 p-2">
                    <div class="card-body">
                        <h5 class="card-title">is_trending:${details.data[0].others_info.is_trending}</h5> <br>
                        <p class="card-text short-text"><i class="fa-solid fa-eye"></i> ${details.data[0].total_view ? details.data[0].total_view : 'no data abilable'}M</p>

                        <p class="card-text short-text">${details.data[0].details}</p>
                    </div> <br>

                 </div>

`
    // loader end 
    toggleSoinner(false);
}

// lodder 
const toggleSoinner = inloading => {
    const loadingSpinner = document.getElementById('loader')
    if (inloading) {
        loadingSpinner.classList.remove('d-none')
    } else {
        loadingSpinner.classList.add('d-none')
    }
}


manuCategories()

// newsLoadCategory('07')