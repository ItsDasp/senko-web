import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { 
  Bot,
  ExternalLink,
  Menu,
  X,
  Image,
  Award,
  HeartHandshake
} from 'lucide-react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();


  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Comandos', path: '/commands' },
    { name: 'Votar', path: '/vote' },
    { name: 'Créditos', path: '/credits' },
  ];

  return (
    <header className="relative overflow-hidden bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <nav className="relative z-10 container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <img src="https://i.imgur.com/UJndRHY.png" alt="Senko Navbar" className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Senko Bot
              </span>
            </Link>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-semibold transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-orange-500'
                    : 'text-foreground/70 hover:text-orange-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <Button 
              onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1207787243817930802&permissions=8&scope=bot', '_blank')}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Invitar a Discord
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 font-semibold transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-orange-500'
                    : 'text-foreground/80 hover:text-orange-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1207787243817930802&permissions=8&scope=bot', '_blank')}
              className="w-full mt-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-2 rounded-full"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Invitar a Discord
            </Button>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

export default Navigation;