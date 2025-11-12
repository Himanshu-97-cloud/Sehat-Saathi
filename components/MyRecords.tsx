
import React from 'react';
import { FileTextIcon } from './icons';
import { useTranslation } from '../context/TranslationContext';

const MyRecords: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6 text-center">
      <div className="flex justify-center">
        <div className="bg-primary-100 p-4 rounded-full">
          <FileTextIcon className="w-12 h-12 text-primary" />
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900">{t('myRecordsTitle')}</h2>
        <p className="text-slate-600 mt-2">{t('myRecordsDescription')}</p>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-slate-700">{t('comingSoonTitle')}</h3>
        <p className="text-slate-500 mt-2">{t('comingSoonDescription')}</p>
      </div>
    </div>
  );
};

export default MyRecords;
