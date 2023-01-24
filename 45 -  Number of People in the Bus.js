var number = function(busStops){
    var people = 0;
     for (var i = 0; i < busStops.length; i++) {
       people = people + busStops[i][0] - busStops[i][1];
     }
     return people;
   }

//with reduce 
const number = (busStops) => busStops.reduce((people, [onboarded, offboarded]) => people + onboarded - offboarded, 0);