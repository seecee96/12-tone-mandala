function voiceProcess(goldenArray, incomingArray) {
  
  //what notes are the same?
  function passOver(currentArray, previousArray) {
    let unchangedNotes = [];

    for (let i = 0; i < previousArray.length; i++) {
      for (let j = 0; j < currentArray.length; j++) {
        if (previousArray[i].pitch == currentArray[j]) {
          unchangedNotes.push(previousArray[i]);
        }
      }
    }
    return unchangedNotes;
  }

  function changeOver(currentArray, previousArray) {
    let changedNotes = [];
    for (let i = 0; i < previousArray.length; i++) {
      for (let j = 0; j < currentArray.length; j++) {
        if (previousArray[i].pitch != currentArray[j]) {
          changedNotes.push(previousArray[i]);
        }
      }
    }
    return changedNotes;
  }

  //what notes are new?
  function reaper(currentArray, previousArray) {
    let grimArray = [];
    //copying contents of an array to another array
    for (let i = 0; i < currentArray.length; i++) {
      grimArray.push(currentArray[i]);
    }

    for (let i = 0; i < previousArray.length; i++) {
      for (let j = 0; j < currentArray.length; j++) {
        let pitch = currentArray[j];
        if (previousArray[i].pitch == pitch) {
          let indexToRemove = grimArray.indexOf(pitch);

          grimArray.splice(indexToRemove, 1);
        }
      }
    }

    return grimArray;
  }

  //what notes have changed from previous?
  function prevReaper(previousArray, unchangedArray) {
    let prevArray = [];
    //copying contents of an array to another array
    for (let i = 0; i < previousArray.length; i++) {
      prevArray.push(previousArray[i]);
    }

    for (let i = 0; i < previousArray.length; i++) {
      for (let j = 0; j < unchangedArray.length; j++) {
        let object = prevArray[i];
        if (unchangedArray[j] == object) {
          let indexToRemove = prevArray.indexOf(object);

          prevArray.splice(indexToRemove, 1);
        }
      }
    }

    return prevArray;
  }

  function closest(needle, haystack) {
    return haystack.reduce((a, b) => {
      let aDiff = Math.abs(a - needle);
      let bDiff = Math.abs(b - needle);

      if (aDiff == bDiff) {
        return a < b ? a : b;
      } else {
        return bDiff < aDiff ? b : a;
      }
    });
  }

  function closestAlt(needle, haystack) {
    return haystack.reduce((a, b) => {
      let aDiff = Math.abs(a - needle);
      let bDiff = Math.abs(b - needle);

      if (aDiff == bDiff) {
        return a > b ? a : b;
      } else {
        return bDiff < aDiff ? b : a;
      }
    });
  }

  let transmutedArray = [];
  let finishedArray = [];
  let ultimateArray = [];

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function voiceAssigner(
    changingNotes,
    changedToNotes,
    unchangedNotes,
    previousArray
  ) {
    let changingVoices = [];
    let completeTrigger = 0;
    //MUST BE PUT IN AN ITERATING FUNCTION AKA REPEAT UNTIL ONE OF THE ARRAYS IS EMPTY
    //if changingNotes is empty, but changedToNotes is not, then those notes will be added as new voices
    //if changedToNotes is empty, but changingNotes is not, do nothing, as finishedArray (combined with unchanged) will be ultimate
    //if they're both empty...hooray!!!

    //start itteration scope
    for (; completeTrigger < 1; ) {
      if (transmutedArray.length > 0||transmutedArray.length==0&&changedToNotes.length==0&&changingNotes.length==0&&unchangedNotes.length==0&&finishedArray.length==0||transmutedArray.length==0&&unchangedNotes.length==0&&changedToNotes.length==0&&changingNotes.length>0&&finishedArray.length==0) {
     //   console.log("PROCESS COMPLETE!!!", "(:");
        for (let i = 0; i < transmutedArray.length; i++) {
          goldenArray.push(transmutedArray[i]);
        }
        completeTrigger = 2;
        
        ///////////////start of fukaround
        /*
        let golVoice =[]
        let golPitch =[]
        for (let i = 0; i < goldenArray.length; i++) {
          golVoice.push(goldenArray[i].voice)
          golPitch.push(goldenArray[i].pitch)
        }
        console.log('vV',golVoice)
                console.log('vP',golPitch)

        */
        ///////////////end of fukaround
      }

      //start regular realm scope
      if (changingNotes.length <= changedToNotes.length) {
        //start voice creator scope
        if (
          changingNotes.length == 0 &&
          changedToNotes.length > 0 &&
          transmutedArray.length == 0
        ) {
     //     console.log("creating new voices ");
          let builderArray = [];
          let oldVoiceMax = 0;
          if (previousArray.length > 0) {
            oldVoiceMax =
              Math.max.apply(
                Math,
                previousArray.map(function(o) {
                  return o.voice;
                })
              ) + 1;
          }

          for (let i = 0; i < changedToNotes.length; i++) {
            var birther = new Object();
            birther.pitch = changedToNotes[i];
            birther.voice = oldVoiceMax + i;
            builderArray.push(birther);
          }

          Array.prototype.push.apply(ultimateArray, unchangedNotes);
          Array.prototype.push.apply(ultimateArray, builderArray);
          Array.prototype.push.apply(ultimateArray, finishedArray);

          ultimateArray.sort((a, b) => (a.pitch > b.pitch ? 1 : -1));
          transmutedArray = [
            ...new Map(
              ultimateArray.map(item => [JSON.stringify(item), item])
            ).values()
          ];

          unchangedNotes = [];
          finishedArray = [];
          //does not cleat changedToNotes, not sure why
          changedToNotes = [];
        } //END voice creator scope

         //start sneeky scope
        if (
          changingNotes.length == 0 &&
          changedToNotes.length == 0 &&
          finishedArray.length == 0 &&
          unchangedNotes.length > 0
        ) {
       for (let i = 0; i < unchangedNotes.length; i++) {
            transmutedArray.push(unchangedNotes[i]);
          }
  changingNotes=[]
  
  
}//END sneaky scope
        
        //start finisher scope
        if (
          changingNotes.length == 0 &&
          changedToNotes.length == 0 &&
          finishedArray.length > 0
        ) {
      //    console.log("finish him!");
          for (let i = 0; i < finishedArray.length; i++) {
            transmutedArray.push(finishedArray[i]);
          }
          for (let i = 0; i < unchangedNotes.length; i++) {
            transmutedArray.push(unchangedNotes[i]);
          }

          transmutedArray.sort((a, b) => (a.pitch > b.pitch ? 1 : -1));

          finishedArray = [];
        } //END finisher scope

        
        
        /////////////
        ///////////
        ///////////
        //cnp defined
        let changingNotesPitches = [];
        for (let i = 0; i < changingNotes.length; i++) {
          changingNotesPitches.push(changingNotes[i].pitch);
        }

        //start 1LEF scope
        if (
          (changedToNotes.length == 1 && changingNotes.length == 1) ||
          (changedToNotes.length > 1 && changingNotes.length == 1)
        ) {
          const firstPitch = changingNotes[0].pitch;
          let closestFirstPitch = closest(firstPitch, changedToNotes);

          changingNotes[0].pitch = closestFirstPitch;
          finishedArray.push(changingNotes[0]);
          changingNotes.splice(0, 1);
           changingNotesPitches.splice(0, 1);
          changedToNotes.splice(changedToNotes.indexOf(closestFirstPitch), 1);
        //  console.log("1LEF", finishedArray);
        //  console.log("cn", changingNotes);
         // console.log("ctn", changedToNotes);
        } //END 1LEF scope

        //start more than 1 left scope
        if (
          (changedToNotes.length > 1 && changingNotes.length > 1) ||
          (changedToNotes.length == 1 && changingNotes.length > 1)
        ) {
          const firstPitch = changingNotes[0].pitch;
          const secondPitch = changingNotes[1].pitch;

          let closestFirstPitch = closest(firstPitch, changedToNotes);
          let closestSecondPitch = closest(secondPitch, changedToNotes);

          let closestFirstPitchAlt = closestAlt(firstPitch, changedToNotes);
          let closestSecondPitchAlt = closestAlt(secondPitch, changedToNotes);

          const disputeFlag = closestFirstPitch == closestSecondPitch;
          const nonDisputeFlag = closestFirstPitch != closestSecondPitch;

          //start no dispute scope
          if (nonDisputeFlag) {
            changingNotes[0].pitch = closestFirstPitch;
            finishedArray.push(changingNotes[0]);
            changingNotes.splice(0, 1);
                       changingNotesPitches.splice(0, 1);

            changedToNotes.splice(changedToNotes.indexOf(closestFirstPitch), 1);
           // console.log("nd", finishedArray);
          //  console.log("cn", changingNotes);
       //     console.log("ctn", changedToNotes);
          } //END no dispute scope

          //start dispute scope
          if (disputeFlag) {
            //start shiftup scope
            if (
              changedToNotes[0] >
              changingNotesPitches[changingNotesPitches.length - 1]
            ) {
              changingNotes[0].pitch = changedToNotes[0];
              finishedArray.push(changingNotes[0]);
              changingNotes.splice(0, 1);
                         changingNotesPitches.splice(0, 1);

              changedToNotes.splice(0, 1);
           //   console.log("shiftup", finishedArray);
        //      console.log("cn", changingNotes);
        //      console.log("ctn", changedToNotes);
            } //END shiftup scope

            //start shiftdown scope
            if (
              changedToNotes[changedToNotes.length - 1] <
              changingNotesPitches[0]
            ) {
       //       console.log(changingNotes);
         //     console.log(changingNotesPitches);
        //      console.log(changingNotesPitches.length - 1);
              changingNotes[changingNotesPitches.length - 1].pitch =
                changedToNotes[changedToNotes.length - 1];
              finishedArray.push(
                changingNotes[changingNotesPitches.length - 1]
              );
              changingNotes.splice(changingNotesPitches.length - 1, 1);
                         changingNotesPitches.splice(changingNotesPitches.length -1, 1);

              changedToNotes.splice(changedToNotes.length - 1, 1);
          //    console.log("shiftdown", finishedArray);
          //    console.log("cn", changingNotes);
           //   console.log("ctn", changedToNotes);
            } //END shiftdown scope

            //start non-shift scope
            if (
              changedToNotes[0] <
                changingNotesPitches[changingNotesPitches.length - 1] &&
              changedToNotes[changedToNotes.length - 1] >
                changingNotesPitches[0]
            ) {
              const closestPitch = closestFirstPitch;

              const firstDistance = Math.abs(firstPitch - closestPitch);
              const secondDistance = Math.abs(secondPitch - closestPitch);

              //if first note is closer OR equal distance to second note, first note wins
              //start f<=s scope
              if (firstDistance <= secondDistance) {
                changingNotes[0].pitch = closestPitch;
                finishedArray.push(changingNotes[0]);
                changingNotes.splice(0, 1);
                           changingNotesPitches.splice(0, 1);

                changedToNotes.splice(changedToNotes.indexOf(closestPitch), 1);
               // console.log("f<=s", finishedArray);
             //   console.log("cn", changingNotes);
              //  console.log("ctn", changedToNotes);
              } //END f<=s scope

              //if first note is not a shorter distance
              //start f>s scope
              if (firstDistance > secondDistance) {
                //in the case that there is another note of equal distance for the second note (like 60 being equal distANCE TO 59 AND 61),
                //start sp!= spALT scope
                if (closestSecondPitch != closestSecondPitchAlt) {
                  changingNotes[0].pitch = closestPitch;
                  finishedArray.push(changingNotes[0]);
                  changingNotes.splice(0, 1);
                             changingNotesPitches.splice(0, 1);

                  changedToNotes.splice(
                    changedToNotes.indexOf(closestPitch),
                    1
                  );
                 // console.log("sp!=spALT", finishedArray);
                //  console.log("cn", changingNotes);
                //  console.log("ctn", changedToNotes);
                } //END sp!= spALT scope

                //in the case that there is no other note of equal distance to the second note
                //start sp==spALT scope
                if (closestSecondPitch == closestSecondPitchAlt) {
                  let index = changedToNotes.indexOf(closestPitch);

                  changingNotes[1].pitch = closestPitch;
                  finishedArray.push(changingNotes[1]);
                  changingNotes.splice(1, 1);
                             changingNotesPitches.splice(1, 1);

                  changedToNotes.splice(index, 1);
                 // console.log("sp==spALT", finishedArray);
                //  console.log("cn", changingNotes);
                //  console.log("ctn", changedToNotes);
                } //END sp==spALT scope
              } //END f>s scope
            } // END non-shift scope
          } //END dispute scope
        } //END more than 1 left scope
      } //END regular realm scope AKA non~~~
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////mlaer sdrawkcab eht~~~~~~~~~~~~~~~~~~~~~~~the backwards realm/////////////////////////////////////
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      //start backwards realm (aka ~ ) scope
      if (changingNotes.length > changedToNotes.length) {
        
        
        
        //start ~sneeky scope
        if (
          changingNotes.length > 0 &&
          changedToNotes.length == 0 &&
          finishedArray.length == 0 &&
          unchangedNotes.length > 0
        ) {
       for (let i = 0; i < unchangedNotes.length; i++) {
            transmutedArray.push(unchangedNotes[i]);
          }
  changingNotes=[]
  
  
}//END ~sneaky scope
        //start ~finisher scope
        if (changedToNotes == 0 && finishedArray.length > 0) {
        //  console.log("~finish him!!!");
          for (let i = 0; i < finishedArray.length; i++) {
            transmutedArray.push(finishedArray[i]);
          }
          for (let i = 0; i < unchangedNotes.length; i++) {
            transmutedArray.push(unchangedNotes[i]);
          }

          transmutedArray.sort((a, b) => (a.pitch > b.pitch ? 1 : -1));

          finishedArray = [];
        } //END ~finisher scope

        //start ~1lef
        if (changedToNotes.length == 1 && changingNotes.length > 1) {
          const firstPitch = changedToNotes[0];

          let changingNotesPitches = [];
          for (let i = 0; i < changingNotes.length; i++) {
            changingNotesPitches.push(changingNotes[i].pitch);
          }
          let closestFirstPitch = closest(firstPitch, changingNotesPitches);

          let index = changingNotesPitches.indexOf(closestFirstPitch);
          changingNotes[index].pitch = firstPitch;
          finishedArray.push(changingNotes[index]);
          changingNotes.splice(index, 1);
                     changingNotesPitches.splice(index, 1);

          changedToNotes.splice(0, 1);

        //  console.log("cn", changingNotes);
        //  console.log("ctn", changedToNotes);
         // console.log("~1lef", finishedArray);
        } //END ~1lef scope

        //start ~more than one left scope
        if (changedToNotes.length > 1 && changingNotes.length > 1) {
          const firstPitch = changedToNotes[0];
          const secondPitch = changedToNotes[1];

          let changingNotesPitches = [];
          for (let i = 0; i < changingNotes.length; i++) {
            changingNotesPitches.push(changingNotes[i].pitch);
          }

          let closestFirstPitch = closest(firstPitch, changingNotesPitches);
          let closestSecondPitch = closest(secondPitch, changingNotesPitches);

          let closestFirstPitchAlt = closestAlt(
            firstPitch,
            changingNotesPitches
          );
          let closestSecondPitchAlt = closestAlt(
            secondPitch,
            changingNotesPitches
          );

          const disputeFlag = closestFirstPitch == closestSecondPitch;
          const nonDisputeFlag = closestFirstPitch != closestSecondPitch;

          //start ~no dispute scope
          if (nonDisputeFlag) {
            let index = changingNotesPitches.indexOf(closestFirstPitch);

            changingNotes[index].pitch = firstPitch;
            finishedArray.push(changingNotes[index]);
            changingNotes.splice(index, 1);
                       changingNotesPitches.splice(index, 1);

            changedToNotes.splice(0, 1);

          // console.log("~nd", finishedArray);
          //  console.log("cn", changingNotes);
        //    console.log("ctn", changedToNotes);
          } //END ~no dispute scope

          //start ~dispute scope
          if (disputeFlag) {
            let length = changedToNotes.length - 1;
            let lastNote = changedToNotes[length];

            const closestPitch = closestFirstPitch;
            const firstDistance = Math.abs(firstPitch - closestPitch);
            const secondDistance = Math.abs(secondPitch - closestPitch);

            //start ~shiftup scope
            if (changingNotesPitches[0] > lastNote) {
               let closestFirstPitch = closest(firstPitch, changingNotesPitches);
          let closestSecondPitch = closest(secondPitch, changingNotesPitches);

          let closestFirstPitchAlt = closestAlt(
            firstPitch,
            changingNotesPitches
          );
          let closestSecondPitchAlt = closestAlt(
            secondPitch,
            changingNotesPitches
          );

              let index = changingNotesPitches.indexOf(closestFirstPitch);

              changingNotes[0].pitch = changedToNotes[0];
              finishedArray.push(changingNotes[0]);
              changingNotes.splice(0, 1);
                  changingNotesPitches.splice(0, 1);
              changedToNotes.splice(0, 1);
             // console.log("~shiftup", finishedArray);
         //     console.log("cn", changingNotes);
         //     console.log("ctn", changedToNotes);
         //     console.log(changingNotesPitches);
            } //END ~shiftup scope

            //start ~shiftdown scope
            if (
              changingNotesPitches[changingNotesPitches.length - 1] <
              changedToNotes[0]
            ) {
             // console.log('cn',changingNotes.length)
          //    console.log('cnp',changingNotesPitches.length)

         


              changingNotes[changingNotesPitches.length - 1].pitch =
                changedToNotes[changedToNotes.length - 1];
              finishedArray.push(
                changingNotes[changingNotesPitches.length - 1]
              );
              changingNotes.splice(changingNotesPitches.length - 1, 1);
                         changingNotesPitches.splice(changingNotesPitches.length -1, 1);

              changedToNotes.splice(changedToNotes.length - 1, 1);
           //   console.log("~shiftdown", finishedArray);
          //    console.log("cn", changingNotes);
          //    console.log("ctn", changedToNotes);
            } //END ~shiftdown scope

            //start ~non-shift scope
            if (
              changingNotesPitches[0] < lastNote &&
              changingNotesPitches[changingNotesPitches.length - 1] >
                changedToNotes[0]
            ) {
              //start ~f<=s scope
              if (firstDistance <= secondDistance) {
                
                let closestFirstPitch = closest(firstPitch, changingNotesPitches);
          let closestSecondPitch = closest(secondPitch, changingNotesPitches);
                let index = changingNotesPitches.indexOf(closestFirstPitch);

                changingNotes[index].pitch = firstPitch;
                finishedArray.push(changingNotes[index]);
                changingNotes.splice(index, 1);
                           changingNotesPitches.splice(index, 1);

                changedToNotes.splice(0, 1);
         //       console.log("~f<=s", finishedArray);
           //     console.log("cn", changingNotes);
           //     console.log("ctn", changedToNotes);
              } //END ~f<=s scope

              //start ~f>s scope
              if (firstDistance > secondDistance) {
               // console.log("~f>s");

                //start ~sp!=spALT scope
                if (closestSecondPitch != closestSecondPitchAlt) {
                  
                  
                 
                   let closestFirstPitch = closest(firstPitch, changingNotesPitches);
          let closestSecondPitch = closest(secondPitch, changingNotesPitches);

      

                  let index = changingNotesPitches.indexOf(closestFirstPitch);

                  changingNotes[index].pitch = firstPitch;
                  finishedArray.push(changingNotes[index]);
                  changingNotes.splice(index, 1);
                             changingNotesPitches.splice(index, 1);

                  changedToNotes.splice(0, 1);
           //       console.log("~sp!=spALT", finishedArray);
              //    console.log("cn", changingNotes);
              //    console.log("ctn", changedToNotes);
                } //END ~sp!=spALT scope

                //start ~sp==spALT scope
                
                
                
                if (closestSecondPitch == closestSecondPitchAlt) {
                  
                  
                  
                  
                   //////////////
                  ///////////
                  //////////////
                  //this was the fixer for the greatful dead prank
                  
                   let closestFirstPitch = closest(firstPitch, changingNotesPitches);
          let closestSecondPitch = closest(secondPitch, changingNotesPitches);

      
 
                  
                  
                  let index = changingNotesPitches.indexOf(closestSecondPitch);
               
                                  

//troublemaker below
                  changingNotes[index].pitch = secondPitch;
                  finishedArray.push(changingNotes[index]);
                  changingNotes.splice(index, 1);
                             changingNotesPitches.splice(index, 1);

                  changedToNotes.splice(1, 1);
             //     console.log("~sp==spALT", finishedArray);
             //     console.log("cn", changingNotes);
             //     console.log("ctn", changedToNotes);
                } //END ~sp==spALT scope
              } //END ~f>s scope
            } //END ~non-shift scope
          } //END ~dispute scope
        } //END ~more than one left scope
      } //END backwards realm (aka ~ ) scope
    } // END itteration scope
    transmutedArray = [];
  } //END voiceAssigner

  let previousArray = [];
  for (let i = 0; i < goldenArray.length; i++) {
    previousArray.push(goldenArray[i]);
  }
  goldenArray = [];
  
  let currentArray = [];
  for (let i = 0; i < incomingArray.length; i++) {
    currentArray.push(incomingArray[i]);
  }
  

  
  let unchangedNotes = passOver(currentArray, previousArray);
  let changedToNotes = reaper(currentArray, previousArray);
  let changingNotes = prevReaper(previousArray, unchangedNotes);
  voiceAssigner(changingNotes, changedToNotes, unchangedNotes, previousArray);
  changedToNotes = [];
//  console.log('---')
  return goldenArray
}



//alchemical function
//voiceProcess(goldenArray,incomingArray);
//console.log("goldAR", goldenArray);








//let goldenArray = []

//let incomingArray = [62,74]

//let outputArray = voiceProcess(goldenArray, incomingArray)

//console.log(outputArray)