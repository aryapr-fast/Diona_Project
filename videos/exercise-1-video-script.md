# Exercise 1 — 2-Minute Video Script (Worker Progress Report)

**Format**: Picture-in-Picture (Presenter's face visible + Screen recorded)
**Duration**: ~2 Minutes

---

### [0:00 – 0:20] Introduction & Understanding
* **Speaker**:
  > "Hello everyone! In this video, I am presenting my solution for Exercise 1: the Worker Progress Report. My primary objective was to recreate the official 3-page WCB Manitoba form as a dynamic, browser-generated document using pure HTML5, CSS3, and Vanilla JavaScript—without relying on any external frameworks or static HTML hardcoding."

---

### [0:20 – 0:55] Reference Dataset Demonstration
* **Screen Action**: Display `exercise-1/index.html` with `Reference Dataset (PDF Sample)` selected.
* **Speaker**:
  > "Here is the rendered document under the Reference Dataset. As you can see, it visually matches the source PDF page by page:
  > - At the top of Page 1, we have the official WCB logo, Broadway address, title block, and Claim Number 20042047.
  > - The worker name 'Madeleine Willson' and all responses—like the return to work date of March 15, 2024 and comment 'Terrible. Testing Testing'—render in dark blue serif font.
  > - Checkboxes, pain scale grid on Page 2, and the legal certification on Page 3 match the 3-page layout of the original PDF."

---

### [0:55 – 1:20] Dynamic Data Demonstration (Minimal & Large Datasets)
* **Screen Action**: Click the top dropdown control and select `Minimal Dataset`, then select `Large Dataset`.
* **Speaker**:
  > "Now, to demonstrate that this document is 100% data-driven, I will switch to the Minimal Dataset. Notice how the worker name changes, optional fields clear cleanly, pain rating updates to 4, and checkboxes update dynamically without breaking page layout.
  > Next, switching to the Large Dataset populates extended responses, multi-paragraph comments, and severe pain ratings, demonstrating complete state reactivity."

---

### [1:20 – 1:40] Architecture & Code Walkthrough
* **Screen Action**: Switch window to VS Code showing `exercise-1/script.js` and `exercise-1/data.js`.
* **Speaker**:
  > "Architecturally, the application separates data from presentation:
  > - `data.js` defines structured JavaScript objects containing state for return-to-work status, recovery, pain score, medical treatment, medication, and exercises.
  > - `script.js` uses modular rendering functions—`renderPage1`, `renderPage2`, `renderPage3`—and controlled checkbox logic to assemble the DOM dynamically."

---

### [1:40 – 2:00] Print PDF & Conclusion
* **Screen Action**: Click the `Print / Save as PDF` button to show Chrome Print Preview.
* **Speaker**:
  > "Finally, clicking the Print button triggers Chrome's print preview. CSS `@media print` rules automatically hide the sticky control bar and format the output into a crisp, printable 3-page document.
  > All prompt history has been documented in `ai/prompt-history.md`. Thank you!"
