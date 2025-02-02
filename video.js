console.log("video script added")
// 1 - Fetch, Load and Show Categories on html

// Create loadCategories

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    .catch(err =>{
        console.log(err)
    })
}
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(err =>{
        console.log(err)
    })
}

const cardDemo = {
        "category_id": "1001",
        "video_id": "aaaa",
        "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
        "title": "Shape of You",
        "authors": [
            {
                "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
                "profile_name": "Olivia Mitchell",
                "verified": ""
            }
        ],
        "others": {
            "views": "100K",
            "posted_date": "16278"
        },
        "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}

//  create loadCategories
// const loadCategories = async () => {
//     const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
//     const data = await res.json()
//     const categories = data.categories
//     const catch = 
//     console.log(categories)
// };

// Create displayCategories
const displayCategories = (categories) =>{
    const categoryContainer = document.getElementById("categories");


    // add data in html
    categories.forEach((item) => {
        console.log(item)

        // create a button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        // add button to catagory container
        categoryContainer.append(button);
    })
};

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("videos")

    // add data in html
    videos.forEach((video) => {
        console.log(video)

        // create a button
       const card = document.createElement("div")
       card.classList = "card card-compact shadow-xl"
       card.innerHTML = `
       <figure>
    <img
      src="${video.thumbnail}"
      alt="" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
  `
  videoContainer.append(card)
    })
};


loadVideos()
loadCategories()