import React from 'react';
import { UserCheck, ShieldCheck, Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function AboutPage({ onRequestService }) {
  return (
    <div>
      {/* Page Header */}
      <section
        style={{
          backgroundColor: 'var(--brand-navy-950)',
          color: 'var(--text-white)',
          padding: '3.5rem 0 3rem 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(2, 132, 199, 0.25)',
              border: '1px solid rgba(14, 165, 233, 0.4)',
              color: 'var(--brand-cyan-300)',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            <UserCheck size={14} />
            <span>Company & Leadership</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            About DMEIT Ventures Ltd
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: '1.6' }}>
            Practical Kenyan water contractors built on heavy machinery, skilled field technicians, and direct communication.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
              alignItems: 'center',
              marginBottom: '4rem',
            }}
            className="about-page-grid"
          >
            {/* Story */}
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '1.25rem' }}>
                Dependable Water Systems That Stand the Test of Time
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                {companyData.name} was established to solve one of the most critical challenges facing Kenyan property owners, farmers, and rural communities: <strong>securing clean, reliable groundwater that does not run dry or cost a fortune to pump</strong>.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                Under the direct leadership of Director <strong>{companyData.director}</strong>, our team brings together hydrogeologists, certified drillers, mechanical technicians, and civil piping specialists. We operate our own heavy drilling rigs, support vehicles, and testing pumps.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {companyData.values.map((val, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--brand-cyan-100)',
                        color: 'var(--brand-blue-700)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <CheckCircle size={16} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--brand-navy-950)' }}>
                        {val.title}
                      </h4>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                        {val.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onRequestService()}
                className="btn btn-primary btn-lg"
                style={{ fontWeight: 700 }}
              >
                <span>Talk to David Nkadayo & Our Team</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Visual Box */}
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '2px solid var(--border-subtle)', boxShadow: 'var(--shadow-lg)' }}>
              <img
                src="/assets/images/borehole_drilling_rig_dmeit.jpg"
                alt="DMEIT heavy drilling rig operating in field"
                style={{ width: '100%', height: '380px', objectFit: 'cover' }}
              />
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-primary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-blue-700)', textTransform: 'uppercase' }}>
                    Company Leadership
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Director: {companyData.director}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.25rem' }}>
                  {companyData.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  Headquartered in Kenya with nationwide field mobilization for drilling and water distribution projects.
                </p>
              </div>
            </div>
          </div>

          {/* Real Equipment Grid */}
          <div
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem 2rem',
              border: '1.5px solid var(--border-subtle)',
            }}
          >
            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Why Customers Choose DMEIT
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
              }}
            >
              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                <Wrench size={24} color="var(--brand-blue-700)" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.35rem' }}>
                  No Middlemen
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: '1.5' }}>
                  You communicate directly with the team that owns the equipment and carries out the work on your land.
                </p>
              </div>

              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                <ShieldCheck size={24} color="var(--brand-blue-700)" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.35rem' }}>
                  Honest Technical Advice
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: '1.5' }}>
                  If a site is not suitable for drilling or requires a specific casing method, we state it transparently.
                </p>
              </div>

              <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                <CheckCircle size={24} color="var(--brand-blue-700)" style={{ marginBottom: '0.75rem' }} />
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.35rem' }}>
                  Complete End-to-End Delivery
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: '1.5' }}>
                  We don't leave you stranded with just a hole in the ground. We equip the pump, solar panels, and water pipes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 900px) {
          .about-page-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </div>
  );
}
