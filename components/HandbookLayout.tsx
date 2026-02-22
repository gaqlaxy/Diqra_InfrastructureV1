import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Book, ShieldCheck, Users, FileText, ChevronRight, Target, GanttChartSquare, BarChart3 } from 'lucide-react';
import HandbookAuth from './HandbookAuth';

const HandbookLayout: React.FC = () => {
    const sections = [
        {
            name: 'HR Policy',
            path: '/handbook/hr-policy',
            icon: <Users size={18} />,
            id: 'hr-policy'
        },
        {
            name: 'Brand Strategy',
            path: '/handbook/brand-strategy',
            icon: <Target size={18} />,
            id: 'brand-strategy'
        },
        {
            name: 'Operational Governance',
            path: '/handbook/operational-governance',
            icon: <GanttChartSquare size={18} />,
            id: 'operational-governance'
        },
        {
            name: 'Financial Dashboard',
            path: '/handbook/dashboard',
            icon: <BarChart3 size={18} />,
            id: 'dashboard'
        },
        // Placeholders for future sections
        {
            name: 'Company Rules',
            path: '/handbook/rules',
            icon: <ShieldCheck size={18} />,
            disabled: true
        },
        {
            name: 'Company Policies',
            path: '/handbook/policies',
            icon: <FileText size={18} />,
            disabled: true
        }
    ];

    return (
        <HandbookAuth>
            <div className="min-h-screen bg-[#F3F3EF] pt-32 pb-20">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar */}
                        <aside className="w-full lg:w-1/4">
                            <div className="sticky top-40 bg-white p-8 border border-charcoal/5 shadow-sm">
                                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-charcoal/5">
                                    <div className="w-10 h-10 bg-primary flex items-center justify-center text-white">
                                        <Book size={20} />
                                    </div>
                                    <div>
                                        <h2 className="text-xs font-bold uppercase tracking-widest text-charcoal">Company</h2>
                                        <h1 className="text-lg font-display font-bold text-charcoal tracking-tight">Handbook</h1>
                                    </div>
                                </div>

                                <nav className="flex flex-col gap-2">
                                    {sections.map((section) => (
                                        section.disabled ? (
                                            <div
                                                key={section.name}
                                                className="flex items-center justify-between p-3 text-sm font-medium text-charcoal/30 cursor-not-allowed border border-transparent transition-all"
                                            >
                                                <div className="flex items-center gap-3">
                                                    {section.icon}
                                                    <span>{section.name}</span>
                                                </div>
                                                <span className="text-[10px] uppercase font-bold tracking-tighter bg-charcoal/5 px-2 py-0.5">Soon</span>
                                            </div>
                                        ) : (
                                            <NavLink
                                                key={section.path}
                                                to={section.path}
                                                className={({ isActive }) =>
                                                    `flex items-center justify-between p-3 text-sm font-medium transition-all border ${isActive
                                                        ? 'bg-charcoal text-white border-charcoal translate-x-1'
                                                        : 'text-charcoal border-transparent hover:bg-charcoal/5'
                                                    }`
                                                }
                                            >
                                                <div className="flex items-center gap-3">
                                                    {section.icon}
                                                    <span>{section.name}</span>
                                                </div>
                                                <ChevronRight size={14} className="opacity-50" />
                                            </NavLink>
                                        )
                                    ))}
                                </nav>

                                <div className="mt-12 p-6 bg-accent-gold/5 border border-accent-gold/10">
                                    <p className="text-[10px] font-bold text-accent-gold uppercase tracking-[0.2em] mb-2 leading-tight">Need assistance?</p>
                                    <p className="text-xs text-charcoal/60 leading-relaxed">
                                        Contact HR for any clarifications regarding handbook policies.
                                    </p>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="w-full lg:w-3/4">
                            <div className="bg-white p-8 md:p-16 border border-charcoal/5 shadow-sm min-h-[60vh]">
                                <Outlet />
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </HandbookAuth>
    );
};

export default HandbookLayout;
