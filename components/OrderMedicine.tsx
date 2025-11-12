
import React, { useState } from 'react';
import { UploadCloudIcon, SparklesIcon } from './icons';
import { getGovtSchemes } from '../services/geminiService';
import { useTranslation } from '../context/TranslationContext';

const OrderMedicine: React.FC = () => {
    const { t, language } = useTranslation();
    const [fileName, setFileName] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [schemesInfo, setSchemesInfo] = useState('');
    const [isLoadingSchemes, setIsLoadingSchemes] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        } else {
            setFileName(null);
        }
    };

    const handlePlaceOrder = () => {
        setIsSubmitted(true);
    };
    
    const fetchGovtSchemes = async () => {
        setIsLoadingSchemes(true);
        setSchemesInfo('');
        try {
            const result = await getGovtSchemes(language);
            setSchemesInfo(result);
        } catch (error) {
            console.error("Error fetching govt schemes:", error);
            setSchemesInfo("Sorry, couldn't fetch information right now. Please try again later.");
        } finally {
            setIsLoadingSchemes(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-primary">{t('orderPlacedTitle')}</h2>
                <p className="text-slate-600 mt-2">{t('orderPlacedDescription')}</p>
                <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors"
                >
                    {t('orderAnother')}
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="text-left">
                <h2 className="text-3xl font-bold text-slate-900">{t('orderMedicineTitle')}</h2>
                <p className="text-slate-600 mt-1">{t('orderMedicineDescription')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
                <input
                    type="text"
                    placeholder={t('searchMedicinePlaceholder')}
                    className="w-full p-3 bg-slate-100 text-slate-800 placeholder-slate-400 rounded-lg text-lg focus:ring-2 focus:ring-primary focus:outline-none"
                />

                <div>
                    <label className="block text-lg font-bold text-slate-700 mb-2">
                        {t('uploadPrescription')}
                    </label>
                    <label className="flex flex-col items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-slate-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-primary">
                        <span className="flex items-center space-x-2 text-center">
                            <UploadCloudIcon className="w-8 h-8 text-slate-500" />
                            <span className="font-medium text-slate-600">
                                {fileName || t('dropFilesToAttach')}
                            </span>
                        </span>
                        <input id="prescription-upload" type="file" className="hidden" onChange={handleFileChange} accept="image/*,.pdf"/>
                    </label>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{t('specialOffers')}</h3>
                    <div className="space-y-3">
                        <div className="bg-primary-50 p-3 rounded-lg flex justify-between items-center">
                            <p className="font-semibold text-primary-800">Paracetamol 500mg</p>
                            <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded">{t('paracetamolOffer')}</span>
                        </div>
                        <div className="bg-primary-50 p-3 rounded-lg flex justify-between items-center">
                            <p className="font-semibold text-primary-800">ORS Sachets</p>
                            <span className="bg-secondary text-white text-xs font-bold px-2 py-1 rounded">{t('orsOffer')}</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-4">
                     <h3 className="text-xl font-bold text-slate-800 mb-3">{t('govtSchemes')}</h3>
                     <button
                        onClick={fetchGovtSchemes}
                        disabled={isLoadingSchemes}
                        className="w-full bg-slate-100 text-slate-700 font-bold py-3 px-4 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center disabled:opacity-50"
                     >
                        {isLoadingSchemes ? t('generatingInfo') : t('learnAboutSchemesShort')}
                     </button>
                     {(isLoadingSchemes || schemesInfo) && (
                        <div className="mt-4 bg-slate-50 p-4 rounded-lg">
                            {isLoadingSchemes && (
                                <div className="flex items-center text-slate-500">
                                    <SparklesIcon className="w-5 h-5 animate-spin text-primary mr-2" />
                                    <span>{t('generatingInfo')}</span>
                                </div>
                            )}
                            {schemesInfo && (
                                <div>
                                    <h4 className="font-bold text-primary mb-2">{t('govtSchemesAITitle')}</h4>
                                    <p className="text-slate-700 whitespace-pre-wrap">{schemesInfo}</p>
                                </div>
                            )}
                        </div>
                     )}
                </div>

                <button
                    onClick={handlePlaceOrder}
                    className="w-full bg-primary text-white font-bold py-4 px-4 text-xl rounded-lg hover:bg-primary-700 transition-colors"
                >
                    {t('placeOrder')}
                </button>
            </div>
        </div>
    );
};

export default OrderMedicine;
