
import { ClinicVisit, InventoryItem, AdminStat, AppointmentData, UserRole, UserProfile } from './types';

export const MOCK_CLINIC_SCHEDULE: ClinicVisit[] = [
  { id: '1', village: 'Rampur', date: '2024-08-05', time: '10:00 AM - 2:00 PM', services: ['General Checkup', 'Vaccinations'] },
  { id: '2', village: 'Sitapur', date: '2024-08-06', time: '9:00 AM - 1:00 PM', services: ['Maternal Care', 'Child Health'] },
  { id: '3', village: 'Devgarh', date: '2024-08-08', time: '11:00 AM - 3:00 PM', services: ['Eye Checkup', 'General Checkup'] },
  { id: '4', village: 'Rampur', date: '2024-08-12', time: '10:00 AM - 2:00 PM', services: ['General Checkup', 'Vaccinations'] },
];

export const MOCK_INVENTORY: InventoryItem[] = [
  { id: '1', name: 'Paracetamol 500mg', sku: 'PARA500', qtyOnHand: 150, reorderThreshold: 50 },
  { id: '2', name: 'Amoxicillin 250mg', sku: 'AMOX250', qtyOnHand: 45, reorderThreshold: 50 },
  { id: '3', name: 'Band-Aids (Box)', sku: 'BANDAID', qtyOnHand: 80, reorderThreshold: 20 },
  { id: '4', name: 'ORS Packets', sku: 'ORS-PKT', qtyOnHand: 200, reorderThreshold: 100 },
  { id: '5', name: 'Antiseptic Liquid', sku: 'ANTISEP', qtyOnHand: 15, reorderThreshold: 10 },
];

export const MOCK_ADMIN_STATS: AdminStat[] = [
    { label: 'Tele-Consultations', value: '1,284', change: '+12%', changeType: 'increase' },
    { label: 'Medicine Orders', value: '3,450', change: '+8.5%', changeType: 'increase' },
    { label: 'Ambulance Requests', value: '97', change: '-2%', changeType: 'decrease' },
    { label: 'Active Patients', value: '5,600', change: '+150', changeType: 'increase' },
];

export const MOCK_APPOINTMENT_DATA: AppointmentData[] = [
    { name: 'Week 1', appointments: 180 },
    { name: 'Week 2', appointments: 250 },
    { name: 'Week 3', appointments: 220 },
    { name: 'Week 4', appointments: 310 },
    { name: 'Week 5', appointments: 290 },
    { name: 'Week 6', appointments: 350 },
];

export const MOCK_USER_PROFILES: Record<UserRole, UserProfile> = {
  [UserRole.Villager]: {
      name: 'Sunita Sharma',
      mobile: '+91 98765 43210',
      address: 'House No. 12, Rampur Village, District Palghar'
  },
  [UserRole.CHW]: {
      name: 'Geeta Devi',
      mobile: '+91 91234 56789',
      address: 'Community Health Center, Sitapur'
  },
  [UserRole.Doctor]: {
      name: 'Dr. Vikram Singh',
      mobile: '+91 87654 32109',
      address: 'Primary Health Centre, Devgarh'
  },
  [UserRole.Admin]: {
      name: 'Rajesh Kumar',
      mobile: '+91 76543 21098',
      address: 'District Health Office, Palghar'
  }
};

export const LANGUAGES = [
  { name: 'English', displayName: 'English' },
  { name: 'Hindi', displayName: 'Hindi (हिन्दी)' },
  { name: 'Bengali', displayName: 'Bengali (বাংলা)' },
  { name: 'Marathi', displayName: 'Marathi (मराठी)' },
  { name: 'Telugu', displayName: 'Telugu (తెలుగు)' },
  { name: 'Tamil', displayName: 'Tamil (தமிழ்)' },
  { name: 'Gujarati', displayName: 'Gujarati (ગુજરાતી)' },
  { name: 'Urdu', displayName: 'Urdu (اردو)' },
  { name: 'Kannada', displayName: 'Kannada (ಕನ್ನಡ)' },
  { name: 'Odia', displayName: 'Odia (ଓଡ଼ିଆ)' },
  { name: 'Malayalam', displayName: 'Malayalam (മലയാളം)' },
  { name: 'Punjabi', displayName: 'Punjabi (ਪੰਜਾਬੀ)' },
  { name: 'Assamese', displayName: 'Assamese (অসমীয়া)' },
];