import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

import { ThumbsUp, Star, ExternalLink } from 'lucide-react';

function Vote() {

  const voteSites = [
    {
      name: "Top.gg",
      description: "La lista de bots de Discord más grande. ¡Ayúdanos a llegar a la cima!",
      icon: <Star className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
      link: "https://top.gg/bot/1207787243817930802"
    },
    // Puedes agregar más sitios aquí
  ];

  return (
    <>
      <Helmet>
        <title>Vota por Senko - Senko Bot</title>
        <meta name="description" content="Apoya a Senko Bot votando en las principales listas de bots de Discord. ¡Cada voto nos ayuda a crecer y mejorar!" />
      </Helmet>

      <Navigation />

      <main>
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="relative mb-8">
                <img
                  className="w-32 h-32 mx-auto rounded-full shadow-xl object-cover"
                  alt="Senko-san anime character giving a thumbs up"
                  src="https://cdn.senko.nekomera.xyz/webpage/senkopat.webp"
                />
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                ¡Vota por Senko!
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Si te gusta cómo cuido de tu servidor, ¡un voto sería el mejor regalo que podrías darme! 💕
              </p>
            </motion.div>

            {/* CENTRADO AUTOMÁTICO */}
            <div className={`grid gap-8 max-w-6xl mx-auto ${
              voteSites.length === 1 ? 'grid-cols-1 place-items-center' : 'md:grid-cols-1 lg:grid-cols-3'
            }`}>
              {voteSites.map((site, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border/50 h-full text-center flex flex-col">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${site.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                      <div className="text-white">
                        {site.icon}
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold mb-2 text-foreground">
                      {site.name}
                    </h2>

                    <p className="text-foreground/70 leading-relaxed flex-grow mb-6">
                      {site.description}
                    </p>

                    <Button
                      onClick={() => window.open(site.link, '_blank')}
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full mt-auto"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Votar Ahora
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Vote;
