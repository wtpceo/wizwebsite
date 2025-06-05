import { getTranslations } from 'next-intl/server';
import DeliveryServiceClient from '@/components/DeliveryServiceClient';

export default async function DeliveryServicePage() {
  const t = await getTranslations('DeliveryService');

  return <DeliveryServiceClient translations={t} />;
} 