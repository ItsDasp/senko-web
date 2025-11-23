import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Heart, Tv } from 'lucide-react';

function Credits() {
  const credits = [
    {
      name: "Dasp",
      role: "Desarrollador Principal",
      description: "La mente y el corazón detrás de Senko Bot, trabajando para traer calidez y calidad a tu servidor de Discord.",
      icon: <img src="https://cdn.senko.nekomera.xyz/webpage/dasp.webp" alt="icono Dasp" className="w-full h-full object-cover" />,
      color: "from-blue-400 to-cyan-400"
    },
    {
      name: "Sewayaki Kitsune no Senko-san",
      role: "La Inspiración",
      description: "El maravilloso anime que nos inspiró a crear a Senko. ¡Todo el crédito a Rimukoro por crear un personaje tan adorable!",
      icon: <Tv className="w-8 h-8 text-white" />,
      color: "from-purple-400 to-indigo-400"
    },
    {
      name: "La Comunidad",
      role: "Nuestros Queridos Usuarios",
      description: "Gracias a todos los que usan, apoyan y dan feedback a Senko. ¡Ustedes son la razón por la que seguimos mejorando!",
      icon: <Heart className="w-8 h-8 text-white" />,
      color: "from-pink-400 to-rose-400"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Créditos - Senko Bot</title>
        <meta name="description" content="Un agradecimiento especial a quienes hicieron posible Senko Bot. Conoce a los creadores y la inspiración detrás del proyecto." />
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
              <div className="relative mb-8 w-32 h-32 mx-auto rounded-full shadow-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Senko Credits"
                  src="https://cdn.senko.nekomera.xyz/webpage/senkolove.gif"
                />
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4 pb-2 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Créditos y Agradecimientos
              </h1>

              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Un agradecimiento especial a todos los que hicieron posible a esta kitsune cuidadora.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {credits.map((credit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border/50 h-full text-center">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${credit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto overflow-hidden`}>
                      {credit.icon}
                    </div>

                    <h2 className="text-2xl font-bold mb-2 text-foreground">
                      {credit.name}
                    </h2>
                    <p className="text-orange-500 font-semibold mb-4">{credit.role}</p>

                    <p className="text-foreground/70 leading-relaxed">
                      {credit.description}
                    </p>
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

export default Credits;
