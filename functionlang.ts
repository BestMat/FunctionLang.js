let e = []
print("Running with FunctionLang - TypeScript")
function ifLoop(c,n){
    if(c){
     (n)()
    }
}
function whileLoop(c,n){
    while(c){
     (n)()
    }
}
function print(x){
    console.log(x)
}
function call(a){
    (a)()
}
function setValue(a,b){
    (a) = b
}
function type(a){
    return typeof a
}
function arrayOf(a,o){
    return (a)[0]
}
function strToNum(a){
    return parseInt(a)
}
function strToFloat(a){
    return parseFloat(a)
}
function toStr(a){
    return a.toString()
}
function arrayJoin(a,b){
    (a).join(b)
}
function arrayAppend(a,b){
    (a).push(b)
}
function arrayPop(a){
    (a).pop()
}
function arrayShift(a){
    (a).shift()
}
function arrayDel(a,b){
    delete (a)[b]
}
function arrayInsertBetween(a,b,c){
    (a).splice(b,c)
}
function arrayMerge(a,b){
    a.concat(b)
}
