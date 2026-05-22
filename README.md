# Streicherwelt-Saitenfinder Violine

Web-App "Welche Saiten habe ich?" – ein Saiten-Erkenner für Violine.
Der Kunde wählt die Wicklungsfarben an Wirbel- und Saitenhalter-Ende
seiner vier Saiten; die App gleicht sie mit einer Datenbank gängiger
Saitensätze ab.

## Aufbau

- `index.html` – die App: Oberfläche, Erkennungslogik, Gestaltung.
- `saiten-daten.js` – die Saiten-Datenbank. Hier werden neue Sätze
  gepflegt; der Aufbau ist im Kopf der Datei dokumentiert.

Eine statische Seite – kein Server, kein Build-Schritt nötig.

## Datenbank erweitern

Neue Saitensätze ausschließlich in `saiten-daten.js` eintragen.
Die Vorlage und alle Regeln stehen im Kommentar am Dateianfang.
Nach jeder Änderung die Versionszeile `SAITEN_DB_VERSION` hochzählen.

## Betrieb

Gehostet auf Vercel, eingebunden in die Shopify-Seite von
streicherwelt.de.
