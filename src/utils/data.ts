import { SideNavElementType } from "../types/sidenav-element-type";

export const sidebarData: SideNavElementType[] = [
    {
      id: 1,
      title: "Introduction",
      lectures: [
        { title: "About this Course", link: "/introduction/about" },
        { title: "Visible Emissions & Opacity", link: "/introduction/opacity" },
        { title: "Smoke School", link: "/introduction/smoke-school" },
        { title: "Importance of VE Observations", link: "/introduction/ve-observations" },
        { title: "Module 1 Quiz", link: "/introduction/quiz" },
      ],
    },
    {
      id: 2,
      title: "Emission Types & Controls",
      lectures: [
        { title: "Types Overview", link: "/emission-types/overview" },
        { title: "Control Methods", link: "/emission-types/control-methods" },
        { title: "Industry Standards", link: "/emission-types/standards" },
      ],
    },
    {
      id: 3,
      title: "Method 9 Observation Procedures",
      lectures: [
        { title: "Step-by-Step Guide", link: "/method9-observation/step-guide" },
        { title: "Equipment Needed", link: "/method9-observation/equipment" },
        { title: "Common Mistakes", link: "/method9-observation/mistakes" },
      ],
    },
    {
      id: 4,
      title: "Method 9 Documentation Procedures",
      lectures: [
        { title: "Report Templates", link: "/method9-documentation/templates" },
        { title: "Submission Guidelines", link: "/method9-documentation/guidelines" },
        { title: "Case Studies", link: "/method9-documentation/case-studies" },
      ],
    },
    {
      id: 5,
      title: "Special Observation Situations",
      lectures: [
        { title: "Weather Conditions", link: "/special-observation/weather" },
        { title: "Unusual Emissions", link: "/special-observation/unusual" },
        { title: "Compliance Scenarios", link: "/special-observation/compliance" },
      ],
    },
    {
      id: 6,
      title: "Alternative Test Methods",
      lectures: [
        { title: "Comparison Studies", link: "/alternative-test/comparison" },
        { title: "New Technologies", link: "/alternative-test/technologies" },
        { title: "Regulatory Approvals", link: "/alternative-test/regulations" },
      ],
    },
    {
      id: 7,
      title: "EPA Method 22",
      lectures: [
        { title: "Method Overview", link: "/epa-method22/overview" },
        { title: "Data Collection", link: "/epa-method22/data-collection" },
        { title: "Reporting Requirements", link: "/epa-method22/reporting" },
      ],
    },
    {
      id: 8,
      title: "History of Emission Observations",
      lectures: [
        { title: "Early Methods", link: "/history-emission/early-methods" },
        { title: "Modern Approaches", link: "/history-emission/modern" },
        { title: "Global Impact", link: "/history-emission/global-impact" },
      ],
    },
    {
      id: 9,
      title: "Frequently Asked Questions",
      lectures: [
        { title: "General Questions", link: "/faq/general" },
        { title: "Technical Questions", link: "/faq/technical" },
        { title: "Legal Aspects", link: "/faq/legal" },
      ],
    },
    {
      id: 10,
      title: "Resources & Downloads",
      lectures: [
        { title: "Guides & Manuals", link: "/resources-downloads/guides" },
        { title: "Software Tools", link: "/resources-downloads/tools" },
        { title: "Useful Links", link: "/resources-downloads/links" },
      ],
    },
  ];
  
  