import React from "react";
import { Palette, Zap, Users } from "lucide-react";

const services = [
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Creative Design",
    description: "Innovative design solutions that blend aesthetics with functionality."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Rapid Iteration",
    description: "Quick turnaround with multiple concepts and revisions for your projects."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Collaborative Process",
    description: "Working closely with clients to understand and achieve their vision."
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* About Me Content */}
          <div>
            <span className="inline-block py-1 px-3 mb-4 bg-gray-100 text-sm font-medium rounded-full">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">
              Blending Creativity with Technology
            </h2>
            <p className="text-gray-600 mb-6">
              I’m a <strong>Computer Engineer</strong> by profession and an <strong>artist at heart</strong>.  
              Since childhood, I have been deeply passionate about art, and over the years, it has become an integral part of my life.
            </p>
            <p className="text-gray-600 mb-6">
              My artistic journey spans various mediums, including <strong>mandala, doodle, calligraphy, canvas painting, clay art, and basic sketching</strong>.  
              I love expressing my creativity through intricate patterns, bold strokes, and detailed compositions.
            </p>
            <p className="text-gray-600 mb-8">
              For me, art is more than just a hobby—it’s a way to tell stories, evoke emotions, and inspire creativity.  
              My approach combines traditional artistic techniques with modern digital tools, resulting in visually engaging and meaningful artwork.
            </p>
            
            {/* Skills */}
            <div className="flex flex-wrap gap-4">
              {["Mandala", "Canvas", "Calligraphy", "Doodle", "Clay Art", "Cartoon Sketching"].map((skill, index) => (
                <span key={index} className="px-6 py-2 bg-gray-100 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* About Me Image */}
          {/* About Me Image */}
{/* About Me Image */}
<div className="relative w-fit mx-auto p-2 bg-white rounded-2xl shadow-xl">
  <div className="absolute -top-4 -left-4 w-20 h-20 bg-gray-100 rounded-full filter blur-xl opacity-70"></div>
  <div className="relative z-10 rounded-2xl overflow-hidden">
    <img 
      src="/aboutme/my2.jpg" 
      alt="Artist at work" 
      className="w-60 h-80 object-cover rounded-lg"
      loading="lazy"
    />
  </div>
</div>

        </div>
        
        {/* Services Offered */}
        
      </div>
    </section>
  );
};

export default About;
