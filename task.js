var request = new XMLHttpRequest()
// console.log(request)/
request.open("GET", "https://restcountries.com/v3.1/all")
request.send()
request.onload=function(){
    var data = JSON.parse(request.response)
    console.log(data)

    //  No1 get asian countries using filter method

    let ans = data.filter(new1 => new1.region === "Asia")
    console.log(ans)

     //  No2 get population less than 2 lakhs  using filter method

    let ans1 = data.filter((new2)=> new2.population<200000)
    console.log(ans1)

    // No3 using for Each

    data.forEach(element => {
        console.log(element.capital)
    });
    data.forEach(element => {
        console.log(element.name)
    });
    data.forEach(element => {
        console.log(element.flag)
    });

    // No4 calculate total population of countries using Reduce method

    var ans2=data.reduce((first,next) => first+next.population,0 )
    console.log(ans2)

    // No 5 US Dollar Using Countries
    data.filter(element=>{
        for(let findusd in element.currencies){
            if(element.currencies[findusd].name==="United States dollar"){
                return true
            }
        }
    }).map(element=>console.log(element.name.common))
        


 }
 
