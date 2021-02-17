this.onmessage = function (e) {
  const { content, rules } = e.data;
  const violations = [];

  rules.forEach((rule) => {
    const regexp = new RegExp(rule.match, "g");
    console.log(regexp);

    let match = regexp.exec(content);
    while (match !== null) {
      match = regexp.exec(content);
      violations.unshift({
        name: rule.name,
        type: rule.level,
        fix: rule.fix,
      });
    }
  });

  this.postMessage({ violations });
};
