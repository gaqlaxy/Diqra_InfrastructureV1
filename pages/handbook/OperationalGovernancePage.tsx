import React from 'react';
import {
    ShieldCheck,
    GanttChartSquare,
    BarChart3,
    Users2,
    Lightbulb,
    AlertTriangle,
    CalendarClock,
    Landmark,
    ChevronRight,
    CheckCircle2,
    Clock,
    Briefcase,
    TrendingUp,
    Search,
    FileText
} from 'lucide-react';

const OperationalGovernancePage: React.FC = () => {
    const sections = [
        {
            id: "governance",
            icon: <ShieldCheck className="text-primary" size={24} />,
            title: "Director Master Governance",
            content: (
                <div className="space-y-8">
                    <div className="bg-charcoal text-white p-6 border-l-4 border-accent-gold">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent-gold mb-2">Governance Philosophy</h4>
                        <p className="text-sm italic font-medium">"You are not running projects. You are running capital allocation + risk management + brand positioning systems."</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-charcoal/5 p-6 bg-white shadow-sm">
                            <h5 className="text-xs font-bold uppercase tracking-wider mb-4 border-b border-charcoal/5 pb-2">Strategic Authority (Joint)</h5>
                            <ul className="text-xs space-y-2 text-slate-gray">
                                <li>• Annual growth plan & New market entry</li>
                                <li>• CapEx above threshold</li>
                                <li>• Margin exception projects</li>
                                <li>• Director-level hiring & Debt decisions</li>
                            </ul>
                        </div>
                        <div className="border border-charcoal/5 p-6 bg-white shadow-sm">
                            <h5 className="text-xs font-bold uppercase tracking-wider mb-4 border-b border-charcoal/5 pb-2">Design Authority (Ar. Jafar)</h5>
                            <ul className="text-xs space-y-2 text-slate-gray">
                                <li>• Concept approval & Client presentations</li>
                                <li>• Design quality & Material aesthetics</li>
                                <li>• Luxury positioning strategy</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 p-6 rounded-sm">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                            <Landmark size={16} /> Financial Threshold Model
                        </h4>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-xs border-b border-primary/10 pb-2">
                                <span className="font-medium text-slate-gray">₹0 – ₹2L</span>
                                <span className="font-bold text-charcoal">Ops Approval</span>
                            </div>
                            <div className="flex justify-between items-center text-xs border-b border-primary/10 pb-2">
                                <span className="font-medium text-slate-gray">₹2L – ₹10L</span>
                                <span className="font-bold text-charcoal">Director Review (Documented)</span>
                            </div>
                            <div className="flex justify-between items-center text-xs">
                                <span className="font-medium text-slate-gray">₹10L+</span>
                                <span className="font-bold text-primary font-mono select-all">JOINT WRITTEN APPROVAL</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "lifecycle",
            icon: <GanttChartSquare className="text-primary" size={24} />,
            title: "Project Lifecycle Control",
            content: (
                <div className="space-y-6">
                    {[
                        { gate: "Gate 1", title: "Scope Freeze & Contract Lock", items: ["Signed Agreement", "Scope Freeze Doc", "Final BOQ (V-controlled)", "Margin Analysis"] },
                        { gate: "Gate 2", title: "Procurement Governance", items: ["3 Vendor Comparison", "Rate Analysis Sheet", "Payment Schedule", "Risk Flag Rule (Imported: 45d buffer)"] },
                        { gate: "Gate 3", title: "Execution Launch", items: ["WBS Breakdown", "Gantt Chart Baseline", "Labour Loading Chart", "Site Safety Induction"] },
                        { gate: "Gate 4", title: "Quality & Snag Audit", items: ["Quality Hierarchy (Pre/Mid/Final)", "Archived Hidden Services Photos", "Billing linked to clearance"] },
                        { gate: "Gate 5", title: "Financial Closure", items: ["Expense vs Budget Comparison", "Profit Margin Validation", "Retention follow-up schedule"] }
                    ].map((gate, i) => (
                        <div key={i} className="flex gap-4 group">
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-black border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors">
                                    {i + 1}
                                </div>
                                {i < 4 && <div className="w-px h-full bg-charcoal/5 mt-2"></div>}
                            </div>
                            <div className="flex-1 pb-8">
                                <h4 className="text-sm font-bold text-charcoal uppercase tracking-tighter mb-4 flex items-center justify-between">
                                    {gate.title}
                                    <span className="text-[10px] bg-charcoal/5 px-2 py-0.5 text-slate-gray">{gate.gate}</span>
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {gate.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-gray bg-background-light p-2 border border-charcoal/3">
                                            <CheckCircle2 size={12} className="text-primary/40" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
        },
        {
            id: "finance",
            icon: <BarChart3 className="text-primary" size={24} />,
            title: "Financial Control System",
            content: (
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 border border-charcoal/5 bg-white shadow-sm">
                            <h5 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3">Project Profitability</h5>
                            <p className="text-[10px] text-slate-gray leading-relaxed mb-4">Track Revenue vs Cost Variance.</p>
                            <div className="text-xs font-bold text-red-500 bg-red-50 p-2 border border-red-100 uppercase tracking-tighter text-center">
                                Red Flag: Variance &gt; 8%
                            </div>
                        </div>
                        <div className="p-4 border border-charcoal/5 bg-white shadow-sm">
                            <h5 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3">90-Day Cash Flow</h5>
                            <p className="text-[10px] text-slate-gray leading-relaxed mb-4">Maintain 2 months operating cost reserve.</p>
                            <div className="text-xs font-bold text-accent-gold bg-accent-gold/5 p-2 border border-accent-gold/20 uppercase tracking-tighter text-center">
                                Golden Rule: Reserve &ge; 2m Ops
                            </div>
                        </div>
                        <div className="p-4 border border-charcoal/5 bg-white shadow-sm">
                            <h5 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3">Cost Tracker</h5>
                            <p className="text-[10px] text-slate-gray leading-relaxed mb-4">Weekly update across all categories.</p>
                            <div className="flex justify-center gap-1">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-full h-8 bg-primary/10 border-t border-primary/20"></div>)}
                            </div>
                        </div>
                    </div>

                    <div className="bg-charcoal p-6 text-white text-[11px] leading-relaxed">
                        <h4 className="font-bold uppercase tracking-widest mb-4 text-accent-gold">Cashflow Shortfall Protocols</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/60">
                            <div className="border-l border-white/10 pl-4 py-2 hover:text-white transition-colors cursor-default">
                                1. STOP NEW HIRING
                            </div>
                            <div className="border-l border-white/10 pl-4 py-2 hover:text-white transition-colors cursor-default">
                                2. ACCELERATE RECEIVABLES
                            </div>
                            <div className="border-l border-white/10 pl-4 py-2 hover:text-white transition-colors cursor-default">
                                3. DELAY NON-CRITICAL CAPEX
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "scaling",
            icon: <Users2 className="text-primary" size={24} />,
            title: "Human Capital Strategy",
            content: (
                <div className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <h4 className="text-xs font-black uppercase tracking-widest mb-4 pb-2 border-b border-charcoal/10">Phase 1: Core (Now)</h4>
                            <ul className="grid grid-cols-2 gap-2">
                                {["Project Manager", "Accounts Controller", "Procurement Exec", "Site Engineer"].map(role => (
                                    <li key={role} className="p-3 bg-white border border-charcoal/5 text-xs font-bold text-center group hover:bg-primary hover:text-white transition-all shadow-sm">
                                        {role}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-xs font-black uppercase tracking-widest mb-4 pb-2 border-b border-charcoal/10">Phase 2: Scale</h4>
                            <ul className="grid grid-cols-2 gap-2">
                                {["Planning Engineer", "Quality Engineer", "HR/Admin", "Business Dev"].map(role => (
                                    <li key={role} className="p-3 bg-white border border-dashed border-charcoal/20 text-xs font-medium text-slate-gray text-center group hover:border-solid hover:border-primary transition-all">
                                        {role}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="p-6 border border-accent-gold/20 bg-accent-gold/5">
                        <h4 className="text-sm font-black text-charcoal uppercase mb-2">KPI-Driven Culture</h4>
                        <p className="text-xs text-slate-gray leading-relaxed mb-4 italic">"No employee survives without measurable KPI."</p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white p-3 border border-charcoal/5 text-center shadow-sm">
                                <span className="block text-xl font-black text-primary">8+</span>
                                <span className="block text-[8px] font-bold uppercase tracking-widest text-slate-gray">Excellent</span>
                            </div>
                            <div className="bg-white p-3 border border-charcoal/5 text-center shadow-sm">
                                <span className="block text-xl font-black text-accent-gold">6-7</span>
                                <span className="block text-[8px] font-bold uppercase tracking-widest text-slate-gray">Improvement</span>
                            </div>
                            <div className="bg-white p-3 border border-charcoal/5 text-center shadow-sm">
                                <span className="block text-xl font-black text-red-500">&lt;5</span>
                                <span className="block text-[8px] font-bold uppercase tracking-widest text-slate-gray">Exit Plan</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "risk",
            icon: <AlertTriangle className="text-primary" size={24} />,
            title: "Risk Command Center",
            content: (
                <div className="space-y-6">
                    <div className="p-6 bg-red-50 border border-red-100 border-l-4 border-l-red-500">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-600 mb-6 flex items-center gap-2">
                            <Search size={14} /> High-Risk Triggers (Immediate Director Action)
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            {[
                                { label: "Cash Reserve", trigger: "< 60 Days", icon: <TrendingUp className="rotate-180" size={14} /> },
                                { label: "Client Payment Delay", trigger: "> 45 Days", icon: <Clock size={14} /> },
                                { label: "Project Timeline Delay", trigger: "> 15%", icon: <CalendarClock size={14} /> },
                                { label: "Gross Margin Drop", trigger: "< 18%", icon: <BarChart3 size={14} /> }
                            ].map((risk, i) => (
                                <div key={i} className="flex justify-between items-center border-b border-red-200 pb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-red-500/10 text-red-500">{risk.icon}</div>
                                        <span className="text-[11px] font-bold text-charcoal/80 uppercase">{risk.label}</span>
                                    </div>
                                    <span className="text-sm font-black text-red-600 font-mono tracking-tighter">{risk.trigger}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 p-6 border border-charcoal/10 shadow-sm">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-charcoal mb-4 flex items-center gap-2">
                                <Lightbulb size={14} className="text-accent-gold" /> Innovation ROI
                            </h4>
                            <ul className="text-[10px] space-y-3 text-slate-gray font-medium">
                                <li className="flex justify-between pb-2 border-b border-charcoal/5 italic"><span>Target Time Reduction:</span> <span className="text-primary font-black">5%+</span></li>
                                <li className="flex justify-between pb-2 border-b border-charcoal/5 italic"><span>Target Rework Reduction:</span> <span className="text-primary font-black">10%+</span></li>
                                <li className="flex justify-between italic"><span>Target Waste Reduction:</span> <span className="text-primary font-black">5%+</span></li>
                            </ul>
                        </div>
                        <div className="flex-1 p-6 bg-charcoal text-white relative overflow-hidden">
                            <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-2 text-primary">
                                <Briefcase size={14} /> Differentiation
                            </h4>
                            <div className="space-y-2">
                                {["Weekly Digital Client Dashboard", "3D Execution Simulation", "Structured Snag Tracking", "Luxury Detailing Catalogue"].map(item => (
                                    <div key={item} className="p-2 border border-white/5 text-[9px] uppercase tracking-widest font-black bg-white/5 hover:bg-white/10 transition-colors">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "discipline",
            icon: <CalendarClock className="text-primary" size={24} />,
            title: "Daily Discipline & Future",
            content: (
                <div className="space-y-12">
                    <div className="p-10 bg-white border border-charcoal/5 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Clock size={120} />
                        </div>
                        <h4 className="text-lg font-display font-black text-charcoal uppercase tracking-tighter mb-8 pb-4 border-b-2 border-primary w-fit">Director Daily Routine (45m)</h4>
                        <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
                            {[
                                { time: "15m", label: "Financial Review" },
                                { time: "15m", label: "Project Dashboards" },
                                { time: "15m", label: "Strategic Thought" }
                            ].map((box, i) => (
                                <div key={i} className="flex-1">
                                    <span className="text-3xl font-black text-primary font-mono select-none">{box.time}</span>
                                    <h5 className="text-[10px] font-bold text-slate-gray uppercase tracking-widest mt-2">{box.label}</h5>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 p-4 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] text-center">
                            Governing Direction &gt; Supervising Labour
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <section>
                            <h4 className="text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                                <TrendingUp size={16} className="text-primary" /> 5-Year Scale Blueprint
                            </h4>
                            <div className="space-y-4">
                                {[
                                    { y: "Year 1", t: "System Stabilization" },
                                    { y: "Year 2", t: "Luxury Positioning" },
                                    { y: "Year 3", t: "Parallel Multi-Project Control" },
                                    { y: "Year 4", t: "Regional Expansion" },
                                    { y: "Year 5", t: "ERP + Corporate Scale" }
                                ].map((st, i) => (
                                    <div key={i} className="flex items-center gap-4 text-[10px] font-medium p-3 bg-white border border-charcoal/3">
                                        <span className="text-primary font-black w-12">{st.y}</span>
                                        <span className="text-slate-gray uppercase tracking-widest">{st.t}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="flex flex-col justify-center items-center text-center p-12 bg-charcoal text-white">
                            <h4 className="text-[10px] font-bold text-accent-gold uppercase tracking-[0.5em] mb-4">Mindset Shift</h4>
                            <h3 className="text-3xl md:text-4xl font-display font-black leading-tight italic">
                                "From finished projects to predictable <span className="text-primary">profit engines</span>."
                            </h3>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="max-w-5xl">
            {/* Page Header */}
            <div className="mb-20">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-4">
                    <span className="w-8 h-px bg-accent-gold/30"></span>
                    Manual 03
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-black text-charcoal mb-6 tracking-tight">
                    OPERATIONAL <br /> GOVERNANCE
                </h1>
                <p className="text-slate-gray text-lg leading-relaxed max-w-2xl">
                    The master governance charter for Diqra Infrastructure. Transitioning from project-level management to institutional control systems.
                </p>
            </div>

            {/* Horizontal Section Scroller (Quick Nav) */}
            <div className="sticky top-0 bg-white/80 backdrop-blur-sm z-30 mb-20 border-b border-charcoal/5 -mx-6 md:-mx-12 px-6 md:px-12 py-4">
                <div className="flex gap-8 overflow-x-auto hide-scrollbar whitespace-nowrap">
                    {sections.map(s => (
                        <a key={s.id} href={`#${s.id}`} className="text-[10px] font-black text-charcoal/40 hover:text-primary uppercase tracking-[0.2em] transition-colors">
                            {s.title}
                        </a>
                    ))}
                </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-32">
                {sections.map((section) => (
                    <section key={section.id} id={section.id} className="scroll-mt-32">
                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-16 h-16 bg-white border border-charcoal/5 shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                {section.icon}
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-3xl font-display font-black text-charcoal uppercase tracking-tighter">
                                    {section.title}
                                </h2>
                                <div className="h-1 w-12 bg-primary mt-2"></div>
                            </div>
                        </div>
                        <div className="pl-0 lg:pl-22">
                            {section.content}
                        </div>
                    </section>
                ))}
            </div>

            {/* Acknowledgement */}
            <div className="mt-32 border-t border-charcoal/10 pt-20 pb-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1">
                        <h3 className="text-xs font-black text-charcoal uppercase tracking-widest mb-4">Charter Execution Verification</h3>
                        <p className="text-xs text-slate-gray leading-relaxed max-w-md">
                            This manual serves as the primary operational directive for Diqra Infrastructure. Compliance with the governance matrices and financial thresholds is mandatory for all executive leadership.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                            <div className="p-4 bg-background-light text-center border border-charcoal/5">
                                <span className="text-[10px] font-bold text-slate-gray uppercase">Charter V1.2</span>
                            </div>
                            <button className="p-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest hover:bg-charcoal transition-all">
                                Download Full PDF
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OperationalGovernancePage;
