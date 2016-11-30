function findMissing(array2, array1){
  
  if(array2.length < 1 || array1.length < 1){
    
    return 0;
    
  }else if(array2.length === array1.length){
    return 0;
  
    
  }else{
 
var index;

for (var i=0; i<array2.length; i++) {
    index = array1.indexOf(array2[i]);
    if (index > -1) {
        array1.splice(index, 1);
    }
}
  return array1[0];
  
  }
}