const db = require('./models/Index')

const slides = [{
        image: "https://i.ytimg.com/vi/y_iPjuncrII/maxresdefault.jpg",
        comment: "fried wonton"
    },
    {
        image: "https://img.sndimg.com/food/image/upload/v1/img/recipes/10/32/15/W6FoUgXyRnaFTQjc1Nkw_0S9A2630.jpg",
        comment: "Orange Chicken"
    },
    {
        image: "https://tasteasianfood.com/wp-content/uploads/2019/07/Mooncake-thumbnail-250x180.jpeg",
        comment: "Tea"
    }

]
for (let i = 0; i < slides.length; i++) {
    db.Slide.create(slides[i], function (error, createdSlide) {
        if (error) {
            console.log(error);
        } else {
            console.log(slides[i]);
        }
    })
};