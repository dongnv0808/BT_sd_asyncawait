let findMax = function(arr){
    if(arr instanceof Array){
        let max = arr[0];
        for(let i = 1; i < arr.length; i++){
            if(max < arr[i]){
                max = arr[i];
            }
        }
        return max;
    }throw new Error('Khong phai la mot mang');
}
async function f(){
    try{
        let result = await findMax([2,3,1,5,6,4])
        console.log(result);
    }catch(e){
        console.log(e);
    }finally{
        console.log('Done');
    }
}

f();