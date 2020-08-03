// //plus button
// document.getElementById('plus-button').addEventListener('click',function(){
// 	handleProductChange(true);
// 	// const valueNumber=document.getElementById('value-number');
// 	// let blackCount=parseInt(valueNumber.value);
// 	// // let increaseCaseCount=caseCount+1;
// 	//  blackCount++;
// 	// valueNumber.value=blackCount;
//  //    const valueTotal=blackCount*1219;
//  //    document.getElementById('amount').innerText=valueTotal;
// })
//minus button
// document.getElementById('minus-button').addEventListener('click',function() {
// 	handleProductChange(false);
// 	// const valueNumber= document.getElementById('value-number');
// 	// let valueNumberAmount=parseInt(valueNumber.value);
// 	//  valueNumberAmount--
// 	//  valueNumber.value=valueNumberAmount
// 	// const valueTotal=valueNumberAmount*1219;
// 	// document.getElementById('amount').innerText=valueTotal;
// })
function handleProductChange(product,isIncrease) {
	const valueNumber= document.getElementById(product+'-number');
	let valueNumberAmount=parseInt(valueNumber.value);
	 if(isIncrease==true){
	 	valueNumberAmount++;
	 }
	 if(isIncrease==false && valueNumberAmount>0)
	 {
	 	valueNumberAmount--;
	 }
	 valueNumber.value=valueNumberAmount;
	let valueTotal=0;
	if(product=='value')
	{
       valueTotal=valueNumberAmount*1219;
	}
	else{
		valueTotal=valueNumberAmount*59;
	}
	document.getElementById(product+'-total').innerText=valueTotal;
}