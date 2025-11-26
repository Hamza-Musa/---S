// Popup references
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");

function showMessage(message) {
  popupContent.innerHTML = message;
  popup.classList.remove("hidden");
}

popup.addEventListener("click", () => popup.classList.add("hidden"));


// ===============================
// CLICKABLE OBJECT MESSAGES
// ===============================

document.getElementById("bag").onclick = () =>
  showMessage(`
    <p>“For the girl with the kind of taste my bank account is scared of.”</p>
  `);

document.getElementById("church").onclick = () =>
  showMessage(`
    <p>“This place didn’t change my life — but meeting you inside it definitely did.”</p>
  `);

document.getElementById("dogs").onclick = () =>
  showMessage(`
    <p>“Lyka and Simba: The real main characters of your life.”</p>
  `);

document.getElementById("aquarium").onclick = () =>
  showMessage(`
    <p>“You always noticed the small things — even fish.”</p>
  `);

document.getElementById("yjhd").onclick = () =>
  showMessage(`
    <p>“Your comfort movie — lowkey became mine too.”</p>
  `);

document.getElementById("astrology").onclick = () =>
  showMessage(`
    <p>“Only you could convince me to take astrology seriously... kinda.”</p>
  `);

document.getElementById("couch").onclick = () =>
  showMessage(`
    <p>“Our conversations were chaotic, changing, but always real.”</p>
  `);


// ===============================
// PERSONALITY QUIZ VIA WINDOW
// ===============================

document.getElementById("window").onclick = () => {
  startPersonalityTest();
};

let answers = {};

function startPersonalityTest() {
  popupContent.innerHTML = `
    <h3>Question 1</h3>
    <p>What did you secretly enjoy the most?</p>
    <button onclick="selectQ1('deep')">Deep conversations</button>
    <button onclick="selectQ1('aesthetic')">Pretty moments</button>
    <button onclick="selectQ1('chaos')">Stupid chaotic moments</button>
  `;
  popup.classList.remove("hidden");
}

window.selectQ1 = (choice) => {
  answers.q1 = choice;
  popupContent.innerHTML = `
    <h3>Question 2</h3>
    <p>Your 2026 main vibe:</p>
    <button onclick="finish('rich')">Elegant rich woman era</button>
    <button onclick="finish('soft')">Soft chaos + overthinking</button>
    <button onclick="finish('loyal')">Golden retriever loyal energy</button>
  `;
};

window.finish = (final) => {
  answers.q2 = final;

  let resultText = "";

  // ===============================
  // ARCHETYPE LOGIC
  // ===============================

  if (answers.q1 === "aesthetic" && answers.q2 === "rich") {
    resultText = `
      <h3>✨ The Parisian Daydreamer ✨</h3>
      <p>Elegant but grounded.<br>
      Soft-hearted but sharp-minded.<br>
      Making everything around you feel nicer just by being in it.</p>

      <p>Sam, I really appreciate you.<br>
      This year got better for me because of our conversations — the deep ones, the chaotic ones, the stupid ones.<br><br>
      Happy New Year.</p>
    `;
  }

  else if (answers.q1 === "deep") {
    resultText = `
      <h3>🌙 The Midnight Philosopher 🌙</h3>
      <p>You feel things deeply, think deeply,<br>
      and our conversations never felt empty — ever.</p>

      <p>Sam, thank you for your honesty this year.<br>
      Even with all our debates, you're my favourite person to talk to.<br><br>
      Happy New Year.</p>
    `;
  }

  else {
    resultText = `
      <h3>🔥 The Chaos Angel 🔥</h3>
      <p>A little dramatic, very real,<br>
      always honest, always worth listening to.</p>

      <p>Thank you for everything this year, Sam.<br>
      Life gets better when you share the journey with the right people.</p>
    `;
  }

  popupContent.innerHTML = resultText;
};
