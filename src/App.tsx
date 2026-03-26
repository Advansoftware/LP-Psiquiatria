/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Monitor, 
  Activity, 
  Lock, 
  Brain, 
  Moon, 
  Zap, 
  ArrowRight, 
  Heart,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="min-h-screen bg-[#fafaf9]"
    >
      {/* Navbar */}
      <nav 
        id="navbar" 
        className={`fixed top-0 left-0 right-0 z-[100] py-5 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#fafaf9]/92 backdrop-blur-lg shadow-sm py-3.5' 
            : 'glass-header' // Fixed: Glass effect even when not scrolled
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-[5%] flex items-center justify-between">
          <div className="flex flex-col gap-px">
            <span className="serif text-[1.1rem] font-medium text-[#1c1917] leading-tight tracking-wide">
              Dra. Ana Beatriz Moreira
            </span>
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#a8a29e]">
              CRM/SP 123.456
            </span>
          </div>
          <a 
            href="https://wa.me/5511999999999?text=Olá!+Gostaria+de+agendar+uma+consulta." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary hidden md:flex text-[0.82rem] px-5.5 py-2.8"
          >
            <WhatsAppIcon className="w-[15px] h-[15px]" />
            Agendar Consulta
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* Hero Left - Text Content */}
        <div className="relative z-10 flex flex-col justify-center bg-gradient-to-br from-[#f5f6f0] via-[#eaedd9] to-[#d3d9b3] px-[8%] pt-32 pb-20 lg:pt-32 lg:pb-20">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="accent-line"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-white/60 border border-[#d3d9b3] px-4 py-1.5 rounded-full mb-6 w-fit"
          >
            <span className="eyebrow !mb-0">Psiquiatria Clínica</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="serif text-4xl md:text-5xl lg:text-[3.4rem] font-medium leading-[1.12] text-[#1c1917] tracking-tight mb-6"
          >
            Recupere seu<br />
            <em className="italic text-[#5d6a36] not-italic">equilíbrio emocional</em><br />
            com cuidado especializado
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-base text-[#78716c] leading-[1.85] max-w-[440px] mb-10"
          >
            Atendimento psiquiátrico humanizado e individualizado para quem busca qualidade de vida, clareza mental e bem-estar duradouro.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a 
              href="https://wa.me/5511999999999?text=Olá!+Gostaria+de+agendar+uma+consulta." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              <WhatsAppIcon className="w-[18px] h-[18px]" />
              Agendar Consulta
            </a>
            <a href="#areas" className="btn btn-ghost">
              Saiba Mais
              <ChevronDown className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Decorative blob */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              x: [0, 10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -bottom-20 -right-20 w-80 h-80 bg-radial from-[#96a460]/15 to-transparent rounded-full pointer-events-none" 
          />
        </div>

        {/* Hero Right - Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[60vw] min-h-[320px] max-h-[500px] lg:h-full lg:max-h-none z-20"
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&h=1100&fit=crop&auto=format&q=85"
              alt="Dra. Ana Beatriz Moreira — Psiquiatra"
              className="w-full h-full object-cover object-[center_top]"
              referrerPolicy="no-referrer"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#eaedd9]/25 to-transparent pointer-events-none" />
          </div>
          
          {/* Credential Card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-10 left-5 lg:-left-8 bg-white/90 backdrop-blur-md border border-white/80 rounded-2xl p-4 lg:p-5.5 shadow-2xl z-30 min-w-[180px]"
          >
            <span className="serif text-3xl font-semibold text-[#1c1917] leading-none block">+10</span>
            <span className="text-[0.7rem] tracking-[0.18em] uppercase text-[#788746] mt-1 block">Anos de experiência</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b border-[#e7e5e4] py-7 px-[5%]">
        <div className="max-w-[900px] mx-auto flex flex-wrap justify-center items-center gap-10">
          <TrustItem icon={<Shield />} text="+10 anos de experiência" delay={0} />
          <TrustItem icon={<Monitor />} text="Teleconsulta disponível" delay={0.2} />
          <TrustItem icon={<Activity />} text="Abordagem integrativa" delay={0.4} />
          <TrustItem icon={<Lock />} text="Sigilo absoluto" delay={0.6} />
        </div>
      </div>

      {/* Services Section */}
      <section id="areas" className="py-24 px-[5%] bg-[#f5f6f0]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <div className="accent-line mx-auto" />
            <p className="eyebrow">Áreas de Atuação</p>
            <h2 className="serif text-3xl md:text-4xl lg:text-[2.6rem] font-medium text-[#1c1917] leading-tight mt-2 mb-3 tracking-tight">
              Como posso ajudar você
            </h2>
            <p className="text-[0.93rem] text-[#a8a29e] max-w-[480px] mx-auto leading-[1.85]">
              Tratamento especializado e baseado em evidências para condições que impactam sua qualidade de vida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[820px] mx-auto">
            <ServiceCard 
              num="01" 
              icon={<Brain />} 
              title="Ansiedade" 
              body="Crises de pânico, preocupação excessiva, tensão constante. Tratamentos que devolvem tranquilidade ao seu dia a dia." 
              delay={0}
            />
            <ServiceCard 
              num="02" 
              icon={<Moon />} 
              title="Insônia" 
              body="Dificuldade para dormir, sono fragmentado, cansaço crônico. Resgate a qualidade do seu descanso com acompanhamento adequado." 
              delay={0.2}
            />
            <ServiceCard 
              num="03" 
              icon={<Zap />} 
              title="TDAH" 
              body="Desatenção, impulsividade, dificuldade de foco. Diagnóstico criterioso e estratégias que transformam sua produtividade." 
              delay={0.4}
            />
            <ServiceCard 
              num="04" 
              icon={<ArrowRight />} 
              title="Esgotamento Emocional" 
              body="Burnout, exaustão, perda de motivação. Recupere sua energia vital com um plano de tratamento personalizado." 
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 px-[5%] bg-white">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[7%] items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[radial-gradient(#d3d9b3_1.5px,transparent_1.5px)] bg-[length:12px_12px] opacity-80 rounded z-[-1]" />
              <div className="rounded-[32px] overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=750&fit=crop&auto=format&q=85"
                  alt="Dra. Ana Beatriz Moreira"
                  className="w-full h-full object-cover object-[center_top]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-10 -right-6 bg-[#48522b] text-white rounded-2xl p-5 text-center shadow-xl">
                <span className="serif text-4xl font-semibold leading-none block">+10</span>
                <span className="text-[0.65rem] tracking-[0.2em] uppercase opacity-75 mt-1.5 block">Anos</span>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="accent-line" />
              <p className="eyebrow">Sobre Mim</p>
              <h2 className="serif text-3xl md:text-4xl lg:text-[2.6rem] font-medium text-[#1c1917] leading-tight mt-2 mb-4 tracking-tight">
                Dra. Ana Beatriz<br />Moreira
              </h2>
              <p className="text-[0.95rem] text-[#78716c] leading-[1.9] mb-5">
                Com mais de 10 anos de experiência em Psiquiatria Clínica, minha abordagem combina o rigor da medicina baseada em evidências com um olhar atento à individualidade de cada paciente.
              </p>
              <p className="text-[0.95rem] text-[#78716c] leading-[1.9] mb-5">
                Acredito que o tratamento eficaz vai além da prescrição — envolve escuta qualificada, vínculo terapêutico e um plano de cuidado que respeite a história e o momento de vida de cada pessoa.
              </p>
              <p className="text-[0.78rem] text-[#a8a29e] mb-7 tracking-wide">
                CRM/SP 123.456 &nbsp;·&nbsp; RQE 78.910 &nbsp;·&nbsp; ABP
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tag">Psiquiatria Clínica</span>
                <span className="tag">Psicofarmacologia</span>
                <span className="tag">Medicina do Sono</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="atendimento" className="py-24 px-[5%] bg-[#f5f6f0]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-14">
            <div className="accent-line mx-auto" />
            <p className="eyebrow">Modelo de Atendimento</p>
            <h2 className="serif text-3xl md:text-4xl lg:text-[2.6rem] font-medium text-[#1c1917] leading-tight mt-2 mb-3 tracking-tight">
              Sua jornada de cuidado
            </h2>
            <p className="text-[0.93rem] text-[#a8a29e] max-w-[480px] mx-auto leading-[1.85]">
              Um processo claro e acolhedor, do primeiro contato à evolução contínua.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-[#d3d9b3] via-[#b5bf88] to-[#d3d9b3] z-0" />
            
            <StepCard 
              num="1" 
              title="Primeiro Contato" 
              body="Envie uma mensagem pelo WhatsApp. Minha equipe irá acolher você e agendar sua primeira consulta." 
              delay={0}
            />
            <StepCard 
              num="2" 
              title="Avaliação Completa" 
              body="Consulta detalhada para compreender seu histórico, sintomas e expectativas. Sem pressa, com escuta atenta." 
              delay={0.2}
            />
            <StepCard 
              num="3" 
              title="Plano Personalizado" 
              body="Tratamento sob medida com acompanhamento contínuo, ajustes quando necessário e suporte entre consultas." 
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section id="contato" className="relative overflow-hidden py-24 px-[5%] bg-[#3a4124]">
        {/* Textured background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%2260%22_height=%2260%22%3E%3Ccircle_cx=%2230%22_cy=%2230%22_r=%221%22_fill=%22%23ffffff%22_/%3E%3C/svg%3E')] bg-[length:20px_20px]" />
        
        {/* Radial glow */}
        <div className="absolute -top-[30%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse,rgba(120,135,70,0.3)_0%,transparent_65%)] pointer-events-none" />

        <div className="relative z-10 max-w-[640px] mx-auto text-center">
          <div className="w-15 h-15 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-8">
            <Heart className="w-6.5 h-6.5 text-white/70" />
          </div>
          <h2 className="serif text-3xl md:text-5xl font-medium text-white leading-tight tracking-tight mb-4">
            Cuidar da sua saúde mental é um ato de coragem
          </h2>
          <p className="text-[0.95rem] text-white/55 leading-[1.85] mb-10">
            Dê o primeiro passo. Estou aqui para caminhar com você nessa jornada de transformação e bem-estar.
          </p>
          <a 
            href="https://wa.me/5511999999999?text=Olá!+Gostaria+de+agendar+uma+consulta." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-wa group"
          >
            <WhatsAppIcon className="w-5.5 h-5.5 fill-[#25D366]" />
            Agendar Consulta pelo WhatsApp
            <span className="text-base transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c1917] py-10 px-[5%] text-center">
        <p className="serif text-[1.05rem] text-white/55 mb-1.5">Dra. Ana Beatriz Moreira</p>
        <p className="text-[0.72rem] tracking-widest text-white/25 mb-2">CRM/SP 123.456 &nbsp;·&nbsp; Psiquiatria</p>
        <p className="text-[0.72rem] text-white/18">Este site tem caráter informativo e não substitui a consulta médica.</p>
      </footer>

      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/5511999999999?text=Olá!+Gostaria+de+agendar+uma+consulta." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="wa-float hover:scale-110 transition-transform duration-200"
        aria-label="Agendar pelo WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 fill-white" />
      </a>
    </motion.div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.537-1.474A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.332 0-4.488-.778-6.222-2.088l-.434-.332-2.836.921.944-2.79-.366-.458A9.706 9.706 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/>
    </svg>
  );
}

function TrustItem({ icon, text, delay = 0 }: { icon: ReactNode, text: string, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className="flex items-center gap-2.5"
    >
      <div className="w-8.5 h-8.5 rounded-full bg-[#eaedd9] flex items-center justify-center shrink-0">
        {icon && <div className="w-4 h-4 text-[#5d6a36]">{icon}</div>}
      </div>
      <span className="text-[0.84rem] text-[#78716c] font-normal">{text}</span>
    </motion.div>
  );
}

function ServiceCard({ num, icon, title, body, delay = 0 }: { num: string, icon: ReactNode, title: string, body: string, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white border border-[#e7e5e4] rounded-3xl p-9 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-[#d3d9b3]"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#b5bf88] to-[#96a460] scale-x-0 origin-left transition-transform duration-350 group-hover:scale-x-100" />
      <span className="absolute top-5 right-6 serif text-6xl font-light text-[#f5f6f0] leading-none transition-colors duration-350 group-hover:text-[#eaedd9] select-none">
        {num}
      </span>
      <div className="w-13 h-13 rounded-lg bg-[#eaedd9] flex items-center justify-center mb-6 transition-colors duration-350 group-hover:bg-[#d3d9b3]">
        {icon && <div className="w-6 h-6 text-[#5d6a36]">{icon}</div>}
      </div>
      <h3 className="serif text-[1.35rem] font-medium text-[#1c1917] mb-2.5">{title}</h3>
      <p className="text-[0.875rem] text-[#a8a29e] leading-[1.75]">{body}</p>
    </motion.div>
  );
}

function StepCard({ num, title, body, delay = 0 }: { num: string, title: string, body: string, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white border border-[#e7e5e4] rounded-3xl p-9 text-center relative z-10 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="w-12 h-12 rounded-full bg-[#48522b] text-white serif text-[1.1rem] font-semibold flex items-center justify-center mx-auto mb-5 relative z-20 shadow-md">
        {num}
      </div>
      <h3 className="serif text-[1.15rem] font-medium text-[#1c1917] mb-2.5">{title}</h3>
      <p className="text-[0.85rem] text-[#a8a29e] leading-[1.8]">{body}</p>
    </motion.div>
  );
}
