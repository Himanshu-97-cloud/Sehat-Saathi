
import React, { useState } from 'react';
import { UserRole } from '../types';
import { UserIcon } from './icons';
import { MOCK_USER_PROFILES, LANGUAGES } from '../constants';
import { useTranslation } from '../context/TranslationContext';

interface HeaderProps {
  currentUserRole: UserRole;
  setCurrentUserRole: (role: UserRole) => void;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentUserRole, setCurrentUserRole, selectedLanguage, setSelectedLanguage }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const userProfile = MOCK_USER_PROFILES[currentUserRole];
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10 w-full">
      <div className="max-w-lg mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">
          Sehat Saathi
        </h1>
        <div className="flex items-center space-x-2">
          {/* Desktop view for selects */}
          <div className="hidden md:flex items-center space-x-2">
            <select
              value={currentUserRole}
              onChange={(e) => {
                setCurrentUserRole(e.target.value as UserRole);
                setIsProfileOpen(false); // Close profile when role changes
              }}
              className="text-sm p-2 border border-slate-300 rounded-md bg-slate-50 focus:ring-2 focus:ring-primary focus:outline-none"
            >
              {Object.values(UserRole).map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="text-sm p-2 border border-slate-300 rounded-md bg-slate-50 focus:ring-2 focus:ring-primary focus:outline-none"
              aria-label={t('selectLanguage')}
            >
              {LANGUAGES.map(lang => (
                <option key={lang.name} value={lang.name}>{lang.displayName}</option>
              ))}
            </select>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(prev => !prev)}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={t('openUserProfile')}
            >
              <UserIcon className="w-6 h-6 text-slate-600" />
            </button>

            {isProfileOpen && (
              <div
                className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-slate-200 p-5 z-20"
                role="dialog"
                aria-modal="true"
              >
                <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                        <UserIcon className="w-8 h-8 text-primary"/>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-slate-800">{userProfile.name}</h3>
                        <p className="text-sm text-slate-500">{currentUserRole}</p>
                    </div>
                </div>
                <div className="space-y-3 text-sm">
                    <p>
                        <span className="font-semibold text-slate-600">Mobile: </span>
                        <span className="text-slate-800">{userProfile.mobile}</span>
                    </p>
                    <p>
                        <span className="font-semibold text-slate-600">Address: </span>
                        <span className="text-slate-800">{userProfile.address}</span>
                    </p>
                </div>

                {/* Mobile view for selects */}
                <div className="md:hidden border-t border-slate-200 mt-4 pt-4 space-y-3">
                    <div>
                        <label className="block text-sm font-semibold text-slate-600 mb-1">{t('accountType')}</label>
                        <select
                            value={currentUserRole}
                            onChange={(e) => setCurrentUserRole(e.target.value as UserRole)}
                            className="w-full text-sm p-2 border border-slate-300 rounded-md bg-slate-50 focus:ring-2 focus:ring-primary focus:outline-none"
                        >
                            {Object.values(UserRole).map(role => (
                                <option key={role} value={role}>{role}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-600 mb-1">{t('language')}</label>
                        <select
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            className="w-full text-sm p-2 border border-slate-300 rounded-md bg-slate-50 focus:ring-2 focus:ring-primary focus:outline-none"
                            aria-label={t('selectLanguage')}
                        >
                            {LANGUAGES.map(lang => (
                                <option key={lang.name} value={lang.name}>{lang.displayName}</option>
                            ))}
                        </select>
                    </div>
                </div>

                 <button 
                    onClick={() => setIsProfileOpen(false)}
                    className="mt-4 w-full text-center text-sm text-slate-500 hover:text-primary"
                >
                    {t('close')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
