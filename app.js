let walletBalance = 125.5;
document.querySelector('.wallet-balance').innerHTML = walletBalance.toFixed(3)

let categories = [
    {
        name: 'sports',
        imageUrl: 'images/sports.png',
        color: 'rgba(38, 80, 94, 0.40)'
    },
    {
        name: 'casual',
        imageUrl: 'images/casual.png',
        color: 'rgba(169, 114, 31, 0.40)'
    },
    {
        name: 'classic',
        imageUrl: 'images/classic.png',
        color: 'rgba(75, 53, 38, 0.40)'
    },
    {
        name: 'k-pop',
        imageUrl: 'images/k-pop.png',
        color: 'rgba(71, 127, 151, 0.40)'
    },
    {
        name: 'subculture',
        imageUrl: 'images/subculture.png',
        color: 'rgba(65, 29, 141, 0.40)'
    },
    {
        name: 'glamour',
        imageUrl: 'images/glamour.png',
        color: 'rgba(193, 94, 100, 0.40)'
    },
    {
        name: 'boho',
        imageUrl: 'images/boho.png',
        color: 'rgba(160, 138, 108, 0.40)'
    },
    {
        name: 'vintage',
        imageUrl: 'images/vintage.png',
        color: 'rgba(160, 114, 46, 0.40)'
    },
    {
        name: 'cosplay',
        imageUrl: 'images/cosplay.png',
        color: 'rgba(111, 82, 160, 0.40)'
    },
    {
        name: 'sci-fi',
        imageUrl: 'images/sci-fi.png',
        color: 'rgba(160, 114, 46, 0.40)'
    },
    {
        name: 'holiday',
        imageUrl: 'images/holiday.png',
        color: 'rgba(138, 21, 21, 0.40)'
    },
    {
        name: 'medieval',
        imageUrl: 'images/medieval.png',
        color: 'rgba(41, 87, 58, 0.40)'
    }
]

let clothes = [
    {
        id: 'top-1',
        name: 'lucci',
        type: 'printed t-shirt',
        category: 'top',
        price: 5,
        imageUrl: 'images/top-1.png'
    },
    {
        id: 'top-2',
        name: 'gucci',
        type: 'printed t-shirt',
        category: 'top',
        price: 10,
        imageUrl: 'images/top-2.png'
    },
    {
        id: 'top-3',
        name: 'versace',
        type: 'printed t-shirt',
        category: 'top',
        price: 3,
        imageUrl: 'images/top-3.png'
    },
    {
        id: 'top-4',
        name: 'calvin klein',
        type: 'printed t-shirt',
        category: 'top',
        price: 4,
        imageUrl: 'images/top-4.png'
    },
    {
        id: 'top-5',
        name: 'kcl',
        type: 'shirt',
        category: 'top',
        price: 7,
        imageUrl: 'images/top-5.png'
    },
    {
        id: 'top-6',
        name: 'amt',
        type: 'printed t-shirt',
        category: 'top',
        price: 6,
        imageUrl: 'images/top-6.png'
    },
    {
        id: 'top-7',
        name: 'tamx',
        type: 'printed t-shirt',
        category: 'top',
        price: 3.5,
        imageUrl: 'images/top-7.png'
    },
    {
        id: 'top-8',
        name: 'txmt',
        type: 'printed t-shirt',
        category: 'top',
        price: 14,
        imageUrl: 'images/top-8.png'
    },
    {
        id: 'top-9',
        name: 'amt',
        type: 'printed t-shirt',
        category: 'top',
        price: 9,
        imageUrl: 'images/top-9.png'
    },
    {
        id: 'top-10',
        name: 'amt',
        type: 'printed t-shirt',
        category: 'top',
        price: 10,
        imageUrl: 'images/top-10.png'
    },
    {
        id: 'top-11',
        name: 'amt',
        type: 'printed t-shirt',
        category: 'top',
        price: 11,
        imageUrl: 'images/top-11.png'
    },
    {
        id: 'top-12',
        name: 'amt',
        type: 'printed t-shirt',
        category: 'top',
        price: 12,
        imageUrl: 'images/top-12.png'
    },
    {
        id: 'top-13',
        name: 'amt',
        type: 'printed t-shirt',
        category: 'top',
        price: 13,
        imageUrl: 'images/top-13.png'
    },
    {
        id: 'top-14',
        name: 'amt',
        type: 'printed t-shirt',
        category: 'top',
        price: 14,
        imageUrl: 'images/top-14.png'
    },
    {
        id: 'top-15',
        name: 'amt',
        type: 'printed t-shirt',
        category: 'top',
        price: 15,
        imageUrl: 'images/top-15.png'
    },
    {
        id: 'top-16',
        name: 'amt',
        type: 'printed t-shirt',
        category: 'top',
        price: 5,
        imageUrl: 'images/top-1.png'
    },
    {
        id: 'top-17',
        name: 'amt',
        type: 'printed t-shirt',
        category: 'top',
        price: 15,
        imageUrl: 'images/top-5.png'
    },
    {
        id: 'top-18',
        name: 'amt',
        type: 'printed t-shirt',
        category: 'top',
        price: 1.5,
        imageUrl: 'images/top-7.png'
    },
    {
        id: 'top-19',
        name: 'amt',
        type: 'printed t-shirt',
        category: 'top',
        price: 15,
        imageUrl: 'images/top-10.png'
    },
    {
        id: 'bottom-1',
        name: 'amt',
        type: 'pants',
        category: 'bottom',
        price: 15,
        imageUrl: 'images/bottom-1.png'
    },
    {
        id: 'bottom-2',
        name: 'amt',
        type: 'pants',
        category: 'bottom',
        price: 15,
        imageUrl: 'images/bottom-2.png'
    },
    {
        id: 'bottom-3',
        name: 'amt',
        type: 'pants',
        category: 'bottom',
        price: 15,
        imageUrl: 'images/bottom-3.png'
    },
    {
        id: 'bottom-4',
        name: 'amt',
        type: 'pants',
        category: 'bottom',
        price: 15,
        imageUrl: 'images/bottom-4.png'
    },
    {
        id: 'bottom-5',
        name: 'amt',
        type: 'pants',
        category: 'bottom',
        price: 15,
        imageUrl: 'images/bottom-5.png'
    },
    {
        id: 'bottom-6',
        name: 'amt',
        type: 'pants',
        category: 'bottom',
        price: 15,
        imageUrl: 'images/bottom-6.png'
    },
    {
        id: 'bottom-7',
        name: 'amt',
        type: 'pants',
        category: 'bottom',
        price: 15,
        imageUrl: 'images/bottom-7.png'
    },
    {
        id: 'bottom-8',
        name: 'amt',
        type: 'pants',
        category: 'bottom',
        price: 15,
        imageUrl: 'images/bottom-8.png'
    },
    {
        id: 'bottom-9',
        name: 'amt',
        type: 'pants',
        category: 'bottom',
        price: 15,
        imageUrl: 'images/bottom-9.png'
    },
    {
        id: 'bottom-10',
        name: 'amt',
        type: 'pants',
        category: 'bottom',
        price: 15,
        imageUrl: 'images/bottom-10.png'
    },
]
let selectedType = 'top';
document.querySelector('.category-title').innerHTML = selectedType;
const pushCategories = (data) => {
    document.querySelector('.clothing-categories').innerHTML = '';
    data.map((category) => {
        const  {name, imageUrl, color} = category;
        document.querySelector('.clothing-categories').innerHTML += `
        <div class="clothing-category" onclick="showMainShop()">
            <img src=${imageUrl} alt="sports-category">
            <div class="category-name" style="background-color:${color};">${name}</div>
        </div>
        `
    })
}
const showMainShop = () => {
    document.querySelector('.hero-container').classList.add('hide');
    document.querySelector('.main-shop').classList.remove('hide');
}
const pushClothes = (data) => {
    document.querySelector('.clothes').innerHTML = '';
    data.map((cloth) => {
        const {name, type, price, imageUrl, id, category} = cloth;
        // if(category === selectedType){
            document.querySelector('.clothes').innerHTML += `
            <div class="cloth ${category} ${category !== selectedType ? 'hide-item' : ''}" id=${id} onclick="viewCloth('${id}')">
                <img src=${imageUrl} alt="cloth">
                <div class="cloth-type">${type}</div>
                <div class="price-cont">
                    <svg class="lix" xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                        <path d="M9.5904 7.60524L11.8658 7.60524L7.44941 0.326401L6.3042 2.20435L9.5904 7.60524Z" fill="#FFC93E"/>
                        <path d="M2.36476 7.76876L5.65021 2.36717H5.6352L7.07779 -1.52588e-05L4.81815 -1.52588e-05L0.0893555 7.76876H2.36476Z" fill="#FFC93E"/>
                        <path d="M0 8.14954L1.63559 10L10.5277 10L12.0289 8.14954L0 8.14954Z" fill="#FFC93E"/>
                        <path d="M7.55475 6.85705L6.02279 4.31326L4.47656 6.8433L7.55475 6.85705L6.02279 4.31326L4.47656 6.8433L7.55475 6.85705Z" fill="#FFC93E"/>
                    </svg>
                    <p>${price.toFixed(3)}</p>
                </div>
                <svg class="add-icon" onclick="addToCart('${id}')" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <rect class="first-rect" width="38" height="38" rx="12" fill="#2B2B2B" fill-opacity="0.9"/>
                    <rect class="second-rect" width="38" height="38" rx="12" fill="#FFC93E" fill-opacity="0.1"/>
                    <rect class="third-rect" width="38" height="38" rx="12" fill="url(#paint0_radial_17701_20007)" fill-opacity="0.15"/>
                    <rect class="fourth-rect" x="0.5" y="0.5" width="37" height="37" rx="11.5" stroke="#FFC93E" stroke-opacity="0.45"/>
                    <path d="M19 11.3819C19.1403 11.3818 19.2793 11.4093 19.4089 11.463C19.5385 11.5166 19.6563 11.5953 19.7555 11.6945C19.8547 11.7937 19.9334 11.9115 19.9871 12.0412C20.0407 12.1708 20.0683 12.3098 20.0682 12.4501L20.0692 17.931L25.5502 17.932C25.6904 17.932 25.8293 17.9597 25.9589 18.0134C26.0885 18.067 26.2063 18.1457 26.3055 18.2449C26.4047 18.3441 26.4833 18.4618 26.537 18.5914C26.5907 18.721 26.6183 18.8599 26.6183 19.0002C26.6183 19.1405 26.5907 19.2794 26.537 19.409C26.4833 19.5386 26.4047 19.6563 26.3055 19.7555C26.2063 19.8547 26.0885 19.9334 25.9589 19.9871C25.8293 20.0408 25.6904 20.0684 25.5502 20.0684L20.0692 20.0694L20.0682 25.5504C20.0682 25.8337 19.9556 26.1054 19.7553 26.3057C19.555 26.506 19.2833 26.6186 19 26.6186C18.7167 26.6186 18.445 26.506 18.2447 26.3057C18.0444 26.1054 17.9318 25.8337 17.9318 25.5504L17.9308 20.0694L12.4498 20.0684C12.1665 20.0684 11.8948 19.9559 11.6945 19.7555C11.4942 19.5552 11.3817 19.2835 11.3817 19.0002C11.3817 18.7169 11.4942 18.4452 11.6945 18.2449C11.8948 18.0446 12.1665 17.932 12.4498 17.932L17.9308 17.931L17.9318 12.4501C17.9317 12.3098 17.9593 12.1708 18.0129 12.0412C18.0666 11.9115 18.1453 11.7937 18.2445 11.6945C18.3437 11.5953 18.4615 11.5166 18.5911 11.463C18.7207 11.4093 18.8597 11.3818 19 11.3819Z" fill="#FFC93E"/>
                    <defs>
                        <radialGradient id="paint0_radial_17701_20007" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.7093 11.0465) rotate(-17.2318) scale(43.2555)">
                        <stop stop-color="#FFC93E"/>
                        <stop offset="0.540792" stop-color="#FFC93E" stop-opacity="0.31"/>
                        <stop offset="1" stop-color="#FFC93E" stop-opacity="0"/>
                        </radialGradient>
                    </defs>
                </svg>
                <svg class='cancel-icon hide-item' onclick="removeFromCart('${id}')" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <rect class="first-rect" width="38" height="38" rx="12" fill="#2B2B2B" fill-opacity="0.8"/>
                    <rect class="second-rect" width="38" height="38" rx="12" fill="#F24040" fill-opacity="0.15"/>
                    <rect class="third-rect" width="38" height="38" rx="12" fill="url(#paint0_radial_17698_19803)" fill-opacity="0.1"/>
                    <rect class="fourth-rect" x="0.5" y="0.5" width="37" height="37" rx="11.5" stroke="#F24040" stroke-opacity="0.45"/>
                    <path d="M13.613 13.6132C13.7121 13.5139 13.8299 13.4351 13.9595 13.3814C14.0891 13.3277 14.228 13.3 14.3683 13.3C14.5086 13.3 14.6475 13.3277 14.7771 13.3814C14.9067 13.4351 15.0245 13.5139 15.1236 13.6132L19 17.4881L22.8763 13.6132C22.9755 13.514 23.0933 13.4353 23.2228 13.3816C23.3524 13.3279 23.4913 13.3003 23.6316 13.3003C23.7719 13.3003 23.9108 13.3279 24.0404 13.3816C24.17 13.4353 24.2878 13.514 24.3869 13.6132C24.4861 13.7124 24.5648 13.8301 24.6185 13.9597C24.6722 14.0893 24.6998 14.2282 24.6998 14.3685C24.6998 14.5088 24.6722 14.6477 24.6185 14.7773C24.5648 14.9069 24.4861 15.0246 24.3869 15.1238L20.512 19.0002L24.3869 22.8765C24.5873 23.0768 24.6998 23.3485 24.6998 23.6318C24.6998 23.9151 24.5873 24.1868 24.3869 24.3871C24.1866 24.5875 23.9149 24.7 23.6316 24.7C23.3483 24.7 23.0766 24.5875 22.8763 24.3871L19 20.5122L15.1236 24.3871C14.9233 24.5875 14.6516 24.7 14.3683 24.7C14.085 24.7 13.8133 24.5875 13.613 24.3871C13.4127 24.1868 13.3001 23.9151 13.3001 23.6318C13.3001 23.3485 13.4127 23.0768 13.613 22.8765L17.4879 19.0002L13.613 15.1238C13.5137 15.0247 13.4349 14.9069 13.3812 14.7773C13.3275 14.6477 13.2998 14.5088 13.2998 14.3685C13.2998 14.2282 13.3275 14.0893 13.3812 13.9597C13.4349 13.8301 13.5137 13.7123 13.613 13.6132Z" fill="#EF5A5A"/>
                    <defs>
                        <radialGradient id="paint0_radial_17698_19803" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.7093 11.0465) rotate(-17.2318) scale(43.2555)">
                        <stop stop-color="#F24040"/>
                        <stop offset="0.540792" stop-color="#F24040" stop-opacity="0.31"/>
                        <stop offset="1" stop-color="#F24040" stop-opacity="0"/>
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            `
        // }
    })
}
let cartItems = [];
let total = 0;
const pushCartDetails = () => {
    if(cartItems.length > 0){
        document.querySelector('.total-cont').classList.remove('hide');
        document.querySelector('.refresh').classList.remove('hide');
        document.querySelector('.purchase-btn').style.opacity = 1
        document.querySelector('.purchase-btn').style.pointerEvents = 'all'
    } else {
        document.querySelector('.total-cont').classList.add('hide');
        document.querySelector('.refresh').classList.add('hide');
        document.querySelector('.purchase-btn').style.opacity = 0.35
        document.querySelector('.purchase-btn').style.pointerEvents = 'none'
    }
    total = 0
    cartItems.map((item) => {
        let i = clothes.filter((cloth) => cloth.id === item)[0];
        total += i.price;
    })
    document.querySelectorAll('.total').forEach((elem) => elem.innerHTML = total.toFixed(3));
}
const addToCart = (id) => {
    document.querySelector(`#${id} .cancel-icon`).classList.remove('hide-item');
    document.querySelector(`#${id} .add-icon`).classList.add('hide-item')
    cartItems.unshift(id);
    pushCartDetails();
    console.log(cartItems)
}

const removeFromCart = (id) => {
    document.querySelector(`#${id} .cancel-icon`).classList.add('hide-item');
    document.querySelector(`#${id} .add-icon`).classList.remove('hide-item');
    cartItems = cartItems.filter((item) => item !== id);
    pushCartDetails();
}

const clearCart = () => {
    document.querySelector('.cancel-purchase-cont').classList.add('hide');
    cartItems.map((id) => {
        document.querySelector(`#${id} .cancel-icon`).classList.add('hide-item');
        document.querySelector(`#${id} .add-icon`).classList.remove('hide-item');
    })
    cartItems = []
    pushCartDetails();
}

let selectedClothId = '';

const viewCloth = (id) => {
    let selected = document.getElementById(id);
    if(selectedClothId !== id){
        selectedClothId = id
        let cloth = clothes.filter((item) => item.id === id)[0];
        document.querySelector('.cloth-details p').innerHTML = cloth.type;
        document.querySelector('.cloth-details .lix-price span').innerHTML = cloth.price.toFixed(3);
        document.querySelector('.cloth-details').classList.remove('hide');
        selected.classList.add('cloth-selected');
        let siblings = Array.from(selected.parentNode.children).filter((elem) => elem !== selected);
        siblings.map((elem) => elem.classList.remove('cloth-selected'))
    } else {
        selectedClothId = ''
        selected.classList.remove('cloth-selected');
        document.querySelector('.cloth-details').classList.add('hide');
    }
}

pushCategories(categories);
pushClothes(clothes);
const switchTab = (tab) => {
    document.querySelector('.cloth-details').classList.add('hide');
    let selected = document.querySelector(`.${tab}`)
    selectedType = tab;
    document.querySelector('.category-title').innerHTML = selectedType;
    selected.classList.add('selected-tab');
    let siblings = Array.from(selected.parentNode.children).filter((elem) => elem !== selected);
    siblings.map((elem) => elem.classList.remove('selected-tab'))
    pushClothes(clothes)
    cartItems.map((id) => {
        document.querySelector(`#${id} .cancel-icon`).classList.remove('hide-item');
        document.querySelector(`#${id} .add-icon`).classList.add('hide-item')
    })
}

const confirmPurchasePopUp = () => {
    document.querySelector('.total-cart-items').innerHTML = cartItems.length + ' items'
    document.querySelector('.confirm-purchase-cont').classList.remove('hide');
    document.querySelector('.rotate').classList.add('hide');
}
const confirmPurchase = () => {
    // run transaction process
    console.log(cartItems);
    clearCart()
    cancelPopUp();
}
const cancelPopUp = () => {
    document.querySelector('.cancel-purchase-cont').classList.add('hide');
    document.querySelector('.confirm-purchase-cont').classList.add('hide');
    document.querySelector('.rotate').classList.remove('hide');
}

const cancelPurchasePopUp = () => {
    document.querySelector('.cancel-purchase-cont').classList.remove('hide');
    document.querySelector('.rotate').classList.add('hide');
}

document.addEventListener('keydown', evt => {
    if (evt.key === 'm'){
        showLocation()
    }
})
const back = () => {
    if (document.querySelector('.current-page-info').classList.contains('hide-display')) {
        document.querySelector('.display').classList.add('hide')
    } else {
        backToMainPage()
    }
}
document.addEventListener('keydown', evt => {
    if(evt.key === 'Escape'){
        back()
    }
})
const toggleDisplay = () => {
    document.querySelector('.display').classList.toggle('hide')
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Home') {
        toggleDisplay();
    }
});
