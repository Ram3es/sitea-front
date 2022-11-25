import { trackPromise } from 'react-promise-tracker';
import { useCallback, useState, useEffect } from 'react';
import { getResultsByUser } from '@services/user.service';

export const useDashboardState = (userId: string) => {
  const [userWithResult, setUserWithResult] = useState<IUserWithResults | null>(
    null
  );

  const getUserWithResults = useCallback(async () => {
    try {
      const { data } = await trackPromise(getResultsByUser(userId));

      setUserWithResult(data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    getUserWithResults();
  }, []);
  return { userWithResult };
};
