//minimum number
function min(){
    const minofAll=(...numbers)=>{
        console.log(numbers);
        let arr=numbers;
        let min=arr[0];
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]<min){
                min=arr[i];
            }
        }
        console.log(min);
    }
    minofAll(1,2,3,4,5,6);
    minofAll(-1,-5,10);
    minofAll(10,20);
    }
    //Maximum number
    const maxofAll=(...numbers)=>{
        console.log(numbers);
        let arr=numbers;
        let max=arr[0];
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]>max){
                max=arr[i];
            }
        }
        console.log(max);
    }
    maxofAll(1,2,3,4,5,6);
    maxofAll(-1,-5,10);
    maxofAll(10,20);
    
    //Sum of Digits
    const sumAll=(...numbers)=>{
        console.log(numbers);
        let sum=0;
        for(let i=0;i<numbers.length;i++)
        {
            sum+=numbers[i];
        }
        console.log(sum);
    }
    sumAll(1,2,3);
    sumAll(1,6,8,9);
    sumAll(10,20);
    sumAll();