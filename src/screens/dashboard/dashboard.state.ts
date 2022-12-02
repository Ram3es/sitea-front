import { useCallback, useState, useEffect } from 'react';
import { trackPromise } from 'react-promise-tracker';

import { getResultsByUser } from '@services/user.service';
import { PROMISES_AREA } from '@constants/promises-area';

export const useDashboardState = (userId: string) => {
  const [userWithResult, setUserWithResult] = useState<IUserWithResults | null>(
    null
  );

  const getUserWithResults = useCallback(async () => {
    try {
      const { data } = await trackPromise(
        getResultsByUser(userId),
        PROMISES_AREA.getUserWithReasults
      );

      setUserWithResult(data);
    } catch (error) {}
  }, [userId]);

  useEffect(() => {
    getUserWithResults();
  }, [userId]);
  return { userWithResult };
};
