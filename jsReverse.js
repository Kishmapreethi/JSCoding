// Question: Write a function that reverses a given string.

// with inbuilt
const revStr= ( str)=>{
return str.split('').reverse().join('')
}

console.log('reverse', revStr('kishmapreethi'))

//without inbuilt

const revWithoutInBuilt = (str)=>{
    let temp ='';
    for(let i =str.length-1; i>=0;i--){
        temp += str[i];
    }
    return temp;
}

console.log('reversewithoutinbuilt', revWithoutInBuilt('kishmapreethi'))

// reverse the wrds in sentence

const revWordInSentence = (str)=>{
    let splittedWords = str.split(' ');
    splittedWords.forEach((word, index) => {
        splittedWords[index]  = word.split('').reverse().join('')
    });

    const revSentence = splittedWords.join(' ');
    return revSentence;
}


console.log('revWordInSentence', revWordInSentence('I am kishma preethi'))

//reverse  the senetence

const revSentence = ( str)=>{
    let reversedSentence = str.split(' ').reverse().join(' ');
    return reversedSentence;
}

console.log('revSentence', revSentence('I am woring as senior engineer'))