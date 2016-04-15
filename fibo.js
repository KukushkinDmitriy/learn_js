var num = 9
Object.defineProperty(Number.prototype,'fibonachi',
    {
        get: function () {
            var fibo = (num,f1=0,f2=1) => {
                var f = f1+f2
                num--
                return num<1 ? f : fibo(num,f2,f)

            }
            return fibo(this)
        }
    }
)
num.fibonachi

////////////////////////////////////
var fibo = (num,f1=0,f2=1) => {
    var f=0;
    f = f1+f2
    num--
    return num<1 ? f : fibo(num,f2,f)

}
fibo(6)