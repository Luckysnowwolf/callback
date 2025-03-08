const displayFactoid = (factoid, callback) => {
    setTimeout(() => {
      console.log(factoid);
      callback();
    }, 2000);
  };


  const getName = (callback) => {
    displayFactoid("my name is Lucas.W", callback);
  };
  
  const getAge = (callback) => {
    displayFactoid("I am 26 years old", callback);
  };
  
  const getLocations = (callback) => {
    displayFactoid("im from Sweden", callback);
  };
  
  const getHobbies = (callback) => {
    displayFactoid("my hobbies are coding and gaming", callback);
  };
  
  getName(() => {
    getAge(() => {
      getLocations(() => {
        getHobbies(() => {});
      });
    });
  });
