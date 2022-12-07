const filterPeople = (array) => {
    return array.filter((object)=> {
      if(object.nationality === 'Australian' && object.bornIn >= 1901 && object.bornIn <= 2000) {
        return object
      }
    } );
  }
  console.log(filterPeople(people))