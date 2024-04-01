const arr = [2, 5, 5, 3, 7, 4, 8, 9, 8]
//1.Using SET
function remveDup(arr) {
    return [...new Set(arr)]
}

console.log(remveDup(arr))


//2. Using filter

let removeDup = arr.filter((a, index) => {
    return arr.indexOf(a) === index;
})

console.log(removeDup)

//3.filter nly duplicate values

let dupArr = arr.filter((a, index) => {
    return arr.indexOf(a) !== index;
})

console.log(dupArr)

//4.remove duplicates using foreach

function removeDupUsingForeach(arr) {
    let unique = [];
    let dup= [];
    arr.forEach((ele) => {
        if (!unique.includes(ele)) {
            unique.push(ele);
        }else {
            dup.push(ele)
        }
    })
    return [unique, dup];
}
const unique1 =removeDupUsingForeach(arr)
console.log('....',unique1[1])
