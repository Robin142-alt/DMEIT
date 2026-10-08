// Central Business Data & Configuration for DMEIT Ventures Ltd
// Official details provided by Director David Nkadayo

export const companyData = {
  name: 'DMEIT Ventures Ltd',
  shortName: 'DMEIT',
  tagline: 'Reliable Water Solutions From Survey to Supply',
  director: 'David Nkadayo',
  email: 'dmeit256@gmail.com',
  phoneDisplay: '0704 200 502',
  phoneInternational: '+254 704 200 502',
  phoneRaw: '+254704200502',
  whatsappNumber: '254704200502',
  whatsappUrl: 'https://wa.me/254704200502',
  siteUrl: 'https://www.dmeitventuresltd.com',
  canonicalUrl: 'https://www.dmeitventuresltd.com',
  logo: '/assets/images/dmeit_logo.jpg',
  aboutSummary:
    'DMEIT Ventures Ltd is a hands-on water infrastructure contractor. Led by Director David Nkadayo, we help homeowners, farms, institutions, and communities find, pump, store, and distribute clean groundwater through reliable drilling, solar pumping, and piping systems.',
  values: [
    {
      title: 'Dedicated Field Equipment',
      description: 'We operate our own heavy drilling machinery, test equipment, and field transport.',
    },
    {
      title: 'End-to-End Solutions',
      description: 'From initial ground survey to borehole drilling, equipping, storage, and piping to your tap.',
    },
    {
      title: 'Direct Communication',
      description: 'Speak directly with our technical team and director on WhatsApp or phone without middlemen.',
    },
  ],
};

export const serviceCategories = [
  {
    id: 'finding-water',
    categoryName: 'Finding Groundwater',
    summary: 'Scientific ground assessment and drilling to reach dependable water aquifers.',
    services: [
      {
        id: 'hydrogeological-surveys',
        name: 'Hydrogeological Surveys',
        shortDesc: 'We study the land to help identify a suitable place for drilling a borehole.',
        fullDesc:
          'Before drilling starts, our team carries out a thorough ground survey to assess water depth, aquifer potential, and geological conditions so you drill with confidence.',
        image: '/assets/images/solar_array_field.jpg',
        badge: 'Ground Assessment',
        popular: false,
      },
      {
        id: 'borehole-drilling',
        name: 'Borehole Drilling',
        shortDesc: 'We drill boreholes to help homes, farms, businesses and communities access groundwater.',
        fullDesc:
          'Using heavy drilling rigs, we drill deep boreholes through various rock and soil formations to tap into stable, clean groundwater sources.',
        image: '/assets/images/borehole_drilling_rig_dmeit.jpg',
        badge: 'Core Service',
        popular: true,
      },
    ],
  },
  {
    id: 'pumping-systems',
    categoryName: 'Borehole Systems & Pumping',
    summary: 'Installing modern pumps, solar power arrays, and control equipment to lift water.',
    services: [
      {
        id: 'borehole-equipping',
        name: 'Borehole Equipping',
        shortDesc: 'We install the equipment needed to pump and use water from a borehole.',
        fullDesc:
          'We supply and lower high-grade submersible pumps, riser pipes, electrical cables, control panels, and wellhead surface fittings so your borehole is ready to deliver.',
        image: '/assets/images/submersible_pump_installation.jpg',
        badge: 'Pump Equipping',
        popular: true,
      },
      {
        id: 'solar-pumping',
        name: 'Solar Water Pumping Systems',
        shortDesc: 'We set up solar-powered pumping systems that run reliably without monthly electric bills.',
        fullDesc:
          'Cut operating costs with solar photovoltaic arrays mounted on durable steel structures, driving efficient DC or AC solar submersible pumps during daylight hours.',
        image: '/assets/images/solar_pumping_test.jpg',
        badge: 'Zero Power Bills',
        popular: true,
      },
      {
        id: 'booster-pumps',
        name: 'Surface & Booster Pumps',
        shortDesc: 'We install inline and booster pumps to pressurize and move water across long distances.',
        fullDesc:
          'High-reliability multistage surface booster pumps installed with protective valves and pressure controls for homes, agricultural schemes, and institutions.',
        image: '/assets/images/pedrollo_booster_pump.jpg',
        badge: 'Pressure & Transfer',
        popular: false,
      },
    ],
  },
  {
    id: 'storage-distribution',
    categoryName: 'Storage & Distribution',
    summary: 'Secure water towers, heavy-duty tanks, and long-distance pipeline reticulation.',
    services: [
      {
        id: 'water-storage',
        name: 'Water Storage Facilities',
        shortDesc: 'We build elevated steel towers and durable ground tanks to safely store your water.',
        fullDesc:
          'Whether you need a high elevated steel tower for gravity-fed distribution or a high-capacity ground masonry tank, we build durable storage structures.',
        image: '/assets/images/elevated_steel_tank_tower.jpg',
        badge: 'Towers & Tanks',
        popular: true,
      },
      {
        id: 'pipeline-installation',
        name: 'Pipeline Installation',
        shortDesc: 'We install pipelines to move water where it is needed.',
        fullDesc:
          'Trenching, pipe laying, jointing, gate valves, and pressure testing using durable HDPE and galvanized steel pipes across farms, estates, and rough terrain.',
        image: '/assets/images/hdpe_pipeline_laying.jpg',
        badge: 'Supply Lines',
        popular: false,
      },
      {
        id: 'bridge-crossings',
        name: 'Specialized Pipeline Crossings',
        shortDesc: 'We construct secure pipeline crossings over rivers, gullies, and road bridges.',
        fullDesc:
          'Custom steel pipeline brackets and protective bridge crossings designed to withstand seasonal floods and difficult ground transitions.',
        image: '/assets/images/bridge_pipeline_crossing.jpg',
        badge: 'Infrastructure Works',
        popular: false,
      },
    ],
  },
  {
    id: 'community-solutions',
    categoryName: 'Community & Farm Water Solutions',
    summary: 'Accessible public water points, livestock troughs, and bulk water catchment.',
    services: [
      {
        id: 'communal-water-points',
        name: 'Communal Water Points & Kiosks',
        shortDesc: 'We build clean, accessible distribution points where communities can easily collect water.',
        fullDesc:
          'Durable community tap stands and water kiosks built with multiple dispensing taps, security fencing, and water metering.',
        image: '/assets/images/community_trench_digging.jpg',
        badge: 'Community Water',
        popular: false,
      },
      {
        id: 'cattle-troughs',
        name: 'Livestock & Cattle Troughs',
        shortDesc: 'We build durable watering troughs for cattle, sheep, goats, and farm livestock.',
        fullDesc:
          'Heavy-duty reinforced concrete watering troughs and distribution headworks connected to reliable borehole supply lines and elevated towers, ensuring pastoralists and farmers have clean, constant water for their livestock.',
        image: '/assets/images/concrete_cattle_trough_tower.jpg',
        images: [
          '/assets/images/concrete_cattle_trough_tower.jpg',
          '/assets/images/concrete_cattle_trough_closeup.jpg',
          '/assets/images/elevated_tank_cattle_trough.jpg',
        ],
        badge: 'Livestock Care',
        popular: true,
      },
      {
        id: 'water-pans-dams',
        name: 'Water Pans, Dams & Sand Dams',
        shortDesc: 'We construct water catchment pans, sand dams, and earth dams to harvest rainwater.',
        fullDesc:
          'Excavation, masonry river weir sand dams, and civil engineering works for surface water harvesting, seasonal stream catchment, agricultural irrigation reservoirs, and livestock water security.',
        image: '/assets/images/sand_dam_water_catchment.jpg',
        images: [
          '/assets/images/sand_dam_water_catchment.jpg',
        ],
        badge: 'Dams & Catchment',
        popular: false,
      },
    ],
  },
];

// All flat services for quick selection in forms
export const allServices = serviceCategories.flatMap((c) => c.services);

// Project Gallery curated from ALL 18 uploaded real project photographs
export const projectGallery = [
  {
    id: 'proj-01',
    title: 'DMEIT Rig Drilling in Action',
    category: 'Borehole Drilling',
    image: '/assets/images/borehole_drilling_rig_dmeit.jpg',
    description: 'Heavy drilling rig branded DMEIT Ventures Ltd operating on site with field crew in safety gear.',
    orientation: 'landscape',
    featured: true,
  },
  {
    id: 'proj-02',
    title: 'Solar-Powered Borehole Yield Discharge',
    category: 'Solar Systems',
    image: '/assets/images/solar_pumping_test.jpg',
    description: 'Fresh clean water gushing from newly equipped borehole powered by on-site solar panel array.',
    orientation: 'portrait',
    featured: true,
  },
  {
    id: 'proj-03',
    title: 'Submersible Pump Column Lowering',
    category: 'Borehole Equipping',
    image: '/assets/images/submersible_pump_installation.jpg',
    description: 'Stainless steel submersible pump and riser column pipe being suspended into wellhead chamber.',
    orientation: 'portrait',
    featured: true,
  },
  {
    id: 'proj-04',
    title: 'Elevated Steel Water Tower & Tank',
    category: 'Storage & Tanks',
    image: '/assets/images/elevated_steel_tank_tower.jpg',
    description: 'High-elevation steel structural tower carrying large storage tank with vertical delivery piping.',
    orientation: 'portrait',
    featured: true,
  },
  {
    id: 'proj-05',
    title: 'Elevated Tower with Cattle Drinking Troughs',
    category: 'Community & Farms',
    image: '/assets/images/elevated_tank_cattle_trough.jpg',
    description: 'Fenced borehole compound featuring elevated storage tower and dual livestock water troughs.',
    orientation: 'landscape',
    featured: true,
  },
  {
    id: 'proj-06',
    title: 'Ground Masonry Water Storage Tank',
    category: 'Storage & Tanks',
    image: '/assets/images/masonry_storage_tank.jpg',
    description: 'Large-capacity circular masonry water reservoir with reinforced plaster and galvanized inlet/outlet.',
    orientation: 'landscape',
    featured: false,
  },
  {
    id: 'proj-07',
    title: 'Pedrollo High-Performance Booster Pump',
    category: 'Borehole Equipping',
    image: '/assets/images/pedrollo_booster_pump.jpg',
    description: 'Multistage electric booster pump installed with flanged piping and secure electrical hookups.',
    orientation: 'portrait',
    featured: false,
  },
  {
    id: 'proj-08',
    title: 'HDPE Water Supply Pipeline Laying',
    category: 'Pipelines',
    image: '/assets/images/hdpe_pipeline_laying.jpg',
    description: 'DMEIT field crew laying durable black HDPE water line along excavated trench across countryside.',
    orientation: 'portrait',
    featured: true,
  },
  {
    id: 'proj-09',
    title: 'HDPE Pipe Section with Brass Gate Valve',
    category: 'Pipelines',
    image: '/assets/images/hdpe_pipe_valve_trench.jpg',
    description: 'Pipeline control section with brass inline valve and compression fittings laid in trench.',
    orientation: 'portrait',
    featured: false,
  },
  {
    id: 'proj-10',
    title: 'River Bridge Galvanized Pipeline Crossing',
    category: 'Pipelines',
    image: '/assets/images/bridge_pipeline_crossing.jpg',
    description: 'Heavy galvanized steel pipe safely anchored along concrete bridge abutment crossing a dry river.',
    orientation: 'landscape',
    featured: true,
  },
  {
    id: 'proj-11',
    title: 'High-Capacity Solar Structure & Signboard',
    category: 'Solar Systems',
    image: '/assets/images/solar_structure_signboard.jpg',
    description: 'Solar panel array frame in fenced compound with official project details and pump control house.',
    orientation: 'landscape',
    featured: true,
  },
  {
    id: 'proj-12',
    title: 'Aerial View of Solar Pumping Array',
    category: 'Solar Systems',
    image: '/assets/images/solar_array_landscape.jpg',
    description: 'Expansive ground-mounted solar photovoltaic system installed in fenced valley compound.',
    orientation: 'portrait',
    featured: false,
  },
  {
    id: 'proj-13',
    title: 'Solar Panels in Fenced Field Compound',
    category: 'Solar Systems',
    image: '/assets/images/solar_array_field.jpg',
    description: 'Clean energy solar array mounted on galvanized steel uprights serving remote water pump.',
    orientation: 'portrait',
    featured: false,
  },
  {
    id: 'proj-14',
    title: 'Field Technicians Lowering Pump Pipes',
    category: 'Borehole Equipping',
    image: '/assets/images/pump_column_installation.jpg',
    description: 'DMEIT technical personnel lowering heavy-duty yellow column pipes into borehole wellhead.',
    orientation: 'portrait',
    featured: false,
  },
  {
    id: 'proj-15',
    title: 'Wellhead Chamber & Rig Servicing',
    category: 'Borehole Drilling',
    image: '/assets/images/wellhead_rig_service.jpg',
    description: 'Borehole derrick rig positioned over stone masonry wellhead chamber during site servicing.',
    orientation: 'portrait',
    featured: false,
  },
  {
    id: 'proj-16',
    title: 'Solar Frame Substructure & Support Vehicle',
    category: 'Solar Systems',
    image: '/assets/images/solar_mount_truck_field.jpg',
    description: 'Under-panel view of reinforced steel mounting frame and DMEIT field service 4x4 vehicle.',
    orientation: 'landscape',
    featured: false,
  },
  {
    id: 'proj-17',
    title: 'Community Water Pipeline Trench Excavation',
    category: 'Community & Farms',
    image: '/assets/images/community_trench_digging.jpg',
    description: 'Community members and workers excavating long pipeline trenches for clean water supply network.',
    orientation: 'portrait',
    featured: false,
  },
  {
    id: 'proj-18',
    title: 'Borehole Headworks Water Meter & Casing',
    category: 'Borehole Equipping',
    image: '/assets/images/wellhead_water_meter.jpg',
    description: 'Wellhead steel riser pipe equipped with brass water meter and protected electrical terminal box.',
    orientation: 'portrait',
    featured: false,
  },
  {
    id: 'proj-19',
    title: 'Reinforced Concrete Cattle Trough & Tank Tower',
    category: 'Community & Farms',
    image: '/assets/images/concrete_cattle_trough_tower.jpg',
    description: 'Finished reinforced concrete cattle watering trough connected to elevated steel water storage tower in rural Kenya.',
    orientation: 'portrait',
    featured: true,
  },
  {
    id: 'proj-20',
    title: 'Reinforced Concrete Cattle Trough Headworks',
    category: 'Community & Farms',
    image: '/assets/images/concrete_cattle_trough_closeup.jpg',
    description: 'Direct headworks view of plastered livestock drinking trough with lockable valve inspection chamber and smooth animal access.',
    orientation: 'portrait',
    featured: true,
  },
  {
    id: 'proj-21',
    title: 'Sand Dam & River Weir Water Catchment',
    category: 'Community & Farms',
    image: '/assets/images/sand_dam_water_catchment.jpg',
    description: 'Substantial stone masonry sand dam weir wall impounding seasonal river flow to harvest runoff and replenish shallow underground aquifers.',
    orientation: 'landscape',
    featured: true,
  },
];

// 3 Simple steps customer journey
export const howItWorksSteps = [
  {
    step: '1',
    title: 'Tell Us What You Need',
    text: 'Pick a service or describe your water project in your own words. No technical terms needed.',
  },
  {
    step: '2',
    title: 'Review & Open WhatsApp',
    text: 'We format your request neatly so you can review it, then click to open WhatsApp directly with DMEIT.',
  },
  {
    step: '3',
    title: 'Talk to Our Team',
    text: 'Press Send on WhatsApp to discuss your project, get advice, and agree on next steps with David Nkadayo and our crew.',
  },
];

// Helper guide for "Not sure what I need"
export const customerScenarios = [
  {
    title: 'I need water on my land, but where do I start?',
    solution: 'Hydrogeological Survey & Borehole Drilling',
    serviceKey: 'hydrogeological-surveys',
    advice:
      'We first inspect the land with a ground survey to locate the best spot. Once the location is confirmed, we bring our rig to drill.',
  },
  {
    title: 'I already have a drilled hole that needs a pump or solar',
    solution: 'Borehole Equipping & Solar Pumping',
    serviceKey: 'borehole-equipping',
    advice:
      'We test the hole, recommend the right submersible pump size, and install solar panels or electrical controls to start pumping.',
  },
  {
    title: 'I have water at the borehole, but need it in my tanks or house',
    solution: 'Water Storage & Pipeline Installation',
    serviceKey: 'water-storage',
    advice:
      'We build elevated steel towers or ground tanks and trench durable HDPE pipes right to where you need the water.',
  },
  {
    title: 'My livestock or community needs reliable water access',
    solution: 'Cattle Troughs & Communal Water Points',
    serviceKey: 'cattle-troughs',
    advice:
      'We build heavy-duty livestock troughs and clean tap points so people and animals have clean water every day.',
  },
  {
    title: 'I want to harvest seasonal runoff or build a dam',
    solution: 'Water Pans, Dams & Sand Dams',
    serviceKey: 'water-pans-dams',
    advice:
      'We construct stone masonry sand dams across seasonal rivers and excavate earth water pans to capture and store large volumes of rainwater.',
  },
];
