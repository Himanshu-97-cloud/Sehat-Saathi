
import React, { useState } from 'react';
import { getHealthTip } from '../services/geminiService';
import { SparklesIcon } from './icons';
import { useTranslation } from '../context/TranslationContext';

interface HealthTipsProps {
  selectedLanguage: string;
}

const HealthTips: React.FC<HealthTipsProps> = ({ selectedLanguage }) => {
  const [topic, setTopic] = useState<string | null>(null);
  const [tip, setTip] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

  const topics = ["Hygiene", "Nutrition", "Maternal Health", "Clean Water"];

  const fetchTip = async (selectedTopic: string) => {
    setTopic(selectedTopic);
    setIsLoading(true);
    setError(null);
    setTip('');
    try {
      const result = await getHealthTip(selectedTopic, selectedLanguage);
      setTip(result);
    } catch (err) {
      setError(t('fetchTipError'));
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-left">
        <h2 className="text-3xl font-bold text-slate-900">{t('healthTipsTitle')}</h2>
        <p className="text-slate-600 mt-1">{t('healthTipsDescription')}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {topics.map((t) => (
          <button
            key={t}
            onClick={() => fetchTip(t)}
            disabled={isLoading && topic === t}
            className="p-4 bg-white rounded-lg shadow-md font-bold text-primary text-lg transition hover:bg-primary-50 disabled:bg-slate-200 disabled:cursor-not-allowed"
          >
            {t}
          </button>
        ))}
      </div>

      {(isLoading || tip || error) && (
        <div className="mt-6 bg-white p-6 rounded-xl shadow-md min-h-[150px] flex items-center justify-center">
          {isLoading && (
             <div className="flex flex-col items-center text-slate-500">
                <SparklesIcon className="w-8 h-8 animate-spin text-primary mb-2" />
                <p>{t('generatingTip', { topic: topic || '' })}</p>
             </div>
          )}
          {error && <p className="text-red-600">{error}</p>}
          {tip && (
            <div className="text-center">
                <h3 className="text-xl font-bold text-primary mb-2">{t('tipTitle', { topic: topic || '' })}</h3>
                <p className="text-lg text-slate-700 leading-relaxed">{tip}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HealthTips;
