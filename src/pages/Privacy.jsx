import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Bot, Shield, Eye, Lock, Database, Trash2, Download } from 'lucide-react';

function Privacy() {
  const sections = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Qué datos recopilamos",
      content: "El Servicio solo trata la información estrictamente necesaria para funcionar: identificadores de Discord, configuraciones del servidor, datos de niveles y economía virtual, registros de moderación y la información que introduces en tickets, sugerencias, recordatorios y cumpleaños."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Datos que no recopilamos",
      content: "No recopilamos contraseñas de Discord ni métodos de pago y no realizamos seguimiento de tu navegación web. Tampoco accedemos al contenido de tus mensajes privados (DM), ni entre usuarios ni dirigidos al bot, y no te pedimos datos sensibles como salud, religión u orientación sexual."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Para qué usamos los datos",
      content: "Usamos los datos para prestar las funciones del Servicio (moderación, logs, niveles, economía virtual y utilidades), personalizar la experiencia, mejorar el rendimiento y ayudar a mantener la seguridad de los servidores donde está activo."
    },
    {
      icon: <Trash2 className="w-6 h-6" />,
      title: "Almacenamiento y seguridad",
      content: "Los datos se guardan en una base de datos externa y en la infraestructura de Discord, aplicando medidas técnicas y organizativas razonables. Ninguna medida es absoluta, pero actuamos con diligencia ante incidentes y procuramos mitigar su impacto."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Tus derechos y control",
      content: "Puedes solicitar acceso, rectificación o eliminación de tus datos. También puedes pedir la supresión completa de la información asociada a tu usuario o servidor contactando con los canales de soporte indicados en la Política de Privacidad."
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Bases legales y Discord",
      content: "El tratamiento se basa en la prestación del servicio, intereses legítimos y, en algunos casos, tu consentimiento. El Servicio respeta las políticas para desarrolladores de Discord y solo usa los datos que su API pone a disposición."
    }
  ];

  const dataTypes = [
    {
      type: "IDs y metadatos de Discord",
      description: "IDs de usuario y servidor, nombres y otros datos básicos necesarios para identificar cuentas y servidores en Discord.",
      retention: "Mientras el Servicio permanezca activo y se use en el servidor",
      purpose: "Funcionamiento básico, estadísticas y diagnóstico del Servicio"
    },
    {
      type: "Configuraciones del servidor",
      description: "Preferencias de moderación, logs, canales configurados, ajustes de cumpleaños, sugerencias y otras opciones de administración.",
      retention: "Mientras el Servicio esté habilitado o hasta que un administrador las elimine",
      purpose: "Aplicar las funciones configuradas y personalizar el comportamiento en cada servidor"
    },
    {
      type: "Perfiles, niveles y economía",
      description: "Nivel, experiencia, monedas virtuales, logros e historial de interacciones sociales asociados a tu usuario.",
      retention: "Mientras sigas usando el Servicio o hasta que solicites su eliminación",
      purpose: "Ofrecer sistemas de progresión, gamificación y estadísticas sociales"
    },
    {
      type: "Moderación, tickets y utilidades",
      description: "Advertencias, registros de automoderación, información de tickets, sugerencias, recordatorios y tareas personales.",
      retention: "Mientras sean necesarios para moderación, soporte y funcionamiento de estas funciones",
      purpose: "Mantener la seguridad, gestionar soporte y proporcionar utilidades al Usuario"
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
                 src="https://cdn.senko.nekomera.xyz/webpage/senkoglasses.webp" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Política de Privacidad
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Tu privacidad es importante para nosotros. Aquí resumimos, de forma clara, qué datos recopila el Servicio, para qué los usa y cómo puedes ejercer tus derechos.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Última actualización: 10 de diciembre de 2025
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
                      Senko Bot está diseñado con la privacidad y el cumplimiento normativo en mente. Tratamos solo los datos necesarios, seguimos las políticas de Discord y no vendemos tus datos personales ni los cedemos con fines comerciales.
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
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-16 text-center"
              >
                <p className="text-foreground/70 mb-4">
                  También puedes descargar la versión completa de nuestra Política de
                  Privacidad en formato documento.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <a
                    href="/Senko - Politicas de Privacidad.docx"
                    download
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Descargar Política de Privacidad (.docx)
                  </a>
                </Button>
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
                     src="https://cdn.senko.nekomera.xyz/webpage/senkobread.webp" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    ¿Necesitas Eliminar tus Datos?
                  </h3>
                  <p className="text-foreground/70 mb-6 max-w-xl mx-auto">
                    Si deseas acceder, corregir o eliminar la información asociada con tu usuario o servidor, 
                    contáctanos en nuestro servidor de soporte indicando tu ID de usuario y, si aplica, el ID del servidor. Verificaremos tu identidad y procesaremos la solicitud en un plazo razonable.
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