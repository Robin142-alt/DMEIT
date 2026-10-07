import React, { useState } from 'react';
import {
  HelpCircle,
  Droplets,
  Wrench,
  Layers,
  ArrowRight,
  ArrowLeft,
  Users,
  Compass,
  Check,
  Send,
  Phone,
  Mail,
  Copy,
  AlertCircle,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
} from 'lucide-react';
import { companyData } from '../data/companyData';
import { formatHelpGuideMessage, buildWhatsAppLink } from '../utils/whatsapp';

export default function HelpPage() {
  // Navigation / Wizard State
  // 0: First question (What do you need help with?)
  // 1: Follow-up question (Specific to first answer)
  // 2: Suggested Next Step Result
  // 3: Customer Details Form
  // 4: WhatsApp Ready Screen
  const [currentStep, setCurrentStep] = useState(0);

  // Selected Answers State
  const [selectedMainProblem, setSelectedMainProblem] = useState(null);
  const [followUpAnswer, setFollowUpAnswer] = useState('');
  const [freeTextExplanation, setFreeTextExplanation] = useState('');

  // Result Recommendation State
  const [recommendedResult, setRecommendedResult] = useState({
    title: '',
    description: '',
    image: '',
  });

  // Customer Contact Info State
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    location: '',
    notes: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [copied, setCopied] = useState(false);

  // Main Problem Options for Step 0
  const mainProblems = [
    {
      id: 'need-water',
      title: 'I Need Water',
      subtitle: 'Need groundwater for my home, farm, or site',
      icon: <Droplets size={26} color="var(--brand-blue-700)" />,
    },
    {
      id: 'have-borehole',
      title: 'I Have a Borehole',
      subtitle: 'Already drilled, need a pump, power, or repairs',
      icon: <Wrench size={26} color="var(--brand-blue-700)" />,
    },
    {
      id: 'need-storage',
      title: 'I Need Water Storage',
      subtitle: 'Need an elevated tower or ground water tank',
      icon: <Layers size={26} color="var(--brand-blue-700)" />,
    },
    {
      id: 'move-water',
      title: 'I Need to Move Water',
      subtitle: 'Need pipelines to move water across my land',
      icon: <ArrowRight size={26} color="var(--brand-blue-700)" />,
    },
    {
      id: 'farm-community',
      title: 'I Need Water for a Farm or Community',
      subtitle: 'Cattle troughs, irrigation, or community taps',
      icon: <Users size={26} color="var(--brand-blue-700)" />,
    },
    {
      id: 'not-sure',
      title: "I'm Not Sure",
      subtitle: 'I have a water problem but don’t know where to start',
      icon: <HelpCircle size={26} color="var(--brand-blue-700)" />,
    },
  ];

  // Handler for Step 0 Choice
  const handleSelectMainProblem = (problem) => {
    setSelectedMainProblem(problem);

    if (problem.id === 'not-sure') {
      // Direct path to free-text explanation
      setCurrentStep(1);
    } else {
      setCurrentStep(1);
    }
  };

  // Handler for Follow-up Choices in Step 1
  const handleFollowUpChoice = (choiceText, resultData) => {
    setFollowUpAnswer(choiceText);
    setRecommendedResult(resultData);
    setCurrentStep(2); // Move to Result step
  };

  // Handler for "I'm Not Sure" free text submit
  const handleFreeTextSubmit = (e) => {
    e.preventDefault();
    if (!freeTextExplanation.trim()) return;

    setFollowUpAnswer(freeTextExplanation.trim());
    setRecommendedResult({
      title: 'Technical Guidance & Site Advice',
      description:
        'Our technical team will review what you want to achieve and advise you on the right first step for your land.',
      image: '/assets/images/borehole_drilling_rig_dmeit.jpg',
    });
    setCurrentStep(2);
  };

  // Handler to proceed from Result to Details
  const handleProceedToDetails = () => {
    setCurrentStep(3);
  };

  // Validate and proceed to WhatsApp Screen
  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!customerDetails.name.trim()) {
      errs.name = 'Please enter your name so our team knows who to address.';
    }
    if (!customerDetails.phone.trim()) {
      errs.phone = 'Please enter your phone number so our team can reach you.';
    } else if (customerDetails.phone.replace(/[^0-9]/g, '').length < 9) {
      errs.phone = 'Please enter a valid phone number (e.g. 0704 200 502).';
    }

    if (Object.keys(errs).length > 0) {
      setFormErrors(errs);
      return;
    }

    setFormErrors({});
    setCurrentStep(4); // WhatsApp Ready
  };

  // Start Over Reset
  const handleStartOver = () => {
    setCurrentStep(0);
    setSelectedMainProblem(null);
    setFollowUpAnswer('');
    setFreeTextExplanation('');
    setRecommendedResult({ title: '', description: '', image: '' });
    setCustomerDetails({ name: '', phone: '', location: '', notes: '' });
    setFormErrors({});
  };

  // Prepare WhatsApp Message
  const formattedWhatsAppMsg = formatHelpGuideMessage({
    mainNeed: selectedMainProblem?.title,
    situation: followUpAnswer,
    suggestedStep: recommendedResult.title,
    location: customerDetails.location,
    name: customerDetails.name,
    phone: customerDetails.phone,
    notes: customerDetails.notes,
  });

  const whatsappLink = buildWhatsAppLink(formattedWhatsAppMsg);

  const handleOpenWhatsApp = () => {
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedWhatsAppMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-secondary)', minHeight: '85vh', padding: '2.5rem 0 4.5rem 0' }}>
      <div className="container" style={{ maxWidth: '680px' }}>
        {/* Short Top Header (Always visible, minimal height) */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.3rem 0.8rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--brand-cyan-100)',
              color: 'var(--brand-blue-700)',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            <Compass size={14} />
            <span>Interactive Guide</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--brand-navy-950)',
              marginBottom: '0.45rem',
              lineHeight: 1.2,
            }}
          >
            Need Help?
          </h1>

          <p style={{ fontSize: '1.025rem', color: 'var(--text-body)', lineHeight: '1.5', maxWidth: '520px', margin: '0 auto' }}>
            Tell us what you're trying to do. We'll help you find the right next step.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
            You don't need to know the technical service name.
          </p>
        </div>

        {/* The Guided Interactive Container */}
        <div
          className="card"
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderRadius: 'var(--radius-xl)',
            border: '1.5px solid var(--border-subtle)',
            padding: '2rem 1.75rem',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
          }}
        >
          {/* Top Progress / Back Bar */}
          {currentStep > 0 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
                paddingBottom: '0.75rem',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              <button
                onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: 'var(--brand-blue-700)',
                }}
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>

              <button
                onClick={handleStartOver}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.825rem',
                  color: 'var(--text-muted)',
                }}
              >
                <RotateCcw size={13} />
                <span>Start Over</span>
              </button>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 0: What do you need help with?                      */}
          {/* ======================================================== */}
          {currentStep === 0 && (
            <div>
              <h2
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--brand-navy-950)',
                  marginBottom: '1.25rem',
                }}
              >
                What do you need help with?
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {mainProblems.map((prob) => (
                  <button
                    key={prob.id}
                    onClick={() => handleSelectMainProblem(prob)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.1rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1.5px solid var(--border-subtle)',
                      textAlign: 'left',
                      transition: 'all 150ms ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--brand-blue-500)';
                      e.currentTarget.style.backgroundColor = 'var(--brand-cyan-50)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-subtle)';
                      e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: '#FFFFFF',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {prob.icon}
                    </div>
                    <div style={{ flex: '1 1 auto' }}>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--brand-navy-950)', margin: 0 }}>
                        {prob.title}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        {prob.subtitle}
                      </p>
                    </div>
                    <ArrowRight size={18} color="var(--brand-blue-700)" style={{ flexShrink: 0 }} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 1: Contextual Follow-Up Question                     */}
          {/* ======================================================== */}
          {currentStep === 1 && (
            <div>
              {/* PATH 1: I Need Water */}
              {selectedMainProblem?.id === 'need-water' && (
                <div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.5rem' }}>
                    Do you already know where you want to drill?
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    A quick answer helps us determine whether a site ground survey or direct drilling comes first.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <button
                      onClick={() =>
                        handleFollowUpChoice('Yes, I have a site in mind', {
                          title: 'Borehole Drilling',
                          description:
                            'DMEIT can guide you through the next steps for mobilizing our drilling rig to your site.',
                          image: '/assets/images/borehole_drilling_rig_dmeit.jpg',
                        })
                      }
                      className="btn btn-secondary btn-lg"
                      style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
                    >
                      <span style={{ fontWeight: 700 }}>Yes, I know where to drill</span>
                      <ArrowRight size={18} />
                    </button>

                    <button
                      onClick={() =>
                        handleFollowUpChoice('No, I need help finding the spot', {
                          title: 'Hydrogeological Survey',
                          description:
                            'We study the land scientifically to help identify the best location and estimated depth before drilling.',
                          image: '/assets/images/solar_array_field.jpg',
                        })
                      }
                      className="btn btn-secondary btn-lg"
                      style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
                    >
                      <span style={{ fontWeight: 700 }}>No, I need help finding the right spot</span>
                      <ArrowRight size={18} />
                    </button>

                    <button
                      onClick={() =>
                        handleFollowUpChoice('Not sure, need advice', {
                          title: 'Hydrogeological Survey',
                          description:
                            'We recommend beginning with a ground survey to confirm groundwater depth and geological conditions.',
                          image: '/assets/images/solar_array_field.jpg',
                        })
                      }
                      className="btn btn-secondary btn-lg"
                      style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
                    >
                      <span style={{ fontWeight: 700 }}>Not Sure / I Need Guidance</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* PATH 2: I Have a Borehole */}
              {selectedMainProblem?.id === 'have-borehole' && (
                <div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.5rem' }}>
                    What do you need help with?
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    Tell us what stage your existing borehole is at.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <button
                      onClick={() =>
                        handleFollowUpChoice('Getting Water Out', {
                          title: 'Borehole Equipping & Pumps',
                          description:
                            'You may need a submersible pump, solar panel array, or control panel installed to lift water reliably.',
                          image: '/assets/images/submersible_pump_installation.jpg',
                        })
                      }
                      className="btn btn-secondary btn-lg"
                      style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
                    >
                      <span style={{ fontWeight: 700 }}>Getting Water Out (Pumps & Solar)</span>
                      <ArrowRight size={18} />
                    </button>

                    <button
                      onClick={() =>
                        handleFollowUpChoice('Storing the Water', {
                          title: 'Water Storage Facilities',
                          description:
                            'You may need an elevated steel tower or a ground masonry tank to safely store pumped water.',
                          image: '/assets/images/elevated_steel_tank_tower.jpg',
                        })
                      }
                      className="btn btn-secondary btn-lg"
                      style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
                    >
                      <span style={{ fontWeight: 700 }}>Storing the Water (Towers & Tanks)</span>
                      <ArrowRight size={18} />
                    </button>

                    <button
                      onClick={() =>
                        handleFollowUpChoice('Moving the Water', {
                          title: 'Pipeline Installation',
                          description:
                            'You may need durable HDPE pipelines to move water to your home, farm, or animals.',
                          image: '/assets/images/hdpe_pipeline_laying.jpg',
                        })
                      }
                      className="btn btn-secondary btn-lg"
                      style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
                    >
                      <span style={{ fontWeight: 700 }}>Moving the Water (Pipelines)</span>
                      <ArrowRight size={18} />
                    </button>

                    <button
                      onClick={() =>
                        handleFollowUpChoice('Not Sure / General Inspection', {
                          title: 'Borehole Inspection & Advice',
                          description:
                            'Our team can test the borehole condition and advise on what is needed.',
                          image: '/assets/images/wellhead_water_meter.jpg',
                        })
                      }
                      className="btn btn-secondary btn-lg"
                      style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
                    >
                      <span style={{ fontWeight: 700 }}>I’m Not Sure / Need Inspection</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* PATH 3: I Need Water Storage */}
              {selectedMainProblem?.id === 'need-storage' && (
                <div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.5rem' }}>
                    What is the water mainly for?
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    We help you determine whether an elevated steel gravity tower or ground tank fits best.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {['Home / Domestic Use', 'Farm / Agriculture', 'Business / Institution', 'Community Water Point', 'Other / Not Sure'].map((useType) => (
                      <button
                        key={useType}
                        onClick={() =>
                          handleFollowUpChoice(useType, {
                            title: 'Water Storage Facilities',
                            description:
                              'We can help you look at a suitable way to store water for your project, such as elevated steel towers or ground tanks.',
                            image: '/assets/images/elevated_steel_tank_tower.jpg',
                          })
                        }
                        className="btn btn-secondary btn-lg"
                        style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
                      >
                        <span style={{ fontWeight: 700 }}>{useType}</span>
                        <ArrowRight size={18} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* PATH 4: I Need to Move Water */}
              {selectedMainProblem?.id === 'move-water' && (
                <div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.5rem' }}>
                    Where does the water need to go?
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    We install pipelines to move water wherever it is needed across your land.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {[
                      { label: 'Nearby (Within the compound)', value: 'Nearby within compound' },
                      { label: 'Across a Larger Property or Farm', value: 'Across larger farm' },
                      { label: 'To Several Distribution Points', value: 'Multiple points' },
                      { label: 'I’m Not Sure', value: 'Unsure of distance' },
                    ].map((dest) => (
                      <button
                        key={dest.value}
                        onClick={() =>
                          handleFollowUpChoice(dest.value, {
                            title: 'Pipeline Installation',
                            description:
                              'We can discuss the right pipe sizes and trenching route to move water efficiently and without leaks.',
                            image: '/assets/images/hdpe_pipeline_laying.jpg',
                          })
                        }
                        className="btn btn-secondary btn-lg"
                        style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
                      >
                        <span style={{ fontWeight: 700 }}>{dest.label}</span>
                        <ArrowRight size={18} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* PATH 5: Farm or Community */}
              {selectedMainProblem?.id === 'farm-community' && (
                <div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.5rem' }}>
                    What are you mainly trying to do?
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    Pick the primary goal for your farm or community project.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    <button
                      onClick={() =>
                        handleFollowUpChoice('Find a Water Source', {
                          title: 'Ground Survey & Borehole Drilling',
                          description:
                            'We study the land and drill to provide dependable groundwater for your community or farm.',
                          image: '/assets/images/borehole_drilling_rig_dmeit.jpg',
                        })
                      }
                      className="btn btn-secondary btn-lg"
                      style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
                    >
                      <span style={{ fontWeight: 700 }}>Find a Water Source</span>
                      <ArrowRight size={18} />
                    </button>

                    <button
                      onClick={() =>
                        handleFollowUpChoice('Water Livestock', {
                          title: 'Livestock & Cattle Troughs',
                          description:
                            'We build durable reinforced concrete watering troughs connected to reliable borehole supply lines for cattle, sheep, and goats.',
                          image: '/assets/images/concrete_cattle_trough_tower.jpg',
                        })
                      }
                      className="btn btn-secondary btn-lg"
                      style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
                    >
                      <span style={{ fontWeight: 700 }}>Water Livestock (Cattle Troughs)</span>
                      <ArrowRight size={18} />
                    </button>

                    <button
                      onClick={() =>
                        handleFollowUpChoice('Harvest Rainwater & Seasonal Runoff', {
                          title: 'Water Pans, Dams & Sand Dams',
                          description:
                            'We construct water catchment pans, masonry sand dams, and earth dams to harvest seasonal runoff for livestock, irrigation, and community storage.',
                          image: '/assets/images/sand_dam_water_catchment.jpg',
                        })
                      }
                      className="btn btn-secondary btn-lg"
                      style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
                    >
                      <span style={{ fontWeight: 700 }}>Harvest Rainwater (Water Pans, Dams & Sand Dams)</span>
                      <ArrowRight size={18} />
                    </button>

                    <button
                      onClick={() =>
                        handleFollowUpChoice('Provide Water for People', {
                          title: 'Communal Water Point or Kiosk',
                          description:
                            'Clean tap stands and water kiosks so community members can easily and safely collect water.',
                          image: '/assets/images/community_trench_digging.jpg',
                        })
                      }
                      className="btn btn-secondary btn-lg"
                      style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
                    >
                      <span style={{ fontWeight: 700 }}>Provide Water for People (Water Kiosks)</span>
                      <ArrowRight size={18} />
                    </button>

                    <button
                      onClick={() =>
                        handleFollowUpChoice('Store Water', {
                          title: 'Water Storage Facilities',
                          description:
                            'Elevated steel towers or ground tanks for community and farm reserves.',
                          image: '/assets/images/elevated_steel_tank_tower.jpg',
                        })
                      }
                      className="btn btn-secondary btn-lg"
                      style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
                    >
                      <span style={{ fontWeight: 700 }}>Store Water (Tanks & Towers)</span>
                      <ArrowRight size={18} />
                    </button>

                    <button
                      onClick={() =>
                        handleFollowUpChoice('Move Water Across Land', {
                          title: 'Pipeline Installation',
                          description:
                            'Pipelines to supply homes, farms, and grazing areas reliably.',
                          image: '/assets/images/hdpe_pipeline_laying.jpg',
                        })
                      }
                      className="btn btn-secondary btn-lg"
                      style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
                    >
                      <span style={{ fontWeight: 700 }}>Move Water Across Land</span>
                      <ArrowRight size={18} />
                    </button>

                    <button
                      onClick={() =>
                        handleFollowUpChoice('Community Water Consultation', {
                          title: 'Community Water Consultation',
                          description:
                            'Our team will help identify the best approach for your community or farm.',
                          image: '/assets/images/solar_pumping_test.jpg',
                        })
                      }
                      className="btn btn-secondary btn-lg"
                      style={{ justifyContent: 'space-between', padding: '1rem 1.25rem' }}
                    >
                      <span style={{ fontWeight: 700 }}>I’m Not Sure / Need Advice</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* PATH 6: I'm Not Sure (Free text path) */}
              {selectedMainProblem?.id === 'not-sure' && (
                <form onSubmit={handleFreeTextSubmit}>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.5rem' }}>
                    That’s okay. Tell us what you’re trying to achieve.
                  </h2>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    Describe your project or water problem in your own words.
                  </p>

                  <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                    <label className="form-label" htmlFor="free-text-input">
                      What do you need help with?
                    </label>
                    <textarea
                      id="free-text-input"
                      rows={4}
                      className="form-textarea"
                      placeholder="e.g. I need water for my farm in Kajiado, but I'm not sure if there is groundwater or what type of pump is needed..."
                      value={freeTextExplanation}
                      onChange={(e) => setFreeTextExplanation(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', fontWeight: 700 }}
                  >
                    <span>Find My Next Step</span>
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 2: The Suggested Next Step (The Result)              */}
          {/* ======================================================== */}
          {currentStep === 2 && (
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--brand-blue-700)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '0.5rem',
                }}
              >
                A Good Next Step May Be
              </span>

              <h2
                style={{
                  fontSize: '1.65rem',
                  fontWeight: 800,
                  color: 'var(--brand-navy-950)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.25,
                }}
              >
                {recommendedResult.title}
              </h2>

              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--text-body)',
                  lineHeight: '1.6',
                  marginBottom: '1.25rem',
                }}
              >
                {recommendedResult.description}
              </p>

              {/* Real Project Photo Preview */}
              {recommendedResult.image && (
                <div
                  style={{
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    height: '200px',
                    backgroundColor: 'var(--brand-navy-950)',
                    marginBottom: '1.25rem',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <img
                    src={recommendedResult.image}
                    alt={recommendedResult.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              )}

              {/* Human Reassurance Note */}
              <div
                style={{
                  backgroundColor: 'var(--brand-cyan-50)',
                  border: '1px solid var(--brand-cyan-100)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem 1rem',
                  marginBottom: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                }}
              >
                <ShieldCheck size={18} color="var(--brand-blue-700)" style={{ flexShrink: 0 }} />
                <p style={{ fontSize: '0.85rem', color: 'var(--brand-navy-950)', margin: 0 }}>
                  <strong>Our team will confirm:</strong> DMEIT will review your situation and confirm what is suitable for your project.
                </p>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={handleProceedToDetails}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', fontWeight: 700 }}
                >
                  <span>Ask DMEIT About This</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={handleStartOver}
                  className="btn btn-secondary btn-md"
                  style={{ width: '100%', fontWeight: 600 }}
                >
                  <span>Choose Something Else</span>
                </button>
              </div>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 3: Customer Details (Help First, Details Second)    */}
          {/* ======================================================== */}
          {currentStep === 3 && (
            <div>
              <h2
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--brand-navy-950)',
                  marginBottom: '0.4rem',
                }}
              >
                How can we reach you?
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                We'll prepare your request with your answers so you don't have to explain again.
              </p>

              <form onSubmit={handleDetailsSubmit}>
                {/* Full Name */}
                <div className="form-group">
                  <label className="form-label" htmlFor="help-name">
                    Full Name <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <input
                    id="help-name"
                    type="text"
                    className={`form-input ${formErrors.name ? 'has-error' : ''}`}
                    placeholder="e.g. Peter Njoroge"
                    value={customerDetails.name}
                    onChange={(e) => {
                      setCustomerDetails({ ...customerDetails, name: e.target.value });
                      if (formErrors.name) setFormErrors({ ...formErrors, name: null });
                    }}
                  />
                  {formErrors.name && (
                    <div className="form-error">
                      <AlertCircle size={14} />
                      <span>{formErrors.name}</span>
                    </div>
                  )}
                </div>

                {/* Phone Number */}
                <div className="form-group">
                  <label className="form-label" htmlFor="help-phone">
                    Phone Number <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <input
                    id="help-phone"
                    type="tel"
                    className={`form-input ${formErrors.phone ? 'has-error' : ''}`}
                    placeholder="e.g. 0704 200 502"
                    value={customerDetails.phone}
                    onChange={(e) => {
                      setCustomerDetails({ ...customerDetails, phone: e.target.value });
                      if (formErrors.phone) setFormErrors({ ...formErrors, phone: null });
                    }}
                  />
                  {formErrors.phone && (
                    <div className="form-error">
                      <AlertCircle size={14} />
                      <span>{formErrors.phone}</span>
                    </div>
                  )}
                </div>

                {/* Location / Area */}
                <div className="form-group">
                  <label className="form-label" htmlFor="help-location">
                    Location / Area
                  </label>
                  <input
                    id="help-location"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Kajiado, Kitengela, Rongai, Narok..."
                    value={customerDetails.location}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, location: e.target.value })}
                  />
                </div>

                {/* Optional note */}
                <div className="form-group" style={{ marginBottom: '1.75rem' }}>
                  <label className="form-label" htmlFor="help-notes">
                    Anything else we should know? (Optional)
                  </label>
                  <textarea
                    id="help-notes"
                    rows={2}
                    className="form-textarea"
                    placeholder="Any specific questions or details..."
                    value={customerDetails.notes}
                    onChange={(e) => setCustomerDetails({ ...customerDetails, notes: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-whatsapp btn-lg"
                  style={{ width: '100%', fontWeight: 700 }}
                >
                  <MessageCircle size={19} />
                  <span>Continue to WhatsApp</span>
                </button>
              </form>
            </div>
          )}

          {/* ======================================================== */}
          {/* STEP 4: WhatsApp Ready Screen                            */}
          {/* ======================================================== */}
          {currentStep === 4 && (
            <div>
              <div
                style={{
                  backgroundColor: 'var(--brand-cyan-50)',
                  border: '1.5px solid var(--brand-cyan-300)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                }}
              >
                <MessageCircle size={22} color="var(--brand-blue-700)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--brand-navy-950)', margin: 0 }}>
                    Your request is ready.
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', marginTop: '0.2rem' }}>
                    WhatsApp will open with your context prepared. You can review it and press <strong>Send</strong>.
                  </p>
                </div>
              </div>

              {/* Message Preview */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Prepared Message
                  </span>
                  <button
                    onClick={handleCopy}
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--brand-blue-700)',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    {copied ? <Check size={14} color="#16A34A" /> : <Copy size={14} />}
                    {copied ? 'Copied to Clipboard' : 'Copy Text'}
                  </button>
                </div>

                <pre
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1rem',
                    fontSize: '0.85rem',
                    color: 'var(--brand-navy-950)',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    fontFamily: 'inherit',
                    lineHeight: '1.5',
                    maxHeight: '180px',
                    overflowY: 'auto',
                  }}
                >
                  {formattedWhatsAppMsg}
                </pre>
              </div>

              {/* Open WhatsApp CTA */}
              <button
                onClick={handleOpenWhatsApp}
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}
              >
                <Send size={18} />
                <span>Open WhatsApp to Send</span>
              </button>

              {/* Fallback Contacts */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '0.65rem' }}>
                  If WhatsApp doesn't open automatically, use these direct alternatives:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.5rem' }}>
                  <a href={`tel:${companyData.phoneRaw}`} className="btn btn-secondary btn-sm" style={{ justifyContent: 'center' }}>
                    <Phone size={14} />
                    <span>Call DMEIT</span>
                  </a>
                  <button onClick={handleCopy} className="btn btn-secondary btn-sm" style={{ justifyContent: 'center' }}>
                    <Copy size={14} />
                    <span>Copy Text</span>
                  </button>
                  <a
                    href={`mailto:${companyData.email}?subject=Water%20Project%20Help&body=${encodeURIComponent(formattedWhatsAppMsg)}`}
                    className="btn btn-secondary btn-sm"
                    style={{ justifyContent: 'center' }}
                  >
                    <Mail size={14} />
                    <span>Email DMEIT</span>
                  </a>
                </div>

                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <button
                    onClick={handleStartOver}
                    style={{ fontSize: '0.85rem', color: 'var(--brand-blue-700)', textDecoration: 'underline', fontWeight: 600 }}
                  >
                    ← Start Over with a Different Problem
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
