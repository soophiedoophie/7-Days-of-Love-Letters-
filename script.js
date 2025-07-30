const modal = document.getElementById("letter-modal");
const letterText = document.getElementById("letter-text");
const closeBtn = document.getElementById("close-btn");

const letters = [
  `💌 <strong>Day 1 – “The Magic of You”</strong><br>
  Ever since you came into my life, everything feels a little brighter, a little softer, and a lot more meaningful.<br>
  There’s something about your presence that makes even the ordinary feel magical.<br>
  Just hearing your voice or seeing your name pop up makes my heart smile.<br>
  I don’t need grand adventures. I just need you next to me.<br>
  Thank you for being my little piece of magic in this world.`,

  `💌 <strong>Day 2 – “A Memory I Love”</strong><br>
  There’s this moment I keep replaying in my head. Us, laughing uncontrollably over something silly.<br>
  I don’t even remember what it was, but I remember the way I felt: completely happy, completely safe.<br>
  You make memories that don’t fade, they stay with me like warm light.<br>
  Even on hard days, I think of those times and I feel okay again.<br>
  Thank you for giving me those pieces of forever.`,

  `💌 <strong>Day 3 – “For the Days That Feel Heavy”</strong><br>
  If today feels hard, please remember: you don’t have to carry it all alone.<br>
  You are stronger than you know, and even when you doubt yourself. I never do.<br>
  I see your courage in the little things you do every day.<br>
  I’m always here, quietly believing in you, loudly loving you.<br>
  You’ve got this. And I’ve got you.`,

  `💌 <strong>Day 4 – “Thank You for Just Being You”</strong><br>
  I don’t say this enough, but thank you.<br>
  Thank you for being patient, for being kind, for making me feel safe.<br>
  Thank you for the way you listen, for the way you hold me when I need it most.<br>
  You’re not just my favorite person. You’re my home.<br>
  And I’m so lucky I get to love you.`,

  `💌 <strong>Day 5 – “What I Dream About”</strong><br>
  I think about our future a lot, not in a faraway, someday way, but in a quiet, steady kind of hope.<br>
  Like morning coffee together, sleepy smiles, long walks with nowhere to go.<br>
  I dream of little things with you, and that’s how I know it’s real.<br>
  No matter where life takes us, I want to keep choosing you.<br>
  Let’s build something beautiful, one soft day at a time.`,

  `💌 <strong>Day 6 – “If You Ever Feel Alone”</strong><br>
  Some days, the world feels too loud or too quiet, and nothing seems to make sense.<br>
  When that happens, I hope you feel the warmth of my love wrap around you like a soft blanket.<br>
  Even when I’m not right beside you, I’m thinking of you.<br>
  You are never alone. Not truly, not while I’m breathing.<br>
  You are so loved, in ways you might never fully see but I’ll keep showing you, every day.`,

  `💌 <strong>Day 7 – “You Make Me the Happiest”</strong><br>
  Loving you has been the sweetest, safest, most beautiful adventure of my life.<br>
  You make the world feel less scary and my heart feel more whole.<br>
  Even when I didn’t think I deserved it, you gave me love.<br>
  I don’t know what I did to meet you, but I thank the universe every single day.<br>
  You make me the happiest—and I hope I make you feel the same.`
];

const startDate = new Date("2025-08-01");
const today = new Date();
today.setHours(0, 0, 0, 0); // 시간 초기화

document.querySelectorAll(".day-btn").forEach((btn) => {
  const day = parseInt(btn.dataset.day);
  const unlockDate = new Date(startDate);
  unlockDate.setDate(startDate.getDate() + (day - 1));

  if (today >= unlockDate) {
    btn.addEventListener("click", () => {
      letterText.innerHTML = letters[day - 1];
      modal.classList.remove("hidden");
    });
  } else {
    btn.disabled = true;
    btn.innerText = `Day ${day} 🔒`;
    btn.style.opacity = "0.5";
    btn.style.cursor = "not-allowed";
  }
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
