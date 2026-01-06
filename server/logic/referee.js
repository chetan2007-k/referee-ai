const options = require("../data/options.json");

function compareOptions(userConstraints) {
  const results = [];

  for (const key in options) {
    const option = options[key];
    let score = 0;
    let reasons = [];

    if (userConstraints.budget === "low") {
      score += option.budget;
      reasons.push(`Budget friendliness: ${option.budget}/5`);
    }

    if (userConstraints.skill === "beginner") {
      score += option.learning_curve;
      reasons.push(`Learning ease: ${option.learning_curve}/5`);
    }

    if (userConstraints.timeline === "urgent") {
      score += option.setup_speed;
      reasons.push(`Setup speed: ${option.setup_speed}/5`);
    }

    if (userConstraints.scale === "large") {
      score += option.scalability;
      reasons.push(`Scalability: ${option.scalability}/5`);
    }

    results.push({
      name: option.name,
      score,
      reasons
    });
  }

  return results;
}

module.exports = compareOptions;
