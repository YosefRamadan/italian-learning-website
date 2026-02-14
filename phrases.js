// Useful phrases database
const phrasesData = {
  greeting: [
    { italian: "Ciao!", arabic: "مرحبا!" },
    { italian: "Buongiorno", arabic: "صباح الخير" },
    { italian: "Buonasera", arabic: "مساء الخير" },
    { italian: "Buonanotte", arabic: "تصبح على خير" },
    { italian: "Come stai?", arabic: "كيف حالك؟" },
    { italian: "Sto bene, grazie", arabic: "أنا بخير، شكراً" },
    { italian: "Mi chiamo...", arabic: "اسمي..." },
    { italian: "Piacere di conoscerti", arabic: "يسعدني التعرف عليك" },
    { italian: "Arrivederci", arabic: "وداعاً" },
  ],
  restaurant: [
    { italian: "Un tavolo per due, per favore", arabic: "طاولة لشخصين من فضلك" },
    { italian: "Il menu, per favore", arabic: "القائمة من فضلك" },
    { italian: "Vorrei una pizza", arabic: "أريد بيتزا" },
    { italian: "Due piatti di pasta", arabic: "طبقين من المكرونة" },
    { italian: "Acqua con ghiaccio", arabic: "ماء بثلج" },
    { italian: "Il conto, per favore", arabic: "الفاتورة من فضلك" },
    { italian: "Complimenti al cuoco", arabic: "تحياتي للطاهي" },
    { italian: "Molto delizioso", arabic: "لذيذ جداً" },
  ],
  market: [
    { italian: "Quanto costa?", arabic: "كم السعر؟" },
    { italian: "È troppo caro", arabic: "غالي جداً" },
    { italian: "Mi fai uno sconto?", arabic: "هل تعطيني خصماً؟" },
    { italian: "Un kilo di mele", arabic: "كيلو من التفاح" },
    { italian: "Due etti di formaggio", arabic: "مائتي غرام من الجبن" },
    { italian: "Pane fresco", arabic: "خبز طازج" },
    { italian: "Quanto mi deve?", arabic: "كم يجب أن أدفع؟" },
    { italian: "Accetti carte di credito?", arabic: "هل تقبل بطاقات الائتمان؟" },
  ],
  airport: [
    { italian: "Dov'è il check-in?", arabic: "أين الاستقبال؟" },
    { italian: "Ho una valigia", arabic: "لدي حقيبة" },
    { italian: "Dove è la mia valigia?", arabic: "أين حقيبتي؟" },
    { italian: "Imbarco porta numero...", arabic: "الصعود من الباب رقم..." },
    { italian: "Biglietto aereo", arabic: "تذكرة طيران" },
    { italian: "Dove è il bagno?", arabic: "أين الحمام؟" },
    { italian: "Scusi, dov'è il gate?", arabic: "معذرة، أين البوابة؟" },
    { italian: "Ritardo del volo", arabic: "تأخر الرحلة" },
  ],
  hotel: [
    { italian: "Vorrei una camera singola", arabic: "أريد غرفة فردية" },
    { italian: "Una camera doppia per due notti", arabic: "غرفة مزدوجة ليلتين" },
    { italian: "Qual è il prezzo a notte?", arabic: "كم السعر في الليلة الواحدة؟" },
    { italian: "C'è WiFi?", arabic: "هل هناك واي فاي؟" },
    { italian: "A che ora è la colazione?", arabic: "ما هو وقت الإفطار؟" },
    { italian: "Voglio fare il check-out", arabic: "أريد المغادرة" },
    { italian: "La chiave della stanza", arabic: "مفتاح الغرفة" },
    { italian: "C'è un'aria condizionata?", arabic: "هل هناك تكييف هواء؟" },
  ],
  classroom: [
    { italian: "Buongiorno, prof", arabic: "صباح الخير يا أستاذ" },
    { italian: "Posso andare al bagno?", arabic: "هل يمكنني الذهاب للحمام؟" },
    { italian: "Non ho capito", arabic: "لم أفهم" },
    { italian: "Puoi ripetere, per favore?", arabic: "هل يمكنك التكرار من فضلك؟" },
    { italian: "Qual è il compito per domani?", arabic: "ما الواجب ليوم غد؟" },
    { italian: "Ho una domanda", arabic: "لدي سؤال" },
    { italian: "Mi puoi aiutare con questo esercizio?", arabic: "هل تستطيع مساعدتي في هذا التمرين؟" },
    { italian: "La lezione è interessante", arabic: "الدرس مثير للاهتمام" },
  ],
}
document.addEventListener("DOMContentLoaded", function () {

  const phrasesList = document.getElementById("phrasesList");
  const searchPhrase = document.getElementById("searchPhrase");
  const categoryFilter = document.getElementById("categoryFilter");

  function getAllPhrases() {
    let all = [];

    Object.keys(phrasesData).forEach(category => {
      phrasesData[category].forEach(item => {
        all.push({ ...item, category });
      });
    });

    return all;
  }

  function renderPhrases(data) {
    phrasesList.innerHTML = "";

    data.forEach(phrase => {
      const card = document.createElement("div");
      card.className = "phrase-card";

      card.innerHTML = `
        <h3>${phrase.italian}</h3>
        <p>${phrase.arabic}</p>
      `;

      phrasesList.appendChild(card);
    });
  }

  function filterPhrases() {
    const searchValue = searchPhrase.value.toLowerCase();
    const categoryValue = categoryFilter.value;

    let phrases = getAllPhrases();

    if (categoryValue !== "all") {
      phrases = phrases.filter(p => p.category === categoryValue);
    }

    phrases = phrases.filter(p =>
      p.italian.toLowerCase().includes(searchValue) ||
      p.arabic.includes(searchValue)
    );

    renderPhrases(phrases);
  }

  searchPhrase.addEventListener("input", filterPhrases);
  categoryFilter.addEventListener("change", filterPhrases);

  renderPhrases(getAllPhrases());

});
