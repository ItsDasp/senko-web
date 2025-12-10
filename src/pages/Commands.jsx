import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Search, 
  Heart, 
  Users, 
  Shield, 
  Coffee, 
  Sparkles,
  Clock,
  Image,
  Bot,
  Smile,
  Rabbit, 
  ShieldCheck,
  Gift,
  Brush,
  Info,
  Ticket,
  Workflow,
  CalculatorIcon,
  LanguagesIcon,
  Home
} from 'lucide-react';

function Commands() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const commands = [
    {
      command: "/help",
      description: "Muestra todos los comandos disponibles de Senko",
      category: "general",
      usage: "/help [comando opcional]",
      icon: <Bot className="w-5 h-5" />
    },
    {
      command: "/weather",
      description: "Consulta el clima de cualquier ciudad",
      category: "utility",
      usage: "/weather [ciudad] [tipo]",
      icon: <Coffee className="w-5 h-5" />
    },
    {
      command: "/math",
      description: "Realiza operaciones matematicas",
      category: "utility",
      usage: "/math [operación]",
      icon: <CalculatorIcon className="w-5 h-5" />
    },
    {
      command: "/api",
      description: "Realiza peticiones a ApiRests",
      category: "utility",
      usage: "/api [url] [apikey opcional]",
      icon: <CalculatorIcon className="w-5 h-5" />
    },
    {
      command: "/translate",
      description: "Traduce de un idioma a otro",
      category: "utility",
      usage: "/translate [texto original] [idioma destino]",
      icon: <LanguagesIcon className="w-5 h-5" />
    },
    {
      command: "/support",
      description: "Obtén información de soporte y enlaces utiles",
      category: "utility",
      usage: "/support",
      icon: <Users className="w-5 h-5" />
    },

    {
      command: "/utility bigemoji",
      description: "Muestra un emoji personalizado en mayor tamaño",
      category: "utility",
      usage: "/utility bigemoji [nombre emoji]",
      icon: <Users className="w-5 h-5" />
    },
    {
      command: "/utility ocr",
      description: "Extrae texto de una imagen",
      category: "utility",
      usage: "/utility ocr",
      icon: <Users className="w-5 h-5" />
    },
    {
      command: "/utility download",
      description: "Descarga videos de redes sociales (Instagram, YouTube, etc...)",
      category: "utility",
      usage: "/utility download [url]",
      icon: <Users className="w-5 h-5" />
    },
    {
      command: "/utility base64 encode",
      description: "Codifca un texto en Base 64",
      category: "utility",
      usage: "/utility base64 encode [texto]",
      icon: <Users className="w-5 h-5" />
    },
    {
      command: "/utility base64 decode",
      description: "Decodifica un texto en Base 64",
      category: "utility",
      usage: "/utility base64 decode [texto]",
      icon: <Users className="w-5 h-5" />
    },
    {
      command: "/utility color rgb",
      description: "Convierte un color RGB a HEX",
      category: "utility",
      usage: "/utility color hex [rgb]",
      icon: <Users className="w-5 h-5" />
    },
    {
      command: "/utility color hex",
      description: "Convierte un color HEX a RGB",
      category: "utility",
      usage: "/utility color hex [hex]",
      icon: <Users className="w-5 h-5" />
    },
    {
      command: "/utility random color",
      description: "Genera un color aleatorio",
      category: "utility",
      usage: "/utility random color",
      icon: <Users className="w-5 h-5" />
    },
    {
      command: "/utility random user",
      description: "Elige un miembro aleatorio del servidor",
      category: "utility",
      usage: "/utility random member [rol opcional]",
      icon: <Users className="w-5 h-5" />
    },
    {
      command: "/todo list",
      description: "Muestra tu lista de tareas",
      category: "utility",
      usage: "/todo list",
      icon: <Users className="w-5 h-5" />
    },
    {
      command: "/todo add",
      description: "Agrega una tarea a tu lista",
      category: "utility",
      usage: "/todo add",
      icon: <Users className="w-5 h-5" />
    },
    {
      command: "/todo delete",
      description: "Elimina una tarea de tu lista",
      category: "utility",
      usage: "/todo delete [id tarea]",
      icon: <Users className="w-5 h-5" />
    },
    {
      command: "/todo complete",
      description: "Marca una tarea de tu lista como completada",
      category: "utility",
      usage: "/todo complete [id tarea]",
      icon: <Users className="w-5 h-5" />
    },
    {
      command: "/todo edit",
      description: "Edita una tarea de tu lista",
      category: "utility",
      usage: "/todo edit [id tarea]",
      icon: <Users className="w-5 h-5" />
    },
    {
      command: "/reminder set",
      description: "Establece un recordatorio",
      category: "utility",
      usage: "/reminder set [mensaje] [tiempo] [destino]",
      icon: <Clock className="w-5 h-5" />
    },
    {
      command: "/reminder cancel",
      description: "Cancela un recordatorio",
      category: "utility",
      usage: "/reminder cancel [id recordatorio]",
      icon: <Clock className="w-5 h-5" />
    },
    {
      command: "/reminder list",
      description: "Muestra tu lista de recordatorios",
      category: "utility",
      usage: "/reminder list",
      icon: <Clock className="w-5 h-5" />
    },
    {
      command: "/reminder presets add",
      description: "Crea un preset de recordatorios",
      category: "utility",
      usage: "/reminder presets add [nombre] [tiempo] [mensaje] [destino]",
      icon: <Clock className="w-5 h-5" />
    },
    {
      command: "/reminder presets list",
      description: "Muestra tu lista de presets para recordatorios",
      category: "utility",
      usage: "/reminder presets list",
      icon: <Clock className="w-5 h-5" />
    },
    {
      command: "/reminder presets use",
      description: "Usa un preset de recordatorio",
      category: "utility",
      usage: "/reminder presets use [nombre preset]",
      icon: <Clock className="w-5 h-5" />
    },
    {
      command: "/reminder presets remove",
      description: "Elimina un preset de recordatorio existente",
      category: "utility",
      usage: "/reminder presets remove [nombre preset]",
      icon: <Clock className="w-5 h-5" />
    },
    {
      command: "/reminder presets clear",
      description: "Elimina todos los preset de recordatorio existentes",
      category: "utility",
      usage: "/reminder presets clear",
      icon: <Clock className="w-5 h-5" />
    },
    {
      command: "/afk set",
      description: "Establece tu estado como ausente con una razón opcional",
      category: "utility",
      usage: "/afk set [razón]",
      icon: <Clock className="w-5 h-5" />
    },
    {
      command: "/afk mod ignored",
      description: "Muestra la lista de canales ignorados",
      category: "utility",
      usage: "/afk mod ignored",
      icon: <Clock className="w-5 h-5" />
    },
    {
      command: "/afk mod list",
      description: "Muestra una lista de todos los usuarios que estan inactivos en el servidor",
      category: "utility",
      usage: "/afk mod list",
      icon: <Clock className="w-5 h-5" />
    },
    {
      command: "/afk mod ignore",
      description: "Añade un canal a la lista de ignorados. Cuando hables en un canal en esa lista, no se te irá el estado AFK",
      category: "utility",
      usage: "/afk mod ignore [#canal]",
      icon: <Clock className="w-5 h-5" />
    },
    {
      command: "/afk mod remove",
      description: "Remueve el estado AFK de un usuario",
      category: "utility",
      usage: "/afk mod remove [@usuario]",
      icon: <Clock className="w-5 h-5" />
    },
    {
      command: "/afk mod removeall",
      description: "Remueve a todos los usuarios del modo AFK",
      category: "utility",
      usage: "/afk mod removeall",
      icon: <Clock className="w-5 h-5" />
    },
    {
      command: "/afk mod reset",
      description: "Elimina el motivo de ausencia de un usuario",
      category: "utility",
      usage: "/afk mod reset [@usuario]",
      icon: <Clock className="w-5 h-5" />
    },
    {
      command: "/afk mod unignore",
      description: "Remueve un canal de la lista de ignorados",
      category: "utility",
      usage: "/afk mod unignore [#canal]",
      icon: <Clock className="w-5 h-5" />
    },
    {
      command: "/birthday list",
      description: "Muestra la lista de cumpleaños del servidor",
      category: "utility",
      usage: "/birthday list [mes opcional]",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      command: "/birthday info",
      description: "Muestra la información del cumpleaños que tengas guardado",
      category: "utility",
      usage: "/birthday info",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      command: "/birthday set",
      description: "Establece la fecha de tu cumpleaños",
      category: "utility",
      usage: "/birthday set [fecha dd/mm/aaaa]",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      command: "/birthday remove",
      description: "Elimina tu fecha de cumpleaños",
      category: "utility",
      usage: "/birthday remove",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      command: "/birthday allow",
      description: "Permite que se muestre tu cumpleaños en la lista de un servidor en especifico (o en todos si no se especifica)",
      category: "utility",
      usage: "/birthday allow [todos opcional]",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      command: "/birthday deny",
      description: "No permite que se muestre tu cumpleaños en la lista de un servidor en especifico (o en todos si no se especifica)",
      category: "utility",
      usage: "/birthday deny [todos opcional]",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      command: "/birthday config",
      description: "Configura las opciones de cumpleaños del servidor",
      category: "utility",
      usage: "/birthday config",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      command: "/birthday setup",
      description: "Configura el sistema de cumpleaños del servidor mediante un asistente paso a paso",
      category: "utility",
      usage: "/birthday setup",
      icon: <Sparkles className="w-5 h-5" />
    },

    {
      command: "/search google image",
      description: "Busca imágenes en Google y las muestra en el chat",
      category: "info",
      usage: "/search google image [término de búsqueda]",
      icon: <Info className="w-5 h-5" />
    },
    {
      command: "/search google web",
      description: "Busca webs en Google",
      category: "info",
      usage: "/search google web [término de búsqueda]",
      icon: <Info className="w-5 h-5" />
    },   
    {
      command: "/search wiki",
      description: "Busca información en WikiPedia",
      category: "info",
      usage: "/search wiki [término de búsqueda]",
      icon: <Info className="w-5 h-5" />
    },
    {
      command: "/search anime",
      description: "Busca información sobre un anime",
      category: "info",
      usage: "/search [anime a buscar]",
      icon: <Info className="w-5 h-5" />
    },
    {
      command: "/search lyrics",
      description: "Busca la letra de alguna canción",
      category: "info",
      usage: "/search [nombre canción]",
      icon: <Info className="w-5 h-5" />
    },
    {
      command: "/search osu osuinfo",
      description: "Busca información sobre algun usuario de Osu",
      category: "info",
      usage: "/search osu osuinfo [nombre de usuario] [modo de juego]",
      icon: <Info className="w-5 h-5" />
    },
    {
      command: "/search twitch",
      description: "Busca información sobre algun usuario de Twitch",
      category: "info",
      usage: "/search twitch [canal de Twitch]",
      icon: <Info className="w-5 h-5" />
    },
    {
      command: "/interact hug",
      description: "Dale un abrazo a otro usuario",
      category: "interaction",
      usage: "/interact hug [@usuario]",
      icon: <Smile className="w-5 h-5" />
    },
    {
      command: "/interact kiss",
      description: "Dale un beso a otro usuario",
      category: "interaction",
      usage: "/interact kiss [@usuario]",
      icon: <Smile className="w-5 h-5" />
    },
    {
      command: "/interact pat",
      description: "Dale caricias a otro usuario",
      category: "interaction",
      usage: "/interact pat [@usuario]",
      icon: <Smile className="w-5 h-5" />
    },
    {
      command: "/interact bang",
      description: "Disparale a alguien",
      category: "interaction",
      usage: "/interact bang [@usuario]",
      icon: <Smile className="w-5 h-5"/>
    },
    {
      command: "/interact feed",
      description: "Alimenta a alguien",
      category: "interaction",
      usage: "/interaction feed [@usuario]",
      icon: <Smile className="w-5 h-5"/>
    },
    {
      command: "/interact bite",
      description: "Muerde a otro usuario",
      category: "interaction",
      usage: "/interaction bite [@usuario]",
      icon: <Smile className="w-5 h-5"/>
    },
    {
      command: "/interact slap",
      description: "Dale una bofetada a otro usuario",
      category: "interaction",
      usage: "/interaction slap [@usuario]",
      icon: <Smile className="w-5 h-5"/>
    },
    {
      command: "/interact cuddle",
      description: "Acurrucate con alguien",
      category: "interaction",
      usage: "/interaction cuddle [@usuario]",
      icon: <Smile className="w-5 h-5"/>
    },

    {
      command: "/8ball",
      description: "Preguntale a la bola tu destino",
      category: "fun",
      usage: "/8ball [pregunta]",
      icon: <Smile className="w-5 h-5"/>
    },
    {
      command: "/flood",
      description: "Juega una partida de flood",
      category: "fun",
      usage: "/flood",
      icon: <Smile className="w-5 h-5"/>
    },
    {
      command: "/read",
      description: "Lee el manga de Senko",
      category: "fun",
      usage: "/read [marcado opcional]",
      icon: <Smile className="w-5 h-5"/>
    },
    {
      command: "/ship",
      description: "Shipea dos usuarios",
      category: "fun",
      usage: "/ship [@usuario1] [@usuario2]",
      icon: <Smile className="w-5 h-5"/>
    },
    {
      command: "/speedtype",
      description: "Juega una partida de SpeedType",
      category: "fun",
      usage: "/speedtype",
      icon: <Smile className="w-5 h-5"/>
    },
    {
      command: "/tictactoe",
      description: "Juega una partida de TTT (o gato)",
      category: "fun",
      usage: "/tictactoe [@usuario]",
      icon: <Smile className="w-5 h-5"/>
    },
    {
      command: "/tweet",
      description: "Genera una imagen como si fuese un Tweet",
      category: "fun",
      usage: "/tweet [texto]",
      icon: <Smile className="w-5 h-5"/>
    },


    {
      command: "/ban",
      description: "Veta a alguien de tu servidor",
      category: "moderation",
      usage: "/ban [@usuario] [razón opcional]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/kick",
      description: "Expulsa a alguien de tu servidor",
      category: "moderation",
      usage: "/kick [@usuario] [razón opcional]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/mute",
      description: "Silencia a alguien de tu servidor",
      category: "moderation",
      usage: "/mute [@usuario] [razón opcional]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/silentban",
      description: "Veta a alguien de tu servidor sin mandarle un aviso",
      category: "moderation",
      usage: "/silentban [@usuario] [razón opcional]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/silentkick",
      description: "Expulsa a alguien de tu servidor sin mandarle un aviso",
      category: "moderation",
      usage: "/silentkick [@usuario] [razón opcional]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/voicekick",
      description: "Expulsa a alguien de un canal de voz",
      category: "moderation",
      usage: "/voicekick [@usuario]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/voicemove",
      description: "Mueve a alguien de un canal de voz",
      category: "moderation",
      usage: "/voicemove [@usuario]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/voicemute",
      description: "Silencia a alguien de un canal de voz",
      category: "moderation",
      usage: "/voicemute [@usuario]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/voiceunmute",
      description: "Quita el silencio a alguien de un canal de voz",
      category: "moderation",
      usage: "/voiceunmute [@usuario]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/warn add",
      description: "Dale una advertencia a un usuario",
      category: "moderation",
      usage: "/warn add [@usuario] [razón opcional]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/warn remove",
      description: "Remueve una advertencia a un usuario",
      category: "moderation",
      usage: "/warn remove [@usuario] [numero warn]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/warn list",
      description: "Muestra las advertencias de un usuario",
      category: "moderation",
      usage: "/warn list [@usuario]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/clear cantidad",
      description: "Borra una cantidad de mensajes",
      category: "moderation",
      usage: "/clear cantidad [cantidad]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/clear adjuntos",
      description: "Borra una cantidad de mensajes que contengan adjuntos",
      category: "moderation",
      usage: "/clear adjuntos [cantidad]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/clear bots",
      description: "Borra una cantidad de mensajes de bots",
      category: "moderation",
      usage: "/clear bots [cantidad]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/clear emojis",
      description: "Borra una cantidad de mensajes que contengan emojis",
      category: "moderation",
      usage: "/clear emojis [cantidad]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/clear palabra",
      description: "Borra una cantidad de mensajes que contengan una palara en especifico",
      category: "moderation",
      usage: "/clear palabra [palabra] [cantidad]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/clear embeds",
      description: "Borra una cantidad de mensajes que sean embeds",
      category: "moderation",
      usage: "/clear embeds [cantidad]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/clear menciones",
      description: "Borra una cantidad de mensajes que contengan menciones",
      category: "moderation",
      usage: "/clear menciones [cantidad]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/clear urls",
      description: "Borra una cantidad de mensajes que contengan URLs",
      category: "moderation",
      usage: "/clear urls [cantidad]",
      icon: <Shield className="w-5 h-5"/>
    },
    {
      command: "/clear user",
      description: "Borra una cantidad de mensajes de un usuario en especifico",
      category: "moderation",
      usage: "/clear user [@usuario] [cantidad]",
      icon: <Shield className="w-5 h-5"/>
    },


    {
      command: "/animal cat",
      description: "Muestra una imagen aleatoria de un gato",
      category: "animals",
      usage: "/animal cat",
      icon: <Rabbit className="w-5 h-5"/>
    },
    {
      command: "/animal dog",
      description: "Muestra una imagen aleatoria de un perro",
      category: "animals",
      usage: "/animal dog",
      icon: <Rabbit className="w-5 h-5"/>
    },
    {
      command: "/animal fox",
      description: "Muestra una imagen aleatoria de un zorro",
      category: "animals",
      usage: "/animal fox",
      icon: <Rabbit className="w-5 h-5"/>
    },
    {
      command: "/animal panda",
      description: "Muestra una imagen aleatoria de un panda",
      category: "animals",
      usage: "/animal panda",
      icon: <Rabbit className="w-5 h-5"/>
    },
    {
      command: "/animal bird",
      description: "Muestra una imagen aleatoria de un pájaro",
      category: "animals",
      usage: "/animal bird",
      icon: <Rabbit className="w-5 h-5"/>
    },
    {
      command: "/animal kangaroo",
      description: "Muestra una imagen aleatoria de un canguro",
      category: "animals",
      usage: "/animal kangaroo",
      icon: <Rabbit className="w-5 h-5"/>
    },
    {
      command: "/animal koala",
      description: "Muestra una imagen aleatoria de un koala",
      category: "animals",
      usage: "/animal koala",
      icon: <Rabbit className="w-5 h-5"/>
    }
  ];

  const categories = [
    { value: 'all', label: 'Todos los Comandos', icon: <Bot className="w-4 h-4" /> },
    { value: 'general', label: 'General', icon: <Bot className="w-4 h-4" /> },
    { value: 'fun', label: 'Diversión', icon: <Heart className="w-4 h-4" /> },
    { value: 'utility', label: 'Utilidades', icon: <Coffee className="w-4 h-4" /> },
    { value: 'moderation', label: 'Moderación', icon: <Shield className="w-4 h-4" /> },
    { value: 'interaction', label: 'Interacción', icon: <Smile className="w-4 h-4"/>},
    { value: 'info', label: "Información", icon: <Info className="w-4 h-4"/>},
    { value: 'animals', label: "Animales", icon: <Rabbit className="w-4 h-4"/>},
  ];

  const filteredCommands = useMemo(() => {
    return commands.filter(cmd => {
      const matchesSearch = cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cmd.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || cmd.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getCategoryColor = (category) => {
    const colors = {
      general: 'from-blue-400 to-cyan-400',
      info: 'from-yellow-400 to-orange-400',
      fun: 'from-pink-400 to-rose-400',
      utility: 'from-green-400 to-emerald-400',
      moderation: 'from-red-400 to-orange-400',
      interaction: 'from-purple-400 to-pink-400',
      animals: 'from-teal-400 to-cyan-400',
    };
    return colors[category] || 'from-gray-400 to-gray-500';
  };

  return (
    <>
      <Helmet>
        <title>Comandos - Senko Bot</title>
        <meta name="description" content="Explora todos los comandos disponibles de Senko Bot. Desde comandos divertidos hasta utilidades y moderación." />
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
                  alt="Senko San Commands"
                  src="https://cdn.senko.nekomera.xyz/webpage/senkoreading.webp"/>
              </div>

              
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Comandos de Senko
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                Explora todas las formas en que puedo ayudarte a potenciar tu servidor
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                      placeholder="Buscar comandos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-background border-orange-200/50 dark:border-orange-500/20 focus:border-orange-400 dark:focus:border-orange-500"
                    />
                  </div>
                  <div className="md:w-64">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="bg-background border-orange-200/50 dark:border-orange-500/20 focus:border-orange-400 dark:focus:border-orange-500">
                        <SelectValue placeholder="Categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            <div className="flex items-center space-x-2">
                              {category.icon}
                              <span>{category.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="text-center text-muted-foreground">
                  <span className="font-semibold text-orange-500">{filteredCommands.length}</span> comandos encontrados
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCommands.map((cmd, index) => (
                <motion.div
                  key={cmd.command}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-border/50 h-full flex flex-col">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getCategoryColor(cmd.category)} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {cmd.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-foreground mb-2">
                          <code className="bg-muted px-2 py-1 rounded text-orange-500 text-sm">
                            {cmd.command}
                          </code>
                        </h3>
                        <span className="inline-block px-2 py-1 bg-orange-500/10 text-orange-500 text-xs rounded-full font-semibold mb-2">
                          {categories.find(cat => cat.value === cmd.category)?.label}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-foreground/70 mb-4 leading-relaxed flex-grow">
                      {cmd.description}
                    </p>
                    
                    <div className="border-t border-border pt-4 mt-auto">
                      <p className="text-sm text-muted-foreground font-medium">Uso:</p>
                      <code className="text-sm bg-muted px-2 py-1 rounded text-foreground/80 block mt-1">
                        {cmd.usage}
                      </code>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredCommands.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="relative mb-8">
                  <img   
                    className="w-32 h-32 mx-auto rounded-full shadow-xl" 
                    alt="Senko-san"
                   src="https://cdn.senko.nekomera.xyz/webpage/senkoreading.webp" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  No se encontraron comandos
                </h3>
                <p className="text-foreground/70">
                  Intenta ajustar tu búsqueda o cambiar la categoría seleccionada
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Commands;