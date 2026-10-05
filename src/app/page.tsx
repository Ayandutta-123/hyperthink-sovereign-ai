"use client";

import { useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowRight,
  Bot,
  Boxes,
  ChartColumn,
  Check,
  ChevronRight,
  ClipboardList,
  Cloud,
  Cpu,
  Database,
  Download,
  Eye,
  FileCheck2,
  FileText,
  Fingerprint,
  HardDrive,
  Layers,
  Lightbulb,
  LockKeyhole,
  Network,
  Plus,
  Server,
  Shield,
  ShieldCheck,
  SquareTerminal,
  Users,
  type LucideIcon,
} from "lucide-react";

const foundation: { number: string; title: string; copy: string; icon: LucideIcon }[] = [
  { number: "01", title: "Compute", copy: "High-performance AI infrastructure, GPU and CPU workloads, and virtualization with resource allocation.", icon: Cpu },
  { number: "02", title: "AI software", copy: "AI frameworks, model serving, LLM and ML workloads, and orchestration in one runtime.", icon: Layers },
  { number: "03", title: "Data + integration", copy: "Enterprise data, APIs and databases, knowledge repositories, and business applications.", icon: Database },
  { number: "04", title: "Control", copy: "Security, identity and access, governance, and monitoring with auditability.", icon: ShieldCheck },
];

const controlChain: { label: string; icon: LucideIcon }[] = [
  { label: "Identity", icon: Fingerprint },
  { label: "Policy", icon: FileCheck2 },
  { label: "Guardrail", icon: Shield },
  { label: "Tool call", icon: SquareTerminal },
  { label: "Audit", icon: ClipboardList },
];

const computeCaps: { title: string; icon: LucideIcon }[] = [
  { title: "High-performance compute", icon: Cpu },
  { title: "GPU-accelerated workloads", icon: Boxes },
  { title: "Enterprise storage", icon: HardDrive },
  { title: "High-speed networking", icon: Network },
  { title: "Virtualized environments", icon: Server },
  { title: "Containerized AI workloads", icon: Layers },
];

const principles: { title: string; copy: string; icon: LucideIcon }[] = [
  { title: "Sovereign", copy: "Your data. Your infrastructure.", icon: Database },
  { title: "Governed", copy: "Your policies. Your accountability.", icon: FileCheck2 },
  { title: "Secure", copy: "Your AI. Protected at runtime.", icon: Shield },
  { title: "Intelligent", copy: "Your workflows. Reimagined.", icon: Lightbulb },
];

const workloads: { number: string; title: string; copy: string; icon: LucideIcon }[] = [
  { number: "01", title: "Agentic AI", copy: "Autonomous workflows, decision support, and task execution.", icon: Bot },
  { number: "02", title: "Generative AI", copy: "Private LLMs, knowledge assistants, and content generation.", icon: FileText },
  { number: "03", title: "Computer vision", copy: "Safety, security, inspection, and site intelligence.", icon: Eye },
  { number: "04", title: "Document AI", copy: "Invoice processing, extraction, and summarization.", icon: ClipboardList },
  { number: "05", title: "Enterprise copilots", copy: "HR, finance, operations, and knowledge assistants.", icon: Users },
  { number: "06", title: "Predictive AI", copy: "Forecasting, anomaly detection, and operational optimization.", icon: ChartColumn },
];

const stages: { title: string; copy: string }[] = [
  { title: "Architect", copy: "Design the AI, data, and infrastructure stack." },
  { title: "Deploy", copy: "Integrate compute, AI runtime, models, and enterprise systems." },
  { title: "Secure & govern", copy: "Apply security, identity, policies, monitoring, and auditability." },
  { title: "Scale", copy: "Expand workloads, models, and applications as requirements grow." },
];

const faqs = [
  {
    question: "What do we actually get with AI in a Box?",
    answer:
      "A private enterprise AI platform in one deployable environment: compute, AI software, data integration, and runtime control. Production AI runs on infrastructure you control, on-premise or in a dedicated cloud tenancy.",
  },
  {
    question: "How is this different from calling a public LLM API?",
    answer:
      "A public API sends the request to a provider. AI in a Box keeps data, models, identities, and policy inside your boundary, and every action leaves an audit record.",
  },
  {
    question: "Does our data stay in our environment?",
    answer:
      "Yes. Model serving, retrieval, and application traffic stay inside the environment you operate, including an air-gapped deployment when that is required.",
  },
  {
    question: "Can we use our own models and our existing security tools?",
    answer:
      "Yes. You choose approved models for each workload, and the platform connects to your identity provider, data platforms, and security controls.",
  },
  {
    question: "Can we start with one use case?",
    answer:
      "Yes. The first step is an assessment around one workload. That defines the stack, the controls, and a path from a contained release to more workloads on the same foundation.",
  },
  {
    question: "Who runs it after it is live?",
    answer:
      "Your team can operate it. The deployment model is customer-managed, on-premise or self-hosted, with HyperThink there for architecture, integration, and scale.",
  },
];

/** CSS + Intersection Observer — same pattern Elementor Motion Effects use (no Framer). */
function Reveal({
  children,
  className = "",
  delay = 0,
  immediate = false,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "className" | "children" | "style">) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("is-visible");

    if (immediate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <div
      ref={ref}
      className={`reveal ${immediate ? "is-visible" : ""} ${className}`.trim()}
      style={{ ["--reveal-delay" as string]: `${delay}s` }}
      {...rest}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

function ControlPlane({ compact = false }: { compact?: boolean }) {
  const cards = [
    { x: 64, k: "01", title: "Compute", copy: "GPU and CPU" },
    { x: 240, k: "02", title: "AI software", copy: "Models and runtime" },
    { x: 416, k: "03", title: "Data", copy: "Systems and APIs" },
  ];
  return (
    <div
      className={`control-plane ${compact ? "control-plane--compact" : ""}`}
      role="img"
      aria-label="Private environment diagram: compute, AI software, and data pass through a control gate before enterprise applications can act"
    >
      <svg viewBox="0 0 640 500" fill="none" aria-hidden="true">
        <rect x="28" y="20" width="584" height="460" rx="4" stroke="rgba(255,255,255,.2)" strokeWidth="1.25" />
        <path d="M28 20H48M28 20V40M612 20H592M612 20V40M28 480H48M28 480V460M612 480H592M612 480V460" stroke="#C1262A" strokeWidth="1.5" />
        <text x="64" y="58" fill="rgba(255,255,255,.55)" fontSize="11" fontWeight="700" letterSpacing="2.4" fontFamily="inherit">
          PRIVATE ENVIRONMENT
        </text>
        {cards.map((card) => (
          <g key={card.title}>
            <rect x={card.x} y="84" width="160" height="96" rx="2" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.16)" />
            <text x={card.x + 18} y="114" fill="#C1262A" fontSize="10" fontWeight="700" letterSpacing="1.4" fontFamily="inherit">{card.k}</text>
            <text x={card.x + 18} y="138" fill="white" fontSize="15" fontWeight="600" fontFamily="inherit">{card.title}</text>
            <text className="env-note" x={card.x + 18} y="158" fill="rgba(255,255,255,.5)" fontSize="11" fontFamily="inherit">{card.copy}</text>
          </g>
        ))}
        <path d="M144 180V214M320 180V214M496 180V214M144 214H496M320 214V236" stroke="rgba(255,255,255,.22)" strokeWidth="1.25" />
        <path className="env-flow" d="M144 214H496M320 214V236" stroke="#C1262A" strokeWidth="1.5" />
        <rect x="64" y="236" width="512" height="88" rx="2" fill="rgba(193,38,42,.08)" stroke="#C1262A" strokeWidth="1.25" className="env-gate" />
        <rect x="64" y="236" width="3" height="88" fill="#C1262A" />
        <text x="88" y="274" fill="white" fontSize="15" fontWeight="600" fontFamily="inherit">Control</text>
        <text className="env-note" x="88" y="298" fill="rgba(255,255,255,.62)" fontSize="12" fontFamily="inherit">Identity · Policy · Guardrail · Audit</text>
        <path d="M320 324V352" stroke="rgba(255,255,255,.22)" strokeWidth="1.25" />
        <path className="env-flow env-flow-delay" d="M320 324V352" stroke="#C1262A" strokeWidth="1.5" />
        <rect x="64" y="352" width="512" height="80" rx="2" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.16)" />
        <text x="88" y="388" fill="white" fontSize="15" fontWeight="600" fontFamily="inherit">Enterprise applications</text>
        <text className="env-note" x="88" y="412" fill="rgba(255,255,255,.5)" fontSize="12" fontFamily="inherit">Governed actions, inside your boundary</text>
      </svg>
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="logo-link" aria-label="HyperThink Systems — back to top">
      <svg
        className="logo-mark"
        viewBox="0 0 210.69 34"
        width="178"
        height="29"
        role="img"
        aria-label="HyperThink Systems"
      >
        <title>HyperThink Systems</title>
        {/* Official logo geometry — fills: scraped #C1262A / #252A61; light nav uses white wordmark */}
        <path
          fill="#C1262A"
          d="M89.36,379h27.39V406.5h-6.46v-21H89.36V379Zm-6.55,13h20.93v21H97.29V398.44H82.81V392Z"
          transform="translate(-82.81 -378.98)"
        />
        <path
          fill={light ? "#FFFFFF" : "#252A61"}
          fillRule="evenodd"
          d="M139.72,398.75v-6.34h-9.11v6.34h-3V383.39h3v6.25h9.11v-6.25h2.95v15.36Zm11.7,0V393.1l-7.19-9.71h3.46l5.33,7.19,5.29-7.19h3.49l-7.38,9.71v5.65Zm14.91-5v5h-3V383.39h11.46a8.53,8.53,0,0,1,2.2.24,3,3,0,0,1,1.42.77,3.08,3.08,0,0,1,.77,1.43,8.78,8.78,0,0,1,.23,2.23v1.38a7.31,7.31,0,0,1-.23,2,2.91,2.91,0,0,1-.77,1.34,3.21,3.21,0,0,1-1.42.75,9.05,9.05,0,0,1-2.2.23Zm10.11-5.71a1.75,1.75,0,0,0-.37-1.27,1.8,1.8,0,0,0-1.28-.36h-8.46V391h8.46a1.79,1.79,0,0,0,1.28-.37,1.69,1.69,0,0,0,.37-1.2v-1.4Zm5.08,10.69V383.39h14.69v3H184.52v3.39h11.35v2.48H184.52v3.44h11.69v3Zm30.15,0-5.29-5h-4.82v5h-3V383.39H211a7.13,7.13,0,0,1,2.06.26,2.9,2.9,0,0,1,1.34.82,3.41,3.41,0,0,1,.75,1.47,9.32,9.32,0,0,1,.23,2.21v.93a7.71,7.71,0,0,1-.28,2.3,2.79,2.79,0,0,1-.9,1.41,3.46,3.46,0,0,1-1.6.7,12.53,12.53,0,0,1-2.4.19l5.67,5.07Zm.75-10.09a4.12,4.12,0,0,0-.25-1.66c-.17-.37-.58-.55-1.24-.55h-9.37v4.75h9.37a1.43,1.43,0,0,0,1.15-.4,2.15,2.15,0,0,0,.34-1.4v-.74Zm10,10.09V386.43h-5.57v-3H231v3h-5.57v12.32Zm22.46,0v-6.34h-9.11v6.34h-2.95V383.39h2.95v6.25h9.11v-6.25h2.95v15.36Zm5.73,0V383.39h3v15.36Zm19.35,0L259.2,387.43v11.32h-2.86V383.39h3.22L270,394.51V383.39h2.89v15.36Zm19.19,0-6-6-4.6,4.15v1.88h-3V383.39h3v9.69l10.62-9.69h4.33l-8.28,7.46,8.24,7.9Z"
          transform="translate(-82.81 -378.98)"
        />
        <path
          fill={light ? "rgba(255,255,255,.72)" : "#252A61"}
          d="M165.05,403.37v5.42h1v-5.42h2.24v-.95h-5.49v.95Zm4.1-.95v6.37h4.67v-.94h-3.65V406h3.12v-.94h-3.12v-1.73h3.6v-.95Zm8.54-.12a3.19,3.19,0,0,0-2.35.95,3.32,3.32,0,1,0,5.27,3.93l-1-.36a2.19,2.19,0,0,1-1.93,1.11,2.11,2.11,0,0,1-1.6-.67,2.3,2.3,0,0,1-.64-1.65,2.33,2.33,0,0,1,.64-1.66,2.11,2.11,0,0,1,1.6-.66,2.17,2.17,0,0,1,1.93,1.11l1-.37a3.24,3.24,0,0,0-2.92-1.73Zm4.91,6.49V406H186v2.75h1v-6.37h-1v2.68H182.6v-2.68h-1v6.37Zm6.67,0v-4.61l3.64,4.61h.89v-6.37h-1V407l-3.63-4.62h-.9v6.37Zm6.5-.82a3.33,3.33,0,0,0,4.69-4.72,3.37,3.37,0,0,0-4.69,0,3.43,3.43,0,0,0,0,4.72Zm2.35,0a2.11,2.11,0,0,1-1.6-.67,2.3,2.3,0,0,1-.64-1.65,2.33,2.33,0,0,1,.64-1.66,2.11,2.11,0,0,1,1.6-.66,2.07,2.07,0,0,1,1.59.66,2.29,2.29,0,0,1,.65,1.66,2.27,2.27,0,0,1-.65,1.65,2.08,2.08,0,0,1-1.59.67Zm4.31-5.51v6.37h4.33v-.94h-3.31v-5.43ZM208,408a3.43,3.43,0,1,0-.94-2.36A3.24,3.24,0,0,0,208,408Zm2.35,0a2.11,2.11,0,0,1-1.6-.67,2.3,2.3,0,0,1-.64-1.65,2.33,2.33,0,0,1,.64-1.66,2.11,2.11,0,0,1,1.6-.66A2.07,2.07,0,0,1,212,404a2.29,2.29,0,0,1,.65,1.66,2.27,2.27,0,0,1-.65,1.65,2.08,2.08,0,0,1-1.59.67Zm7.45-5.63a3.28,3.28,0,0,0-2.39.95,3.31,3.31,0,0,0,4.64,4.73,3.28,3.28,0,0,0,.95-2.34c0-.08,0-.18,0-.30h-3.4v1h2.25a2.05,2.05,0,0,1-.77,1.18,2.21,2.21,0,0,1-1.36.46,2.06,2.06,0,0,1-1.56-.67,2.46,2.46,0,0,1,0-3.31,2.19,2.19,0,0,1,1.64-.66,2.23,2.23,0,0,1,2,1.11l1-.37a3.25,3.25,0,0,0-2.95-1.73Zm5.79,3.91v2.58h1v-2.63l2.45-3.74h-1.17l-1.8,2.81-1.77-2.81h-1.17l2.44,3.79Zm6.55,2.53a.69.69,0,0,0,.91,0,.67.67,0,0,0,0-.91.65.65,0,0,0-.91,0,.71.71,0,0,0,0,.91Zm5.46.05v-4.61l3.63,4.61h.9v-6.37h-1V407l-3.63-4.62h-.9v6.37Zm5.76-6.37v6.37h4.67v-.94h-3.65V406h3.12v-.94h-3.12v-1.73H246v-.95Zm7.51,3.12-2.39,3.25h1.22l1.78-2.42,1.78,2.42h1.21l-2.38-3.25,2.29-3.12H251.2l-1.69,2.3-1.69-2.3H246.6l2.3,3.12Zm6.2-2.17v5.42h1v-5.42h2.24v-.95h-5.49v.95Z"
          transform="translate(-82.81 -378.98)"
        />
      </svg>
    </a>
  );
}

export default function SovereignAIPage() {
  return (
    <main id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Product",
                name: "AI in a Box",
                brand: { "@type": "Brand", name: "HyperThink Systems" },
                category: "Private enterprise AI platform",
                description:
                  "A pre-integrated private AI platform that brings compute, AI software, data integration, and enterprise control into one deployable environment.",
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: { "@type": "Answer", text: faq.answer },
                })),
              },
            ],
          }),
        }}
      />

      <header className="topbar">
        <Logo light />
        <a className="button button-sm" href="mailto:info@hyperthinksys.com?subject=AI%20in%20a%20Box">
          <span className="button-label-desktop">Talk to expert</span>
          <span className="button-label-mobile">Talk to us</span>
          <ArrowRight size={15} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="shell hero-layout">
          <Reveal className="hero-copy" immediate>
            <h1 id="hero-title">AI in a Box</h1>
            <p className="hero-kicker">Enterprise AI. Packaged. Private. Production-ready.</p>
            <p className="hero-lede">
              A pre-integrated private enterprise AI platform that brings compute, AI software, data integration, and enterprise control into one deployable environment.
            </p>
            <div className="hero-actions">
              <a className="button" href="mailto:info@hyperthinksys.com?subject=AI%20in%20a%20Box%20assessment">
                Request an assessment <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="text-link text-link-light" href="#overview">
                See how it works <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
            <p className="hero-chain">
              <span>Your data → Your infrastructure</span>
              <span>Your AI → Your control</span>
            </p>
          </Reveal>
          <Reveal className="hero-visual" delay={0.08} immediate>
            <div className="hero-visual-frame">
              <ControlPlane />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="overview" className="section stack-section" aria-labelledby="stack-title">
        <div className="shell">
          <Reveal className="series-intro">
            <Eyebrow>The AI foundation</Eyebrow>
            <div className="series-intro-grid">
              <h2 id="stack-title">Everything enterprise AI needs, in one platform.</h2>
              <p>
                Compute, AI software, data integration, and control — packaged as one private foundation, from infrastructure to enterprise systems.
              </p>
            </div>
          </Reveal>
          <div className="stack-flow" role="list">
            {foundation.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <Reveal className="stack-layer" delay={index * 0.06} key={layer.title}>
                  <div className="stack-layer-inner" role="listitem">
                    <div className="stack-top">
                      <span className="stack-index">{layer.number}</span>
                      <div className="stack-icon" aria-hidden="true">
                        <Icon strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="stack-copy">
                      <h3>{layer.title}</h3>
                      <p>{layer.copy}</p>
                    </div>
                  </div>
                  {index < foundation.length - 1 && (
                    <span className="stack-connector" aria-hidden="true">
                      <ChevronRight size={14} />
                    </span>
                  )}
                </Reveal>
              );
            })}
          </div>
          <p className="flow-line">Infrastructure → Models → Gateway → Enterprise systems</p>
        </div>
      </section>

      <section className="section bg-mist compute" aria-labelledby="compute-title">
        <div className="shell">
          <Reveal className="series-intro">
            <Eyebrow>High-performance compute</Eyebrow>
            <div className="series-intro-grid">
              <h2 id="compute-title">The compute foundation for enterprise AI.</h2>
              <p>
                Built for demanding workloads: generative AI, agentic AI, computer vision, model inference, and enterprise applications.
              </p>
            </div>
          </Reveal>
          <div className="compute-grid">
            {computeCaps.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal className="compute-item" delay={index * 0.05} key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div className="stack-icon" aria-hidden="true"><Icon strokeWidth={1.5} /></div>
                  <h3>{item.title}</h3>
                </Reveal>
              );
            })}
          </div>
          <p className="flow-line">Compute → AI runtime → Models → Enterprise applications</p>
        </div>
      </section>

      <section className="section capabilities" aria-labelledby="capabilities-title">
        <div className="shell">
          <Reveal className="series-intro">
            <Eyebrow>From infrastructure to AI</Eyebrow>
            <div className="series-intro-grid">
              <h2 id="capabilities-title">One foundation. Multiple enterprise AI workloads.</h2>
              <p>The same private platform serves many production workloads, without a separate stack for each one.</p>
            </div>
          </Reveal>
          <div className="workload-grid">
            {workloads.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal className="workload-card" delay={index * 0.05} key={item.title}>
                  <div className="stack-icon" aria-hidden="true"><Icon strokeWidth={1.5} /></div>
                  <div>
                    <div className="workload-heading">
                      <span>{item.number}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.copy}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <p className="flow-line">One infrastructure · Multiple models · Multiple workloads</p>
        </div>
      </section>

      <section className="section bg-mist why" aria-labelledby="why-title">
        <div className="shell">
          <Reveal className="series-intro">
            <Eyebrow>Why HyperThink</Eyebrow>
            <div className="series-intro-grid">
              <h2 id="why-title">AI, infrastructure, integration, and governance.</h2>
              <p>One engagement covers the platform, the infrastructure, and the controls, so the first workload and the ones after it share a foundation.</p>
            </div>
          </Reveal>
          <div className="why-grid">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal className="why-card" delay={index * 0.06} key={item.title}>
                  <div className="stack-icon" aria-hidden="true"><Icon strokeWidth={1.5} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section governance" aria-labelledby="governance-title">
        <div className="shell">
          <Reveal className="series-intro series-intro--dark">
            <Eyebrow dark>Control at the moment of action</Eyebrow>
            <div className="series-intro-grid">
              <h2 id="governance-title">Enterprise AI governance that runs in real time.</h2>
              <p>Every request passes through one visible control chain before an agent, model, or application is permitted to act.</p>
            </div>
          </Reveal>
          <Reveal className="control-chain" role="list">
            {controlChain.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="control-step" role="listitem" key={item.label}>
                  <div className="control-step-inner">
                    <span className="control-index">{String(index + 1).padStart(2, "0")}</span>
                    <div className="control-icon" aria-hidden="true">
                      <Icon strokeWidth={1.5} />
                    </div>
                    <strong>{item.label}</strong>
                  </div>
                  {index < controlChain.length - 1 && (
                    <span className="control-connector" aria-hidden="true">
                      <ArrowRight size={14} />
                    </span>
                  )}
                </div>
              );
            })}
          </Reveal>
          <div className="governance-notes">
            <Reveal>
              <ShieldCheck aria-hidden="true" />
              <h3>Policy becomes execution</h3>
              <p>Translate approved-use policies into runtime checks across prompts, retrieval, model routing, and agent actions.</p>
            </Reveal>
            <Reveal delay={0.08}>
              <LockKeyhole aria-hidden="true" />
              <h3>Every action leaves evidence</h3>
              <p>Maintain inspectable records of identity, context, policy decisions, tool calls, outputs, and human approvals.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-mist deployment" aria-labelledby="deploy-title">
        <div className="shell">
          <Reveal className="series-intro">
            <Eyebrow>Your environment, your choice</Eyebrow>
            <div className="series-intro-grid">
              <h2 id="deploy-title">A private environment you control.</h2>
              <p>
                Run AI in a Box inside your data center or self-hosted in a dedicated cloud tenancy, with the same control model either way.
              </p>
            </div>
          </Reveal>
          <div className="deploy-grid">
            <Reveal className="deploy-card">
              <div className="deploy-icon"><Server aria-hidden="true" /></div>
              <p className="card-kicker">Maximum physical control</p>
              <h3>Fully on-premise</h3>
              <p>Run the complete private AI platform in your facilities, including models, data services, orchestration, guardrails, and observability.</p>
              <ul>
                <li><Check aria-hidden="true" /> Air-gapped options</li>
                <li><Check aria-hidden="true" /> Local model serving</li>
                <li><Check aria-hidden="true" /> Customer-managed operations</li>
              </ul>
            </Reveal>
            <Reveal className="deploy-card" delay={0.08}>
              <div className="deploy-icon"><Cloud aria-hidden="true" /></div>
              <p className="card-kicker">Controlled cloud economics</p>
              <h3>Cloud, self-hosted</h3>
              <p>Deploy into a dedicated cloud account or sovereign region while keeping keys, network boundaries, identities, and runtime policies under your control.</p>
              <ul>
                <li><Check aria-hidden="true" /> Dedicated tenancy</li>
                <li><Check aria-hidden="true" /> Regional data residency</li>
                <li><Check aria-hidden="true" /> Portable architecture</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section engagement" aria-labelledby="engagement-title">
        <div className="shell">
          <Reveal className="series-intro">
            <Eyebrow>How we take it live</Eyebrow>
            <div className="series-intro-grid">
              <h2 id="engagement-title">From compute to production AI.</h2>
              <p>AI, infrastructure, integration, and governance — designed together, then expanded as models and workloads grow.</p>
            </div>
          </Reveal>
          <div className="timeline">
            {stages.map((stage, index) => (
              <Reveal className="timeline-step" delay={index * 0.08} key={stage.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{stage.title}</h3>
                  <p>{stage.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section" aria-labelledby="faq-title">
        <div className="shell faq-layout">
          <Reveal className="faq-intro">
            <Eyebrow>Answers before architecture</Eyebrow>
            <h2 id="faq-title">Questions enterprise teams ask first.</h2>
            <p className="section-lede">
              What you receive, where your data stays, and how a first workload becomes a production platform.
            </p>
            <a className="text-link faq-contact-link" href="mailto:info@hyperthinksys.com?subject=AI%20in%20a%20Box%20question">
              Ask a different question <ArrowRight size={16} aria-hidden="true" />
            </a>
          </Reveal>
          <Reveal className="faq-list" delay={0.08}>
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="faq-toggle" aria-hidden="true"><Plus /></span>
                </summary>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-title">
        <div className="final-motif" aria-hidden="true"><ControlPlane compact /></div>
        <div className="shell">
          <Reveal>
            <Eyebrow dark>Let’s build what’s next</Eyebrow>
            <h2 id="cta-title">Package private AI for production.</h2>
            <p>Move from isolated experiments to one foundation your teams can deploy, govern, and scale.</p>
            <div className="hero-actions">
              <a className="button" href="mailto:info@hyperthinksys.com?subject=Discuss%20AI%20in%20a%20Box">
                Talk to us <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="button button-outline" href="/ai-in-a-box-overview.pdf" download>
                Download overview <Download size={17} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
