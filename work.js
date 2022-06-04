// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


function magic(reqPrice, reqCourse){
    reqCourse.map(pr =>{
        if (reqPrice[0] >= pr.prices[0] || reqPrice[0] == null && reqPrice[1] >= pr.prices[0]){
            if (reqPrice[1] >= pr.prices[1] || reqPrice == null){
                console.log(pr)
            }
        }
    })
}


function priceUp(item) {
    item.sort(function (a, b) {
        if (a.prices[0] > b.prices[0]){
            return 1
        }
        if (a.prices[0] == null || b.prices[0] == null){
            return 1
        }
        if (a.prices[0] < b.prices[0] && a.prices !== null){
            return -1
        }
    })
    console.log(item)
}

function priceDown(item) {
    item.sort(function (a, b) {
        if (a.prices[0] > b.prices[0]){
            return -1
        }
        if (a.prices[0] == null || b.prices[0] == null){
            return -1
        }
        if (a.prices[0] < b.prices[0] && a.prices !== null){
            return 1
        }
    })
    console.log(item)
}


magic(requiredRange1, courses);

