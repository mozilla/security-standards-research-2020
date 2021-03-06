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
    "Submitted papers must be original, unpublished, anonymous and not submitted to journals or other conferences/workshops that have proceedings. Submissions must be written in English and should be at most 23 pages in Springer LCNS format, including appendices. Authors should consult <a href='/docs/Springer_Guidelines.pdf' target='_blank' class='nested-link'>Springer’s authors’ guidelines</a> and use their proceedings templates, either for LaTeX or for Word, for the preparation of their papers. Springer encourages authors to include their <a href='https://goo.gl/hbsa4D' rel='noopener noreferrer' target='_blank' class='nested-link'>ORCIDs</a> in their papers. Papers not meeting these guidelines risk rejection without consideration.  All submitted papers will be reviewed by at least three members of the program committee.",
    "For accepted papers, in addition, the corresponding author of each paper, acting on behalf of all of the authors of that paper, must complete and sign a <a href='/docs/Consent_to_Publish.pdf' class='nested-link' target='_blank'>Consent-to-Publish</a> form. The corresponding author signing the copyright form should match the corresponding author marked on the paper. Once the files have been sent to Springer, changes relating to the authorship of the papers cannot be made.",
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
      eventDate: "31 August 2020",
      day: "31",
      month: "Aug",
      dateType: "Deadline:",
      calendarLink: "https://calendar.google.com/calendar/r/eventedit?text=SSR+2020+Deadline+for+Paper+Submissions&dates=20200831/20200901&details=For+details,+link+here:+https://ssr2020.mozilla.org",
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

function getInvitedSpeakers() {
  return [
    {
      speakerName: "Professor Liqun Chen,",
      target: "lilian-edwards",
      speakerAffiliation: "University of Surrey",
      bio: [
        "Liqun Chen is a Professor in Secure Systems at the University of Surrey. Prior to taking this position in 2016, she was a principal research scientist at Hewlett-Packard Laboratories, Bristol, UK. During her 19 years working for the company, she developed several cryptographic schemes that were adopted by International Standards bodies, ISO/IEC, IEEE and TCG. In particular, she designed several cryptographic algorithms (including direct anonymous attestation and multiple signature interfaces) used in the Trusted Platform Module (TPM).",
        "She co-authored the paper “Direct anonymous attestation”, which was originally published at ACM CCS 2004 and received a Test of Time award at ACM CCS 2014. She is the technical leader and principal investigator in the EU H2020 FutureTPM project, which aims to develop a post-quantum TPM. Her current research interests are applied cryptography, trusted computing and network security. She has served as general or program committee chairman at 18 international conferences and as associate editor or member of the editorial board for 4 international journals.",
        "She has also served as editor or co-editor for 7 international standards and serves as the deputy chairman of Technical Subcommittee 2 of BSI IST/33, dealing with Security Mechanisms and providing input to ISO/IEC JTC1/SC27.",
      ],
    },
    {
      speakerName: "Nick Sullivan,",
      target: "nick-sullivan",
      speakerAffiliation: "Cloudflare",
      bio: [
        "Nick Sullivan is Head of Research at Cloudflare, a leading Internet security, performance, and reliability company. He leads research efforts in the fields of security and privacy, cryptography, Internet measurement, and emerging networking paradigms. Nick is also the co-chair of the Crypto Forum Research Group, which defines international standards in cryptography for the Internet Research Task Force.",
        "Prior to working at Cloudflare, he developed encryption technology for Apple’s Internet Services division, co-wrote Symantec’s Internet Security Threat Report, and completed degrees in both Computer Science and Pure Mathematics. He is passionate about improving the Internet through cutting-edge research and the development of open standards.",
      ],
    },
  ];
}

function getAcceptedPapers() {
  return [
    {
      paperTitle: "A Systematic Appraisal of Side Channel Evaluation Strategies",
      target: "systematic-appraisal",
      paperAuthors: "Melissa Azouaoui, Davide Bellizia, Ileana Buhan, Nicolas Debande, Sebastien Duval, Christophe Giraud, Eliane Jaulmes, Francois Koeune, Elisabeth Oswald, Francois-Xavier Standaert and Carolyn Whitnall",
      abstract: [
        "In this paper we examine the central question that is how well do side channel evaluation regimes capture the true security level of a product. Concretely, answering this question requires considering the optimality of the attack/evaluation strategy selected by the evaluator, and the various steps to instantiate it. We draw on a number of published works and discuss whether state-of-the-art solutions for the different steps of a side-channel security evaluation offer bounds or guarantees of optimality, or if they are inherently heuristic. We use this discussion to provide an informal rating of the steps' optimality and to put forward where risks of overstated security levels remain.",
      ],
    },
    {
      paperTitle: "On Internal Re-Keying",
      target: "internal-rekeying",
      paperAuthors: "Liliya Akhmetzyanova, Evgeny Alekseev, Stanislav Smyshlyaev and Igor Oshkin",
      abstract: [
        "In this paper we introduce a classification of existing re-keying-based approaches to increase the security of block cipher operation modes. We introduce the concepts of external and internal re-keying putting the focus on the second one. Whereas the external re-keying approach is widely used and provides the mechanism of key usage control on a message stream processing level, the internal re-keying approach is the first known mechanism providing such a control on a single message processing level. These approaches can be applied completely independently. The internal re-keying approach was already applied to the CTR encryption mode and yielded the CTR-ACPKM mode. The mode is a part of RFC 8645 'Re-keying Mechanisms for Symmetric Keys' which represents the consensus of the Crypto Forum Research Group (CFRG) of the Internet Research Task Force (IRTF). In the current paper we apply the internal re-keying approach to the well-known GCM authenticated encryption mode. The main results of this paper are a new internally re-keyed GCM-ACPKM mode and its security bounds. We estimate the security of the GCM-ACPKM mode respecting standard security notions. We compare both security and performance of the GCM-ACPKM and GCM modes. The results show that changing GCM mode by integrating the ACPKM internal re-keying procedure increases security, significantly extending the lifetime of a key with a negligible loss in performance. Also we show how the re-keying approaches could increase the security of TLS 1.3 and CMS cipher suites.",
      ],
    },
    {
      paperTitle: "On the Memory Fault Resilience of TLS 1.3",
      target: "memory-fault",
      paperAuthors: "Lukas Brandstetter, Marc Fischlin, Robin Leander Schröder and Michael Yonli",
      abstract: [
        "Recently, Aranha et al. (Eurocrypt 2020) as well as Fischlin and Günther (CT-RSA 2020) investigated the possibility to model memory fault attacks like Rowhammer in security games, and to deduce statements about the (in)security of schemes against such attacks. They looked into the fault-resistance of signature and AEAD schemes. Here, we extend the approach to the TLS 1.3 key exchange protocol. Our results give a mixed picture about the fault resistance of TLS 1.3. Full fault attacks on the handshake protocol, where the adversary can modify the content of variables arbitrarily, render the protocol completely insecure.  On the positive side we argue that differential faults, where the adversary can flip selected memory cells, do not seem to be harmful to key derivation in the pre-shared-key mode for the handshake. The weaker random fault attacks, where some bits in memory are flipped randomly, still enable successful attacks against the record layer. We therefore present a slight modification for the nonce generation in TLS 1.3 which withstands such attacks.",
      ],
    },
    {
      paperTitle: "SoK: Comparison of the Security of Real World RSA Hash-and-Sign Signatures",
      target: "sok-signatures",
      paperAuthors: "Saqib A. Kakvi",
      abstract: [
        "In this modern day and age, where the majority of our communication occurs online, digital signatures are more important than ever before. Of the utmost importance are the standardised signatures that are deployed not only across the Internet, but also in everyday devices, such as debit and credit cards. The development of these signatures began in the 1990s and is still an ongoing process to this day. We will focus on RSA-based hash-and-sign signatures, specifically deterministic hash-and-sign signatures. We will give a survey of all standardised deterministic RSA hash-and-signatures, where we explore the history of each one, from inception, to attacks and finally proofs of security. As the security proofs have also appeared over the span of two decades, their statements are not always compatible with one another. To ensure this, we will consider only deterministic standardised signature schemes included in PKCS, ISO, and ANSI standards, as well as the non-standardised Full-Domain Hash, to provide a complete picture.",
      ], 
    },
    {
      paperTitle: "Taming the many EdDSAs",
      target: "taming-edsas",
      paperAuthors: "Konstantinos Chalkias, François Garillot and Valeria Nikolaenko",
      abstract: [
        "This paper analyses security of concrete instantiations of EdDSA by identifying exploitable inconsistencies between standardization recommendations and Ed25519 implementations. We mainly focus on current ambiguity regarding signature verification equations, binding and malleability guarantees, and incompatibilities between randomized batch and single verification. We give a formulation of Ed25519 signature scheme that achieves the highest level of security, explaining how each step of the algorithm links with the formal security properties. We develop op-timizations to allow for more efficient secure implementations. Finally, we designed a set of edge-case test-vectors and run them by some of the most popular Ed25519 libraries. The results allowed us to understand the securitylevel of those implementations and showed that most libraries do not comply with the latest standardization recommendations. The methodology allows to test compatibility of different Ed25519 implementations which is of practical importance for consensus-driven applications.",
      ],
    },
    {
      paperTitle: "The Vacuity of the Open Source Security Testing Methodology Manual",
      target: "open-testing",
      paperAuthors: "Martin Albrecht and Rikke Jensen",
      abstract: [
        "The Open Source Security Testing Methodology Manual (OSSTMM) provides a 'scientific methodology for the accurate characterization of operational security' (Herzog, 2010). It is extensively referenced in writings aimed at security testing professionals such as textbooks, standards and academic papers. In this work we offer a fundamental critique of OSSTMM and argue that it fails to deliver on its promise of actual security. Our contribution is threefold and builds on a textual critique of this methodology. First, OSSTMM's central principle is that security can be understood as a quantity of which an entity has more or less. We show why this is wrong and how OSSTMM's unified security score, the rav, is an empty abstraction. Second, OSSTMM disregards risk by replacing it with a trust metric which confuses multiple definitions of trust and, as a result, produces a meaningless score. Finally, OSSTMM has been hailed for its attention to human security. Yet it understands all human agency as a security threat that needs to be constantly monitored and controlled. Thus, we argue that OSSTMM is neither fit for purpose nor can it be salvaged, and it should be abandoned by security professionals.",
      ],
    },
    {
      paperTitle: "Vision: A Critique of Immunity Passports and W3C Decentralized Identifiers",
      target: "vision-passports",
      paperAuthors: "Harry Halpin",
      abstract: [
        "Due to the widespread COVID-19 pandemic, there has been a push for 'immunity passports' and even technical proposals. Although the debate about the medical and ethical problems of immunity passports has been widespread, there has been less inspection of the technical foundations of immunity passport schemes. These schemes are envisaged to be used for sharing COVID-19 test and vaccination results in general. The most prominent immunity passport schemes have involved a stack of little-known standards, such as Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs) from the World Wide Web Consortium (W3C). Our analysis shows that this group of technical identity standards are based on under-specified and often non-standardized documents that have substantial security and privacy issues, due in part to the questionable use of blockchain technology. One concrete proposal for immunity passports is even susceptible to dictionary attacks. The use of 'cryptography theater' in efforts like immunity passports, where cryptography is used to allay the privacy concerns of users, should be discouraged in standardization. Deployment of these W3C standards for 'self-sovereign identity' in use-cases like immunity passports could just as well lead to a dangerous form of identity totalitarianism.",
      ],
    },
  ];
}



function getSubmissionGuidelines() {
  return [
    "Submission Guidelines Papers offering research contributions to the area of security standardisation are solicited for submission to the SSR 2020 conference. SSR will also accept <span class='bold'>Systematisation of Knowledge (SoK)</span> papers relating to security standardisation, which integrate experience and previous research, drawing new comprehensive conclusions. SoK papers should evaluate, systematise, and contextualise existing knowledge. They should provide a new viewpoint, offer a comprehensive taxonomy, or cast doubt on long-held beliefs, based on compelling evidence. We also welcome SoK papers that document existing standardisation practices and analyse their weaknesses and strengths. We also encourage submission of <span class='bold'>Vision papers</span> relating to security standardisation. The vision track is intended to report on work in progress or concrete ideas for work that has yet to begin. The focus in the vision track is to spark discussion with the goal to provide the authors helpful feedback, pointers to potentially related investigations, and new ideas to explore. Suitable submissions to the vision track include traditional work-in-progress pieces such as preliminary results of pre-studies, but also research proposals and position papers outlining future research.",
    "Submissions should be made using EasyChair at: <a href='https://easychair.org/my/conference?conf=ssr2020' class='nested-link' target='_blank' rel='noopener noreferrer'>https://easychair.org/my/conference?conf=ssr2020</a>",
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
    "Stephan Krenn, Austrian Institute of Technology",
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
    "Joanne Woodage, Microsoft Research",
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

function add(val1, val2) {
  return val1 + val2;
}

function program() {
  return [
    {
      date: "30 November 2020",
      welcome: {
        time: "15:30 - 15:40",
        desc: "Welcome and Housekeeping",
      },
      sessions: [
        [
          {
            time: "15:40 - 16:00",
            desc: "On the Memory Fault Resilience of TLS 1.3",
            speakers: "Lukas Brandstetter, Marc Fischlin, Robin Leander Schröder and Michael Yonli",
          },
          {
            time: "16:00 - 16:20",
            desc: "On Internal Re-Keying",
            speakers: "Liliya Akhmetzyanova, Evgeny Alekseev, Stanislav Smyshlyaev and Igor Oshkin",
          },
          {
            time: "16:20 - 16:40",
            desc: "A Systematic Appraisal of Side Channel Evaluation Strategies",
            speakers: "Melissa Azouaoui, Davide Bellizia, Ileana Buhan, Nicolas Debande, Sebastien Duval, Christophe Giraud, Eliane Jaulmes, Francois Koeune, Elisabeth Oswald, Francois-Xavier Standaert and Carolyn Whitnall",
          },
        ],
        [
          {
            time: "17:00 - 17:40",
            desc: "Invited Talk",
            speakers: "Nick Sullivan",
          },
        ],
        [
          {
            time: "17:50 - 18:10",
            desc: "Taming the many EdDSAs",
            speakers: "Konstantinos Chalkias, François Garillot and Valeria Nikolaenko",
          },
          {
            time: "18:10 - 18:30",
            desc: "SoK: Comparison of the Security of Real World RSA Hash-and-Sign Signatures",
            speakers: "Saqib A. Kakvi",
          },
          {
            time: "18:30 - 18:35",
            desc: "Close of Day",
          },
        ],
      ],
    },
    {
      date: "1 December 2020",
      welcome: {
        time: "15:30 - 15:40",
        desc: "Welcome and Housekeeping",
      },
      sessions: [
        [
          {
            time: "15:40 - 16:00",
            desc: "The Vacuity of the Open Source Security Testing Methodology Manual",
            speakers: "Martin Albrecht and Rikke Jensen",
          },
          {
            time: "16:00 - 16:20",
            desc: "Vision: A Critique of Immunity Passports and W3C Decentralized Identifiers",
            speakers: "Harry Halpin",
          },
        ],
        [
          {
            time: "16:30 - 17:10",
            desc: "Invited Talk",
            speakers: "Liqun Chen",
          },
          {
            time: "17:10 - 17:20",
            desc: "Close of Day",
          },
        ],
      ],
    },
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
  getInvitedSpeakers,
  getAcceptedPapers,
  getHeaderLinks,
  getLandingStrings,
  getOrganizingCommittee,
  getProgramCommittee,
  getString,
  getSubmissionGuidelines,
  getTopics,
  showSubNav,
  program,
  add,
};
