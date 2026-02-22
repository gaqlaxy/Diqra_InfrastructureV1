export interface DashboardMetric {
    label: string;
    value: string;
    sub: string;
    iconName: 'Layers' | 'TrendingUp' | 'BarChart3' | 'Wallet' | 'ShieldCheck' | 'Zap' | 'Calendar';
    status: 'up' | 'down' | 'neutral';
}

export const dashboardMetrics: DashboardMetric[] = [
    {
        label: "Total Active Projects",
        value: "12",
        sub: "Across all sectors",
        iconName: "Layers",
        status: "neutral"
    },
    {
        label: "Total Revenue",
        value: "₹8.2 Cr",
        sub: "+12.5% from last month",
        iconName: "TrendingUp",
        status: "up"
    },
    {
        label: "Total Cost",
        value: "₹6.4 Cr",
        sub: "78% of budget",
        iconName: "BarChart3",
        status: "neutral"
    },
    {
        label: "Overall Profit",
        value: "₹1.8 Cr",
        sub: "Net margin after tax",
        iconName: "Wallet",
        status: "up"
    },
    {
        label: "Average Margin",
        value: "21.9%",
        sub: "Target: 18%+",
        iconName: "ShieldCheck",
        status: "up"
    },
    {
        label: "Cash Balance",
        value: "₹2.45 Cr",
        sub: "Liquid reserves",
        iconName: "Zap",
        status: "neutral"
    },
    {
        label: "90-Day Forecast Closing",
        value: "₹3.1 Cr",
        sub: "Projected milestones",
        iconName: "Calendar",
        status: "neutral"
    }
];
