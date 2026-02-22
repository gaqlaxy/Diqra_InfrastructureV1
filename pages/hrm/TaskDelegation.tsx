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
    Filter,
    Settings,
    X,
    Copy,
    Check
} from 'lucide-react';
import { tasks as initialTasks, Task } from '../../data/hrmData';

const TaskDelegation: React.FC = () => {
    const [tasksList, setTasksList] = useState<Task[]>(initialTasks);
    const [isEditMode, setIsEditMode] = useState(false);
    const [copied, setCopied] = useState(false);

    const isOverdue = (deadline: string, status: string) => {
        if (status === 'Completed') return false;
        const today = new Date('2026-02-22');
        const deadDate = new Date(deadline);
        return deadDate < today;
    };

    const handleUpdate = (index: number, field: keyof Task, value: string) => {
        const updated = [...tasksList];
        updated[index] = { ...updated[index], [field]: value } as Task;
        setTasksList(updated);
    };

    const copyData = () => {
        const code = `export const tasks = ${JSON.stringify(tasksList, null, 2)};`;
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-black text-charcoal tracking-tight uppercase">Task Delegation</h1>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Assignment & Tracking System</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => setIsEditMode(!isEditMode)}
                        className={`p-3 border rounded-xl transition-all ${isEditMode ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white text-charcoal border-slate-200 hover:border-primary/40'}`}
                    >
                        {isEditMode ? <X size={20} /> : <Settings size={20} />}
                    </button>
                    <button className="flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary transition-all shadow-xl">
                        <Plus size={16} className="text-primary" />
                        Assign New Task
                    </button>
                </div>
            </div>

            {isEditMode && (
                <div className="bg-charcoal p-8 rounded-2xl border border-primary/20 animate-in slide-in-from-top-4 duration-300">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xs font-bold text-primary uppercase tracking-widest">Update task Assignment</h3>
                        <button
                            onClick={copyData}
                            className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest bg-white/5 px-4 py-2 hover:bg-white/10 transition-all border border-white/10 rounded-lg"
                        >
                            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                            {copied ? 'Copied JSON' : 'Copy Updated Tasks'}
                        </button>
                    </div>

                    <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                        {tasksList.map((task, i) => (
                            <div key={task.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-white/5 border border-white/5 rounded-xl">
                                <div className="md:col-span-1">
                                    <label className="text-[9px] font-black text-primary uppercase mb-1 block">Title</label>
                                    <input
                                        type="text"
                                        value={task.title}
                                        onChange={(e) => handleUpdate(i, 'title', e.target.value)}
                                        className="w-full bg-charcoal border border-white/10 p-2 text-[11px] text-white rounded-lg focus:border-primary outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-[9px] font-black text-primary uppercase mb-1 block">Assignee</label>
                                    <input
                                        type="text"
                                        value={task.assignee}
                                        onChange={(e) => handleUpdate(i, 'assignee', e.target.value)}
                                        className="w-full bg-charcoal border border-white/10 p-2 text-[11px] text-white rounded-lg focus:border-primary outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-[9px] font-black text-primary uppercase mb-1 block">Deadline</label>
                                    <input
                                        type="text"
                                        value={task.deadline}
                                        onChange={(e) => handleUpdate(i, 'deadline', e.target.value)}
                                        className="w-full bg-charcoal border border-white/10 p-2 text-[11px] text-white rounded-lg focus:border-primary outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-[9px] font-black text-primary uppercase mb-1 block">Status</label>
                                    <select
                                        value={task.status}
                                        onChange={(e) => handleUpdate(i, 'status', e.target.value)}
                                        className="w-full bg-charcoal border border-white/10 p-2 text-[11px] text-white rounded-lg focus:border-primary outline-none transition-all"
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Completed">Completed</option>
                                    </select>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
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
                        {tasksList.map((task) => (
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDelegation;
