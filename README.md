# Jarul Domnesc Official

**Ristorante di cucina rumena, moldava e italiana · Padova**
Sito web statico — Frontend puro (HTML + CSS + JS vanilla). Nessun framework, nessun build tool.
CMS minimalista tramite Google Sheets per il menu del giorno.

---

## Struttura repo

```
jaruldomnesc/
├── index.html        ✅ Completa
├── menu.html         ✅ Completa (Google Sheets)
├── struttura.html    ✅ Completa
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
    │   └── i18n.js   ❌ DA FARE — multilingua IT/EN/RO
    └── img/
```

---

## Stato pagine

| Pagina | Stato | Note |
|---|---|---|
| index.html | ✅ Completa | Hero video, about, galleria foto reali |
| menu.html | ✅ Completa | fetch() da Google Sheets, aggiornamento quotidiano |
| struttura.html | ✅ Completa | Galleria foto reali del locale |
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
- `i18n.js` — multilingua IT / EN / RO (menu.html esclusa)
- Aggiungere `data-i18n` e bottone lingua in: `index.html`, `struttura.html`, `eventi.html`, `contatti.html`, `privacy.html`
- Attivare security headers in `nginx.conf` al momento del deploy

### 🟢 Post go-live
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
