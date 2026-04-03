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
        "https://images.unsplash.com/photo-1760129744152-14bbc87f21b6?w=1200&q=80",
      location: { lat: -33.8688, lng: 151.2093 },
      days: [
        {
          date: "2026-11-04",
          dayNumber: 1,
          title: "Welcome to Sydney",
          subtitle: "Touchdown and first glimpse of the harbour",
          location: { lat: -33.8568, lng: 151.2153 },
          heroImage:
            "https://images.unsplash.com/photo-1760129744152-14bbc87f21b6?w=1200&q=80",
          accommodation: "Henry's apartment, Sydney (TBD)",
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1760129744152-14bbc87f21b6?w=400&q=80",
              title: "Circular Quay at Dusk",
              caption: "As the sun dips behind the harbour, Circular Quay transforms into a glittering stage. The ferries, the bridge, the Opera House — all lit up and waiting to welcome you.",
            },
            {
              image: "https://images.unsplash.com/photo-1751457938473-4929f5fe3ba6?w=400&q=80",
              title: "Sydney Harbour Bridge at Night",
              caption: "Few sights on Earth match the Harbour Bridge after dark — its steel arch blazing against the night sky. Standing beneath it for the first time is genuinely breathtaking.",
            },
            {
              image: "https://images.unsplash.com/photo-1493375366763-3ed5e0e6d8ec?w=400&q=80",
              title: "Ferry on the Harbour",
              caption: "Sydney's green-and-yellow ferries have been criss-crossing the harbour for over a century. Watching one glide past at golden hour is the perfect welcome to this extraordinary city.",
            },
          ],
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
            "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1200&q=80",
          accommodation: "Henry's apartment, Sydney (TBD)",
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&q=80",
              title: "Opera House Up Close",
              caption: "When you're finally standing beneath those soaring white shells, the Opera House is even more magnificent than the photos suggest. Every angle reveals a new sculptural wonder.",
            },
            {
              image: "https://images.unsplash.com/photo-1663037768314-8c18a77e28b4?w=400&q=80",
              title: "Harbour Bridge Walk View",
              caption: "The view from the Harbour Bridge pedestrian path is one of Sydney's great secrets — a sweeping panorama of the city, the harbour, and the Opera House all at once.",
            },
            {
              image: "https://images.unsplash.com/photo-1612692157179-348aefbb41b5?w=400&q=80",
              title: "The Rocks Historic Area",
              caption: "The Rocks is where Sydney's story began in 1788. Its sandstone laneways and heritage pubs feel wonderfully timeless — a village tucked inside one of the world's great cities.",
            },
          ],
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
            "https://images.unsplash.com/photo-1506563613713-f88697472a45?w=1200&q=80",
          accommodation: "Henry's apartment, Sydney (TBD)",
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1506563613713-f88697472a45?w=400&q=80",
              title: "Bondi Beach Aerial",
              caption: "That wide golden arc, the turquoise water, the clusters of colourful umbrellas — Bondi from above looks exactly like the postcard. In person, it's even better.",
            },
            {
              image: "https://images.unsplash.com/photo-1662109652622-f3e1737f468d?w=400&q=80",
              title: "Coastal Walk Cliffs",
              caption: "The sandstone cliffs between Bondi and Coogee are some of the most dramatic coastal scenery you'll find anywhere. The path hugs the edge, offering heart-stopping views at every turn.",
            },
            {
              image: "https://images.unsplash.com/photo-1750986920214-2ad9a98e1018?w=400&q=80",
              title: "Iconic Ocean Rock Pool",
              caption: "The tidal rock pools along this coast are a Sydney institution — perfectly framed by rugged sandstone and filled with the clearest ocean water. The Bondi Icebergs is the most famous of them all.",
            },
          ],
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
            "https://images.unsplash.com/photo-1539685195332-c100780cd0db?w=1200&q=80",
          accommodation: "Henry's apartment, Sydney (TBD)",
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1539685195332-c100780cd0db?w=400&q=80",
              title: "The Manly Ferry",
              caption: "Boarding the Manly Ferry at Circular Quay is one of Sydney's great simple pleasures. As the city skyline slowly shrinks behind you, the harbour opens up in all its glory.",
            },
            {
              image: "https://images.unsplash.com/photo-1660842532995-8c22432e0fd2?w=400&q=80",
              title: "Manly Beach",
              caption: "Manly sits at the harbour's edge like a secret escape from the city — golden surf beach on one side, calm harbour on the other. It's easy to see why locals love it so much.",
            },
            {
              image: "https://images.unsplash.com/photo-1722509614467-db7c14234495?w=400&q=80",
              title: "Royal Botanic Gardens",
              caption: "A peaceful oasis of ancient trees and sweeping harbour views right in the heart of the city. The gardens have been a beloved retreat for Sydneysiders since 1816.",
            },
          ],
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
        "https://images.unsplash.com/photo-1672313669835-d2a9a2d53c82?w=1200&q=80",
      location: { lat: -42.0, lng: 146.5 },
      days: [
        {
          date: "2026-11-08",
          dayNumber: 5,
          title: "Hobart Arrival",
          subtitle: "Waterfront charm and Battery Point",
          location: { lat: -42.8826, lng: 147.334 },
          heroImage:
            "https://images.unsplash.com/photo-1586875573579-9946a83231f6?w=1200&q=80",
          accommodation: "Hotel in Hobart CBD",
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1586875573579-9946a83231f6?w=400&q=80",
              title: "Salamanca Market",
              caption: "The sandstone warehouses of Salamanca Place have been transformed into one of Australia's finest cultural precincts. Every Saturday, the market fills the cobblestone square with colour, craft, and the smell of fresh Tasmanian produce.",
            },
            {
              image: "https://images.unsplash.com/photo-1666741746817-a49df3e37880?w=400&q=80",
              title: "Battery Point Cottages",
              caption: "Battery Point's narrow streets and heritage cottages feel lifted from a Victorian novel. Walking here in the afternoon light, it's hard to believe you're in a 21st-century capital city.",
            },
            {
              image: "https://images.unsplash.com/photo-1648701173456-10e0188798f7?w=400&q=80",
              title: "Hobart Waterfront",
              caption: "Hobart's working waterfront has a charm all its own — fishing boats, historic ships, and the great bulk of Mount Wellington looming over everything. It's a city that wears its history lightly.",
            },
          ],
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
            "https://images.unsplash.com/photo-1525861008433-cfea0a30ceee?w=1200&q=80",
          accommodation: "Hotel in Hobart CBD",
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1525861008433-cfea0a30ceee?w=400&q=80",
              title: "MONA Museum",
              caption: "Carved into a sandstone cliff beside the Derwent River, MONA is like no museum you've ever entered. Part gallery, part carnival, part philosophical provocation — it will stay with you long after you leave.",
            },
            {
              image: "https://images.unsplash.com/photo-1763867641419-6661da25dbec?w=400&q=80",
              title: "Tasmanian Vineyard",
              caption: "Tasmania's cool climate produces some of Australia's most elegant wines, especially Pinot Noir and sparkling. A glass on the terrace of a Coal River Valley winery is a thoroughly civilised way to spend an afternoon.",
            },
            {
              image: "https://images.unsplash.com/photo-1733639516781-46f7cce75c00?w=400&q=80",
              title: "Battery Point Heritage",
              caption: "The gaslit lanes of Battery Point feel like stepping back to colonial Hobart. Each cottage has a story, and the hill above the waterfront offers sweeping views across the harbour.",
            },
          ],
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
            "https://images.unsplash.com/photo-1672313669835-d2a9a2d53c82?w=1200&q=80",
          accommodation: "Accommodation near Freycinet / Coles Bay",
          stops: [
            { name: "Orford", location: { lat: -42.5575, lng: 147.8580 } },
            { name: "Swansea", location: { lat: -42.1189, lng: 148.0751 } },
          ],
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1672313669835-d2a9a2d53c82?w=400&q=80",
              title: "Wineglass Bay Lookout",
              caption: "The moment Wineglass Bay comes into view from the lookout is one of those travel experiences you never forget. That perfect crescent of white sand, the pink granite peaks — it's exactly as beautiful as everyone promised.",
            },
            {
              image: "https://images.unsplash.com/photo-1638834344937-30a2275798c3?w=400&q=80",
              title: "Freycinet Hiking Trail",
              caption: "The walk up to the lookout winds through coastal heath and granite boulders, rewarding every step with expanding views. Even the trail itself is lovely — this is what wild Tasmania looks and feels like.",
            },
            {
              image: "https://images.unsplash.com/photo-1672816613929-a2885168edb5?w=400&q=80",
              title: "Freycinet Coastline",
              caption: "The east coast of Tasmania glows in the November light — pink granite, white sand, and water in shades of turquoise you'd normally associate with the tropics. Nature really outdid itself here.",
            },
          ],
          activities: {
            morning:
              "Leave Hobart by 8am for the 2.5-hour drive up the east coast. Stop in the seaside village of Orford for a coffee overlooking the water. Continue north to Swansea, a charming heritage town on Great Oyster Bay — stop at Kate's Berry Farm for their famous berry ice cream with views across to the Freycinet Peninsula. Just past Swansea, pull into the Freycinet Marine Farm for the freshest oysters you'll ever taste, shucked right at the waterfront.",
            afternoon:
              "Arrive at Freycinet National Park and hike to the Wineglass Bay Lookout — a moderate walk rewarded by one of the most photographed views in Australia. The bay curves in a perfect crescent of white sand, backed by the pink-granite peaks of the Hazards mountain range.",
            evening:
              "Settle into your Freycinet accommodation and enjoy a quiet evening with the sounds of the bush. Keep an eye out for wallabies and possums as the sun goes down.",
          },
          funFacts: [
            "Tasmania's east coast oysters are considered some of the finest in the world — the cold, pristine waters produce an exceptionally clean, briny flavour.",
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
            "https://images.unsplash.com/photo-1627259880805-0e2c1b547200?w=1200&q=80",
          accommodation: "Accommodation near Freycinet / Coles Bay",
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1627259880805-0e2c1b547200?w=400&q=80",
              title: "Honeymoon Bay",
              caption: "Honeymoon Bay earns its name — a sheltered cove of extraordinary beauty, with orange lichen-covered boulders tumbling into crystal water. It's the kind of place that makes you want to stay all day.",
            },
            {
              image: "https://images.unsplash.com/photo-1638834351302-1885adaca0eb?w=400&q=80",
              title: "Sleepy Bay Rocks",
              caption: "The sculpted granite at Sleepy Bay tells a story of ancient geological forces. The interplay of pink stone, turquoise water, and white foam is something a painter couldn't improve upon.",
            },
            {
              image: "https://images.unsplash.com/photo-1598947738223-f9cde298ff14?w=400&q=80",
              title: "Freycinet Wildlife",
              caption: "As the park quiets in the evening, the wildlife comes alive. Wallabies graze on the grassy verges, pademelons bounce through the undergrowth, and the air fills with the calls of parrots heading to roost.",
            },
          ],
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
          location: { lat: -41.6369, lng: 145.9388 },
          heroImage:
            "https://images.unsplash.com/photo-1651954329391-85bac3e8c228?w=1200&q=80",
          accommodation: "Cradle Mountain lodge or cabin",
          stops: [
            { name: "Campbell Town", location: { lat: -41.9300, lng: 147.4900 } },
            { name: "Ross", location: { lat: -42.0350, lng: 147.4900 } },
            { name: "Deloraine", location: { lat: -41.5231, lng: 146.6561 } },
          ],
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1651954329391-85bac3e8c228?w=400&q=80",
              title: "Midlands Pastoral Country",
              caption: "Tasmania's midlands are a patchwork of golden paddocks and heritage farmsteads that look almost English. Driving through on a sunny November morning, with the mountains on the horizon, is quietly wonderful.",
            },
            {
              image: "https://images.unsplash.com/photo-1651470170693-f4b0716e207d?w=400&q=80",
              title: "Ross Bridge",
              caption: "Ross Bridge is one of Australia's most beautiful historic structures — its sandstone arches carved by convict artisans in 1836. It's a moving reminder of the extraordinary human stories woven into Tasmania's landscape.",
            },
            {
              image: "https://images.unsplash.com/photo-1534853878021-7fb609562749?w=400&q=80",
              title: "Approaching Cradle Mountain",
              caption: "As the road climbs into the highlands, the landscape shifts dramatically — from farmland to buttongrass plains to dense rainforest. The jagged silhouette of Cradle Mountain appearing through the trees is an electric moment.",
            },
          ],
          activities: {
            morning:
              "Today's drive to Cradle Mountain is about 4 hours with stops — leave by 8am. Head west through the midlands, stopping first at Campbell Town to see the Red Bridge, the oldest brick bridge in Australia (1838). Continue to the heritage village of Ross — the Ross Village Bakery is a must-stop (it's said to have inspired the bakery in Miyazaki's Kiki's Delivery Service!). Walk across the famous Ross Bridge, its sandstone arches carved by convict artisans in 1836 with 186 intricate panels.",
            afternoon:
              "Drive on through golden pastoral country to the charming arts town of Deloraine, nestled beneath the dramatic Great Western Tiers. Stop for lunch at one of the excellent cafés on the main street — the Deloraine Deli is a local favourite. From Deloraine, it's about 1.5 hours of increasingly dramatic scenery as you climb into the highlands toward Cradle Mountain.",
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
            "https://images.unsplash.com/photo-1628652462682-a7f26698096a?w=1200&q=80",
          accommodation: "Cradle Mountain lodge or cabin",
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1628652462682-a7f26698096a?w=400&q=80",
              title: "Dove Lake Reflection",
              caption: "On a still morning, Dove Lake mirrors Cradle Mountain so perfectly you'd swear the image was flipped. It's the kind of scene that reminds you why people travel to the other side of the world.",
            },
            {
              image: "https://images.unsplash.com/photo-1678089022280-3e901bba02b8?w=400&q=80",
              title: "Ancient Rainforest Boardwalk",
              caption: "The boardwalks through Cradle's rainforest pass through a world of moss-draped myrtle trees and crystal-clear streams. Some of these trees were saplings when the Vikings were exploring North America.",
            },
            {
              image: "https://images.unsplash.com/photo-1605164284889-207ecaaacd26?w=400&q=80",
              title: "Wombat Encounter",
              caption: "Wombats are the gentle giants of the Australian bush — slow-moving, endearingly round, and utterly unfazed by respectful human admirers. Cradle Mountain is one of the best places on Earth to see them up close.",
            },
          ],
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
            "https://images.unsplash.com/photo-1690252231330-b7f87a625bd8?w=1200&q=80",
          accommodation: "Overnight on Spirit of Tasmania ferry",
          stops: [
            { name: "Sheffield", location: { lat: -41.3986, lng: 146.3361 } },
            { name: "Latrobe", location: { lat: -41.2328, lng: 146.4133 } },
          ],
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1734473975048-eafc5fc4cf0c?w=400&q=80",
              title: "Devonport Lighthouse",
              caption: "The red-and-white lighthouse at the mouth of the Mersey River has guided ships into Devonport for over 130 years. It makes a lovely last image of Tasmania as the ferry pulls away from shore.",
            },
            {
              image: "https://images.unsplash.com/photo-1690252231330-b7f87a625bd8?w=400&q=80",
              title: "Spirit of Tasmania",
              caption: "There's something wonderfully old-fashioned and romantic about an overnight ferry crossing. The Spirit of Tasmania is comfortable and well-appointed — this is adventure travel done right.",
            },
            {
              image: "https://images.unsplash.com/photo-1701736122899-6fbcf79a2963?w=400&q=80",
              title: "Bass Strait at Sea",
              caption: "Bass Strait has a legendary reputation among sailors, but on a calm November evening it can be surprisingly gentle. Watching the Tasmanian coast fade into the dusk from the deck is an unforgettable farewell.",
            },
          ],
          activities: {
            morning:
              "No rush today — the ferry departs in the evening. Drive 45 minutes north to Sheffield, the 'Town of Murals,' where over 60 large outdoor paintings cover the buildings depicting local history, wildlife, and Tasmanian stories. Wander the main street and grab a coffee. Continue 30 minutes to the delightful town of Latrobe — known as the Platypus Capital of the World. Walk along the Mersey River where platypus are regularly spotted, and visit the quirky Australian Axeman's Hall of Fame.",
            afternoon:
              "Drive the final 15 minutes to Devonport. Explore the foreshore and the Devonport Regional Gallery before boarding the Spirit of Tasmania ferry. The ship is an experience in itself — grab a window seat and watch the Tasmanian coast recede as you head out into Bass Strait.",
            evening:
              "Settle into your cabin for the overnight crossing to Melbourne. Enjoy dinner on board as you sail through the night across one of the world's most legendary stretches of water.",
          },
          funFacts: [
            "Sheffield became the 'Town of Murals' in 1986 when locals painted their first mural to boost tourism — it worked so well that the town now has over 60 murals and hosts an annual mural festival.",
            "Latrobe is officially the Platypus Capital of the World. The shy creatures are best spotted at dawn and dusk in the Mersey River — look for the telltale ripples on the water's surface.",
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
        "https://images.unsplash.com/photo-1720522753737-f2e630fdf69c?w=1200&q=80",
      location: { lat: -36.5, lng: 148.5 },
      days: [
        {
          date: "2026-11-15",
          dayNumber: 12,
          title: "Melbourne",
          subtitle: "Laneways, coffee, and Federation Square",
          location: { lat: -37.8136, lng: 144.9631 },
          heroImage:
            "https://images.unsplash.com/photo-1720522753737-f2e630fdf69c?w=1200&q=80",
          accommodation: "Hotel in Melbourne CBD",
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1720522753737-f2e630fdf69c?w=400&q=80",
              title: "Melbourne Laneways & Street Art",
              caption: "Melbourne's laneways are an open-air gallery unlike anything else in Australia. Around every corner there's a new mural, a hidden espresso bar, or a boutique that looks like it's from another dimension.",
            },
            {
              image: "https://images.unsplash.com/photo-1501082957694-70db7b6b62ff?w=400&q=80",
              title: "Melbourne Café Culture",
              caption: "Melbourne takes its coffee more seriously than almost anywhere on Earth — this is the city that invented the flat white. A morning espresso at a laneway café is the proper way to start any day here.",
            },
            {
              image: "https://images.unsplash.com/photo-1617649666083-0c2e7af94f0d?w=400&q=80",
              title: "Federation Square",
              caption: "Federation Square is Melbourne's living room — a fractured-geometry plaza where the whole city seems to gather. From art galleries to live events to simply watching the world go by, it's always buzzing.",
            },
          ],
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
            "https://images.unsplash.com/photo-1504575958497-ccdd586c2997?w=1200&q=80",
          accommodation: "Accommodation near Paynesville / Raymond Island",
          stops: [
            { name: "Yarragon", location: { lat: -38.2048, lng: 145.9713 } },
            { name: "Sale", location: { lat: -38.1000, lng: 147.0680 } },
            { name: "Bairnsdale", location: { lat: -37.8230, lng: 147.6100 } },
          ],
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1504575958497-ccdd586c2997?w=400&q=80",
              title: "Koala in the Eucalyptus",
              caption: "Looking up to find a wild koala peering down at you from a fork in the eucalyptus is one of those moments that makes the whole trip worthwhile. They're smaller than you expect, and far more charming.",
            },
            {
              image: "https://images.unsplash.com/photo-1522584106367-c11223702a33?w=400&q=80",
              title: "Raymond Island Ferry",
              caption: "The tiny free ferry from Paynesville to Raymond Island takes just five minutes — and comes with a wonderful sense that you're crossing into somewhere a little wild and special.",
            },
            {
              image: "https://images.unsplash.com/photo-1577535296816-fb4e0fb53aab?w=400&q=80",
              title: "Gippsland Lakes",
              caption: "The Gippsland Lakes are Australia's largest inland waterway — a vast, glittering network of lagoons and channels that stretches along the Victorian coast. The evening light on the water here is simply gorgeous.",
            },
          ],
          activities: {
            morning:
              "Leave Melbourne by 9am and head east along the Princes Highway into Gippsland. After about 1.5 hours, pull into the charming village of Yarragon — stop at the famous Yarragon Chocolate Shop for handmade truffles and a coffee on the main street. It's a gorgeous little town with artisan galleries and antique stores worth a quick browse.",
            afternoon:
              "Continue east through Sale and Bairnsdale (about 2 more hours of easy driving). Arrive in the lakeside town of Paynesville and catch the tiny car ferry (just 5 minutes!) across to Raymond Island. Walk the Koala Trail, a gentle path through eucalyptus woodland where wild koalas doze in the branches overhead. You'll see dozens of them — this is one of the best places in all of Australia to see koalas in the wild.",
            evening:
              "Return to Paynesville and enjoy dinner overlooking the Gippsland Lakes, one of Australia's largest inland waterway systems. Total driving today: about 3.5 hours with the Yarragon stop.",
          },
          funFacts: [
            "Raymond Island has one of the highest koala densities in Australia — the koalas were introduced to the island in 1953 and thrived in the abundant eucalyptus.",
            "Koalas sleep up to 22 hours a day because their eucalyptus leaf diet is so low in nutrition that they need to conserve energy.",
          ],
        },
        {
          date: "2026-11-17",
          dayNumber: 14,
          title: "The South Coast Road Trip",
          subtitle: "Lakes Entrance, Eden, Merimbula, Bega Cheese & Narooma",
          location: { lat: -35.7575, lng: 150.1953 },
          heroImage:
            "https://images.unsplash.com/photo-1575546634550-7568f9603bdd?w=1200&q=80",
          accommodation: "Accommodation near Batemans Bay / NSW South Coast",
          stops: [
            { name: "Lakes Entrance", location: { lat: -37.8800, lng: 147.9936 } },
            { name: "Eden", location: { lat: -37.0667, lng: 149.9000 } },
            { name: "Merimbula", location: { lat: -36.8894, lng: 149.9078 } },
            { name: "Bega", location: { lat: -36.6738, lng: 149.8425 } },
            { name: "Narooma", location: { lat: -36.2167, lng: 150.0700 } },
          ],
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1575546634550-7568f9603bdd?w=400&q=80",
              title: "Eden & Twofold Bay",
              caption: "The historic fishing town of Eden sits on one of the deepest natural harbours in the Southern Hemisphere. Its Killer Whale Museum tells one of Australia's most extraordinary true stories.",
            },
            {
              image: "https://images.unsplash.com/photo-1702596290877-adfc8e3e4d5c?w=400&q=80",
              title: "Merimbula Bay",
              caption: "Merimbula's turquoise bay is a stunning surprise along the Sapphire Coast. Stop for fresh oysters at the wharf and take in the views — this is one of NSW's most beautiful coastal towns.",
            },
            {
              image: "https://images.unsplash.com/photo-1739528866374-573dbba6d7bd?w=400&q=80",
              title: "Bega Cheese Heritage Centre",
              caption: "Yes, this is where the famous Bega cheese comes from! The Heritage Centre offers tastings of their full range — from sharp vintage cheddar to creamy brie — all made right here in this charming country town.",
            },
          ],
          activities: {
            morning:
              "Leave by 8am — today is a proper Aussie road trip with great stops along the way. Start with a stroll along the Lakes Entrance footbridge for sweeping views of Ninety Mile Beach. Then drive south through Orbost and the dense forests along the Princes Highway (about 3 hours) to reach the historic fishing town of Eden on Twofold Bay. Visit the Eden Killer Whale Museum — it tells the remarkable true story of orcas that once helped local whalers hunt.",
            afternoon:
              "From Eden, it's just 25 minutes north to Merimbula — a stunning coastal bay town. Grab fresh oysters at the Merimbula Wharf or walk along the lakeside boardwalk. Then continue 30 minutes to Bega and stop at the Bega Cheese Heritage Centre for cheese tastings (yes, this is where the famous Bega cheese comes from!). From Bega, drive about an hour to the beautiful inlet town of Narooma — if time allows, stop to spot the fur seals on the breakwall.",
            evening:
              "Continue 1.5 hours north to the Batemans Bay area. Settle in for the night and prepare for one of the most unique wildlife encounters of the entire trip. Total driving today: about 6 hours with stops, but the towns along the way make it feel like an adventure rather than a long drive.",
          },
          funFacts: [
            "Eden was once the whaling capital of Australia. Remarkably, a pod of orcas used to herd baleen whales into Twofold Bay and alert the whalers — a unique partnership that lasted for decades.",
            "Bega Cheese has been made in the town of Bega since 1899. The Heritage Centre lets you taste everything from sharp vintage cheddar to creamy brie — all made right here.",
          ],
        },
        {
          date: "2026-11-18",
          dayNumber: 15,
          title: "Kangaroos on the Beach",
          subtitle: "Pebbly Beach and a relaxing evening on the NSW South Coast",
          location: { lat: -35.615, lng: 150.29 },
          heroImage:
            "https://images.unsplash.com/photo-1593936665706-dda72782f4f3?w=1200&q=80",
          accommodation: "Accommodation near Batemans Bay / NSW South Coast",
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1593936665706-dda72782f4f3?w=400&q=80",
              title: "Kangaroos on Pebbly Beach",
              caption: "Waking up to find eastern grey kangaroos lounging on the sand as waves roll in behind them is one of those quintessentially Australian scenes. Here at Pebbly Beach, it happens every single morning.",
            },
            {
              image: "https://images.unsplash.com/photo-1702097307048-8b32b358ba72?w=400&q=80",
              title: "Murramarang Coast",
              caption: "Murramarang National Park preserves a stretch of NSW coast that feels genuinely untouched. Tall eucalyptus trees run right down to the sand, and the water is impossibly clear.",
            },
            {
              image: "https://images.unsplash.com/photo-1629259634957-e32a0c5c4f47?w=400&q=80",
              title: "Kangaroo Up Close",
              caption: "The kangaroos at Pebbly Beach are so relaxed around people that you can sit just a few feet away and watch them graze. It's a genuinely humbling and delightful wildlife encounter.",
            },
          ],
          activities: {
            morning:
              "Head to Pebbly Beach in Murramarang National Park for one of Australia's most magical experiences: wild kangaroos lounging right on the sand. The eastern grey kangaroos here are so comfortable around people that they'll sit next to you on the beach as waves roll in. Take your time — this is a once-in-a-lifetime encounter.",
            afternoon:
              "Explore more of the Murramarang coastline. The beaches here are pristine and uncrowded — perfect for a leisurely walk along the shore with the eucalyptus forest right behind you. Head back to the Batemans Bay area to relax.",
            evening:
              "A well-earned rest day on the coast. Enjoy a seafood dinner in Batemans Bay and an early night — tomorrow you'll drive inland to Kangaroo Valley for the wedding celebrations.",
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
        "https://images.unsplash.com/photo-1602459762288-391c238ba147?w=1200&q=80",
      location: { lat: -34.7369, lng: 150.5311 },
      days: [
        {
          date: "2026-11-19",
          dayNumber: 16,
          title: "Kangaroo Valley",
          subtitle: "Jervis Bay's white sand, Berry village, and calm before the celebration",
          location: { lat: -34.7369, lng: 150.5311 },
          heroImage:
            "https://images.unsplash.com/photo-1602459762288-391c238ba147?w=1200&q=80",
          accommodation: "Accommodation in Kangaroo Valley",
          stops: [
            { name: "Huskisson / Jervis Bay", location: { lat: -35.0388, lng: 150.6720 } },
            { name: "Berry", location: { lat: -34.7750, lng: 150.6994 } },
          ],
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1602459762288-391c238ba147?w=400&q=80",
              title: "Kangaroo Valley Landscape",
              caption: "Kangaroo Valley is the kind of place that makes you understand why people fall in love with the Australian countryside. Green rolling hills, towering sandstone escarpments, and a quiet that goes all the way down.",
            },
            {
              image: "https://images.unsplash.com/photo-1602459757273-3c07a5a9c024?w=400&q=80",
              title: "Fitzroy Falls",
              caption: "Fitzroy Falls plunges 81 metres into the rainforest below — taller than Niagara Falls. Standing on the rim trail with the mist rising and the forest stretching to the horizon, it's breathtaking.",
            },
            {
              image: "https://images.unsplash.com/photo-1604690504594-b0580ad5ff5b?w=400&q=80",
              title: "Hampden Bridge",
              caption: "The historic Hampden Bridge, one of the last wooden suspension bridges in Australia, has spanned the Kangaroo River since 1898. Crossing it feels like stepping back into a gentler, unhurried era.",
            },
          ],
          activities: {
            morning:
              "Leave Batemans Bay by 9am for the 3-hour drive south to Kangaroo Valley with two gorgeous stops. First, detour east to Huskisson and Jervis Bay — walk along Hyams Beach, which holds the Guinness World Record for the whitest sand on Earth. The turquoise water and blinding white sand are absolutely jaw-dropping. Grab a coffee in the laid-back coastal town of Huskisson.",
            afternoon:
              "Continue 30 minutes south to Berry, one of the prettiest villages in NSW. Stop at the legendary Berry Donut Van (a local institution since the 1940s) and stroll the main street lined with antique shops and cafés. From Berry, it's just 20 minutes inland through winding green hills to Kangaroo Valley. Visit Fitzroy Falls, a spectacular waterfall that plunges 81 metres into the rainforest below.",
            evening:
              "Settle in to Kangaroo Valley and walk across the historic Hampden Bridge. A relaxed evening to rest and reflect on the incredible journey so far. Tomorrow is the reason you travelled halfway around the world.",
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
            "https://images.unsplash.com/photo-1773020934003-4294b49ea11e?w=1200&q=80",
          accommodation: "Accommodation in Kangaroo Valley",
          highlights: [
            {
              image: "https://images.unsplash.com/photo-1725589982773-23a1bd3765b8?w=400&q=80",
              title: "Wedding Venue Countryside",
              caption: "The lush Kangaroo Valley countryside provides a setting so beautiful it almost seems designed for a wedding. Green hills, golden light, and the peaceful hum of a perfect spring day.",
            },
            {
              image: "https://images.unsplash.com/photo-1773020934003-4294b49ea11e?w=400&q=80",
              title: "The Celebration",
              caption: "After 17 days of extraordinary adventure, this is the moment that brought you here — watching someone you love step into one of life's greatest joys. Everything else was the beautiful prologue.",
            },
            {
              image: "https://images.unsplash.com/photo-1725589972027-1dc9d35fee30?w=400&q=80",
              title: "Valley Sunset",
              caption: "As the evening celebration winds down and the sun sets over the valley escarpments, the sky turns gold and rose. It is, by any measure, a perfect end to a perfect journey.",
            },
          ],
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
