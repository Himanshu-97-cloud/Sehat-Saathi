
export enum UserRole {
  Villager = 'Villager',
  CHW = 'CHW',
  Doctor = 'Doctor',
  Admin = 'Admin',
}

export enum View {
  Dashboard,
  ClinicSchedule,
  BookAppointment,
  AmbulanceRequest,
  InventoryManagement,
  AdminDashboard,
  HealthTips,
  HealthBot,
  MyRecords,
  OrderMedicine,
}

export interface UserProfile {
  name: string;
  mobile: string;
  address: string;
}

export interface ClinicVisit {
  id: string;
  village: string;
  date: string;
  time: string;
  services: string[];
}

export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  qtyOnHand: number;
  reorderThreshold: number;
}

export interface AdminStat {
  label: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
}

export interface AppointmentData {
  name: string;
  appointments: number;
}