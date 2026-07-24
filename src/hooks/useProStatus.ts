import { useState, useEffect } from 'react';
import { ProStatus } from '../types';

const STORAGE_KEY = 'cdss_pro_status';

export function useProStatus() {
  const [status, setStatus] = useState<ProStatus>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.expiresAt) {
        parsed.expiresAt = new Date(parsed.expiresAt);
      }
      return parsed;
    }
    return { isPro: false };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(status));
  }, [status]);

  const activatePro = (durationDays: number = 30) => {
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + durationDays);
    setStatus({ isPro: true, expiresAt });
  };

  const deactivatePro = () => {
    setStatus({ isPro: false });
  };

  const isProActive = () => {
    if (!status.isPro) return false;
    if (!status.expiresAt) return true;
    return new Date() < status.expiresAt;
  };

  const daysUntilExpiry = (): number | null => {
    if (!status.expiresAt) return null;
    const today = new Date();
    const expiry = new Date(status.expiresAt);
    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return {
    isPro: isProActive(),
    expiresAt: status.expiresAt,
    activatePro,
    deactivatePro,
    daysUntilExpiry
  };
}
