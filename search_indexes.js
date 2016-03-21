function masindex(string,substring) {
    string=string+''
    substring=substring+''
    var index=substring && string.length;
    var index_array=[];
    while(index>0){
        index=string.lastIndexOf(substring,index-1)
        if(index!=-1){
            index_array.unshift(index)
        }

    }
    return index_array
}
masindex('sdgsdgfsfdgsdfgsdfgdf','s')