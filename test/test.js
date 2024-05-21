// function comp(string1, string2){
//     let first = string1.length
//     let second = string2.length
     
//     if(first === second){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(comp("AB","CD"))


// function stamp(string1, string2){
// let first = string1.length
// let second = string2.length
// if(first === second){
// return true
// }else{
//     return false
// }
// }
// console.log(stamp("ABC","VD"))



function countUniqueValues(arr){
    let obj = {}
    let count= 0

    for(i = 0; i < arr.length; i++){
        let char = arr[i]

        if(obj[char]){
             obj[char] +=1
        }
        else{
             obj[char] = 1
        }
    }
  for( let key in obj){
    count++
  }
  return count

}console.log(countUniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,6]))



function isogram(str){
  let group = {}
  let lowerString = str.toLowerCase()

for(let i = 0; i < lowerString.length; i++){
  if(group[lowerString[i]]){
    return false
  }

 else{
    group[lowerString[i]] = 1
 }
}return true

}console.log(isogram("ABosn"))



function isogram(str){
  let obj = {}
  let lowerString = str.toLowerCase()

  for(let i = 0; i < lowerString.length; i++){
    let char = i
      if(obj[lowerString[char]]){
        return false
      }
      else{
        obj[lowerString[char]] = 1
      }
    }
    return true
}
console.log(isogram("AAAbbbCC"))





 function anagram(str1, str2){
   let obj = {}
   if(str1.length !== str2.length){
        return false
   }
   for(let i = 0; i < str1.length; i++){
        let char = str1[i]
      if(obj[char]){
          obj[char] += 1
      }
      else{
        obj[char] = 1
      }
      
      for(let i = 0; i < str2.length; i++){
         if(!obj[char]){
          return false
         }
         else{
          obj[char] -= 1
        }
      return true

      }
    
   }



 }console.log(anagram("azz", "zzau"))