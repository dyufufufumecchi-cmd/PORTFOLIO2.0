/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Layout, 
  Monitor, 
  Smartphone, 
  Sparkles, 
  ChevronRight,
  Code2,
  Figma,
  AppWindow,
  Briefcase,
  X
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const RAW_PROJECTS = [
  {
    id: "cctv-news",
    name: "央视新闻",
    role: "User Experience Designer",
    period: "2022.01 - 2025.10",
    description: "负责信息流、直播、UGC模块的UI/UX设计，制定组件化规范。主导Harmony OS跨设备设计与AIGC内容生成落地。",
    achievements: "下载量破2.1亿，矩阵用户超7.9亿；AI功能显著提升内容生产效率与停留时长。",
    tags: ["UI/UX", "AIGC", "Harmony OS", "Cross-device"],
    image: "/covers/cover_01.webp",
    gallery: [
      "/projects/cctv/cctv_01.webp",
      "/projects/cctv/cctv_02.webp",
      "/projects/cctv/cctv_03.webp",
      "/projects/cctv/cctv_04.webp",
      "/projects/cctv/cctv_05.webp",
      "/projects/cctv/cctv_06.webp",
      "/projects/cctv/cctv_07.webp",
      "/projects/cctv/cctv_08.webp",
      "/projects/cctv/cctv_09.webp",
      "/projects/cctv/cctv_10.webp",
      "/projects/cctv/cctv_11.webp",
      "/projects/cctv/cctv_12.webp",
      "/projects/cctv/cctv_13.webp"
    ],
  },
  {
    id: "super-sim",
    name: "超级SIM卡",
    role: "UI Designer",
    period: "2020.01 - 2021.10",
    description: "参与前期产品定义与市场调研，负责各子产品线整体设计，包括小程序、网页、后台等。",
    achievements: "中国移动超级SIM卡持卡用户数已突破1亿，重庆试点日活超10万+。",
    tags: ["Product Strategy", "UI/UX", "Mini Program"],
    image: "/covers/cover_02.webp",
    gallery: [
      "/projects/sim/sim_01.webp",
      "/projects/sim/sim_02.webp",
      "/projects/sim/sim_03.webp",
      "/projects/sim/sim_04.webp",
      "/projects/sim/sim_05.webp",
      "/projects/sim/sim_06.webp",
      "/projects/sim/sim_07.webp",
      "/projects/sim/sim_08.webp",
      "/projects/sim/sim_09.gif",
      "/projects/sim/sim_10.webp",
      "/projects/sim/sim_11.webp",
      "/projects/sim/sim_12.webp",
      "/projects/sim/sim_13.webp",
      "/projects/sim/sim_14.webp",
      "/projects/sim/sim_15.webp",
      "/projects/sim/sim_16.webp",
      "/projects/sim/sim_17.webp",
      "/projects/sim/sim_18.webp",
      "/projects/sim/sim_19.webp",
      "/projects/sim/sim_20.webp",
      "/projects/sim/sim_21.webp",
      "/projects/sim/sim_22.webp",
      "/projects/sim/sim_23.webp"
    ],
  },
  {
    id: "he-hotel",
    name: "和酒店小程序",
    role: "UI Designer",
    period: "2019.09 - 2019.12",
    description: "负责管理端（酒店管理平台+小程序）+住宿端需求沟通、UI和交互设计。",
    achievements: "帮助酒店降低人力成本40%，目前已覆盖2000+门店。",
    tags: ["B-Side", "Hospitality", "UI/UX"],
    image: "/covers/cover_03.webp",
    gallery: [
      "/projects/hotel/hotel_01.webp",
      "/projects/hotel/hotel_02.webp",
      "/projects/hotel/hotel_03.webp",
      "/projects/hotel/hotel_04.webp",
      "/projects/hotel/hotel_05.webp",
      "/projects/hotel/hotel_06.webp",
      "/projects/hotel/hotel_07.webp",
      "/projects/hotel/hotel_08.webp",
      "/projects/hotel/hotel_09.webp",
      "/projects/hotel/hotel_10.webp",
      "/projects/hotel/hotel_11.webp",
      "/projects/hotel/hotel_12.webp",
      "/projects/hotel/hotel_13.webp",
      "/projects/hotel/hotel_14.webp",
      "/projects/hotel/hotel_15.webp",
      "/projects/hotel/hotel_16.webp",
      "/projects/hotel/hotel_17.webp"
    ],
  },
  {
    id: "web-design",
    name: "WEB网页设计",
    role: "Visual & UI Designer",
    period: "2018.06 - 2019.08",
    description: "专注于企业官网及品牌站的全案视觉设计，通过严谨的栅格系统与 AIGC 辅助概念产出，提升品牌线上表现力与响应式适配效果。",
    achievements: "成功主导多项行业标杆企业的数字化升级与官网重构，大幅提升品牌视觉一致性。",
    tags: ["Web Design", "UI", "AIGC", "Responsive"],
    image: "/covers/cover_04.webp",
    gallery: [
      "/projects/web/web_01.webp"
    ],
  },
  {
    id: "b-side-design",
    name: "B端设计",
    role: "Product & UI Designer",
    period: "2017.06 - 2018.05",
    description: "专注于复杂业务系统与中后台管理平台的体验设计。通过构建标准化组件库与业务逻辑梳理，提升系统可用性与操作效率，确保复杂数据的清晰呈现。",
    achievements: "主导并落地多项大型 B 端管理软件设计，通过系统性设计规范将产研沟通成本降低 30%，显著提升产品版本迭代速度。",
    tags: ["B-Side", "SaaS", "Design System", "Admin"],
    image: "/covers/cover_05.webp",
    gallery: [
      "/projects/bside/bside_01.webp",
      "/projects/bside/bside_02.webp",
      "/projects/bside/bside_03.webp",
      "/projects/bside/bside_04.webp",
      "/projects/bside/bside_05.webp"
    ],
  },
  {
    id: "aigc-specialist",
    name: "AIGC",
    role: "AIGC Design Specialist",
    period: "2023.01 - 至今",
    description: "深度探索 AIGC 技术在商业设计中的极致应用。利用 Midjourney、Stable Diffusion 等工具重构设计工作流，专注于 LoRA 模型训练、提示词工程（Prompt Engineering）以及 AI 生成内容 in 品牌视觉与 UI 灵感中的落地。",
    achievements: "通过 AI 工作流重构设计探索链路，在保证高质量视觉产出的同时显著缩短了创意原型周期，有效支持了品牌视觉方案的快速推演与项目高度落地。",
    tags: ["Midjourney", "Stable Diffusion", "AI Workflow", "LoRA"],
    image: "/covers/cover_06.webp",
    gallery: [
      "/projects/aigc/aigc_01.gif",
      "/projects/aigc/aigc_02.webp",
      "/projects/aigc/aigc_03.mp4",
      "/projects/aigc/aigc_04.mp4",
      "/projects/aigc/aigc_05.webp",
      "/projects/aigc/aigc_06.webp",
      "/projects/aigc/aigc_07.webp",
      "/projects/aigc/aigc_08.webp",
      "/projects/aigc/aigc_09.webp",
      "/projects/aigc/aigc_10.webp"
    ],
  }
];

const PROJECTS = RAW_PROJECTS.map(p => ({
  ...p,
  image: p.image.startsWith("/") ? p.image.slice(1) : p.image,
  gallery: p.gallery?.map(path => path.startsWith("/") ? path.slice(1) : path) || []
}));

const EXPERIENCE = [
  {
    company: "软通动力信息技术（集团）股份有限公司",
    role: "用户体验设计师",
    period: "2022.01 - 2025.10",
    summary: "Base广州阿里巴巴，负责【央视新闻】【人民日报】项目迭代，深度融合AIGC提升设计效率与体验创新。",
    tasks: ["需求沟通与用户画像分析", "运用AIGC工具快速产出视觉方案", "融合Harmony OS跨端规范", "输出设计规范与组件库"]
  },
  {
    company: "北京新媒传信科技有限公司",
    role: "UI设计师",
    period: "2019.01 - 2021.10",
    summary: "负责【中移互联网】产品项目设计工作，包括UI、运营、VI、物料设计等。",
    tasks: ["移动端APP界面设计与活动页制作", "宣传运营设计（Banner、广告、展板）"]
  },
  {
    company: "广州原肽生物科技有限公司",
    role: "平面设计师",
    period: "2015.07 - 2018.06",
    summary: "负责品牌全案设计，VI设计，推动品牌宣传提升知名度。",
    tasks: ["日常视觉素材设计（海报、包装、画册）", "搭建素材库，沉淀设计组件"]
  }
];

const SKILLS = [
  { name: "Figma", icon: Figma },
  { name: "Sketch", icon: Layout },
  { name: "AIGC (Midjourney/SD)", icon: Sparkles },
  { name: "After Effects", icon: Monitor },
  { name: "Photoshop", icon: Smartphone },
  { name: "Illustrator", icon: AppWindow },
  { name: "Harmony OS Design", icon: Smartphone },
  { name: "Figma Make", icon: Code2 }
];

const OptimizedImage = ({ src, alt, className, ...props }: any) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className={`relative overflow-hidden bg-white/5 ${className}`}>
      <AnimatePresence>
        {!isLoaded && !error && (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-8 h-8 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-widest opacity-30">
          Failed to load
        </div>
      ) : (
        <motion.img
          ref={imgRef}
          src={src}
          alt={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          loading="lazy"
          className="w-full h-auto block"
          {...props}
        />
      )}
    </div>
  );
};

export default function App() {
  const scrollRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const { scrollYProgress } = useScroll();
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-noise text-paper selection:bg-gold selection:text-dark">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 md:py-10 flex justify-between items-center border-b border-white/10 text-paper bg-dark/80 backdrop-blur-md">
        <div className="flex flex-col">
          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] opacity-40 mb-1">Portfolio 2026</span>
          <div className="font-display text-lg md:text-2xl font-black uppercase tracking-tighter">Huang Yinying</div>
        </div>
        <div className="flex gap-4 md:gap-8 text-[9px] md:text-[11px] uppercase tracking-[0.2em] font-bold opacity-70">
          <a href="#work" className="hover:text-gold transition-colors">Works</a>
          <a href="#about" className="hover:text-gold transition-colors">Expertise</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen px-6 md:px-8 flex flex-col justify-center overflow-hidden pt-20">
        {/* Animated Diffuse Light Blobs (Enhanced Visibility) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ 
              x: [0, 80, -40, 0], 
              y: [0, -60, 30, 0],
              scale: [1, 1.2, 0.9, 1]
            }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="absolute top-[10%] left-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold/20 rounded-full blur-[80px] md:blur-[140px]"
          />
          <motion.div 
            animate={{ 
              x: [0, -100, 70, 0], 
              y: [0, 80, -50, 0],
              scale: [1, 1.1, 1.3, 1]
            }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="absolute bottom-[10%] right-[10%] w-[350px] md:w-[700px] h-[350px] md:h-[700px] bg-blue-500/10 rounded-full blur-[100px] md:blur-[160px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.15, 0.3, 0.15]
            }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            className="absolute w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-purple-500/15 rounded-full blur-[70px] md:blur-[120px]"
            style={{ left: '40%', top: '40%', transform: 'translate(-50%, -50%)' }}
          />
        </div>

        <motion.div 
          style={{ opacity: titleOpacity, scale: titleScale }}
          className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-12 gap-8"
        >
          <div className="col-span-12 lg:col-span-10">
            <h1 className="font-display text-[clamp(4rem,12vw,14rem)] leading-[0.8] font-black uppercase tracking-tighter mb-8">
              Portfolio
            </h1>
            
            <div className="max-w-xl mt-12">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl font-medium opacity-80 leading-relaxed mb-10"
              >
                我是黄银英，一名深耕 UI/UX 与 <span className="text-gold font-bold">AIGC</span> 融合设计的资深专家。10年数字产品沉淀，专注 AI 设计提效。
              </motion.p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <button className="glass px-8 py-3 rounded-full text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all font-semibold">
                  View Experience
                </button>
                <div className="flex items-center gap-3 ml-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                  <span className="text-[10px] uppercase tracking-widest opacity-40">Available for Project</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-8 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowRight className="rotate-90 w-8 h-8 stroke-[1]" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-40 px-6 md:px-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-12 block">01 / Profile & Expertise</span>
          <div className="flex flex-col gap-16">
            <h3 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.15] max-w-5xl">
              拥有 10 年全链路设计经验，深度赋能移动App及大厂核心项目。实现设计体系的 <span className="text-gold">降本增效</span>。
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 pt-12 border-t border-white/5">
              <div>
                <h4 className="text-[10px] uppercase tracking-wider mb-6 opacity-30 font-bold">Expertise</h4>
                <p className="text-lg font-light opacity-60 leading-relaxed">
                  深耕UI、UX设计，持续强化全链路与AIGG设计能力。精通AIGC工具应用于视觉创作、运营物料及界面灵感生成。
                </p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-wider mb-6 opacity-30 font-bold">Delivery</h4>
                <p className="text-lg font-light opacity-60 leading-relaxed">
                  关注像素级UI输出、平台规范落地及高效产研协同。主导央视新闻、人民日报、超级SIM卡等行业头部项目。
                </p>
              </div>
              <div className="md:col-span-2 lg:col-span-1">
                <h4 className="text-[10px] uppercase tracking-wider mb-6 opacity-30 font-bold">Vision</h4>
                <p className="text-lg font-light opacity-60 leading-relaxed">
                  探索 AI 驱动的设计新范式，将前沿 AI 技术转化为可落地的视觉语言，为千万级用户提供极致的数字体验。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 md:py-40 px-6 md:px-8 bg-dark">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-16 block">02 / Selected Works</span>
          
          <div className="grid gap-12">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => project.gallery && setSelectedProject(project)}
                className={`group glass p-8 md:p-12 rounded-3xl flex flex-col lg:flex-row gap-12 items-center transition-all ${project.gallery ? 'cursor-pointer hover:border-white/20 hover:bg-white/[0.07]' : 'cursor-default'}`}
              >
                <div className="lg:w-2/5 w-full relative overflow-hidden rounded-2xl">
                  <OptimizedImage 
                    src={project.image} 
                    alt={project.name}
                    className="w-full aspect-video object-cover opacity-70 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
                
                <div className="lg:w-3/5 flex flex-col items-start w-full">
                   <div className="flex flex-col sm:flex-row justify-between items-start w-full mb-6 gap-4">
                      <div>
                        <span className="font-display text-4xl font-black text-white/10 group-hover:text-gold transition-colors block mb-2">{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                        <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">{project.name}</h4>
                        <p className="text-xs md:text-sm opacity-50 font-medium mt-1">{project.role}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="pill opacity-50 group-hover:opacity-100 transition-opacity font-bold whitespace-nowrap">{tag}</span>
                        ))}
                      </div>
                   </div>
                  
                  <p className="text-sm opacity-60 mb-8 leading-relaxed font-normal max-w-2xl">
                    {project.description}
                  </p>
                  
                  <div className="flex items-start gap-4 text-xs font-bold text-gold uppercase tracking-widest">
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>{project.achievements}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 md:py-40 px-6 md:px-8 bg-noise border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-20 block text-center italic">03 / The Narrative</span>

          <div className="grid gap-20">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={idx}
                className="grid md:grid-cols-12 gap-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="md:col-span-4">
                  <span className="text-[10px] font-mono opacity-40 uppercase mb-2 block tracking-[0.2em]">{exp.period}</span>
                  <h4 className="text-xl font-bold text-gold leading-tight mb-2 tracking-tight uppercase">{exp.company}</h4>
                  <p className="text-xs opacity-40 uppercase tracking-widest font-bold">{exp.role}</p>
                </div>
                
                <div className="md:col-span-8">
                  <p className="text-lg font-normal opacity-70 mb-8 leading-relaxed">
                    {exp.summary}
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {exp.tasks.map((task, i) => (
                      <div key={i} className="flex items-center gap-3 text-[10px] uppercase tracking-widest opacity-40 font-bold">
                        <div className="w-1 h-1 rounded-full bg-gold" />
                        {task}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-24 md:py-40 px-6 md:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 mb-24 md:mb-40 items-end">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-6 md:mb-8 block">04 / Inquiries</span>
              <h2 className="font-display text-5xl md:text-7xl lg:text-9xl font-black uppercase leading-[0.85] mb-8 md:mb-12">
                Let's craft <br />the <span className="text-gold">Future</span>.
              </h2>
            </div>
            
            <div className="flex flex-col gap-10 md:gap-12 lg:items-end w-full">
              <div className="flex flex-col lg:items-end gap-2">
                <span className="text-[10px] uppercase tracking-widest opacity-40">Direct Line</span>
                <a href="mailto:996118619@qq.com" className="text-2xl sm:text-3xl md:text-5xl font-display font-black text-gold hover:opacity-70 transition-opacity uppercase tracking-tighter break-all">
                  996118619@qq.com
                </a>
              </div>
              
              <div className="flex flex-wrap gap-8 lg:justify-end">
                <div className="flex flex-col lg:items-end">
                  <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Phone</span>
                  <span className="text-sm font-light">17666559605</span>
                </div>
                <div className="flex flex-col lg:items-end">
                  <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Location</span>
                  <span className="text-sm font-light uppercase tracking-tighter">Guangzhou, CN</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black uppercase tracking-tighter opacity-80 mb-2">Huang Yinying</span>
              <div className="flex gap-2">
                <span className="pill font-bold">Figma</span>
                <span className="pill font-bold">AIGC</span>
                <span className="pill font-bold">Harmony OS</span>
              </div>
            </div>
            <div className="text-[9px] uppercase tracking-[0.3em] opacity-30 text-center">
              Copyright © 2026 / Crafting intent with precision
            </div>
          </div>
        </div>
      </footer>

      {/* Project Expansion Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-dark/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-6xl h-[90vh] md:h-full flex flex-col glass relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-10 glass p-2 md:p-3 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <div className="flex-1 overflow-y-auto px-4 py-12 md:px-20 md:py-20 scrollbar-hide">
                <div className="max-w-4xl mx-auto flex flex-col gap-6 md:gap-8">
                  <div className="flex flex-col gap-3 md:gap-4">
                    <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] opacity-40">Project Gallery</span>
                    <h2 className="font-display text-3xl md:text-7xl font-black uppercase tracking-tight leading-none mb-2 md:mb-4">
                      {selectedProject.name}
                    </h2>
                    <p className="text-base md:text-2xl font-light opacity-60 max-w-2xl leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-0 mt-12">
                    {selectedProject.gallery?.map((item: string, i: number) => {
                      const isVideo = item.toLowerCase().endsWith('.mp4');
                      return (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {isVideo ? (
                            <div className="relative bg-white/5 overflow-hidden">
                              <video 
                                src={item} 
                                controls 
                                autoPlay 
                                muted 
                                loop 
                                playsInline
                                preload="auto"
                                className="w-full h-auto"
                              />
                            </div>
                          ) : (
                            <OptimizedImage 
                              src={item} 
                              alt={`${selectedProject.name} item ${i + 1}`} 
                              className="w-full"
                            />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                  
                  <div className="py-20 text-center border-t border-white/10">
                    <p className="text-[10px] uppercase tracking-[0.3em] opacity-30">End of Gallery</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
