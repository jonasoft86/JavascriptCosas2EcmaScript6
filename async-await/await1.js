const sumAfterTwoSeconds = (a,b) => {
    return new Promise(resolve => setTimeout(()=> resolve(a+b),2000))
}

const sumAll = ()=>{
    return sumAfterTwoSeconds(2,2).then(result => 
        sumAfterTwoSeconds(result,2).then(result => sumAfterTwoSeconds(result,2)
    ))
}

sumAll().then(total=> console.log('Promise',total))