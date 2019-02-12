var i=0;

var increment = function(){
    i+=1;
};

var getCounter = function(){
    return i;
}

module.exports = {
    increment: increment,
    getCounter: getCounter
};