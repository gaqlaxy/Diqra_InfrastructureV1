import React, { useState } from 'react';
import {
    Calendar,
    Clock,
    CheckCircle2,
    XCircle,
    AlertCircle,
    ArrowRight,
    Filter,
    Check,
    X,
    History,
    Plane
} from 'lucide-react';

const AttendanceLeave: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'attendance' | 'leave'>('attendance');

    const attendanceRecord = [
        { id: 'DI-001', name: 'Ar. Jafar', time: '09:12 AM', status: 'On-Time', location: 'Office' },
        { id: 'DI-002', name: 'Er. Naveen', time: '09:45 AM', status: 'Late', location: 'Site B' },
        { id: 'DI-005', name: 'Sara Khan', time: '09:05 AM', status: 'On-Time', location: 'Office' },
        { id: 'DI-012', name: 'Priya Verma', time: '09:30 AM', status: 'On-Time', location: 'Office' },
        { id: 'DI-008', name: 'Rohan Sharma', time: '-', status: 'Absent', location: '-' },
    ];

    const leaveRequests = [
        { id: 'L-501', name: 'Rohan Sharma', type: 'Casual Leave', duration: '2 Days', dates: 'Feb 23 - Feb 24', reason: 'Personal work', status: 'Pending' },
        { id: 'L-502', name: 'Sara Khan', type: 'Sick Leave', duration: '1 Day', dates: 'Feb 15', reason: 'Fever', status: 'Approved' },
        { id: 'L-503', name: 'Er. Naveen', type: 'Vacation', duration: '5 Days', dates: 'Mar 10 - Mar 15', reason: 'Family trip', status: 'Pending' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-black text-charcoal tracking-tight uppercase">HR Logistics</h1>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Attendance & Leave Management</p>
                </div>

                <div className="flex bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                    <button
                        onClick={() => setActiveTab('attendance')}
                        className={`px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'attendance' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-charcoal'
                            }`}
                    >
                        Attendance
                    </button>
                    <button
                        onClick={() => setActiveTab('leave')}
                        className={`px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'leave' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-charcoal'
                            }`}
                    >
                        Leave Requests
                    </button>
                </div>
            </div>

            {activeTab === 'attendance' ? (
                <div className="space-y-6 animate-in fade-in duration-300">
                    {/* Attendance Overview Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <div className="p-3 bg-green-50 text-green-500 rounded-xl">
                                    <CheckCircle2 size={20} />
                                </div>
                                <span className="text-2xl font-black text-charcoal tracking-tight">21</span>
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Present Status</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <div className="p-3 bg-orange-50 text-orange-500 rounded-xl">
                                    <Clock size={20} />
                                </div>
                                <span className="text-2xl font-black text-charcoal tracking-tight">02</span>
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Late Arrivals</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <div className="p-3 bg-red-50 text-red-500 rounded-xl">
                                    <AlertCircle size={20} />
                                </div>
                                <span className="text-2xl font-black text-charcoal tracking-tight">01</span>
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Absent Staff</p>
                        </div>
                    </div>

                    {/* Attendance Table */}
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
                            <h3 className="text-[10px] font-black text-charcoal uppercase tracking-widest">Daily Attendance Logs - Feb 22, 2026</h3>
                            <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:text-primary transition-colors">
                                <History size={16} />
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-100 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                                        <th className="px-8 py-4">Employee</th>
                                        <th className="px-8 py-4">Punch In</th>
                                        <th className="px-8 py-4">Location</th>
                                        <th className="px-8 py-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {attendanceRecord.map((rec) => (
                                        <tr key={rec.id} className="border-b border-slate-50 last:border-0">
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[10px] font-black text-charcoal">
                                                        {rec.name.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                    <span className="text-[11px] font-bold text-charcoal uppercase">{rec.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5 font-mono text-[11px] text-slate-500">{rec.time}</td>
                                            <td className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-tight">{rec.location}</td>
                                            <td className="px-8 py-5">
                                                <span className={`text-[9px] font-black uppercase tracking-widest ${rec.status === 'On-Time' ? 'text-green-600' :
                                                        rec.status === 'Late' ? 'text-orange-500' : 'text-red-500'
                                                    }`}>
                                                    {rec.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="space-y-6 animate-in fade-in duration-300">
                    {/* Leave Requests List */}
                    <div className="grid grid-cols-1 gap-4">
                        {leaveRequests.map((req) => (
                            <div key={req.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:border-primary/20 transition-all">
                                <div className="flex items-start gap-5">
                                    <div className={`p-4 rounded-xl shrink-0 ${req.status === 'Approved' ? 'bg-green-50 text-green-500' : 'bg-blue-50 text-blue-500'}`}>
                                        <Plane size={24} />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="text-sm font-black text-charcoal uppercase tracking-tight">{req.name}</h3>
                                            <span className="px-2 py-0.5 bg-slate-100 text-[8px] font-black text-slate-400 uppercase rounded">{req.id}</span>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                            <span className="text-primary">{req.type}</span>
                                            <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                                            <span>{req.duration}</span>
                                            <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                                            <span>{req.dates}</span>
                                        </div>
                                        <p className="mt-3 text-[11px] text-slate-500 italic">" {req.reason} "</p>
                                    </div>
                                </div>

                                <div className="w-full md:w-auto flex flex-row md:flex-col justify-end gap-3 shrink-0">
                                    {req.status === 'Pending' ? (
                                        <>
                                            <button className="flex-1 md:w-32 py-2.5 bg-green-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-green-600 transition-all shadow-lg shadow-green-500/10 flex items-center justify-center gap-2">
                                                <Check size={14} /> Approve
                                            </button>
                                            <button className="flex-1 md:w-32 py-2.5 border border-red-100 text-red-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-50 transition-all flex items-center justify-center gap-2">
                                                <X size={14} /> Decline
                                            </button>
                                        </>
                                    ) : (
                                        <div className="flex items-center gap-2 text-green-600 bg-green-50 px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest border border-green-100">
                                            <Check size={16} /> Approved
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-charcoal p-10 rounded-3xl text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:scale-110 transition-transform duration-700">
                            <Calendar size={120} strokeWidth={1} />
                        </div>
                        <div className="relative z-10 max-w-lg">
                            <h2 className="text-2xl font-black uppercase tracking-tight mb-4 text-primary">Leave Policy Overview</h2>
                            <p className="text-xs text-white/40 leading-relaxed uppercase tracking-widest mb-8">
                                Monthly quota resets on the 1st of every month. Directors reserve right for final approval on vacation requests over 3 days.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-3xl font-black mb-1">12</p>
                                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Annual Sick Leaves</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-black mb-1">18</p>
                                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Annual Paid Leaves</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AttendanceLeave;
