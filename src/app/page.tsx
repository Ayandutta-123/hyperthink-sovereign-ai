"use client";

import { useEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  ClipboardList,
  Cloud,
  Download,
  FileCheck2,
  Fingerprint,
  Layers,
  LockKeyhole,
  Network,
  Plus,
  Server,
  Shield,
  ShieldCheck,
  SquareTerminal,
  type LucideIcon,
  Workflow,
} from "lucide-react";

const stack: { number: string; title: string; copy: string; icon: LucideIcon }[] = [
  { number: "01", title: "Infrastructure", copy: "Compute, storage, network and accelerators in an environment you control.", icon: Server },
  { number: "02", title: "Platform", copy: "A private AI foundation for models, data services and developer operations.", icon: Layers },
  { number: "03", title: "Orchestration", copy: "Route workloads, agents and tools across the right models and resources.", icon: Workflow },
  { number: "04", title: "Governance", copy: "Policy, identity, observability and approvals embedded in every workflow.", icon: ShieldCheck },
  { number: "05", title: "Applications", copy: "Production AI experiences grounded in your enterprise context.", icon: Network },
];

const controlChain: { label: string; icon: LucideIcon }[] = [
  { label: "Identity", icon: Fingerprint },
  { label: "Policy", icon: FileCheck2 },
  { label: "Guardrail", icon: Shield },
  { label: "Tool call", icon: SquareTerminal },
  { label: "Audit", icon: ClipboardList },
];

const capabilities = [
  {
    title: "Finance AI",
    items: ["Financial close copilot", "Invoice intelligence", "Cash-flow forecasting", "Procurement analysis"],
  },
  {
    title: "Operations AI",
    items: ["Predictive maintenance", "Supply-chain planning", "Field service agents", "Quality inspection"],
  },
  {
    title: "Risk & Security AI",
    items: ["Fraud detection", "Threat investigation", "Compliance monitoring", "Policy intelligence"],
  },
  {
    title: "Customer & Knowledge AI",
    items: ["Private enterprise search", "Service copilots", "Document intelligence", "Multilingual knowledge agents"],
  },
];

const stages = ["Strategy", "Architecture", "Implementation", "Governance", "Optimization"];

const faqs = [
  {
    question: "What is sovereign AI?",
    answer:
      "Sovereign AI is an enterprise approach to building and operating AI within defined control boundaries for infrastructure, data, models, access, and policy. It gives organizations direct authority over where AI runs, what it can access, and how every action is governed.",
  },
  {
    question: "What’s the difference between sovereign AI and sovereign cloud?",
    answer:
      "A sovereign cloud focuses on the residency, jurisdiction, and operational control of cloud infrastructure. Sovereign AI extends those controls across models, training and retrieval data, agents, tools, runtime policy, and auditability.",
  },
  {
    question: "Can sovereign AI run fully on-premise?",
    answer:
      "Yes. A sovereign AI platform can run entirely on-premise, including model serving, vector storage, orchestration, guardrails, observability, and enterprise integrations.",
  },
  {
    question: "How is sovereign AI different from using a public LLM API?",
    answer:
      "Public LLM APIs send requests to a provider-controlled service. Sovereign AI keeps the operating boundary under enterprise control and adds explicit governance over models, data access, tool use, identities, and audit records.",
  },
  {
    question: "Can we use our existing cloud, data center, and security tools?",
    answer:
      "Yes. The platform is designed to work with existing identity providers, data platforms, security controls, observability tools, and enterprise applications. The target architecture is shaped around your current environment rather than forcing a complete replacement.",
  },
  {
    question: "Which AI models can we run?",
    answer:
      "You can operate approved open, commercial, and organization-specific models based on workload, language, risk, and performance needs. Model routing and policy controls help ensure each request uses an appropriate model.",
  },
  {
    question: "How long does a sovereign AI implementation take?",
    answer:
      "Timing depends on infrastructure readiness, integrations, security approvals, and the first use case. A focused assessment defines the target architecture and phased roadmap before implementation begins, reducing uncertainty and avoiding an oversized first release.",
  },
  {
    question: "How do we start without committing to a full platform rollout?",
    answer:
      "Start with an architecture and governance assessment around one high-value use case. This establishes control requirements, validates deployment choices, and produces a practical path from a contained pilot to production.",
  },
];

/** CSS + Intersection Observer — same pattern Elementor Motion Effects use (no Framer). */
function Reveal({
  children,
  className = "",
  delay = 0,
  immediate = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
}) {
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
  return (
    <div
      className={`control-plane ${compact ? "control-plane--compact" : ""}`}
      role="img"
      aria-label="Animated sovereign AI control plane connecting protected infrastructure, models, policy, and applications"
    >
      <svg viewBox="0 0 680 560" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id={`beam-${compact}`} x1="180" y1="430" x2="515" y2="112" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C1262A" stopOpacity="0.1" />
            <stop offset="0.5" stopColor="#C1262A" />
            <stop offset="1" stopColor="#F2A6A9" stopOpacity="0.25" />
          </linearGradient>
          <radialGradient id={`core-${compact}`}>
            <stop stopColor="#C1262A" stopOpacity="0.32" />
            <stop offset="1" stopColor="#C1262A" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle className="core-glow" cx="340" cy="280" r="154" fill={`url(#core-${compact})`} />
        <g className="orbit orbit-one">
          <ellipse cx="340" cy="280" rx="232" ry="124" stroke="rgba(255,255,255,.12)" />
          <circle cx="112" cy="264" r="7" fill="#C1262A" />
        </g>
        <g className="orbit orbit-two">
          <ellipse cx="340" cy="280" rx="168" ry="238" stroke="rgba(255,255,255,.1)" transform="rotate(42 340 280)" />
          <circle cx="490" cy="105" r="5" fill="#fff" fillOpacity=".72" />
        </g>
        <path className="beam" d="M159 427L269 336L340 280L426 207L521 115" stroke={`url(#beam-${compact})`} strokeWidth="2" />
        <path d="M159 427L284 430L386 475L521 443" stroke="rgba(255,255,255,.1)" />
        <path d="M152 132L245 196L340 280L503 339" stroke="rgba(255,255,255,.1)" />
        {[
          [159, 427, "DATA"],
          [152, 132, "IDENTITY"],
          [521, 115, "POLICY"],
          [521, 443, "APPS"],
          [340, 280, "CONTROL"],
        ].map(([x, y, label], index) => (
          <g key={String(label)} className="node" style={{ animationDelay: `${index * 0.5}s` }}>
            <circle cx={Number(x)} cy={Number(y)} r={label === "CONTROL" ? 52 : 30} fill="#0D1740" stroke={label === "CONTROL" ? "#C1262A" : "rgba(255,255,255,.2)"} />
            <circle cx={Number(x)} cy={Number(y)} r={label === "CONTROL" ? 40 : 22} fill={label === "CONTROL" ? "#C1262A" : "#121E4B"} fillOpacity={label === "CONTROL" ? ".18" : "1"} />
            <text x={Number(x)} y={Number(y) + 4} textAnchor="middle" fill="white" fillOpacity={label === "CONTROL" ? "1" : ".65"} fontSize={label === "CONTROL" ? "11" : "8"} fontWeight="700" letterSpacing="1.2">
              {label}
            </text>
          </g>
        ))}
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
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      <header className="topbar">
        <Logo light />
        <a className="button button-sm" href="mailto:info@hyperthinksys.com?subject=Sovereign%20AI%20assessment">
          <span className="button-label-desktop">Talk to an architect</span>
          <span className="button-label-mobile">Talk to us</span>
          <ArrowRight size={15} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="shell hero-layout">
          <Reveal className="hero-copy" immediate>
            <h1 id="hero-title">
              Sovereign AI.
              <span className="hero-title-line">
                <span className="hero-nowrap">Your infrastructure.</span> Your rules.
              </span>
            </h1>
            <p className="hero-lede">
              HyperThink Systems’ Sovereign AI gives enterprises AI infrastructure, models, and governance entirely inside their control—your data, your private AI infrastructure, your operating boundaries.
            </p>
            <div className="hero-actions">
              <a className="button" href="mailto:info@hyperthinksys.com?subject=Sovereign%20AI%20architecture%20assessment">
                Request an assessment <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="text-link text-link-light" href="#meaning">
                See how it works <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
          <Reveal className="hero-visual" delay={0.08} immediate>
            <div className="hero-visual-frame">
              <ControlPlane />
              <span className="signal-chip signal-chip-policy"><i aria-hidden="true" />Policy enforced</span>
              <span className="signal-chip signal-chip-audit"><i aria-hidden="true" />Audit ready</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section problem" aria-labelledby="problem-title">
        <div className="shell">
          <Reveal>
            <Eyebrow>The control gap</Eyebrow>
            <h2 id="problem-title" className="statement">
              AI adoption is outrunning <span>AI control.</span>
            </h2>
            <p className="section-lede">
              The question is no longer whether to adopt AI. It is whether you can prove where it runs, what data it touches, and who—or what—is allowed to act.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="meaning" className="section bg-mist" aria-labelledby="meaning-title">
        <div className="shell">
          <Reveal>
            <Eyebrow>A clear definition</Eyebrow>
            <h2 id="meaning-title">What is sovereign AI?</h2>
            <p className="definition">
              Sovereign AI is an enterprise approach to operating AI within your defined boundaries for infrastructure, data, models, access, and policy. It establishes AI data sovereignty by giving your organization direct authority over where AI runs, what it can use, and how every action is governed.
            </p>
          </Reveal>
          <div className="pillars">
            {[
              {
                number: "01",
                title: "Own the boundary",
                copy: "Keep models, private AI infrastructure, and sensitive data inside the jurisdiction and environment your organization chooses—so AI data sovereignty is architectural, not aspirational.",
              },
              {
                number: "02",
                title: "Define permission",
                copy: "Turn enterprise AI governance into executable rules for identities, information, models, agents, and tools.",
              },
              {
                number: "03",
                title: "Enforce at runtime",
                copy: "Apply security and policy at the moment of action—not after a model response has already left the boundary.",
              },
            ].map((pillar, index) => (
              <Reveal className="pillar" delay={index * 0.08} key={pillar.title}>
                <span className="pillar-number">{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="regional-note">
            <span className="regional-marker" aria-hidden="true" />
            <p>
              For organizations evaluating sovereign AI in the UAE, sovereign AI in Saudi Arabia, or deployments across India, the architecture can align data residency, local regulatory obligations, and enterprise security without fragmenting the operating model.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="overview" className="section stack-section" aria-labelledby="stack-title">
        <div className="shell">
          <Reveal className="series-intro">
            <Eyebrow>One controlled foundation</Eyebrow>
            <div className="series-intro-grid">
              <h2 id="stack-title">Sovereign AI infrastructure, end to end.</h2>
              <p>
                A sovereign AI platform that connects the physical environment to production applications through one governed control plane.
              </p>
            </div>
          </Reveal>
          <div className="stack-flow" role="list">
            {stack.map((layer, index) => {
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
                  {index < stack.length - 1 && (
                    <span className="stack-connector" aria-hidden="true">
                      <ChevronRight size={14} />
                    </span>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-mist deployment" aria-labelledby="deploy-title">
        <div className="shell">
          <Reveal>
            <Eyebrow>Your environment, your choice</Eyebrow>
            <h2 id="deploy-title">How sovereign AI infrastructure deploys.</h2>
            <p className="section-lede">
              Use the same control model whether workloads must remain inside your data center or run in a dedicated cloud tenancy.
            </p>
          </Reveal>
          <div className="deploy-grid">
            <Reveal className="deploy-card">
              <div className="deploy-icon"><Server aria-hidden="true" /></div>
              <p className="card-kicker">Maximum physical control</p>
              <h3>Fully on-premise</h3>
              <p>Run the complete private AI infrastructure in your facilities, including models, data services, orchestration, guardrails, and observability—preserving AI data sovereignty at the physical layer.</p>
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

      <section className="section capabilities" aria-labelledby="capabilities-title">
        <div className="shell">
          <Reveal>
            <Eyebrow>From foundation to outcomes</Eyebrow>
            <h2 id="capabilities-title">What you can build on it.</h2>
            <p className="section-lede">A governed capability map for the work that matters—without creating another disconnected AI pilot.</p>
          </Reveal>
          <div className="capability-map">
            {capabilities.map((group, index) => (
              <Reveal className="capability-group" delay={index * 0.08} key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}<ArrowRight size={15} aria-hidden="true" /></li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist engagement" aria-labelledby="engagement-title">
        <div className="shell">
          <Reveal>
            <Eyebrow>A path to production</Eyebrow>
            <h2 id="engagement-title">How we work together.</h2>
          </Reveal>
          <div className="timeline">
            {stages.map((stage, index) => (
              <Reveal className="timeline-step" delay={index * 0.08} key={stage}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{stage}</h3>
              </Reveal>
            ))}
          </div>
          <Reveal className="timeline-copy">
            <p>Start with the control outcomes your organization needs. Leave with an operational AI capability designed to improve as models, regulations, and workloads change.</p>
          </Reveal>
        </div>
      </section>

      <section className="section faq-section" aria-labelledby="faq-title">
        <div className="shell faq-layout">
          <Reveal className="faq-intro">
            <Eyebrow>Answers before architecture</Eyebrow>
            <h2 id="faq-title">Questions enterprise teams ask first.</h2>
            <p className="section-lede">
              Clear answers for technology, security, risk, and business leaders evaluating a controlled path to production AI.
            </p>
            <a className="text-link faq-contact-link" href="mailto:info@hyperthinksys.com?subject=Sovereign%20AI%20question">
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
            <Eyebrow dark>The next move is yours</Eyebrow>
            <h2 id="cta-title">Build AI with confidence.</h2>
            <p>Move from isolated experiments to an AI operating model your teams, regulators, and customers can trust.</p>
            <div className="hero-actions">
              <a className="button" href="mailto:info@hyperthinksys.com?subject=Discuss%20Sovereign%20AI">
                Talk to us <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="button button-outline" href="/sovereign-ai-overview.pdf" download>
                Download overview <Download size={17} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
