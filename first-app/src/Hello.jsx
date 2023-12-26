function Hello(){
  var petName = 'Puppy'

  // Arrow function
  let fullName = () =>
  {
    return 'puppy';
  }
  return <h3>
    Is this {fullName()} is yours ?  
  </h3>
}

export default Hello;