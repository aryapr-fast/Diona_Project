/**
 * JavaScript Rendering Engine for Exercise 2 — Medical & Travel Expense Request
 */

// Generic Table Generator
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

// Page 1 Rendering
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

// Page 2 Rendering
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

// Main Render Function
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

// Switch Dataset Handler
function switchDataset(key) {
  renderApp(key);
}

// Initial Render
document.addEventListener("DOMContentLoaded", () => {
  renderApp("reference");
});
