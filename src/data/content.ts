export interface TrayContent {
  name: string;
  realItem: string;
  trayLabel: string;
  subheader: string;
  body: string;
  shortLabel: string;
  image: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export const SITE_COPY = {
  tagline: "Standard issue for your corporate sentence.",

  hero: {
    headline: "Office Survival Kit",
    sub: "Standard issue for your corporate sentence.",
  },

  vision:
    "A gag gift product that delivers a premium unboxing experience and invites the recipient into a shared joke about office life. The product succeeds when the buyer feels like a hero for giving it, and the recipient feels included in something clever, funny, and worth sharing.",

  insideLid: {
    header: "YOU ARE NOW EQUIPPED TO HANDLE:",
    items: [
      "Being cc\u2019d on a 47-email thread you have no context for",
      "\u201CI\u2019ll let you go\u201D (followed by three more minutes)",
      "\u201CCan everyone see my screen?\u201D (No. For three minutes, no.)",
      "The anonymous survey that asks for your name",
      "Kevin",
    ],
    footer: "Good luck. You\u2019re still on your own for the printer.",
  },

  specs: {
    dimensions: '6.5" \u00D7 5.0" \u00D7 3.375"',
    material: "18\u201324pt matte black paperboard",
    closure: "Magnetic (hidden behind printed faux clasps)",
    handle: "Die-cut cardboard with printed duct tape texture",
    finish: "Matte with spot gloss accents",
    trays: "5 stacking trays with integrated lift tabs",
    interior: "Dark charcoal floors, orange accents, chalk outline silhouettes",
  },

  business: {
    pricePoint: "~$25",
    margin: "40\u201350%",
    phase1Units: "150\u2013250 units",
    phase1Revenue: "$3,750\u2013$6,250",
    phase2Units: "500+ cumulative",
    phase2Revenue: "$12,500+",
    buyerStatement: "I felt like a genius for finding this gift. They loved it.",
    recipientStatement: "This is hilarious \u2014 I need to show my coworkers.",
  },

  pitch: {
    short:
      "For the coworker who gets it. For the friend serving their time. For anyone who\u2019s earned their ink. This is their kit.",
    long: "Somewhere right now, someone is sitting in a meeting that could\u2019ve been an email. Someone is watching their lunch get \u201Cborrowed\u201D from the fridge. Someone is one \u201Cper my last email\u201D away from snapping. This kit is for them. Inside: protection, contraband, ink they\u2019ve earned, territory markers, and cleanup supplies for whoever loses the next meeting. Or maybe it\u2019s for you. Either way \u2014 you\u2019ve earned it.",
  },

  trays: {
    shank: {
      name: "Cubicle Shank",
      realItem: "Tactical Pen",
      trayLabel: "Tray 1",
      subheader: "It writes. Among other things.",
      body: "Some call it a pen. Survivors call it a Cubicle Shank.\nIdeal for intimidating your way to the last donut in the break room.\nSure, it writes \u2014 but its real value is the reminder:\nyou\u2019re not just taking notes. You\u2019re taking names.",
      shortLabel: "FOR OFFICE USE ONLY",
      image: "/images/trays/shank.png",
    },
    switch: {
      name: "Snitch Switch",
      realItem: "Paperclips",
      trayLabel: "Tray 2",
      subheader: "For when you need out.",
      body: "On paper, it\u2019s a paperclip.\nOn the inside? It\u2019s everything else.\nOpens drawers. Opens doors.\nOpens conversations you shouldn\u2019t be having.",
      shortLabel: "CONFISCATED MATERIALS",
      image: "/images/trays/switch.png",
    },
    ink: {
      name: "Lifer Ink",
      realItem: "Temporary Tattoos",
      trayLabel: "Tray 3",
      subheader: "Not given. Earned.",
      body: "Apply after each milestone.\nPeel. Press. Wear the evidence.\nThey\u2019ll know what you\u2019ve done.\nThey just won\u2019t know how.\nNeither will you, after enough Mondays.",
      shortLabel: "WEAR YOUR TIME",
      image: "/images/trays/ink.png",
    },
    tags: {
      name: "Turf Tags",
      realItem: "Stickers",
      trayLabel: "Tray 4",
      subheader: "Claim what\u2019s yours.",
      body: "Stick them on anything you\u2019re tired of sharing.\nThe mug. The chair.\nThe clearly labeled lunch that Kevin still \u201Caccidentally\u201D took.\nLet there be no confusion.",
      shortLabel: "TERRITORY MARKED",
      image: "/images/trays/tags.png",
    },
    rags: {
      name: "Cry Rags",
      realItem: "Mini Tissue Pack",
      trayLabel: "Tray 5",
      subheader: "One of you needed this.",
      body: "For post-meeting surrenders.\nFor \u201Cconversations\u201D that ended careers.\nFor the moment you hand one over and say nothing.\nSometimes you KO them.\nThen you offer them a tissue.",
      shortLabel: "HANDLE WITH CARE",
      image: "/images/trays/rags.png",
    },
  } as Record<string, TrayContent>,

  gallery: {
    images: [
      { src: "/images/gallery/01.png", alt: "Office Survival Kit \u2014 Hero" },
      { src: "/images/gallery/02.png", alt: "Office Survival Kit \u2014 Scale & Lifestyle" },
      { src: "/images/gallery/03.png", alt: "Office Survival Kit \u2014 Content Spread" },
      { src: "/images/gallery/04.png", alt: "Office Survival Kit \u2014 Hero Closeup" },
      { src: "/images/gallery/05.png", alt: "Office Survival Kit \u2014 Unboxing" },
      { src: "/images/gallery/06.png", alt: "Office Survival Kit \u2014 Gifting" },
    ] as GalleryImage[],
  },

  cta: {
    headline: "You\u2019ve earned this.",
    body: "Welcome to your sentence. Inside: everything you need to survive the cubicle, mark your territory, and make it to Friday. Standard issue. No parole.",
    button: "Get the Kit",
  },

  notice:
    "Contents may cause increased confidence, territorial behavior, and unexplained smirking in meetings. Not responsible for promotions, terminations, or incidents involving Kevin. For office use only.",
} as const;
