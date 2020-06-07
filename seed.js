const db = require('./models')

const hour = [{
        day: "Sunday",
        start: "11AM",
        end: "8PM"
    },
    {
        day: "Monday",
        start: "11AM",
        end: "8PM"
    },
    {
        day: "Tuesday",
        start: "11AM",
        end: "8PM"
    },
    {
        day: "Wednesday",
        start: "11AM",
        end: "8PM"
    },
    {
        day: "Thursday",
        start: "11AM",
        end: "8PM"
    },
    {
        day: "Friday",
        start: "11AM",
        end: "8PM"
    },
    {
        day: "Saturday",
        start: "11AM",
        end: "8PM"
    },
]
for (let i = 0; i < hour.length; i++) {
    db.Hour.create(hour[i], function (error, createdHour) {
        if (error) {
            console.log(error);
        } else {
            console.log(hour[i]);
        }
    })
};


/* const entreeItems = [{
        name: "Orange Chicken",
        image: "public/images/Orange-Chicken.jpg",
        description: "Crispy chicken wok-tossed in a sweet and spicy orange sauce.",
        spicy: 2
    },
    {
        name: "Short Ribs",
        image: "public/images/Short-ribs.jpg",
        description: "Iron pan sizzling short-ribs with salt and pepper.",
        spicy: 1
    },
    {
        name: "Mushroom Beef",
        image: "public/images/Mushroom-Beef.jpg",
        description: "Wok fried seasoned beef with mushroom ",
        spicy: 2
    },
    {
        name: "Kung Pao Chicken",
        image: "public/images/Kung-Pao-Chicken.jpg",
        description: "Wok Fried chicken, celery and peanut with Kung Pao sauce.",
        spicy: 3
    },
    {
        name: "Chicken Katsu",
        image: "public/images/Chicken-Katsu.jpg",
        description: "Japanese style Deep Fried crispy chicken.",
        spicy: 1
    },
    {
        name: "Combo",
        image: "public/images/Combo1.jpg",
        description: "Mix and match different kind of entree and side",
        spicy: 2
    },
]
for (let i = 0; i < entreeItems.length; i++) {
    db.Item.create(entreeItems[i], function (error, createdHour) {
        if (error) {
            console.log(error);
        } else {
            console.log(entreeItems[i])
        }
    })
};

const menu = [{
        name: "Entree",
        image: "/images/Orange-Chicken.jpg",
    },
    {
        name: "side",
        image: "/images/Hawaiian-Fried-Rice.jpg",
    },
    {
        name: "Appetizer",
        image: "/images/Misubi.jpg",
    }
]

for (let i = 0; i < menu.length; i++) {
    db.Menu.create(menu[i], function (error, createdHour) {
        if (error) {
            console.log(error);
        } else {
            console.log(menu[i])
        }
    })
}; */