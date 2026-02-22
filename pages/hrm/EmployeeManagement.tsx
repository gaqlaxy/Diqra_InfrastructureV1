import React, { useState } from 'react';
import {
    Search,
    Filter,
    Plus,
    MoreVertical,
    Mail,
    Phone,
    MapPin,
    Building2,
    Calendar,
    ChevronDown
} from 'lucide-react';

const EmployeeManagement: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDept, setSelectedDept] = useState('All Departments');

    const employees = [
        { id: 'DI-001', name: 'Ar. Jafar', role: 'Director', dept: 'Executive', email: 'jafar@diqra.com', phone: '+91 98XXX-XXXX1', status: 'Active', joinDate: 'Jan 2022' },
        { id: 'DI-002', name: 'Er. Naveen', role: 'Sr. Engineer', dept: 'Execution', email: 'naveen@diqra.com', phone: '+91 98XXX-XXXX2', status: 'Active', joinDate: 'Feb 2022' },
        { id: 'DI-005', name: 'Sara Khan', role: 'Jr. Architect', dept: 'Design', email: 'sara@diqra.com', phone: '+91 98XXX-XXXX5', status: 'Active', joinDate: 'Nov 2023' },
        { id: 'DI-008', name: 'Rohan Sharma', role: 'Site Supervisor', dept: 'Execution', email: 'rohan@diqra.com', phone: '+91 98XXX-XXXX8', status: 'On Leave', joinDate: 'Mar 2024' },
        { id: 'DI-012', name: 'Priya Verma', role: 'Accountant', dept: 'Accounts', email: 'priya@diqra.com', phone: '+91 98XXX-XXXX2', status: 'Active', joinDate: 'Jan 2024' },
    ];

    const filteredEmployees = employees.filter(emp =>
        (emp.name.toLowerCase().includes(searchQuery.toLowerCase()) || emp.id.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (selectedDept === 'All Departments' || emp.dept === selectedDept)
    );

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-black text-charcoal tracking-tight uppercase">Employee Management</h1>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Staff Directory & Records</p>
                </div>
                <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-charcoal transition-all shadow-lg shadow-primary/20">
                    <Plus size={16} />
                    Add New Employee
                </button>
            </div>

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

                {/* Pagination Placeholder */}
                <div className="px-8 py-4 bg-slate-50/50 flex justify-between items-center border-t border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Showing {filteredEmployees.length} of {employees.length} Employees</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 border border-slate-200 rounded text-[10px] font-bold uppercase text-slate-400 disabled:opacity-50" disabled>Prev</button>
                        <button className="px-3 py-1.5 border border-slate-200 rounded text-[10px] font-bold uppercase text-charcoal">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeManagement;
