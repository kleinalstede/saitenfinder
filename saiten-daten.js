/* ===================================================================
   SAITEN-DATENBANK – Streicherwelt "Welche Saiten habe ich?"
   ===================================================================

   WICHTIG FÜR JÖRG:
   Dies ist die EINZIGE Datei, die du zur Datenpflege anfassen musst.
   Jeder Saitensatz ist ein Eintrag im Array SAITEN_DB.

   Pro Satz werden ALLE VIER Saiten erfasst: g, d, a, e
   Pro Saite ZWEI Wicklungsfarben:
   - peg   = Wicklung am WIRBEL-Ende
   - tail  = Wicklung am SAITENHALTER-Ende (Ball-End)

   Das sind 8 Farbangaben pro Satz.

   ERLAUBTE FARBWERTE
   ------------------
   Einfarbig:
     schwarz, weiss, rot, blau, gruen, gelb, orange, violett,
     braun, grau, gold, silber, tuerkis, rosa, keine

   Zweifarbige Kombinationen (Schreibweise: zwei Farben mit Bindestrich,
   alphabetisch sortiert, KLEINgeschrieben):
     rot-weiss, gruen-schwarz   ... usw.

   WICHTIG bei Kombinationen:
   - Immer alphabetisch sortieren: "rot-weiss" (r vor w), nie "weiss-rot".
   - Jede neue Kombination, die du hier verwendest, MUSS auch in
     index.html in der Liste FARBEN eingetragen sein, sonst kann der
     Kunde sie nicht auswählen. Siehe Kommentar dort.

   "keine" = an diesem Ende keine farbige Wicklung sichtbar.

   GRUPPEN (optionales Feld "gruppe")
   ----------------------------------
   Manche Saatzfamilien sehen am Instrument fast gleich aus und
   lassen sich nicht sicher unterscheiden (z. B. die Vision-Familie:
   alle viermal grün am Saitenhalter, mehrfarbig am Wirbel).
   Solche Sätze bekommen dasselbe "gruppe"-Kennwort, z. B.
   gruppe: "vision". Erkennt die App mehrere Sätze derselben Gruppe
   als Treffer, fasst sie sie zu EINEM Hinweis zusammen und
   empfiehlt die persönliche Beratung – statt mehrerer verwirrender
   Gleichstand-Treffer. Sätze ohne "gruppe" werden einzeln gezeigt.

   Der Farbwert "mehrfarbig" ist für Wicklungen gedacht, die der
   Kunde ohnehin nicht eindeutig zuordnen kann (drei Farben o. ä.).

   BEMERKUNG (optionales Feld "bemerkung")
   ---------------------------------------
   Freitext, der zusätzlich zum Treffer angezeigt wird – z. B. für
   Merkmale, die die App nicht abfragt (kleine Striche am Wirbel-
   Ende o. ä.). Dient dem Kunden als Bestätigungshilfe, NICHT als
   Eingabekriterium. Sätze ohne "bemerkung" zeigen keinen Zusatz.

   ===================================================================

   VORLAGE für einen neuen Satz (kopieren und ausfüllen):

   {
     id: "hersteller-name",        // kleingeschrieben, ohne Leerzeichen
     hersteller: "Hersteller",
     name: "Modellname",
     kern: "Kernmaterial",
     g: { peg: "",  tail: "" },
     d: { peg: "",  tail: "" },
     a: { peg: "",  tail: "" },
     e: { peg: "",  tail: "" },
     shopUrl: "https://streicherwelt.de/products/..."
   },
*/

/* Datenstand – bei jeder Datenänderung das Datum hochzählen.
   Wird unten in der App angezeigt, damit man die geladene
   Version sofort erkennt. */
const SAITEN_DB_VERSION = "Datenstand 2026-05-21 (25 Saetze)";

const SAITEN_DB = [
  {
    id: "pirastro-tonica",
    hersteller: "Pirastro",
    name: "Tonica",
    kern: "Nylonkern",
    g: { peg: "braun",   tail: "rot-weiss" },
    d: { peg: "rosa",    tail: "rot-weiss" },
    a: { peg: "schwarz", tail: "rot-weiss" },
    e: { peg: "gruen",   tail: "rot" },
    shopUrl: "https://streicherwelt.de/products/satz-pirastro-tonica-violine"
  },
  {
    id: "pirastro-evah-pirazzi",
    hersteller: "Pirastro",
    name: "Evah Pirazzi",
    kern: "Synthetikkern",
    g: { peg: "braun",   tail: "gruen-schwarz" },
    d: { peg: "rosa",    tail: "gruen-schwarz" },
    a: { peg: "schwarz", tail: "gruen-schwarz" },
    e: { peg: "gruen",   tail: "gruen" },
    shopUrl: "https://streicherwelt.de/products/satz-pirastro-evah-pirazzi-violine"
  },
  {
    id: "pirastro-obligato",
    hersteller: "Pirastro",
    name: "Obligato",
    kern: "Synthetikkern",
    g: { peg: "braun",   tail: "rot-schwarz" },
    d: { peg: "rosa",    tail: "rot-schwarz" },
    a: { peg: "schwarz", tail: "rot-schwarz" },
    e: { peg: "gruen",   tail: "schwarz" },
    shopUrl: ""
  },
  {
    id: "pirastro-evah-pirazzi-gold",
    hersteller: "Pirastro",
    name: "Evah Pirazzi Gold",
    kern: "Synthetikkern",
    g: { peg: "braun",   tail: "orange-schwarz" },
    d: { peg: "rosa",    tail: "orange-schwarz" },
    a: { peg: "schwarz", tail: "orange-schwarz" },
    e: { peg: "gruen",   tail: "schwarz" },
    shopUrl: "https://streicherwelt.de/products/satz-saiten-violine-pirastro-evah-pirazzi-gold"
  },
  {
    id: "pirastro-perpetual",
    hersteller: "Pirastro",
    name: "Perpetual",
    kern: "Synthetikkern",
    g: { peg: "braun",   tail: "magenta-weiss" },
    d: { peg: "rosa",    tail: "magenta-weiss" },
    a: { peg: "schwarz", tail: "magenta-weiss" },
    e: { peg: "gruen",   tail: "magenta-weiss" },
    shopUrl: "https://streicherwelt.de/products/satz-saiten-violine-pirastro-perpetual-4-4"
  },
  {
    id: "pirastro-violino",
    hersteller: "Pirastro",
    name: "Violino",
    kern: "Synthetikkern",
    g: { peg: "braun",   tail: "blau-schwarz" },
    d: { peg: "rosa",    tail: "blau-schwarz" },
    a: { peg: "schwarz", tail: "blau-schwarz" },
    e: { peg: "gruen",   tail: "blau" },
    shopUrl: "https://streicherwelt.de/products/satz-pirastro-violino-violine"
  },
  {
    id: "thomastik-alphayue",
    hersteller: "Thomastik",
    name: "Alphayue",
    kern: "Synthetikkern (E-Saite Carbonstahl)",
    g: { peg: "grau", tail: "gelb" },
    d: { peg: "grau", tail: "gruen" },
    a: { peg: "grau", tail: "blau" },
    e: { peg: "grau", tail: "blau" },
    shopUrl: "https://streicherwelt.de/products/satz-saiten-violine-thomastik-alphayue-verschiedene-grossen"
  },
  {
    id: "thomastik-dominant-135b",
    hersteller: "Thomastik",
    name: "Dominant (Satz 135B)",
    kern: "Perlon-Kern (E-Saite Stahl)",
    g: { peg: "violett", tail: "gelb" },
    d: { peg: "violett", tail: "gruen" },
    a: { peg: "violett", tail: "blau" },
    e: { peg: "violett", tail: "violett" },
    shopUrl: "https://streicherwelt.de/products/satz-saiten-violine-thomastik-dominant"
  },
  {
    id: "thomastik-dominant-pro-dp100",
    hersteller: "Thomastik",
    name: "Dominant Pro (Satz DP100)",
    kern: "Synthetikkern (E-Saite Carbonstahl)",
    g: { peg: "schwarz", tail: "schwarz" },
    d: { peg: "violett", tail: "schwarz" },
    a: { peg: "grau",    tail: "schwarz" },
    e: { peg: "blau",    tail: "schwarz" },
    shopUrl: "https://streicherwelt.de/products/satz-saiten-violine-thomastik-dominant-pro"
  },
  {
    id: "thomastik-ti100",
    hersteller: "Thomastik",
    name: "TI100",
    kern: "Synthetikkern (E-Saite Carbonstahl)",
    g: { peg: "gelb",    tail: "orange" },
    d: { peg: "gruen",   tail: "orange" },
    a: { peg: "blau",    tail: "orange" },
    e: { peg: "schwarz", tail: "orange" },
    shopUrl: "https://streicherwelt.de/products/satz-violinsaiten-thomastik-peter-infeld-pi"
  },
  {
    id: "thomastik-vision-vi100",
    hersteller: "Thomastik",
    name: "Vision (Satz VI100)",
    kern: "Synthetikkern (E-Saite Carbonstahl)",
    g: { peg: "orange", tail: "gruen" },
    d: { peg: "gruen",  tail: "gruen" },
    a: { peg: "blau",   tail: "gruen" },
    e: { peg: "orange", tail: "gruen" },
    shopUrl: "https://streicherwelt.de/products/satz-thomastik-vision-violine-4-4"
  },
  {
    id: "thomastik-vision-solo",
    hersteller: "Thomastik",
    name: "Vision Solo",
    kern: "Synthetikkern (E-Saite Carbonstahl)",
    gruppe: "vision",
    g: { peg: "mehrfarbig", tail: "gruen" },
    d: { peg: "mehrfarbig", tail: "gruen" },
    a: { peg: "mehrfarbig", tail: "gruen" },
    e: { peg: "mehrfarbig", tail: "gruen" },
    shopUrl: "https://streicherwelt.de/products/satz-thomastik-vision-solo-violine-4-4"
  },
  {
    id: "thomastik-vision-titanium-orchestra",
    hersteller: "Thomastik",
    name: "Vision Titanium Orchestra",
    kern: "Synthetikkern (E-Saite Carbonstahl)",
    gruppe: "vision",
    g: { peg: "mehrfarbig", tail: "gruen" },
    d: { peg: "mehrfarbig", tail: "gruen" },
    a: { peg: "mehrfarbig", tail: "gruen" },
    e: { peg: "mehrfarbig", tail: "gruen" },
    shopUrl: "https://streicherwelt.de/products/satz-thomastik-vision-titanium-orchestra-violine"
  },
  {
    id: "thomastik-vision-titanium-solo",
    hersteller: "Thomastik",
    name: "Vision Titanium Solo",
    kern: "Synthetikkern (E-Saite Carbonstahl)",
    gruppe: "vision",
    g: { peg: "mehrfarbig", tail: "gruen" },
    d: { peg: "mehrfarbig", tail: "gruen" },
    a: { peg: "mehrfarbig", tail: "gruen" },
    e: { peg: "mehrfarbig", tail: "gruen" },
    shopUrl: "https://streicherwelt.de/products/satz-violinsaiten-thomastik-vision-titanium-solo"
  },
  {
    id: "thomastik-rondo-ro100",
    hersteller: "Thomastik",
    name: "Rondo (Satz RO100)",
    kern: "Synthetikkern (E-Saite Carbonstahl)",
    g: { peg: "orange", tail: "gelb" },
    d: { peg: "orange", tail: "gruen" },
    a: { peg: "orange", tail: "blau" },
    e: { peg: "orange", tail: "rot" },
    shopUrl: "https://streicherwelt.de/products/satz-violinsaiten-thomastik-rondo"
  },
  {
    id: "thomastik-peter-infeld-pi100",
    hersteller: "Thomastik",
    name: "Peter Infeld (Satz PI100, Platin-E)",
    kern: "Synthetikkern (E-Saite Stahl, platiniert)",
    g: { peg: "gelb",   tail: "violett" },
    d: { peg: "gruen",  tail: "violett" },
    a: { peg: "blau",   tail: "violett" },
    e: { peg: "orange", tail: "violett" },
    shopUrl: "https://streicherwelt.de/products/satz-violinsaiten-thomastik-peter-infeld-pi"
  },
  {
    id: "thomastik-peter-infeld-pi101",
    hersteller: "Thomastik",
    name: "Peter Infeld (Satz PI101, Zinn-E)",
    kern: "Synthetikkern (E-Saite Stahl, verzinnt)",
    g: { peg: "gelb",  tail: "violett" },
    d: { peg: "gruen", tail: "violett" },
    a: { peg: "blau",  tail: "violett" },
    e: { peg: "gruen", tail: "violett" },
    shopUrl: "https://streicherwelt.de/products/satz-violinsaiten-thomastik-peter-infeld-pi"
  },
  {
    id: "larsen-original",
    hersteller: "Larsen",
    name: "Original (medium)",
    kern: "Synthetikkern",
    g: { peg: "rot", tail: "gelb-schwarz" },
    d: { peg: "rot", tail: "gelb-schwarz" },
    a: { peg: "rot", tail: "gelb-schwarz" },
    e: { peg: "rot", tail: "gelb" },
    shopUrl: ""
  },
  {
    id: "larsen-virtuoso",
    hersteller: "Larsen",
    name: "Virtuoso (medium)",
    kern: "Synthetikkern",
    g: { peg: "gelb", tail: "gelb-schwarz" },
    d: { peg: "gelb", tail: "gelb-schwarz" },
    a: { peg: "gelb", tail: "gelb-schwarz" },
    e: { peg: "gelb", tail: "blau" },
    shopUrl: ""
  },
  {
    id: "larsen-tzigane",
    hersteller: "Larsen",
    name: "Tzigane (medium)",
    kern: "Synthetikkern",
    g: { peg: "gruen", tail: "gelb-schwarz" },
    d: { peg: "gruen", tail: "gelb-schwarz" },
    a: { peg: "gruen", tail: "gelb-schwarz" },
    e: { peg: "gruen", tail: "gelb" },
    shopUrl: ""
  },
  {
    id: "larsen-aurora",
    hersteller: "Larsen",
    name: "Aurora (medium)",
    kern: "Synthetikkern",
    g: { peg: "gelb", tail: "blau" },
    d: { peg: "gelb", tail: "magenta" },
    a: { peg: "gelb", tail: "rosa" },
    e: { peg: "gelb", tail: "gelb" },
    shopUrl: "https://streicherwelt.de/products/satz-larsen-aurora-violine-4-4"
  },
  {
    id: "larsen-il-cannone-silver",
    hersteller: "Larsen",
    name: "Il Cannone Silver (medium)",
    kern: "Synthetikkern",
    g: { peg: "weiss", tail: "gelb-schwarz" },
    d: { peg: "weiss", tail: "gelb-schwarz" },
    a: { peg: "weiss", tail: "gelb-schwarz" },
    e: { peg: "weiss", tail: "weiss" },
    shopUrl: ""
  },
  {
    id: "larsen-il-cannone-gold",
    hersteller: "Larsen",
    name: "Il Cannone Gold",
    kern: "Synthetikkern",
    bemerkung: "Am Wirbel-Ende zusätzlich ein roter Strich sowie " +
               "je nach Saite ein bis vier kleine schwarze Striche.",
    g: { peg: "gelb", tail: "gelb-schwarz" },
    d: { peg: "gelb", tail: "gelb-schwarz" },
    a: { peg: "gelb", tail: "gelb-schwarz" },
    e: { peg: "gelb", tail: "gelb" },
    shopUrl: "https://streicherwelt.de/products/satz-saiten-violine-larsen-il-cannone-gold"
  },
  {
    id: "larsen-il-cannone",
    hersteller: "Larsen",
    name: "Il Cannone (medium)",
    kern: "Synthetikkern",
    gruppe: "il-cannone",
    bemerkung: "Am Wirbel-Ende der A-, D- und G-Saite zusätzlich " +
               "zwei bis vier kleine schwarze Striche.",
    g: { peg: "gruen", tail: "gelb-schwarz" },
    d: { peg: "gruen", tail: "gelb-schwarz" },
    a: { peg: "gruen", tail: "gelb-schwarz" },
    e: { peg: "gruen", tail: "blau" },
    shopUrl: "https://streicherwelt.de/products/satz-saiten-violine-larsen-il-cannone-medium"
  },
  {
    id: "larsen-il-cannone-direct-focused",
    hersteller: "Larsen",
    name: "Il Cannone direct & focused (medium)",
    kern: "Synthetikkern",
    gruppe: "il-cannone",
    bemerkung: "Am Wirbel-Ende ein bis vier kleine schwarze Striche, " +
               "bei A-, D- und G-Saite zusätzlich ein breiterer " +
               "blauer Strich.",
    g: { peg: "gruen", tail: "gelb-schwarz" },
    d: { peg: "gruen", tail: "gelb-schwarz" },
    a: { peg: "gruen", tail: "gelb-schwarz" },
    e: { peg: "gruen", tail: "blau" },
    shopUrl: ""
  }
];

// Für den Browser bereitstellen
if (typeof window !== "undefined") {
  window.SAITEN_DB = SAITEN_DB;
  window.SAITEN_DB_VERSION = SAITEN_DB_VERSION;
}
