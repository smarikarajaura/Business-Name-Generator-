let random = Math.random()
let first , second , third ;


// lets generate the first word
if (random <0.33 ){
    // 0   0.33   0.66   
    first = "Crazy"
}
else if (random <0.66 && random >=0.33){
    first ="Amazing"
}
else{
    first ="Fire"
}

//  lets generate the second word
random = Math.random()
if (random <0.33){
second ="Engine"

}
else if (random <0.66 && random>=0.33){
second = "Foods "
}
else{
second = "Garments"
}

// lets generate the third word
random = Math.random()
if (random <0.33){
third ="Bros"

}
else if (random <0.66 && random>=0.33){
third = "limited "
}
else{
third = "Garments"
}


console.log(`${first} ${second} ${third}`)