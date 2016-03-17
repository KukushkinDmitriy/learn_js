var counter = {
	number:[0,10],
	increment:(x)=>{
	if(typeof x == "number") return counter.number[1]+=x
	else if(!x) return counter.number[0]+=1
	else return NaN
    },
	decriment:(x)=>{
	if(typeof x == "number") return counter.number[1]-=x
	else if(!x) return counter.number[0]-=1
	else return NaN

}
}
counter.increment();
counter.increment();
counter.increment();
counter.decriment();
