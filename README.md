# Jarul Domnesc Official

**Ristorante di cucina rumena, moldava e italiana · Padova**
Sito web statico — Frontend puro (HTML + CSS + JS vanilla). Nessun framework, nessun build tool.
CMS minimalista tramite Google Sheets per il menu del giorno.

---

## Struttura repo

```
jaruldomnesc/
├── index.html        ✅ Completa
├── menu.html         ✅ Completa (Google Sheets + Apps Script)
├── struttura.html    ✅ Completa (immagini aggiornate)
├── eventi.html       ✅ Completa
├── contatti.html     ✅ Completa
├── privacy.html      ✅ Completa
├── 404.html          ✅ Completa
├── qr.html           ✅ Pronta (aggiornare URL post-deploy)
├── nginx.conf        ✅ Creato
├── allergeni.html    ❌ DA FARE — bloccante legale
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── main.js   ✅ Sistemato (IIFE completo)
    │   ├── cookie.js ✅ Banner GDPR
    │   └── i18n.js   ✅ Multilingua IT/EN/RO — fix emoji, fix DOMContentLoaded, fix Unicode escaping
    └── img/
        ├── foto-sala-centrale.jpeg
        ├── sala.jpeg
        ├── tagliere.jpeg / tagliere1.jpeg / tagliere2.jpeg
        ├── logo-jarulDomnesc.png
        └── logo-removebg-jarulDomnesc.png
```

---

## Stato pagine

| Pagina | Stato | Note |
|---|---|---|
| index.html | ✅ Completa | Hero video, about, galleria foto reali |
| menu.html | ✅ Completa | fetch() da Apps Script JSON — parser N piatti per sezione |
| struttura.html | ✅ Completa | Immagini rinominate e riferimenti aggiornati |
| eventi.html | ✅ Completa | Pagina eventi e locandine |
| contatti.html | ✅ Completa | Mappa, orari aggiornati, form contatto |
| privacy.html | ✅ Completa | GDPR, cookie policy, dati titolare |
| 404.html | ✅ Completa | Richiede config Nginx |
| qr.html | ✅ Pronta | Aggiornare URL dopo deploy |
| allergeni.html | ❌ Mancante | Bloccante go-live — Reg. UE 1169/2011 |

---

## Prossimi step

### 🔴 Bloccante go-live
- `allergeni.html` — obbligo Reg. UE 1169/2011, aspetta lista piatti reali dal cliente

### 🟡 Pre-deploy
- **Vocali accentate IT** — sostituire `à`, `è`, `ì`, `ò`, `ù` rimanenti nei testi IT con HTML entities (`&agrave;`, `&egrave;` ecc.)
- **Foto spazio esterno** — aggiungere immagine per la terza card in `struttura.html` (attualmente placeholder)
- **Diacritici RO** — verificare a schermo che tutti i diacritici (`ș`, `ț`, `ă`, `â`, `î`) siano corretti dopo i commit
- Attivare security headers in `nginx.conf` al momento del deploy

### 🟢 Post go-live
- **Setup IntelliJ + Git locale** — clonare il repo e lavorare in locale con Live Preview invece di GitHub web editor
- Aggiornare URL definitivo in `qr.html`
- Stampare QR fisico
- Sezione recensioni 5 stelle (dopo prime recensioni TripAdvisor reali)
- Valutare email dominio `info@jaruldomnesc.it` in sostituzione della Gmail

---

## Checklist obblighi legali

| Obbligo | Normativa | Stato |
|---|---|---|
| Informativa Privacy | Reg. UE 2016/679 (GDPR) | ✅ privacy.html |
| Cookie banner | GDPR + Linee guida Garante 2021 | ✅ cookie.js |
| P.IVA e ragione sociale | D.Lgs. 206/2005 | ✅ Footer |
| Tabella 14 allergeni | Reg. UE 1169/2011 | ❌ allergeni.html mancante |
| Security headers HTTP | Best practice OWASP | ✅ nginx.conf pronto |

---

## Deploy

- **Hosting previsto:** Aruba (.it) oppure Hetzner CX22
- **Web server:** Nginx
- **SSL:** Let's Encrypt
- **Anteprima attuale:** https://dut17.github.io/jaruldomnesc/
