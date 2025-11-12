
import React, { createContext, useContext, useMemo } from 'react';
import { getTranslator } from '../lib/i18n';

type TranslateFunction = (key: string, options?: { [key: string]: string | number }) => string;

interface TranslationContextType {
    language: string;
    t: TranslateFunction;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ language: string; children: React.ReactNode }> = ({ language, children }) => {
    const t = useMemo(() => getTranslator(language), [language]);
    
    return (
        <TranslationContext.Provider value={{ language, t }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = (): TranslationContextType => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
};
