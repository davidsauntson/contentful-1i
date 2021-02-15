export const rules = [
  {
    category: "punctuation",
    name: "&",
    fix: "Use 'and' instead",
    match: /&/g,
  },
  {
    category: "punctuation",
    name: "Cannot",
    fix: "Use 'can't' instead",
    match: /\bcan not\b|\bcannot\b/g,
  },
  {
    category: "punctuation",
    name: "Do not",
    fix: "Use 'don't' instead",
    match: /\bdo not\b/g,
  },
];
