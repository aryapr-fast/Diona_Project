# Technical & Design Assumptions

This document outlines key technical, architectural, and design assumptions made while developing the browser-based document recreation for WCB Manitoba PDF forms.

---

## 1. Document Scope & Visual Fidelity
* **PDF as Visual Source of Truth**: The provided reference PDFs (`Worker Progress Report.pdf` and `Medical and Travel Expense Request.pdf`) represent the exact visual standard for page structure, fonts, alignments, borders, and section headers.
* **Sample Data vs State**: All text values, dates, and amounts visible in the reference PDFs (e.g. Madeleine Willson, Claim #20042047, Naproxen $20.00) are treated strictly as dynamic sample data populated via JavaScript objects, rather than static HTML markup.
* **Font System**: The document uses system sans-serif fonts (`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial`) for administrative structure, column headers, and labels, and a distinct serif font (`Georgia, Times New Roman, serif`) styled in dark blue (`#1e4d73`) for dynamically rendered worker responses and expense data, matching the visual contrast in the source PDF.

---

## 2. Print & Page Layout Architecture
* **Standard Page Dimensions**: The target format is Standard Letter (8.5 in x 11 in) with 0.5 in margins on all sides.
* **Controlled Pagination**:
  * **Exercise 1** is designed to maintain a 3-page document structure under default dataset conditions, matching the reference PDF.
  * **Exercise 2** is structured across 2 pages with 5 expense tables on Page 1 and 1 expense table + Privacy Notice on Page 2 under default conditions.
* **Page-Break Rules**: CSS `@media print` rules enforce strict page breaks between document sections (`page-break-after: always; break-after: page;`) while stripping non-printable screen controls (`.no-print`).

---

## 3. Form Controls & Interactivity
* **Controlled Checkbox Rendering**: Standard HTML `<input type="checkbox">` elements vary significantly across operating systems and browsers. Therefore, visual checkboxes are rendered as controlled `<span>` elements (`.pdf-checkbox.checked`) driven by JavaScript boolean logic.
* **Dynamic Table Expansion**: Tables in Exercise 2 expand vertically when populated with larger arrays of data. If the dataset exceeds standard single-page height, print page breaks will preserve header/footer alignment naturally.

---

## 4. Browser & Runtime Environment
* **Pure Web Standards**: Built exclusively using HTML5, CSS3, and Vanilla JavaScript (ES6+). No external frameworks, transpilers, npm packages, or server side dependencies are required.
* **File System Access**: The project can be run directly by double-clicking `index.html` in any modern web browser (Google Chrome recommended for exact print preview rendering).
