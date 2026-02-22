export interface Employee {
    id: string;
    name: string;
    role: string;
    dept: string;
    email: string;
    phone: string;
    status: 'Active' | 'On Leave' | 'Terminated';
    joinDate: string;
}

export interface Task {
    id: string;
    title: string;
    assignee: string;
    category: string;
    deadline: string;
    priority: 'Critical' | 'High' | 'Medium' | 'Low';
    status: 'Pending' | 'In Progress' | 'Completed';
}

export interface AttendanceRecord {
    id: string;
    name: string;
    time: string;
    status: 'On-Time' | 'Late' | 'Absent';
    location: string;
}

export interface LeaveRequest {
    id: string;
    name: string;
    type: string;
    duration: string;
    dates: string;
    reason: string;
    status: 'Pending' | 'Approved' | 'Declined';
}

export const employees: Employee[] = [
    { id: 'DI-001', name: 'Ar. Jafar', role: 'Director', dept: 'Executive', email: 'jafar@diqra.com', phone: '+91 98XXX-XXXX1', status: 'Active', joinDate: 'Jan 2022' },
    { id: 'DI-002', name: 'Er. Naveen', role: 'Sr. Engineer', dept: 'Execution', email: 'naveen@diqra.com', phone: '+91 98XXX-XXXX2', status: 'Active', joinDate: 'Feb 2022' },
    { id: 'DI-005', name: 'Sara Khan', role: 'Jr. Architect', dept: 'Design', email: 'sara@diqra.com', phone: '+91 98XXX-XXXX5', status: 'Active', joinDate: 'Nov 2023' },
    { id: 'DI-008', name: 'Rohan Sharma', role: 'Site Supervisor', dept: 'Execution', email: 'rohan@diqra.com', phone: '+91 98XXX-XXXX8', status: 'On Leave', joinDate: 'Mar 2024' },
    { id: 'DI-012', name: 'Priya Verma', role: 'Accountant', dept: 'Accounts', email: 'priya@diqra.com', phone: '+91 98XXX-XXXX2', status: 'Active', joinDate: 'Jan 2024' },
];

export const tasks: Task[] = [
    { id: 'T-101', title: 'Site Layout Planning', assignee: 'Sara Khan', category: 'Design', deadline: '2026-02-20', priority: 'High', status: 'In Progress' },
    { id: 'T-102', title: 'BOQ Verification', assignee: 'Rohan Sharma', category: 'Execution', deadline: '2026-02-18', priority: 'Critical', status: 'Pending' },
    { id: 'T-103', title: 'Client Feedback Integration', assignee: 'Ar. Jafar', category: 'Design', deadline: '2026-02-24', priority: 'Medium', status: 'Completed' },
    { id: 'T-104', title: 'Material Procurement - Phase 2', assignee: 'Priya Verma', category: 'Accounts', deadline: '2026-02-28', priority: 'High', status: 'In Progress' },
];

export const attendanceRecords: AttendanceRecord[] = [
    { id: 'DI-001', name: 'Ar. Jafar', time: '09:12 AM', status: 'On-Time', location: 'Office' },
    { id: 'DI-002', name: 'Er. Naveen', time: '09:45 AM', status: 'Late', location: 'Site B' },
    { id: 'DI-005', name: 'Sara Khan', time: '09:05 AM', status: 'On-Time', location: 'Office' },
    { id: 'DI-012', name: 'Priya Verma', time: '09:30 AM', status: 'On-Time', location: 'Office' },
    { id: 'DI-008', name: 'Rohan Sharma', time: '-', status: 'Absent', location: '-' },
];

export const leaveRequests: LeaveRequest[] = [
    { id: 'L-501', name: 'Rohan Sharma', type: 'Casual Leave', duration: '2 Days', dates: 'Feb 23 - Feb 24', reason: 'Personal work', status: 'Pending' },
    { id: 'L-502', name: 'Sara Khan', type: 'Sick Leave', duration: '1 Day', dates: 'Feb 15', reason: 'Fever', status: 'Approved' },
    { id: 'L-503', name: 'Er. Naveen', type: 'Vacation', duration: '5 Days', dates: 'Mar 10 - Mar 15', reason: 'Family trip', status: 'Pending' },
];
