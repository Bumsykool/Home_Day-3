var oneToTwenty = [].toTwenty();
var twoToForty = [].toForty();
var tenToOneThousand = [].toOneThousand();

Array.prototype.toTwenty = function(){
    var start = 1;
    var end = 20;

    for(var i = start; i <= end; i += 1){
        result.push(i);
    }
   return result;
}

Array.prototype.toForty = function(){
    var start = 2;
    var end = 40;

    for(var i = start; i <= end; i += 2){
        result.push(i);
    }
   return result;
}

Array.prototype.toOneThousand = function(){
    var start = 10;
    var end = 1000;

    for(var i = start; i <= end; i += 10){
        result.push(i);
    }
   return result;
}
var tenToOneThousand = [].toOneThousand();



 Array.prototype.Search = function(d) {

       
        start = start || 0;
        end = end || this.length;

        
        var ind = Math.floor(end + start) / 2;

        
        if(!search) {return "Nothing to search";}

        
        if(result[ind] == search)
           { return ind;}

       
        else if(result[ind] < search)

            
            {return result.Search(search, ind, end);}
        else


            
            {return result.Search(search, start, ind);}
    }
