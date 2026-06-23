const notices = [
  {
    title: "Free Health Camp",
    description: "Free health checkup camp for all citizens.",
    ward: "Ward No 1",
    municipality: "Kathmandu Metropolitan City",
    department: "health",
    attachment: [
      {
        url: "https://picsum.photos/seed/health1/500/500",
        altText: "Health camp image"
      }
    ],
    priority: "important",
    status: "active",
    publishedBy: "Health Dept"
  },
  {
    title: "School Admission Open",
    description: "Government school admission starts from next week.",
    ward: "Ward No 2",
    municipality: "Kathmandu Metropolitan City",
    department: "education",
    attachment: [
      {
        url: "https://picsum.photos/seed/education1/500/500",
        altText: "School education image"
      }
    ],
    priority: "normal",
    status: "active",
    publishedBy: "Education Dept"
  },
  {
    title: "Tax Payment Notice",
    description: "Pay your property tax before deadline.",
    ward: "Ward No 3",
    municipality: "Kathmandu Metropolitan City",
    department: "tax",
    attachment: [
      {
        url: "https://picsum.photos/seed/tax1/500/500",
        altText: "Tax document image"
      }
    ],
    priority: "urgent",
    status: "active",
    publishedBy: "Tax Dept"
  },
  {
    title: "Power Outage Schedule",
    description: "Electricity maintenance in Ward 4.",
    ward: "Ward No 4",
    municipality: "Kathmandu Metropolitan City",
    department: "electricity",
    attachment: [
      {
        url: "https://picsum.photos/seed/electric1/500/500",
        altText: "Electricity maintenance image"
      }
    ],
    priority: "important",
    status: "active",
    publishedBy: "Electricity Dept"
  },
  {
    title: "Water Supply Notice",
    description: "Water supply will be interrupted for maintenance.",
    ward: "Ward No 5",
    municipality: "Kathmandu Metropolitan City",
    department: "water",
    attachment: [
      {
        url: "https://picsum.photos/seed/water1/500/500",
        altText: "Water supply image"
      }
    ],
    priority: "normal",
    status: "active",
    publishedBy: "Water Dept"
  },

  {
    title: "Road Repair Work",
    description: "Main road repair will start from Monday.",
    ward: "Ward No 6",
    municipality: "Kathmandu Metropolitan City",
    department: "transport",
    attachment: [
      {
        url: "https://picsum.photos/seed/road1/500/500",
        altText: "Road repair image"
      }
    ],
    priority: "important",
    status: "active",
    publishedBy: "Transport Dept"
  },
  {
    title: "Public Holiday Announcement",
    description: "Municipality declares public holiday.",
    ward: "Ward No 7",
    municipality: "Kathmandu Metropolitan City",
    department: "general",
    attachment: [
      {
        url: "https://picsum.photos/seed/holiday1/500/500",
        altText: "Holiday announcement image"
      }
    ],
    priority: "normal",
    status: "active",
    publishedBy: "Admin Office"
  },
  {
    title: "Vaccination Program",
    description: "COVID booster vaccination available.",
    ward: "Ward No 8",
    municipality: "Kathmandu Metropolitan City",
    department: "health",
    attachment: [
      {
        url: "https://picsum.photos/seed/vaccine1/500/500",
        altText: "Vaccination program image"
      }
    ],
    priority: "important",
    status: "active",
    publishedBy: "Health Dept"
  },
  {
    title: "Scholarship Notice",
    description: "Scholarship application open for students.",
    ward: "Ward No 9",
    municipality: "Kathmandu Metropolitan City",
    department: "education",
    attachment: [
      {
        url: "https://picsum.photos/seed/scholar1/500/500",
        altText: "Scholarship image"
      }
    ],
    priority: "normal",
    status: "active",
    publishedBy: "Education Dept"
  },
  {
    title: "Business Tax Update",
    description: "Update your business registration details.",
    ward: "Ward No 10",
    municipality: "Kathmandu Metropolitan City",
    department: "tax",
    attachment: [
      {
        url: "https://picsum.photos/seed/businesstax1/500/500",
        altText: "Business tax image"
      }
    ],
    priority: "important",
    status: "active",
    publishedBy: "Tax Dept"
  },

  {
    title: "Street Light Repair",
    description: "Street lights will be repaired at night.",
    ward: "Ward No 1",
    municipality: "Kathmandu Metropolitan City",
    department: "electricity",
    attachment: [
      {
        url: "https://picsum.photos/seed/light1/500/500",
        altText: "Street light repair image"
      }
    ],
    priority: "normal",
    status: "active",
    publishedBy: "Electricity Dept"
  },
  {
    title: "Drinking Water Quality Check",
    description: "Water quality inspection in all wards.",
    ward: "Ward No 2",
    municipality: "Kathmandu Metropolitan City",
    department: "water",
    attachment: [
      {
        url: "https://picsum.photos/seed/watercheck1/500/500",
        altText: "Water quality image"
      }
    ],
    priority: "important",
    status: "active",
    publishedBy: "Water Dept"
  },
  {
    title: "Bus Route Change",
    description: "Temporary change in bus routes.",
    ward: "Ward No 3",
    municipality: "Kathmandu Metropolitan City",
    department: "transport",
    attachment: [
      {
        url: "https://picsum.photos/seed/bus1/500/500",
        altText: "Bus route image"
      }
    ],
    priority: "urgent",
    status: "active",
    publishedBy: "Transport Dept"
  },
  {
    title: "Community Meeting",
    description: "Ward level community meeting scheduled.",
    ward: "Ward No 4",
    municipality: "Kathmandu Metropolitan City",
    department: "general",
    attachment: [
      {
        url: "https://picsum.photos/seed/meeting1/500/500",
        altText: "Community meeting image"
      }
    ],
    priority: "normal",
    status: "active",
    publishedBy: "Ward Office"
  },
  {
    title: "Free Eye Checkup",
    description: "Eye checkup camp for senior citizens.",
    ward: "Ward No 5",
    municipality: "Kathmandu Metropolitan City",
    department: "health",
    attachment: [
      {
        url: "https://picsum.photos/seed/eye1/500/500",
        altText: "Eye checkup image"
      }
    ],
    priority: "important",
    status: "active",
    publishedBy: "Health Dept"
  },

  {
    title: "Exam Schedule Released",
    description: "Municipality school exam routine published.",
    ward: "Ward No 6",
    municipality: "Kathmandu Metropolitan City",
    department: "education",
    attachment: [
      {
        url: "https://picsum.photos/seed/exam1/500/500",
        altText: "Exam schedule image"
      }
    ],
    priority: "normal",
    status: "active",
    publishedBy: "Education Dept"
  },
  {
    title: "Property Map Update",
    description: "Update your land ownership records.",
    ward: "Ward No 7",
    municipality: "Kathmandu Metropolitan City",
    department: "tax",
    attachment: [
      {
        url: "https://picsum.photos/seed/property1/500/500",
        altText: "Property update image"
      }
    ],
    priority: "important",
    status: "active",
    publishedBy: "Tax Dept"
  },
  {
    title: "Transformer Maintenance",
    description: "Electricity shutdown due to maintenance.",
    ward: "Ward No 8",
    municipality: "Kathmandu Metropolitan City",
    department: "electricity",
    attachment: [
      {
        url: "https://picsum.photos/seed/transformer1/500/500",
        altText: "Transformer maintenance image"
      }
    ],
    priority: "urgent",
    status: "active",
    publishedBy: "Electricity Dept"
  },
  {
    title: "River Cleaning Program",
    description: "Community river cleaning campaign.",
    ward: "Ward No 9",
    municipality: "Kathmandu Metropolitan City",
    department: "general",
    attachment: [
      {
        url: "https://picsum.photos/seed/river1/500/500",
        altText: "River cleaning image"
      }
    ],
    priority: "normal",
    status: "active",
    publishedBy: "Environment Dept"
  },
  {
    title: "Water Leakage Repair",
    description: "Repair work in main pipeline.",
    ward: "Ward No 10",
    municipality: "Kathmandu Metropolitan City",
    department: "water",
    attachment: [
      {
        url: "https://picsum.photos/seed/leak1/500/500",
        altText: "Water leakage repair image"
      }
    ],
    priority: "important",
    status: "active",
    publishedBy: "Water Dept"
  }
];

module.exports = notices;