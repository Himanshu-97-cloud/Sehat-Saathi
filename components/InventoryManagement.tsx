
import React, { useState } from 'react';
import { MOCK_INVENTORY } from '../constants';
import { InventoryItem } from '../types';
import { useTranslation } from '../context/TranslationContext';

const InventoryManagement: React.FC = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>(MOCK_INVENTORY);
  const { t } = useTranslation();

  const getStatusClasses = (item: InventoryItem): string => {
    const percentage = (item.qtyOnHand / (item.reorderThreshold * 2)) * 100;
    if (percentage < 25 || item.qtyOnHand < item.reorderThreshold) {
      return 'bg-red-100 text-red-800';
    } else if (percentage < 50) {
      return 'bg-amber-100 text-amber-800';
    }
    return 'bg-green-100 text-green-800';
  };

  const getStatusText = (item: InventoryItem): string => {
    if (item.qtyOnHand < item.reorderThreshold) {
        return "Reorder";
    }
    if ((item.qtyOnHand / (item.reorderThreshold * 2)) * 100 < 50) {
        return "Low Stock";
    }
    return "In Stock";
  }


  return (
    <div className="space-y-6">
      <div className="text-left">
        <h2 className="text-3xl font-bold text-slate-900">{t('inventoryTitle')}</h2>
        <p className="text-slate-600 mt-1">{t('inventoryDescription')}</p>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <ul className="divide-y divide-slate-200">
          {inventory.map((item) => (
            <li key={item.id} className="p-4 flex items-center justify-between">
              <div className="flex-1">
                <p className="text-lg font-bold text-slate-800">{item.name}</p>
                <p className="text-sm text-slate-500">In Stock: {item.qtyOnHand}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${getStatusClasses(item)}`}>
                  {getStatusText(item)}
                </span>
                <button className="bg-primary text-white w-8 h-8 rounded-full font-bold text-xl hover:bg-primary-700">-</button>
                <button className="bg-primary text-white w-8 h-8 rounded-full font-bold text-xl hover:bg-primary-700">+</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
       <button className="w-full bg-secondary text-white font-bold py-4 px-4 text-xl rounded-lg hover:bg-amber-500 transition-colors">
          {t('requestRestock')}
        </button>
    </div>
  );
};

export default InventoryManagement;
