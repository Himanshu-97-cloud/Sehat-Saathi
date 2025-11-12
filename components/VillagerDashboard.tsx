
import React from 'react';
import { View } from '../types';
import { StethoscopeIcon, CalendarIcon, SirenIcon, PillIcon, LightbulbIcon, MessageCircleIcon, FileTextIcon } from './icons';
import { useTranslation } from '../context/TranslationContext';

interface VillagerDashboardProps {
  setView: (view: View) => void;
}

const ActionCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  className?: string;
  isEmergency?: boolean;
}> = ({ icon, title, description, onClick, className, isEmergency = false }) => {
  const baseClasses = `rounded-2xl p-6 flex flex-col items-center text-center shadow-lg transition-transform hover:scale-105 cursor-pointer`;
  const colorClasses = isEmergency
    ? 'bg-danger text-white'
    : 'bg-white text-slate-800';

  return (
    <div onClick={onClick} className={`${baseClasses} ${colorClasses} ${className}`}>
      <div className={`mb-4 p-4 rounded-full ${isEmergency ? 'bg-white text-danger' : 'bg-primary-100 text-primary'}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className={`text-sm ${isEmergency ? 'text-red-100' : 'text-slate-500'}`}>{description}</p>
    </div>
  );
};

const VillagerDashboard: React.FC<VillagerDashboardProps> = ({ setView }) => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900">{t('welcomeMessage')}</h2>
        <p className="text-slate-600 mt-1">{t('howCanWeHelp')}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <ActionCard
          icon={<StethoscopeIcon className="w-8 h-8" />}
          title={t('teleConsult')}
          description={t('talkToDoctor')}
          onClick={() => setView(View.BookAppointment)}
        />
        <ActionCard
          icon={<CalendarIcon className="w-8 h-8" />}
          title={t('clinicSchedule')}
          description={t('findHealthVans')}
          onClick={() => setView(View.ClinicSchedule)}
        />
         <ActionCard
          icon={<LightbulbIcon className="w-8 h-8" />}
          title={t('healthTips')}
          description={t('getDailyHealthAdvice')}
          onClick={() => setView(View.HealthTips)}
        />
        <ActionCard
          icon={<MessageCircleIcon className="w-8 h-8" />}
          title={t('healthBot')}
          description={t('askHealthQuestions')}
          onClick={() => setView(View.HealthBot)}
        />
        <ActionCard
          icon={<PillIcon className="w-8 h-8" />}
          title={t('orderMedicine')}
          description={t('requestRefill')}
          onClick={() => setView(View.OrderMedicine)}
        />
        <ActionCard
          icon={<FileTextIcon className="w-8 h-8" />}
          title={t('myRecords')}
          description={t('viewHealthHistory')}
          onClick={() => setView(View.MyRecords)}
        />
      </div>

      <ActionCard
        icon={<SirenIcon className="w-10 h-10" />}
        title={t('requestAmbulance')}
        description={t('forMedicalEmergencies')}
        onClick={() => setView(View.AmbulanceRequest)}
        isEmergency
      />
    </div>
  );
};

export default VillagerDashboard;
