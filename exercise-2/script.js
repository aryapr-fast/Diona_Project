/**
 * @file script.js
 * @description Dynamic Table & Document Rendering Engine for Exercise 2 — Medical & Travel Expense Request.
 *              Generates a pixel-accurate 2-page WCB Manitoba expense reimbursement request form using dynamic array rendering.
 * @module Exercise2/RenderEngine
 */

/**
 * Generic reusable HTML table builder with automatic dynamic array iteration and empty state fallback.
 * @param {string[]} headers - Array of table header column names.
 * @param {Array<Object>} rowsData - Array of data objects for table rows.
 * @param {Function} mapRowFn - Callback function mapping a single item to an array of cell values.
 * @returns {string} HTML string representing the complete <table> structure.
 */
function renderTable(headers, rowsData, mapRowFn) {
  const headerCellsHtml = headers.map(h => `<th>${escapeHtml(h)}</th>`).join("");

  let bodyRowsHtml = "";
  if (rowsData && rowsData.length > 0) {
    bodyRowsHtml = rowsData.map(item => {
      const cells = mapRowFn(item);
      return `<tr>${cells.map(c => `<td>${escapeHtml(c)}</td>`).join("")}</tr>`;
    }).join("");
  } else {
    bodyRowsHtml = `
      <tr>
        <td colspan="${headers.length}" class="empty-row-cell">
          No expense entries recorded for this category.
        </td>
      </tr>
    `;
  }

  return `
    <table class="expense-table">
      <thead>
        <tr>${headerCellsHtml}</tr>
      </thead>
      <tbody>
        ${bodyRowsHtml}
      </tbody>
    </table>
  `;
}

/**
 * Renders Page 1 of the Medical & Travel Expense Request document.
 * Includes Header, Prescription Drugs, OTC Drugs, Medical Supplies, Parking, and Mileage tables.
 * @param {Object} data - Structured dataset object containing expense categories.
 * @returns {string} HTML string for Page 1.
 */
function renderExpensePage1(data) {
  return `
    <section class="page" id="page-1">
      <div>
        ${renderDocHeader({
          title: "Medical &amp; Travel Expense<br>Request",
          claimNumber: data.claimNumber,
          logoPath: "assets/wcb-logo.png"
        })}

        <div class="worker-intro">
          <span class="worker-name-blue">${escapeHtml(data.workerName)}</span> requested reimbursement for the following medical and/or travel expenses:
        </div>

        <!-- 1. Prescription Drugs -->
        <div class="table-section-title">Prescription Drugs</div>
        ${renderTable(
          ["Drug Name", "Prescription Date", "Date Purchased", "Healthcare Provider Name", "Paid Amount"],
          data.prescriptionDrugs,
          item => [item.drugName, item.prescriptionDate, item.datePurchased, item.providerName, item.paidAmount]
        )}

        <!-- 2. Over-the-Counter Drugs -->
        <div class="table-section-title">Over-the-Counter Drugs</div>
        ${renderTable(
          ["Drug Name", "Date Purchased", "Paid Amount", "Seller's Name", "Reason for Purchasing"],
          data.otcDrugs,
          item => [item.drugName, item.datePurchased, item.paidAmount, item.sellerName, item.reason]
        )}

        <!-- 3. Medical Supplies -->
        <div class="table-section-title">Bandages, Braces or Other Medical Supplies</div>
        ${renderTable(
          ["Item Purchased", "Date Purchased", "Was this Prescribed?", "Healthcare Provider Name", "Paid Amount", "Seller's Name"],
          data.medicalSupplies,
          item => [item.itemPurchased, item.datePurchased, item.wasPrescribed, item.providerName, item.paidAmount, item.sellerName]
        )}

        <!-- 4. Parking -->
        <div class="table-section-title">Parking for Medical Appointments</div>
        ${renderTable(
          ["Address of Healthcare Provider/Medical Facility", "Date", "Paid Amount", "Meter Used?", "Meter Number"],
          data.parking,
          item => [item.facilityAddress, item.date, item.paidAmount, item.meterUsed, item.meterNumber]
        )}

        <!-- 5. Mileage -->
        <div class="table-section-title">Mileage to Medical Appointments</div>
        <div class="table-disclaimer-note">
          The WCB will generally reimburse only those transportation costs which are in excess of costs that would be incurred by the worker while travelling to and from work.
        </div>
        ${renderTable(
          ["Appointment Date", "Address of Healthcare Provider/Medical Facility", "Address of Workplace", "Number of km (Round Trip)"],
          data.mileage,
          item => [item.appointmentDate, item.facilityAddress, item.workplaceAddress, item.distanceKm]
        )}
      </div>

      ${renderDocFooter(data.workerAppId, data.submittedAt, 1, 2)}
    </section>
  `;
}

/**
 * Renders Page 2 of the Medical & Travel Expense Request document.
 * Includes Bus/Taxi Fare table, Pre-approval disclaimer, Privacy Notice acknowledgment, and Footer.
 * @param {Object} data - Structured dataset object.
 * @returns {string} HTML string for Page 2.
 */
function renderExpensePage2(data) {
  return `
    <section class="page" id="page-2">
      <div>
        <!-- 6. Bus or Taxi Fare -->
        <div class="table-section-title" style="margin-top: 10px;">Bus or Taxi Fare for Medical Appointments*</div>
        <div class="table-disclaimer-note">
          *Note: Pre-approval is required from your WCB representative to claim taxi fare(s).
        </div>
        ${renderTable(
          ["Appointment Date", "Address of Starting Point", "Address of Healthcare Provider/Medical Facility", "Bus or Taxi (indicate one)", "Total Fare Paid"],
          data.busTaxiFares,
          item => [item.appointmentDate, item.startingAddress, item.facilityAddress, item.type, item.totalFare]
        )}
      </div>

      <!-- Privacy Notice at bottom of Page 2 -->
      <div class="p2-privacy-container">
        <div class="cert-item" style="display:flex; align-items:flex-start; font-size:13.5px;">
          ${renderCheckbox(data.privacyNoticeAcknowledged)}
          <span>
            I understand that the <span class="privacy-link">Privacy Notice</span> applies to the personal information collected in this document.
          </span>
        </div>
      </div>

      ${renderDocFooter(data.workerAppId, data.submittedAt, 2, 2)}
    </section>
  `;
}

/**
 * Main application renderer. Mounts pages 1 and 2 into the DOM target.
 * @param {string} [datasetKey="reference"] - Key of dataset to load ("reference", "minimal", "large").
 */
function renderApp(datasetKey = "reference") {
  const data = expenseDatasets[datasetKey] || expenseDatasets.reference;
  const container = document.getElementById("document-app");
  if (!container) return;

  container.innerHTML = `
    <div class="document-container">
      ${renderExpensePage1(data)}
      ${renderExpensePage2(data)}
    </div>
  `;
}

/**
 * Dataset selector event handler. Re-renders document upon user selection.
 * @param {string} key - Selected dataset key.
 */
function switchDataset(key) {
  renderApp(key);
}

// Initial application bootstrap on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  renderApp("reference");
});
