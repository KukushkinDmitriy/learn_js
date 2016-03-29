var array=[2,3,4]
array[12]='sdfsdf'
array[13]=null
array[65]=undefined
array[45]=''
array['asd']='asd'
array['67asd']='67asd'
array['68']=68
array[6.9]=6.9
array[-1]=-1
array[NaN]='NaN'
array[null]='null'
array[undefined]='undefined'
array['']='empty string'
array[[]]='empty array'
array[{}]='empty object'



var each = function(arr, callback) {
    if(arr.length<0){
        throw new Error('Ошибка')
    }

    for(var i in arr){
        if(i!='' && Math.floor(+i) === +i && +i>=0) callback(arr[i], i, arr)
    }

}

each(array, function(item, key, arr) {
    console.log('Element: ' + item + ', index: ' + key + 'array: ' + arr)
})
array.forEach(
    function(item, key, arr) {
        console.log('Element: ' + item + ', index: ' + key + 'array: ' + arr)
    }
)
