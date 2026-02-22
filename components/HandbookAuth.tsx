import React, { useState, useEffect } from 'react';
import { Lock, ShieldAlert, Eye, EyeOff, ArrowRight } from 'lucide-react';

interface HandbookAuthProps {
    children: React.ReactNode;
}

const HandbookAuth: React.FC<HandbookAuthProps> = ({ children }) => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const CORRECT_PASSWORD = 'DQarchs123@';

    useEffect(() => {
        const authStatus = sessionStorage.getItem('handbook_auth');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === CORRECT_PASSWORD) {
            setIsAuthenticated(true);
            sessionStorage.setItem('handbook_auth', 'true');
            setError('');
        } else {
            setError('Invalid password. Access denied.');
            setPassword('');
        }
    };

    if (isAuthenticated) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-charcoal flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-gold blur-[120px]"></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                <div className="bg-white p-8 md:p-12 shadow-2xl border border-white/10 relative overflow-hidden">
                    {/* Top Bar Decor */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-accent-gold to-primary"></div>

                    <div className="flex flex-col items-center mb-10 text-center">
                        <div className="w-16 h-16 bg-charcoal flex items-center justify-center mb-6">
                            <Lock size={28} className="text-accent-gold" />
                        </div>
                        <h1 className="text-2xl font-display font-black text-charcoal uppercase tracking-tighter mb-2">
                            Protected Area
                        </h1>
                        <p className="text-sm text-slate-gray leading-relaxed">
                            This section is restricted to Diqra Architects personnel only. Please enter the manual access password.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-[10px] font-bold uppercase tracking-widest text-slate-gray ml-1">
                                Security Password
                            </label>
                            <div className="relative group">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••••"
                                    className={`w-full bg-background-light border-b-2 px-4 py-4 pr-12 outline-none transition-all duration-300 font-mono text-charcoal ${error ? 'border-red-500' : 'border-charcoal/10 focus:border-primary'
                                        }`}
                                    autoFocus
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-gray hover:text-charcoal transition-colors p-1"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="flex items-center gap-2 text-red-500 text-xs font-bold animate-pulse">
                                <ShieldAlert size={14} />
                                <span>{error}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-charcoal text-white py-5 px-6 font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-primary transition-all duration-500 group"
                        >
                            Verify Identity
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                        </button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-charcoal/5 flex justify-between items-center text-[9px] font-bold text-slate-gray uppercase tracking-widest">
                        <span>© 2024 DIQRA</span>
                        <span className="text-accent-gold">Confidential Information</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HandbookAuth;
