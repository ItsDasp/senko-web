import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Bot, Shield, AlertTriangle, FileText, Download } from 'lucide-react';

function TOS() {
  const sections = [
    {
      title: "1. Aceptación de los Términos",
      content: "Al invitar o usar Senko Bot en un servidor de Discord, confirmas que has leído y aceptas estos Términos de Servicio. Si no estás de acuerdo, no debes usar el Servicio y puedes solicitar la eliminación de tus datos según la Política de Privacidad."
    },
    {
      title: "2. Descripción del Servicio",
      content: "Senko Bot es un proyecto independiente no afiliado a Discord que ofrece herramientas de moderación, automoderación, niveles, economía virtual, interacciones sociales, tickets, sugerencias, recordatorios, cumpleaños y otras utilidades que pueden cambiar con el tiempo."
    },
    {
      title: "3. Uso Aceptable",
      content: "Te comprometes a usar el Servicio de forma responsable y legal. Está prohibido usarlo para actividades ilícitas, spam, acoso, difusión de contenido que infrinja derechos de terceros, evadir sistemas de seguridad o explotar vulnerabilidades del bot o de Discord."
    },
    {
      title: "4. Privacidad y Datos",
      content: "El tratamiento de datos personales se rige por la Política de Privacidad de Senko Bot, donde se describen las categorías de datos tratados, las finalidades, la base legal, los plazos de conservación y los derechos del usuario. Al usar el Servicio aceptas dicho tratamiento."
    },
    {
      title: "5. Disponibilidad del Servicio",
      content: "El Servicio se ofrece tal cual y según disponibilidad. Puede sufrir interrupciones por mantenimiento, fallos técnicos, cambios en la API de Discord u otros factores externos, sin garantía de funcionamiento continuo ni derecho a compensación."
    },
    {
      title: "6. Limitaciones de Responsabilidad",
      content: "En la máxima medida permitida por la ley, el desarrollador de Senko Bot no será responsable de daños indirectos, incidentales, especiales o consecuenciales derivados del uso o imposibilidad de uso del Servicio, ni de decisiones de moderación tomadas por administradores de servidores."
    },
    {
      title: "7. Modificaciones del Servicio",
      content: "Podemos añadir, modificar o retirar comandos y funcionalidades del Servicio, así como actualizar estos Términos para adaptarlos a cambios legales, técnicos o organizativos. El uso continuado del bot tras los cambios implica la aceptación de la versión vigente."
    },
    {
      title: "8. Terminación",
      content: "Podemos restringir o suspender el uso del Servicio para determinados usuarios o servidores cuando existan indicios razonables de abuso, uso malintencionado o incumplimiento de estos Términos o de las normas de Discord, sin obligación de aviso previo."
    },
    {
      title: "9. Cumplimiento con Discord",
      content: "Senko Bot opera sobre la plataforma de Discord y respeta sus condiciones para desarrolladores. Debes cumplir tanto estos Términos como los Términos de Servicio y Normas de la Comunidad de Discord; las infracciones pueden conllevar medidas por parte de Discord y/o la restricción de acceso al bot."
    },
    {
      title: "10. Contacto",
      content: (
        <>
        Si tienes preguntas sobre estos Términos de Servicio o sobre el uso de Senko Bot, puedes contactarnos a través de nuestro servidor de soporte en Discord o usando el comando /help en el bot. También puedes escribirnos al correo{' '}
        <a
            href="mailto:senko@nekomera.xyz"
            className="text-orange-500 font-semibold hover:text-orange-600 "
          >
            senko@nekomera.xyz
          </a>{' '}o a{' '}
          <a
            href="mailto:contacto@xdasp.me"
            className="text-orange-500 font-semibold hover:text-orange-600 "
          >
            contacto@xdasp.me
          </a>. Los datos que nos facilites para soporte se tratarán solo para gestionar tu consulta, de acuerdo con la Política de Privacidad.
        </>
      )
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
                Condiciones legales para usar Senko Bot en tu servidor de Discord
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Última actualización: 10 de diciembre de 2025
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
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mb-10 text-center"
              >
                <p className="text-foreground/70 mb-4">
                  También puedes descargar la versión completa de los Términos de
                  Servicio en un documento para revisarlos con más detalle.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <a
                    href="/Senko - Terminos de Servicio.docx"
                    download
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Descargar Términos de Servicio (.docx)
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="bg-secondary/50 rounded-2xl p-8 text-center"
              >
                <div className="relative mb-6 w-24 h-24 mx-auto rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                  <img   
                    className="w-20 h-20 object-contain" 
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