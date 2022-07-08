let p=new Promise((resolve,reject)=>{
	if(Math.random()>0.5){
		setTimeout(resolve,1000,"success")
	}else{
		setTimeout(reject,1000,"fail")
	}
})
p.then((value)=>{
	console.log(value)
},(err)=>{console.log(err)})
