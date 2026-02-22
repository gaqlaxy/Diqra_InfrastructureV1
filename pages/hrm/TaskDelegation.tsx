import React, { useState } from 'react';
import {
    ClipboardList,
    Calendar,
    Clock,
    AlertCircle,
    Plus,
    Search,
    CheckCircle2,
    User,
    ArrowUpRight,
    Filter
} from 'lucide-react';

const TaskDelegation: React.FC = () => {
    const [tasks] = useState([
        { id: 'T-101', title: 'Site Layout Planning', assignee: 'Sara Khan', category: 'Design', deadline: '2026-02-20', priority: 'High', status: 'In Progress' },
        { id: 'T-102', title: 'BOQ Verification', assignee: 'Rohan Sharma', category: 'Execution', deadline: '2026-02-18', priority: 'Critical', status: 'Pending' },
        { id: 'T-103', title: 'Client Feedback Integration', assignee: 'Ar. Jafar', category: 'Design', deadline: '2026-02-24', priority: 'Medium', status: 'Completed' },
        { id: 'T-104', title: 'Material Procurement - Phase 2', assignee: 'Priya Verma', category: 'Accounts', deadline: '2026-02-28', priority: 'High', status: 'In Progress' },
    ]);

    const isOverdue = (deadline: string, status: string) => {
        if (status === 'Completed') return false;
        const today = new Date('2026-02-22'); // Hardcoded today's date based on metadata
        const deadDate = new Date(deadline);
        return deadDate < today;
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-black text-charcoal tracking-tight uppercase">Task Delegation</h1>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Assignment & Tracking System</p>
                </div>
                <button className="flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary transition-all shadow-xl">
                    <Plus size={16} className="text-primary" />
                    Assign New Task
                </button>
            </div>

            {/* Grid Layout for Task Management */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

                {/* Task Dashboard Column */}
                <div className="xl:col-span-3 space-y-6">
                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                            <input type="text" placeholder="Search tasks..." className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium focus:border-primary outline-none transition-all" />
                        </div>
                        <button className="p-2.5 border border-slate-100 rounded-xl text-slate-400 hover:text-primary transition-colors">
                            <Filter size={18} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {tasks.map((task) => (
                            <div key={task.id} className={`bg-white rounded-2xl border ${isOverdue(task.deadline, task.status) ? 'border-red-100 bg-red-50/10' : 'border-slate-100'} shadow-sm p-6 hover:shadow-md transition-all group relative overflow-hidden`}>
                                {isOverdue(task.deadline, task.status) && (
                                    <div className="absolute top-0 right-0 px-3 py-1 bg-red-500 text-white text-[8px] font-black uppercase tracking-widest rounded-bl-lg">
                                        Overdue
                                    </div>
                                )}

                                <div className="flex justify-between items-start mb-4">
                                    <div className="px-2.5 py-1 bg-slate-100 text-[9px] font-black text-slate-500 uppercase rounded">
                                        {task.category}
                                    </div>
                                    <div className={`flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider ${task.priority === 'Critical' ? 'text-red-500' :
                                            task.priority === 'High' ? 'text-orange-500' : 'text-blue-500'
                                        }`}>
                                        <AlertCircle size={10} />
                                        {task.priority} Priority
                                    </div>
                                </div>

                                <h3 className="text-sm font-black text-charcoal uppercase leading-tight mb-4 group-hover:text-primary transition-colors">
                                    {task.title}
                                </h3>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                                        <User size={12} className="text-slate-300" />
                                        <span>Assignee: <span className="text-charcoal uppercase">{task.assignee}</span></span>
                                    </div>
                                    <div className={`flex items-center gap-2 text-[10px] font-bold ${isOverdue(task.deadline, task.status) ? 'text-red-500' : 'text-slate-400'}`}>
                                        <Calendar size={12} />
                                        <span>Deadline: {task.deadline}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                                    <div className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest ${task.status === 'Completed' ? 'text-green-600' : 'text-primary'
                                        }`}>
                                        {task.status === 'Completed' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
                                        {task.status}
                                    </div>
                                    <button className="p-2 hover:bg-slate-50 rounded-lg text-slate-300 hover:text-charcoal transition-all">
                                        <ArrowUpRight size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Task Analytics & Controls */}
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                        <h2 className="text-xs font-black text-charcoal uppercase tracking-widest mb-6">Task Summary</h2>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase">Overall Progress</span>
                                    <span className="text-[10px] font-black text-primary">64%</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary rounded-full" style={{ width: '64%' }}></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="text-center p-3 bg-slate-50 rounded-xl">
                                    <p className="text-xl font-black text-charcoal">12</p>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase">Todo</p>
                                </div>
                                <div className="text-center p-3 bg-green-50 rounded-xl">
                                    <p className="text-xl font-black text-green-600">08</p>
                                    <p className="text-[9px] font-bold text-green-500 uppercase">Done</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertCircle className="text-red-500" size={20} />
                            <h2 className="text-xs font-black text-red-700 uppercase tracking-widest">Urgent Alerts</h2>
                        </div>
                        <p className="text-[10px] text-red-600 font-medium leading-relaxed mb-6">
                            You have <span className="font-black">2 overdue tasks</span> that require immediate director intervention.
                        </p>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded-xl border border-red-50 text-[10px] font-bold text-charcoal flex justify-between items-center group cursor-pointer hover:border-red-200">
                                DI-008 Rohan
                                <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded">2d late</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TaskDelegation;
