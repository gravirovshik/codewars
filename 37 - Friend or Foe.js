function friend(friends){
    let result = []
    for(f of friends){
        if (f.length === 4) {
            result.push(f);
        };
    }
    console.log(result);
  }


  friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]);


  function friend(friends){
    return friends.filter(n => n.length === 4)
  };