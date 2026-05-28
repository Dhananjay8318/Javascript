//Map

const map=new Map()
map.set('in',"Andia")
map.set('usa',"United state of America")
map.set('fr',"France")
console.log(map)   // if we add same thing in a map then its not a re print

//output
/* Map(3) {
  'in' => 'Andia',
  'usa' => 'United state of America',
  'fr' => 'France'
}*/


for(const key of map){
    console.log(key)
}
//outpt give in a form of array
/*
[ 'in', 'Andia' ]
[ 'usa', 'United state of America' ]
[ 'fr', 'France' ]
 */ 



for(const [key,value] of map){
    console.log(key,':-',value)
}
//output
/*
in :- Andia
usa :- United state of America
fr :- France
*/ 

