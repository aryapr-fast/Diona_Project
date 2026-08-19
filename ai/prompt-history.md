# AI Prompt History & Development Log

This document records the prompts used during the development of the WCB Document Recreation project, as required by the assignment guidelines.

---

## 1. Initial Master Prompt
* **Context**: Project Initialization & Technical Specification
* **Prompt**:
  > "Act as an expert frontend engineer specializing in pixel-accurate document recreation, print-ready HTML/CSS, dynamic data rendering, and JavaScript document generation. Recreate Exercise 1 (Worker Progress Report - 3 pages) and Exercise 2 (Medical & Travel Expense Request - 2 pages) using strictly vanilla HTML, CSS, and JavaScript. The data must be 100% dynamic, driven by JavaScript data objects, and demonstrable with Reference, Minimal, and Large datasets. Create a professional GitHub repository with full documentation, tests, assumptions, dynamic data analysis, and video scripts."

---

## 2. Visual Fidelity & CSS Layout Prompts
* **Context**: Exact PDF Visual Styling Alignment
* **Prompt**:
  > "Inspect the visual layout of Worker Progress Report.pdf and Medical and Travel Expense Request.pdf. Ensure the document headers have the exact WCB logo placement, 333 Broadway address column, and bold title block with Claim No. box. Make worker response text display in Georgia/Times New Roman dark blue serif font (#1e4d73) to match the PDF visual contrast."

---

## 3. Form Underline & Checkbox Prompts
* **Context**: Form Field Component Engineering
* **Prompt**:
  > "Browser default checkboxes look inconsistent across platforms. Implement controlled visual checkbox elements using custom HTML spans with .checked CSS classes. Create a clean inline-flex underline component for fields like 'I returned to work on: ______' so that sublabels like 'Date' align centered directly beneath the line."

---

## 4. Dynamic Table & Dataset Switching Prompts
* **Context**: Exercise 2 Table Generation & Dataset Control
* **Prompt**:
  > "Refactor Exercise 2 to build all expense tables (Prescription Drugs, OTC, Medical Supplies, Parking, Mileage, Bus/Taxi) using dynamic array iteration in JavaScript. Ensure that switching between Reference, Minimal, and Large datasets in the top sticky control panel immediately re-renders the DOM without full page refresh. Provide a fallback message for empty table arrays."

---

## 5. Print & Pagination Engineering Prompts
* **Context**: Browser Print Preview & PDF Export
* **Prompt**:
  > "Add @media print CSS rules to hide the sticky .demo-controls bar during printing. Set standard Letter page dimensions (8.5in x 11in) with page-break-after: always; rules so Exercise 1 exports as a clean 3-page document and Exercise 2 exports as a clean 2-page document."
