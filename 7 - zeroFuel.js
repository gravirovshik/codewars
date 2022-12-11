const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft
  };

function zeroFuel(distanceToPump, mpg, fuelLeft) {
    return (distanceToPump > mpg * fuelLeft) ? false : true;
  }