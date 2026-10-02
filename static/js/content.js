/**
 * Site content: edit this file to update the website.
 *
 * Text fields may contain inline HTML (links, <em>, ...).
 * Lists render in the order written, so keep them newest-first.
 */

/** Collaborators. Names listed here are linked automatically in author lists. */
const PEOPLE = {
  "Ali Garjani": "https://garjania.github.io/",
  "Roman Bachmann": "https://roman-bachmann.github.io/",
  "Andrei Atanov": "https://andrewatanov.github.io/",
  "Oğuzhan Fatih Kar": "https://ofkar.github.io/",
  "Amir Zamir": "https://vilab.epfl.ch/zamir/",
  "Tejal Kulkarni": "https://www.linkedin.com/in/tejal-kulkarni-087135260",
  "Charchit Sharma": "https://charchit7.github.io/",
  "Deepak Vijaykeerthy": "https://research.ibm.com/people/deepak-vijaykeerthy",
  "Vineeth N Balasubramanian": "https://people.iith.ac.in/vineethnb/",
};

/** News. `date` is "YYYY-MM" or "YYYY-MM-DD" (shown as "Mon YYYY"). */
const NEWS = [
  {
    date: "2026-04-13",
    text: 'Awarded the <a href="https://www.nsfgrfp.org/">NSF Graduate Research Fellowship</a>.',
  },
  {
    date: "2026-01-26",
    text: '<a href="https://fm-vision-evals.epfl.ch/"><em>How Well Does GPT-4o Understand Vision?</em></a> was accepted to <strong>ICLR 2026</strong>.',
  },
  {
    date: "2025-09",
    text: 'Received the <a href="https://www.amazon.science/news/amazon-launches-68-million-ai-phd-fellowship-program">Amazon AI PhD Fellowship</a>.',
  },
  {
    date: "2025-08",
    text: 'Started my Ph.D. at UIUC, advised by <a href="https://saurabhg.web.illinois.edu/">Prof. Saurabh Gupta</a>.',
  },
  {
    date: "2025-07",
    text: "Graduated from IIT Hyderabad with the President of India Gold Medal.",
  },
  {
    date: "2024-05",
    text: 'Joined <a href="https://vilab.epfl.ch/">VILAB</a> at EPFL as a Summer@EPFL fellow, working with Prof. Amir Zamir.',
  },
];

/**
 * Publications. Only `title` and `image` are required.
 * - The title links to the first entry in `links`.
 * - `video` (optional) plays over the image on hover.
 * - Author markers ("*", "†", "‡") are kept as written; collaborators in PEOPLE get linked.
 */
const PUBLICATIONS = [
  {
    title: "Coming Soon!",
    image: "static/images/paper-ragger.jpg",
    video: "static/images/paper-ragger.mp4",
  },
  {
    title:
      "How Well Does GPT-4o Understand Vision? Evaluating Multimodal Foundation Models on Standard Computer Vision Tasks",
    authors: [
      "Rahul Ramachandran",
      "Ali Garjani",
      "Roman Bachmann",
      "Andrei Atanov*",
      "Oğuzhan Fatih Kar*",
      "Amir Zamir*",
    ],
    venue: "ICLR 2026",
    image: "static/images/paper-fm-vision-evals.png",
    video: "static/images/paper-fm-vision-evals.mp4",
    links: {
      arXiv: "https://arxiv.org/abs/2507.01955",
      Website: "https://fm-vision-evals.epfl.ch/",
      Code: "https://github.com/EPFL-VILAB/fm-vision-evals",
    },
    tldr: "We benchmark top multimodal models like GPT-4o and Gemini on standard vision tasks using a prompt-based framework. While these models are strong generalists, especially on semantic tasks, they still trail behind specialized vision models, particularly in geometry.",
  },
  {
    title: "On Evaluation of Vision Datasets and Models using Human Competency Frameworks",
    authors: [
      "Rahul Ramachandran",
      "Tejal Kulkarni",
      "Charchit Sharma",
      "Deepak Vijaykeerthy",
      "Vineeth N Balasubramanian",
    ],
    venue: "DMLR @ ICML 2024",
    image: "static/images/paper-irt.png",
    video: "static/images/paper-irt.mp4",
    links: {
      arXiv: "https://arxiv.org/abs/2409.04041",
    },
    tldr: "We use Item Response Theory (IRT) to assess model calibration, select informative data subsets, and demonstrate the usefulness of various latent parameters for analyzing and comparing models and datasets in computer vision.",
  },
];

/** Education. `when` is free text. */
const EDUCATION = [
  {
    when: "2025 – now",
    title: "Ph.D. in Computer Science, University of Illinois Urbana-Champaign",
    detail: 'Advised by <a href="https://saurabhg.web.illinois.edu/">Prof. Saurabh Gupta</a>',
  },
  {
    when: "2021 – 2025",
    title: "B.Tech. in Computer Science, IIT Hyderabad",
  },
];
