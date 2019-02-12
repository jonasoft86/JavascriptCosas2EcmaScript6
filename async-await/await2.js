const sumAfterTwoSeconds = (a,b) => {
    return new Promise(resolve => setTimeout(()=> resolve(a+b),2000))
}

/*
const sumAll = ()=>{
    return sumAfterTwoSeconds(2,2).then(result => 
        sumAfterTwoSeconds(result,2).then(result => sumAfterTwoSeconds(result,2)
    ))
}
*/
const asyncSummAll = async() => {
    const four = await sumAfterTwoSeconds(2,2);
    const six = await sumAfterTwoSeconds(four,2);
    const eigth = await sumAfterTwoSeconds(six,2);

    return eigth;
}

asyncSummAll().then(total=> console.log('AsyncAwait',total))
//sumAll().then(total=> console.log('Promise',total))