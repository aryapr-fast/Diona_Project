# Exercise 2 — 2-Minute Video Script (Medical & Travel Expense Request)

**Format**: Picture-in-Picture (Presenter's face visible + Screen recorded)
**Duration**: ~2 Minutes

---

### [0:00 – 0:20] Introduction & Understanding
* **Speaker**:
  > "Welcome back! In this second video, I am presenting Exercise 2: the Medical & Travel Expense Request. This document features 6 complex expense tables across 2 pages. My goal was to create a dynamic table generation engine using vanilla JavaScript array methods while preserving strict PDF visual fidelity."

---

### [0:20 – 0:50] Reference Dataset & Table Inspection
* **Screen Action**: Open `exercise-2/index.html` with `Reference Dataset (PDF Sample)` selected. Scroll through Page 1 and Page 2.
* **Speaker**:
  > "Looking at the Reference Dataset:
  > - Page 1 displays 5 tables: Prescription Drugs (Naproxen $20.00), Over-the-Counter Drugs (Advil $8.00), Medical Supplies (Tensor $10.00), Parking ($10.00), and Mileage (20 km).
  > - Page 2 contains Bus or Taxi Fare (Bus $3.00, Taxi $15.00) alongside the disclaimer note and Privacy Notice certification.
  > - All table headers, borders, and dark blue serif row entries visually match the original 2-page PDF."

---

### [0:50 – 1:20] Dynamic Array & Row Scaling Demonstration
* **Screen Action**: Switch dataset dropdown to `Minimal Dataset`, then to `Large Dataset`.
* **Speaker**:
  > "This exercise specifically tests dynamic row generation. Watch what happens when I select the Minimal Dataset: because the data arrays are empty, our JavaScript table helper renders a clean fallback row stating 'No expense entries recorded for this category'.
  > When I switch to the Large Dataset, the engine dynamically maps 3 to 4 expense entries per table—generating rows on the fly using `Array.map()` without any hardcoded HTML."

---

### [1:20 – 1:40] Code Walkthrough & Table Utility
* **Screen Action**: Show `exercise-2/script.js` in editor, highlighting `renderTable()`.
* **Speaker**:
  > "In the codebase, `renderTable(headers, rowsData, mapRowFn)` acts as a reusable table builder. It takes dynamic array data, escapes HTML for security, maps each object into a table row `<tr>`, and injects it into the DOM.
  > `data.js` holds the array objects for prescriptionDrugs, otcDrugs, medicalSupplies, parking, mileage, and busTaxiFares."

---

### [1:40 – 2:00] Print Export & Summary
* **Screen Action**: Trigger Chrome Print Preview (`Print / Save as PDF`).
* **Speaker**:
  > "When printing or saving as PDF, `@media print` rules ensure page breaks occur cleanly between pages, removing screen controls while maintaining table borders and footer alignment.
  > Development AI prompts are documented in `ai/prompt-history.md`. Thank you!"
