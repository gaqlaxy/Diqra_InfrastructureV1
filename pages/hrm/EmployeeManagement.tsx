import React, { useState } from 'react';
import {
    Search,
    Filter,
    Plus,
    MoreVertical,
    Mail,
    Phone,
    Building2,
    ChevronDown,
    Settings,
    X,
    Copy,
    Check
} from 'lucide-react';
import { employees as initialEmployees, Employee } from '../../data/hrmData';

const EmployeeManagement: React.FC = () => {
    const [employeesList, setEmployeesList] = useState<Employee[]>(initialEmployees);
    const [isEditMode, setIsEditMode] = useState(false);
    const [copied, setCopied] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDept, setSelectedDept] = useState('All Departments');

    const filteredEmployees = employeesList.filter(emp =>
        (emp.name.toLowerCase().includes(searchQuery.toLowerCase()) || emp.id.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedDept === 'All Departments' || emp.dept === selectedDept)
    );

    const addEmployee = () => {
        const newId = `DI-${String(employeesList.length + 1).padStart(3, '0')}`;
        const newEmp: Employee = {
            id: newId,
            name: 'New Employee',
            role: 'Staff',
            dept: 'Design',
            email: 'email@diqra.com',
            phone: '+91 00XXX-XXXXX',
            status: 'Active',
            joinDate: 'Feb 2026'
        };
        setEmployeesList([...employeesList, newEmp]);
    };

    const deleteEmployee = (index: number) => {
        const updated = employeesList.filter((_, i) => i !== index);
        setEmployeesList(updated);
    };

    const handleUpdate = (index: number, field: keyof Employee, value: string) => {
        const updated = [...employeesList];
        updated[index] = { ...updated[index], [field]: value } as Employee;
        setEmployeesList(updated);
    };

    const copyData = () => {
        const code = `export const employees: Employee[] = ${JSON.stringify(employeesList, null, 2)};`;
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-black text-charcoal tracking-tight uppercase">Employee Management</h1>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Staff Directory & Records</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => setIsEditMode(!isEditMode)}
                        className={`p-3 border rounded-xl transition-all ${isEditMode ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white text-charcoal border-slate-200 hover:border-primary/40'}`}
                    >
                        {isEditMode ? <X size={20} /> : <Settings size={20} />}
                    </button>
                    <button
                        onClick={addEmployee}
                        className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-charcoal transition-all shadow-lg shadow-primary/20"
                    >
                        <Plus size={16} />
                        Add New Employee
                    </button>
                </div>
            </div>

            {isEditMode && (
                <div className="bg-charcoal p-8 rounded-2xl border border-primary/20 animate-in slide-in-from-top-4 duration-300">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xs font-bold text-primary uppercase tracking-widest">Update Staff Directory</h3>
                        <button
                            onClick={copyData}
                            className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest bg-white/5 px-4 py-2 hover:bg-white/10 transition-all border border-white/10 rounded-lg"
                        >
                            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                            {copied ? 'Copied JSON' : 'Copy Updated Data'}
                        </button>
                    </div>
                    <p className="text-[10px] text-white/40 mb-8 max-w-lg leading-relaxed uppercase tracking-widest font-bold">
                        Modify staff details below and click "Copy Updated Data" to save permanently in hrmData.ts.
                    </p>

                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
                        {employeesList.map((emp, i) => (
                            <div key={i} className="flex gap-4 items-center">
                                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-white/5 border border-white/5 rounded-xl">
                                    <div className="md:col-span-1">
                                        <label className="text-[9px] font-black text-primary uppercase mb-1 block">Full Name</label>
                                        <input
                                            type="text"
                                            value={emp.name}
                                            onChange={(e) => handleUpdate(i, 'name', e.target.value)}
                                            className="w-full bg-charcoal border border-white/10 p-2 text-[11px] text-white rounded-lg focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[9px] font-black text-primary uppercase mb-1 block">Role</label>
                                        <input
                                            type="text"
                                            value={emp.role}
                                            onChange={(e) => handleUpdate(i, 'role', e.target.value)}
                                            className="w-full bg-charcoal border border-white/10 p-2 text-[11px] text-white rounded-lg focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[9px] font-black text-primary uppercase mb-1 block">Email</label>
                                        <input
                                            type="email"
                                            value={emp.email}
                                            onChange={(e) => handleUpdate(i, 'email', e.target.value)}
                                            className="w-full bg-charcoal border border-white/10 p-2 text-[11px] text-white rounded-lg focus:border-primary outline-none transition-all"
                                        />
                                    </div>
                                    <div className="flex gap-2 items-end">
                                        <div className="flex-1">
                                            <label className="text-[9px] font-black text-primary uppercase mb-1 block">Status</label>
                                            <select
                                                value={emp.status}
                                                onChange={(e) => handleUpdate(i, 'status', e.target.value)}
                                                className="w-full bg-charcoal border border-white/10 p-2 text-[11px] text-white rounded-lg focus:border-primary outline-none transition-all"
                                            >
                                                <option value="Active">Active</option>
                                                <option value="On Leave">On Leave</option>
                                                <option value="Terminated">Terminated</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => deleteEmployee(i)}
                                    className="p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all border border-red-500/20"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Filters & Search */}
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name or ID..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-12 pr-4 text-xs font-medium focus:border-primary outline-none transition-all"
                    />
                </div>
                <div className="relative">
                    <select
                        value={selectedDept}
                        onChange={(e) => setSelectedDept(e.target.value)}
                        className="appearance-none bg-slate-50 border border-slate-100 rounded-xl py-3 pl-4 pr-12 text-xs font-bold uppercase tracking-widest focus:border-primary outline-none transition-all cursor-pointer"
                    >
                        <option>All Departments</option>
                        <option>Executive</option>
                        <option>Design</option>
                        <option>Execution</option>
                        <option>Accounts</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                </div>
            </div>

            {/* Employee List */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Employee</th>
                                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Role / Dept</th>
                                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Contact</th>
                                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                                <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {filteredEmployees.map((emp) => (
                                <tr key={emp.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-black text-xs">
                                                {emp.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className="text-xs font-black text-charcoal uppercase">{emp.name}</p>
                                                <p className="text-[10px] font-bold text-slate-400 mt-0.5">{emp.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div>
                                            <p className="text-xs font-bold text-charcoal">{emp.role}</p>
                                            <div className="flex items-center gap-1.5 mt-1">
                                                <Building2 size={10} className="text-slate-300" />
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{emp.dept}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 group/link cursor-pointer">
                                                <Mail size={12} className="text-slate-300 group-hover/link:text-primary transition-colors" />
                                                <span className="text-[10px] font-medium text-slate-500 group-hover/link:text-charcoal transition-colors">{emp.email}</span>
                                            </div>
                                            <div className="flex items-center gap-2 group/link cursor-pointer">
                                                <Phone size={12} className="text-slate-300 group-hover/link:text-primary transition-colors" />
                                                <span className="text-[10px] font-medium text-slate-500 group-hover/link:text-charcoal transition-colors">{emp.phone}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${emp.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                                            }`}>
                                            <div className={`w-1 h-1 rounded-full ${emp.status === 'Active' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                                            {emp.status}
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="p-2 text-slate-300 hover:text-charcoal hover:bg-slate-100 rounded-lg transition-all">
                                            <MoreVertical size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmployeeManagement;
