import { ArrowLeft, ExternalLink } from 'lucide-react';
import '../App.css';

const categories = [
  {
    id: 'product',
    title: 'Product Visualization',
    items: [
      {
        title: 'Modern Chair Design',
        image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
        tools: 'Blender, Photoshop',
        purpose: '3D furniture visualization',
      },
      {
        title: 'Smart Watch Concept',
        image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
        tools: 'Blender, Substance Painter',
        purpose: 'Product design visualization',
      },
      {
        title: 'Luxury Packaging',
        image: 'https://images.pexels.com/photos/5947547/pexels-photo-5947547.jpeg',
        tools: 'Blender, Cinema 4D',
        purpose: 'Package design rendering',
      },
      {
        title: 'Headphone Design',
        image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
        tools: 'Blender, KeyShot',
        purpose: 'Product showcase',
      },
      {
        title: 'Perfume Bottle',
        image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg',
        tools: 'Blender, Photoshop',
        purpose: 'Luxury product rendering',
      },
      {
        title: 'Smart Home Device',
        image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg',
        tools: 'Blender, Cinema 4D',
        purpose: 'Tech product visualization',
      },
    ],
  },
  {
    id: 'social',
    title: 'Social Media Content',
    items: [
      {
        title: 'Fashion Campaign',
        image: 'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg',
        tools: 'Premiere Pro, After Effects',
        purpose: 'Instagram campaign',
      },
      {
        title: 'Food Review Series',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
        tools: 'Premiere Pro, DaVinci Resolve',
        purpose: 'YouTube shorts series',
      },
      {
        title: 'Travel Vlog',
        image: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg',
        tools: 'Premiere Pro, LumaFusion',
        purpose: 'Social media content',
      },
      {
        title: 'Fitness Challenge',
        image: 'https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg',
        tools: 'After Effects, Premiere Pro',
        purpose: 'Instagram reels',
      },
      {
        title: 'Tech Review',
        image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
        tools: 'Final Cut Pro, Motion',
        purpose: 'YouTube content',
      },
      {
        title: 'Cooking Tutorial',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
        tools: 'Premiere Pro, After Effects',
        purpose: 'Social media series',
      },
    ],
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    items: [
      {
        title: 'Finance App',
        image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
        tools: 'Figma, Photoshop',
        purpose: 'Mobile banking interface',
      },
      {
        title: 'Fitness Tracker',
        image: 'https://images.pexels.com/photos/1749452/pexels-photo-1749452.jpeg',
        tools: 'Figma, Illustrator',
        purpose: 'Health app design',
      },
      {
        title: 'E-commerce Platform',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
        tools: 'Figma, Sketch',
        purpose: 'Online shopping experience',
      },
      {
        title: 'Learning Platform',
        image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg',
        tools: 'Figma, Adobe XD',
        purpose: 'Educational app design',
      },
      {
        title: 'Smart Home App',
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
        tools: 'Figma, Principle',
        purpose: 'IoT control interface',
      },
      {
        title: 'Social Network',
        image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
        tools: 'Figma, Framer',
        purpose: 'Community platform design',
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient">
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-white">Pandu</a>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-white hover:text-white/80">Home</a>
              <a href="/contact" className="text-white hover:text-white/80">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-24 pb-20">
        <div className="mb-12">
          <a 
            href="/"
            className="inline-flex items-center text-white hover:text-white/80 mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Portfolio</h1>
          <p className="text-white/80 text-lg">Explore my work across different categories</p>
        </div>

        {categories.map((category) => (
          <section key={category.id} className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8">{category.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item) => (
                <div key={item.title} className="glass rounded-xl overflow-hidden group">
                  <div className="relative aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm mb-3">{item.tools}</p>
                    <p className="text-white/90">{item.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}