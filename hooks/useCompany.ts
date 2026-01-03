'use client';

import { useSearchParams } from 'next/navigation';
import { getCompanyConfig, CompanyConfig } from '@/config/companies';

export function useCompany(): CompanyConfig {
  const searchParams = useSearchParams();
  const companyParam = searchParams.get('company');
  
  return getCompanyConfig(companyParam);
}

