/**
 * Data Models for Exercise 1 — Worker Progress Report
 */

const workerDatasets = {
  reference: {
    claimNumber: "20042047",
    claimCode: "WP",
    workerName: "Madeleine Willson",
    workerAppId: "712041",
    submittedAt: "March 19, 2024 19:21",

    returnToWork: {
      status: "returned", // "not_missed" | "not_returned" | "returned"
      returnDate: "March 15, 2024",
      workingStatus: "modified_reduced_hours", // "full_regular" | "full_reduced" | "modified_regular" | "modified_reduced_hours"
      otherStatus: "",
      progress: "Terrible. Testing Testing",
      expectedReturnDate: "",
      concerns: "",
      employerContact: "",
      employerContactDate: ""
    },

    recovery: {
      status: "fully", // "not_fully" | "fully"
      comments: ""
    },

    painScore: null, // 1 to 10 or null

    medicalTreatment: {
      status: null, // "not_continuing" | "continuing"
      providerType: "",
      lastTreatmentDate: "",
      lastProviderName: "",
      nextTreatmentDate: "",
      nextProviderName: "",
      physioFrequency: ""
    },

    medication: {
      status: null, // "not_taking" | "taking"
      prescribedName: ""
    },

    homeExercises: {
      status: null, // "not_doing" | "doing"
      details: ""
    },

    additionalInfo: "No info Testing Testing",

    certifications: {
      infoTrue: true,
      privacyAcknowledged: true
    }
  },

  minimal: {
    claimNumber: "20098765",
    claimCode: "WP",
    workerName: "John Doe",
    workerAppId: "509122",
    submittedAt: "August 19, 2026 10:30",

    returnToWork: {
      status: "not_returned",
      returnDate: "",
      workingStatus: null,
      otherStatus: "",
      progress: "",
      expectedReturnDate: "September 01, 2026",
      concerns: "Unsure about physical stamina during long shifts.",
      employerContact: "Sarah Jenkins",
      employerContactDate: "August 15, 2026"
    },

    recovery: {
      status: "not_fully",
      comments: "Slow improvement in mobility."
    },

    painScore: 4,

    medicalTreatment: {
      status: "continuing",
      providerType: "Physiotherapist",
      lastTreatmentDate: "August 12, 2026",
      lastProviderName: "St. James Clinic",
      nextTreatmentDate: "August 22, 2026",
      nextProviderName: "St. James Clinic",
      physioFrequency: "2 times per week"
    },

    medication: {
      status: "not_taking",
      prescribedName: ""
    },

    homeExercises: {
      status: "doing",
      details: "Gentle leg stretches twice daily."
    },

    additionalInfo: "",

    certifications: {
      infoTrue: true,
      privacyAcknowledged: true
    }
  },

  large: {
    claimNumber: "20033445",
    claimCode: "WP",
    workerName: "Robert Christopher Montgomery-Smith",
    workerAppId: "981247",
    submittedAt: "August 19, 2026 14:45",

    returnToWork: {
      status: "returned",
      returnDate: "August 01, 2026",
      workingStatus: "modified_regular",
      otherStatus: "Light desk duty with ergonomic chair and hourly movement breaks",
      progress: "Progressing steadily. Modified duties have helped reduce strain on lower back during morning hours.",
      expectedReturnDate: "October 15, 2026",
      concerns: "Concerned about recurring heavy lifting requirements when returning to full warehouse operational duties.",
      employerContact: "Elizabeth Vance (HR Operations Director)",
      employerContactDate: "August 18, 2026"
    },

    recovery: {
      status: "not_fully",
      comments: "Rehabilitation is active. Pain flares up during rainy weather or prolonged standing over 2 hours."
    },

    painScore: 7,

    medicalTreatment: {
      status: "continuing",
      providerType: "Orthopedic Specialist & Physical Therapist",
      lastTreatmentDate: "August 14, 2026",
      lastProviderName: "Dr. Alexander Thorne, Manitoba Sports Medicine",
      nextTreatmentDate: "August 28, 2026",
      nextProviderName: "Dr. Alexander Thorne, Manitoba Sports Medicine",
      physioFrequency: "3 sessions per week (Mon, Wed, Fri)"
    },

    medication: {
      status: "taking",
      prescribedName: "Naproxen 500mg (twice daily), Cyclobenzaprine 10mg (as needed for muscle spasms)"
    },

    homeExercises: {
      status: "doing",
      details: "Core strengthening stability routine (planks, pelvic tilts, bird-dog exercises) 20 mins every morning."
    },

    additionalInfo: "Worker requests ergonomic workplace evaluation before transitioning back to 8-hour standing shifts.",

    certifications: {
      infoTrue: true,
      privacyAcknowledged: true
    }
  }
};
