
import React, { useState } from 'react';
import { UploadCloudIcon } from './icons';
import { useTranslation } from '../context/TranslationContext';

const BookAppointment: React.FC = () => {
  const { t } = useTranslation();
  const [symptoms, setSymptoms] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    } else {
      setFileName(null);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptoms) {
        alert("Please describe your symptoms.");
        return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
        <div className="text-center bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-primary">{t('requestSentTitle')}</h2>
            <p className="text-slate-600 mt-2">{t('requestSentDescription')}</p>
            <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors"
            >
                {t('bookAnother')}
            </button>
        </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-left">
        <h2 className="text-3xl font-bold text-slate-900">{t('bookAppointmentTitle')}</h2>
        <p className="text-slate-600 mt-1">{t('bookAppointmentDescription')}</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-6">
        <div>
          <label htmlFor="symptoms" className="block text-lg font-bold text-slate-700 mb-2">
            {t('describeSymptomsLabel')}
          </label>
          <textarea
            id="symptoms"
            rows={5}
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            className="w-full p-3 bg-primary-700 text-white placeholder-primary-200 rounded-lg text-lg focus:ring-2 focus:ring-secondary focus:outline-none"
            placeholder={t('symptomsPlaceholder')}
          />
        </div>

        <div>
           <label htmlFor="photo-upload" className="block text-lg font-bold text-slate-700 mb-2">
            {t('uploadPhotoLabel')}
          </label>
          <label className="flex flex-col items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-slate-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-primary">
            <span className="flex items-center space-x-2 text-center">
              <UploadCloudIcon className="w-8 h-8 text-slate-500" />
              <span className="font-medium text-slate-600">
                {fileName ? fileName : t('dropFilesToAttach')}
              </span>
            </span>
            <input id="photo-upload" type="file" name="file_upload" className="hidden" onChange={handleFileChange} accept="image/*"/>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white font-bold py-4 px-4 text-xl rounded-lg hover:bg-primary-700 transition-colors disabled:bg-slate-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t('submittingButton') : t('submitButton')}
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
