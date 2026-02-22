import React, { useState } from 'react';
import {
    BarChart3,
    TrendingUp,
    Wallet,
    Calendar,
    Layers,
    ArrowUpRight,
    ArrowDownRight,
    ShieldCheck,
    Zap,
    CheckCircle2,
    Settings,
    X,
    Copy,
    Check
} from 'lucide-react';
import { dashboardMetrics, DashboardMetric } from '../../data/dashboardData';

const DashboardPage: React.FC = () => {
    const [data, setData] = useState<DashboardMetric[]>(dashboardMetrics);
    const [isEditMode, setIsEditMode] = useState(false);
    const [copied, setCopied] = useState(false);

    const icons = {
        Layers: <Layers size={20} />,
        TrendingUp: <TrendingUp size={20} />,
        BarChart3: <BarChart3 size={20} />,
        Wallet: <Wallet size={20} />,
        ShieldCheck: <ShieldCheck size={20} />,
        Zap: <Zap size={20} />,
        Calendar: <Calendar size={20} />
    };

    const handleUpdate = (index: number, field: keyof DashboardMetric, value: string) => {
        const newData = [...data];
        newData[index] = { ...newData[index], [field]: value };
        setData(newData);
    };

    const copyToClipboard = () => {
        const code = `export const dashboardMetrics = ${JSON.stringify(data, null, 2)};`;
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-6xl animate-in fade-in duration-700 pb-20">
            {/* Header */}
            <div className="mb-12 flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-3">
                        <span className="w-8 h-px bg-accent-gold/30"></span>
                        Management
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display font-black text-charcoal mb-4 tracking-tight">
                        FINANCIAL <br /> OVERVIEW
                    </h1>
                    <p className="text-slate-gray text-base leading-relaxed max-w-xl">
                        Real-time financial health and project delivery metrics for Diqra Infrastructure.
                    </p>
                </div>

                <button
                    onClick={() => setIsEditMode(!isEditMode)}
                    className={`p-4 border transition-all ${isEditMode ? 'bg-primary text-white border-primary' : 'bg-white text-charcoal border-charcoal/10 hover:border-primary/40'}`}
                >
                    {isEditMode ? <X size={20} /> : <Settings size={20} />}
                </button>
            </div>

            {isEditMode && (
                <div className="mb-12 bg-charcoal p-8 border border-primary/20 animate-in slide-in-from-top-4 duration-300">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xs font-bold text-primary uppercase tracking-widest">Edit Dashboard Metrics</h3>
                        <button
                            onClick={copyToClipboard}
                            className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest bg-white/10 px-4 py-2 hover:bg-white/20 transition-all border border-white/10"
                        >
                            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                            {copied ? 'Copied JSON' : 'Copy Data to File'}
                        </button>
                    </div>
                    <p className="text-[10px] text-white/40 mb-8 max-w-lg leading-relaxed">
                        Update the values below to preview changes. To save permanently, click "Copy Data to File" and replace the content in <span className="text-white font-mono">data/dashboardData.ts</span>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map((metric, i) => (
                            <div key={i} className="space-y-3 bg-white/5 p-4 border border-white/5">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-primary/10 text-primary uppercase text-[9px] font-black">{metric.iconName}</div>
                                    <span className="text-[10px] font-bold text-white uppercase">{metric.label}</span>
                                </div>
                                <input
                                    type="text"
                                    value={metric.value}
                                    onChange={(e) => handleUpdate(i, 'value', e.target.value)}
                                    className="w-full bg-charcoal border border-white/10 p-2 text-xs text-white focus:border-primary outline-none transition-all"
                                    placeholder="Value (e.g. ₹8.2 Cr)"
                                />
                                <input
                                    type="text"
                                    value={metric.sub}
                                    onChange={(e) => handleUpdate(i, 'sub', e.target.value)}
                                    className="w-full bg-charcoal border border-white/10 p-2 text-[10px] text-white/60 focus:border-primary outline-none transition-all"
                                    placeholder="Subtext/Status"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {data.map((metric, i) => (
                    <div key={i} className={`p-8 bg-white border border-charcoal/5 shadow-sm hover:border-primary/20 transition-all group ${i === 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-background-light group-hover:bg-primary/5 transition-colors text-charcoal/80 group-hover:text-primary">
                                {icons[metric.iconName as keyof typeof icons]}
                            </div>
                            {metric.status === "up" && (
                                <div className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 uppercase">
                                    <ArrowUpRight size={12} />
                                    Strong
                                </div>
                            )}
                        </div>
                        <div>
                            <h3 className="text-[11px] font-bold text-slate-gray uppercase tracking-widest mb-1">{metric.label}</h3>
                            <p className="text-3xl font-display font-black text-charcoal tracking-tighter mb-2">{metric.value}</p>
                            <div className="flex items-center gap-2 text-[10px] font-medium text-slate-gray">
                                <div className="w-1 h-1 rounded-full bg-primary/30"></div>
                                {metric.sub}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Secondary Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8 bg-charcoal text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Recent Project Milestones</h3>
                        <div className="space-y-4">
                            {[
                                { p: "Uptown Residence", t: "Slab Casting Phase 2", d: "22 Feb 2026" },
                                { p: "Heritage Clinic", t: "HVAC Installation", d: "18 Feb 2026" },
                                { p: "Corporate HQ", t: "Design Sign-off", d: "15 Feb 2026" }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 size={14} className="text-primary" />
                                        <div>
                                            <p className="text-xs font-bold text-white uppercase tracking-tight">{item.p}</p>
                                            <p className="text-[10px] text-white/40">{item.t}</p>
                                        </div>
                                    </div>
                                    <span className="text-[9px] font-mono text-white/30">{item.d}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-8 border border-charcoal/5 bg-background-light">
                    <h3 className="text-xs font-bold text-charcoal uppercase tracking-widest mb-6">Director Checklist</h3>
                    <div className="space-y-4">
                        {[
                            "Monthly Revenue Variance Audit",
                            "CapEx Approval: Project Omega",
                            "Review 90-Day Cash Flow Reserve",
                            "Internal KPI Performance Grid Update"
                        ].map((task, i) => (
                            <div key={i} className="flex items-center gap-4 bg-white p-4 border border-charcoal/5 group cursor-pointer hover:border-primary/20 transition-all shadow-sm">
                                <div className="w-4 h-4 border border-charcoal/20 flex items-center justify-center group-hover:border-primary transition-colors">
                                    <div className="w-2 h-2 bg-primary scale-0 group-hover:scale-100 transition-transform"></div>
                                </div>
                                <span className="text-[11px] font-bold text-slate-gray group-hover:text-charcoal transition-colors uppercase tracking-tight">{task}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
