import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Camera, Film, Sparkles, MessageCircle, CheckCircle, ArrowRight, Instagram, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import bannerHero from "@/assets/banner-hero.jpg";

const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=5511910859887&text=+Ola,+tudo+bem?+Preciso+de+um+or%C3%A7amento.";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

const portfolioItems = [
  {
    title: "Estética Automotiva Premium",
    desc: "Reel institucional com linguagem moderna e profissional.",
    thumb: "https://vz-70d65a72-a7b.b-cdn.net/98356ce0-fce1-4214-94fb-bb4982e9e71f/thumbnail_532821bc.jpg",
    videoId: "98356ce0-fce1-4214-94fb-bb4982e9e71f",
  },
  {
    title: "Apresentação de Marca",
    desc: "Posicionamento visual com identidade forte.",
    thumb: "https://vz-70d65a72-a7b.b-cdn.net/3068e599-a07a-4d91-b7e1-4663f26a3534/thumbnail.jpg",
    videoId: "3068e599-a07a-4d91-b7e1-4663f26a3534",
  },
  {
    title: "Lavagem Premium",
    desc: "Conteúdo que destaca processos e qualidade.",
    thumb: "https://vz-70d65a72-a7b.b-cdn.net/934b8d96-af41-408a-8392-99923a9dfc96/thumbnail.jpg",
    videoId: "934b8d96-af41-408a-8392-99923a9dfc96",
  },
  {
    title: "Vitrificação",
    desc: "Reel institucional de serviço especializado.",
    thumb: "https://vz-70d65a72-a7b.b-cdn.net/7747a14e-6a5a-4213-953d-18af9f45d79f/thumbnail.jpg",
    videoId: "7747a14e-6a5a-4213-953d-18af9f45d79f",
  },
  {
    title: "Antes e Depois",
    desc: "Transformação real com impacto visual.",
    thumb: "https://vz-70d65a72-a7b.b-cdn.net/a8b1f32b-0341-44e2-b53e-d8949dcdcbd1/thumbnail.jpg",
    videoId: "a8b1f32b-0341-44e2-b53e-d8949dcdcbd1",
  },
  {
    title: "Sem Riscos na Pintura",
    desc: "Conteúdo técnico com apelo visual.",
    thumb: "https://vz-70d65a72-a7b.b-cdn.net/781eb178-777d-48ab-bee1-944fa797666c/thumbnail.jpg",
    videoId: "781eb178-777d-48ab-bee1-944fa797666c",
  },
];

const benefits = [
  { icon: Film, title: "Reels Profissionais", desc: "Vídeos curtos com roteiro, edição cinematográfica e trilha sonora." },
  { icon: Camera, title: "Captação em Alta Qualidade", desc: "Equipamento profissional para resultados que impressionam." },
  { icon: Sparkles, title: "Identidade Visual", desc: "Cada reel é criado para reforçar a identidade da sua marca." },
  { icon: Instagram, title: "Otimizado para Redes", desc: "Formato vertical, legendas e ritmo ideal para engajamento." },
];

const testimonials = [
  { name: "Auto Detailing Premium", text: "Os reels da Wonder transformaram nossa presença digital. Recebemos muito mais contatos pelo Instagram.", stars: 5 },
  { name: "Studio Car SP", text: "Profissionalismo incrível. A qualidade dos vídeos superou todas as expectativas.", stars: 5 },
  { name: "Clean Detail", text: "Melhor investimento em marketing que já fizemos. Os reels geram autoridade instantânea.", stars: 5 },
];

const Index = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-md aspect-[9/16] rounded-2xl overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
              <iframe
                src={`https://iframe.mediadelivery.net/embed/70d65a72-a7b/${activeVideo}?autoplay=true`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={bannerHero} alt="Reels Institucionais" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" className="max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-8xl lg:text-9xl text-foreground leading-none mb-4"
              variants={fadeUp}
              custom={1}
            >
              REELS INSTITUCIONAIS
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-primary font-sans font-semibold tracking-widest uppercase mb-6"
              variants={fadeUp}
              custom={2}
            >
              Para Empresas que Querem Autoridade
            </motion.p>
            <motion.p
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
              variants={fadeUp}
              custom={3}
            >
              Vídeos curtos e profissionais que fortalecem sua marca, destacam seus serviços e geram mais resultados nas redes sociais.
            </motion.p>
            <motion.div variants={fadeUp} custom={4}>
              <Button
                size="lg"
                className="text-lg px-10 py-7 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-bold tracking-wide"
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  SOLICITAR ORÇAMENTO
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-4xl md:text-6xl text-foreground mb-4">
              POR QUE REELS INSTITUCIONAIS?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
              Conteúdo em vídeo é o formato que mais gera engajamento e conversão nas redes sociais.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <b.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl text-foreground mb-3">{b.title}</h3>
                <p className="text-muted-foreground font-light">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 md:py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-4xl md:text-6xl text-foreground mb-4">
              NOSSO PORTFÓLIO
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
              Confira alguns exemplos de reels que criamos para nossos clientes.
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full">
                  <iframe
                    src={`https://player.mediadelivery.net/embed/621888/${item.videoId}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full border-0"
                    allow="encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none">
                  <h3 className="text-2xl text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-light">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-4xl md:text-6xl text-foreground mb-4">
              COMO FUNCIONA
            </motion.h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-0">
            {[
              { step: "01", title: "Briefing", desc: "Entendemos sua marca, objetivos e público-alvo." },
              { step: "02", title: "Roteiro & Planejamento", desc: "Criamos o roteiro e definimos a identidade visual do reel." },
              { step: "03", title: "Captação", desc: "Gravação profissional com equipamento de última geração." },
              { step: "04", title: "Edição & Entrega", desc: "Edição cinematográfica, trilha sonora e entrega otimizada para redes." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex gap-6 items-start py-8 border-b border-border last:border-b-0"
              >
                <span className="text-5xl md:text-6xl text-primary/30 font-sans font-bold leading-none shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-3xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground font-light text-lg">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-4xl md:text-6xl text-foreground mb-4">
              O QUE DIZEM NOSSOS CLIENTES
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-6 font-light leading-relaxed">"{t.text}"</p>
                <p className="text-primary font-semibold text-sm tracking-wide uppercase">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-card border border-primary/20 rounded-3xl p-10 md:p-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} custom={0} className="text-4xl md:text-5xl text-foreground mb-8 text-center">
                O QUE ESTÁ INCLUSO
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Roteiro personalizado",
                  "Captação profissional no local",
                  "Edição cinematográfica com trilha",
                  "Entrega em formato vertical (9:16)",
                  "Legendas e textos animados",
                  "Revisão e ajustes inclusos",
                  "Entrega rápida",
                  "Suporte pós-produção",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    custom={i}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground/90 font-light">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-5xl md:text-7xl lg:text-8xl text-foreground mb-6">
              PRONTO PARA ELEVAR SUA MARCA?
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-xl max-w-2xl mx-auto mb-10 font-light">
              Entre em contato agora e solicite um orçamento sem compromisso. Vamos criar reels que geram resultados reais.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-10 py-7 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-bold tracking-wide"
                asChild
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  FALAR NO WHATSAPP
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm font-light">
            © {new Date().getFullYear()} Wonder Produções. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] rounded-full flex items-center justify-center shadow-lg shadow-[hsl(142,70%,45%)]/30 transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>
    </div>
  );
};

export default Index;