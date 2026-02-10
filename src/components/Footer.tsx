import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref: footerRef, isVisible } = useScrollAnimation();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    // { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#customer-projects" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
    
  ];

  const services = [
    "Custom Woodwork",
    "Furnishing & Interiors",
    "Installation & Maintenance",
    "Design Consultation",
    "Quality Guarantee",
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/rupasthala.design.studio", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/rupasthala_design_studio", label: "Instagram" },
    { icon: Youtube,href: "https://youtube.com/@rupasthala",label: "YouTube",},
    // { icon: Linkedin, href: "#", label: "LinkedIn" },
    // { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12" ref={footerRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className={cn(
            "space-y-4 transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="flex items-center space-x-2">
              <img src={logo} alt="In Design Land Logo" className="w-14 h-14 rounded-lg object-cover" />
              <div>
                <div className="font-bold text-lg">In Design Land</div>
                <div className="text-sm opacity-90">Premium Wood Solutions</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Crafting exceptional wood solutions with passion and precision. Quality, sustainability, and craftsmanship in every piece.
            </p>
          </div>

          {/* Quick Links */}
          <div className={cn(
            "transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )} style={{ transitionDelay: "100ms" }}>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li 
                  key={link.label}
                  className={cn(
                    "transition-all duration-500 ease-out",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  )}
                  style={{ transitionDelay: `${200 + index * 50}ms` }}
                >
                  <a href={link.href} className="opacity-90 hover:opacity-100 transition-opacity link-underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={cn(
            "transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )} style={{ transitionDelay: "200ms" }}>
            <h3 className="font-bold text-lg mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              {services.map((service, index) => (
                <li 
                  key={service}
                  className={cn(
                    "opacity-90 transition-all duration-500 ease-out",
                    isVisible ? "opacity-90 translate-x-0" : "opacity-0 -translate-x-4"
                  )}
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={cn(
            "transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )} style={{ transitionDelay: "300ms" }}>
            <h3 className="font-bold text-lg mb-3">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className={cn(
                "transition-all duration-500 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )} style={{ transitionDelay: "400ms" }}>
                <div className="font-semibold">Phone:</div>
                <div className="opacity-90">+91 9555222567</div>
              </div>
              <div className={cn(
                "transition-all duration-500 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )} style={{ transitionDelay: "450ms" }}>
                <div className="font-semibold">Email:</div>
                <div className="opacity-90">indesignland@gmail.com</div>
              </div>
              <div className={cn(
                "transition-all duration-500 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )} style={{ transitionDelay: "500ms" }}>
                <div className="font-semibold">WhatsApp:</div>
                <a 
                  href="https://wa.me/919555222567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity link-underline"
                >
                  +91 9555222567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={cn(
          "border-t border-primary-foreground/20 my-6 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        )} style={{ transitionDelay: "600ms" }}></div>

        {/* Bottom Footer */}
        <div className={cn(
          "flex flex-col items-center justify-center transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )} style={{ transitionDelay: "700ms" }}>
          {/* Social Media Icons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {socialLinks.map((social, index) => (
              // <a 
              //   key={social.label}
              //   href={social.href} 
              //   target="_blank" 
              //   rel="noopener noreferrer" 
              //   className={cn(
              //     "w-10 h-10 sm:w-8 sm:h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-110",
              //     isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              //   )}
              //   style={{ transitionDelay: `${800 + index * 100}ms` }}
              //   aria-label={social.label}
              // >
              //   <social.icon className="w-5 h-5 sm:w-4 sm:h-4" />
              // </a>
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={cn(
                  "w-11 h-11 sm:w-12 sm:h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110",
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                )}
                style={{ transitionDelay: `${800 + index * 100}ms` }}>
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>

            ))}
            {/* <a 
              href="https://youtube.com/@rupasthala" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={cn(
                "w-10 h-10 sm:w-8 sm:h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300 transform hover:scale-110",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
              )}
              style={{ transitionDelay: "1000ms" }}
              aria-label="YouTube"
            >
              <svg className="w-5 h-5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a2.999 2.999 0 0 0-2.108-2.124C19.598 3.5 12 3.5 12 3.5s-7.598 0-9.39.562A2.999 2.999 0 0 0 .502 6.186C0 7.986 0 12 0 12s0 4.014.502 5.814a2.999 2.999 0 0 0 2.108 2.124C4.402 20.5 12 20.5 12 20.5s7.598 0 9.39-.562a2.999 2.999 0 0 0 2.108-2.124C24 16.014 24 12 24 12s0-4.014-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
