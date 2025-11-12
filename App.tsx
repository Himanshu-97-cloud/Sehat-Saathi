
import React, { useState, useCallback } from 'react';
import { UserRole, View } from './types';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import VillagerDashboard from './components/VillagerDashboard';
import ClinicSchedule from './components/ClinicSchedule';
import BookAppointment from './components/BookAppointment';
import AmbulanceRequest from './components/AmbulanceRequest';
import InventoryManagement from './components/InventoryManagement';
import AdminDashboard from './components/AdminDashboard';
import HealthTips from './components/HealthTips';
import HealthBot from './components/HealthBot';
import MyRecords from './components/MyRecords';
import OrderMedicine from './components/OrderMedicine';
import { TranslationProvider } from './context/TranslationContext';

const App: React.FC = () => {
  const [currentUserRole, setCurrentUserRole] = useState<UserRole>(UserRole.Villager);
  const [currentView, setCurrentView] = useState<View>(View.Dashboard);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');

  const renderView = useCallback(() => {
    switch (currentUserRole) {
      case UserRole.Villager:
        switch (currentView) {
          case View.ClinicSchedule:
            return <ClinicSchedule />;
          case View.BookAppointment:
            return <BookAppointment />;
          case View.AmbulanceRequest:
            return <AmbulanceRequest />;
          case View.HealthTips:
            return <HealthTips selectedLanguage={selectedLanguage} />;
          case View.HealthBot:
            return <HealthBot selectedLanguage={selectedLanguage} />;
          case View.MyRecords:
            return <MyRecords />;
          case View.OrderMedicine:
            return <OrderMedicine />;
          case View.Dashboard:
          default:
            return <VillagerDashboard setView={setCurrentView} />;
        }
      case UserRole.CHW:
        switch (currentView) {
          case View.InventoryManagement:
            return <InventoryManagement />;
          case View.ClinicSchedule:
             return <ClinicSchedule />;
          default:
             return <InventoryManagement />; // Default for CHW
        }
      case UserRole.Admin:
         return <AdminDashboard />;
      default:
        return <VillagerDashboard setView={setCurrentView} />;
    }
  }, [currentUserRole, currentView, selectedLanguage]);

  return (
    <TranslationProvider language={selectedLanguage}>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
        <Header 
          currentUserRole={currentUserRole}
          setCurrentUserRole={setCurrentUserRole}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
        
        <main className="flex-grow w-full max-w-lg mx-auto p-4 pb-24">
          {renderView()}
        </main>
        
        <BottomNav 
          activeView={currentView} 
          setView={setCurrentView}
          userRole={currentUserRole}
        />
      </div>
    </TranslationProvider>
  );
};

export default App;
