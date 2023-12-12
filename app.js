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
        category: '',
        price: 5,
        imageUrl: 'images/top-1.png'
    },
    {
        id: 'top-2',
        name: 'gucci',
        type: 'printed t-shirt',
        category: '',
        price: 10,
        imageUrl: 'images/top-2.png'
    },
    {
        id: 'top-3',
        name: 'versace',
        type: 'printed t-shirt',
        category: '',
        price: 3,
        imageUrl: 'images/top-3.png'
    },
    {
        id: 'top-4',
        name: 'calvin klein',
        type: 'printed t-shirt',
        category: '',
        price: 4,
        imageUrl: 'images/top-4.png'
    },
    {
        id: 'top-5',
        name: 'kcl',
        type: 'shirt',
        category: '',
        price: 7,
        imageUrl: 'images/top-5.png'
    },
    {
        id: 'top-6',
        name: 'amt',
        type: 'printed t-shirt',
        category: '',
        price: 6,
        imageUrl: 'images/top-6.png'
    },
]

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
        const {name, type, price, imageUrl, id} = cloth;
        document.querySelector('.clothes').innerHTML += `
        <div class="cloth" id=${id}>
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
            <svg class="add-icon" xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                <rect width="38" height="38" rx="12" fill="#2B2B2B" fill-opacity="0.9"/>
                <rect width="38" height="38" rx="12" fill="#FFC93E" fill-opacity="0.1"/>
                <rect width="38" height="38" rx="12" fill="url(#paint0_radial_17701_20007)" fill-opacity="0.15"/>
                <rect x="0.5" y="0.5" width="37" height="37" rx="11.5" stroke="#FFC93E" stroke-opacity="0.45"/>
                <path d="M19 11.3819C19.1403 11.3818 19.2793 11.4093 19.4089 11.463C19.5385 11.5166 19.6563 11.5953 19.7555 11.6945C19.8547 11.7937 19.9334 11.9115 19.9871 12.0412C20.0407 12.1708 20.0683 12.3098 20.0682 12.4501L20.0692 17.931L25.5502 17.932C25.6904 17.932 25.8293 17.9597 25.9589 18.0134C26.0885 18.067 26.2063 18.1457 26.3055 18.2449C26.4047 18.3441 26.4833 18.4618 26.537 18.5914C26.5907 18.721 26.6183 18.8599 26.6183 19.0002C26.6183 19.1405 26.5907 19.2794 26.537 19.409C26.4833 19.5386 26.4047 19.6563 26.3055 19.7555C26.2063 19.8547 26.0885 19.9334 25.9589 19.9871C25.8293 20.0408 25.6904 20.0684 25.5502 20.0684L20.0692 20.0694L20.0682 25.5504C20.0682 25.8337 19.9556 26.1054 19.7553 26.3057C19.555 26.506 19.2833 26.6186 19 26.6186C18.7167 26.6186 18.445 26.506 18.2447 26.3057C18.0444 26.1054 17.9318 25.8337 17.9318 25.5504L17.9308 20.0694L12.4498 20.0684C12.1665 20.0684 11.8948 19.9559 11.6945 19.7555C11.4942 19.5552 11.3817 19.2835 11.3817 19.0002C11.3817 18.7169 11.4942 18.4452 11.6945 18.2449C11.8948 18.0446 12.1665 17.932 12.4498 17.932L17.9308 17.931L17.9318 12.4501C17.9317 12.3098 17.9593 12.1708 18.0129 12.0412C18.0666 11.9115 18.1453 11.7937 18.2445 11.6945C18.3437 11.5953 18.4615 11.5166 18.5911 11.463C18.7207 11.4093 18.8597 11.3818 19 11.3819Z" fill="#FFC93E"/>
                <defs>
                    <radialGradient id="paint0_radial_17701_20007" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.7093 11.0465) rotate(-17.2318) scale(43.2555)">
                    <stop stop-color="#FFC93E"/>
                    <stop offset="0.540792" stop-color="#FFC93E" stop-opacity="0.31"/>
                    <stop offset="1" stop-color="#FFC93E" stop-opacity="0"/>
                    </radialGradient>
                </defs>
            </svg>
        </div>
        `
    })
}

pushCategories(categories);
pushClothes(clothes);

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
