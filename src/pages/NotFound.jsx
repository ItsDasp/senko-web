import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Página no encontrada | Senko Bot</title>
        <meta
          name="description"
          content="La página que buscas no existe. Vuelve al inicio con Senko Bot."
        />
      </Helmet>

      <Navigation />

      <main>
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-xl mx-auto"
            >
              <div className="relative mb-8">
                <img
                  className="w-40 h-40 mx-auto rounded-full shadow-2xl border-8 border-white/50 dark:border-slate-800/50 object-cover"
                  alt="Senko"
                  src="https://cdn.senko.nekomera.xyz/webpage/senkopose.webp"
                />
              </div>

              <p className="text-sm uppercase tracking-[0.3em] text-orange-400 mb-3">
                Error 404
              </p>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent pb-2">
                Uy... no encontré esa página
              </h1>

              <p className="text-foreground/70 mb-8 text-lg">
                Parece que esta ruta se perdió entre las colas de kitsune... no te preocupes, puedes volver al inicio clickeando el botoncito de aca abajo =￣ω￣=
              </p>

              <Link to="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-400 text-orange-500 hover:bg-orange-500/10 font-semibold px-8 py-3 rounded-full transition-all duration-300"
                >
                  Volver al inicio
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default NotFound;
