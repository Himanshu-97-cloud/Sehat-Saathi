
import React, { useState } from 'react';
import { SirenIcon } from './icons';
import { useTranslation } from '../context/TranslationContext';

const AmbulanceRequest: React.FC = () => {
    const [isRequested, setIsRequested] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { t } = useTranslation();

    const handleRequest = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsRequested(true);
        }, 2000);
    };

    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            {!isRequested ? (
                <>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{t('ambulanceRequestTitle')}</h2>
                    <p className="text-slate-600 mb-8 max-w-sm">{t('ambulanceRequestDescription')}</p>
                    <button
                        onClick={handleRequest}
                        disabled={isLoading}
                        className="w-52 h-52 bg-danger rounded-full flex flex-col items-center justify-center text-white shadow-2xl animate-pulse transition-transform hover:scale-105 active:scale-95 disabled:animate-none disabled:bg-red-400"
                    >
                        {isLoading ? (
                           <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-white"></div>
                        ) : (
                            <>
                                <SirenIcon className="w-16 h-16 mb-2" />
                                <span className="text-xl font-bold tracking-wider">{t('requestAmbulanceButton').split(' ')[0]}</span>
                                <span className="text-xl font-bold tracking-wider">{t('requestAmbulanceButton').split(' ')[1]}</span>
                            </>
                        )}
                    </button>
                    <p className="text-sm text-slate-500 mt-8">{t('genuineEmergenciesOnly')}</p>
                </>
            ) : (
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h2 className="text-3xl font-bold text-primary">{t('ambulanceDispatchedTitle')}</h2>
                    <p className="text-slate-600 mt-2">{t('ambulanceDispatchedDescription')}</p>
                    <div className="mt-6 text-left space-y-2">
                        <p className="text-lg"><span className="font-bold">{t('eta')}:</span> 15 minutes</p>
                        <p className="text-lg"><span className="font-bold">{t('vehicleNo')}:</span> GJ-05-AB-1234</p>
                        <p className="text-lg"><span className="font-bold">{t('driver')}:</span> Ramesh Kumar</p>
                    </div>
                     <p className="text-sm text-slate-500 mt-6">{t('smsTrackingInfo')}</p>
                    <button 
                        onClick={() => setIsRequested(false)}
                        className="mt-4 w-full bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-lg hover:bg-slate-300 transition-colors"
                    >
                        {t('backToHome')}
                    </button>
                </div>
            )}
        </div>
    );
};

export default AmbulanceRequest;
