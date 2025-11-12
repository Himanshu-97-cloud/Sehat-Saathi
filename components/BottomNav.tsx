
import React from 'react';
import { View, UserRole } from '../types';
import { HomeIcon, CalendarIcon, StethoscopeIcon, PillIcon, LayoutDashboardIcon, LightbulbIcon, MessageCircleIcon } from './icons';
import { useTranslation } from '../context/TranslationContext';

interface BottomNavProps {
  activeView: View;
  setView: (view: View) => void;
  userRole: UserRole;
}

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => {
  const activeClasses = 'text-primary';
  const inactiveClasses = 'text-slate-500';
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center space-y-1 w-full p-2 rounded-lg transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses} hover:bg-primary-50`}
    >
      {icon}
      <span className={`text-xs font-medium ${isActive ? 'font-bold' : ''}`}>{label}</span>
    </button>
  );
};

const BottomNav: React.FC<BottomNavProps> = ({ activeView, setView, userRole }) => {
  const { t } = useTranslation();

  const getNavItems = () => {
    switch (userRole) {
      case UserRole.Villager:
        return [
          { view: View.Dashboard, icon: <HomeIcon className="w-6 h-6" />, label: t('home') },
          { view: View.ClinicSchedule, icon: <CalendarIcon className="w-6 h-6" />, label: t('schedule') },
          { view: View.BookAppointment, icon: <StethoscopeIcon className="w-6 h-6" />, label: t('consult') },
          { view: View.HealthBot, icon: <MessageCircleIcon className="w-6 h-6" />, label: t('chat') },
          { view: View.HealthTips, icon: <LightbulbIcon className="w-6 h-6" />, label: t('tips') },
        ];
      case UserRole.CHW:
        return [
          { view: View.InventoryManagement, icon: <PillIcon className="w-6 h-6" />, label: t('inventory') },
          { view: View.ClinicSchedule, icon: <CalendarIcon className="w-6 h-6" />, label: t('schedule') },
        ];
      case UserRole.Admin:
         return [
          { view: View.AdminDashboard, icon: <LayoutDashboardIcon className="w-6 h-6" />, label: t('dashboard') },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  if (navItems.length === 0) return null;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg">
      <nav className="max-w-lg mx-auto flex justify-around items-center h-20">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeView === item.view}
            onClick={() => setView(item.view)}
          />
        ))}
      </nav>
    </footer>
  );
};

export default BottomNav;
