const temperatures = [22, 25, 19, 24, 28, 30, 21, 20, 27, 29, 23, 26, 24, 22, 18, 19, 21, 28, 30, 27, 26, 25, 22, 23, 19, 20, 28, 29, 27, 26];
const  tempsGreaterThan25 = temperatures.filter((temp)=>temp>=25);
 const tempsLessThan20 = temperatures.filter((temp)=>temp<20);

const tempsInFer = temperatures.map((temp)=>{ 
   return (temp * 9/5) + 32;
});

const labeledTemps = temperatures.map((temp)=>{
	if(temp >= 25){
	return "Warm";
	}else if(temp >=20 && temp <= 24){
	return "Mild";
	}else {
	return "Cool";
	}
});

let highTemp = temperatures[0];
const highestTemp = temperatures.forEach((temp)=> {
	if(temp > highTemp){
	   highTemp = temp;
	}
});

let lowTemp = temperatures[0];

const lowestTemp = temperatures.forEach((temp)=> {
     if(temp < lowTemp){
		lowTemp = temp;
	 }
});


// const LowestTemp = temeratures.reduce((temp)=>{
//         let lowTemp = temp;
//         if(temp > HighTemp){
//         HighTemp = temp;
// }
// return lowTemp;
// });

console.log(highTemp)