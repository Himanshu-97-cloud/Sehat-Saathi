
import React, { useState, useEffect, useRef } from 'react';
import { startHealthChat } from '../services/geminiService';
import { Chat } from '@google/genai';
import { SparklesIcon } from './icons';
import { useTranslation } from '../context/TranslationContext';

interface Message {
    sender: 'user' | 'bot';
    text: string;
}

interface HealthBotProps {
    selectedLanguage: string;
}

const HealthBot: React.FC<HealthBotProps> = ({ selectedLanguage }) => {
    const chatRef = useRef<Chat | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const chatSession = startHealthChat(selectedLanguage);
        if (chatSession) {
            chatRef.current = chatSession;
            setMessages([
                { sender: 'bot', text: t('healthBotWelcome') }
            ]);
        } else {
             setMessages([
                { sender: 'bot', text: t('healthBotOffline') }
            ]);
        }
    }, [selectedLanguage, t]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (messageText: string) => {
        if (!messageText.trim() || isLoading || !chatRef.current) return;

        const newUserMessage: Message = { sender: 'user', text: messageText };
        setMessages(prev => [...prev, newUserMessage, { sender: 'bot', text: '' }]);
        setUserInput('');
        setIsLoading(true);

        try {
            const responseStream = await chatRef.current.sendMessageStream({ message: messageText });
            let botResponse = '';
            for await (const chunk of responseStream) {
                botResponse += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text = botResponse;
                    return newMessages;
                });
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1].text = t('connectionError');
                return newMessages;
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    const suggestedPrompts = [
        "What are symptoms of dehydration?",
        "How to make ORS at home?",
        "First aid for a small cut",
    ];

    return (
        <div className="flex flex-col h-full" style={{ height: 'calc(100vh - 180px)' }}>
            <div className="text-left mb-4">
                <h2 className="text-3xl font-bold text-slate-900">{t('healthBotTitle')}</h2>
                <p className="text-slate-600 mt-1">{t('healthBotDescription')}</p>
            </div>

            <div className="flex-grow overflow-y-auto pr-2 space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs md:max-w-md p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-slate-200 text-slate-800 rounded-bl-none'}`}>
                           {msg.sender === 'bot' && msg.text === '' && isLoading ? (
                                <div className="flex items-center space-x-2">
                                   <SparklesIcon className="w-5 h-5 animate-spin text-primary" />
                                   <p className="text-md text-slate-500">{t('typing')}</p>
                                </div>
                            ) : (
                               <p className="text-md" style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
                            )}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            
            <div className="mt-4 pt-2 border-t">
                <div className="flex flex-wrap gap-2 mb-2">
                    {messages.length <= 2 && suggestedPrompts.map(prompt => (
                        <button key={prompt} onClick={() => handleSendMessage(prompt)} disabled={isLoading} className="text-sm bg-primary-100 text-primary px-3 py-1 rounded-full hover:bg-primary-200 disabled:opacity-50">
                            {prompt}
                        </button>
                    ))}
                </div>
                <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(userInput); }} className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder={t('messagePlaceholder')}
                        className="w-full p-3 bg-primary-700 text-white placeholder-primary-200 rounded-full text-lg focus:ring-2 focus:ring-secondary focus:outline-none"
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading || !userInput.trim()} className="bg-primary text-white rounded-full p-3 disabled:bg-slate-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HealthBot;
