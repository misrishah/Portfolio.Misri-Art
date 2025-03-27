import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-display font-semibold">
              My Portfolio
            </a>
            <p className="text-gray-500 mt-2 text-sm">
              Creating meaningful art and design as a passion.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            {/* Navigation Section */}
            <div>
              <h5 className="font-medium mb-3">Navigation</h5>
              <ul className="space-y-2">
                {["Work", "About", "Contact"].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-500 hover:text-black text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Social Media Section */}
            <div>
              <h5 className="font-medium mb-3">Social</h5>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://instagram.com/creative_sane" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-black text-sm transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/in/Misri Shah" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-black text-sm transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                
                
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Misri Portfolio.
          </p>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
