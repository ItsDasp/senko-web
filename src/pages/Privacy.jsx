import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Bot, Shield, Eye, Lock, Database, Trash2 } from 'lucide-react';

function Privacy() {
  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Información que Recopilamos",
      content: "Senko Bot recopila únicamente la información mínima necesaria para funcionar: IDs de usuario y servidor de Discord, configuraciones básicas del bot, estados AFK temporales, y registros de uso de comandos para estadísticas básicas."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Cómo Usamos tu Información",
      content: "Utilizamos la información recopilada para: proporcionar funcionalidades del bot, mantener estados AFK, generar estadísticas básicas de uso, y mejorar nuestros servicios. Nunca vendemos ni compartimos tu información con terceros."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Almacenamiento y Seguridad",
      content: "Todos los datos se almacenan de forma segura en servidores protegidos. Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información contra acceso no autorizado, alteración o destrucción."
    },
    {
      icon: <Trash2 className="w-6 h-6" />,
      title: "Retención de Datos",
      content: "Los estados AFK se eliminan automáticamente cuando el usuario vuelve a estar activo. Las configuraciones del servidor se mantienen mientras el bot esté en el servidor. Los registros de comandos se conservan por un período limitado solo para estadísticas."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Tus Derechos",
      content: "Tienes derecho a: saber qué información tenemos sobre ti, solicitar la eliminación de tus datos, corregir información incorrecta, y retirar el consentimiento en cualquier momento removiendo el bot de tu servidor."
    }
  ];

  const dataTypes = [
    {
      type: "IDs de Discord",
      description: "IDs únicos de usuarios y servidores para identificación",
      retention: "Mientras el bot esté en uso",
      purpose: "Funcionamiento básico del bot"
    },
    {
      type: "Estados AFK",
      description: "Razón y tiempo de ausencia cuando usas /afk",
      retention: "Hasta que vuelvas a estar activo",
      purpose: "Notificar a otros usuarios de tu ausencia"
    },
    {
      type: "Configuraciones",
      description: "Preferencias y configuraciones del servidor",
      retention: "Mientras el bot esté en el servidor",
      purpose: "Personalización del comportamiento del bot"
    },
    {
      type: "Registros de Comandos",
      description: "Estadísticas básicas de uso de comandos",
      retention: "Mientras el bot esté en uso",
      purpose: "Mejora del servicio y estadísticas"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Política de Privacidad | Senko Bot</title>
        <meta name="description" content="Conoce cómo Senko Bot protege tu privacidad. Información detallada sobre qué datos recopilamos y cómo los usamos." />
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
                 src="https://cdn.senko.nekomera.xyz/webpage/1041550318602821804.webp" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Política de Privacidad
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Tu privacidad es importante para nosotros. Aquí te explicamos cómo protegemos tu información.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Última actualización: 27 de junio de 2025
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mb-12"
              >
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-green-400 mb-2">Compromiso con la Privacidad</h3>
                    <p className="text-green-400/80">
                      Senko Bot está diseñado con la privacidad en mente. Recopilamos solo la información 
                      mínima necesaria para funcionar y nunca compartimos tus datos con terceros.
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent text-center">
                  Principios de Privacidad
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sections.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="bg-card/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/50 h-full"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                        <div className="text-white">
                          {section.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-foreground mb-3">
                        {section.title}
                      </h3>
                      
                      <p className="text-foreground/70 leading-relaxed text-sm">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent text-center">
                  Tipos de Datos que Manejamos
                </h2>
                
                <div className="bg-card/60 backdrop-blur-sm rounded-xl shadow-lg border border-border/50 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-secondary/50">
                        <tr>
                          <th className="px-6 py-4 text-left font-semibold text-foreground">Tipo de Dato</th>
                          <th className="px-6 py-4 text-left font-semibold text-foreground">Descripción</th>
                          <th className="px-6 py-4 text-left font-semibold text-foreground">Retención</th>
                          <th className="px-6 py-4 text-left font-semibold text-foreground">Propósito</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {dataTypes.map((data, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 font-medium text-foreground">{data.type}</td>
                            <td className="px-6 py-4 text-foreground/70">{data.description}</td>
                            <td className="px-6 py-4 text-foreground/70">{data.retention}</td>
                            <td className="px-6 py-4 text-foreground/70">{data.purpose}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-secondary/50 rounded-2xl p-8"
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <img   
                      className="w-24 h-24 mx-auto rounded-full shadow-xl object-cover" 
                      alt="Senko"
                     src="https://i.imgur.com/j1Fq3qA.png" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    ¿Necesitas Eliminar tus Datos?
                  </h3>
                  <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
                    Si deseas que eliminemos toda la información asociada con tu usuario o servidor, 
                    simplemente contáctanos en nuestro servidor de Discord. Procesaremos tu solicitud 
                    de manera rápida y completa.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm max-w-lg mx-auto">
                    <div className="bg-card/40 rounded-lg p-4">
                      <Lock className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                      <span className="font-semibold text-foreground">Datos Seguros</span>
                      <p className="text-muted-foreground mt-1">Encriptación y protección</p>
                    </div>
                    <div className="bg-card/40 rounded-lg p-4">
                      <Trash2 className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                      <span className="font-semibold text-foreground">Eliminación Fácil</span>
                      <p className="text-muted-foreground mt-1">Solicita borrar tus datos</p>
                    </div>
                    <div className="bg-card/40 rounded-lg p-4">
                      <Shield className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                      <span className="font-semibold text-foreground">Sin Terceros</span>
                      <p className="text-muted-foreground mt-1">Nunca compartimos datos</p>
                    </div>
                  </div>
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

export default Privacy;