# 🤖 AI Meme Generator

A fun web app that generates memes in real-time using the Imgflip API. Just type a caption, hit "Generate," and share the hilarity with your friends!

![Meme Generator Demo](demo.gif) *(Optional: Add a GIF later to show it in action!)*

## 🚀 Features
- **Real-time meme generation**: Instantly turn your text into popular memes.
- **Simple UI**: Easy for anyone to use.
- **No payment needed**: Uses Imgflip's free API tier.

## 🛠️ How to Set Up
1. **Clone this repo** (or download the files):
   ```bash
   git clone https://github.com/your-username/meme-generator.git
   ```

2. **Get API credentials**:

  Sign up for a free account at Imgflip.

  Replace the placeholder username/password in script.js with your Imgflip login:
  ```javascript
    params.append("username", "YourActualUsername");
    params.append("password", "YourActualPassword");
  ```
  Open index.html in a browser (double-click the file).

🌟 **How to Use**

  - Type a funny caption (e.g., "When the WiFi disconnects...").
  - Click Generate Meme.
  - The app will fetch a random meme template and add your text!
  - To share this with friends, send them the GitHub repo link or a hosted version (e.g., via [Netlify Drop](https://app.netlify.com/drop)). 

📚 **Tech Stack**

  - Frontend: HTML, CSS, JavaScript
  - API: Imgflip (free tier)

🧠 **Future Ideas**

  - Let users select meme templates from a dropdown.
  - Add a download button to save memes.
  - Integrate DALL·E for custom AI-generated images.

🤝 **Contributing**

Feel free to fork this project and tweak it! If you make something cool, submit a PR.
