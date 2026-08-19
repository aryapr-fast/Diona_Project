# Implementation Challenges & Technical Solutions

This document details key technical challenges encountered during the recreation of WCB Manitoba document forms and the engineering solutions implemented to overcome them.

---

## Challenge 1: Cross-Browser Form Control Inconsistencies
* **Problem**: Native HTML `<input type="checkbox">` and `<input type="radio">` controls render differently across operating systems (Windows, macOS) and browsers (Chrome, Firefox, Edge). Default browser checkboxes also often include margins, focus rings, or low-contrast backgrounds that compromise exact visual fidelity to the reference PDF.
* **Solution**: Replaced uncontrolled form inputs with custom visual checkbox elements (`<span class="pdf-checkbox">`). JavaScript checks the data model state (e.g. `status === 'returned'`) and conditionally appends the `.checked` CSS class, which renders a crisp, pixel-accurate vector checkmark (`✓`) matching the PDF.

---

## Challenge 2: Precise Multi-Page PDF Print Alignment
* **Problem**: Standard web layouts flow continuously. When printing to PDF, browsers may split section headings, table headers, or signature lines across physical page boundaries unpredictably.
* **Solution**:
  1. Defined fixed letter-sized containers (`width: 8.5in`, `min-height: 11in`) with explicit padding matching the reference PDF margins.
  2. Implemented strict `@media print` rules utilizing `page-break-after: always;` and `break-after: page;` between section pages.
  3. Styled footers with absolute positioning within each relative page wrapper to guarantee identical vertical placement regardless of content height.

---

## Challenge 3: Underlined Form Line Alignment with Sublabels
* **Problem**: The reference PDF features inline fillable lines (e.g. `I returned to work on: March 15, 2024` with `Date` printed directly below the line). Standard HTML inline text formatting causes sublabels to misalign vertically with adjacent text.
* **Solution**: Developed a flexible `.underline-wrapper` component using CSS flexbox column layout (`display: inline-flex; flex-direction: column; align-items: center;`). The line displays the dynamic value with a bottom border, while the sublabel is positioned precisely underneath without breaking inline text alignment.

---

## Challenge 4: Dynamic Table Rows & Empty State Handling
* **Problem**: In Exercise 2, expense categories can contain any number of items (from 0 to 10+). Hardcoding `<tr>` tags breaks dynamic rendering, while empty arrays cause collapsed borders or missing table outlines.
* **Solution**: Built reusable JavaScript table renderer `renderTable(headers, rowsData, mapRowFn)`. If the array contains items, it iterates over them dynamically. If the array is empty (e.g. Minimal dataset), it gracefully renders a single full-width span cell (`colspan`) stating *"No expense entries recorded for this category"*, keeping table structure visually clean.
