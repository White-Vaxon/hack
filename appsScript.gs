function onOpen() {
  var presentation = SlidesApp.getActivePresentation();
  const ui = SlidesApp.getUi()
  ui.createMenu('memes')
    .addItem('Grumpy Cat', 'grumpyCat')
    .addSeparator()
    .addSubMenu(SlidesApp.getUi().createMenu('Dead Memes')
        .addItem('Doge', 'doge')
        .addItem('Pepe the frog', 'pepeFrog')
        )
    .addToUi();
}
function pepeFrog() {
  Browser.msgBox("Pepe", "He doesn't really speak.", Browser.Buttons.OK)
}
function doge() {
  Browser.msgBox("Doge", "wow. much doge. such memes.", Browser.Buttons.OK)
}
function grumpyCat() {
  var responses = ["I like the sound you make when you shut up.","I am now in heaven. \n\nI hate it.", "Some people just need a high-five. In the face. With a hammer.", "I like onions. They make people cry.", "You want to hear a joke about nitrous oxide?", "If you're happy and you know it, go to hell.", "They texted me 'plz' because it's shorter than 'please'. \nI answered 'no' because it's shorter than yes.", "I heard santa on the roof. So I turned on the fireplace.", "Free hugs? Go hug a cactus.", "Zombies eat brains. But don't worry, most of you have nothing to worry about.","You look like you need a hug. Keep walking."]
  var randomRes = random_item(responses)
  Browser.msgBox("Grumpy Cat Memes (from Google)", randomRes, Browser.Buttons.OK)
}


function random_item(items){  
  return items[Math.floor(Math.random()*items.length)];     
}
