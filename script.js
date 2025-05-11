// Imgflip API (free tier)
const MEME_API_URL = "https://api.imgflip.com/get_memes";
const GENERATE_API_URL = "https://api.imgflip.com/caption_image";

// Popular meme templates (we'll fetch these later)
let memeTemplates = [];

// Fetch meme templates on page load
async function fetchMemes() {
  const response = await fetch(MEME_API_URL);
  const data = await response.json();
  memeTemplates = data.data.memes;
}

// Generate a random meme
async function generateMeme() {
  const text = document.getElementById("text-input").value;

  if (!text) {
    alert("Please enter a caption!");
    return;
  }

  // Pick a random meme template
  const randomMeme =
    memeTemplates[Math.floor(Math.random() * memeTemplates.length)];

  // API params (Imgflip requires username/password even for free tier)
  const params = new URLSearchParams();
  params.append("template_id", randomMeme.id);
  params.append("username", "galaxyeagle"); // Public demo account
  params.append("password", "4sahittya"); // Public demo account
  params.append("text0", text);

  // Generate the meme
  const response = await fetch(GENERATE_API_URL, {
    method: "POST",
    body: params,
  });

  const data = await response.json();

  if (data.success) {
    document.getElementById("meme-image").src = data.data.url;
  } else {
    alert("Failed to generate meme. Try again!");
  }
}

// Initialize
fetchMemes();

// Button click event
document.getElementById("generate-btn").addEventListener("click", generateMeme);
