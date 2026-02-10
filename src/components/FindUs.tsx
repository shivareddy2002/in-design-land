import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const FindUs = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const expectations = [
    "Live wood samples and finishes",
    "Expert consultation",
    "Design portfolio showcase",
    "Custom measurement service"
  ];

  return (
    <section id="find-us" className="py-20 bg-background" ref={sectionRef as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className={cn(
          "text-center mb-8 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Find Us
          </h2>
          <p className={cn(
            "text-lg text-wood-dark max-w-2xl mx-auto transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )} style={{ transitionDelay: "150ms" }}>
            Visit our showroom and workshop to see our premium wood solutions in person. We're located at Andhra Pradesh, India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Location Info */}
          <div className={cn(
            "h-full transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )} style={{ transitionDelay: "300ms" }}>
            <Card className="bg-card border border-wood-medium h-full hover-glow transition-all duration-500">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-primary mb-3">Visit Our Factory</h3>
                
                <div className="space-y-4 flex-grow">
                  <div className={cn(
                    "transition-all duration-500 ease-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )} style={{ transitionDelay: "400ms" }}>
                    <h4 className="font-semibold text-wood-dark mb-2">Address</h4>
                    <p className="text-wood-dark">
                      IDL, Andhra Pradesh, India, 516293
                    </p>
                  </div>
                  
                  <div className={cn(
                    "transition-all duration-500 ease-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )} style={{ transitionDelay: "500ms" }}>
                    <h4 className="font-semibold text-wood-dark mb-2">Business Hours</h4>
                    <div className="space-y-1 text-wood-dark">
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  
                  <div className={cn(
                    "transition-all duration-500 ease-out",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )} style={{ transitionDelay: "600ms" }}>
                    <h4 className="font-semibold text-wood-dark mb-2">What to Expect</h4>
                    <ul className="space-y-1 text-wood-dark">
                      {expectations.map((item, index) => (
                        <li 
                          key={item}
                          className={cn(
                            "transition-all duration-500 ease-out",
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                          )}
                          style={{ transitionDelay: `${700 + index * 100}ms` }}
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Map */}
          <div className={cn(
            "h-full min-h-[300px] lg:min-h-[380px] rounded-lg overflow-hidden border border-wood-medium shadow-lg transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )} style={{ transitionDelay: "400ms" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.7439999999997!2d78.7324446!3d14.4958295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb377561091309f%3A0x874d06dd5821b814!2sIdl%20%7C%20In%20Design%20Land!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IDL In Design Land Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
