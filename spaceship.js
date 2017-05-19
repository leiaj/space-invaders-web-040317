class Spaceship{
  constructor(name, crew, phasers, shields){
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.crew = crew
    if (this.crew.length > 0) {
      this.docked = false
      for (var i = 0; i < this.crew.length; i++) {
        this.crew[i].currentShip = this
      }
    }else{
      this.docked = true
    }//end of if statement
  } //end of constructor






}
