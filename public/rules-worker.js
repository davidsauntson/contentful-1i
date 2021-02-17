this.onmessage = function (e) {
  const { content, rules } = e.data;
  const violations = [];

  rules.forEach((rule) => {
    let match = rule.match.exec(content);
    while (match !== null) {
      match = rule.match.exec(content);
      violations.unshift({
        name: rule.name,
        type: rule.level,
        fix: rule.fix,
      });
    }
  });

  this.postMessage({ violations });
};
