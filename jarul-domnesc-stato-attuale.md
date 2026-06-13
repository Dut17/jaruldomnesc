# Jarul Domnesc Official — Stato Attuale del Progetto

> Aggiornato al **13 giugno 2026**

---

## Panoramica

Sito web statico per **Jarul Domnesc Official**, ristorante di cucina rumena tradizionale a Padova.
Frontend puro (HTML + CSS + JS vanilla). Nessun framework, nessun build tool.
CMS minimalista tramite Google Sheets per il menu del giorno.

---

## Struttura del repo

```
jaruldomnesc/
├── index.html          ✅ Home
├── menu.html           ✅ Menu del giorno (Google Sheets)
├── struttura.html      ✅ Galleria foto della struttura
├── eventi.html         ✅ Pagina eventi
├── contatti.html       ✅ Contatti + mappa + orari
├── privacy.html        ✅ Informativa GDPR completa
├── 404.html            ✅ Pagina di errore personalizzata
├── qr.html             ✅ Redirect QR code (aspetta URL deploy)
├── allergeni.html      ❌ DA FARE — obbligo Reg. UE 1169/2011
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── main.js     ✅ Hamburger mobile, voce navbar attiva
    │   └── cookie.js   ✅ Banner cookie tecnico GDPR
    └── img/
        └── (foto struttura e locandine eventi)
```

---

## Stato pagine

| Pagina | Stato | Note |
|---|---|---|
| `index.html` | ✅ Completa | Hero, about, anteprima menu, testimonial, galleria |
| `menu.html` | ✅ Completa | `fetch()` da Google Sheets, aggiornamento quotidiano |
| `struttura.html` | ✅ Completa | Galleria foto reali del locale |
| `eventi.html` | ✅ Completa | Pagina eventi e locandine |
| `contatti.html` | ✅ Completa | Mappa, orari aggiornati, form contatto |
| `privacy.html` | ✅ Completa | GDPR, cookie policy, dati titolare |
| `404.html` | ✅ Completa | Richiede config Nginx (vedi sotto) |
| `qr.html` | ✅ Pronta | Aggiornare URL dopo deploy |
| `allergeni.html` | ❌ Mancante | **Bloccante per go live** — obbligo di legge UE |

---

## Dati reali compilati

| Campo | Valore |
|---|---|
| Ragione sociale | Jarul Domnesc Official |
| Indirizzo | Viale della Regione Veneto, 6 — 35121 Padova (PD) |
| Telefono | +39 339 854 8172 |
| P.IVA | 05661800283 |
| Orari | Lun–Ven: 12:00–14:30 / Sab–Dom: Solo eventi privati |
| Email | ❌ Da inserire |
| Foto struttura | ✅ Caricate in `assets/img/` |
| URL definitivo | ❌ Da aggiornare post-deploy in `qr.html` |

---

## Componenti tecnici completati

### Design system
- Palette: nero `#1c1714`, bianco `#f5f0e8`, rosso accento `#bd2336`, oro `#b8962e`
- Font: `Playfair Display` (display) + `Inter` (body) via Google Fonts
- CSS custom properties unificate in `style.css`

### JavaScript
- `main.js`: hamburger mobile, voce navbar attiva via `window.location`
- `cookie.js`: banner GDPR iniettato dinamicamente, consenso salvato in cookie `jarul_cookie_ok` (durata 12 mesi), auto-distrugge al click

### Menu dinamico
- `menu.html` legge un Google Sheet pubblico via `fetch()`
- Il ristorante aggiorna una riga ogni mattina → il sito la riflette automaticamente
- Nessun backend, nessun costo infrastrutturale aggiuntivo

### Privacy & Cookie
- `privacy.html`: informativa completa Reg. UE 2016/679
  - Titolare identificato con P.IVA
  - Tabella servizi terze parti (Google Fonts, Maps, Sheets)
  - Tabella cookie con `jarul_cookie_ok` documentato
  - Base giuridica per ogni trattamento
  - Diritti artt. 15–22 GDPR, link al Garante
- `cookie.js`: banner tecnico, nessun cookie di profilazione

### 404
- `404.html`: pagina custom con CTA verso Home e Menu
- ⚠️ **Richiede configurazione Nginx**:
  ```nginx
  error_page 404 /404.html;
  ```

---

## Prossimi step (priorità)

### 1. `allergeni.html` — BLOCCANTE ✋
Obbligo di legge ai sensi del **Reg. UE 1169/2011** (informazione sugli alimenti).
Deve contenere la tabella dei 14 allergeni previsti dalla normativa europea per ogni piatto o categoria del menu.
Senza questa pagina il sito **non può andare online**.

### 2. Deploy infrastruttura
- Dominio `.it` su Aruba (~5–10 €/anno)
- VPS Hetzner CX22 (~4 €/mese)
- Nginx come web server
- SSL con Let's Encrypt (gratuito, auto-rinnovo via certbot)
- Aggiungere `error_page 404 /404.html;` in nginx.conf

### 3. Post-deploy
- Aggiornare URL in `qr.html` con dominio definitivo
- Generare QR code fisico da stampare
- Inserire email reale nel footer e in `privacy.html`

---

## Obblighi legali — checklist go live

| Obbligo | Normativa | Stato |
|---|---|---|
| Informativa Privacy | Reg. UE 2016/679 (GDPR) | ✅ `privacy.html` |
| Cookie banner | GDPR + Linee guida Garante 2021 | ✅ `cookie.js` |
| P.IVA e ragione sociale visibili | D.Lgs. 206/2005 (Codice del Consumo) | ✅ Footer |
| Tabella 14 allergeni | Reg. UE 1169/2011 | ❌ `allergeni.html` mancante |
