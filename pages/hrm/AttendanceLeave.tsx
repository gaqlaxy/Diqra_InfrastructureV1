import React, { useState } from 'react';
import {
    Calendar,
    Clock,
    CheckCircle2,
    AlertCircle,
    History,
    Plane,
    Check,
    X,
    Settings,
    Copy,
    Plus,
    ArrowUpRight
} from 'lucide-react';
import {
    attendanceRecords as initialAttendance,
    leaveRequests as initialLeaves,
    AttendanceRecord,
    LeaveRequest
} from '../../data/hrmData';

const AttendanceLeave: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'attendance' | 'leave'>('attendance');
    const [attendance, setAttendance] = useState<AttendanceRecord[]>(initialAttendance);
    const [leaves, setLeaves] = useState<LeaveRequest[]>(initialLeaves);
    const [isEditMode, setIsEditMode] = useState(false);
    const [copied, setCopied] = useState(false);

    const addAttendance = () => {
        const newId = `ATT-${String(attendance.length + 1).padStart(3, '0')}`;
        const newRecord: AttendanceRecord = {
            id: newId,
            name: 'New Entry',
            time: '09:00 AM',
            location: 'Main Office',
            status: 'On-Time'
        };
        setAttendance([...attendance, newRecord]);
    };

    const addLeave = () => {
        const newId = `LR-${String(leaves.length + 1).padStart(3, '0')}`;
        const newLeave: LeaveRequest = {
            id: newId,
            name: 'Employee Name',
            type: 'Annual Leave',
            duration: '1 Day',
            dates: '2026-03-01',
            status: 'Pending',
            reason: 'Add reason here'
        };
        setLeaves([...leaves, newLeave]);
    };

    const deleteAttendance = (index: number) => {
        const updated = attendance.filter((_, i) => i !== index);
        setAttendance(updated);
    };

    const deleteLeave = (index: number) => {
        const updated = leaves.filter((_, i) => i !== index);
        setLeaves(updated);
    };

    const handleAttendanceUpdate = (index: number, field: keyof AttendanceRecord, value: string) => {
        const updated = [...attendance];
        updated[index] = { ...updated[index], [field]: value } as AttendanceRecord;
        setAttendance(updated);
    };

    const handleLeaveUpdate = (index: number, field: keyof LeaveRequest, value: string) => {
        const updated = [...leaves];
        updated[index] = { ...updated[index], [field]: value } as LeaveRequest;
        setLeaves(updated);
    };

    const copyData = () => {
        const data = activeTab === 'attendance' ? attendance : leaves;
        const varName = activeTab === 'attendance' ? 'attendanceRecords' : 'leaveRequests';
        const interfaceName = activeTab === 'attendance' ? 'AttendanceRecord[]' : 'LeaveRequest[]';
        const code = `export const ${varName}: ${interfaceName} = ${JSON.stringify(data, null, 2)};`;
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-black text-charcoal tracking-tight uppercase">HR Logistics</h1>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Attendance & Leave Management</p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsEditMode(!isEditMode)}
                        className={`p-3 border rounded-xl transition-all ${isEditMode ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white text-charcoal border-slate-200 hover:border-primary/40'}`}
                    >
                        {isEditMode ? <X size={20} /> : <Settings size={20} />}
                    </button>
                    <button
                        onClick={activeTab === 'attendance' ? addAttendance : addLeave}
                        className="flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary transition-all shadow-xl"
                    >
                        <Plus size={16} className="text-primary" />
                        {activeTab === 'attendance' ? 'Add Record' : 'Add Request'}
                    </button>
                    <div className="flex bg-slate-100 p-1.5 rounded-xl border border-slate-200 shadow-sm">
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
            </div>

            {isEditMode && (
                <div className="bg-charcoal p-8 rounded-2xl border border-primary/20 animate-in slide-in-from-top-4 duration-300">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xs font-bold text-primary uppercase tracking-widest">
                            Update {activeTab === 'attendance' ? 'Attendance Logs' : 'Leave Records'}
                        </h3>
                        <button
                            onClick={copyData}
                            className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest bg-white/5 px-4 py-2 hover:bg-white/10 transition-all border border-white/10 rounded-lg"
                        >
                            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                            {copied ? 'Copied' : `Copy Updated ${activeTab === 'attendance' ? 'Attendance' : 'Leaves'}`}
                        </button>
                    </div>

                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
                        {(activeTab === 'attendance' ? attendance : leaves).map((item, i) => (
                            <div key={i} className="flex gap-4 items-center">
                                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-white/5 border border-white/5 rounded-xl">
                                    <div className="md:col-span-1">
                                        <label className="text-[9px] font-black text-primary uppercase mb-1 block">Name</label>
                                        <input
                                            type="text"
                                            value={item.name}
                                            onChange={(e) => activeTab === 'attendance' ? handleAttendanceUpdate(i, 'name', e.target.value) : handleLeaveUpdate(i, 'name', e.target.value)}
                                            className="w-full bg-charcoal border border-white/10 p-2 text-[11px] text-white rounded-lg focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                    {activeTab === 'attendance' ? (
                                        <>
                                            <div>
                                                <label className="text-[9px] font-black text-primary uppercase mb-1 block">Time</label>
                                                <input
                                                    type="text"
                                                    value={(item as AttendanceRecord).time}
                                                    onChange={(e) => handleAttendanceUpdate(i, 'time', e.target.value)}
                                                    className="w-full bg-charcoal border border-white/10 p-2 text-[11px] text-white rounded-lg focus:border-primary outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-[9px] font-black text-primary uppercase mb-1 block">Location</label>
                                                <input
                                                    type="text"
                                                    value={(item as AttendanceRecord).location}
                                                    onChange={(e) => handleAttendanceUpdate(i, 'location', e.target.value)}
                                                    className="w-full bg-charcoal border border-white/10 p-2 text-[11px] text-white rounded-lg focus:border-primary outline-none transition-all"
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div>
                                                <label className="text-[9px] font-black text-primary uppercase mb-1 block">Dates</label>
                                                <input
                                                    type="text"
                                                    value={(item as LeaveRequest).dates}
                                                    onChange={(e) => handleLeaveUpdate(i, 'dates', e.target.value)}
                                                    className="w-full bg-charcoal border border-white/10 p-2 text-[11px] text-white rounded-lg focus:border-primary outline-none transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-[9px] font-black text-primary uppercase mb-1 block">Type</label>
                                                <input
                                                    type="text"
                                                    value={(item as LeaveRequest).type}
                                                    onChange={(e) => handleLeaveUpdate(i, 'type', e.target.value)}
                                                    className="w-full bg-charcoal border border-white/10 p-2 text-[11px] text-white rounded-lg focus:border-primary outline-none transition-all"
                                                />
                                            </div>
                                        </>
                                    )}
                                    <div>
                                        <label className="text-[9px] font-black text-primary uppercase mb-1 block">Status</label>
                                        <select
                                            value={item.status}
                                            onChange={(e) => activeTab === 'attendance' ? handleAttendanceUpdate(i, 'status', e.target.value) : handleLeaveUpdate(i, 'status', e.target.value)}
                                            className="w-full bg-charcoal border border-white/10 p-2 text-[11px] text-white rounded-lg focus:border-primary outline-none transition-all"
                                        >
                                            {activeTab === 'attendance' ? (
                                                <>
                                                    <option value="On-Time">On-Time</option>
                                                    <option value="Late">Late</option>
                                                    <option value="Absent">Absent</option>
                                                </>
                                            ) : (
                                                <>
                                                    <option value="Pending">Pending</option>
                                                    <option value="Approved">Approved</option>
                                                    <option value="Declined">Declined</option>
                                                </>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <button
                                    onClick={() => activeTab === 'attendance' ? deleteAttendance(i) : deleteLeave(i)}
                                    className="p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all border border-red-500/20"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'attendance' ? (
                <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <div className="p-3 bg-green-50 text-green-500 rounded-xl">
                                    <CheckCircle2 size={20} />
                                </div>
                                <span className="text-2xl font-black text-charcoal tracking-tight">
                                    {attendance.filter(a => a.status === 'On-Time').length}
                                </span>
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Present Status</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <div className="p-3 bg-orange-50 text-orange-500 rounded-xl">
                                    <Clock size={20} />
                                </div>
                                <span className="text-2xl font-black text-charcoal tracking-tight">
                                    {attendance.filter(a => a.status === 'Late').length}
                                </span>
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Late Arrivals</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <div className="p-3 bg-red-50 text-red-500 rounded-xl">
                                    <AlertCircle size={20} />
                                </div>
                                <span className="text-2xl font-black text-charcoal tracking-tight">
                                    {attendance.filter(a => a.status === 'Absent').length}
                                </span>
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Absent Staff</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-100 text-[9px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/30">
                                        <th className="px-8 py-5">Employee</th>
                                        <th className="px-8 py-5">Punch In</th>
                                        <th className="px-8 py-5">Location</th>
                                        <th className="px-8 py-5">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {attendance.map((rec) => (
                                        <tr key={rec.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
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
                    <div className="grid grid-cols-1 gap-4">
                        {leaves.map((req) => (
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
                                            <Check size={16} /> {req.status}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AttendanceLeave;
