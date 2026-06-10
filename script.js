const facts = [
  {
    topic: "Why two digits?",
    title: "Memory used to be expensive.",
    text: "Early programmers often stored 1998 as “98.” It saved precious space, but left computers unable to tell whether “00” meant 1900 or 2000.",
  },
  {
    topic: "What could break?",
    title: "Anything that relied on dates.",
    text: "Bank interest, airline bookings, payroll, power monitoring, and medical systems all used date calculations that could behave unpredictably.",
  },
  {
    topic: "Why was it a concern?",
    title: "The technical risk was real.",
    text: "Serious failures were possible in uncorrected systems. Public predictions ranged from small date errors to bigger disruptions in daily services.",
  },
  {
    topic: "What did it cost?",
    title: "An estimated $300–600 billion.",
    text: "Organizations worldwide audited old code, replaced equipment, tested backups, and hired armies of programmers before the deadline.",
  },
  {
    topic: "Did anything fail?",
    title: "Yes, but failures were limited.",
    text: "Some systems displayed wrong dates, rejected cards, or generated errors. Essential services largely continued without major disruption.",
  },
  {
    topic: "Was Y2K overhyped?",
    title: "Its quiet ending was the result.",
    text: "The lack of catastrophe is often credited to years of expensive preparation. Y2K became a classic lesson in preventing a crisis that then looks imaginary.",
  },
];

const broadcastScript = [

  `In the final hours of 1999, as the clock approached midnight, a wave of anxiety swept across the world. Many people rushed to banks to withdraw their money and crowded into grocery stores to stockpile food, filled with fear about what would happen when the new millennium arrived. This panic was all driven by a single, looming digital threat: the Y2K bug.`,
  `The Y2K bug refers to potential computer processing errors stemming from how calendar data was formatted and stored for the year 2000 and beyond. Because digital storage was expensive in the early days of computing, programmers represented four-digit years using only the final two digits to save memory. This made the year 2000 indistinguishable from 1900, creating a critical logic flaw. Since computer systems could not correctly interpret the new dates, the glitch threatened to disrupt global infrastructure. United States Deputy Secretary of Defense John Hamre warned, "The Y2K problem is the electronic equivalent of the El Niño and there will be nasty surprises around the globe.”`,
  `While early tech professionals were aware of this design, they thought the year 2000 was far enough in the future that these systems would be replaced by higher-tech software long before a problem arose. However major industries consistently delayed upgrading their infrastructure due to a false sense of security. Executives saw no reason to spend massive amounts of money fixing a system that was currently working perfectly.`,
  `In the years leading up to the millennium, public awareness of this “Y2K scare” steadily grew. Analysts predicted that rectifying the global damage caused by the bug would cost between $300 billion to $600 billion. This anxiety was amplified by traditional media outlets, which frequently exaggerates the threat to capture public attention. Because people at the time relied on traditional news broadcasts and placed immense trust in journalists, a widespread lack of clarity regarding the actual dangers took hold.`,
  `As the new year approached, public anxiety reached a fever pitch. Many feared that the Y2K bug would trigger catastrophic failures, such as that nuclear missiles would launch autonomously, prison gates would swing open, dams would collapse, and banks would lose all their data. Millions of people around the world spent their final moments of the 1900s staring at the clock, anticipating the worst. To combat this, governments established special committees to monitor remedial work and contingency planning. They focused on crucial infrastructure, such as telecommunications, to ensure that critical services fixed their own systems and were prepared for failures elsewhere.`,
  `While the public braced for the worst, some commentators and experts argued that the media coverage largely amounted to scaremongering. These experts later claimed that despite sending out hundreds of press releases showing research that the problem was overblown, they were largely ignored by the press. Ultimately, the Y2K panic was driven by three main forces: technology advancing at a rapid rate, the foreign nature of the relatively new "personal computer," and information becoming more readily available.`,
  `It was only the safe passing of January 1, 2000, that fully quelled public fears. However, the public’s anxiety wasn't entirely for nothing, as several minor glitches did occur around the globe. In Australia, bus ticket validation machines failed to operate across two states. In Bulgaria, the police computer system defaulted to the year 1900, resulting in documents being issued with impossible expiration dates of February 29, 2005, and February 29, 2010 (neither of which were leap years). Meanwhile, in Canada, a tax collection program in Montreal interpreted February 29 as March 1, 1900. While residents could still pay their taxes, computers miscalculated interest rates for delinquent accounts, and citizens were locked out of their tax bills and property evaluations. Despite happening just one day before taxes were due, authorities had to shut down the city's entire tax system to fix the glitch.`,
  `The costs of trying to fix the problem were also thought-provoking; it is estimated that it cost $300 to $600 billion. Consider the amount of money countries spent on updating software to be Y2K-proof. The US spent so much more money on Y2K remediation, whereas Italy spent very little, and both countries experienced roughly the same level of Y2K problems. So this let people think if it was worth it.`,
  `The US would end up spending about $100 billion on the Y2K repair bill, designed to combat any glitches related to the 2000 switch. Regardless of how severe things could have been, Y2K wasn't fake; it was avoided. But since computer glitches are often so unpredictable and can yield different results depending on the setup, there is theoretically no way of knowing just how much damage Y2K could have caused. Whether or not the US would have been okay without the Y2K repair bill will always be speculation. But despite all the fear-mongering Y2K created, there was good. It forced thousands of computers to upgrade to the latest and greatest software, something that likely won't happen for a long time. It not only prepared people to be more critical of the things they are told, but it also taught them to consistently adapt to an ever-changing world. But the bug isn't all over yet. There will be similar issues, like the Year 2038 problem. Many systems use Unix time and store it in a signed 32-bit integer. This data type is only capable of representing integers between −(2³¹) and (2³¹)−1, treated as the number of seconds since the epoch on 1 January 1970 at 00:00:00 UTC. These systems can only represent times between 13 December 1901 at 20:45:52 UTC and 19 January 2038 at 03:14:07 UTC. If these systems are not updated and fixed, then dates all across the world that rely on Unix time will wrongfully display the year as 1901 beginning at 03:14:08 UTC on 19 January 2038. So, the past might occur again. By understanding the historical continuity of our reliance on technology, we can learn from the past to see, and protect, our future.`,
];

const cardGrid = document.querySelector("#cardGrid");
const cardCounter = document.querySelector("#cardCounter");
const resetCards = document.querySelector("#resetCards");
const playButton = document.querySelector("#playButton");
const audioUpload = document.querySelector("#audioUpload");
const audioPlayer = document.querySelector("#audioPlayer");
const trackTitle = document.querySelector("#trackTitle");
const progress = document.querySelector("#progress");
const progressFill = document.querySelector("#progressFill");
const timeDisplay = document.querySelector("#timeDisplay");
const checkScriptButton = document.querySelector("#checkScriptButton");
const scriptDialog = document.querySelector("#scriptDialog");
const closeScriptButton = document.querySelector("#closeScriptButton");
const scriptLines = document.querySelector("#scriptLines");
const scriptWordCount = document.querySelector("#scriptWordCount");
const scriptReadTime = document.querySelector("#scriptReadTime");
const scriptReviewCount = document.querySelector("#scriptReviewCount");
const resetScriptReview = document.querySelector("#resetScriptReview");
const finishScriptReview = document.querySelector("#finishScriptReview");

let speech;
let speechStart = 0;
let speechElapsed = 0;
let speechTimer;
const demoDuration = 475;

function renderBroadcastScript() {
  const wordCount = broadcastScript.join(" ").trim().split(/\s+/).length;
  const readMinutes = Math.max(1, Math.ceil(wordCount / 130));

  scriptLines.innerHTML = broadcastScript
    .map(
      (line, index) => `
        <li>
          <label>
            <input type="checkbox" data-script-check="${index}" />
            <span class="script-line-number">${String(index + 1).padStart(2, "0")}</span>
            <span>${line}</span>
          </label>
        </li>
      `,
    )
    .join("");

  scriptWordCount.textContent = `${wordCount} words`;
  scriptReadTime.textContent = `${readMinutes} minute read`;
  updateScriptReviewCount();
}

function updateScriptReviewCount() {
  const checked = scriptLines.querySelectorAll("input:checked").length;
  scriptReviewCount.textContent = `${checked} / ${broadcastScript.length} checked`;
  finishScriptReview.textContent =
    checked === broadcastScript.length ? "Review complete" : "Finish review";
}

function renderCards() {
  cardGrid.innerHTML = facts
    .map(
      (fact, index) => `
        <button class="fact-card" type="button" aria-label="Open card ${index + 1}: ${fact.topic}" aria-pressed="false">
          <span class="card-inner">
            <span class="card-face card-front">
              <span class="card-index">File / 0${index + 1}</span>
              <strong class="card-topic">${fact.topic}</strong>
              <span class="card-action"><span>Reveal answer</span><span>↗</span></span>
            </span>
            <span class="card-face card-back">
              <span class="card-index">Archive note / 0${index + 1}</span>
              <strong>${fact.title}</strong>
              <p>${fact.text}</p>
              <span class="card-action"><span>Flip back</span><span>↙</span></span>
            </span>
          </span>
        </button>
      `,
    )
    .join("");

  document.querySelectorAll(".fact-card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-open");
      card.setAttribute("aria-pressed", card.classList.contains("is-open"));
      updateCardCount();
    });
  });
}

function updateCardCount() {
  const count = document.querySelectorAll(".fact-card.is-open").length;
  cardCounter.textContent = `${count} of ${facts.length} cards opened`;
}

function formatTime(seconds) {
  const safeSeconds = Math.max(0, Math.floor(seconds || 0));
  return `${String(Math.floor(safeSeconds / 60)).padStart(2, "0")}:${String(safeSeconds % 60).padStart(2, "0")}`;
}

function setProgress(current, duration) {
  const percent = duration ? Math.min(100, (current / duration) * 100) : 0;
  progressFill.style.width = `${percent}%`;
  progress.setAttribute("aria-valuenow", Math.round(percent));
  timeDisplay.textContent = `${formatTime(current)} / ${formatTime(duration)}`;
}

function stopDemo() {
  window.speechSynthesis.cancel();
  clearInterval(speechTimer);
  speech = null;
  speechElapsed = 0;
  playButton.classList.remove("is-playing");
  playButton.setAttribute("aria-label", "Play audio overview");
  setProgress(0, demoDuration);
}

function playDemo() {
  speech = new SpeechSynthesisUtterance(broadcastScript.join(" "));
  speech.rate = 0.93;
  speech.pitch = 0.9;
  speech.onend = stopDemo;
  speech.onerror = stopDemo;
  speechStart = Date.now();
  window.speechSynthesis.speak(speech);
  playButton.classList.add("is-playing");
  playButton.setAttribute("aria-label", "Pause audio overview");

  speechTimer = setInterval(() => {
    speechElapsed = Math.min(demoDuration, (Date.now() - speechStart) / 1000);
    setProgress(speechElapsed, demoDuration);
  }, 250);
}

function togglePlayback() {
  if (audioPlayer.src) {
    if (audioPlayer.paused) audioPlayer.play();
    else audioPlayer.pause();
    return;
  }

  if (speech) stopDemo();
  else playDemo();
}

playButton.addEventListener("click", togglePlayback);

audioUpload.addEventListener("change", () => {
  const file = audioUpload.files[0];
  if (!file) return;
  stopDemo();
  audioPlayer.src = URL.createObjectURL(file);
  trackTitle.textContent = file.name.replace(/\.[^/.]+$/, "");
  audioPlayer.play();
});

audioPlayer.addEventListener("play", () => {
  playButton.classList.add("is-playing");
  playButton.setAttribute("aria-label", "Pause audio overview");
});

audioPlayer.addEventListener("pause", () => {
  playButton.classList.remove("is-playing");
  playButton.setAttribute("aria-label", "Play audio overview");
});

audioPlayer.addEventListener("timeupdate", () => {
  setProgress(audioPlayer.currentTime, audioPlayer.duration);
});

audioPlayer.addEventListener("loadedmetadata", () => {
  setProgress(audioPlayer.currentTime, audioPlayer.duration);
});

progress.addEventListener("click", (event) => {
  if (!audioPlayer.src || !audioPlayer.duration) return;
  const ratio = (event.clientX - progress.getBoundingClientRect().left) / progress.clientWidth;
  audioPlayer.currentTime = ratio * audioPlayer.duration;
});

resetCards.addEventListener("click", () => {
  document.querySelectorAll(".fact-card").forEach((card) => {
    card.classList.remove("is-open");
    card.setAttribute("aria-pressed", "false");
  });
  updateCardCount();
});

checkScriptButton.addEventListener("click", () => scriptDialog.showModal());
closeScriptButton.addEventListener("click", () => scriptDialog.close());
finishScriptReview.addEventListener("click", () => scriptDialog.close());

scriptDialog.addEventListener("click", (event) => {
  if (event.target === scriptDialog) scriptDialog.close();
});

scriptLines.addEventListener("change", updateScriptReviewCount);

resetScriptReview.addEventListener("click", () => {
  scriptLines.querySelectorAll("input").forEach((checkbox) => {
    checkbox.checked = false;
  });
  updateScriptReviewCount();
});

renderCards();
renderBroadcastScript();
setProgress(0, demoDuration);
