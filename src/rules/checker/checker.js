import shortid from "shortid";
import { rules } from "../rules";

const checkString = (text) => {
  const violations = [];

  rules.forEach((rule) => {
    let match = rule.match.exec(text);
    while (match !== null) {
      match = rule.match.exec(text);
      violations.unshift({
        name: rule.name,
        type: rule.level,
        fix: rule.fix,
        id: shortid.generate(),
      });
    }
  });

  return violations;
};

export { checkString };
