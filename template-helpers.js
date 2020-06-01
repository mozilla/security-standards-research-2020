"use strict";

const siteStrings = {
  "conference-name": "Security Standardisation Research",
  "conference-name-full": "Security Standardisation Research Conference",
  "date": "30 November 2020 - 1 December 2020",
  "websiteTitle": "Security Standardisation Research Conference 2020 - Brought to you by Mozilla",
  "websiteDescription": "A virtual conference covering the full spectrum of research on security standardisation.",
};

function getAuthorInstruction() {
  const easyChairLink = "<a class='nested-link' href='https://easychair.org/conferences/?conf=ssr2020' target='_blank' rel='noopener noreferrer'>https://easychair.org/conferences/?conf=ssr2020</a>";
  return [
    `Please submit via ${easyChairLink}.`,
    "Authors submitting a systematisation of knowledge paper should have a title consisting of “SoK: Title”. This is to ensure that the committee is made aware that the paper is an SoK paper, and so will be reviewed with different criteria.",
    "Submitted papers must be original, unpublished, anonymous and not submitted to journals or other conferences/workshops that have proceedings. Submissions must be written in English and should be at most 12 pages in double-column ACM format. Papers not meeting these guidelines risk rejection without consideration. All submitted papers will be reviewed by at least three members of the program committee.",
    "The accepted papers will be published via ACM publications. At least one author of each accepted paper must register for the conference.",
    `Papers can be submitted using the EasyChair system available at the following address: ${easyChairLink}`,
  ];
}

function getHeaderLinks(args) {
  const activeClass = "active-link";
  const pageViewData = args.data.exphbs.view;
  const headerLinks = [
    {
      linkTitle: "Home",
      linkHref: "/",
      activeLink: (pageViewData === "landing-page") ? activeClass : "",
    },
    {
      linkTitle: "Important Dates",
      linkHref: "/important-dates",
      activeLink: (pageViewData === "important-dates") ? activeClass : "",
    },
    {
      linkTitle: "Papers",
      linkClasses: "drop-down",
      parentId: "papers",
      activeLink: (pageViewData.includes("papers/")) ? activeClass : "",
      children: [
        {
          linkTitle: "Call for Papers",
          linkHref: "/call-for-papers",
        },
        {
          linkTitle: "Paper Submission",
          linkHref: "/paper-submission",
        },
        {
          linkTitle: "Accepted Papers",
          linkHref: "/accepted-papers",
        },
      ],
    },
    {
      linkTitle: "Programme",
      linkHref: "/programme",
      parentId: "programme",
      activeLink: (pageViewData.includes("programme")) ? activeClass : "",
      children: [
        {
          linkTitle: "Invited Speakers",
          linkHref: "/invited-speakers",
        },
        {
          linkTitle: "Programme",
          linkHref: "/programme",
          cssClasses: "show-mobile",
        },
      ],
    },
    {
      linkTitle: "Registration",
      linkHref: "/registration",
      activeLink: (pageViewData === "registration") ? activeClass : "",
    },
    {
      linkTitle: "Contact",
      linkHref: "/contact",
      activeLink: (pageViewData === "contact") ? activeClass : "",
    },
  ];
  return headerLinks;
}

function getImportantDates() {
  return [
    {
      eventTitle: "Deadline for submissions",
      eventDate: "24 August 2020",
      day: "24",
      month: "Aug",
      dateType: "Deadline:",
      calendarLink: "https://calendar.google.com/calendar/r/eventedit?text=SSR+2020+Deadline+for+Paper+Submissions&dates=20200824/20200825&details=For+details,+link+here:+https://ssr2020.mozilla.org",
    },
    {
      eventTitle: "Notifications to authors",
      eventDate: "1 October 2020",
      day: "1",
      month: "Oct",
      dateType: "Deadline:",
      calendarLink: "https://calendar.google.com/calendar/r/eventedit?text=SSR+2020+Notification+to+authors&dates=20201001/20201002&details=For+details,+link+here:+https://ssr2020.mozilla.org",
    },
    {
      eventTitle: "Camera ready due",
      eventDate: "12 October 2020",
      day: "12",
      month: "Oct",
      dateType: "Deadline:",
      calendarLink: "https://calendar.google.com/calendar/r/eventedit?text=SSR+2020+Camera+Ready+Due&dates=20201012/20201013&details=For+details,+link+here:+https://ssr2020.mozilla.org",
    },
    {
      eventTitle: "SSR 2020 Conference",
      eventDate: "30 November 2020 - 1 December 2020",
      day: "30",
      month: "Nov",
      dateType: "Deadline:",
      calendarLink: "https://calendar.google.com/calendar/r/eventedit?text=SSR+2020+Conference&dates=20201130/20201202&details=For+details,+link+here:+https://ssr2020.mozilla.org",
    },
  ];
}

function getSubmissionGuidelines() {
  return [
    "Submission Guidelines Papers offering research contributions to the area of security standardisation are solicited for submission to the SSR 2020 conference. SSR will also accept <span class='bold'>Systematisation of Knowledge (SoK)</span> papers relating to security standardisation, which integrate experience and previous research, drawing new comprehensive conclusions. SoK papers should evaluate, systematise, and contextualise existing knowledge. They should provide a new viewpoint, offer a comprehensive taxonomy, or cast doubt on long-held beliefs, based on compelling evidence. We also welcome SoK papers that document existing standardisation practices and analyse their weaknesses and strengths. We also encourage submission of <span class='bold'>Vision papers</span> relating to security standardisation. The vision track is intended to report on work in progress or concrete ideas for work that has yet to begin. The focus in the vision track is to spark discussion with the goal to provide the authors helpful feedback, pointers to potentially related investigations, and new ideas to explore. Suitable submissions to the vision track include traditional work-in-progress pieces such as preliminary results of pre-studies, but also research proposals and position papers outlining future research.",
    "Submissions should be made using EasyChair at: <a href='https://easychair.org/account/signin?l=gUlMvW71SRWpVzOfHjItS5#' class='nested-link' target='_blank' rel='noopener noreferrer'>https://easychair.org/account/signin?l=gUlMvW71SRWpVzOfHjItS5#</a>",
    "Papers may present theory, applications or practical experience in the field of security standardisation, including, but not necessarily limited to <a class='nested-link' href='#topics'>these topics</a>.",
  ];
}

function getLandingStrings() {
  return [
    {
      copyBlock: "The purpose of this conference is to discuss the many research problems deriving from studies of existing standards, the development of revisions to existing standards, and the exploration of completely new areas of standardisation. Indeed, many security standards bodies are only beginning to address the issue of transparency, so that the process of selecting security techniques for standardisation can be seen to be as scientific and unbiased as possible.",
    },
    {
      copyBlock: "This year, we would also like to encourage active law researchers in data protection and privacy to submit to the conference. This aligns with the presence of the GDPR in the EU. Submissions relating to regulation-related aspects of Covid-19 technologies, blockchain technology and the IoT are particularly welcomed. We would also love to see more standardisation efforts being open to interaction with academics. This follows in the footsteps of IETF’s design approach for TLS 1.3, which has seen substantial academic input. Similarly, several post-quantum standardisation efforts have seen interaction between academia and industry.",

    },
    {
      copyBlock: "This conference is intended to cover the full spectrum of research on security standardisation, including, but not restricted to, work on cryptographic techniques (including ANSI, IEEE, IETF, ISO/IEC JTC 1/SC 27, ITU-T and NIST), security management, security evaluation criteria, security policy, network security, privacy and identity management, smart cards and RFID tags, biometrics, security modules, and industry-specific security standards (e.g. those produced by the payments, telecommunications and computing industries for such things as payment protocols, mobile telephony and trusted computing).",
    },
    {
      copyBlock: "The proceedings of SSR 2020 will be published by Springer in the <a class='nested-link' href='https://www.springer.com/us/computer-science/lncs' target='_blank' rel='noopener noreferrer'>Lecture Notes in Computer Science series.</a>",
    },
    {
      copyBlock: "An overview of the previous SSR conferences can be found at <a class='nested-link' href='http://ssresearch.eu/' target='_blank' rel='noopener noreferrer'>ssresearch.eu</a>",
    },
  ];
}

function getOrganizingCommittee() {
  return [
    {
      memberTitle: "General Chair",
      memberName: "Thyla van der Merwe",
      memberNameLocation: "<span class='committee-name'>Thyla van der Merwe<span class='comma'>,</span></span> Mozilla, London, UK",
      emailAddress: "tvandermerwe@mozilla.com",
    },
    {
      memberTitle: "PC Co-chair",
      memberName: "Maryam Mehrnezhad",
      memberNameLocation: "<span class='committee-name'>Maryam Mehrnezhad<span class='comma'>,</span></span> Newcastle University, UK",
      emailAddress: "maryam.mehrnezhad@newcastle.ac.uk",
    },
    {
      memberTitle: "PC Co-chair",
      memberName: "Chris Mitchell",
      memberNameLocation: " <span class='committee-name'>Chris Mitchell<span class='comma'>,</span></span> RHUL, UK",
      emailAddress: "me@chrismitchell.net",
    },

  ];
}

function getProgramCommittee() {
  return [
    "Steve Babbage, Vodafone",
    "Richard Barnes, Cisco",
    "Benjamin Beurdouche, Mozilla",
    "Lily Chen, National Institute of Standards and Technology (NIST)",
    "Liqun Chen, University of Surrey ",
    "Zhaohui Cheng, Olym Info. Sec. Inc",
    "Benjamin Dowling, ETH Zürich",
    "Felix Günther, ETH Zürich",
    "Feng Hao, University of Warwick",
    "Matt Henricksen, Huawei",
    "Jonathan Hoyland, Cloudflare",
    "Saqib A. Kakvi, Bergische Universität Wupperta",
    "Mohsin Khan, University of Helsinki",
    "Markulf Kohlweiss, University of Edinburgh",
    "Thalia Laing, HP",
    "Wanpeng Li, University of Aberdeen",
    "Catherine Meadows, Naval Research Laboratory",
    "David Naccache, ENS Paris ",
    "Kenny Paterson, ETH Zürich",
    "Christopher Patton, University of Florida",
    "Andrew Paverd, Microsoft",
    "Gaëtan Pradel, INCERT",
    "Raphael Spreitzer, SGS Digital Trust Services GmbH",
    "Ehsan Toreini, Newcastle University",
    "Christopher Wood, Cloudflare",
    "Kazuki Yoneyama, Ibaraki University",
  ];
}

function getString(stringId) {
  return siteStrings[stringId];
}

function getTopics() {
  return ["access control",
  "biometrics",
  "cloud computing security/privacy",
  "critical national infrastructure protection",
  "standards consistency & comparison critiques of standards",
  "cryptanalysis",
  "cryptographic protocols",
  "cryptographic techniques",
  "evaluation criteria",
  "formal analysis of standards",
  "history of standardization",
  "identity management",
  "industrial control systems security",
  "internet security",
  "interoperability of standards",
  "intrusion detection",
  "key management and PKIs",
  "standardisation process management",
  "mobile security",
  "network security",
  "open standards and open source",
  "payment system security",
  "privacy regional and international standards",
  "RFID tag security",
  "risk analysis",
  "security controls",
  "security management",
  "security protocols",
  "security services",
  "security tokens",
  "smart cards",
  "telecommunications security",
  "trusted computing",
  "web security",
  "blockchain",
  "internet of things security/privacy",
  "data protection and law/regulation",
  ];
}

function showSubNav(args) {
  if (args.data.exphbs.view && args.data.exphbs.view === "papers/call-for-papers") {
    return true;
  }
  return false;
}

module.exports = {
  getAuthorInstruction,
  getImportantDates,
  getHeaderLinks,
  getLandingStrings,
  getOrganizingCommittee,
  getProgramCommittee,
  getString,
  getSubmissionGuidelines,
  getTopics,
  showSubNav,
};
