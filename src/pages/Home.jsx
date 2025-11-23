import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Heart, 
  Sparkles, 
  Search, 
  Shield, 
  Users, 
  MessageCircle, 
  Star,
  Crown,
  Coffee,
  Clock,
  Bot
} from 'lucide-react';
function Home() {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Interacciones Adorables",
      description: "Interactúa con otros usuarios con abrazos, besos y más para un mejor ambiente.",
      color: "from-pink-400 to-rose-400"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Búsqueda de Imágenes",
      description: "Busca imágenes de Google directamente desde Discord con comandos simples.",
      color: "from-purple-400 to-indigo-400"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Moderación",
      description: "Protege tu servidor con moderación diversos comandos de moderación.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Sistema AFK",
      description: "Gestiona estados AFK de usuarios para mantener la comunicación fluida.",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Comandos de información",
      description: "Senko esta integrada con diversos comandos de busqueda de información para que puedas nutrir tu chat.",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Utilidades Divertidas",
      description: "Comandos únicos y divertidos para hacer tu servidor más entretenido.",
      color: "from-red-400 to-pink-400"
    }
  ];

  const popularCommands = [
    { command: "/help", description: "Muestra todos los comandos disponibles" },
    { command: "/afk set [razón]", description: "Establece tu estado como ausente" },
    { command: "/search google image [término]", description: "Busca imágenes en Google" },
    { command: "/interact hug [@usuario]", description: "Dale un abrazo virtual a alguien" },
    { command: "/kick", description: "Expulsa a los usuarios molestos de tu servidor" },
    { command: "/ping", description: "Verifica la latencia del bot" }
  ];

  return (
    <>
      <Helmet>
        <title>Senko Bot - Tu Kitsune favorita en Discord</title>
        <meta name="description" content="Senko es una bot inspirada en Senko - San de Sewayaki kitsune no Senko San, esta bot esta equipada con diversos comandos utiles y tiernos." />
      </Helmet>
      
      <Navigation />

      <main>
        <section className="relative pt-20 pb-20 overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative mb-8">
               <img   
                  className="w-64 h-64 mx-auto rounded-full shadow-2xl floating-animation border-8 border-white/50 dark:border-slate-800/50 object-cover" 
                  alt="Senko San"
                  src="https://cdn.senko.nekomera.xyz/webpage/senko.webp" />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full sparkle"></div>
                <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-orange-400 rounded-full sparkle" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-amber-400 rounded-full sparkle" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.2] pb-2 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                ¡Hola! Soy Senko
              </h1>

              <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed">
                Tu kitsune favorita que hará de tu servidor de Discord un lugar más 
                <span className="text-orange-500 font-semibold"> cálido</span> y 
                <span className="text-amber-500 font-semibold"> acogedor</span> ✨
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1207787243817930802&permissions=8&scope=bot', '_blank')}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Invitar Bot
                </Button>

                
                <Link to="/commands">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-orange-400 text-orange-500 hover:bg-orange-500/10 font-semibold px-8 py-4 rounded-full transition-all duration-300"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Ver Comandos
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                ¿Qué puedo hacer por ti?
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Como una verdadera kitsune cuidadora, tengo muchas habilidades especiales para hacer tu servidor más especial
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border/50 h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {feature.title}
                    </h3>
                    
                    <p className="text-foreground/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Comandos Populares
              </h2>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Estos son algunos de mis comandos más utilizados para cuidar de tu servidor
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {popularCommands.map((cmd, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg p-2 flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground mb-2">
                          <code className="bg-muted px-2 py-1 rounded text-orange-500">
                            {cmd.command}
                          </code>
                        </h3>
                        <p className="text-foreground/70">
                          {cmd.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Link to="/commands">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Clock className="w-5 h-5 mr-2" />
                    Ver Todos los Comandos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative mb-8">
               <img   
                className="w-32 h-32 mx-auto rounded-full shadow-xl tail-wave object-cover" 
                alt="Senko San"
                src="https://cdn.senko.nekomera.xyz/webpage/senko.webp" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                ¡Déjame cuidar de tu servidor!
              </h2>
              
              <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                Invítame a tu servidor y experimenta la calidez y el cuidado que solo una kitsune puede ofrecer. 
                ¡Tu comunidad se sentirá como en casa! 🏠✨
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                   onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1207787243817930802&permissions=8&scope=bot', '_blank')}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Invitar Ahora
                </Button>
                
                <Button 
                   onClick={() => window.open('https://discord.com/invite/7Qm6dUdqw3', '_blank')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-400 text-orange-500 hover:bg-orange-500/10 font-semibold px-10 py-4 rounded-full transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Servidor de Soporte
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;