export default function processContentfulRules(contentfulRules) {
  const rules = [];

  if (contentfulRules) {
    contentfulRules.forEach((contentfulRule) =>
      rules.push(contentfulRule.fields)
    );
  }
  return rules;
}
