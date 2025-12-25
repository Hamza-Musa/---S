window.addEventListener("load", () => {
  // Fade-in
  document.body.classList.add("loaded");

  // Start screen
  const startScreen = document.getElementById("startScreen");
  const startBtn = document.getElementById("startBtn");
  if (startBtn && startScreen) {
    startBtn.addEventListener("click", () => {
      startScreen.style.display = "none";
    });
  }

  // Popup
  const popup = document.getElementById("popup");
  const popupContent = document.getElementById("popup-content");

  function showMessage(html) {
    if (!popup || !popupContent) return;
    popupContent.innerHTML = html;
    popup.style.display = "flex";
  }

  function closePopup() {
    if (!popup) return;
    popup.style.display = "none";
  }

  if (popup) {
    popup.addEventListener("click", closePopup);
  }
  if (popupContent) {
    popupContent.addEventListener("click", (e) => e.stopPropagation());
  }

  // Elements
  const bagEl = document.getElementById("bag");
  const churchEl = document.getElementById("church");
  const dogsEl = document.getElementById("dogs");
  const aquariumEl = document.getElementById("aquarium");
  const yjhdEl = document.getElementById("yjhd");
  const montaleEl = document.getElementById("montale");
  const couchEl = document.getElementById("couch");
  const windowEl = document.getElementById("window");

  // Click handlers
  if (bagEl) bagEl.addEventListener("click", () => {
    showMessage(`<p>“For the girl with the kind of taste my bank account is low-key scared of.”</p>`);
  });

  if (churchEl) churchEl.addEventListener("click", () => {
    showMessage(`<p>“This place didn’t change my life — but meeting you inside it definitely did.”</p>`);
  });

  if (dogsEl) dogsEl.addEventListener("click", () => {
    showMessage(`<p>“Lyka and Simba: the real main characters of your life.”</p>`);
  });

  if (aquariumEl) aquariumEl.addEventListener("click", () => {
    showMessage(`<p>“You always noticed the small things — even tiny fish in an aquarium.”</p>`);
  });

  if (yjhdEl) yjhdEl.addEventListener("click", () => {
    showMessage(`<p>“Your comfort movie — lowkey became mine too.”</p>`);
  });

  if (montaleEl) montaleEl.addEventListener("click", () => {
    showMessage(`<p>“Montale — because you somehow made perfume shopping feel like a whole storyline.”</p>`);
  });

  if (couchEl) couchEl.addEventListener("click", () => {
    showMessage(`<p>“Our conversations were a bit chaotic, always changing, but they never felt fake.”</p>`);
  });

  // Quiz
  let answers = {};

  function startPersonalityTest() {
    showMessage(`
      <h3>Question 1</h3>
      <p>What did you secretly enjoy the most this year?</p>
      <button onclick="selectQ1('deep')">Deep conversations</button>
      <button onclick="selectQ1('aesthetic')">Pretty moments and vibes</button>
      <button onclick="selectQ1('chaos')">Stupid chaotic moments</button>
    `);
  }

  if (windowEl) windowEl.addEventListener("click", startPersonalityTest);

  // Inline button callbacks (global)
  window.selectQ1 = (choice) => {
    answers.q1 = choice;
    if (!popupContent) return;

    popupContent.innerHTML = `
      <h3>Question 2</h3>
      <p>Your 2026 main vibe is going to be...</p>
      <button onclick="finishQuiz('rich')">Elegant rich woman era</button>
      <button onclick="finishQuiz('soft')">Soft chaos + overthinking (but thriving)</button>
      <button onclick="finishQuiz('loyal')">Golden retriever loyal energy</button>
    `;
  };

  window.finishQuiz = (choice) => {
    answers.q2 = choice;

    let resultHtml = "";

    if (answers.q1 === "aesthetic" && answers.q2 === "rich") {
      resultHtml = `
        <div class="result-card">
          <p class="result-kicker">In 2026, your main energy is going to be…</p>
          <h3 class="result-title">✨ The Parisian Daydreamer ✨</h3>
          <p>Elegant but grounded.<br>
          Soft-hearted but sharp-minded.<br>
          Still making everything around you feel nicer just by being in it.</p>
          <p>Sam, I really appreciate you.<br>
          This year got better for me because of our conversations — the deep ones, the chaotic ones, and the stupid ones.</p>
          <p>Happy New Year.</p>
          <button onclick="finishExperience()">Finish</button>
        </div>
      `;
    } else if (answers.q1 === "deep") {
      resultHtml = `
        <div class="result-card">
          <p class="result-kicker">In 2026, your main energy is going to be…</p>
          <h3 class="result-title">🌙 The Midnight Philosopher 🌙</h3>
          <p>You feel things deeply and you think deeply,<br>
          and our conversations never felt empty.</p>
          <p>Sam, thank you for your honesty this year.<br>
          Even with all our debates, you're my favourite person to talk to.</p>
          <p>Happy New Year.</p>
          <button onclick="finishExperience()">Finish</button>
        </div>
      `;
    } else {
      resultHtml = `
        <div class="result-card">
          <p class="result-kicker">In 2026, your main energy is going to be…</p>
          <h3 class="result-title">🔥 The Chaos Angel 🔥</h3>
          <p>A little dramatic, very real,<br>
          always honest, always worth listening to.</p>
          <p>Thank you for everything this year, Sam.<br>
          Life gets better when you share the journey with the right people.</p>
          <p>Happy New Year.</p>
          <button onclick="finishExperience()">Finish</button>
        </div>
      `;
    }

    showMessage(resultHtml);
  };

  window.finishExperience = () => {
    showMessage(`
      <div class="result-card">
        <p class="result-kicker">That’s it.</p>
        <h3 class="result-title">Happy New Year, Sam 🎆</h3>
        <p>Thank you for being someone I can always talk to.</p>
        <p>Even with all our debates, you’re my favourite person to talk to.</p>
      </div>
    `);
  };
});
