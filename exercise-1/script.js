/**
 * JavaScript Rendering Engine for Exercise 1 — Worker Progress Report
 */

// Helper to construct underlined form field line with sublabel
function renderUnderlineField(value, sublabel = "", widthClass = "") {
  return `
    <span class="underline-wrapper">
      <span class="underline-line ${widthClass}">${escapeHtml(value)}</span>
      ${sublabel ? `<span class="underline-sublabel">${escapeHtml(sublabel)}</span>` : ""}
    </span>
  `;
}

// Render Page 1
function renderPage1(data) {
  const rtw = data.returnToWork || {};
  const rec = data.recovery || {};

  return `
    <section class="page" id="page-1">
      <div>
        ${renderDocHeader({
          title: "Worker Progress Report",
          claimNumber: data.claimNumber,
          code: data.claimCode,
          logoPath: "assets/wcb-logo.png"
        })}

        <div class="worker-intro">
          <span class="worker-name-blue">${escapeHtml(data.workerName)}</span> provided the following updates in relation to their claim:
        </div>

        <div class="section-heading">Return to Work</div>

        <!-- Box 1: Return Status -->
        <div class="form-box">
          <div class="box-label">Select one:</div>
          <div class="options-grid-3">
            <div class="option-item">
              ${renderCheckbox(rtw.status === 'not_missed')}
              <span>I have not missed<br>time from work</span>
            </div>
            <div class="option-item">
              ${renderCheckbox(rtw.status === 'not_returned')}
              <span>I have not returned<br>to work</span>
            </div>
            <div class="option-item">
              ${renderCheckbox(rtw.status === 'returned')}
              <span>I returned to work on: ${renderUnderlineField(rtw.status === 'returned' ? rtw.returnDate : '', 'Date', 'short')}</span>
            </div>
          </div>
        </div>

        <!-- Box 2: Work Type -->
        <div class="form-box">
          <div class="box-label">I am working:</div>
          <div class="options-grid-2-2">
            <div class="option-item">
              ${renderCheckbox(rtw.workingStatus === 'full_regular')}
              <span>Full duties, regular<br>hours</span>
            </div>
            <div class="option-item">
              ${renderCheckbox(rtw.workingStatus === 'full_reduced')}
              <span>Full duties, reduced<br>hours</span>
            </div>
            <div class="option-item">
              ${renderCheckbox(rtw.workingStatus === 'modified_regular')}
              <span>Modified duties,<br>regular hours</span>
            </div>
            <div class="option-item">
              ${renderCheckbox(rtw.workingStatus === 'modified_reduced_hours')}
              <span>Modified duties,<br>reduced hours</span>
            </div>
          </div>
          <div class="option-item" style="margin-top: 10px;">
            ${renderCheckbox(Boolean(rtw.otherStatus))}
            <span style="display:flex; align-items:baseline; flex:1; gap:8px;">
              Other: ${renderUnderlineField(rtw.otherStatus, '', 'full')}
            </span>
          </div>
        </div>

        <!-- Box 3: Return Progress -->
        <div class="response-box">
          <div class="response-box-title">My return to work is going:</div>
          <div class="response-box-content">${escapeHtml(rtw.progress)}</div>
        </div>

        <!-- Underline: Expected Return -->
        <div class="field-row">
          <span>I expect to return to work on:</span>
          ${renderUnderlineField(rtw.expectedReturnDate, 'Date', 'long')}
        </div>

        <!-- Box 4: Concerns -->
        <div class="response-box">
          <div class="response-box-title">I have the following concerns about returning to work:</div>
          <div class="response-box-content large-box">${escapeHtml(rtw.concerns)}</div>
        </div>

        <!-- Underline: Employer Contact -->
        <div class="field-row">
          <span>I was most recently in contact with:</span>
          ${renderUnderlineField(rtw.employerContact, '(Name of employer contact)', 'long')}
          <span>on</span>
          ${renderUnderlineField(rtw.employerContactDate, 'Date', 'short')}
        </div>

        <div class="section-heading">Recovery</div>

        <!-- Box 5: Recovery Selection -->
        <div class="form-box">
          <div class="box-label">Select one:</div>
          <div class="options-grid-2">
            <div class="option-item">
              ${renderCheckbox(rec.status === 'not_fully')}
              <span>I have not fully recovered from my workplace<br>injury.</span>
            </div>
            <div class="option-item">
              ${renderCheckbox(rec.status === 'fully')}
              <span>I have fully recovered from my workplace<br>injury.</span>
            </div>
          </div>
        </div>

        <!-- Box 6: Recovery Comments -->
        <div class="response-box">
          <div class="response-box-title">I have provided the following comments about my recovery:</div>
          <div class="response-box-content large-box">${escapeHtml(rec.comments)}</div>
        </div>
      </div>

      ${renderDocFooter(data.workerAppId, data.submittedAt, 1, 3)}
    </section>
  `;
}

// Render Page 2
function renderPage2(data) {
  const med = data.medicalTreatment || {};
  const rx = data.medication || {};
  const ex = data.homeExercises || {};
  const currentPain = data.painScore;

  return `
    <section class="page" id="page-2">
      <div>
        <!-- Pain Rating -->
        <div class="pain-scale-container" style="margin-top: 10px;">
          <div class="pain-scale-text">
            I rate my current pain/discomfort on a scale of 1-10,<br>
            where 1 is no pain and 10 is severe pain out of 10.
          </div>
          <div class="pain-grid">
            ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => `
              <div class="option-item" style="gap:4px;">
                ${renderCheckbox(currentPain === n)}
                <span>${n}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Box 1: Medical Treatment -->
        <div class="form-box">
          <div class="box-label">Select one:</div>
          <div class="options-grid-2">
            <div class="option-item">
              ${renderCheckbox(med.status === 'not_continuing')}
              <span>I am not continuing to<br>receive medical treatment for<br>my workplace injury.</span>
            </div>
            <div class="option-item">
              ${renderCheckbox(med.status === 'continuing')}
              <span>I am continuing to receive<br>medical treatment for my<br>workplace injury from:
              ${renderUnderlineField(med.status === 'continuing' ? med.providerType : '', '(Medical Provider Type)', 'long')}
              </span>
            </div>
          </div>
        </div>

        <!-- Underline: Last Medical Treatment -->
        <div class="field-row">
          <span>My last medical treatment was</span>
          ${renderUnderlineField(med.lastTreatmentDate, 'Date', 'short')}
          <span>from</span>
          ${renderUnderlineField(med.lastProviderName, '(Medical Provider Name)', 'long')}
        </div>

        <!-- Underline: Next Medical Treatment -->
        <div class="field-row">
          <span>My next medical treatment is</span>
          ${renderUnderlineField(med.nextTreatmentDate, 'Date', 'short')}
          <span>from</span>
          ${renderUnderlineField(med.nextProviderName, '(Medical Provider Name)', 'long')}
        </div>

        <!-- Underline: Chiropractor/Physio -->
        <div class="field-row">
          <span>I am attending a Chiropractor or Physiotherapist</span>
          ${renderUnderlineField(med.physioFrequency, '(Frequency)', 'long')}
        </div>

        <!-- Box 2: Medication -->
        <div class="form-box">
          <div class="box-label">Select one:</div>
          <div class="options-grid-2">
            <div class="option-item">
              ${renderCheckbox(rx.status === 'not_taking')}
              <span>I am not taking medication<br>for my workplace injury.</span>
            </div>
            <div class="option-item">
              ${renderCheckbox(rx.status === 'taking')}
              <span>I am taking medication for my<br>workplace injury:
              ${renderUnderlineField(rx.status === 'taking' ? rx.prescribedName : '', '(Name of prescribed medication)', 'long')}
              </span>
            </div>
          </div>
        </div>

        <!-- Box 3: Home Exercises Selection -->
        <div class="form-box">
          <div class="box-label">Select one:</div>
          <div class="options-grid-2">
            <div class="option-item">
              ${renderCheckbox(ex.status === 'not_doing')}
              <span>I am not doing home exercises for my workplace<br>injury.</span>
            </div>
            <div class="option-item">
              ${renderCheckbox(ex.status === 'doing')}
              <span>I am doing home exercises for my workplace<br>injury.</span>
            </div>
          </div>
        </div>

        <!-- Box 4: Exercises Details -->
        <div class="response-box">
          <div class="response-box-title">List the exercises you are doing:</div>
          <div class="response-box-content large-box">${escapeHtml(ex.details)}</div>
        </div>

        <div class="section-heading">Other Information</div>

        <!-- Box 5: Additional Info -->
        <div class="response-box">
          <div class="response-box-title">I would like to provide the following additional information about my claim/injury:</div>
          <div class="response-box-content">${escapeHtml(data.additionalInfo)}</div>
        </div>
      </div>

      ${renderDocFooter(data.workerAppId, data.submittedAt, 2, 3)}
    </section>
  `;
}

// Render Page 3
function renderPage3(data) {
  const certs = data.certifications || {};

  return `
    <section class="page" id="page-3">
      <div>
        <div class="certification-block" style="margin-top: 40px;">
          <div class="cert-item">
            ${renderCheckbox(certs.infoTrue !== false)}
            <span>
              I certify that the information given on this form is true, correct and complete to the best of my
              knowledge. I agree to notify the Workers Compensation Board of Manitoba (WCB) immediately once I
              return to any form of work and/or employment. I understand that it is an offence to knowingly make
              a false statement to the WCB. I also understand that it is an offence to withhold information from
              WCB which affects my entitlement to compensation (e.g., full or partial recovery from injury, ability to
              return to work, sources of additional income, etc.). I understand that refusing to co-operate with, or
              follow my treatment, may result in the WCB reducing or suspending my benefits.
            </span>
          </div>

          <div class="cert-item">
            ${renderCheckbox(certs.privacyAcknowledged !== false)}
            <span>
              I understand that the <span class="privacy-link">Privacy Notice</span> applies to the personal information collected in this document.
            </span>
          </div>
        </div>
      </div>

      ${renderDocFooter(data.workerAppId, data.submittedAt, 3, 3)}
    </section>
  `;
}

// Main Render Function
function renderApp(datasetKey = "reference") {
  const data = workerDatasets[datasetKey] || workerDatasets.reference;
  const container = document.getElementById("document-app");
  if (!container) return;

  container.innerHTML = `
    <div class="document-container">
      ${renderPage1(data)}
      ${renderPage2(data)}
      ${renderPage3(data)}
    </div>
  `;
}

// Switch Dataset handler
function switchDataset(key) {
  renderApp(key);
}

// Initial render on page load
document.addEventListener("DOMContentLoaded", () => {
  renderApp("reference");
});
