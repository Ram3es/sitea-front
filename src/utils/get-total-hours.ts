export const getTotalHours = (param: IResult[]) => {
  const result = param?.reduce((acc, item) => {
    const { correct, away, hunched, incorrect } = item;
    acc += correct + away + hunched + incorrect;
    return acc;
  }, 0);

  return Math.round(result / 60);
};
