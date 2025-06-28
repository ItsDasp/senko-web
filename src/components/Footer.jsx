import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-card/40 backdrop-blur-sm py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
               <img src="https://i.imgur.com/UJndRHY.png" alt="Senko Footer" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Senko Bot
            </span>
          </div>
          
          <p className="text-foreground/70 mb-6">
            Una bot inspirada en Senko San de Sewayaki Kitsune no Senko - San 💞
          </p>
          
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-6">
            <Link to="/faq" className="text-foreground/70 hover:text-orange-500 transition-colors">FAQ</Link>
            <Link to="/tos" className="text-foreground/70 hover:text-orange-500 transition-colors">Términos de Servicio</Link>
            <Link to="/privacy" className="text-foreground/70 hover:text-orange-500 transition-colors">Política de Privacidad</Link>
            <Link to="/credits" className="text-foreground/70 hover:text-orange-500 transition-colors">Créditos</Link>
          </div>
          
          <p className="text-sm text-foreground/60">
            © 2025 Senko Bot. Hecho con amor por la comunidad de Discord para la comunidad de Discord.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;