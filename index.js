// Wrapping the whole extension in a JS function 
// (ensures all global variables set in this extension cannot be referenced outside its scope)
(async function(codioIDE, window) {

  // register(id: unique button id, name: name of button visible in Coach, function: function to call when button is clicked) 
  codioIDE.coachBot.register("customHintsJupyter", "MG TEST", onButtonPress)

  // function called when I have a question button is pressed
  async function onButtonPress() {

    // automatically collects all available context 
    let context = await codioIDE.coachBot.getContext()
    // console.log(context)
    codioIDE.coachBot.write("Moose!")
    codioIDE.coachBot.write(context.guidesPage)
    
  }

})(window.codioIDE, window)