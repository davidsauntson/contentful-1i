export const rules = [
  {
    category: "punctuation",
    level: "negative",
    name: "&",
    fix: "Use 'and' instead",
    match: /&/g,
  },
  {
    category: "punctuation",
    name: "Cannot",
    level: "warning",
    fix: "Use 'can't' instead",
    match: /\bcan not\b|\bcannot\b/g,
  },
  {
    category: "punctuation",
    name: "Do not",
    level: "warning",
    fix: "Use 'don't' instead",
    match: /\bdo not\b/g,
  },
];
