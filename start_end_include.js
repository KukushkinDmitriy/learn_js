var start = function (string='',substring='') {
    string+=''
    substring+=''
    if((string.slice(0,substring.length) == substring) && substring!=''){
        return true
    }
    return false

}
start('afsdfsdfsdf','afs');


var end = function (string='',substring='') {
    string+=''
    substring+=''
    if((string.slice(string.length-substring.length) == substring) && substring!=''){
        return true
    }
    return false

}
end('afsdfsdfsdf','sdf');

var include = function (string,substring) {
    string+=''
    substring+=''
    index=0;
    while(index<string.length &&(string!=''||substring!='')){
        if((string.slice(index,index+substring.length)==substring) && substring!=''){
            return true
        }
        index++
    }
    return false
}
include('afsdfsdfsdf','sdf');