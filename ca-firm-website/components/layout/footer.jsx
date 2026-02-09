
"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS, SERVICES } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{SITE_CONFIG.name}</h3>
              <p className="text-slate-400 text-sm">{SITE_CONFIG.designation}</p>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Providing expert financial, legal, and compliance solutions to businesses and individuals since 2010. Committed to excellence and integrity.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href={SITE_CONFIG.socials.linkedin} className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={SITE_CONFIG.socials.twitter} className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/legal" 
                  className="text-sm hover:text-white transition-colors flex items-center"
                >
                  <ArrowRight size={14} className="mr-2" />
                  Legal & Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.slug}`} 
                    className="text-sm hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-slate-400 shrink-0 mt-1" />
                <span className="text-sm text-slate-300 leading-relaxed">
                  {SITE_CONFIG.address}
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-slate-400 shrink-0" />
                <span className="text-sm text-slate-300">{SITE_CONFIG.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-slate-400 shrink-0" />
                <span className="text-sm text-slate-300">{SITE_CONFIG.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
             <p className="text-xs text-slate-600 text-center md:text-right max-w-md">
                Disclaimer: The information on this website is for general informational purposes only and does not constitute professional advice.
             </p>
             <div className="flex space-x-6">
                <Link href="/legal" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
                <Link href="/legal" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
