import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Bot, Shield, AlertTriangle, FileText } from 'lucide-react';

function TOS() {
  const sections = [
    {
      title: "1. Aceptación de los Términos",
      content: "Al invitar y usar Senko Bot en tu servidor de Discord, aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestro servicio."
    },
    {
      title: "2. Descripción del Servicio",
      content: "Senko Bot es un bot de Discord que proporciona comandos de entretenimiento, utilidades y moderación básica. El servicio se proporciona 'tal como está' y puede ser modificado o discontinuado en cualquier momento."
    },
    {
      title: "3. Uso Aceptable",
      content: "Te comprometes a usar Senko Bot de manera responsable y legal. No debes usar el bot para: spam, acoso, contenido ilegal, violación de los términos de servicio de Discord, o cualquier actividad que pueda dañar el servicio o a otros usuarios."
    },
    {
      title: "4. Privacidad y Datos",
      content: "Senko Bot recopila datos mínimos necesarios para su funcionamiento, como IDs de usuario y servidor, configuraciones básicas y estados temporales (como AFK). No recopilamos ni almacenamos contenido de mensajes personales."
    },
    {
      title: "5. Disponibilidad del Servicio",
      content: "Aunque nos esforzamos por mantener Senko Bot disponible 24/7, no garantizamos un tiempo de actividad del 100%. El servicio puede experimentar interrupciones por mantenimiento, actualizaciones o problemas técnicos."
    },
    {
      title: "6. Limitaciones de Responsabilidad",
      content: "Senko Bot se proporciona sin garantías de ningún tipo. No somos responsables de daños directos, indirectos, incidentales o consecuentes que puedan resultar del uso del bot."
    },
    {
      title: "7. Modificaciones del Servicio",
      content: "Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de Senko Bot en cualquier momento sin previo aviso. También podemos actualizar estos términos ocasionalmente."
    },
    {
      title: "8. Terminación",
      content: "Podemos terminar o suspender el acceso a Senko Bot inmediatamente, sin previo aviso, por cualquier motivo, incluyendo la violación de estos Términos de Servicio."
    },
    {
      title: "9. Cumplimiento con Discord",
      content: "El uso de Senko Bot debe cumplir con los Términos de Servicio y Pautas de la Comunidad de Discord. Cualquier violación puede resultar en la restricción del acceso al bot."
    },
    {
      title: "10. Contacto",
      content: "Si tienes preguntas sobre estos Términos de Servicio, puedes contactarnos a través de nuestro servidor de Discord de soporte o usando el comando /help en el bot."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Términos de Servicio | Senko Bot</title>
        <meta name="description" content="Lee los términos de servicio de Senko Bot. Conoce tus derechos y responsabilidades al usar nuestro bot de Discord." />
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
                  alt="Senko"
                 src="https://cdn.senko.nekomera.xyz/webpage/senkoglasses.webp" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Términos de Servicio
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Información importante sobre el uso de Senko Bot
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Última actualización: 27 de junio de 2025
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 mb-12"
              >
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-amber-400 mb-2">Aviso Importante</h3>
                    <p className="text-amber-400/80">
                      Por favor, lee estos términos cuidadosamente antes de usar Senko Bot. 
                      Al usar nuestro servicio, aceptas estar sujeto a estos términos y condiciones.
                    </p>
                  </div>
                </div>
              </motion.div>

              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                  className="mb-8"
                >
                  <div className="bg-card/60 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-border/50">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-foreground mb-4">
                          {section.title}
                        </h2>
                        <p className="text-foreground/70 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-secondary/50 rounded-2xl p-8 text-center"
              >
                <div className="relative mb-6">
                  <img   
                    className="w-24 h-24 mx-auto rounded-full shadow-xl object-cover" 
                    alt="Senko"
                   src="https://cdn.senko.nekomera.xyz/webpage/senkobread.webp" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  ¿Tienes preguntas?
                </h3>
                <p className="text-foreground/70 mb-6">
                  Si tienes alguna duda sobre estos términos, no dudes en contactarnos. Responderemos lo antes posible.
                  Estamos aquí para ayudarte y asegurar que tengas la mejor experiencia con Senko.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  <span>Tu privacidad y seguridad son importantes para nosotros</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default TOS;