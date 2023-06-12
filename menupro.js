const food = [
    {
        id: 1,
        name: "BURGER",
        img: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=eiliv-aceron-uBigm8w_MpA-unsplash.jpg",
        price: 100,
        cateogary: "FASTFOOD",
    },
    {
        id: 2,
        name: "CHEESE BURGER",
        img:
            "https://images.unsplash.com/photo-1603614550145-c7bb90bbfddf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=osama-bgid-OT5bsAlXEYU-unsplash.jpg",
        price: 150,
        cateogary: "FASTFOOD",
    },
    {
        id: 3,
        name: "FRENCH FRIES",
        img:
            "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=louis-hansel-vi0kZuoe0-8-unsplash.jpg",
        price: 80,
        cateogary: "FASTFOOD",
    },
    {
        id: 4,
        name: "CHICKEN BIRIYANI",
        img:
            "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=shreyak-singh-0j4bisyPo3M-unsplash.jpg",
        price: 250,
        cateogary: "BIRIYANI",
    },
    {
        id: 5,
        name: "RICE",
        img:
            "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=pille-r-priske-xmuIgjuQG0M-unsplash.jpg",
        price: 80,
        cateogary: "LUNCH/DINNER",
    },
    {
        id: 6,
        name: " ROTI",
        img:
            "https://image.freepik.com/free-photo/chapati-tanturi-roti_57665-1758.jpg",
        price: 20,
        cateogary: "ROTI",
    },
    {
        id: 7,
        name: "FRUIT SALAD",
        img:
            "https://image.freepik.com/free-photo/fresh-fruit-berry-salad-healthy-eating_114579-20466.jpg",
        price: 120,
        cateogary: "BREAKFAST",
    },
    {
        id: 8,
        name: "SALAD",
        img:
            "https://image.freepik.com/free-photo/greek-salad-with-fresh-tomato-cucumber-red-onion-basil-feta-cheese-black-olives-italian-herbs_2829-4480.jpg",
        price: 10,
        cateogary: "LUNCH/DINNER",
    },
    {
        id: 9,
        name: " chicken butter masala",
        img:
            "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=raman-sqcH2q7lkvo-unsplash.jpg",
        price: 320,
        cateogary: "LUNCH/DINNER",
    },
    {
        id: 9,
        name: "SAAHI PANEER",
        img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHFMNPyqk648viJIh6EAOI1y98OJPpfydpg&usqp=CAU",
        price: 170,
        cateogary: "LUNCH/DINNER",
    },
    {
        id: 10,
        name: "KADAHI PANEER",
        img:
            "https://c.ndtvimg.com/hoqnolg8_kadai-paneer,-recipe_625x300_20_July_18.jpg",
        price: 280,
        cateogary: "LUNCH/DINNER",
    },
    {
        id: 11,
        name: "CHOLLE BHATURE",
        img:
            "https://img-global.cpcdn.com/recipes/ff515314282d0608/751x532cq70/punjabi-chole-bhature-recipe-chole-bhature-recipe-recipe-main-photo.jpg",
        price: 100,
        cateogary: "BREAKFAST",
    },
    {
        id: 12,
        name: "CHOLLE KULCHE",
        img:
            "https://static.toiimg.com/thumb/73514385.cms?imgsize=1468833&width=800&height=800",
        price: "140",
        cateogary: "LUNCH/DINNER",
    },
    {
        id: 13,
        name: "NAAN",
        img:
            "https://spicesnflavors.com/wp-content/uploads/2019/09/naan-bread-3-500x500.jpg",
        price: 25,
        cateogary: "ROTI",
    },
    {
        id: 14,
        name: "BUTTERED NAAN",
        img:
            "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/mekhla-rashmi2018050315402018.jpeg",
        price: 30,
        cateogary: "ROTI",
    },
    {
        id: 15,
        name: "MASALA DAAL",
        img: "https://i.ytimg.com/vi/7ws90bPThx0/maxresdefault.jpg",
        price: 95,
        cateogary: "LUNCH/DINNER",
    },
    {
        id: 16,
        name: "RAJMA CHAWAL",
        img:
            "https://www.secondrecipe.com/wp-content/uploads/2017/08/rajma-chawal-1.jpg",
        price: 60,
        cateogary: "LUNCH/DINNER",
    },
    {
        id: 17,
        name: "PIZZA",
        img:
            "https://image.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
        price: 200,
        cateogary: "FASTFOOD",
    },
    {
        id: 18,
        name: "CHEESY CORN PIZZA",
        img:
            "https://image.freepik.com/free-photo/slice-crispy-pizza-with-meat-cheese_140725-6974.jpg",
        price: 280,
        cateogary: "FASTFOOD",
    },
    {
        id: 19,
        name: "VEG FRIED RICE",
        img:
            "https://image.freepik.com/free-photo/vegetarian-hyderabadi-dum-biryani-ramadan-food_158388-2268.jpg",
        price: 80,
        cateogary: "FASTFOOD",
    },
    {
        id: 20,
        name: "CHAAT/TIKKI",
        img:
            "https://static.toiimg.com/thumb/52727664.cms?width=1200&height=900",
        price: 50,
        cateogary: "FASTFOOD",
    },
    {
        id: 21,
        name: "CHOWMEIN",
        img:
            "https://image.freepik.com/free-photo/fried-noodles-plate_1339-2157.jpg",
        price: 75,
        cateogary: "FASTFOOD",
    },
    {
        id: 22,
        name: "PANI PURI",
        img:
            "https://static.toiimg.com/thumb/61048461.cms?imgsize=1981854&width=800&height=800",
        price: 25,
        cateogary: "FASTFOOD",
    },
    {
        id: 23,
        name: "MANCHURIAN BALLS",
        img: "https://i.ytimg.com/vi/xkMbJCtaaqA/maxresdefault.jpg",
        price: 120,
        cateogary: "FASTFOOD",
    },
    {
        id: 24,
        name: "AALOO PARATHA",
        img:
            "https://static.toiimg.com/thumb/53109843.cms?imgsize=244340&width=800&height=800",
        price: 45,
        cateogary: "BREAKFAST",
    },
    {
        id: 25,
        name: "PYAZ PARATHA",
        img:
            "https://cdn3.foodviva.com/static-content/food-images/roti-paratha-recipes/onion-paratha-recipe/onion-paratha-recipe.jpg",
        price: 30,
        cateogary: "BREAKFAST",
    },
    {
        id: 26,
        name: "SATOO PARATHA",
        img:
            "https://static.toiimg.com/thumb/54444357.cms?imgsize=128894&width=800&height=800",
        price: 30,
        cateogary: "BREAKFAST",
    },
    {
        id: 27,
        name: "PLAIN PARATHA",
        img:
            "https://indianvegrecipe.com/wp-content/uploads/2019/10/paratha-recipe.jpg",
        price: 25,
        cateogary: "BREAKFAST",
    },
    {
        id: 28,
        name: "BREAD AND BUTTER",
        img:
            "https://media.istockphoto.com/photos/bread-and-butter-picture-id463179229",
        price: 80,
        cateogary: "BREAKFAST",
    },
    {
        id: 29,
        name: "BREAD AND JAM",
        img:
            "https://media.istockphoto.com/photos/strawberry-preserves-on-bread-picture-id525057795",
        price: 60,
        cateogary: "BREAKFAST",
    },
    {
        id: 30,
        name: "BOILED EGGS",
        img: "https://images.media-allrecipes.com/userphotos/9188544.jpg",
        price: 30,
        cateogary: "BREAKFAST",
    },
    {
        id: 31,
        name: "EGG OMELATE",
        img:
            "https://i2.wp.com/mygorgeousrecipes.com/wp-content/uploads/2018/02/Worlds-Best-Vegetarian-Omelette-Quick-and-Easy-500x375.jpg",
        price: 20,
        cateogary: "BREAKFAST",
    },
    {
        id: 32,
        name: "TEA",
        img:
            "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/22/tea.jpg",
        price: 15,
        cateogary: "DRINKS",
    },
    {
        id: 33,
        name: "COFFEE",
        img:
            "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg",
        price: 20,
        cateogary: "DRINKS",
    },
    {
        id: 34,
        name: "COLD DRINK",
        img: "https://cdn.cdnparenting.com/articles/2018/07/361921454-H.jpg",
        price: 20,
        cateogary: "DRINKS",
    },
    {
        id: 35,
        name: "SHAKES",
        img:
            "https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/summer-of-shakes.jpg.jpeg?itok=OUDvbdfl",
        price: 150,
        cateogary: "DRINKS",
    },
    {
        id: 36,
        name: "COLD COFFEE",
        img:
            "https://www.mygingergarlickitchen.com/wp-content/rich-markup-images/1x1/1x1-cold-coffee-recipe.jpg",
        price: 50,
        cateogary: "DRINKS",
    },
    {
        id: 37,
        name: "NIMBU PAANI",
        img:
            "https://simmertoslimmer.com/wp-content/uploads/2016/07/Nimbu-Pani.jpg",
        price: 30,
        cateogary: "DRINKS",
    },
    {
        id: 38,
        name: "CHICKEN WINGS",
        img:
            "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=chad-montano-gE28aTnlqJA-unsplash.jpg",
        price: 220,
        cateogary: "STARTERS",
    },
    {
        id: 39,
        name: "FRIED CHICKEN",
        img:
            "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=lucas-andrade-3Uj0GwVmOeY-unsplash.jpg",
        price: 250,
        cateogary: "STARTERS",
    },
    {
        id: 40,
        name: "CHICKEN TANDOORI",
        img:
            "https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=shardar-tarikul-islam-93-GlZeWEZA-unsplash.jpg",
        price: 350,
        cateogary: "STARTERS",
    },
    {
        id: 41,
        name: "CHICKEN BARBECUE",
        img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=markus-winkler-WHtVB-RiW2I-unsplash.jpg",
        price: 250,
        cateogary: "STARTERS",
    },
    {
        id: 42,
        name: "CHICKEN SHAWARMA",
        img:
            " https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=max-griss-Spp1G283dow-unsplash.jpg",
        price: 180,
        cateogary: "BREAKFAST",
    },
    {
        id: 43,
        name: "OREO SHAKE",
        img:
            "https://images.unsplash.com/photo-1624781740834-fbfbf5fd221a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=knight-duong-U0_cV29xqp8-unsplash.jpg",
        price: 180,
        cateogary: "SHAKES",
    },
    {
        id: 44,
        name: "CHOCOLATE MILK SHAKE",
        img:
            "https://images.unsplash.com/photo-1571328003758-4a3921661729?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=sandie-clarke-pYAbhWb_LaQ-unsplash.jpg",
        price: 150,
        cateogary: "SHAKES",
    },
    {
        id: 45,
        name: "BADAM MILK",
        img: "https://images.unsplash.com/photo-1505576540771-be91e4753e0f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=mariana-medvedeva-inJKK5P-6sE-unsplash.jpg",
        price: 100,
        cateogary: "SHAKES",
    }
];
types = document.querySelector(".types");
box = document.querySelector(".box");

window.addEventListener("DOMContentLoaded", function () {
    filterMenu("ALL ITEMS")
    var cat = food.reduce(function (values, items) {
        if (!values.includes(items.cateogary)) {
            values.push(items.cateogary);
        }
        return values;
    }, ["ALL"])
    var catBtn = cat.map(function (item) {
        return `<a href="#" class="allitems ${item}">${item}</a>`;
    })
    var catBtns = catBtn.join("")
    types.innerHTML = catBtns;
    var button = document.getElementsByClassName("allitems")
    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", (e) => {
            var val = e.target.className.split(" ");
            filterMenu(val[1])
        })
    }
})
function displayMenu(food) {
    var displayMenu = food.map(function (item) {
        return (
            `<div class="items">  
       <div class="img-box"><img src=${item.img}  
       alt="${item.name}" class="img"></div>   
        <div class="details">  
          <div class="name">${item.name}</div>  
          <div class="price">&#8377;${item.price}</div>  
         </div>  
       <div class="cateogary">${item.cateogary}</div>  
     </div>`)
    })
    displayMenu = displayMenu.join("");
    box.innerHTML = displayMenu;
}
var lists = food.reduce(function (values, items) {
    if (!values.includes(items.cateogary)) {
        values.push(items.cateogary);
    }
    return values;
}, ["ALL"]);
function filterMenu(cateogary) {
    var filter1 = food.filter(function (item) {
        if (item.cateogary === cateogary) {
            return item;
        }
    })
    if (cateogary === "ALL") {
        displayMenu(food);
    }
    else {
        displayMenu(filter1);
    }
}