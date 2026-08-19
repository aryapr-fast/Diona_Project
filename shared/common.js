/**
 * Shared Helper Utilities for WCB Document Recreation
 */

// Safe HTML escaping
function escapeHtml(text) {
  if (text === null || text === undefined) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Render controlled visual checkbox
function renderCheckbox(isChecked) {
  return `<span class="pdf-checkbox ${isChecked ? 'checked' : ''}"></span>`;
}

// Common Header Builder
function renderDocHeader(options) {
  const { title, claimNumber, code = null, logoPath = "../shared/assets/wcb-logo.png" } = options;
  return `
    <div class="doc-header">
      <div class="header-logo-col">
        <img src="${logoPath}" alt="Workers Compensation Board of Manitoba Logo">
      </div>
      <div class="header-address-col">
        333 Broadway<br>
        Winnipeg, MB R3C 4W3<br>
        Phone: (204) 954-4321<br>
        Toll Free: 1-855-954-4321<br>
        wcb.mb.ca
      </div>
      <div class="header-title-col">
        <div class="doc-title">${title}</div>
        <div class="claim-box-wrapper">
          <div class="claim-box">Claim No. ${escapeHtml(claimNumber)}</div>
          ${code ? `<div class="code-box">${escapeHtml(code)}</div>` : ''}
        </div>
      </div>
    </div>
  `;
}

// Common Footer Builder
function renderDocFooter(workerAppId, submittedAt, currentPage, totalPages) {
  return `
    <div class="doc-footer">
      <div class="footer-left">
        Worker App ID: ${escapeHtml(workerAppId)}
      </div>
      <div class="footer-right">
        <div>Submitted: ${escapeHtml(submittedAt)}</div>
        <div class="page-num">Page ${currentPage} of ${totalPages}</div>
      </div>
    </div>
  `;
}

// Print action helper
function printDocument() {
  window.print();
}
