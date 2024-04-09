function letterCapitalize(str){
    let strArr = str.split(' ');
    strArr.forEach((element, index) => {
        strArr[index]= element[0].toUpperCase() + element.slice(1)
    });
    return strArr.join(' ');
}

console.log(letterCapitalize('i am kishma'));

const capitalize =(str)=>{
    let splittedStr = str.split(' ');
    for(var i =0; i< splittedStr.length; i++){
        splittedStr[i]= splittedStr[i][0].toUpperCase() + splittedStr[i].slice(1)
    }
    return splittedStr.join(' ');
}

console.log(letterCapitalize('working as mern developer'));
