# Dynamic vs Static Data Classification Analysis

This document explicitly classifies every visual component across both reference documents into **Static** (template layout, branding, legal disclaimers) and **Dynamic** (worker data, selections, dates, expense arrays).

---

## Exercise 1: Worker Progress Report (3 Pages)

| Visual Element | Classification | Data Source | Rendering Method |
| :--- | :--- | :--- | :--- |
| **WCB Logo & Address** | Static | Local Asset / HTML Template | `renderDocHeader()` image & static string |
| **Document Title ("Worker Progress Report")** | Static | String Constant | `renderDocHeader()` parameter |
| **Claim Number** | Dynamic | `data.claimNumber` | String interpolation into `.claim-box` |
| **Document Code ("WP")** | Static | String Constant | String interpolation into `.code-box` |
| **Worker Name (Header Subtitle)** | Dynamic | `data.workerName` | Interpolation into `<span class="worker-name-blue">` |
| **Return to Work Option Checkboxes** | Dynamic | `data.returnToWork.status` | Conditional boolean check (`renderCheckbox(status === '...')`) |
| **Return to Work Date** | Dynamic | `data.returnToWork.returnDate` | Underline field interpolation |
| **Working Status Checkboxes** | Dynamic | `data.returnToWork.workingStatus` | Conditional boolean check |
| **Other Work Status Description** | Dynamic | `data.returnToWork.otherStatus` | Underline field interpolation |
| **Return to Work Progress Comment** | Dynamic | `data.returnToWork.progress` | Text content inside `.response-box-content` |
| **Expected Return Date** | Dynamic | `data.returnToWork.expectedReturnDate` | Underline field interpolation |
| **Concerns About Returning** | Dynamic | `data.returnToWork.concerns` | Text content inside `.response-box-content` |
| **Employer Contact Name & Date** | Dynamic | `data.returnToWork.employerContact`, `employerContactDate` | Underline field interpolation |
| **Recovery Status Checkboxes** | Dynamic | `data.recovery.status` | Conditional boolean check |
| **Recovery Comments** | Dynamic | `data.recovery.comments` | Text content inside `.response-box-content` |
| **Pain Score Rating (1–10)** | Dynamic | `data.painScore` | Numeric comparison `renderCheckbox(painScore === n)` |
| **Medical Treatment Status & Provider** | Dynamic | `data.medicalTreatment` object | Conditional check & underline field |
| **Last Medical Treatment Date & Provider** | Dynamic | `data.medicalTreatment.lastTreatmentDate`, `lastProviderName` | Underline field interpolation |
| **Next Medical Treatment Date & Provider** | Dynamic | `data.medicalTreatment.nextTreatmentDate`, `nextProviderName` | Underline field interpolation |
| **Physio / Chiro Frequency** | Dynamic | `data.medicalTreatment.physioFrequency` | Underline field interpolation |
| **Medication Status & Name** | Dynamic | `data.medication` object | Conditional check & underline field |
| **Home Exercise Status & Details** | Dynamic | `data.homeExercises` object | Conditional check & `.response-box-content` |
| **Additional Information Text** | Dynamic | `data.additionalInfo` | Text content inside `.response-box-content` |
| **Legal Certification Text** | Static | HTML Template | Static paragraph text |
| **Legal Checkbox States** | Dynamic | `data.certifications` object | Conditional boolean check |
| **Worker App ID** | Dynamic | `data.workerAppId` | Footer string interpolation |
| **Submission Timestamp** | Dynamic | `data.submittedAt` | Footer string interpolation |
| **Page Numbers ("Page X of Y")** | Dynamic | Render State | `renderDocFooter(appId, timestamp, pageNum, totalPages)` |

---

## Exercise 2: Medical & Travel Expense Request (2 Pages)

| Visual Element | Classification | Data Source | Rendering Method |
| :--- | :--- | :--- | :--- |
| **WCB Logo & Address** | Static | Local Asset / HTML Template | `renderDocHeader()` |
| **Document Title ("Medical & Travel Expense Request")** | Static | String Constant | `renderDocHeader()` |
| **Claim Number** | Dynamic | `data.claimNumber` | String interpolation |
| **Worker Name Subtitle** | Dynamic | `data.workerName` | Interpolation into `<span class="worker-name-blue">` |
| **Prescription Drugs Rows** | Dynamic | `data.prescriptionDrugs` (Array) | `Array.map()` -> `<tr><td>...</td></tr>` |
| **Over-the-Counter Drugs Rows** | Dynamic | `data.otcDrugs` (Array) | `Array.map()` -> `<tr><td>...</td></tr>` |
| **Medical Supplies Rows** | Dynamic | `data.medicalSupplies` (Array) | `Array.map()` -> `<tr><td>...</td></tr>` |
| **Parking Rows** | Dynamic | `data.parking` (Array) | `Array.map()` -> `<tr><td>...</td></tr>` |
| **Mileage Disclaimer Note** | Static | String Constant | Static `.table-disclaimer-note` element |
| **Mileage Rows** | Dynamic | `data.mileage` (Array) | `Array.map()` -> `<tr><td>...</td></tr>` |
| **Bus/Taxi Note** | Static | String Constant | Static `.table-disclaimer-note` element |
| **Bus/Taxi Fare Rows** | Dynamic | `data.busTaxiFares` (Array) | `Array.map()` -> `<tr><td>...</td></tr>` |
| **Privacy Statement Checkbox** | Dynamic | `data.privacyNoticeAcknowledged` | Conditional boolean check |
| **Worker App ID** | Dynamic | `data.workerAppId` | Footer string interpolation |
| **Submission Timestamp** | Dynamic | `data.submittedAt` | Footer string interpolation |
| **Page Numbers ("Page X of Y")** | Dynamic | Render State | `renderDocFooter(appId, timestamp, pageNum, totalPages)` |
