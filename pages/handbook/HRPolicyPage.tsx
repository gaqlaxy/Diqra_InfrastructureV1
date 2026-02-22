import React from 'react';
import { Gavel, Users, BadgeCheck, Scale, AlertCircle, Calendar, HardHat, LogOut, ChevronRight } from 'lucide-react';

const HRPolicyPage: React.FC = () => {
    const sections = [
        {
            id: 1,
            title: "Employment Structure & Classification",
            icon: <Users className="text-primary" size={24} />,
            points: [
                "Employee categories: Directors, Full-Time Staff, Probationers, Contract Staff, Daily Wage Labour.",
                "All employees must sign Appointment Letter with defined role, salary, and probation period.",
                "Standard probation period: 90 days with measurable KPI review."
            ]
        },
        {
            id: 2,
            title: "Recruitment & Hiring Policy",
            icon: <BadgeCheck className="text-primary" size={24} />,
            points: [
                "Hiring based on workload forecast and revenue pipeline.",
                "Role clarity document mandatory before hiring.",
                "Background verification for all permanent staff.",
                "Salary benchmarking aligned with budgeted project margins."
            ]
        },
        {
            id: 3,
            title: "Compensation & Payroll Governance",
            icon: <Scale className="text-primary" size={24} />,
            points: [
                "Monthly salary processing before 7th of every month.",
                "Attendance-based payroll system (biometric/GPS preferred).",
                "Overtime rules documented and pre-approved.",
                "Statutory deductions as per Indian law (PF, ESI, TDS where applicable)."
            ]
        },
        {
            id: 4,
            title: "Statutory Compliance (India)",
            icon: <Gavel className="text-primary" size={24} />,
            points: [
                "Provident Fund (EPF) compliance where employee threshold applicable.",
                "Employee State Insurance (ESI) where wage threshold applicable.",
                "Professional Tax registration as per state norms.",
                "GST compliance for all billing and vendor payments.",
                "Labour license and contractor compliance for site workers.",
                "Maintain wage register, attendance register, and payment records."
            ]
        },
        {
            id: 5,
            title: "Code of Conduct",
            icon: <AlertCircle className="text-primary" size={24} />,
            points: [
                "Zero tolerance for bribery or unethical vendor dealings.",
                "No verbal financial commitments without documentation.",
                "Confidentiality of client drawings, BOQs, and financial data.",
                "Professional behavior at client sites mandatory."
            ]
        },
        {
            id: 6,
            title: "Performance & KPI System",
            icon: <BadgeCheck className="text-primary" size={24} />,
            points: [
                "Monthly KPI scoring system for all staff.",
                "Below 6/10 performance requires improvement plan.",
                "Repeated underperformance may lead to termination review.",
                "Top performers eligible for incentive or growth plan."
            ]
        },
        {
            id: 7,
            title: "Leave & Attendance Policy",
            icon: <Calendar className="text-primary" size={24} />,
            points: [
                "Casual Leave and Sick Leave structure defined annually.",
                "Leave must be pre-approved except medical emergencies.",
                "Uninformed absence beyond 2 days subject to disciplinary review."
            ]
        },
        {
            id: 8,
            title: "Workplace Safety & Site Compliance",
            icon: <HardHat className="text-primary" size={24} />,
            points: [
                "Mandatory safety induction for site workers.",
                "Personal Protective Equipment (PPE) compulsory at site.",
                "Accident reporting protocol within 24 hours.",
                "Compliance with Building & Other Construction Workers Act guidelines."
            ]
        },
        {
            id: 9,
            title: "Disciplinary Procedure",
            icon: <AlertCircle className="text-primary" size={24} />,
            points: [
                "Step 1: Verbal Warning (documented).",
                "Step 2: Written Warning.",
                "Step 3: Final Notice.",
                "Step 4: Termination as per contract terms."
            ]
        },
        {
            id: 10,
            title: "Exit & Full & Final Settlement",
            icon: <LogOut className="text-primary" size={24} />,
            points: [
                "Notice period as per appointment letter.",
                "Handover of documents, drawings, and company assets mandatory.",
                "Final settlement processed within 30 days after clearance."
            ]
        }
    ];

    return (
        <div className="max-w-4xl">
            <div className="mb-12">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-4">
                    <span className="w-8 h-px bg-accent-gold/30"></span>
                    Manual 01
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-black text-charcoal mb-6 tracking-tight">
                    HR POLICY & <br /> LEGAL COMPLIANCE
                </h1>
                <p className="text-slate-gray text-lg leading-relaxed max-w-2xl italic border-l-2 border-primary pl-6 py-2">
                    "Ensuring professional standards, statutory adherence, and operational excellence across our architecture practice."
                </p>
            </div>

            <div className="space-y-16">
                {sections.map((section) => (
                    <section key={section.id} className="relative">
                        <div className="flex items-start gap-6 group">
                            <div className="hidden md:flex flex-col items-center">
                                <div className="w-12 h-12 flex items-center justify-center border border-charcoal/10 transition-colors group-hover:border-primary">
                                    {section.icon}
                                </div>
                                <div className="w-px h-full bg-charcoal/5 group-last:bg-transparent mt-4"></div>
                            </div>
                            <div className="flex-1 pb-12 border-b border-charcoal/5 group-last:border-0">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-[10px] font-bold text-primary font-mono select-none">
                                        [{section.id.toString().padStart(2, '0')}]
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-bold font-display text-charcoal uppercase tracking-tighter">
                                        {section.title}
                                    </h2>
                                </div>
                                <ul className="space-y-4">
                                    {section.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-slate-gray leading-relaxed text-sm md:text-base">
                                            <ChevronRight size={16} className="mt-1 shrink-0 text-primary/40" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            <div className="mt-20 p-8 bg-charcoal text-white">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-lg font-display font-bold mb-2">Acknowledgement</h3>
                        <p className="text-white/60 text-xs italic">
                            All staff members are required to read and acknowledge the above policies as part of their employment contract.
                        </p>
                    </div>
                    <button className="px-8 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all">
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HRPolicyPage;
