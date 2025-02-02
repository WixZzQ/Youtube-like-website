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
       <figure class="h-[200px]">
    <img
      src="${video.thumbnail}"
      class="h-full w-full object-cover"
      alt="" />
  </figure>
  <div class="px-0 py-4 flex gap-2">
  <div class>
        <img src="${video.authors[0].profile_picture}" alt="" class="rounded-full h-8 w-8 mr-2 object-cover">
        
  </div>
  <div>
  <h2 class="font-bold">${video.title}</h2>
  <div class="flex items-center text-sm text-gray-600 gap-2">
  <p class="text-gray-400">${video.authors[0].profile_name}</p>
    <img class="w-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAcxJREFUSEvt1EuoTWEYxvHfkduEYiLlxNBElEuUcsnASEmYKYWJEnKZSMyElOiUAaWUiUtJJkRKLhOZyICJgSTCxICI761XrZa1zz5n7bIn+5utdz3f+3zf/33WGtKnNdQnXwPj/0Z+gHqAuhuByMhxnMPHDuIZ2J+6n381vYbrFA7gPVbhdc18Ku5jBZ5gDb6HphfjPTibRk/T+EfFeAKuYWPWTuJwrzeOZtfz4G+wDF9qt72AXVm7iU343Yvx8oLsISbjE5bgbc008McYYjXRGDfq+XhcEEdgAmvM7nnNdCuudqHRaHwUgelDreEsPMPcrAe6GzXNatzFRHzFUsQo/ln1cO3DmUS4pQTmQe6Yjkdlrgvy+SBO17oFjThYaINGpDwwN6668aUyr+0VZSTxGG4V43VZHynf7O6KZi1epelw1jdnojv5NqLeifMZntj4GTOzw50y0w34lc/bcDkTHXOPdagSrHEZh3gR4hOYV9n5AivxLWuTMs2zK5qL2NHRrfJitB/INFzJG77D4obAzSmf0+1yyIXlUPfKTNdXaIzqP5Y/195M6ssOnabgCE5UaHS99FiMuzZpIxgYt6HWas8AdStsbTb1DfUf7jVNH16udM0AAAAASUVORK5CYII="/>
  </div>
  </div>
  </div>
  `
  videoContainer.append(card)
    })
};


loadVideos()
loadCategories()