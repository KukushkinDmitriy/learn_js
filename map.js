var map = Object.create(null)
map.has = function(key){
    return key+'' in map
}
map.get = function(key){
    return map[key+'']
}
map.set=function(key,value){
    return map[key+'']=value
}
map.del=function(key){
    var del=map[key+'']
    delete map[key+'']
    return del
}
map.has('x')//false
map.get('x')//undefined
map.set('x',10)//10
map.has('x')//true
map.del('x')//10
map.has('x')//false