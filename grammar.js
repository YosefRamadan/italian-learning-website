// Grammar lessons database
const grammarData = {
  pronouns: [
    {
      title: "Pronomi Personali (Personal Pronouns)",
      description: "I pronomi personali soggetto indicano chi compie l'azione.",
      examples: [
        { italian: "Io parlo italiano", arabic: "أنا أتحدث الإيطالية" },
        { italian: "Tu leggi un libro", arabic: "أنت تقرأ كتاباً" },
        { italian: "Lui scrive una lettera", arabic: "هو يكتب رسالة" },
        { italian: "Lei beve caffè", arabic: "هي تشرب القهوة" },
        { italian: "Noi andiamo al mercato", arabic: "نحن نذهب إلى السوق" },
        { italian: "Voi dormite bene", arabic: "أنتم تنامون جيداً" },
        { italian: "Loro mangiano pizza", arabic: "هم يأكلون البيتزا" },
      ],
    },
  ],
  articles: [
    {
      title: "Articoli Determinativi (Definite Articles)",
      description: "Gli articoli determinativi si usano con nomi specifici e noti.",
      examples: [
        { italian: "il gatto (singular masculine)", arabic: "القط (مفرد مذكر)" },
        { italian: "la casa (singular feminine)", arabic: "الدار (مفرد مؤنث)" },
        { italian: "lo studente (singular masculine before s, z, gn, ps)", arabic: "الطالب" },
        { italian: "l'albero (singular before vowel)", arabic: "الشجرة" },
        { italian: "i gatti (plural masculine)", arabic: "القطط (جمع)" },
        { italian: "le case (plural feminine)", arabic: "الدور (جمع)" },
        { italian: "gli studenti (plural before s, z, vowel)", arabic: "الطلاب" },
      ],
    },
  ],
  possessive: [
    {
      title: "Aggettivi Possessivi (Possessive Adjectives)",
      description: "Gli aggettivi possessivi indicano a chi appartiene qualcosa.",
      examples: [
        { italian: "mio, mia, miei, mie (my)", arabic: "ملكي" },
        { italian: "tuo, tua, tuoi, tue (your - informal)", arabic: "ملكك" },
        { italian: "suo, sua, suoi, sue (his/her/your - formal)", arabic: "ملكه/ملكها" },
        { italian: "nostro, nostra, nostri, nostre (our)", arabic: "ملكنا" },
        { italian: "vostro, vostra, vostri, vostre (your - plural)", arabic: "ملكم" },
        { italian: "loro (their)", arabic: "ملكهم" },
      ],
    },
  ],
  verbs: [
    {
      title: "Coniugazione Verbi Regolari (Regular Verb Conjugation)",
      description: "I verbi regolari si dividono in tre gruppi: -are, -ere, -ire.",
      examples: [
        { italian: "Parlare: Io parlo, tu parli, lui parla", arabic: "أتحدث: أنا أتحدث، أنت تتحدث، هو يتحدث" },
        { italian: "Leggere: Io leggo, tu leggi, lui legge", arabic: "قراءة: أنا أقرأ، أنت تقرأ، هو يقرأ" },
        { italian: "Dormire: Io dormo, tu dormi, lui dorme", arabic: "نوم: أنا أنام، أنت تنام، هو ينام" },
      ],
    },
  ],
  tenses: [
    {
      title: "Tempi Verbali Principali (Main Tenses)",
      description: "I tempi principali sono: Presente, Passato Prossimo, Futuro, Imperfetto.",
      examples: [
        { italian: "Presente: Io mangio una mela", arabic: "الحاضر: أنا آكل تفاحة" },
        { italian: "Passato Prossimo: Io ho mangiato una mela", arabic: "الماضي القريب: أنا أكلت تفاحة" },
        { italian: "Futuro: Io mangerò una mela", arabic: "المستقبل: أنا سآكل تفاحة" },
        { italian: "Imperfetto: Io mangiavo una mela (di solito)", arabic: "الماضي: كنت أكل تفاحة (عادة)" },
      ],
    },
  ],
  sentences: [
    {
      title: "Frasi Semplici e Composte (Simple and Compound Sentences)",
      description: "Una frase semplice ha un verbo, una composta ha più verbi.",
      examples: [
        { italian: "Semplice: Il gatto dorme.", arabic: "بسيطة: القط ينام." },
        { italian: "Composta: Il gatto dorme e il cane gioca.", arabic: "مركبة: القط ينام والكلب يلعب." },
        {
          italian: "Con congiunzione: Vado al parco perché amo la natura.",
          arabic: "مع حرف العطف: أذهب إلى الحديقة لأنني أحب الطبيعة.",
        },
      ],
    },
  ],
}
document.addEventListener("DOMContentLoaded", function () {

  const grammarList = document.getElementById("grammarList");
  const searchGrammar = document.getElementById("searchGrammar");
  const categoryFilter = document.getElementById("categoryFilter");

  function renderGrammar(data) {
    grammarList.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "grammar-card";

      card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div>
          ${item.examples.map(ex => `
            <div class="example">
              <strong>${ex.italian}</strong><br>
              ${ex.arabic}
            </div>
          `).join("")}
        </div>
      `;

      grammarList.appendChild(card);
    });
  }

  function getAllLessons() {
    let lessons = [];

    Object.keys(grammarData).forEach(category => {
      grammarData[category].forEach(item => {
        lessons.push({ ...item, category });
      });
    });

    return lessons;
  }

  function filterGrammar() {
    const searchValue = searchGrammar.value.toLowerCase();
    const categoryValue = categoryFilter.value;

    let lessons = getAllLessons();

    if (categoryValue !== "all") {
      lessons = lessons.filter(l => l.category === categoryValue);
    }

    lessons = lessons.filter(l =>
      l.title.toLowerCase().includes(searchValue)
    );

    renderGrammar(lessons);
  }

  searchGrammar.addEventListener("input", filterGrammar);
  categoryFilter.addEventListener("change", filterGrammar);

  renderGrammar(getAllLessons());

});
