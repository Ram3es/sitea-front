import { COLORS } from '@styles/colors';
import { DAY_OPTIONS } from '@constants/format';
import { useState } from 'react';

export const useChartBarState = (results: IResult[] | undefined) => {
  const [periodDays] = useState(6);

  const renderResults = results
    ?.sort((a, b) => Date.parse(a.day) - Date.parse(b.day))
    .reverse()
    .slice(0, periodDays);

  const labels = renderResults?.map((result) =>
    new Date(result.day).toLocaleString('en-GB', DAY_OPTIONS)
  );

  const data = {
    labels,
    datasets: [
      {
        label: 'Correct (min.)',
        data: renderResults?.map((result) => result.correct),
        backgroundColor: `${COLORS.green}`,
        stack: 'Stack 0',
      },
      {
        label: 'Hunched (min.)',
        data: renderResults?.map((result) => result.hunched),
        backgroundColor: `${COLORS.violet}`,
        stack: 'Stack 1',
      },
      {
        label: 'Incorrect (min.)',
        data: renderResults?.map((result) => result.incorrect),
        backgroundColor: `${COLORS.red}`,
        stack: 'Stack 2',
      },
    ],
  };
  return { data };
};
