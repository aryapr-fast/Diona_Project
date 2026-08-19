/**
 * Data Models for Exercise 2 — Medical & Travel Expense Request
 */

const expenseDatasets = {
  reference: {
    claimNumber: "20042047",
    workerName: "Madeleine Willson",
    workerAppId: "712041",
    submittedAt: "March 28, 2024 20:43",

    prescriptionDrugs: [
      {
        drugName: "Naproxen",
        prescriptionDate: "February 28, 2024",
        datePurchased: "February 29, 2024",
        providerName: "Dr. Best",
        paidAmount: "$20.00"
      }
    ],

    otcDrugs: [
      {
        drugName: "Advil",
        datePurchased: "March 28, 2024",
        paidAmount: "$8.00",
        sellerName: "Shoppers Drug Mart",
        reason: "Pain"
      }
    ],

    medicalSupplies: [
      {
        itemPurchased: "Tensor",
        datePurchased: "February 28, 2024",
        wasPrescribed: "Yes",
        providerName: "Dr. Best",
        paidAmount: "$10.00",
        sellerName: "Shoppers DrugMart"
      }
    ],

    parking: [
      {
        facilityAddress: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada",
        date: "March 28, 2024",
        paidAmount: "$10.00",
        meterUsed: "yes",
        meterNumber: "12245"
      }
    ],

    mileage: [
      {
        appointmentDate: "March 28, 2024",
        facilityAddress: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
        workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3,Canada",
        distanceKm: "20 km"
      }
    ],

    busTaxiFares: [
      {
        appointmentDate: "March 28, 2024",
        startingAddress: "",
        facilityAddress: "HSC Winnipeg Women’s Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",
        type: "Bus",
        totalFare: "$3.00"
      },
      {
        appointmentDate: "March 27, 2024",
        startingAddress: "25 Furby St, Winnipeg MB R3C2A2, Canada",
        facilityAddress: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada",
        type: "Taxi",
        totalFare: "$15.00"
      }
    ],

    privacyNoticeAcknowledged: true
  },

  minimal: {
    claimNumber: "20088990",
    workerName: "Jane Smith",
    workerAppId: "401928",
    submittedAt: "August 19, 2026 09:15",

    prescriptionDrugs: [],
    otcDrugs: [],
    medicalSupplies: [],
    parking: [],
    mileage: [],
    busTaxiFares: [],

    privacyNoticeAcknowledged: true
  },

  large: {
    claimNumber: "20077112",
    workerName: "Marcus Vance",
    workerAppId: "883920",
    submittedAt: "August 19, 2026 16:30",

    prescriptionDrugs: [
      {
        drugName: "Naproxen 500mg",
        prescriptionDate: "February 28, 2024",
        datePurchased: "February 29, 2024",
        providerName: "Dr. Best",
        paidAmount: "$20.00"
      },
      {
        drugName: "Amoxicillin 250mg",
        prescriptionDate: "March 05, 2024",
        datePurchased: "March 05, 2024",
        providerName: "Dr. H. Lee",
        paidAmount: "$15.50"
      },
      {
        drugName: "Cyclobenzaprine 10mg",
        prescriptionDate: "March 12, 2024",
        datePurchased: "March 13, 2024",
        providerName: "Dr. Best",
        paidAmount: "$24.75"
      },
      {
        drugName: "Gabapentin 300mg",
        prescriptionDate: "April 01, 2024",
        datePurchased: "April 02, 2024",
        providerName: "Dr. R. Martinez",
        paidAmount: "$32.00"
      }
    ],

    otcDrugs: [
      {
        drugName: "Advil Extra Strength",
        datePurchased: "March 28, 2024",
        paidAmount: "$8.00",
        sellerName: "Shoppers Drug Mart",
        reason: "Joint Pain"
      },
      {
        drugName: "Tylenol Muscle Complete",
        datePurchased: "April 04, 2024",
        paidAmount: "$11.49",
        sellerName: "Rexall Pharmacy",
        reason: "Back stiffness"
      },
      {
        drugName: "Voltaren Emulgel",
        datePurchased: "April 10, 2024",
        paidAmount: "$16.99",
        sellerName: "Walmart Pharmacy",
        reason: "Topical pain relief"
      }
    ],

    medicalSupplies: [
      {
        itemPurchased: "Tensor Elastic Bandage",
        datePurchased: "February 28, 2024",
        wasPrescribed: "Yes",
        providerName: "Dr. Best",
        paidAmount: "$10.00",
        sellerName: "Shoppers DrugMart"
      },
      {
        itemPurchased: "Lumbar Back Support Belt",
        datePurchased: "March 10, 2024",
        wasPrescribed: "Yes",
        providerName: "Dr. H. Lee",
        paidAmount: "$45.00",
        sellerName: "Winnipeg Medical Supplies"
      },
      {
        itemPurchased: "Hot/Cold Gel Pack (2x)",
        datePurchased: "March 18, 2024",
        wasPrescribed: "No",
        providerName: "N/A",
        paidAmount: "$14.50",
        sellerName: "Rexall Pharmacy"
      }
    ],

    parking: [
      {
        facilityAddress: "333 St Mary Ave, Winnipeg MB R3C4A5, Canada",
        date: "March 28, 2024",
        paidAmount: "$10.00",
        meterUsed: "yes",
        meterNumber: "12245"
      },
      {
        facilityAddress: "820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
        date: "April 02, 2024",
        paidAmount: "$8.50",
        meterUsed: "yes",
        meterNumber: "99401"
      },
      {
        facilityAddress: "665 William Ave, Winnipeg MB R3E 0Z2, Canada",
        date: "April 15, 2024",
        paidAmount: "$12.00",
        meterUsed: "no",
        meterNumber: "Garage Ticket"
      }
    ],

    mileage: [
      {
        appointmentDate: "March 28, 2024",
        facilityAddress: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
        workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3,Canada",
        distanceKm: "20 km"
      },
      {
        appointmentDate: "April 02, 2024",
        facilityAddress: "St. Boniface Hospital, 409 Tache Ave, Winnipeg MB",
        workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3,Canada",
        distanceKm: "16 km"
      },
      {
        appointmentDate: "April 15, 2024",
        facilityAddress: "Pan Am Clinic, 75 Poseidon Bay, Winnipeg MB",
        workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3,Canada",
        distanceKm: "24 km"
      }
    ],

    busTaxiFares: [
      {
        appointmentDate: "March 28, 2024",
        startingAddress: "",
        facilityAddress: "HSC Winnipeg Women’s Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",
        type: "Bus",
        totalFare: "$3.00"
      },
      {
        appointmentDate: "March 27, 2024",
        startingAddress: "25 Furby St, Winnipeg MB R3C2A2, Canada",
        facilityAddress: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada",
        type: "Taxi",
        totalFare: "$15.00"
      },
      {
        appointmentDate: "April 10, 2024",
        startingAddress: "100 Main St, Winnipeg MB",
        facilityAddress: "Pan Am Clinic, 75 Poseidon Bay, Winnipeg MB",
        type: "Taxi",
        totalFare: "$18.50"
      },
      {
        appointmentDate: "April 18, 2024",
        startingAddress: "Home Address",
        facilityAddress: "Physiotherapy Centre, Winnipeg MB",
        type: "Bus",
        totalFare: "$3.15"
      }
    ],

    privacyNoticeAcknowledged: true
  }
};
