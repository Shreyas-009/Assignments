var Array1=[23,9,5,12,90];
var Array2=[45,19,85];
var Array3=[2,61,5,30,88,11]
var arr = [...Array1,...Array2,...Array3];
console.log(arr);
var count=0;
arr.forEach((val,index)=>{
    if (val>count) {
        count=val;
    }
});
console.log("Largest Element : "+count);