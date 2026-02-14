// Italian verbs database
const verbsData = [
  {
    infinitive: "Essere (To be)",
    presente: { Io: "sono", Tu: "sei", "Lui/Lei": "è", Noi: "siamo", Voi: "siete", Loro: "sono" },
    passato_prossimo: {
      Io: "sono stato/a",
      Tu: "sei stato/a",
      "Lui/Lei": "è stato/a",
      Noi: "siamo stati/e",
      Voi: "siete stati/e",
      Loro: "sono stati/e",
    },
    futuro: { Io: "sarò", Tu: "sarai", "Lui/Lei": "sarà", Noi: "saremo", Voi: "sarete", Loro: "saranno" },
    imperfetto: { Io: "ero", Tu: "eri", "Lui/Lei": "era", Noi: "eravamo", Voi: "eravate", Loro: "erano" },
  },
  {
    infinitive: "Avere (To have)",
    presente: { Io: "ho", Tu: "hai", "Lui/Lei": "ha", Noi: "abbiamo", Voi: "avete", Loro: "hanno" },
    passato_prossimo: {
      Io: "ho avuto",
      Tu: "hai avuto",
      "Lui/Lei": "ha avuto",
      Noi: "abbiamo avuto",
      Voi: "avete avuto",
      Loro: "hanno avuto",
    },
    futuro: { Io: "avrò", Tu: "avrai", "Lui/Lei": "avrà", Noi: "avremo", Voi: "avrete", Loro: "avranno" },
    imperfetto: { Io: "avevo", Tu: "avevi", "Lui/Lei": "aveva", Noi: "avevamo", Voi: "avevate", Loro: "avevano" },
  },
  {
    infinitive: "Parlare (To speak)",
    presente: { Io: "parlo", Tu: "parli", "Lui/Lei": "parla", Noi: "parliamo", Voi: "parlate", Loro: "parlano" },
    passato_prossimo: {
      Io: "ho parlato",
      Tu: "hai parlato",
      "Lui/Lei": "ha parlato",
      Noi: "abbiamo parlato",
      Voi: "avete parlato",
      Loro: "hanno parlato",
    },
    futuro: {
      Io: "parlerò",
      Tu: "parlerai",
      "Lui/Lei": "parlerà",
      Noi: "parleremo",
      Voi: "parlerete",
      Loro: "parleranno",
    },
    imperfetto: {
      Io: "parlavo",
      Tu: "parlavi",
      "Lui/Lei": "parlava",
      Noi: "parlavamo",
      Voi: "parlavate",
      Loro: "parlavano",
    },
  },
  {
    infinitive: "Mangiare (To eat)",
    presente: { Io: "mangio", Tu: "mangi", "Lui/Lei": "mangia", Noi: "mangiamo", Voi: "mangiate", Loro: "mangiano" },
    passato_prossimo: {
      Io: "ho mangiato",
      Tu: "hai mangiato",
      "Lui/Lei": "ha mangiato",
      Noi: "abbiamo mangiato",
      Voi: "avete mangiato",
      Loro: "hanno mangiato",
    },
    futuro: {
      Io: "mangerò",
      Tu: "mangerai",
      "Lui/Lei": "mangerà",
      Noi: "mangeremo",
      Voi: "mangerete",
      Loro: "mangeranno",
    },
    imperfetto: {
      Io: "mangiavo",
      Tu: "mangiavi",
      "Lui/Lei": "mangiava",
      Noi: "mangiavamo",
      Voi: "mangiavate",
      Loro: "mangiavano",
    },
  },
  {
    infinitive: "Bere (To drink)",
    presente: { Io: "bevo", Tu: "bevi", "Lui/Lei": "beve", Noi: "beviamo", Voi: "bevete", Loro: "bevono" },
    passato_prossimo: {
      Io: "ho bevuto",
      Tu: "hai bevuto",
      "Lui/Lei": "ha bevuto",
      Noi: "abbiamo bevuto",
      Voi: "avete bevuto",
      Loro: "hanno bevuto",
    },
    futuro: { Io: "berrò", Tu: "berrai", "Lui/Lei": "berrà", Noi: "berremo", Voi: "berrete", Loro: "berranno" },
    imperfetto: { Io: "bevevo", Tu: "bevevi", "Lui/Lei": "beveva", Noi: "bevevamo", Voi: "bevevate", Loro: "bevevano" },
  },
  {
    infinitive: "Andare (To go)",
    presente: { Io: "vado", Tu: "vai", "Lui/Lei": "va", Noi: "andiamo", Voi: "andate", Loro: "vanno" },
    passato_prossimo: {
      Io: "sono andato/a",
      Tu: "sei andato/a",
      "Lui/Lei": "è andato/a",
      Noi: "siamo andati/e",
      Voi: "siete andati/e",
      Loro: "sono andati/e",
    },
    futuro: { Io: "andrò", Tu: "andrai", "Lui/Lei": "andrà", Noi: "andremo", Voi: "andrete", Loro: "andranno" },
    imperfetto: { Io: "andavo", Tu: "andavi", "Lui/Lei": "andava", Noi: "andavamo", Voi: "andavate", Loro: "andavano" },
  },
  {
    infinitive: "Fare (To do/make)",
    presente: { Io: "faccio", Tu: "fai", "Lui/Lei": "fa", Noi: "facciamo", Voi: "fate", Loro: "fanno" },
    passato_prossimo: {
      Io: "ho fatto",
      Tu: "hai fatto",
      "Lui/Lei": "ha fatto",
      Noi: "abbiamo fatto",
      Voi: "avete fatto",
      Loro: "hanno fatto",
    },
    futuro: { Io: "farò", Tu: "farai", "Lui/Lei": "farà", Noi: "faremo", Voi: "farete", Loro: "faranno" },
    imperfetto: { Io: "facevo", Tu: "facevi", "Lui/Lei": "faceva", Noi: "facevamo", Voi: "facevate", Loro: "facevano" },
  },
  {
    infinitive: "Venire (To come)",
    presente: { Io: "vengo", Tu: "vieni", "Lui/Lei": "viene", Noi: "veniamo", Voi: "venite", Loro: "vengono" },
    passato_prossimo: {
      Io: "sono venuto/a",
      Tu: "sei venuto/a",
      "Lui/Lei": "è venuto/a",
      Noi: "siamo venuti/e",
      Voi: "siete venuti/e",
      Loro: "sono venuti/e",
    },
    futuro: { Io: "verrò", Tu: "verrai", "Lui/Lei": "verrà", Noi: "verremo", Voi: "verrete", Loro: "verranno" },
    imperfetto: { Io: "venivo", Tu: "venivi", "Lui/Lei": "veniva", Noi: "venivamo", Voi: "venivate", Loro: "venivano" },
  },
  {
    infinitive: "Dormire (To sleep)",
    presente: { Io: "dormo", Tu: "dormi", "Lui/Lei": "dorme", Noi: "dormiamo", Voi: "dormite", Loro: "dormono" },
    passato_prossimo: {
      Io: "ho dormito",
      Tu: "hai dormito",
      "Lui/Lei": "ha dormito",
      Noi: "abbiamo dormito",
      Voi: "avete dormito",
      Loro: "hanno dormito",
    },
    futuro: {
      Io: "dormirò",
      Tu: "dormirai",
      "Lui/Lei": "dormirà",
      Noi: "dormiremo",
      Voi: "dormirete",
      Loro: "dormiranno",
    },
    imperfetto: {
      Io: "dormivo",
      Tu: "dormivi",
      "Lui/Lei": "dormiva",
      Noi: "dormivamo",
      Voi: "dormivate",
      Loro: "dormivano",
    },
  },
  {
    infinitive: "Leggere (To read)",
    presente: { Io: "leggo", Tu: "leggi", "Lui/Lei": "legge", Noi: "leggiamo", Voi: "leggete", Loro: "leggono" },
    passato_prossimo: {
      Io: "ho letto",
      Tu: "hai letto",
      "Lui/Lei": "ha letto",
      Noi: "abbiamo letto",
      Voi: "avete letto",
      Loro: "hanno letto",
    },
    futuro: {
      Io: "leggerò",
      Tu: "leggerai",
      "Lui/Lei": "leggerà",
      Noi: "leggeremo",
      Voi: "leggerete",
      Loro: "leggeranno",
    },
    imperfetto: {
      Io: "leggevo",
      Tu: "leggevi",
      "Lui/Lei": "leggeva",
      Noi: "leggevamo",
      Voi: "leggevate",
      Loro: "leggevano",
    },
  },
]





document.addEventListener("DOMContentLoaded", function () {

  const verbsList = document.getElementById("verbsList");
  const searchVerb = document.getElementById("searchVerb");

  function renderVerbs(data) {
    verbsList.innerHTML = "";

    data.forEach(verb => {
      const card = document.createElement("div");
      card.className = "verb-card";

      card.innerHTML = `
        <div class="verb-title">${verb.infinitive}</div>

        <div class="tense">
          <h4>Presente</h4>
          <div class="conjugation">
            ${Object.entries(verb.presente).map(([k,v]) => `${k}: ${v}`).join("<br>")}
          </div>
        </div>

        <div class="tense">
          <h4>Passato Prossimo</h4>
          <div class="conjugation">
            ${Object.entries(verb.passato_prossimo).map(([k,v]) => `${k}: ${v}`).join("<br>")}
          </div>
        </div>
      `;

      verbsList.appendChild(card);
    });
  }

  function filterVerbs() {
    const value = searchVerb.value.toLowerCase();

    const filtered = verbsData.filter(verb =>
      verb.infinitive.toLowerCase().includes(value)
    );

    renderVerbs(filtered);
  }

  searchVerb.addEventListener("input", filterVerbs);

  renderVerbs(verbsData);

});
console.log("VERBS LOADED", verbsData);
