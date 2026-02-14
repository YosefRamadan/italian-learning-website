// Vocabulary database (50 sample entries + template for expansion to 1000)
const vocabularyData = [
  // A1 Level - Beginner
  {
    italian: "Ciao",
    arabic: "مرحبا",
    level: "A1",
    examples: [{ italian: "Ciao, come stai?", arabic: "مرحبا، كيف حالك؟" }],
  },
  { italian: "Amore", arabic: "حب", level: "A1", examples: [{ italian: "Ti amo", arabic: "أنا أحبك" }] },
  {
    italian: "Casa",
    arabic: "منزل",
    level: "A1",
    examples: [{ italian: "La mia casa è bella", arabic: "منزلي جميل" }],
  },
  { italian: "Gatto", arabic: "قط", level: "A1", examples: [{ italian: "Il gatto è nero", arabic: "القط أسود" }] },
  { italian: "Cane", arabic: "كلب", level: "A1", examples: [{ italian: "Il cane è fedele", arabic: "الكلب وفي" }] },
  { italian: "Libro", arabic: "كتاب", level: "A1", examples: [{ italian: "Leggo un libro", arabic: "أقرأ كتاباً" }] },
  {
    italian: "Scuola",
    arabic: "مدرسة",
    level: "A1",
    examples: [{ italian: "Vado a scuola", arabic: "أذهب إلى المدرسة" }],
  },
  {
    italian: "Albero",
    arabic: "شجرة",
    level: "A1",
    examples: [{ italian: "L'albero è grande", arabic: "الشجرة كبيرة" }],
  },
  { italian: "Sole", arabic: "شمس", level: "A1", examples: [{ italian: "Il sole brilla", arabic: "الشمس تشرق" }] },
  { italian: "Luna", arabic: "قمر", level: "A1", examples: [{ italian: "La luna è bella", arabic: "القمر جميل" }] },
  { italian: "Stella", arabic: "نجم", level: "A1", examples: [{ italian: "La stella brilla", arabic: "النجم يلمع" }] },
  { italian: "Aqua", arabic: "ماء", level: "A1", examples: [{ italian: "Bevo acqua", arabic: "أشرب ماء" }] },
  { italian: "Pane", arabic: "خبز", level: "A1", examples: [{ italian: "Mangio pane", arabic: "أكل خبزاً" }] },
  {
    italian: "Formaggio",
    arabic: "جبن",
    level: "A1",
    examples: [{ italian: "Il formaggio è buono", arabic: "الجبن طيب" }],
  },
  { italian: "Mela", arabic: "تفاح", level: "A1", examples: [{ italian: "Mangio una mela", arabic: "أكل تفاحة" }] },

  // A2 Level
  {
    italian: "Innamorare",
    arabic: "يقع في الحب",
    level: "A2",
    examples: [{ italian: "Mi sono innamorato", arabic: "وقعت في الحب" }],
  },
  {
    italian: "Viaggio",
    arabic: "رحلة",
    level: "A2",
    examples: [{ italian: "Faccio un viaggio", arabic: "أقوم برحلة" }],
  },
  { italian: "Treno", arabic: "قطار", level: "A2", examples: [{ italian: "Prendo il treno", arabic: "أركب القطار" }] },
  {
    italian: "Stazione",
    arabic: "محطة",
    level: "A2",
    examples: [{ italian: "Vado alla stazione", arabic: "أذهب إلى المحطة" }],
  },
  {
    italian: "Biglietto",
    arabic: "تذكرة",
    level: "A2",
    examples: [{ italian: "Compro un biglietto", arabic: "أشتري تذكرة" }],
  },
  {
    italian: "Aereo",
    arabic: "طائرة",
    level: "A2",
    examples: [{ italian: "Viaggio in aereo", arabic: "أسافر بالطائرة" }],
  },
  {
    italian: "Albergo",
    arabic: "فندق",
    level: "A2",
    examples: [{ italian: "Dormo in albergo", arabic: "أنام في فندق" }],
  },
  {
    italian: "Camera",
    arabic: "غرفة",
    level: "A2",
    examples: [{ italian: "La camera è comoda", arabic: "الغرفة مريحة" }],
  },
  {
    italian: "Letto",
    arabic: "سرير",
    level: "A2",
    examples: [{ italian: "Dormo nel letto", arabic: "أنام في السرير" }],
  },
  {
    italian: "Finestra",
    arabic: "نافذة",
    level: "A2",
    examples: [{ italian: "La finestra è aperta", arabic: "النافذة مفتوحة" }],
  },

  // B1 Level
  {
    italian: "Avventura",
    arabic: "مغامرة",
    level: "B1",
    examples: [{ italian: "Cerco avventure", arabic: "أبحث عن مغامرات" }],
  },
  {
    italian: "Scoprire",
    arabic: "اكتشف",
    level: "B1",
    examples: [{ italian: "Scopro nuovi mondi", arabic: "أكتشف عوالم جديدة" }],
  },
  {
    italian: "Esplorare",
    arabic: "استكشف",
    level: "B1",
    examples: [{ italian: "Esploro la città", arabic: "أستكشف المدينة" }],
  },
  {
    italian: "Montagna",
    arabic: "جبل",
    level: "B1",
    examples: [{ italian: "Salgo la montagna", arabic: "أصعد الجبل" }],
  },
  { italian: "Valle", arabic: "وادي", level: "B1", examples: [{ italian: "La valle è bella", arabic: "الوادي جميل" }] },
  {
    italian: "Foresta",
    arabic: "غابة",
    level: "B1",
    examples: [{ italian: "Cammino nella foresta", arabic: "أمشي في الغابة" }],
  },
  { italian: "Fiume", arabic: "نهر", level: "B1", examples: [{ italian: "Il fiume scorre", arabic: "النهر يجري" }] },
  { italian: "Mare", arabic: "بحر", level: "B1", examples: [{ italian: "Nuoto nel mare", arabic: "أسبح في البحر" }] },
  {
    italian: "Spiaggia",
    arabic: "شاطئ",
    level: "B1",
    examples: [{ italian: "Relax sulla spiaggia", arabic: "استرخي على الشاطئ" }],
  },
  {
    italian: "Isola",
    arabic: "جزيرة",
    level: "B1",
    examples: [{ italian: "L'isola è tranquilla", arabic: "الجزيرة هادئة" }],
  },

  // B2 Level
  {
    italian: "Filosofia",
    arabic: "فلسفة",
    level: "B2",
    examples: [{ italian: "Studio filosofia", arabic: "أدرس الفلسفة" }],
  },
  {
    italian: "Scienza",
    arabic: "علم",
    level: "B2",
    examples: [{ italian: "La scienza è importante", arabic: "العلم مهم" }],
  },
  {
    italian: "Letteratura",
    arabic: "أدب",
    level: "B2",
    examples: [{ italian: "Leggo letteratura italiana", arabic: "أقرأ الأدب الإيطالي" }],
  },
  { italian: "Arte", arabic: "فن", level: "B2", examples: [{ italian: "Amo l'arte", arabic: "أحب الفن" }] },
  {
    italian: "Musica",
    arabic: "موسيقى",
    level: "B2",
    examples: [{ italian: "Ascolto musica classica", arabic: "أستمع للموسيقى الكلاسيكية" }],
  },
  {
    italian: "Danza",
    arabic: "رقص",
    level: "B2",
    examples: [{ italian: "Danza è espressione", arabic: "الرقص تعبير" }],
  },
  {
    italian: "Comunità",
    arabic: "مجتمع",
    level: "B2",
    examples: [{ italian: "La comunità è importante", arabic: "المجتمع مهم" }],
  },
  {
    italian: "Sostenibilità",
    arabic: "الاستدامة",
    level: "B2",
    examples: [{ italian: "Pensiamo alla sostenibilità", arabic: "نفكر في الاستدامة" }],
  },
  {
    italian: "Tecnologia",
    arabic: "تكنولوجيا",
    level: "B2",
    examples: [{ italian: "La tecnologia cambia il mondo", arabic: "التكنولوجيا تغير العالم" }],
  },
  {
    italian: "Futuro",
    arabic: "المستقبل",
    level: "B2",
    examples: [{ italian: "Penso al futuro", arabic: "أفكر في المستقبل" }],
  },
]

// Template: To expand to 1000 words, add more objects following this structure:
// { italian: 'word', arabic: 'ترجمة', level: 'A1/A2/B1/B2', examples: [{ italian: 'example', arabic: 'مثال' }] }
const vocabList = document.getElementById("vocabList");
const searchInput = document.getElementById("searchInput");
const levelFilter = document.getElementById("levelFilter");

function renderVocabulary(data) {
  vocabList.innerHTML = "";

  data.forEach(word => {
    const card = document.createElement("div");
    card.className = "vocab-card";

    card.innerHTML = `
      <span class="level-badge ${word.level}">${word.level}</span>
      <h3>${word.italian}</h3>
      <p>${word.arabic}</p>
      <div class="example">
        <strong>مثال:</strong>
        <p>${word.examples[0].italian}</p>
        <p>${word.examples[0].arabic}</p>
      </div>
    `;

    vocabList.appendChild(card);
  });
}

function filterVocabulary() {
  const searchValue = searchInput.value.toLowerCase();
  const levelValue = levelFilter.value;

  const filtered = vocabularyData.filter(word => {
    const matchesSearch =
      word.italian.toLowerCase().includes(searchValue) ||
      word.arabic.includes(searchValue);

    const matchesLevel =
      levelValue === "all" || word.level === levelValue;

    return matchesSearch && matchesLevel;
  });

  renderVocabulary(filtered);
}

searchInput.addEventListener("input", filterVocabulary);
levelFilter.addEventListener("change", filterVocabulary);

renderVocabulary(vocabularyData);
