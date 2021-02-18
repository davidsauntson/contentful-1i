this.onmessage = function (e) {
  const { content, rules } = e.data;
  const violations = [];
  const locale = "en-GB";

  rules.forEach((rule) => {
    const regexp = new RegExp(rule.regexMatch[locale], "gi");

    let match = regexp.exec(content);
    while (match !== null) {
      match = regexp.exec(content);
      violations.unshift({
        name: rule.name[locale],
        fix: rule.fixDescription[locale],
      });
    }
  });

  this.postMessage({ violations });
};
