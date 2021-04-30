class SoundMaker {  

  //give ability to concieve of x and y variables (to be given cordniants)
  constructor() {
    this.synth = new Tone.PolySynth(Tone.Synth).toDestination();
    this.now = Tone.now()
    this.previousState = false
    this.active = false
    this.noteArray = []
   // for (let i = 0; i < 36; i++) {
    let pitch = midiNumberToPitch(61)
    
    //this.synth.triggerAttackRelease(pitch, '8n')
  }


  //const poly = new Tone.PolySynth(Tone.AMSynth).toDestination();
  //poly.triggerAttack(["Ab3", "C4", "F5"]);  
  //trigger the release of the given notes.
  //poly.triggerRelease(["Ab3", "C4"], "+1");
  //poly.triggerRelease("F5", "+3");
  
  update(activeArray) {
    if (this.noteArray != activeArray) {
        
    }
  }
}





  function maat (activeArray,playerArray){
    
  
  for(let i = 0; i < activeArray.length; i++){
  if(playerArray.includes(activeArray[i])){
    //do nothing
    }
    else{
      playerArray.push(activeArray[i])
      this.synth.triggerAttack(midiNumberToPitch(activeArray[i]))
    }
  }
    
    
    
    
    for(let i = 0; i < playerArray.length; i++){
    if (activeArray.includes(playerArray[i])){
      //do nothing
      
    }
      
      else{
        playerArray.splice(i,1)
         this.synth.triggerRelease(midiNumberToPitch(playerArray[i]))
      }
    
    
  }
}





function midiNumberToPitch (midiNumber) {
  let octave = Math.floor(midiNumber / 12) - 1
  let pitch = midiNumber%12
  let pitchNames = ['C','Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
  
  return pitchNames[pitch] + octave
}

