import React from 'react';
import {
    Users,
    Clock,
    CalendarDays,
    AlertCircle,
    TrendingUp,
    CheckCircle2,
    ListTodo,
    ArrowUpRight
} from 'lucide-react';

const HRMDashboard: React.FC = () => {
    const stats = [
        { label: "Total Employees", value: "24", sub: "Active staff", icon: <Users size={20} className="text-blue-500" /> },
        { label: "Attendance Today", value: "21/24", sub: "87.5% presence", icon: <CheckCircle2 size={20} className="text-green-500" /> },
        { label: "Open Tasks", value: "18", sub: "6 high priority", icon: <ListTodo size={20} className="text-orange-500" /> },
        { label: "Leave Requests", value: "3", sub: "Pending approval", icon: <CalendarDays size={20} className="text-purple-500" /> },
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-black text-charcoal tracking-tight uppercase">HRM Dashboard</h1>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Operational Analytics Overview</p>
                </div>
                <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg font-black text-[10px] uppercase">Live Update</div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2">22 Feb 2026, 18:30</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-slate-50 rounded-xl">
                                {stat.icon}
                            </div>
                            <div className="text-green-500 bg-green-50 p-1 rounded">
                                <TrendingUp size={12} />
                            </div>
                        </div>
                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</h3>
                        <p className="text-2xl font-black text-charcoal mb-1">{stat.value}</p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase">{stat.sub}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-xs font-black text-charcoal uppercase tracking-widest flex items-center gap-2">
                            <Clock size={16} className="text-primary" />
                            Recent Activity
                        </h2>
                        <button className="text-[10px] font-bold text-primary uppercase hover:underline">View All</button>
                    </div>
                    <div className="space-y-6">
                        {[
                            { type: 'Task Assigned', user: 'Ar. Jafar', desc: 'Assigned "Client Presentation" to "Sara"', time: '2 hours ago' },
                            { type: 'Attendance', user: 'Er. Naveen', desc: 'Site Visit Check-in: Bangalore Site B', time: '3 hours ago' },
                            { type: 'Leave Approved', user: 'HR Dept', desc: 'Rohan - Casual Leave (2 days)', time: '5 hours ago' },
                            { type: 'Task Overdue', user: 'System', desc: 'Final BOQ Submission overdue for 2 days', time: 'Yesterday', alert: true },
                        ].map((activity, i) => (
                            <div key={i} className="flex gap-4 items-start pb-6 border-b border-slate-50 last:border-0 last:pb-0">
                                <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center ${activity.alert ? 'bg-red-50 text-red-500' : 'bg-slate-50 text-slate-400'}`}>
                                    {activity.alert ? <AlertCircle size={16} /> : <div className="w-1.5 h-1.5 rounded-full bg-current"></div>}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <p className="text-[11px] font-black text-charcoal uppercase">{activity.type}</p>
                                        <span className="text-[9px] font-bold text-slate-400 uppercase">{activity.time}</span>
                                    </div>
                                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                                        <span className="font-bold text-charcoal">{activity.user}</span> • {activity.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions & Notifications */}
                <div className="space-y-8">
                    <div className="bg-charcoal text-white rounded-2xl p-8 shadow-xl">
                        <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Quick Actions</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-primary transition-all group">
                                <Users size={20} className="mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-[9px] font-bold uppercase">Add Staff</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-primary transition-all group">
                                <ListTodo size={20} className="mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-[9px] font-bold uppercase">New Task</span>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                        <h2 className="text-xs font-black text-charcoal uppercase tracking-widest mb-6 flex items-center gap-2">
                            <AlertCircle size={16} className="text-red-500" />
                            Critical Alerts
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                                <p className="text-[10px] font-black text-red-700 uppercase mb-1">Overdue Project</p>
                                <p className="text-[10px] font-medium text-red-500">BOQ Submission delay - 48h</p>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                                <p className="text-[10px] font-black text-blue-700 uppercase mb-1">Leave Request</p>
                                <p className="text-[10px] font-medium text-blue-500">3 Pending approvals from Accounts</p>
                            </div>
                        </div>
                        <button className="w-full mt-6 py-3 bg-slate-50 text-[10px] font-black text-charcoal uppercase tracking-widest rounded-xl border border-slate-200 hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                            System Health Summary
                            <ArrowUpRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRMDashboard;
