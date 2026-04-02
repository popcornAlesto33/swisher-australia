import { Trip } from "@/lib/types";

export const trip: Trip = {
  title: "The Swisher Australia Adventure",
  subtitle: "From Sydney's sparkling harbour to a wedding in the valley — 17 days Down Under",
  dates: "November 4–20, 2026",
  chapters: [
    // ─────────────────────────────────────────────
    // Chapter 1: Sydney
    // ─────────────────────────────────────────────
    {
      slug: "sydney",
      number: 1,
      title: "Sydney",
      subtitle: "Harbour views, coastal walks, and the city that started it all",
      dates: "November 4–7",
      color: "#1A3A5C",
      heroImage:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80",
      location: { lat: -33.8688, lng: 151.2093 },
      days: [
        {
          date: "2026-11-04",
          dayNumber: 1,
          title: "Welcome to Sydney",
          subtitle: "Touchdown and first glimpse of the harbour",
          location: { lat: -33.8568, lng: 151.2153 },
          heroImage:
            "https://images.unsplash.com/photo-1524293581917-878a6d017c71?w=1200&q=80",
          activities: {
            morning:
              "Arrive at Sydney Kingsford Smith Airport and transfer to the hotel. Take a moment to stretch your legs and soak in the fact that you've made it to the other side of the world.",
            afternoon:
              "Settle into your accommodation and rest up from the long journey. Grab a coffee at a nearby café and get your bearings in the neighbourhood.",
            evening:
              "Take a leisurely stroll along Circular Quay as the sun sets behind the Harbour Bridge. The Opera House glows in the golden light — a perfect welcome to Sydney.",
          },
          funFacts: [
            "Sydney Harbour is the deepest natural harbour in the world, reaching depths of up to 45 metres.",
            "Australia is the only continent that is also a single country.",
          ],
        },
        {
          date: "2026-11-05",
          dayNumber: 2,
          title: "Icons of Sydney",
          subtitle: "Opera House, Harbour Bridge, and the historic Rocks",
          location: { lat: -33.8568, lng: 151.2153 },
          heroImage:
            "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200&q=80",
          activities: {
            morning:
              "Tour the Sydney Opera House, one of the most recognizable buildings on Earth. Wander beneath its soaring white sails and learn the dramatic story of its construction — a tale of vision, controversy, and ultimate triumph.",
            afternoon:
              "Walk across the Sydney Harbour Bridge for breathtaking panoramic views of the harbour and city skyline. Then explore The Rocks, Sydney's oldest neighbourhood, with its cobblestone laneways, heritage pubs, and weekend market stalls.",
            evening:
              "Enjoy dinner at a harbourside restaurant, watching the city lights dance across the water as ferries glide past.",
          },
          funFacts: [
            "The Sydney Opera House took 16 years to build and went 1,357% over budget — from an estimated $7 million to $102 million.",
            "The Sydney Harbour Bridge is affectionately known as 'The Coathanger' by locals.",
          ],
        },
        {
          date: "2026-11-06",
          dayNumber: 3,
          title: "Bondi to Coogee",
          subtitle: "Australia's most famous coastal walk",
          location: { lat: -33.8915, lng: 151.2767 },
          heroImage:
            "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=1200&q=80",
          activities: {
            morning:
              "Head to Bondi Beach and take in the scene — surfers catching waves, golden sand stretching in a wide arc, and the iconic Bondi Icebergs pool perched at the southern end. Start the stunning Bondi to Coogee coastal walk.",
            afternoon:
              "The walk winds along dramatic sandstone cliffs, past hidden coves, ocean pools, and through Waverley Cemetery (one of the most scenic final resting places you'll ever see). Stop at Bronte or Clovelly for a swim before reaching Coogee.",
            evening:
              "Head back to Bondi for a relaxed dinner at one of the beachside restaurants. The sound of the surf makes an excellent soundtrack for a glass of Australian wine.",
          },
          funFacts: [
            "Australia has over 10,000 beaches — you could visit a new one every day for 27 years and still not see them all.",
            "Bondi Beach is patrolled by the lifeguards featured on the TV show 'Bondi Rescue,' which has aired for over 18 seasons.",
          ],
        },
        {
          date: "2026-11-07",
          dayNumber: 4,
          title: "Manly & Farewell to Sydney",
          subtitle: "A ferry ride, a beach, and a flight south",
          location: { lat: -33.7963, lng: 151.2876 },
          heroImage:
            "https://images.unsplash.com/photo-1598948485421-33a1655d3c38?w=1200&q=80",
          activities: {
            morning:
              "Catch the Manly Ferry from Circular Quay — widely considered one of the world's great harbour journeys. The 30-minute ride sweeps past the Opera House, under the Harbour Bridge, and through the harbour heads to the charming beach town of Manly.",
            afternoon:
              "Explore Manly Beach and stroll along The Corso, the pedestrian avenue linking the harbour to the ocean side. Visit the Royal Botanic Gardens back in the city for a peaceful walk among ancient trees with harbour views.",
            evening:
              "Transfer to the airport for an evening flight to Hobart, Tasmania. A whole new chapter of the adventure awaits.",
          },
          funFacts: [
            "The Manly Ferry has been running since 1855, making it one of the oldest ferry services in the world.",
            "The Royal Botanic Gardens were established in 1816, making them the oldest scientific institution in Australia.",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────
    // Chapter 2: Tasmania
    // ─────────────────────────────────────────────
    {
      slug: "tasmania",
      number: 2,
      title: "Tasmania",
      subtitle: "Wilderness, wine, and the world's cleanest air",
      dates: "November 8–14",
      color: "#2D6A4F",
      heroImage:
        "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?w=1200&q=80",
      location: { lat: -42.0, lng: 146.5 },
      days: [
        {
          date: "2026-11-08",
          dayNumber: 5,
          title: "Hobart Arrival",
          subtitle: "Waterfront charm and Battery Point",
          location: { lat: -42.8826, lng: 147.334 },
          heroImage:
            "https://images.unsplash.com/photo-1589871973318-9ca1258faa93?w=1200&q=80",
          activities: {
            morning:
              "Arrive in Hobart, Australia's second-oldest city, nestled between the mountain and the sea. Check into your accommodation and take a deep breath — the air here is famously some of the purest on Earth.",
            afternoon:
              "Wander along the Salamanca waterfront, lined with beautiful sandstone warehouses that now house galleries, cafés, and artisan shops. Stroll into Battery Point, a charming heritage neighbourhood with cottages dating back to the 1830s.",
            evening:
              "Enjoy fresh Tasmanian seafood at a harbourside restaurant. Try the local oysters — Tasmania is renowned for some of the best in the world.",
          },
          funFacts: [
            "Tasmania has the cleanest air in the world — readings from Cape Grim on the northwest tip are used as a global baseline for air purity.",
            "Hobart is Australia's second-oldest capital city, founded in 1804, just 16 years after Sydney.",
          ],
        },
        {
          date: "2026-11-09",
          dayNumber: 6,
          title: "MONA & Wine Country",
          subtitle: "Art that challenges and wine that delights",
          location: { lat: -42.8266, lng: 147.292 },
          heroImage:
            "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=80",
          activities: {
            morning:
              "Take the MONA ferry up the Derwent River to the Museum of Old and New Art — an extraordinary underground gallery carved into a sandstone cliff. MONA is provocative, playful, and utterly unlike any museum you've visited before.",
            afternoon:
              "Spend the afternoon exploring MONA's labyrinthine galleries. Whether you find it brilliant or baffling (most people feel both), it's a conversation starter for days. Enjoy lunch at the museum's excellent restaurant.",
            evening:
              "Head to the Coal River Valley wine region just outside Hobart for a tasting at one of Tasmania's acclaimed cool-climate wineries. Pinot Noir and sparkling wines are the local specialties.",
          },
          funFacts: [
            "MONA is the largest privately funded museum in the Southern Hemisphere, built by professional gambler David Walsh with his winnings.",
            "Tasmania produces less than 1% of Australia's wine, but wins a disproportionate share of the country's wine awards.",
          ],
        },
        {
          date: "2026-11-10",
          dayNumber: 7,
          title: "Wineglass Bay",
          subtitle: "One of the world's most beautiful beaches",
          location: { lat: -42.1547, lng: 148.2873 },
          heroImage:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
          activities: {
            morning:
              "Drive north along the stunning east coast to Freycinet National Park. The journey itself is beautiful, passing through rolling farmland, coastal towns, and forests of eucalyptus.",
            afternoon:
              "Hike to the Wineglass Bay Lookout — a moderate walk rewarded by one of the most photographed views in Australia. The bay curves in a perfect crescent of white sand, backed by the pink-granite peaks of the Hazards mountain range.",
            evening:
              "Settle into your Freycinet accommodation and enjoy a quiet evening with the sounds of the bush. Keep an eye out for wallabies and possums as the sun goes down.",
          },
          funFacts: [
            "Wineglass Bay is consistently rated one of the world's top 10 beaches by travel publications.",
            "The Hazards — the pink granite mountains framing Wineglass Bay — get their colour from feldspar crystals formed over 400 million years ago.",
          ],
        },
        {
          date: "2026-11-11",
          dayNumber: 8,
          title: "Freycinet Exploration",
          subtitle: "Hidden bays and granite headlands",
          location: { lat: -42.1547, lng: 148.2873 },
          heroImage:
            "https://images.unsplash.com/photo-1469521669194-babb45599def?w=1200&q=80",
          activities: {
            morning:
              "Explore Honeymoon Bay, a sheltered cove with crystal-clear water and enormous orange-lichen-covered boulders. It's the kind of place that looks too beautiful to be real.",
            afternoon:
              "Visit Sleepy Bay, where the ocean has carved the granite coast into dramatic shapes. Walk along the boardwalk and clamber over the smooth, wave-polished rocks. The turquoise water against the pink granite is unforgettable.",
            evening:
              "Take a sunset walk along one of Freycinet's quieter beaches. The park empties in the evening and you may have an entire bay to yourselves.",
          },
          funFacts: [
            "Freycinet was declared a national park in 1916, making it one of the oldest in Tasmania.",
            "The national park is named after French navigator Louis de Freycinet, who mapped the Australian coast in the early 1800s.",
          ],
        },
        {
          date: "2026-11-12",
          dayNumber: 9,
          title: "Into the Highlands",
          subtitle: "Crossing Tasmania's heartland to Cradle Mountain",
          location: { lat: -41.8, lng: 146.5 },
          heroImage:
            "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80",
          activities: {
            morning:
              "Bid farewell to the east coast and begin the scenic drive west across Tasmania's midlands. The route passes through the heritage town of Campbell Town, with its convict-era brick buildings and famous bridge of carved sandstone bricks.",
            afternoon:
              "Continue through rolling pastoral country and into increasingly wild terrain as you approach the Cradle Mountain region. Stop at the charming town of Deloraine, known for its artisan craft scene.",
            evening:
              "Arrive at your Cradle Mountain accommodation. The mountain air is cool and crisp — a warm fire and a hearty meal are the perfect way to end the drive.",
          },
          funFacts: [
            "Tasmania's midlands were once called 'the granary of Australia' because the region's farms produced so much grain for the colonies.",
            "Cradle Mountain receives snow in any month of the year, even during the Australian summer.",
          ],
        },
        {
          date: "2026-11-13",
          dayNumber: 10,
          title: "Cradle Mountain",
          subtitle: "Dove Lake, ancient forests, and Tasmanian wildlife",
          location: { lat: -41.6369, lng: 145.9388 },
          heroImage:
            "https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=1200&q=80",
          activities: {
            morning:
              "Walk the Dove Lake Circuit, a 6-kilometre loop around the glacially carved lake with the jagged profile of Cradle Mountain as your backdrop. The path passes through ancient rainforest, over boardwalks, and alongside mirror-still water.",
            afternoon:
              "Explore the Enchanted Walk, a short rainforest trail through moss-covered myrtle trees that truly earns its name. Keep a sharp eye out for wombats, echidnas, and the elusive platypus in the creek.",
            evening:
              "Join a guided night-time wildlife tour (if available) to spot Tasmanian devils, quolls, and pademelons. These incredible creatures are seen almost nowhere else on Earth.",
          },
          funFacts: [
            "Cradle Mountain–Lake St Clair National Park is part of the Tasmanian Wilderness World Heritage Area, which covers over 1.5 million hectares.",
            "The pencil pines around Dove Lake can live for over 1,000 years — some of the trees you'll see were seedlings when William the Conqueror invaded England.",
          ],
        },
        {
          date: "2026-11-14",
          dayNumber: 11,
          title: "Spirit of Tasmania",
          subtitle: "From mountain to sea — crossing Bass Strait",
          location: { lat: -41.1794, lng: 146.3628 },
          heroImage:
            "https://images.unsplash.com/photo-1534008897995-27a23e859048?w=1200&q=80",
          activities: {
            morning:
              "Drive north from Cradle Mountain through the lush farmland and forests of Tasmania's north-west. Stop at Sheffield, the 'Town of Murals,' where dozens of large outdoor paintings depict the region's history and culture.",
            afternoon:
              "Arrive in Devonport and explore the foreshore before boarding the Spirit of Tasmania ferry. The ship is an experience in itself — grab a window seat and watch the Tasmanian coast recede as you head out into Bass Strait.",
            evening:
              "Settle into your cabin for the overnight crossing to Melbourne. Enjoy dinner on board as you sail through the night across one of the world's most legendary stretches of water.",
          },
          funFacts: [
            "The Spirit of Tasmania crosses Bass Strait in about 11 hours, covering 430 kilometres of open ocean.",
            "Bass Strait is named after George Bass, who confirmed Tasmania was an island in 1798 by sailing all the way around it.",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────
    // Chapter 3: The Coastal Drive
    // ─────────────────────────────────────────────
    {
      slug: "coastal-drive",
      number: 3,
      title: "The Coastal Drive",
      subtitle: "Melbourne laneways, wild koalas, and kangaroos on the beach",
      dates: "November 15–18",
      color: "#C87941",
      heroImage:
        "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1200&q=80",
      location: { lat: -37.8, lng: 147.0 },
      days: [
        {
          date: "2026-11-15",
          dayNumber: 12,
          title: "Melbourne",
          subtitle: "Laneways, coffee, and Federation Square",
          location: { lat: -37.8136, lng: 144.9631 },
          heroImage:
            "https://images.unsplash.com/photo-1545044846-351ba102b6d5?w=1200&q=80",
          activities: {
            morning:
              "Arrive in Melbourne from the Spirit of Tasmania early in the morning. Disembark and drive into the heart of Australia's cultural capital. Melbourne greets you with a skyline framed by the Yarra River.",
            afternoon:
              "Dive into Melbourne's legendary laneway culture. Wander through Hosier Lane (covered floor-to-ceiling in street art), duck into hidden cafés, and explore the Block Arcade and Royal Arcade. Stop at Federation Square, the city's vibrant civic heart.",
            evening:
              "Melbourne is Australia's culinary capital. Choose from world-class restaurants in every cuisine imaginable, or keep it simple with a classic Australian pub meal in one of the city's heritage hotels.",
          },
          funFacts: [
            "Melbourne's laneway culture started because the city's grid layout left small alleys perfect for cafés, bars, and street art — there are now over 300 laneways to explore.",
            "Melbourne is consistently ranked among the world's most liveable cities and has the largest Greek population of any city outside Greece.",
          ],
        },
        {
          date: "2026-11-16",
          dayNumber: 13,
          title: "Raymond Island Koalas",
          subtitle: "Wild koalas on a tiny island in Gippsland",
          location: { lat: -37.869, lng: 147.796 },
          heroImage:
            "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=1200&q=80",
          activities: {
            morning:
              "Leave Melbourne and drive east into the rolling green hills of Gippsland. The landscape shifts from suburban to rural to wild as you follow the highway toward the coast.",
            afternoon:
              "Arrive in the lakeside town of Paynesville and catch the tiny car ferry (just 5 minutes!) to Raymond Island. Walk the Koala Trail, a gentle path through the eucalyptus woodland where wild koalas doze in the branches overhead. You'll see dozens of them — this is one of the best places in all of Australia to see koalas in the wild.",
            evening:
              "Return to Paynesville and enjoy dinner overlooking the Gippsland Lakes, one of Australia's largest inland waterway systems.",
          },
          funFacts: [
            "Raymond Island has one of the highest koala densities in Australia — the koalas were introduced to the island in 1953 and thrived in the abundant eucalyptus.",
            "Koalas sleep up to 22 hours a day because their eucalyptus leaf diet is so low in nutrition that they need to conserve energy.",
          ],
        },
        {
          date: "2026-11-17",
          dayNumber: 14,
          title: "Lakes & Coast",
          subtitle: "From the Gippsland Lakes into New South Wales",
          location: { lat: -37.88, lng: 147.9936 },
          heroImage:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
          activities: {
            morning:
              "Drive to Lakes Entrance, where the Gippsland Lakes meet the ocean. Walk along the Entrance Footbridge for sweeping views of Ninety Mile Beach, one of the longest uninterrupted beaches in the world.",
            afternoon:
              "Continue driving north along the Princes Highway, crossing the state border from Victoria into New South Wales. The landscape becomes increasingly dramatic — dense forests give way to glimpses of sparkling ocean.",
            evening:
              "Arrive in the Batemans Bay area on the NSW South Coast. Settle in for the night and prepare for one of the most unique wildlife encounters of the entire trip.",
          },
          funFacts: [
            "Ninety Mile Beach is actually 151 kilometres long — but who's counting when you're walking on a seemingly endless stretch of pristine sand?",
            "Australia drives on the left side of the road, a legacy of British colonisation — so keep that in mind from the passenger seat!",
          ],
        },
        {
          date: "2026-11-18",
          dayNumber: 15,
          title: "Kangaroos on the Beach",
          subtitle: "Pebbly Beach and onward to Kangaroo Valley",
          location: { lat: -35.615, lng: 150.29 },
          heroImage:
            "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=1200&q=80",
          activities: {
            morning:
              "Drive to Pebbly Beach in Murramarang National Park for one of Australia's most magical experiences: wild kangaroos lounging right on the sand. The eastern grey kangaroos here are so comfortable around people that they'll sit next to you on the beach as waves roll in.",
            afternoon:
              "Continue the drive north and then inland, winding through the lush forests and rolling green hills of the NSW South Coast hinterland on your way to Kangaroo Valley.",
            evening:
              "Arrive in Kangaroo Valley, a stunningly beautiful village nestled between towering sandstone escarpments. The setting is lush, peaceful, and the perfect place to prepare for the days ahead.",
          },
          funFacts: [
            "Pebbly Beach kangaroos are so used to humans they'll sit right next to you on the sand — it's one of Australia's most photographed wildlife encounters.",
            "Kangaroos can't walk backwards — which is why they appear on Australia's coat of arms alongside the emu (also unable to walk backwards), symbolising a nation always moving forward.",
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────
    // Chapter 4: The Wedding
    // ─────────────────────────────────────────────
    {
      slug: "the-wedding",
      number: 4,
      title: "The Wedding",
      subtitle: "Why we came — celebrating love in Kangaroo Valley",
      dates: "November 19–20",
      color: "#B8860B",
      heroImage:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80",
      location: { lat: -34.7369, lng: 150.5311 },
      days: [
        {
          date: "2026-11-19",
          dayNumber: 16,
          title: "Kangaroo Valley",
          subtitle: "Waterfalls, village charm, and calm before the celebration",
          location: { lat: -34.7369, lng: 150.5311 },
          heroImage:
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=80",
          activities: {
            morning:
              "Explore the village of Kangaroo Valley at a leisurely pace. Browse the local shops, visit the historic Hampden Bridge (one of the last surviving wooden suspension bridges in Australia), and enjoy a flat white at a local café.",
            afternoon:
              "Drive to Fitzroy Falls, a spectacular waterfall that plunges 81 metres into the valley below. Walk along the rim trail for multiple viewpoints and enjoy the rainforest atmosphere of Morton National Park.",
            evening:
              "A relaxed evening to rest and reflect on the incredible journey so far. Tomorrow is the reason you travelled halfway around the world.",
          },
          funFacts: [
            "Fitzroy Falls drops 81 metres — taller than Niagara Falls, which drops 51 metres on the American side.",
            "Kangaroo Valley was named by explorer Charles Throsby in 1818, who was amazed by the number of kangaroos grazing in the valley.",
          ],
        },
        {
          date: "2026-11-20",
          dayNumber: 17,
          title: "The Wedding",
          subtitle: "A day of love, joy, and celebration",
          location: { lat: -34.7369, lng: 150.5311 },
          heroImage:
            "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
          activities: {
            morning:
              "A morning to prepare and soak in the anticipation. The valley is quiet and beautiful in the morning light — enjoy a peaceful breakfast surrounded by the green escarpments and rolling meadows.",
            afternoon:
              "The main event! Watch your son marry the love of his life in one of the most beautiful settings imaginable. The lush Kangaroo Valley landscape provides a breathtaking natural backdrop for this unforgettable moment.",
            evening:
              "Celebrate into the evening with family, friends, dancing, and laughter. After 17 days of adventure across Australia, this is the perfect finale — the whole trip has been building to this joyful celebration.",
          },
          funFacts: [
            "Australia is one of only a handful of countries where you can legally have a wedding ceremony performed by a 'celebrant' — a tradition that began in 1973.",
            "November in Kangaroo Valley is late spring, with average temperatures around 24°C (75°F) and long, golden evenings — perfect wedding weather.",
          ],
        },
      ],
    },
  ],
};
