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

const pushCategories = (data) => {
    document.querySelector('.clothing-categories').innerHTML = '';
    data.map((category) => {
        const  {name, imageUrl, color} = category;
        document.querySelector('.clothing-categories').innerHTML += `
        <div class="clothing-category">
            <img src=${imageUrl} alt="sports-category">
            <div class="category-name" style="background-color:${color};">${name}</div>
        </div>
        `
    })
}
pushCategories(categories)
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
