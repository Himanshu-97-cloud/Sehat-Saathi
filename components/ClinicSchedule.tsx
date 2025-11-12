
import React from 'react';
import { MOCK_CLINIC_SCHEDULE } from '../constants';
import { CalendarIcon } from './icons';
import { useTranslation } from '../context/TranslationContext';

const ClinicSchedule: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <div className="text-left">
        <h2 className="text-3xl font-bold text-slate-900">{t('clinicScheduleTitle')}</h2>
        <p className="text-slate-600 mt-1">{t('clinicScheduleDescription')}</p>
      </div>

      <div className="space-y-4">
        {MOCK_CLINIC_SCHEDULE.map((visit) => (
          <div key={visit.id} className="bg-white p-5 rounded-xl shadow-md border border-slate-200">
            <div className="flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <CalendarIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">{visit.village}</h3>
                <p className="text-md font-semibold text-primary">{visit.date}</p>
                <p className="text-sm text-slate-500">{visit.time}</p>
                 <div className="mt-3 flex flex-wrap gap-2">
                  {visit.services.map(service => (
                    <span key={service} className="bg-slate-100 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button className="mt-4 w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors">
              {t('setReminder')}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicSchedule;
