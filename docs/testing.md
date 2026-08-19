# Test Plan & Verification Documentation

This document outlines the testing methodologies and verification results used to validate both document recreation exercises.

---

## 1. Test Matrix

| Test Suite | Objective | Execution Method | Expected Result | Pass/Fail |
| :--- | :--- | :--- | :--- | :--- |
| **Test 1: Reference Dataset** | Verify visual fidelity against original PDFs | Load `Reference Dataset (PDF Sample)` in both exercises | Matches font styles, header/footer layout, claim #, dates, checkboxes, and text | **PASS** |
| **Test 2: Minimal Dataset** | Verify layout robustness with empty/missing data | Load `Minimal Dataset` option | Optional fields hide/leave blank lines; empty tables show clean fallback note; no console errors | **PASS** |
| **Test 3: Large Dataset** | Verify dynamic scaling & multi-row handling | Load `Large Dataset` option | Multiple expense rows render cleanly; text wraps without clipping; layout scales gracefully | **PASS** |
| **Test 4: Screen Controls** | Verify dataset switching reactivity | Click dropdown selector in `.demo-controls` bar | Document immediately re-renders with new dataset without page reload | **PASS** |
| **Test 5: Print & PDF Output** | Verify print stylesheet and layout preservation | Press `Print / Save as PDF` button or `Ctrl + P` in Chrome | Control bar hidden; exact 3-page (Ex 1) / 2-page (Ex 2) breaks preserved; headers/footers fixed | **PASS** |

---

## 2. Browser Verification Guidelines
1. Open `exercise-1/index.html` and `exercise-2/index.html` in Google Chrome at 100% zoom.
2. Select **Reference Dataset**:
   * Confirm Worker Name: `Madeleine Willson`
   * Confirm Claim No.: `20042047`
   * Confirm Worker App ID: `712041`
3. Select **Minimal Dataset**:
   * Observe how empty table arrays display *"No expense entries recorded for this category"*.
   * Verify pain scale, medication fields, and checkboxes adjust dynamically.
4. Select **Large Dataset**:
   * Observe multiple prescription drugs, OTC items, supplies, parking, mileage, and fare rows.
5. Open Chrome Print Preview (`Ctrl + P`):
   * Select **Destination**: *Save as PDF*.
   * Set **Paper size**: *Letter*.
   * Set **Margins**: *Default* or *None*.
   * Confirm control panel is hidden and output pages look identical to official WCB PDF documents.
