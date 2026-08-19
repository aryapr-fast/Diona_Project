# WCB PDF Document Recreation — HTML/CSS/JavaScript

A pixel-accurate, print-ready, browser-based document generation system for official Workers Compensation Board (WCB) of Manitoba forms. Built using pure HTML5, CSS3, and Vanilla JavaScript.

---

## 📋 Assignment Overview

This repository contains browser-based recreations of two official WCB Manitoba reference PDF forms:
1. **Exercise 1 — Worker Progress Report** (3-Page Document)
2. **Exercise 2 — Medical & Travel Expense Request** (2-Page Document)

The core objective is **dynamic data rendering**: the HTML acts strictly as a visual presentation target, while all worker details, claim numbers, checkboxes, comments, and table rows are dynamically populated from JavaScript data models.

---

## 🛠️ Tech Stack

* **HTML5**: Semantic document markup and page structures.
* **CSS3**: Print-first layout (`@media print`), flexbox, grid, and page-break controls.
* **Vanilla JavaScript (ES6+)**: Data modeling, modular page rendering engines, controlled checkbox logic, and dynamic table generation.
* **Dependencies**: Zero external libraries, frameworks (No React/Vue/Bootstrap/Tailwind), build tools, or backend runtime required.

---

## 📂 Repository Structure

```text
wcb-document-recreation/
│
├── README.md                           # Main Project Documentation
├── .gitignore                          # Clean repository rules
│
├── exercise-1/                         # Exercise 1: Worker Progress Report
│   ├── index.html                      # DOM Mount Point & Demo Toolbar
│   ├── style.css                       # Exercise 1 Specific Form & Underline Styling
│   ├── data.js                         # JavaScript Data Models (Reference, Minimal, Large)
│   ├── script.js                       # 3-Page Modular Rendering Engine
│   └── assets/                         # Local Branding Assets
│       └── wcb-logo.png
│
├── exercise-2/                         # Exercise 2: Medical & Travel Expense Request
│   ├── index.html                      # DOM Mount Point & Demo Toolbar
│   ├── style.css                       # Exercise 2 Expense Table Styling
│   ├── data.js                         # JavaScript Data Models (Reference, Minimal, Large)
│   ├── script.js                       # 2-Page Table Generation Engine
│   └── assets/                         # Local Branding Assets
│       └── wcb-logo.png
│
├── shared/                             # Shared Modular Code
│   ├── common.css                      # Base Layout, Color Palette & Print Media Rules
│   ├── common.js                       # Helper Utilities (HTML Escape, Checkbox, Header/Footer)
│   └── assets/
│       └── wcb-logo.png
│
├── docs/                               # Detailed Technical Documentation
│   ├── assumptions.md                  # Design & Layout Assumptions
│   ├── dynamic-data-analysis.md        # Static vs Dynamic Element Classification
│   ├── challenges.md                   # Technical Challenges & Solutions
│   └── testing.md                      # Testing Suite & Verification Matrix
│
├── ai/                                 # AI Transparency Documentation
│   └── prompt-history.md               # Prompt History & AI Usage Log
│
└── videos/                             # Video Presentation Assets
    ├── exercise-1-video-script.md      # 2-Min Narrated Video Script for Exercise 1
    ├── exercise-2-video-script.md      # 2-Min Narrated Video Script for Exercise 2
    ├── exercise-1-video-link.md        # Recorded Video Link / Path for Exercise 1
    └── exercise-2-video-link.md        # Recorded Video Link / Path for Exercise 2
```

---

## 🚀 How to Run Locally

No build step, node_modules, or server installation is required.

1. Clone or download this repository to your local machine.
2. Open either exercise in any modern web browser (Google Chrome recommended):
   * Double-click `exercise-1/index.html` to open Exercise 1.
   * Double-click `exercise-2/index.html` to open Exercise 2.
3. Use the top sticky control panel (`no-print`) to switch between datasets or trigger print mode.

---

## 📊 Dynamic Data & Datasets

Each exercise contains three distinct datasets inside `data.js` to demonstrate total dynamic rendering capabilities:

### 1. Reference Dataset (PDF Sample)
* Contains sample values matching the provided reference PDFs (`Madeleine Willson`, Claim `#20042047`, Worker App ID `#712041`).

### 2. Minimal Dataset
* Demonstrates system resilience when optional fields are empty or expense arrays are empty.
* Empty table categories display a clean fallback state (*"No expense entries recorded for this category"*).

### 3. Large Dataset
* Tests dynamic scaling with multiple prescription drugs, OTC items, supplies, parking, mileage, bus/taxi entries, multi-paragraph comments, and severe pain scores.

---

## 🖨️ Print & PDF Export

Both documents are optimized for browser printing (`Ctrl + P` or clicking the **Print / Save as PDF** button):
* The sticky demo toolbar is automatically hidden using CSS `@media print { .no-print { display: none !important; } }`.
* Output is formatted for **Standard Letter** paper with strict page breaks (`page-break-after: always; break-after: page;`).
* Footers and page counts (`Page X of Y`) remain pinned at the bottom of every physical page.

---

## 📑 Technical Documentation Links

* [**Assumptions Document**](file:///c:/Users/Arya%20P%20R/Desktop/Diona%20Assignment/docs/assumptions.md)
* [**Dynamic vs Static Analysis**](file:///c:/Users/Arya%20P%20R/Desktop/Diona%20Assignment/docs/dynamic-data-analysis.md)
* [**Implementation Challenges**](file:///c:/Users/Arya%20P%20R/Desktop/Diona%20Assignment/docs/challenges.md)
* [**Testing & Verification Plan**](file:///c:/Users/Arya%20P%20R/Desktop/Diona%20Assignment/docs/testing.md)
* [**AI Prompt History**](file:///c:/Users/Arya%20P%20R/Desktop/Diona%20Assignment/ai/prompt-history.md)

---

## 🎥 Video Demonstrations

Narrated Picture-in-Picture (PiP) video presentations (~2 minutes each):
* **Exercise 1 Script**: [`videos/exercise-1-video-script.md`](file:///c:/Users/Arya%20P%20R/Desktop/Diona%20Assignment/videos/exercise-1-video-script.md)
* **Exercise 1 Video Link**: [`videos/exercise-1-video-link.md`](file:///c:/Users/Arya%20P%20R/Desktop/Diona%20Assignment/videos/exercise-1-video-link.md)
* **Exercise 2 Script**: [`videos/exercise-2-video-script.md`](file:///c:/Users/Arya%20P%20R/Desktop/Diona%20Assignment/videos/exercise-2-video-script.md)
* **Exercise 2 Video Link**: [`videos/exercise-2-video-link.md`](file:///c:/Users/Arya%20P%20R/Desktop/Diona%20Assignment/videos/exercise-2-video-link.md)
