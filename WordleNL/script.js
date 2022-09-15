const targetWords = [
  "acryl",
  "affix",
  "aftyp",
  "ampex",
  "accus",
  "axels",
  "acces",
  "addax",
  "afbik",
  "afduw",
  "afpik",
  "afwis",
  "afzag",
  "afzak",
  "afzeg",
  "bobby",
  "buggy",
  "babys",
  "baggy",
  "buddy",
  "buxus",
  "bitch",
  "blijf",
  "bodys",
  "bogey",
  "bytes",
  "batch",
  "cycli",
  "campy",
  "crazy",
  "crypt",
  "chick",
  "citys",
  "curry",
  "check",
  "chijl",
  "chimp",
  "click",
  "cocci",
  "cyste",
  "chips",
  "cinch",
  "codex",
  "dizzy",
  "dolby",
  "dummy",
  "derby",
  "dolly",
  "dixit",
  "dicht",
  "ducht",
  "dacht",
  "dandy",
  "derny",
  "detox",
  "docht",
  "douch",
  "drijf",
  "dwaze",
  "epoxy",
  "enzym",
  "ethyl",
  "exact",
  "exces",
  "echec",
  "exlid",
  "expat",
  "expos",
  "echel",
  "essay",
  "exman",
  "extra",
  "echos",
  "echte",
  "edoch",
  "guppy",
  "gipsy",
  "gymde",
  "gyros",
  "gijpt",
  "glimp",
  "grijp",
  "gejij",
  "geluw",
  "gepuf",
  "glijd",
  "glipt",
  "gluip",
  "gruwt",
  "gulpt",
  "gabbe",
  "happy",
  "hobby",
  "husky",
  "hyper",
  "hypes",
  "hypet",
  "hypos",
  "hysop",
  "hapax",
  "heavy",
  "helix",
  "hypen",
  "hyven",
  "hydra",
  "hymen",
  "hymne",
  "intyp",
  "ijzig",
  "inbox",
  "ijzel",
  "ijsco",
  "ijzer",
  "index",
  "icing",
  "ijlst",
  "ijsje",
  "ijver",
  "ijzen",
  "ijdel",
  "ijker",
  "ijkte",
  "ijlde",
  "jazzy",
  "jurys",
  "jicht",
  "juich",
  "jacht",
  "jacks",
  "jozef",
  "jawel",
  "jouwt",
  "jubel",
  "jumbo",
  "jajem",
  "jalap",
  "jambe",
  "javel",
  "jemig",
  "kinky",
  "kwijl",
  "kruch",
  "kucht",
  "kwijt",
  "kwips",
  "kicks",
  "kickt",
  "kijft",
  "kocht",
  "krach",
  "kuche",
  "kwelm",
  "kwijn",
  "kicke",
  "kijkt",
  "lynch",
  "lobby",
  "lycra",
  "lymfe",
  "lolly",
  "lycea",
  "laque",
  "lysol",
  "ladys",
  "licht",
  "lucht",
  "luxer",
  "luxes",
  "lacht",
  "latex",
  "lijft",
  "mythe",
  "mixed",
  "mixer",
  "mixes",
  "mixte",
  "macht",
  "match",
  "mezzo",
  "mixen",
  "mocht",
  "macho",
  "meluw",
  "mikwa",
  "mikwe",
  "muffe",
  "murwt",
  "nimby",
  "nicht",
  "nylon",
  "nacht",
  "niche",
  "nijpt",
  "nixen",
  "nabij",
  "nanny",
  "nihil",
  "nijgt",
  "nipje",
  "nufje",
  "nabob",
  "naijl",
  "napje",
  "opzij",
  "omwip",
  "ofwel",
  "olijf",
  "opduw",
  "opheb",
  "ophef",
  "oppik",
  "opvul",
  "opwek",
  "opwel",
  "opzag",
  "opzak",
  "opzeg",
  "opzit",
  "oxers",
  "proxy",
  "puppy",
  "pique",
  "pixel",
  "paddy",
  "party",
  "pitch",
  "pizza",
  "pylon",
  "pacht",
  "panty",
  "patch",
  "pijpt",
  "pocht",
  "ponys",
  "prach",
  "query",
  "quilt",
  "quark",
  "quads",
  "quasi",
  "quant",
  "queue",
  "quota",
  "quote",
  "rugby",
  "rally",
  "remix",
  "riyal",
  "radix",
  "relax",
  "richt",
  "rouxs",
  "ready",
  "recht",
  "rijft",
  "rijpt",
  "ruche",
  "rabbi",
  "ranch",
  "rayon",
  "squaw",
  "schuw",
  "sulky",
  "sylfe",
  "schip",
  "schub",
  "sfinx",
  "shoyu",
  'spray',
  "syrah",
  'schab',
  "schaf",
  "schap",
  "schep",
  "schik",
  "schil",
  "thyrs",
  "tipsy",
  "tyfus",
  "tommy",
  "types",
  "typte",
  "toque",
  "twijg",
  "typen",
  "taxis",
  "taxol",
  "taxus",
  "teddy",
  "telex",
  "tjilp",
  "toddy",
  "uzelf",
  "unzip",
  "upper",
  "uglis",
  "uilig",
  "uitje",
  "uiver",
  "unica",
  "uwent",
  "uiige",
  "uitga",
  "ukken",
  "ultra",
  "unief",
  "ureum",
  "urmde",
  "vinyl",
  "vieux",
  "vacht",
  "vecht",
  "vlijm",
  "vocht",
  "vijlt",
  "vipje",
  "vlijt",
  "vlouw",
  "vamps",
  "vazal",
  "vezel",
  "views",
  "vijst",
  "vleze",
  "wicht",
  "wacht",
  "wijze",
  "winch",
  "wrijf",
  "wazig",
  "weckt",
  "wijkt",
  "wijlt",
  "wippe",
  "wulps",
  "webbe",
  "welft",
  "wezel",
  "whist",
  "wigje",
  "xerox",
  "xeres",
  "xenon",
  "yucca",
  "yells",
  "yogis",
  "yanks",
  "yards",
  'yelde',
  "yuans",
  "zloty",
  "zwijg",
  'zwijm',
  "zicht",
  "zucht",
  'zwalp',
  "zwamp",
  "zwilk",
  "zacht",
  "zocht",
  "zwalk",
  "zwelg",
  "zwerf",
  "zwiep",
  "zwijn",
  "zwikt"
]

const dictionary = [
  "acryl",
  "affix",
  "aftyp",
  "ampex",
  "accus",
  "axels",
  "acces",
  "addax",
  "afbik",
  "afduw",
  "afpik",
  "afwis",
  "afzag",
  "afzak",
  "afzeg",
  "bobby",
  "buggy",
  "babys",
  "baggy",
  "buddy",
  "buxus",
  "bitch",
  "blijf",
  "bodys",
  "bogey",
  "bytes",
  "batch",
  "cycli",
  "campy",
  "crazy",
  "crypt",
  "chick",
  "citys",
  "curry",
  "check",
  "chijl",
  "chimp",
  "click",
  "cocci",
  "cyste",
  "chips",
  "cinch",
  "codex",
  "dizzy",
  "dolby",
  "dummy",
  "derby",
  "dolly",
  "dixit",
  "dicht",
  "ducht",
  "dacht",
  "dandy",
  "derny",
  "detox",
  "docht",
  "douch",
  "drijf",
  "dwaze",
  "epoxy",
  "enzym",
  "ethyl",
  "exact",
  "exces",
  "echec",
  "exlid",
  "expat",
  "expos",
  "echel",
  "essay",
  "exman",
  "extra",
  "echos",
  "echte",
  "edoch",
  "guppy",
  "gipsy",
  "gymde",
  "gyros",
  "gijpt",
  "glimp",
  "grijp",
  "gejij",
  "geluw",
  "gepuf",
  "glijd",
  "glipt",
  "gluip",
  "gruwt",
  "gulpt",
  "gabbe",
  "happy",
  "hobby",
  "husky",
  "hyper",
  "hypes",
  "hypet",
  "hypos",
  "hysop",
  "hapax",
  "heavy",
  "helix",
  "hypen",
  "hyven",
  "hydra",
  "hymen",
  "hymne",
  "intyp",
  "ijzig",
  "inbox",
  "ijzel",
  "ijsco",
  "ijzer",
  "index",
  "icing",
  "ijlst",
  "ijsje",
  "ijver",
  "ijzen",
  "ijdel",
  "ijker",
  "ijkte",
  "ijlde",
  "jazzy",
  "jurys",
  "jicht",
  "juich",
  "jacht",
  "jacks",
  "jozef",
  "jawel",
  "jouwt",
  "jubel",
  "jumbo",
  "jajem",
  "jalap",
  "jambe",
  "javel",
  "jemig",
  "kinky",
  "kwijl",
  "kruch",
  "kucht",
  "kwijt",
  "kwips",
  "kicks",
  "kickt",
  "kijft",
  "kocht",
  "krach",
  "kuche",
  "kwelm",
  "kwijn",
  "kicke",
  "kijkt",
  "lynch",
  "lobby",
  "lycra",
  "lymfe",
  "lolly",
  "lycea",
  "laque",
  "lysol",
  "ladys",
  "licht",
  "lucht",
  "luxer",
  "luxes",
  "lacht",
  "latex",
  "lijft",
  "mythe",
  "mixed",
  "mixer",
  "mixes",
  "mixte",
  "macht",
  "match",
  "mezzo",
  "mixen",
  "mocht",
  "macho",
  "meluw",
  "mikwa",
  "mikwe",
  "muffe",
  "murwt",
  "nimby",
  "nicht",
  "nylon",
  "nacht",
  "niche",
  "nijpt",
  "nixen",
  "nabij",
  "nanny",
  "nihil",
  "nijgt",
  "nipje",
  "nufje",
  "nabob",
  "naijl",
  "napje",
  "opzij",
  "omwip",
  "ofwel",
  "olijf",
  "opduw",
  "opheb",
  "ophef",
  "oppik",
  "opvul",
  "opwek",
  "opwel",
  "opzag",
  "opzak",
  "opzeg",
  "opzit",
  "oxers",
  "proxy",
  "puppy",
  "pique",
  "pixel",
  "paddy",
  "party",
  "pitch",
  "pizza",
  "pylon",
  "pacht",
  "panty",
  "patch",
  "pijpt",
  "pocht",
  "ponys",
  "prach",
  "query",
  "quilt",
  "quark",
  "quads",
  "quasi",
  "quant",
  "queue",
  "quota",
  "quote",
  "rugby",
  "rally",
  "remix",
  "riyal",
  "radix",
  "relax",
  "richt",
  "rouxs",
  "ready",
  "recht",
  "rijft",
  "rijpt",
  "ruche",
  "rabbi",
  "ranch",
  "rayon",
  "squaw",
  "schuw",
  "sulky",
  "sylfe",
  "schip",
  "schub",
  "sfinx",
  "shoyu",
  'spray',
  "syrah",
  'schab',
  "schaf",
  "schap",
  "schep",
  "schik",
  "schil",
  "thyrs",
  "tipsy",
  "tyfus",
  "tommy",
  "types",
  "typte",
  "toque",
  "twijg",
  "typen",
  "taxis",
  "taxol",
  "taxus",
  "teddy",
  "telex",
  "tjilp",
  "toddy",
  "uzelf",
  "unzip",
  "upper",
  "uglis",
  "uilig",
  "uitje",
  "uiver",
  "unica",
  "uwent",
  "uiige",
  "uitga",
  "ukken",
  "ultra",
  "unief",
  "ureum",
  "urmde",
  "vinyl",
  "vieux",
  "vacht",
  "vecht",
  "vlijm",
  "vocht",
  "vijlt",
  "vipje",
  "vlijt",
  "vlouw",
  "vamps",
  "vazal",
  "vezel",
  "views",
  "vijst",
  "vleze",
  "wicht",
  "wacht",
  "wijze",
  "winch",
  "wrijf",
  "wazig",
  "weckt",
  "wijkt",
  "wijlt",
  "wippe",
  "wulps",
  "webbe",
  "welft",
  "wezel",
  "whist",
  "wigje",
  "xerox",
  "xeres",
  "xenon",
  "yucca",
  "yells",
  "yogis",
  "yanks",
  "yards",
  'yelde',
  "yuans",
  "zloty",
  "zwijg",
  'zwijm',
  "zicht",
  "zucht",
  'zwalp',
  "zwamp",
  "zwilk",
  "zacht",
  "zocht",
  "zwalk",
  "zwelg",
  "zwerf",
  "zwiep",
  "zwijn",
  "zwikt"
]

console.log(dictionary)
const WORD_LENGTH = 5
const FLIP_ANIMATION_DURATION = 500
const DANCE_ANIMATION_DURATION = 500
const keyboard = document.querySelector("[data-keyboard]")
const alertContainer = document.querySelector("[data-alert-container]")
const guessGrid = document.querySelector("[data-guess-grid]")
const offsetFromDate = new Date(2022, 0, 1)
const msOffset = Date.now() - offsetFromDate
const dayOffset = msOffset / 1000 / 60 / 60 / 24
const targetWord = targetWords[Math.floor(Math.random() * targetWords.length)]

startInteraction()

function startInteraction() {
  document.addEventListener("click", handleMouseClick)
  document.addEventListener("keydown", handleKeyPress)
}

function stopInteraction() {
  document.removeEventListener("click", handleMouseClick)
  document.removeEventListener("keydown", handleKeyPress)
}

function handleMouseClick(e) {
  if (e.target.matches("[data-key]")) {
    pressKey(e.target.dataset.key)
    return
  }

  if (e.target.matches("[data-enter]")) {
    submitGuess()
    return
  }

  if (e.target.matches("[data-delete]")) {
    deleteKey()
    return
  }
}

function handleKeyPress(e) {
  if (e.key === "Enter") {
    submitGuess()
    return
  }

  if (e.key === "Backspace" || e.key === "Delete") {
    deleteKey()
    return
  }

  if (e.key.match(/^[a-z]$/)) {
    pressKey(e.key)
    return
  }
}

function pressKey(key) {
  const activeTiles = getActiveTiles()
  if (activeTiles.length >= WORD_LENGTH) return
  const nextTile = guessGrid.querySelector(":not([data-letter])")
  nextTile.dataset.letter = key.toLowerCase()
  nextTile.textContent = key
  nextTile.dataset.state = "active"
}

function deleteKey() {
  const activeTiles = getActiveTiles()
  const lastTile = activeTiles[activeTiles.length - 1]
  if (lastTile == null) return
  lastTile.textContent = ""
  delete lastTile.dataset.state
  delete lastTile.dataset.letter
}

function submitGuess() {
  const activeTiles = [...getActiveTiles()]
  if (activeTiles.length !== WORD_LENGTH) {
    showAlert("Not enough letters")
    shakeTiles(activeTiles)
    return
  }
  
  const guess = activeTiles.reduce((word, tile) => {
    return word + tile.dataset.letter
  }, "")

  if (!dictionary.includes(guess)) {
    showAlert("Not in word list")
    shakeTiles(activeTiles)
    return
  }

  stopInteraction()
  activeTiles.forEach((...params) => flipTile(...params, guess))
}

function flipTile(tile, index, array, guess) {
  const letter = tile.dataset.letter
  const key = keyboard.querySelector(`[data-key="${letter}"i]`)
  setTimeout(() => {
    tile.classList.add("flip")
  }, (index * FLIP_ANIMATION_DURATION) / 2)

  tile.addEventListener(
    "transitionend",
    () => {
      tile.classList.remove("flip")
      if (targetWord[index] === letter) {
        tile.dataset.state = "correct"
        key.classList.add("correct")
      } else if (targetWord.includes(letter)) {
        tile.dataset.state = "wrong-location"
        key.classList.add("wrong-location")
      } else {
        tile.dataset.state = "wrong"
        key.classList.add("wrong")
      }

      if (index === array.length - 1) {
        tile.addEventListener(
          "transitionend",
          () => {
            startInteraction()
            checkWinLose(guess, array)
          },
          { once: true }
        )
      }
    },
    { once: true }
  )
}

function getActiveTiles() {
  return guessGrid.querySelectorAll('[data-state="active"]')
}

function showAlert(message, duration = 1000) {
  const alert = document.createElement("div")
  alert.textContent = message
  alert.classList.add("alert")
  alertContainer.prepend(alert)
  if (duration == null) return

  setTimeout(() => {
    alert.classList.add("hide")
    alert.addEventListener("transitionend", () => {
      alert.remove()
    })
  }, duration)
}

function shakeTiles(tiles) {
  tiles.forEach(tile => {
    tile.classList.add("shake")
    tile.addEventListener(
      "animationend",
      () => {
        tile.classList.remove("shake")
      },
      { once: true }
    )
  })
}

function checkWinLose(guess, tiles) {
  if (guess === targetWord) {
    showAlert("You Win", 5000)
    danceTiles(tiles)
    stopInteraction()
    return
  }

  const remainingTiles = guessGrid.querySelectorAll(":not([data-letter])")
  if (remainingTiles.length === 0) {
    showAlert(targetWord.toUpperCase(), null)
    stopInteraction()
  }
}

function danceTiles(tiles) {
  tiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add("dance")
      tile.addEventListener(
        "animationend",
        () => {
          tile.classList.remove("dance")
        },
        { once: true }
      )
    }, (index * DANCE_ANIMATION_DURATION) / 5)
  })
}
