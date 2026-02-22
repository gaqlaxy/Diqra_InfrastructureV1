import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    ClipboardCheck,
    CalendarDays,
    Clock,
    Bell,
    LogOut,
    ChevronRight,
    ShieldAlert,
    Menu,
    X
} from 'lucide-react';
import HandbookAuth from './HandbookAuth';

const HRMLayout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', path: '/hrm', icon: <LayoutDashboard size={18} /> },
        { name: 'Employees', path: '/hrm/employees', icon: <Users size={18} /> },
        { name: 'Tasks', path: '/hrm/tasks', icon: <ClipboardCheck size={18} /> },
        { name: 'Leave Management', path: '/hrm/leave', icon: <CalendarDays size={18} /> },
        { name: 'Attendance', path: '/hrm/attendance', icon: <Clock size={18} /> },
    ];

    return (
        <HandbookAuth>
            <div className="min-h-screen bg-[#f8fafc] flex">
                {/* Sidebar - Desktop */}
                <aside className="hidden lg:flex flex-col w-64 bg-charcoal text-white border-r border-white/5">
                    <div className="p-8 border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg shadow-lg shadow-primary/20">
                                <ShieldAlert className="text-white" size={20} />
                            </div>
                            <div>
                                <h1 className="text-sm font-black uppercase tracking-tighter">DIQRA</h1>
                                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">HRM System</p>
                            </div>
                        </div>
                    </div>

                    <nav className="flex-1 p-4 space-y-1 mt-6">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === '/hrm'}
                                className={({ isActive }) =>
                                    `flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 group ${isActive
                                        ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]'
                                        : 'text-white/50 hover:bg-white/5 hover:text-white'
                                    }`
                                }
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`transition-transform duration-300 group-hover:scale-110`}>
                                        {item.icon}
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider">{item.name}</span>
                                </div>
                                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </NavLink>
                        ))}
                    </nav>

                    <div className="p-6 border-t border-white/5">
                        <div className="bg-white/5 rounded-2xl p-4">
                            <p className="text-[10px] font-bold text-white/40 uppercase mb-3">System Access</p>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold text-xs font-black">
                                    D
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold text-white">Director View</p>
                                    <p className="text-[9px] text-white/30 truncate">Administrator</p>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    sessionStorage.removeItem('handbook_auth');
                                    window.location.reload();
                                }}
                                className="w-full py-2 bg-red-500/10 text-red-500 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all flex items-center justify-center gap-2"
                            >
                                <LogOut size={12} />
                                Logout
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Mobile Header */}
                <div className="lg:hidden fixed top-0 w-full z-40 bg-charcoal text-white h-16 px-6 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <ShieldAlert className="text-primary" size={20} />
                        <h1 className="text-xs font-black uppercase tracking-tighter">DIQRA HRM</h1>
                    </div>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-white">
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Sidebar Overlay */}
                {isSidebarOpen && (
                    <div
                        className="lg:hidden fixed inset-0 z-30 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsSidebarOpen(false)}
                    ></div>
                )}

                {/* Mobile Sidebar */}
                <aside className={`lg:hidden fixed left-0 top-0 h-full w-72 z-50 bg-charcoal text-white transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-8 border-b border-white/5 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
                                <ShieldAlert className="text-white" size={20} />
                            </div>
                            <h1 className="text-sm font-black uppercase">DIQRA HRM</h1>
                        </div>
                        <button onClick={() => setIsSidebarOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>
                    <nav className="p-4 space-y-1 mt-6">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 p-4 rounded-xl ${isActive ? 'bg-primary text-white' : 'text-white/50'
                                    }`
                                }
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                {item.icon}
                                <span className="text-sm font-bold uppercase">{item.name}</span>
                            </NavLink>
                        ))}
                    </nav>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col h-screen overflow-hidden pt-16 lg:pt-0">
                    <header className="hidden lg:flex h-20 items-center justify-between px-10 bg-white border-b border-slate-200 shrink-0">
                        <h2 className="text-sm font-black text-charcoal uppercase tracking-widest pl-4 border-l-4 border-primary">
                            {navItems.find(n => n.path === location.pathname)?.name || 'Dashboard'}
                        </h2>
                        <div className="flex items-center gap-6">
                            <div className="relative">
                                <Bell size={20} className="text-slate-400 cursor-pointer hover:text-primary transition-colors" />
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[9px] font-black flex items-center justify-center rounded-full border-2 border-white">3</span>
                            </div>
                            <div className="h-8 w-px bg-slate-200"></div>
                            <div className="flex items-center gap-3">
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-charcoal leading-none">JAFAR</p>
                                    <p className="text-[9px] font-bold text-primary uppercase">Director</p>
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-charcoal shadow-sm">
                                    JA
                                </div>
                            </div>
                        </div>
                    </header>

                    <main className="flex-1 overflow-y-auto p-6 md:p-10 hide-scrollbar">
                        <Outlet />
                    </main>
                </div>
            </div>
        </HandbookAuth>
    );
};

export default HRMLayout;
