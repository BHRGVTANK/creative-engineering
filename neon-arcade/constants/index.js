import { Share2, Gamepad2, FileText, Globe, User } from "lucide-react";

export const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/games", label: "Games" },
    { href: "/studio", label: "Studio" },
    { href: "/media", label: "Media" },
    { href: "/news", label: "News" },
    { href: "/careers", label: "Careers" },
    { href: "/community", label: "Community" },
];

export const SOCIAL_LINKS = [
    { href: "#", icon: Share2, label: "Share" },
    { href: "#", icon: Gamepad2, label: "Discord" },
    { href: "#", icon: Globe, label: "Global" },
];

export const FOOTER_LINKS = [
    {
        title: "Company",
        links: [
            { href: "/studio", label: "About Us" },
            { href: "/careers", label: "Careers" },
            { href: "/contact", label: "Contact" },
        ],
    },
    {
        title: "Support",
        links: [
            { href: "/help", label: "Help Center" },
            { href: "/legal", label: "Terms of Service" },
            { href: "/privacy", label: "Privacy Policy" },
        ],
    },
    {
        title: "Connect",
        links: [
            { href: "#", label: "Twitter" },
            { href: "#", label: "Instagram" },
            { href: "#", label: "YouTube" },
            { href: "#", label: "Discord" },
        ],
    },
];
