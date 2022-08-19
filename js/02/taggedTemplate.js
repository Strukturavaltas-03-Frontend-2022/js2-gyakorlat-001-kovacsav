const taggedTemplate = (texts, ...values) => {
  //console.log(texts, values);
  const objectValues = Object.values(values);
  // let italicTagString = texts
  //   .map(
  //     (element) => `<i>${element}</i>
  // `
  //   )
  //   .join(``);

  // let boldTagString = values
  //   .map(
  //     (element) =>
  //       `<strong>${element}</strong>
  // `
  //   )
  //   .join(``);
  return `<em>${texts[0]}</em> <strong>${objectValues[0]}</strong> <strong>${objectValues[1]}</strong> <em>${texts[1]} ${texts[2]}</em> <strong>${objectValues[2]}</strong> <em>${texts[3]}</em> <strong>${objectValues[3]}</strong><em>.</em>`;
};

//taggedTemplate();

//console.log(taggedTemplate(["ds", "frgvrs", "fewfw"], [1, 2, 2, 2, 5]));

export default taggedTemplate;
