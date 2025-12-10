import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp, Bot, HelpCircle } from 'lucide-react';

function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqs = [
    {
      question: "¿Cómo invito a Senko a mi servidor?",
      answer: "Puedes invitar a Senko haciendo clic en el botón 'Invitar a Discord' en nuestra página principal. Necesitarás permisos de administrador en tu servidor para poder añadir bots."
    },
    {
      question: "¿Senko es gratuito?",
      answer: "¡Sí! Senko es completamente gratuito para usar. Todos los comandos y características están disponibles sin costo alguno para tu servidor."
    },
    {
      question: "¿Cómo funciona el comando /afk?",
      answer: "El comando /afk te permite establecer un estado de ausencia. Cuando alguien te mencione, Senko automáticamente les informará que estás ausente y mostrará la razón que proporcionaste (si la hay)."
    },
    {
      question: "¿Puedo usar el comando /search google image de forma segura?",
      answer: "Sí, Senko utiliza filtros de seguridad para asegurar que las imágenes mostradas sean apropiadas. Sin embargo, recomendamos supervisión en servidores con menores de edad."
    },
    {
      question: "¿Qué permisos necesita Senko?",
      answer: "Senko necesita permisos básicos como leer mensajes, enviar mensajes, insertar enlaces, y usar comandos de barra. Para comandos de moderación, necesitará permisos adicionales como gestionar mensajes, expulsar miembros, etc."
    },
    {
      question: "¿Senko guarda información de mi servidor?",
      answer: "Senko solo guarda información mínima necesaria para funcionar, como configuraciones del servidor y estados AFK temporales. No guardamos contenido de mensajes ni información personal."
    },
    {
      question: "¿Cómo reporto un problema o bug?",
      answer: "Puedes reportar problemas en nuestro servidor de soporte de Discord. También puedes usar el comando /help para obtener información de contacto."
    },
    {
      question: "¿Senko tiene comandos de música?",
      answer: "Actualmente Senko no incluye comandos de música. Nos enfocamos en comandos de utilidad, diversión y moderación para crear una experiencia acogedora en tu servidor."
    },
    {
      question: "¿Puedo personalizar las respuestas de Senko?",
      answer: "Por el momento, las respuestas de Senko están predefinidas para mantener su personalidad única. Estamos considerando opciones de personalización para futuras actualizaciones."
    },
    {
      question: "¿Senko funciona en todos los idiomas?",
      answer: "Senko está principalmente diseñado en español, pero puede entender comandos básicos en inglés. Estamos trabajando en soporte multiidioma para futuras versiones."
    },
    {
      question: "¿Hay límites en el uso de comandos?",
      answer: "Senko tiene límites de velocidad básicos para prevenir spam, pero son muy generosos para uso normal. La mayoría de usuarios nunca alcanzarán estos límites."
    },
    {
      question: "¿Cómo puedo obtener soporte técnico?",
      answer: (
        <>
          Puedes unirte a nuestro servidor de soporte de Discord donde nuestro equipo y la comunidad pueden ayudarte con cualquier pregunta o problema que tengas. También puedes comunicarte con nosotros a través del correo{' '}
          <a
            href="mailto:senko@nekomera.xyz"
            className="text-orange-500 font-semibold hover:text-orange-600 "
          >
            senko@nekomera.xyz
          </a>.
        </>
      )
    },
    {
      question: "¿Como funciona el sistema de cumpleaños?",
      answer: "Puedes registrar tu cumpleaños usando el comando /birthday set [dd/mm/aaaa]. Senko te felicitará en los servidores que estes y este configurado el sistema. Los administradores pueden configurar un canal específico para las felicitaciones con /birthday config."
    }
  ];

  return (
    <>
      <Helmet>
        <title>FAQ - Preguntas Frecuentes | Senko Bot</title>
        <meta name="description" content="Encuentra respuestas a las preguntas más frecuentes sobre Senko Bot. Aprende cómo usar los comandos y resolver problemas comunes." />
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
              src="https://cdn.senko.nekomera.xyz/webpage/senkopose.webp"
            />
          </div>


              
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent leading-tight pb-2">
                Preguntas Frecuentes
              </h1>

              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                ¿Tienes dudas sobre Senko? Aquí encontrarás las respuestas más comunes
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="mb-4"
                >
                  <div className="bg-card/60 backdrop-blur-sm rounded-xl shadow-lg border border-border/50 overflow-hidden">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-accent transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <HelpCircle className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground pr-4">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {openItems[index] ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </button>
                    
                    {openItems[index] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <div className="pl-14 pr-4">
                          <p className="text-foreground/70 leading-relaxed mt-2">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-16"
            >
              <div className="bg-secondary/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="relative mb-6 w-24 h-24 mx-auto rounded-full shadow-lg flex items-center justify-center overflow-hidden">
              <img   
                className="w-20 h-20 object-contain" 
                alt="Senko"
                src="https://cdn.senko.nekomera.xyz/webpage/senkobread.webp"
              />
            </div>
                
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  ¿No encontraste tu respuesta?
                </h3>
                <p className="text-foreground/70 mb-6 pr-4 pl-4">
                  ¡No te preocupes! Puedes contactarnos directamente en nuestro servidor de Discord 
                  o usar el comando  <code className="bg-muted px-2 py-1 rounded text-orange-500">/help</code> 
                   para obtener más información.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default FAQ;