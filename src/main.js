import './styles.css';

const assetUrl = (path) => `${import.meta.env.BASE_URL}assets/${path}`;
const ROWS = 4;
const REELS = 5;
const BASE_BET = 10;
const STARTING_BALANCE = 5000;
const FAST_BLUR_SPIN_DURATION = 2400;
const REEL_SLOW_DURATION = 1180;
const REEL_STOP_STAGGER = 1000;
const REEL_LANDING_HOLD = 180;
const SPIN_DURATION = FAST_BLUR_SPIN_DURATION + REEL_SLOW_DURATION + (REELS - 1) * REEL_STOP_STAGGER + REEL_LANDING_HOLD + 120;
const TWO_BONUS_EXTRA_SPIN = 1600;
const SPIN_STRIP_EXTRA_SYMBOLS = 14;
const CLEOPATRA_REELS = [1, 2, 3];
const CLEOPATRA_STACK_CHANCE = 0.16;
const MAX_FEVER_RETRIGGERS = 99;
const MAIN_ART_SRC = assetUrl('symbols/Main.png');
const REEL_SPIN_AUDIO_SRC = assetUrl('audio/sfx/02.mp3');
const REEL_SPIN_AUDIO_START = 0;
const REEL_SPIN_AUDIO_END = 2.45;
const REEL_STOP_AUDIO_SRC = assetUrl('audio/sfx/12.mp3');
const SMALL_WIN_AUDIO_SRC = assetUrl('audio/sfx/13.mp3');
const MEDIUM_WIN_AUDIO_SRC = assetUrl('audio/sfx/14.mp3');
const BIG_WIN_AUDIO_SRC = assetUrl('audio/sfx/18.mp3');
const WIN_COUNT_AUDIO_SRC = assetUrl('audio/Slotswin.mp3');
const BACKGROUND_MUSIC_SRC = assetUrl('audio/Egyptian.mp3');
const WIN_COUNT_AUDIO_START = 0;
const SMALL_WIN_MAX_MULTIPLIER = 4;
const MEDIUM_WIN_MAX_MULTIPLIER = 14;
const AUTO_SPIN_DELAY = 2000;
const APP_VERSION = 'v2.4.5';

const paylines = [
  { name: 'Top', rows: [0, 0, 0, 0, 0] },
  { name: 'Upper', rows: [1, 1, 1, 1, 1] },
  { name: 'Lower', rows: [2, 2, 2, 2, 2] },
  { name: 'Bottom', rows: [3, 3, 3, 3, 3] },
  { name: 'Viper', rows: [0, 1, 2, 1, 0] },
  { name: 'Dune', rows: [3, 2, 1, 2, 3] },
  { name: 'Twin Peak', rows: [1, 0, 1, 2, 1] },
  { name: 'Crown', rows: [2, 3, 2, 1, 2] },
  { name: 'Step Up', rows: [3, 3, 2, 1, 0] },
  { name: 'Step Down', rows: [0, 0, 1, 2, 3] }
];
const ALL_PAYLINES = createPaylines();
const ACTIVE_LINE_COUNTS = [10, 25, 40, 60, 75];

const symbols = {
  scarab: {
    label: 'Scarab Wild',
    short: 'WILD',
    weight: 3,
    isWild: true,
    payouts: { 3: 20, 4: 80, 5: 400 },
    image: assetUrl('symbols/scarab.png'),
    art: `<svg viewBox="0 0 120 120" aria-hidden="true"><defs><linearGradient id="scarabGold" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#fff47a"/><stop offset="0.48" stop-color="#f5b51d"/><stop offset="1" stop-color="#9d4c0b"/></linearGradient><radialGradient id="scarabRuby" cx="42%" cy="35%" r="62%"><stop offset="0" stop-color="#ffb0a0"/><stop offset="0.28" stop-color="#ef342e"/><stop offset="0.72" stop-color="#a90f18"/><stop offset="1" stop-color="#5d0711"/></radialGradient><radialGradient id="scarabBlue" cx="58%" cy="34%" r="64%"><stop offset="0" stop-color="#bfe8ff"/><stop offset="0.35" stop-color="#317dff"/><stop offset="1" stop-color="#07348e"/></radialGradient></defs><g transform="rotate(-5 60 60)"><path d="M61 12c24 0 43 20 43 46s-19 50-43 50-43-24-43-50 19-46 43-46Z" fill="url(#scarabGold)" stroke="#6d2608" stroke-width="7"/><path d="M31 23c-15 7-24 21-24 38 0 16 8 30 22 38" fill="none" stroke="url(#scarabGold)" stroke-width="8" stroke-linecap="round"/><path d="M88 19c16 7 26 22 26 40 0 17-9 33-25 41" fill="none" stroke="url(#scarabGold)" stroke-width="8" stroke-linecap="round"/><path d="M30 31h53c8 7 13 17 13 29 0 13-5 24-14 32H30c-7-9-11-20-11-33 0-11 4-21 11-28Z" fill="url(#scarabRuby)" stroke="#ffd45c" stroke-width="5"/><path d="M83 28c11 3 19 15 19 31 0 18-8 31-20 34-5-11-7-22-7-34 0-11 3-22 8-31Z" fill="url(#scarabBlue)" stroke="#ffd45c" stroke-width="5"/><path d="M22 58h58" stroke="#ffd85a" stroke-width="9" stroke-linecap="round"/><path d="M33 38c10-7 23-9 38-6M35 83c11 7 24 9 39 5" fill="none" stroke="#ffcec2" stroke-width="4" opacity="0.72"/><path d="M87 38c6 6 8 15 8 24" fill="none" stroke="#cde9ff" stroke-width="4" opacity="0.82"/><circle cx="61" cy="58" r="8" fill="#ffef8b" stroke="#8d3408" stroke-width="4"/></g></svg>`
  },
  lockedWild: {
    label: 'Locked Scarab Wild',
    short: 'LOCK',
    weight: 0,
    isWild: true,
    payouts: {},
    image: assetUrl('symbols/wild.png'),
    art: ''
  },
  sun: {
    label: 'Bonus',
    short: 'BONUS',
    weight: 5,
    isScatter: true,
    payouts: { 3: 12, 4: 60, 5: 220 },
    image: assetUrl('symbols/Bonus.png'),
    art: `<svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="46" r="18"/><path d="M42 48C24 39 15 28 9 15c19 4 34 12 45 25M78 48c18-9 27-20 33-33-19 4-34 12-45 25"/><path d="M60 14v15M60 63v18M29 47H12m96 0H91M35 24l12 12m26 27 12 12m0-51L73 36M47 63 35 75"/><path d="M44 84h32l10 20H34l10-20Z"/></svg>`
  },
  queen: {
    label: 'Queen',
    short: 'QUEEN',
    weight: 4,
    payouts: { 3: 15, 4: 55, 5: 240 },
    image: assetUrl('symbols/queen.png'),
    art: `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M28 33h64v23c0 29-14 50-32 50S28 85 28 56V33Z"/><path d="M26 34 60 8l34 26M38 29l5-17m17 14V8m17 21 5-17"/><path d="M43 60h8m18 0h8M49 80c7 6 15 6 22 0"/><path d="M36 39h48M40 101c-12-12-19-27-17-46m57 46c12-12 19-27 17-46"/></svg>`
  },
  cleopatraTop: {
    label: 'Cleopatra Wild Top',
    short: 'CLEO',
    weight: 0,
    isWild: true,
    payouts: {},
    image: assetUrl('symbols/Cleo1.png'),
    art: `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M17 94c5-43 20-69 43-78 23 9 38 35 43 78H17Z" fill="#f4bb24" stroke="#7a210d" stroke-width="6"/><path d="M27 66c5-24 16-40 33-48 17 8 28 24 33 48" fill="#fff06a" stroke="#c14a13" stroke-width="4"/><path d="M24 94c6-20 18-30 36-30s30 10 36 30" fill="#132a78" stroke="#ffd45c" stroke-width="5"/><path d="M36 73h48M40 57l5-24m15 20V25m15 32 5-24" stroke="#d9262a" stroke-width="5"/><circle cx="60" cy="50" r="9" fill="#45b8ff" stroke="#fff7b4" stroke-width="4"/></svg>`
  },
  cleopatraMiddle: {
    label: 'Cleopatra Wild Face',
    short: 'CLEO',
    weight: 0,
    isWild: true,
    payouts: {},
    image: assetUrl('symbols/Cleo2.png'),
    art: `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M28 8c-10 26-8 76 32 102C100 84 102 34 92 8H28Z" fill="#1b1e7a" stroke="#ffd45c" stroke-width="6"/><path d="M31 20c4 51 14 82 29 88 15-6 25-37 29-88-19 11-39 11-58 0Z" fill="#f4b081" stroke="#7a210d" stroke-width="4"/><path d="M36 56c9-5 17-5 24 0M60 56c7-5 15-5 24 0" stroke="#163f24" stroke-width="5"/><circle cx="49" cy="60" r="5" fill="#55e07b"/><circle cx="71" cy="60" r="5" fill="#55e07b"/><path d="M58 67c-3 11-2 15 5 13M46 91c9 7 19 7 28 0" fill="none" stroke="#8d1f13" stroke-width="5"/><path d="M26 31c21 10 47 10 68 0" stroke="#ffd45c" stroke-width="8"/></svg>`
  },
  cleopatraThird: {
    label: 'Cleopatra Wild Body',
    short: 'CLEO',
    weight: 0,
    isWild: true,
    payouts: {},
    image: assetUrl('symbols/Cleo3.png'),
    art: `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M25 0c5 28 17 48 35 59C78 48 90 28 95 0" fill="#f4b081" stroke="#7a210d" stroke-width="4"/><path d="M16 118c8-39 23-58 44-58s36 19 44 58H16Z" fill="#132a78" stroke="#ffd45c" stroke-width="6"/><path d="M40 66h40l14 20-34 28-34-28 14-20Z" fill="#ffd33c" stroke="#7a210d" stroke-width="5"/><path d="M48 71h24l7 11-19 20-19-20 7-11Z" fill="#3d91ff" stroke="#fff7b4" stroke-width="4"/><path d="M23 22c17 16 57 16 74 0M34 42c14 12 38 12 52 0" fill="none" stroke="#ffd45c" stroke-width="5"/></svg>`
  },
  cleopatraBottom: {
    label: 'Cleopatra Wild Jewel',
    short: 'CLEO',
    weight: 0,
    isWild: true,
    payouts: {},
    image: assetUrl('symbols/Cleo4.png'),
    art: `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M25 0c5 28 17 48 35 59C78 48 90 28 95 0" fill="#f4b081" stroke="#7a210d" stroke-width="4"/><path d="M16 118c8-39 23-58 44-58s36 19 44 58H16Z" fill="#132a78" stroke="#ffd45c" stroke-width="6"/><path d="M40 66h40l14 20-34 28-34-28 14-20Z" fill="#ffd33c" stroke="#7a210d" stroke-width="5"/><path d="M48 71h24l7 11-19 20-19-20 7-11Z" fill="#3d91ff" stroke="#fff7b4" stroke-width="4"/><path d="M23 22c17 16 57 16 74 0M34 42c14 12 38 12 52 0" fill="none" stroke="#ffd45c" stroke-width="5"/></svg>`
  },
  falcon: {
    label: 'Golden Falcon',
    short: 'FALCON',
    weight: 8,
    payouts: { 3: 10, 4: 36, 5: 150 },
    image: assetUrl('symbols/falcon.png'),
    art: `<svg viewBox="0 0 120 120" aria-hidden="true"><path d="M25 70c21-34 44-44 70-31-6 22-22 35-48 38l-15 18"/><path d="M38 59c22 2 39-3 52-17M65 38l16-19 12 18M78 55h18M30 80h54"/><path d="M38 93h34l14 14H25l13-14Z"/></svg>`
  },
  ankh: {
    label: 'Ankh',
    short: 'ANKH',
    weight: 10,
    payouts: { 3: 7, 4: 28, 5: 100 },
    image: assetUrl('symbols/ankh.png'),
    art: `<svg viewBox="0 0 120 120" aria-hidden="true"><g transform="rotate(-16 60 60)"><path d="M60 10c17 0 29 12 29 28 0 13-7 23-17 29l26 24-14 16-24-25-24 25-14-16 26-24C38 61 31 51 31 38c0-16 12-28 29-28Z" fill="#ffc52e" stroke="#7a210d" stroke-width="8"/><path d="M60 21c10 0 17 7 17 17 0 12-8 20-17 25-9-5-17-13-17-25 0-10 7-17 17-17Z" fill="#fff07d" stroke="#b94a12" stroke-width="5"/><path d="M34 88 54 68l-10-8-27 24 13 16Z" fill="#d4232a" stroke="#ffd568" stroke-width="4"/><path d="M86 88 66 68l10-8 27 24-13 16Z" fill="#d4232a" stroke="#ffd568" stroke-width="4"/><path d="M46 99h28l8 12H38l8-12Z" fill="#ffd34f" stroke="#7a210d" stroke-width="6"/><circle cx="60" cy="42" r="8" fill="#46b7ff" stroke="#ffffff" stroke-width="3"/><path d="M39 75c14 8 28 8 42 0" fill="none" stroke="#fff39c" stroke-width="5"/><path d="M52 19c-9 6-13 14-11 24M73 22c6 5 9 12 8 20" fill="none" stroke="#fff39c" stroke-width="4" opacity="0.9"/></g></svg>`
  },
  eye: {
    label: 'Eye',
    short: 'EYE',
    weight: 8,
    payouts: { 3: 8, 4: 30, 5: 120 },
    image: assetUrl('symbols/eye.png'),
    art: ''
  },
  osiris: {
    label: 'Osiris',
    short: 'OSIRIS',
    weight: 7,
    payouts: { 3: 9, 4: 34, 5: 135 },
    image: assetUrl('symbols/osiris.png'),
    art: ''
  },
  sphynx: {
    label: 'Sphynx',
    short: 'SPHYNX',
    weight: 9,
    payouts: { 3: 6, 4: 24, 5: 90 },
    image: assetUrl('symbols/Sphynx.png'),
    art: ''
  },
  a: {
    label: 'A',
    short: 'A',
    weight: 0,
    payouts: { 3: 5, 4: 18, 5: 70 },
    image: assetUrl('symbols/10.png'),
    art: `<svg viewBox="0 0 120 120" aria-hidden="true"><text x="60" y="82" text-anchor="middle" font-size="78" font-family="Georgia, serif" font-weight="900" fill="currentColor" stroke="#ffd76a" stroke-width="3">A</text><path d="M25 88c25-13 45-13 70 0"/></svg>`
  },
  k: {
    label: 'K',
    short: 'K',
    weight: 13,
    payouts: { 3: 4, 4: 16, 5: 60 },
    image: assetUrl('symbols/K.png'),
    art: `<svg viewBox="0 0 120 120" aria-hidden="true"><text x="60" y="82" text-anchor="middle" font-size="78" font-family="Georgia, serif" font-weight="900" fill="currentColor" stroke="#ffd76a" stroke-width="3">K</text><path d="M25 88c25-13 45-13 70 0"/></svg>`
  },
  q: {
    label: 'Q',
    short: 'Q',
    weight: 14,
    payouts: { 3: 4, 4: 14, 5: 52 },
    image: assetUrl('symbols/Q.png'),
    art: `<svg viewBox="0 0 120 120" aria-hidden="true"><text x="60" y="82" text-anchor="middle" font-size="78" font-family="Georgia, serif" font-weight="900" fill="currentColor" stroke="#ffd76a" stroke-width="3">Q</text><path d="M25 88c25-13 45-13 70 0"/></svg>`
  },
  j: {
    label: 'J',
    short: 'J',
    weight: 15,
    payouts: { 3: 3, 4: 12, 5: 44 },
    image: assetUrl('symbols/J.png'),
    art: `<svg viewBox="0 0 120 120" aria-hidden="true"><text x="60" y="82" text-anchor="middle" font-size="78" font-family="Georgia, serif" font-weight="900" fill="currentColor" stroke="#ffd76a" stroke-width="3">J</text><path d="M25 88c25-13 45-13 70 0"/></svg>`
  },
  ten: {
    label: '10',
    short: '10',
    weight: 16,
    payouts: { 3: 3, 4: 10, 5: 36 },
    image: assetUrl('symbols/10.png'),
    art: `<svg viewBox="0 0 120 120" aria-hidden="true"><text x="60" y="82" text-anchor="middle" font-size="66" font-family="Georgia, serif" font-weight="900" fill="currentColor" stroke="#ffd76a" stroke-width="3">10</text><path d="M25 88c25-13 45-13 70 0"/></svg>`
  }
};

const weightedBag = Object.entries(symbols).flatMap(([key, symbol]) =>
  Array.from({ length: symbol.weight }, () => key)
);

const state = {
  balance: STARTING_BALANCE,
  betLevel: 1,
  freeSpins: 0,
  lastWin: 0,
  totalWon: 0,
  spinning: false,
  autoSpins: 0,
  winningLines: [],
  soundEnabled: true,
  showLinePreview: false,
  gameNumber: 1,
  completedSpins: 0,
  lockedFrames: createGrid(false),
  feverSpins: 0,
  feverWilds: 0,
  feverWager: 0,
  feverRetriggers: 0,
  pendingFeverChoices: null,
  grid: createGrid('ten')
};

const sound = {
  context: null,
  masterGain: null,
  backgroundStarted: false,
  backgroundAudio: null,
  reelSpinAudio: null,
  reelSpinStopTimer: null,
  reelStopTimers: [],
  winCountAudio: null
};

let visualReelStopTimers = [];
let winCountTimer = null;

const app = document.querySelector('#app');

app.innerHTML = `
  <section class="machine" aria-label="Mystic Scarab Reels slot machine">
    <div class="marquee">
      <span class="marquee-light" aria-hidden="true"></span>
      <span class="brand-stack"><span>magic reels</span><small>${APP_VERSION}</small></span>
      <strong id="refreshApp" title="Refresh app">Scarab</strong>
      <div class="spin-counter"><span>Game</span><strong id="gameNumber">1</strong><span>of 10</span></div>
    </div>

    <div class="hero-art" aria-hidden="true">
      <img class="hero-main" src="${MAIN_ART_SRC}" alt="" />
      <span class="scarab-wing scarab-wing-left"></span>
      <span class="scarab-wing scarab-wing-right"></span>
      <span class="cleo-eye-sparkle cleo-eye-sparkle-left"></span>
      <span class="cleo-eye-sparkle cleo-eye-sparkle-right"></span>
    </div>

    <div class="cabinet">
      <div class="reels" id="reels" aria-live="polite"></div>
      <div class="payline-strip" id="paylineStrip"></div>
    </div>

    <div class="bottom-panel">
      <div class="bet-cluster">
        <button class="icon-btn" id="betDown" type="button" aria-label="Lower bet">-</button>
        <button class="icon-btn" id="betUp" type="button" aria-label="Raise bet">+</button>
        <div class="stat coins-stat"><span>Coins</span><strong id="bet">0</strong></div>
        <button class="command" id="maxBet" type="button">Max Bet</button>
      </div>

      <div class="stat win-stat"><span>Win</span><strong id="lastWin">0</strong></div>

      <div class="side-stats">
        <div class="stat"><span>Balance</span><strong id="balance">0</strong></div>
        <div class="stat"><span>Fever Spins</span><strong id="freeSpins">0</strong></div>
      </div>

      <div class="spin-cluster">
        <button class="command" id="auto" type="button">Auto 10</button>
        <button class="spin" id="spin" type="button">Spin</button>
        <button class="command sound-toggle" id="soundToggle" type="button" aria-label="Sound on" aria-pressed="true">🔊</button>
      </div>
    </div>

    <div class="message" id="message">Line up matching relics from the first reel. Scarab is wild; three suns trigger free spins.</div>
  <div class="coin-layer" id="coinLayer" aria-hidden="true"></div>

    <div class="auto-modal hidden" id="autoModal" role="dialog" aria-modal="true" aria-labelledby="autoTitle">
      <div class="auto-panel">
        <h2 id="autoTitle">Auto Spins</h2>
        <div class="auto-options">
          <button type="button" data-auto-spins="10">10</button>
          <button type="button" data-auto-spins="20">20</button>
          <button type="button" data-auto-spins="50">50</button>
          <button type="button" data-auto-spins="100">100</button>
        </div>
      </div>
    </div>

    <div class="bonus-splash hidden" id="bonusSplash" aria-live="assertive">
      <div class="bonus-splash-panel">
        <strong>Excellent!</strong>
        <span>You have won a bonus</span>
      </div>
    </div>

    <div class="fever-modal hidden" id="feverModal" role="dialog" aria-modal="true" aria-labelledby="feverTitle">
      <div class="fever-panel">
        <h2 id="feverTitle">Fever Game Bonus</h2>
        <p id="feverMessage">Choose your fever games.</p>
        <div class="fever-options" id="feverOptions"></div>
      </div>
    </div>

    <section class="paytable" aria-label="Paytable">
      <h2>Paytable</h2>
      <div id="paytableRows"></div>
    </section>
  </section>
`;

const elements = {
  reels: document.querySelector('#reels'),
  paylineStrip: document.querySelector('#paylineStrip'),
  gameNumber: document.querySelector('#gameNumber'),
  balance: document.querySelector('#balance'),
  bet: document.querySelector('#bet'),
  lastWin: document.querySelector('#lastWin'),
  winStat: document.querySelector('.win-stat'),
  heroArt: document.querySelector('.hero-art'),
  freeSpins: document.querySelector('#freeSpins'),
  message: document.querySelector('#message'),
  coinLayer: document.querySelector('#coinLayer'),
  autoModal: document.querySelector('#autoModal'),
  bonusSplash: document.querySelector('#bonusSplash'),
  feverModal: document.querySelector('#feverModal'),
  feverMessage: document.querySelector('#feverMessage'),
  feverOptions: document.querySelector('#feverOptions'),
  paytableRows: document.querySelector('#paytableRows'),
  spin: document.querySelector('#spin'),
  auto: document.querySelector('#auto'),
  soundToggle: document.querySelector('#soundToggle'),
  maxBet: document.querySelector('#maxBet'),
  betDown: document.querySelector('#betDown'),
  betUp: document.querySelector('#betUp')
};

renderPaytable();
renderPaylineStrip([]);
render();

elements.spin.addEventListener('click', () => {
  if (state.autoSpins > 0) {
    state.autoSpins = 0;
    elements.message.textContent = state.spinning ? 'Auto stopped after this spin.' : 'Auto stopped.';
    render(false);
    return;
  }

  spin();
});
document.querySelector('#refreshApp').addEventListener('click', () => {
  window.location.replace(`${window.location.pathname}?refresh=${Date.now()}`);
});
elements.auto.addEventListener('click', () => {
  if (state.spinning) return;
  elements.autoModal.classList.remove('hidden');
});
elements.autoModal.addEventListener('click', (event) => {
  if (event.target === elements.autoModal) {
    elements.autoModal.classList.add('hidden');
    return;
  }

  const button = event.target.closest('[data-auto-spins]');
  if (!button) return;

  state.autoSpins = Number(button.dataset.autoSpins);
  elements.autoModal.classList.add('hidden');
  spin();
});
elements.maxBet.addEventListener('click', () => {
  if (state.spinning) return;
  state.betLevel = 5;
  state.showLinePreview = true;
  renderPaylineStrip([]);
  elements.message.textContent = `${getActiveLineCount()} win lines active for this bet.`;
  render();
});
elements.betDown.addEventListener('click', () => changeBet(-1));
elements.betUp.addEventListener('click', () => changeBet(1));
elements.soundToggle.addEventListener('click', () => toggleSound());
elements.feverOptions.addEventListener('click', (event) => {
  const button = event.target.closest('[data-fever-spins]');
  if (!button) return;

  startFeverGames(Number(button.dataset.feverSpins), Number(button.dataset.feverWilds));
});

function changeBet(delta) {
  if (state.spinning) return;
  state.betLevel = Math.min(5, Math.max(1, state.betLevel + delta));
  state.showLinePreview = true;
  renderPaylineStrip([]);
  elements.message.textContent = `${getActiveLineCount()} win lines active for this bet.`;
  render();
}

function createGrid(fill) {
  return Array.from({ length: REELS }, () => Array.from({ length: ROWS }, () => fill));
}

function createPaylines() {
  const lineMap = new Map();
  paylines.forEach((payline) => lineMap.set(payline.rows.join(','), payline));

  for (let first = 0; first < ROWS; first += 1) {
    for (let second = 0; second < ROWS; second += 1) {
      for (let third = 0; third < ROWS; third += 1) {
        for (let fourth = 0; fourth < ROWS; fourth += 1) {
          for (let fifth = 0; fifth < ROWS; fifth += 1) {
            const rows = [first, second, third, fourth, fifth];
            const key = rows.join(',');
            if (!lineMap.has(key)) {
              lineMap.set(key, { name: `Line ${lineMap.size + 1}`, rows });
            }

            if (lineMap.size >= 75) {
              return [...lineMap.values()].map((payline, index) => ({ ...payline, index }));
            }
          }
        }
      }
    }
  }

  return [...lineMap.values()].map((payline, index) => ({ ...payline, index }));
}

function getActiveLineCount() {
  return ACTIVE_LINE_COUNTS[state.betLevel - 1] || ACTIVE_LINE_COUNTS[0];
}

function getActivePaylines() {
  return ALL_PAYLINES.slice(0, getActiveLineCount());
}

function getBonusReelIndexes(grid) {
  return grid
    .map((reel, reelIndex) => reel.includes('sun') ? reelIndex : -1)
    .filter((reelIndex) => reelIndex >= 0);
}

function getSpinTiming(grid) {
  const bonusReels = getBonusReelIndexes(grid);
  const turboReels = bonusReels.length === 2
    ? Array.from({ length: REELS }, (_, reelIndex) => reelIndex).filter((reelIndex) => !bonusReels.includes(reelIndex))
    : [];
  const slowAt = Array.from({ length: REELS }, (_, reelIndex) => FAST_BLUR_SPIN_DURATION + reelIndex * REEL_STOP_STAGGER + (turboReels.includes(reelIndex) ? TWO_BONUS_EXTRA_SPIN : 0));
  const landAt = slowAt.map((start) => start + REEL_SLOW_DURATION + REEL_LANDING_HOLD);
  const finalAt = Math.max(...landAt) + 120;

  return { bonusReels, turboReels, slowAt, landAt, finalAt };
}

function spin() {
  const isFeverSpin = state.feverSpins > 0;
  const wager = isFeverSpin ? state.feverWager || getWager() : getWager();
  const spinCost = isFeverSpin ? 1 : wager;

  if (state.spinning) return;
  if (state.pendingFeverChoices) {
    elements.message.textContent = 'Choose your Fever Games before spinning.';
    return;
  }
  if (state.balance < spinCost) {
    state.autoSpins = 0;
    elements.message.textContent = 'Not enough balance for that bet.';
    return;
  }

  playSpinClick();
  startBackgroundMusic();
  state.spinning = true;
  state.lastWin = 0;
  state.winningLines = [];
  state.showLinePreview = false;
  resetWinCelebration();
  const gameNumber = state.gameNumber;
  state.balance -= spinCost;
  if (isFeverSpin) {
    state.feverSpins -= 1;
  }

  elements.reels.classList.add('spinning');
  const nextGrid = generateResult(isFeverSpin);
  const spinTiming = getSpinTiming(nextGrid);
  startReelSpinSound(spinTiming);
  const suspenseText = spinTiming.turboReels.length ? ' Two Bonus symbols landed; remaining reels are racing...' : '';
  elements.message.textContent = isFeverSpin ? 'Fever game in motion...' : `Game ${gameNumber} is turning...${suspenseText}`;
  renderSpinningReels(nextGrid, spinTiming);
  scheduleVisualReelStops(nextGrid, spinTiming);
  render(false);

  window.setTimeout(() => {
    state.grid = nextGrid;
    const unlockedFrames = !isFeverSpin && gameNumber === 10 ? unlockLockedFrames(state.grid) : 0;
    if (isFeverSpin) {
      applyFeverWilds(state.grid, state.feverWilds);
    }
    const cleopatraWildPositions = applyCleopatraWilds(state.grid);
    const cleopatraWilds = cleopatraWildPositions.length;
    const result = scoreGrid(state.grid, wager);
    state.lastWin = result.totalWin;
    state.totalWon += result.totalWin;
    state.balance += result.totalWin;
    state.spinning = false;
    state.completedSpins += 1;
    if (state.completedSpins % 4 === 0) {
      animateScarabWings();
    }
    elements.reels.classList.remove('spinning');
    clearVisualReelStopTimers();
    stopReelSpinSound();
    state.winningLines = result.winningLines;
    const newLocks = !isFeverSpin && gameNumber !== 10 ? addLockedScarabFrames(state.grid) : 0;
    if (!isFeverSpin) {
      state.gameNumber = gameNumber === 10 ? 1 : gameNumber + 1;
    }
    const finishResult = () => {
      renderPaylineStrip(result.winningLines.map((line) => line.index));
      render();
      announceResult(result);
      speakWinAnnouncement(result.totalWin);
      announceSpecialFeatures({ result, newLocks, unlockedFrames, cleopatraWilds, isFeverSpin, wager });
      playWinSound(result.totalWin, wager);
      const winCountDuration = getWinCountDuration(result.totalWin);
      celebrateWin(result.totalWin, winCountDuration);
      animateWinAmount(result.totalWin, winCountDuration);

      if (state.autoSpins > 0 && !state.pendingFeverChoices && (state.balance >= getWager() || state.freeSpins > 0)) {
        state.autoSpins -= 1;
        const winEffectDuration = result.totalWin > 0
          ? Math.max(winCountDuration + 1200, getWinSoundDuration(result.totalWin, wager))
          : 0;
        window.setTimeout(spin, winEffectDuration + AUTO_SPIN_DELAY);
      } else {
        state.autoSpins = 0;
        render();
      }
    };

    if (cleopatraWildPositions.length > 0) {
      animateCleopatraWildTransition(cleopatraWildPositions);
      window.setTimeout(finishResult, 460);
    } else {
      finishResult();
    }
  }, spinTiming.finalAt);
}

function getAudioContext() {
  if (!sound.context) {
    sound.context = new AudioContext();
  }

  if (sound.context.state === 'suspended') {
    sound.context.resume();
  }

  if (!sound.masterGain) {
    sound.masterGain = sound.context.createGain();
    sound.masterGain.gain.setValueAtTime(state.soundEnabled ? 0.72 : 0.0001, sound.context.currentTime);
    sound.masterGain.connect(sound.context.destination);
  }

  return sound.context;
}

function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  updateSoundToggle();

  if (!state.soundEnabled) {
    stopReelSpinSound();
    stopWinCountSound();
    sound.backgroundAudio?.pause();
  } else if (sound.backgroundStarted) {
    sound.backgroundAudio?.play().catch(() => {});
  }

  if (sound.masterGain && sound.context) {
    const now = sound.context.currentTime;
    sound.masterGain.gain.cancelScheduledValues(now);
    sound.masterGain.gain.setTargetAtTime(state.soundEnabled ? 0.72 : 0.0001, now, 0.05);
  }

  if (sound.reelSpinAudio) {
    sound.reelSpinAudio.volume = state.soundEnabled ? 0.42 : 0;
  }
}

function updateSoundToggle() {
  elements.soundToggle.textContent = state.soundEnabled ? '🔊' : '🔇';
  elements.soundToggle.setAttribute('aria-label', state.soundEnabled ? 'Sound on' : 'Sound off');
  elements.soundToggle.setAttribute('aria-pressed', String(state.soundEnabled));
  elements.soundToggle.classList.toggle('muted', !state.soundEnabled);
}

function connectToMaster(node) {
  getAudioContext();
  node.connect(sound.masterGain);
}

function playSpinClick() {
  if (!state.soundEnabled) return;

  const context = getAudioContext();
  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(740, now);
  oscillator.frequency.exponentialRampToValueAtTime(180, now + 0.06);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.16, now + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.075);

  oscillator.connect(gain);
  connectToMaster(gain);
  oscillator.start(now);
  oscillator.stop(now + 0.08);
}

function startReelSpinSound(spinTiming) {
  if (!state.soundEnabled) return;

  stopReelSpinSound();
  playReelStopSounds(spinTiming);

  const audio = new Audio(REEL_SPIN_AUDIO_SRC);
  audio.volume = 0.42;
  audio.currentTime = REEL_SPIN_AUDIO_START;
  sound.reelSpinAudio = audio;
  audio.play().catch(() => {
    sound.reelSpinAudio = null;
  });
  sound.reelSpinStopTimer = window.setTimeout(() => {
    stopReelSpinSound();
  }, (REEL_SPIN_AUDIO_END - REEL_SPIN_AUDIO_START) * 1000);
}

function playReelStopSounds(spinTiming = getSpinTiming(state.grid)) {
  clearReelStopTimers();

  if (!state.soundEnabled) return;

  Array.from({ length: REELS }, (_, reelIndex) => {
    const timer = window.setTimeout(() => {
      if (!state.soundEnabled) return;

      const audio = new Audio(REEL_STOP_AUDIO_SRC);
      audio.volume = 0.8;
      audio.play().catch(() => {});
    }, Math.max(0, spinTiming.landAt[reelIndex] - REEL_LANDING_HOLD - 90));
    sound.reelStopTimers.push(timer);
  });
}

function clearReelStopTimers() {
  sound.reelStopTimers.forEach((timer) => window.clearTimeout(timer));
  sound.reelStopTimers = [];
}

function stopReelSpinSound() {
  if (sound.reelSpinStopTimer) {
    window.clearTimeout(sound.reelSpinStopTimer);
    sound.reelSpinStopTimer = null;
  }

  if (!sound.reelSpinAudio) return;

  sound.reelSpinAudio.pause();
  sound.reelSpinAudio.currentTime = REEL_SPIN_AUDIO_START;
  sound.reelSpinAudio = null;
}

function startBackgroundMusic() {
  if (!state.soundEnabled) return;
  if (!sound.backgroundAudio) {
    sound.backgroundAudio = new Audio(BACKGROUND_MUSIC_SRC);
    sound.backgroundAudio.loop = true;
    sound.backgroundAudio.volume = 0.18;
  }

  sound.backgroundStarted = true;
  sound.backgroundAudio.play().catch(() => {});
}

function playWinSound(totalWin, wager) {
  if (!state.soundEnabled || totalWin <= 0) return;

  const audioSource = totalWin <= wager * SMALL_WIN_MAX_MULTIPLIER
    ? SMALL_WIN_AUDIO_SRC
    : totalWin <= wager * MEDIUM_WIN_MAX_MULTIPLIER
      ? MEDIUM_WIN_AUDIO_SRC
      : BIG_WIN_AUDIO_SRC;

  if (!audioSource) return;

  const audio = new Audio(audioSource);
  audio.volume = 0.58;
  audio.play().catch(() => {});
}

function getWinSoundDuration(totalWin, wager) {
  if (totalWin <= 0) return 0;

  if (totalWin <= wager * SMALL_WIN_MAX_MULTIPLIER) return 700;
  if (totalWin <= wager * MEDIUM_WIN_MAX_MULTIPLIER) return 1500;
  return 4500;
}

function generateResult(isFeverSpin = false) {
  const grid = Array.from({ length: REELS }, () =>
    Array.from({ length: ROWS }, () => randomSymbol({ excludeScarab: isFeverSpin, excludeBonus: true }))
  );

  placeBonusSymbols(grid);

  if (!isFeverSpin) {
    CLEOPATRA_REELS.forEach((reelIndex) => {
      if (Math.random() < CLEOPATRA_STACK_CHANCE) {
        grid[reelIndex] = ['cleopatraTop', 'cleopatraMiddle', 'cleopatraThird', 'cleopatraBottom'];
      }
    });
  }

  return grid;
}

function placeBonusSymbols(grid) {
  const roll = Math.random();
  const bonusCount = roll < 0.55 ? 0 : roll < 0.82 ? 1 : roll < 0.96 ? 2 : 3;
  const reelIndexes = shuffle(Array.from({ length: REELS }, (_, index) => index)).slice(0, bonusCount);

  reelIndexes.forEach((reelIndex) => {
    const rowIndex = Math.floor(Math.random() * ROWS);
    grid[reelIndex][rowIndex] = 'sun';
  });
}

function addLockedScarabFrames(grid) {
  let lockedCount = 0;

  grid.forEach((reel, reelIndex) => {
    reel.forEach((symbolKey, rowIndex) => {
      if (symbolKey === 'scarab' && !state.lockedFrames[reelIndex][rowIndex]) {
        state.lockedFrames[reelIndex][rowIndex] = true;
        lockedCount += 1;
      }
    });
  });

  return lockedCount;
}

function unlockLockedFrames(grid) {
  let unlockedCount = 0;

  state.lockedFrames.forEach((reel, reelIndex) => {
    reel.forEach((isLocked, rowIndex) => {
      if (!isLocked) return;

      grid[reelIndex][rowIndex] = 'lockedWild';
      state.lockedFrames[reelIndex][rowIndex] = false;
      unlockedCount += 1;
    });
  });

  return unlockedCount;
}

function applyFeverWilds(grid, wildCount) {
  const positions = [];
  grid.forEach((reel, reelIndex) => {
    reel.forEach((symbolKey, rowIndex) => {
      if (!symbols[symbolKey].isWild && !symbols[symbolKey].isScatter) {
        positions.push({ reelIndex, rowIndex });
      }
    });
  });

  shuffle(positions).slice(0, wildCount).forEach(({ reelIndex, rowIndex }) => {
    grid[reelIndex][rowIndex] = 'lockedWild';
  });
}

function applyCleopatraWilds(grid) {
  const transformedPositions = [];

  grid.forEach((reel, reelIndex) => {
    reel.forEach((symbolKey, rowIndex) => {
      if (!symbolKey.startsWith('cleopatra')) return;

      grid[reelIndex][rowIndex] = 'lockedWild';
      transformedPositions.push({ reelIndex, rowIndex });
    });
  });

  return transformedPositions;
}

function animateCleopatraWildTransition(positions) {
  positions.forEach(({ reelIndex, rowIndex }) => {
    const reel = elements.reels.querySelector(`[data-reel-index="${reelIndex}"]`);
    const symbol = reel?.querySelectorAll('.reel-track .symbol')[rowIndex];
    const image = symbol?.querySelector('.symbol-image');
    if (!symbol || !image) return;

    symbol.classList.add('cleo-transforming');
    window.setTimeout(() => {
      symbol.className = 'symbol lockedWild wild cleo-transforming';
      symbol.title = symbols.lockedWild.label;
      image.src = symbols.lockedWild.image;
      image.alt = symbols.lockedWild.label;
    }, 170);
  });
}


function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function scoreGrid(grid, wager) {
  const activePaylines = getActivePaylines();
  const lineBet = wager / activePaylines.length;
  const winningLines = [];
  let lineWin = 0;

  activePaylines.forEach((payline, index) => {
    const lineSymbols = payline.rows.map((row, reel) => grid[reel][row]);
    const firstRegular = lineSymbols.find((key) => !symbols[key].isWild && !symbols[key].isScatter);
    if (!firstRegular) {
      const multiplier = symbols.scarab.payouts[5];
      const win = Math.round(lineBet * multiplier);
      lineWin += win;
      winningLines.push({ index, symbolKey: 'scarab', count: 5, win });
      return;
    }

    let count = 0;
    for (const key of lineSymbols) {
      if (key === firstRegular || symbols[key].isWild) {
        count += 1;
      } else {
        break;
      }
    }

    const multiplier = symbols[firstRegular].payouts[count];
    if (multiplier) {
      const win = Math.round(lineBet * multiplier);
      lineWin += win;
      winningLines.push({ index, symbolKey: firstRegular, count, win });
    }
  });

  const scatters = grid.flat().filter((key) => key === 'sun').length;
  const scatterMultiplier = symbols.sun.payouts[Math.min(5, scatters)] || 0;
  const scatterWin = Math.round((wager / 2) * scatterMultiplier);
  const awardedFreeSpins = 0;

  return {
    lineWin,
    scatterWin,
    totalWin: lineWin + scatterWin,
    awardedFreeSpins,
    scatters,
    winningLines
  };
}

function announceResult(result) {
  if (result.totalWin <= 0) {
    elements.message.textContent = 'No win. Raise the scarab again.';
    return;
  }

  const freeText = result.awardedFreeSpins ? ` + ${result.awardedFreeSpins} free spins` : '';
  if (result.winningLines.length === 0) {
    elements.message.textContent = `${formatCredits(result.totalWin)} won from ${result.scatters} suns${freeText}.`;
    return;
  }

  const lineText = result.winningLines.length === 1 ? '1 winning line' : `${result.winningLines.length} winning lines`;
  const scatterText = result.scatterWin ? `, plus ${formatCredits(result.scatterWin)} from ${result.scatters} suns` : '';
  elements.message.textContent = `${formatCredits(result.totalWin)} won on ${lineText}${scatterText}${freeText}.`;
}

function announceSpecialFeatures({ result, newLocks, unlockedFrames, cleopatraWilds, isFeverSpin, wager }) {
  if (unlockedFrames > 0) {
    elements.message.textContent += ` ${unlockedFrames} locked frames unlocked into WILDs.`;
  } else if (newLocks > 0) {
    elements.message.textContent += ` ${newLocks} scarab frame${newLocks === 1 ? '' : 's'} locked.`;
  }

  if (cleopatraWilds > 0) {
    elements.message.textContent += ` ${cleopatraWilds} Cleopatra symbol${cleopatraWilds === 1 ? '' : 's'} became WILD.`;
  }

  if (result.scatters === 3) {
    if (isFeverSpin && state.feverRetriggers >= MAX_FEVER_RETRIGGERS) return;

    state.pendingFeverChoices = getFeverChoices(result.scatters);
    state.feverWager = wager;
    showBonusSplash(result.scatters);
  }
}

function showBonusSplash(scatterCount) {
  elements.bonusSplash.classList.remove('hidden');
  speakBonusAnnouncement();

  window.setTimeout(() => {
    elements.bonusSplash.classList.add('hidden');
    showFeverChoices(scatterCount);
  }, 2300);
}

function speakBonusAnnouncement() {
  if (!state.soundEnabled || !('speechSynthesis' in window)) return;

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance('Excellent! You have won a bonus!');
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find((voice) => /en-gb/i.test(voice.lang) && /serena|susan|kate|emma|female|google|microsoft/i.test(`${voice.name} ${voice.voiceURI}`))
      || voices.find((voice) => /en-gb/i.test(voice.lang) && !/male|daniel|george|oliver|arthur/i.test(voice.name))
      || voices.find((voice) => /google.*uk.*english.*female|microsoft.*uk.*female|english.*united kingdom.*female/i.test(`${voice.name} ${voice.voiceURI}`))
      || voices.find((voice) => /samantha|serena|victoria|karen|tessa|moira|susan|zira|female/i.test(`${voice.name} ${voice.voiceURI}`))
      || voices.find((voice) => /google.*english.*female|microsoft.*female/i.test(`${voice.name} ${voice.voiceURI}`))
      || voices.find((voice) => voice.lang?.toLowerCase().startsWith('en') && !/male|daniel|fred|alex/i.test(voice.name));

    if (preferredVoice) {
      utterance.voice = preferredVoice;
      utterance.lang = preferredVoice.lang;
    } else {
      utterance.lang = 'en-GB';
    }

    utterance.pitch = 1.12;
    utterance.rate = 0.98;
    utterance.volume = 0.95;
    window.speechSynthesis.speak(utterance);
  };

  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.onvoiceschanged = null;
      speak();
    };
    return;
  }

  speak();
}

function speakWinAnnouncement(totalWin) {
  if (!state.soundEnabled || !('speechSynthesis' in window) || totalWin <= 0) return;

  const phrase = totalWin > 2000
    ? 'WIN! Fantastic! Great win!'
    : totalWin > 1000
      ? 'WIN! Amazing, good win!'
      : 'WIN!';
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(phrase);
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find((voice) => /en-gb/i.test(voice.lang) && /serena|susan|kate|emma|female|google|microsoft/i.test(`${voice.name} ${voice.voiceURI}`))
      || voices.find((voice) => /en-gb/i.test(voice.lang) && !/male|daniel|george|oliver|arthur/i.test(voice.name))
      || voices.find((voice) => /google.*uk.*english.*female|microsoft.*uk.*female|english.*united kingdom.*female/i.test(`${voice.name} ${voice.voiceURI}`))
      || voices.find((voice) => /samantha|serena|victoria|karen|tessa|moira|susan|zira|female/i.test(`${voice.name} ${voice.voiceURI}`))
      || voices.find((voice) => /google.*english.*female|microsoft.*female/i.test(`${voice.name} ${voice.voiceURI}`))
      || voices.find((voice) => voice.lang?.toLowerCase().startsWith('en') && !/male|daniel|fred|alex/i.test(voice.name));

    if (preferredVoice) {
      utterance.voice = preferredVoice;
      utterance.lang = preferredVoice.lang;
    } else {
      utterance.lang = 'en-GB';
    }

    utterance.pitch = 1.16;
    utterance.rate = 1.02;
    utterance.volume = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.onvoiceschanged = null;
      speak();
    };
    return;
  }

  speak();
}

function getFeverChoices(scatterCount) {
  if (scatterCount >= 5) {
    return [
      { spins: 45, wilds: 5 },
      { spins: 30, wilds: 7 },
      { spins: 15, wilds: 10 }
    ];
  }

  if (scatterCount === 4) {
    return [
      { spins: 30, wilds: 5 },
      { spins: 20, wilds: 7 },
      { spins: 10, wilds: 10 }
    ];
  }

  return [
    { spins: 15, wilds: 5 },
    { spins: 10, wilds: 7 },
    { spins: 5, wilds: 10 }
  ];
}

function showFeverChoices(scatterCount) {
  state.autoSpins = 0;
  elements.feverMessage.textContent = `${scatterCount} Bonus symbols triggered Fever Games. Choose more spins or more WILDs.`;
  elements.feverOptions.innerHTML = state.pendingFeverChoices.map((choice) => `
    <button class="fever-option" type="button" data-fever-spins="${choice.spins}" data-fever-wilds="${choice.wilds}">
      <strong>${choice.spins}</strong>
      <span>Fever Games</span>
      <em>${choice.wilds} WILDs</em>
    </button>
  `).join('');
  elements.feverModal.classList.remove('hidden');
}

function startFeverGames(spins, wilds) {
  state.feverSpins = Math.min(99, state.feverSpins + spins);
  state.feverWilds = wilds;
  state.feverRetriggers += 1;
  state.pendingFeverChoices = null;
  elements.feverModal.classList.add('hidden');
  elements.feverOptions.replaceChildren();
  elements.message.textContent = `Fever started: ${spins} games with ${wilds} WILDs each.`;
  render(false);
}

function resetWinCelebration() {
  if (winCountTimer) {
    window.clearInterval(winCountTimer);
    winCountTimer = null;
  }
  stopWinCountSound();
  elements.winStat.classList.remove('win-celebrating');
  elements.heroArt.classList.remove('eyes-sparkling');
  elements.heroArt.classList.remove('wings-flapping');
  elements.coinLayer.replaceChildren();
}

function animateScarabWings() {
  elements.heroArt.classList.remove('wings-flapping');
  void elements.heroArt.offsetWidth;
  elements.heroArt.classList.add('wings-flapping');
}

function getWinCountDuration(totalWin) {
  if (totalWin <= 0) return 0;

  const steps = Math.max(1, Math.ceil(totalWin / 10));
  const intervalMs = getWinCountInterval(totalWin);
  return steps * intervalMs;
}

function getWinCountInterval(totalWin) {
  const steps = Math.max(1, Math.ceil(totalWin / 10));
  return Math.max(12, Math.min(70, Math.floor(2600 / steps)));
}

function animateWinAmount(totalWin, countDuration = getWinCountDuration(totalWin)) {
  if (winCountTimer) {
    window.clearInterval(winCountTimer);
    winCountTimer = null;
  }

  if (totalWin <= 0) {
    elements.lastWin.textContent = '0';
    return;
  }

  let displayedWin = 0;
  const steps = Math.max(1, Math.ceil(totalWin / 10));
  const intervalMs = Math.max(12, Math.round(countDuration / steps));
  elements.lastWin.textContent = '0';
  startWinCountSound();

  winCountTimer = window.setInterval(() => {
    displayedWin = Math.min(totalWin, displayedWin + 10);
    elements.lastWin.textContent = formatCredits(displayedWin);

    if (displayedWin >= totalWin) {
      window.clearInterval(winCountTimer);
      winCountTimer = null;
      elements.lastWin.textContent = formatCredits(totalWin);
      stopWinCountSound();
    }
  }, intervalMs);
}

function startWinCountSound() {
  if (!state.soundEnabled) return;

  stopWinCountSound();
  const audio = new Audio(WIN_COUNT_AUDIO_SRC);
  audio.volume = 0.72;
  audio.loop = true;
  audio.currentTime = WIN_COUNT_AUDIO_START;
  audio.addEventListener('timeupdate', () => {
    if (audio.duration && audio.currentTime > audio.duration - 0.08) {
      audio.currentTime = WIN_COUNT_AUDIO_START;
    }
  });
  sound.winCountAudio = audio;
  audio.play().catch(() => {
    sound.winCountAudio = null;
  });
}

function stopWinCountSound() {
  if (!sound.winCountAudio) return;

  sound.winCountAudio.pause();
  sound.winCountAudio.currentTime = 0;
  sound.winCountAudio = null;
}

function celebrateWin(totalWin, countDuration = getWinCountDuration(totalWin)) {
  if (totalWin <= 0) return;

  const winBox = elements.winStat.getBoundingClientRect();
  const targetX = winBox.left + winBox.width / 2;
  const targetY = winBox.top + winBox.height / 2;
  const coinCount = Math.min(180, Math.max(30, Math.ceil(countDuration / 45)));

  elements.winStat.classList.remove('win-celebrating');
  elements.heroArt.classList.remove('eyes-sparkling');
  void elements.winStat.offsetWidth;
  elements.winStat.classList.add('win-celebrating');
  elements.heroArt.classList.add('eyes-sparkling');
  elements.coinLayer.replaceChildren();

  for (let coinIndex = 0; coinIndex < coinCount; coinIndex += 1) {
    const coin = document.createElement('span');
    const motionClass = coinIndex % 3 === 0 ? 'coin-flip-x' : coinIndex % 3 === 1 ? 'coin-flip-y' : 'coin-spin-flat';
    coin.className = `coin-burst ${motionClass}`;
    const startX = window.innerWidth * (0.08 + Math.random() * 0.84);
    const startY = -40 - Math.random() * 180;
    const endX = targetX + (Math.random() - 0.5) * winBox.width * 0.72;
    const endY = targetY + (Math.random() - 0.5) * winBox.height * 0.5;

    coin.style.setProperty('--start-x', `${startX}px`);
    coin.style.setProperty('--start-y', `${startY}px`);
    coin.style.setProperty('--end-x', `${endX}px`);
    coin.style.setProperty('--end-y', `${endY}px`);
    coin.style.setProperty('--spin', `${360 + Math.floor(Math.random() * 720)}deg`);
    coin.style.setProperty('--flip', `${360 + Math.floor(Math.random() * 1080)}deg`);
    coin.style.animationDelay = `${Math.floor((coinIndex / coinCount) * Math.max(0, countDuration - 500))}ms`;
    coin.style.animationDuration = `${900 + Math.floor(Math.random() * 520)}ms`;
    elements.coinLayer.append(coin);
  }

  window.setTimeout(() => {
    elements.coinLayer.replaceChildren();
  }, countDuration + 1200);
}

function getWager() {
  return BASE_BET * 10 * state.betLevel;
}

function render(updateGrid = true) {
  elements.gameNumber.textContent = String(state.gameNumber);
  elements.balance.textContent = formatCredits(state.balance);
  elements.bet.textContent = formatCredits(getWager());
  elements.lastWin.textContent = formatCredits(state.lastWin);
  elements.freeSpins.textContent = String(state.feverSpins);
  elements.spin.disabled = state.spinning && state.autoSpins === 0;
  elements.auto.disabled = state.spinning;
  elements.maxBet.disabled = state.spinning;
  elements.betDown.disabled = state.spinning || state.betLevel === 1;
  elements.betUp.disabled = state.spinning || state.betLevel === 5;
  elements.auto.textContent = state.autoSpins > 0 ? `Auto ${state.autoSpins}` : 'Auto 10';
  elements.spin.textContent = state.autoSpins > 0 ? 'Stop' : 'Spin';
  elements.maxBet.textContent = 'Max';

  if (updateGrid) {
    elements.reels.innerHTML = state.grid.map((reel, reelIndex) => renderSettledReel(reel, reelIndex)).join('') + renderPersistentOverlays();
  }
}

function renderPersistentOverlays() {
  return `${state.showLinePreview ? renderActiveLineOverlay() : ''}${renderLockedFrameOverlay()}${renderWinOverlay(state.winningLines)}`;
}

function renderSettledReel(reel, reelIndex) {
  return `
    <div class="reel settled-reel" data-reel-index="${reelIndex}" style="--reel-index: ${reelIndex}">
      <div class="reel-glass"></div>
      <div class="reel-window">
        <div class="reel-track settled-track">
          ${reel.map((symbolKey, rowIndex) => renderSymbol(symbolKey, { locked: state.lockedFrames[reelIndex]?.[rowIndex] })).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderSpinningReels(finalGrid, spinTiming = getSpinTiming(finalGrid)) {
  elements.reels.innerHTML = finalGrid.map((reel, reelIndex) => {
    const strip = [
      ...reel,
      ...Array.from({ length: SPIN_STRIP_EXTRA_SYMBOLS }, (_, index) => index % ROWS === 0 ? reel[index % reel.length] : randomSymbol()),
      ...reel
    ];

    const turboClass = spinTiming.turboReels.includes(reelIndex) ? ' turbo-reel' : '';

    return `
      <div class="reel spinning-reel${turboClass}" data-reel-index="${reelIndex}" style="--reel-index: ${reelIndex}; --spin-distance: -${SPIN_STRIP_EXTRA_SYMBOLS + ROWS}00%;">
        <div class="reel-glass"></div>
        <div class="reel-window">
          <div class="reel-track spin-track">
            ${strip.map((symbolKey) => renderSymbol(symbolKey)).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('') + renderLockedFrameOverlay();
}

function renderSlowingReel(reel, reelIndex) {
  const strip = [
    ...reel,
    ...Array.from({ length: ROWS * 2 }, () => randomSymbol())
  ];

  return `
    <div class="reel slowing-reel" data-reel-index="${reelIndex}" style="--reel-index: ${reelIndex}">
      <div class="reel-glass"></div>
      <div class="reel-window">
        <div class="reel-track slowing-track">
          ${strip.map((symbolKey) => renderSymbol(symbolKey)).join('')}
        </div>
      </div>
    </div>
  `;
}

function scheduleVisualReelStops(finalGrid, spinTiming = getSpinTiming(finalGrid)) {
  clearVisualReelStopTimers();

  finalGrid.forEach((reel, reelIndex) => {
    const slowTimer = window.setTimeout(() => {
      const reelElement = elements.reels.querySelector(`[data-reel-index="${reelIndex}"]`);
      if (!reelElement) return;

      reelElement.outerHTML = renderSlowingReel(reel, reelIndex);
    }, spinTiming.slowAt[reelIndex]);

    const stopTimer = window.setTimeout(() => {
      const reelElement = elements.reels.querySelector(`[data-reel-index="${reelIndex}"]`);
      if (!reelElement) return;

      reelElement.classList.add('landed-reel');
    }, spinTiming.landAt[reelIndex]);

    visualReelStopTimers.push(slowTimer, stopTimer);
  });
}

function clearVisualReelStopTimers() {
  visualReelStopTimers.forEach((timer) => window.clearTimeout(timer));
  visualReelStopTimers = [];
}

function randomSymbol(options = {}) {
  const bag = weightedBag.filter((symbolKey) => {
    if (options.excludeScarab && symbolKey === 'scarab') return false;
    if (options.excludeBonus && symbolKey === 'sun') return false;
    return true;
  });
  return bag[Math.floor(Math.random() * bag.length)];
}

function renderSymbol(symbolKey, options = {}) {
  const symbol = symbols[symbolKey];
  const classes = ['symbol', symbolKey, symbol.isWild ? 'wild' : '', symbol.isScatter ? 'scatter' : '', options.locked ? 'locked-frame' : ''].join(' ');
  const cleopatraAnimation = symbolKey.startsWith('cleopatra') ? renderCleopatraAnimation(symbolKey) : '';
  return `
    <div class="${classes}" title="${symbol.label}">
      <div class="symbol-art"><img class="symbol-image" src="${symbol.image}" alt="${symbol.label}" /></div>
      ${cleopatraAnimation}
    </div>
  `;
}

function renderCleopatraAnimation(symbolKey) {
  return '<div class="cleo-shimmer"></div>';
}

function renderWinOverlay(winningLines) {
  if (!winningLines.length) return '';

  const frames = winningLines.flatMap((line) => {
    const payline = ALL_PAYLINES[line.index];
    const matchedReels = Math.min(REELS, Math.max(1, line.count || REELS));
    return payline.rows.slice(0, matchedReels).map((row, reelIndex) => {
      return `
        <div class="win-box" style="--reel: ${reelIndex}; --row: ${row};">
          <span class="win-box-spark spark-a"></span>
          <span class="win-box-spark spark-b"></span>
          <span class="win-box-spark spark-c"></span>
          <span class="win-box-spark spark-d"></span>
        </div>
      `;
    });
  }).join('');

  return `
    <div class="win-overlay" aria-hidden="true">
      ${frames}
    </div>
  `;
}

function renderActiveLineOverlay() {
  const activePaylines = getActivePaylines();
  const polylines = activePaylines.map((payline) => {
    const points = payline.rows
      .map((row, reelIndex) => `${((reelIndex + 0.5) / REELS) * 100},${((row + 0.5) / ROWS) * 100}`)
      .join(' ');
    return `<polyline class="active-win-line" points="${points}" />`;
  }).join('');

  return `
    <svg class="active-line-overlay" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      ${polylines}
    </svg>
  `;
}

function renderLockedFrameOverlay() {
  const frames = state.lockedFrames.flatMap((reel, reelIndex) =>
    reel.map((isLocked, rowIndex) => isLocked ? `
      <div class="locked-frame-overlay" style="--reel: ${reelIndex}; --row: ${rowIndex};"></div>
    ` : '')
  ).join('');

  if (!frames) return '';

  return `<div class="lock-overlay" aria-hidden="true">${frames}</div>`;
}

function renderPaylineStrip(winningIndexes) {
  const winners = new Set(winningIndexes);
  elements.paylineStrip.innerHTML = `
    <span class="payline-summary">${getActiveLineCount()} win lines active</span>
    <span class="payline-summary wins">${winners.size} winning</span>
  `;
}

function renderPaytable() {
  elements.paytableRows.innerHTML = Object.entries(symbols).map(([key, symbol]) => `
    <div class="paytable-row">
      <div class="mini ${key}"><img src="${symbol.image}" alt="${symbol.label}" /></div>
      <strong>${symbol.label}</strong>
      <span>3x ${symbol.payouts[3] || '-'} | 4x ${symbol.payouts[4] || '-'} | 5x ${symbol.payouts[5] || '-'}</span>
    </div>
  `).join('');
}

function formatCredits(value) {
  return new Intl.NumberFormat('en-US').format(value);
}