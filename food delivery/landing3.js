// ---------- Your original restaurants data (kept exactly the same) ----------
const restaurants = [
    {
        id: 1,
        name: "TUNDAY LEGACY OF LUCKNOW",
        description: "Family friendly resturant ",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/17/5f/8a/18/img-20190502-193408-hdr.jpg",
        menu: [
            { name: "kabab", price: "20", image: "https://images.herzindagi.info/image/2019/May/tunday-kabab.jpg" },
            { name: "Biryani", price: "120", image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" },
            { name: "chicken korma", price: "300", image: "https://th.bing.com/th/id/OIP.E1Rv7eYyzLnaGX_qZsICuwHaE8?rs=1&pid=ImgDetMain" }
        ]
    },
    {
        id: 2,
        name: "sharwan Tea Stall",
        description: "hygeine our first priority",
        image: "https://c8.alamy.com/comp/CPC13W/tea-stall-at-indian-market-CPC13W.jpg",
        menu: [
            { name: "special Tea", price: "10", image: "https://i.pinimg.com/736x/5c/d4/7f/5cd47f258a38b52e6a6f77a14a8e12e7.jpg" },
            { name: "bun makhan", price: "30", image: "https://i.ytimg.com/vi/Wb1UJrXJSDk/maxresdefault.jpg" },
            { name: "samosa", price: "12", image: "https://th.bing.com/th/id/OIP.ZFMHho6M2cVKBFa2zPIaMQHaIt?rs=1&pid=ImgDetMain" }
        ]
    },

    {
        id: 3,
        name: "Dubagga cool corner",
        description: "indian restaurant",
        location:"",

        image: "https://th.bing.com/th/id/OIP.U6C4Nkxl-9nGDntMvwLlrgHaDy?rs=1&pid=ImgDetMain",

        menu: [
            { name: "puri sabji", price: "56", image: "https://www.shutterstock.com/image-photo/haridwar-uttarakhand-indiadec-14-2022-260nw-2291172175.jpg" ,},
            { name: "Chole Bhature [2pieces]+2 poori", price: "135", image: "https://c8.alamy.com/comp/S3GYY9/kulcha-chole-S3GYY9.jpg" },
            { name: "lassi [250ml]+extra Malai", price: "75", image: "https://th.bing.com/th/id/OIP.IY_gmH80LIQohg5Sp1NTNAHaHa?w=650&h=650&rs=1&pid=ImgDetMain" },
            { name: "Chole chawal[Half]", price: "49", image: "https://image.freepik.com/free-photo/indian-food-chole-chawal-spicy-chickpea-curry-with-plain-rice-served-with-green-salad_466689-410.jpg" },
            { name: "Jalebi[2pieces]+Dahi(curd)", price: "69", image: "https://i.pinimg.com/originals/5a/e2/68/5ae268f7993ff0081ba8ac16091f0861.jpg" }
        ]
    },
    {
        id: 4,
        name: "FRUIT FUSION ",
        description: "Fresh and nutrition value ",
        image: "https://img.freepik.com/premium-photo/fruit-fusion-fantasyland-homemade-fruit-juice_753066-5105.jpg",

        menu: [
            { name: "blueberry juice", price: "60[250ml]", image: "https://th.bing.com/th/id/OIP.JVjtPNIYgeEIjTLbxWLWowHaHa?w=626&h=626&rs=1&pid=ImgDetMain" },
            { name: "Mango sip", price: "40[200ml]", image: "https://img.freepik.com/premium-photo/mango-juice-with-splashes-with-mango-fruit-studio-background-restaurant-with-garden_741910-6958.jpg" },
            { name: "choclate", price: "200[500ml]", image: "https://img.freepik.com/premium-psd/chocolate-milkshake-menu-instagram-post-template_539910-482.jpg" },
            { name: "khajoor shake", price: "200[500ml]", image: "https://images.herzindagi.info/image/2022/Apr/Khajoor-Milk-Shake.jpg" },
            { name: "Strawberry juice", price: "300[500ml]", image: "https://img.freepik.com/premium-photo/strawberry-cocktail-black-background_449849-10723.jpg" },
            { name: "Apple juice", price: "170[500ml]", image: "https://img.freepik.com/premium-photo/apple-juice-with-splashes-with-apple-fruit-studio-background-restaurant-with-garden_741910-6123.jpg" },
            { name: "pmoraganate", price: "400[500ml]", image: "https://www.dontwasteyourmoney.com/wp-content/uploads/2020/09/best-pomegranate-juice-scaled.jpeg" },
            { name: "kiwi juice", price: "200[500ml]", image: "https://img.freepik.com/premium-photo/kiwi-juice-with-splashes-with-kiwi-fruit-studio-background-restaurant-with-garden_741910-6526.jpg" },
            { name: "orange sip", price: "200[500ml]", image: "https://img.freepik.com/premium-photo/sapota-juice-with-splashes-with-sapota-fruit-studio-background-restaurant-with-garden_741910-10705.jpg" },
            { name: "Mojito", price: "200[500ml]", image: "https://www.sustainablecooks.com/wp-content/uploads/2018/06/Classic-Virgin-Mojito-Recipe-5-540x694.jpg" }
        ]    
    },
    {
        id: 5,
        name: "Royal sweets",
        description: "Pure Veg",
        image: "https://th.bing.com/th/id/OIP.gdtQF8ehVJdfBmxfw31GKgHaFj?w=1599&h=1200&rs=1&pid=ImgDetMain",
        menu: [
            { name: "Motichoor Laddu", price: "220", image: "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2014/08/Motichoor-Ladoo-L2.jpg?fit=600%2C900&ssl=1" },
            { name: "Kaju Barfi", price: "370", image:" https://i.pinimg.com/originals/d7/25/84/d72584e65ebf1cf1f83741027c875806.jpg"},
            { name: "Gulab jamun(Desi Ghee)", price: "165", image: "https://bolnews.s3.amazonaws.com/wp-content/uploads/2020/12/2-12.jpg" },
            { name: "Rasmalai[10 pieces]", price: "250", image: "https://peopleandfinder.com/wp-content/uploads/2023/12/Rasmalai-recipe-01.jpg" },
            { name: "Milk Cake", price: "166", image: "https://www.munipendawala.com/cdn/shop/files/Milk-Cake_ef138ba2-cc25-4f28-9b55-ed66773cc000.jpg?v=1683115440" },
            { name: "White Rasgulla", price: "165", image: "https://images.slurrp.com/prod/recipe_images/transcribe/dessert/Rasgulla.webp" },
            { name: "Plain Rabri", price: "96", image: "https://th.bing.com/th/id/R.c4eb1cb01aba99a7ce23a5f792f7839a?rik=SumFRy%2fSdUqb1Q&riu=http%3a%2f%2fganguram.com%2fcdn%2fshop%2ffiles%2frabri.jpg%3fv%3d1709113671&ehk=k1DfyipVYwfRyVMsSeYws6JJolLYaW2thhKL5dp4D1g%3d&risl=&pid=ImgRaw&r=0" },
            { name: "Mathura Elachi peda", price: "222", image: "https://thumbs.dreamstime.com/b/indian-traditional-sweet-pedha-peda-peday-made-milk-khoya-some-other-ingredient-like-cardamom-seeds-pistachio-nuts-128491908.jpg" },
            { name: "Imarti", price: "92", image: "https://meethikahani.com/cdn/shop/products/CopyofIMG_9872.jpg?v=1631973007" }
        ]
    }, {
        id: 6,
        name: "Foodin Frinz",
        description:  "fast food HOME",
        image: "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/EyQ3Bb5n-NINIVE-dubai5-1.jpg ",
        menu: [
            { name: "WHITE SUASE PASTA[HALF]", price: "90", image: "https://www.whiskaffair.com/wp-content/uploads/2021/05/White-Sauce-Paste-2-1-1200x1800.jpg" },
            { name: "VEG SUASE PASTA[HALF]", price: "90", image: "https://th.bing.com/th/id/OIP.a9aD2eUFbykkAWjKUxbF4QHaLJ?rs=1&pid=ImgDetMain" },
            { name: "CRISPY CORN[HALF]", price: "60", image: "https://www.funfoodfrolic.com/wp-content/uploads/2017/09/Crispy-Corn-3-650x900.jpg" },
            { name: "ZINGER BURGER", price: "60", image: "https://1.bp.blogspot.com/-OB_qqkHk5c0/X5GngtrK9UI/AAAAAAAACuA/yStvtCB4w04tS2_Z1qYpaANWlnp2b4xlwCLcBGAsYHQ/s964/c18.jpg" },
            { name: "GRILLED BURGER", price: "80", image: "https://img.freepik.com/premium-photo/hamburger-wooden-table_868797-9854.jpg" },
            { name: "SANDWICH", price: "35", image: "https://th.bing.com/th/id/OIP.k4JMO5bD97BK3hxEHefrmAHaFP?w=257&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
            { name: "CHICKEN ROLL", price: "40", image: "https://th.bing.com/th/id/OIP.dWeX3qbbfr26hGDXNOSdggHaEK?w=260&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
            { name: "PANEER ROLL", price: "30", image: "https://th.bing.com/th/id/OIP.CHHjOl9oTaKjEU5HZHfBAAHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
            { name: "CHICKEN FRIED RICE", price: "70", image: "https://vismaifood.com/storage/app/uploads/public/9c1/148/420/thumb__1200_0_0_0_auto.jpg" },
            { name: "VEG THALI[4 ROTI+CHAWAL+SABJI+]", price: "50", image: "https://th.bing.com/th/id/OIP.mi84JQCDHK5CyvjYo-7i_AAAAA?rs=1&pid=ImgDetMain" },
            { name: "FRENCH FRIES", price: "40", image: "https://static.fanpage.it/wp-content/uploads/sites/22/2020/09/iStock-618214356.jpg" },
            { name: "COKE", price: "40", image: "https://emiratesbulk.ae/cdn/shop/files/Coca_Cola_Zero_Calories_Carbonated_Soft_Drink_Cans_-_24x330ml.jpg?v=1702038737" }
        ]
    },
    {
        id: 7,
        name: "sweet delious",
        description: "Chicken, Fast Food",
        image: "https://th.bing.com/th/id/OIP.21XG1xTLOPD5KUE5jbEtUQHaGU?w=207&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        menu: [
            { name: "Fried Chicken", price: "", image: "images/fried_chicken.jpg" },
            { name: "Coleslaw", price: "", image: "images/coleslaw.jpg" },
            { name: "Lemonade", price: "2", image: "images/lemonade.jpg" }
        ]
    },
    {
        id: 7,
        name: "sweet delious",
        description: "",

        image: "https://th.bing.com/th/id/OIP.21XG1xTLOPD5KUE5jbEtUQHaGU?w=207&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        menu: [
            { name: "Fried Chicken", price: "6", image: "images/fried_chicken.jpg" },
            { name: "Coleslaw", price: "2", image: "images/coleslaw.jpg" },
            { name: "Lemonade", price: "2", image: "images/lemonade.jpg" }
        ]
    },
];

// ---------- App state (cart) ----------
let cart = JSON.parse(localStorage.getItem('qf_cart') || '[]');

// currency helper (tries to parse numeric parts)
function parsePrice(p){
    if (p === "" || p === null || p === undefined) return 0;
    // try to extract number from price like "60[250ml]" or "300"
    const m = String(p).match(/(\d+(\.\d+)?)/);
    return m ? Number(m[0]) : 0;
}
function currency(n){ return '₹' + Number(n).toLocaleString('en-IN'); }

// ---------- Display restaurants (keeps your original structure & images) ----------
function displayRestaurants() {
    const restaurantList = document.getElementById('restaurant-list');
    restaurantList.innerHTML = '';

    restaurants.forEach((restaurant, idx) => {
        const restaurantDiv = document.createElement('div');
        restaurantDiv.classList.add('restaurant');
        restaurantDiv.style.animationDelay = (idx * 70) + 'ms';
        restaurantDiv.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <h3>${restaurant.name}</h3>
            <p>${restaurant.description}</p>
            <a href style="display:none">${restaurant.location || ''}</a>
        `;
        restaurantDiv.onclick = () => viewMenu(restaurant.id);
        restaurantList.appendChild(restaurantDiv);
    });
}

// ---------- View menu (keeps layout) ----------
function viewMenu(restaurantId) {
    const selectedRestaurant = restaurants.find(r => r.id === restaurantId);
    if(!selectedRestaurant) return;
    const menuList = document.getElementById('menu-list');
    const restaurantName = document.getElementById('restaurant-name');

    restaurantName.innerText = selectedRestaurant.name;
    menuList.innerHTML = '';

    selectedRestaurant.menu.forEach((item, i) => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');
        menuItemDiv.style.animationDelay = (i * 60) + 'ms';
        // use data attributes so structure doesn't change (button inside same block)
        menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
            <h3>${item.name}</h3>
            <p>Price: ${item.price}</p>
            <button class="add-to-cart" data-rest="${restaurantId}" data-index="${i}">Add to Cart</button>
        `;
        menuList.appendChild(menuItemDiv);
    });

    document.getElementById('restaurants').classList.add('hidden');
    document.getElementById('menu-section').classList.remove('hidden');

    // smooth scroll top for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- Go back ----------
function goBack() {
    document.getElementById('restaurants').classList.remove('hidden');
    document.getElementById('menu-section').classList.add('hidden');
}

// ---------- Search (fixed template strings & keeps behavior) ----------
function searchRestaurants() {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredRestaurants = restaurants.filter(restaurant =>
        (restaurant.name || '').toLowerCase().includes(query) ||
        (restaurant.description || '').toLowerCase().includes(query) ||
        restaurant.menu.some(m => (m.name || '').toLowerCase().includes(query))
    );

    const restaurantList = document.getElementById('restaurant-list');
    restaurantList.innerHTML = '';

    filteredRestaurants.forEach((restaurant, idx) => {
        const restaurantDiv = document.createElement('div');
        restaurantDiv.classList.add('restaurant');
        restaurantDiv.style.animationDelay = (idx * 60) + 'ms';
        restaurantDiv.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <h3>${restaurant.name}</h3>
            <p>${restaurant.description || ''}</p>
        `;
        restaurantDiv.onclick = () => viewMenu(restaurant.id);
        restaurantList.appendChild(restaurantDiv);
    });
}

// ---------- CART functionality (slide-in panel) ----------
function saveCart(){
    localStorage.setItem('qf_cart', JSON.stringify(cart));
    renderCart();
}

function addToCart(restId, menuIndex){
    const rest = restaurants.find(r => r.id === Number(restId));
    if(!rest) return;
    const item = rest.menu[menuIndex];
    const price = parsePrice(item.price);
    const key = `${restId}:::${item.name}`;
    const found = cart.find(c => c.key === key);
    if(found){
        found.qty += 1;
    } else {
        cart.push({
            key,
            restId: Number(restId),
            name: item.name,
            price: price,
            img: item.image,
            qty: 1
        });
    }
    saveCart();
    openCart();
    flashMessage(`${item.name} added to cart`);
}

function renderCart(){
    const cartCountEl = document.getElementById('cart-count');
    const itemsWrap = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');

    const totalQty = cart.reduce((s, it) => s + it.qty, 0);
    cartCountEl.innerText = totalQty;

    itemsWrap.innerHTML = '';
    cart.forEach((c, idx) => {
        const r = restaurants.find(r => r.id === c.restId);
        const row = document.createElement('div');
        row.className = 'cart-row';
        row.innerHTML = `
            <img src="${c.img}" alt="${c.name}" onerror="this.src='https://via.placeholder.com/120x90?text=No+Img'">
            <div class="meta">
                <h4>${c.name}</h4>
                <p>${r ? r.name : ''}</p>
            </div>
            <div class="qty">
                <button onclick="decreaseQty(${idx})">-</button>
                <div>${c.qty}</div>
                <button onclick="increaseQty(${idx})">+</button>
            </div>
            <div style="min-width:70px;text-align:right">${currency(c.price * c.qty)}</div>
        `;
        itemsWrap.appendChild(row);
    });

    const totalPrice = cart.reduce((s, it) => s + (it.price * it.qty), 0);
    totalEl.innerText = currency(totalPrice);
    // update floating count (in case user scrolls)
    const floatCount = document.getElementById('cart-count');
    if(floatCount) floatCount.innerText = totalQty;
}

function increaseQty(i){
    if(cart[i]) cart[i].qty++;
    saveCart();
}
function decreaseQty(i){
    if(cart[i]) {
        cart[i].qty--;
        if(cart[i].qty <= 0) cart.splice(i,1);
        saveCart();
    }
}

function clearCart(){
    cart = [];
    saveCart();
    flashMessage('Cart cleared');
}

// slide-in controls
const cartPanel = document.getElementById('cart-panel');
const cartBackdrop = document.getElementById('cart-backdrop');
const cartOpenBtn = document.getElementById('cart-open-btn');
const cartCloseBtn = document.getElementById('cart-close');
const clearBtn = document.getElementById('clear-cart');
const placeOrderBtn = document.getElementById('place-order');

function openCart(){
    cartPanel.classList.add('open');
    cartBackdrop.classList.remove('hidden');
    renderCart();
}
function closeCart(){
    cartPanel.classList.remove('open');
    cartBackdrop.classList.add('hidden');
}

// Place order (demo)
function placeOrder(){
    if(cart.length === 0){ alert('Cart is empty'); return; }
    // show a success message and clear cart
    const total = cart.reduce((s,it)=> s + (it.price*it.qty), 0);
    alert('Order placed successfully! Total: ' + currency(total));
    cart = [];
    saveCart();
    closeCart();
}

// small toast message
function flashMessage(msg){
    const t = document.createElement('div');
    t.innerText = msg;
    t.style.position = 'fixed';
    t.style.left = '50%';
    t.style.bottom = '96px';
    t.style.transform = 'translateX(-50%)';
    t.style.background = 'linear-gradient(90deg,#ff6f61,#ffb199)';
    t.style.color = '#071022';
    t.style.padding = '8px 14px';
    t.style.borderRadius = '10px';
    t.style.boxShadow = '0 10px 36px rgba(0,0,0,0.5)';
    t.style.zIndex = 1200;
    t.style.opacity = '0';
    t.style.transition = 'opacity .3s, transform .3s';
    document.body.appendChild(t);
    requestAnimationFrame(()=> { t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(-6px)'; });
    setTimeout(()=> { t.style.opacity = '0'; t.style.transform = 'translateX(-50%) translateY(0)'; setTimeout(()=> t.remove(), 350); }, 1400);
}

// ---------- Event wiring (delegation) ----------
document.addEventListener('click', function(e){
    // add-to-cart button
    if(e.target && e.target.classList && e.target.classList.contains('add-to-cart')){
        const restId = e.target.getAttribute('data-rest');
        const idx = e.target.getAttribute('data-index');
        addToCart(restId, idx);
    }
});
document.getElementById('cart-open-btn').addEventListener('click', openCart);
document.getElementById('cart-close').addEventListener('click', closeCart);
document.getElementById('cart-backdrop').addEventListener('click', closeCart);
document.getElementById('clear-cart').addEventListener('click', clearCart);
document.getElementById('place-order').addEventListener('click', placeOrder);

// ---------- Initialize ----------
displayRestaurants();
renderCart();