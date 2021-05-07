//deltaTime refers to number of micro-slices since last event
//type refers to type of midi message (note on/off etc.)
//channel is midi channel
//data contains midiNote value first, then velocity value
//anything with a metaType refers to setup info (such as time signature)

let pauz = true


class MidiPlayer {
  
  constructor(pauz) {
    this.goldenArray = [];
    this.activeArray = [];
    this.drawingArray = [];
    this.updateArray = [];
    this.showArray = []
    this.BPM = globalBPM;  
    this.goldenLatch = false 
    this.isPlaying = true
    this.delayComplete = true
    this.ready = true
  }

  deltaToTime(BPM, delta) {
    return (delta / 48) * (1 / (BPM / 60)) * 500;
  }

  createDrawingArray(activeArray, drawingArray) {
    let drawingArrayDude = [];
    for (let i = 0; i < activeArray.length; i++) {
      drawingArrayDude.push(activeArray[i] % 12);
    }

    //removes duplicates in the array
    let drawingSet = [...new Set(drawingArrayDude)];
    return drawingArrayDude;
    //jddg  ggh
  }

  updateActiveArray(activeArray, onoffNote,pauz) {
    
    // so now, onoffNote.type and onoffNote.data[0] exist

    //////////
    ////////
    ////////
    //if you put the play if statment here, it stops playing midi, but resumes where it would be if you kept playing the midi file
    
    if (onoffNote.type == 9) {
      this.activeArray.push(onoffNote.data[0]);
    } else if (onoffNote.type == 8) {
      this.activeArray.splice(activeArray.indexOf(onoffNote.data[0]), 1);
    }
    activeArray.sort();
    /////////////////////
    //   console.log('Active:',activeArray)

    this.drawingArray = this.createDrawingArray(activeArray, this.drawingArray);
    //////////////////////////////////////////////////////
    // console.log('Mod-12:',drawingArray)
    //console.log('-----------------')
  }

  stop(){
   this.isPlaying=false
       this.goldenArray = [];
    this.activeArray = [];
    this.drawingArray = [];
    this.updateArray = [];
    this.showArray = []
    this.goldenLatch = true 
//    console.log('STOP')
     //   console.log('STOP')
  //    console.log('STOP')
  }
  
  play(){
    
    if(this.isPlaying==false){
      midiPlayer.readMidi(midiTest)
      this.isPlaying=true
    }
    
  }
  
  playNotes(onoffNotes, activeArray, voiceArray, goldenArray, updateArray) {
        this.delayComplete=false
    
    

   // console.log('open',this.delayComplete,'r',this.ready)
    // console.log(activeArray)
    /* if(this.isPlaying==false){
      
      onoffNotes[0].deltaTime=1
    }
    */
 
    
      var currentDelta = onoffNotes[0].deltaTime;
    let activeArrayClone = [];
    if (currentDelta >= globalLatch) {
      goldenArray = voiceProcess(goldenArray, activeArray);
      this.showArray = goldenArray
      this.goldenLatch = true
      //  updateGoldenArray(goldenArray)
      // call some function to update voice array
      // updateArray = goldenArray
      // right here
      // console.log(updateArray);
      // console.log('AA',activeArray)
  

      //console.log(goldenArray)

      // let outputArray = voiceProcess(goldenArray, activeArray)
      // console.log(activeArray,currentDelta)
      // console.log(activeArray)
    }
   this.BPM = slider2.value();
    // console.log(currentDelta)
    
    let delay = this.deltaToTime(this.BPM, currentDelta);
    
    /////////////////////////////////////
    // console.log('ms:',delay,'del:',currentDelta)
    // you can move this line
    // updateActiveArray(activeArray, onoffNotes)
    // here is a fix for that
   

    let onoffNote = onoffNotes[0];
if(pauz==true){
   onoffNote = empty
  
}

    //remeber to pass activeArray, and onoffEvents
    //remove the processed/current  or first element of the array,
    if(pauz==false){
    onoffNotes.shift();
    }
    //do we continue?
    setTimeout(() => {
      if (onoffNotes.length == 0) {
        this.updateActiveArray(activeArray, onoffNote);
        goldenArray = [];
        console.log(goldenArray[0]);
                    this.ready=true
                this.delayComplete=true


      }

      if (onoffNotes.length > 0 && this.isPlaying == true ) {
        
        this.updateActiveArray(activeArray, onoffNote);

        this.playNotes(onoffNotes, activeArray, voiceArray, goldenArray);
            this.ready=false
      //  console.log('midready')

      }
     if(this.isPlaying==false){
           this.ready=true

     }
      
        this.delayComplete=true
      
         // console.log('mid',this.delayComplete,'r',this.ready)

   

      // down here
      // updateActiveArray(activeArray, onoffNote)
      //making sure its only looking at notes in time (not timeless)
      // vocalize(activeArray)
    }, delay);
        this.delayComplete=false
   
   // console.log('close',this.delayComplete,'r',this.ready)
    //console.log('-----')


  }
  

  readMidi(midiSong) {
    
    //track[0] calls specific array
    //makes event into its own thing
    const events = midiSong.track[0].event;
    //only look at within events the ones with type 8 or 9
    const onoffEvents = events.filter(
      event => event.type == 8 || event.type == 9
    );
    onoffEvents[0].deltaTime = onoffEvents[0].deltaTime + 330;
    //when changing arrays in a funcion, it passes the same array with changes youve made, vs. and int would completly change the int

    // console.log('look',onoffEvents[0].deltaTime)
    let voiceArray = [];
    
    this.playNotes(onoffEvents, this.activeArray, voiceArray, this.goldenArray);
    //console.log('delta',goldenArray[0],goldenArray[1],goldenArray[2],goldenArray[3],goldenArray[4],goldenArray[5],goldenArray[6],goldenArray[7],goldenArray[8],goldenArray[9],goldenArray[10],)
  }
}

// this.readMidi(midiTest)
