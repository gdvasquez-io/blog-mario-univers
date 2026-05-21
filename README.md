# Mario Universe Blog Project

This website is a blog dedicated to the Super Mario universe. It has been created completely from scratch by **Marc Duran**, **Josep Sancho**, and me. We designed and coded everything without templates, using basic web development tools to create a fun, interactive, and modern space for Mario fans.

The main page works as a blog hub, and the site includes special interactive mini-games and multimedia content to make the user experience more entertaining.

## Technologies Used
* **HTML5:** To build the structure of the website (`index.html`).
* **CSS3 (Vanilla):** To style the website, set the layout, and choose the colors using the main style sheet (`style.css`).
* **JavaScript (Vanilla):** To add interactive features and game logic (`blog-games-logic.js`).

## Key Features
1. **Team Collaboration:** Developed together by three people, organizing the tasks to combine text, image assets, and game logic into a clean final project.
2. **Mario Theme Media:** Use of specific video files (`Students and blog introduction.mp4`) and graphical banners to set the perfect Nintendo atmosphere.
3. **Interactive Blog Games:** Includes custom mechanics powered by JavaScript, using special audio-visual icons like coins, stars, and mushrooms.

---

## Technical Explanation: Blog and Game Logic

The core interactive part of this project is the game system integrated into the blog, which runs entirely on pure JavaScript (`blog-games-logic.js`).

### How does it work?
Instead of a static text blog, we created a dynamic system where users can interact with elements from the Mario world directly on the page.

**Implementation Logic (`blog-games-logic.js`):**

1. **Asset Management:** The script controls how and when the images (like `champinon.png`, `moneda.png`) and videos interact with the user's clicks.
2. **Multimedia Triggers:** When specific actions happen on the blog, the script plays files like `bomba especial.mp4` or `estrella especial.mp4` to reward the player or show special effects.
3. **Game Board:** The script tracks the state of the interactive elements on the `tablero.mp4` layout, updating the score or the visual feedback in real time.

---

## 📁 Project Structure

```text
📂 blog-mario-univers
 ┣ 📂 assets
 ┃ ┣ 📄 diff-scene-1-CKyuG_6W.jpg
 ┃ ┣ 📄 diff-scene-1-mod-BZvgwxdn.jpg
 ┃ ┣ 📄 diff-scene-2-mod-C3r8dJei.jpg
 ┃ ┣ 📄 diff-scene-2-ZNbipYW0.jpg
 ┃ ┣ 📄 diff-scene-3-BMnaNcRm.jpg
 ┃ ┣ 📄 diff-scene-3-mod-BzXrKVz0.jpg
 ┃ ┣ 📄 diff-scene-4-5418mqE6.jpg
 ┃ ┣ 📄 diff-scene-4-mod-BWaD_RrF.jpg
 ┃ ┗ 📄 mario-banner-B8vN95hX.jpg
 ┣ 📂 css
 ┃ ┗ 📄 style.css                    # Main styles for the blog layout
 ┣ 📂 iconos
 ┃ ┣ 🎬 bomba especial.mp4
 ┃ ┣ 📷 caparazon.png
 ┃ ┣ 📷 champinon_rojo.png
 ┃ ┣ 📷 champinon.png
 ┃ ┣ 📷 cuadrado.png
 ┃ ┣ 🎬 estrella especial.mp4
 ┃ ┣ 📷 estrella.png
 ┃ ┣ 📷 flor.png
 ┃ ┣ 📷 huevo.png
 ┃ ┣ 📷 moneda.png
 ┃ ┣ 📷 planta.png
 ┃ ┗ 🎬 tablero.mp4
 ┣ 📂 js
 ┃ ┗ 📄 blog-games-logic.js          # Core JavaScript for interactive features
 ┣ 📂 video
 ┃ ┗ 🎬 Students and blog introduction.mp4
 ┗ 📄 index.html                     # Main page and entry point of the blog
