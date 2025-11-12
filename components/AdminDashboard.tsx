
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_ADMIN_STATS, MOCK_APPOINTMENT_DATA } from '../constants';
import { useTranslation } from '../context/TranslationContext';

const AdminDashboard: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="space-y-8">
            <div className="text-left">
                <h2 className="text-3xl font-bold text-slate-900">{t('adminDashboardTitle')}</h2>
                <p className="text-slate-600 mt-1">{t('adminDashboardDescription')}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                {MOCK_ADMIN_STATS.map(stat => (
                    <div key={stat.label} className="bg-white p-4 rounded-xl shadow-md">
                        <p className="text-sm text-slate-500">{stat.label}</p>
                        <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                        <p className={`text-sm font-semibold ${stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
                            {stat.change}
                        </p>
                    </div>
                ))}
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-slate-800 mb-4">{t('weeklyConsultations')}</h3>
                <div style={{ width: '100%', height: 300 }}>
                     <ResponsiveContainer>
                        <BarChart
                            data={MOCK_APPOINTMENT_DATA}
                            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <XAxis dataKey="name" tick={{ fill: '#475569', fontSize: 12 }}/>
                            <YAxis tick={{ fill: '#475569', fontSize: 12 }} />
                            <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.5rem'}}/>
                            <Bar dataKey="appointments" fill="#0d9488" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
