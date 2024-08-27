const images = [
  { src: 'src/assets/voyager/v14.jpg', 
    alt: 'iss', 
    credit: 'https://www.pbs.org/the-farthest/mission/voyager-history-photos/', 
    desc: "This narrow-angle color image of the Earth, dubbed the 'Pale Blue Dot', is part of the first ever 'portrait' of the solar system taken by Voyager 1. Earth was a crescent only 0.12 pixels in size, and lies within one of the light rays scattered by the camera's optics. The photograph was taken on Valentine's Day, February 14, 1990, and took on iconic status when described by Carl Sagan as a 'Pale Blue Dot' and 'Earth in a Sunbeam.'"},
  { src: 'src/assets/voyager/v13.jpg', 
    alt: 'iss', 
    credit: 'https://www.pbs.org/the-farthest/mission/voyager-history-photos/', 
    desc: "This photograph of Neptune was taken at a range of 4.4 million miles on August 20, 1989, 4 days and 20 hours before closest approach. The image shows the Great Dark Spot and its companion bright smudge. The Great Dark Spot was a storm the size of Earth, with wind speeds measuring up to 1500 miles per hour—the fastest ever recorded on any planet in our solar system. When the Hubble Space Telescope imaged Neptune in 1994, the Great Dark Spot was gone, and another one had formed in the planet’s northern hemisphere."},
  { src: 'src/assets/voyager/v12.jpg', 
    alt: 'iss', 
    credit: 'https://www.pbs.org/the-farthest/mission/voyager-history-photos/', 
    desc: "This image of the planet Uranus was taken by Voyager 2 in 1986. The blue-green color results from the absorption of red light by methane gas in Uranus' deep, cold and remarkably clear atmosphere. To date, Voyager 2 is the only spacecraft to have visited the distant, gaseous giant. Voyager 2 got within 50,600 miles of Uranus during its flyby."},
  { src: 'src/assets/voyager/v11.jpg', 
    alt: 'iss', 
    credit: 'https://www.pbs.org/the-farthest/mission/voyager-history-photos/', 
    desc: "This view of the dark Cassini Division, which separates Saturn’s outer A-ring from the inner B-ring, was taken on August 23, 1981, when Voyager 2 was about 1.7 million miles from the planet. Saturn's rings are composed mostly of ice particles, which range in size from microscopic dust to boulder-size. For perspective, the Cassini Division is 2200 miles wide, almost the width of the United States."},
  { src: 'src/assets/voyager/v10.jpg', 
    alt: 'iss', 
    credit: 'https://www.pbs.org/the-farthest/mission/voyager-history-photos/', 
    desc: "This highly enhanced color view of Saturn’s rings was assembled from multiple images taken by Voyager 2. The enhanced colors are used to illustrate possible chemical variations in the ring material. The image was taken on August 17, 1981, when the spacecraft was 5.5 million miles from the planet."},
  { src: 'src/assets/voyager/v9.jpg', 
    alt: 'iss', 
    credit: 'https://www.pbs.org/the-farthest/mission/voyager-history-photos/', 
    desc: "This approximate natural-color image shows Saturn, its rings, and four of its icy satellites. Three satellites (Tethys, Dione, and Rhea) are visible against the darkness of space, and another smaller satellite (Mimas) is visible against Saturn's cloud tops very near the left horizon and just below the rings. The dark shadows of Mimas and Tethys are also visible on Saturn's cloud tops, and the shadow of Saturn is seen across part of the rings. Saturn’s rings are 169,000 miles in diameter, but only 330 or so feet thick."},
  { src: 'src/assets/voyager/v8.jpg', 
    alt: 'iss', 
    credit: 'https://www.pbs.org/the-farthest/mission/voyager-history-photos/', 
    desc: "This close-up view of Jupiter was taken by Voyager 1. It shows the great red spot—an anticyclone three and a half times the size of Earth, as well as the clouds swirling around it. The image was assembled from three black and white images taken through color filters."},
  { src: 'src/assets/voyager/v7.jpg', 
    alt: 'iss', 
    credit: 'https://www.pbs.org/the-farthest/mission/voyager-history-photos/', 
    desc: "This color composite image made from Voyager 2’s narrow-angle camera shows the Great Red Spot during a late Jovian afternoon. The photograph was taken on June 29, 1979, when Voyager 2 was nearly 6 million miles from Jupiter. The smallest features visible are over 106 miles across."},
  { src: 'src/assets/voyager/v6.jpg', 
    alt: 'iss', 
    credit: 'https://www.pbs.org/the-farthest/mission/voyager-history-photos/', 
    desc: "Voyager 1 took this photo of Jupiter and two of its satellites (Io, left, and Europa) on Feb. 13, 1979. Io is about 220,000 miles above Jupiter's Great Red Spot; Europa is about 375,000 miles above Jupiter's clouds.  This color image was assembled from three black and white negatives."},
  { src: 'src/assets/voyager/v5.jpg', 
    alt: 'iss', 
    credit: 'https://www.pbs.org/the-farthest/mission/voyager-history-photos/', 
    desc: "The 1800-pound Voyager 1 spacecraft was launched aboard a Titan-Centaur rocket from the Kennedy Space Center at Cape Canaveral on September 5, 1977. Voyager 2 preceded it into space by 16 days, but Voyager 1 quickly overtook it on a faster trajectory, and arrived at Jupiter 4 months before its sister craft."},
  { src: 'src/assets/voyager/v4.jpg', 
    alt: 'iss', 
    credit: 'https://www.pbs.org/the-farthest/mission/voyager-history-photos/', 
    desc: "The gold-plated aluminum covers were designed to protect the golden records from micrometeorite bombardment, and will, in theory, keep them pristine for billions of years. The covers contain explanatory diagrams with instructions for playing the record, and a pulsar map that provides information on how to locate Earth."},
  { src: 'src/assets/voyager/v3.jpg', 
    alt: 'iss', 
    credit: 'https://www.pbs.org/the-farthest/mission/voyager-history-photos/', 
    desc: "A golden record is mounted on the outside of each spacecraft. They carry the story of Earth into deep space for any beings that might one day find it. The records contain greetings in 55 languages, samples of music from different cultures and eras, and natural and human-made sounds from Earth. They also contain digital information, encoded in the grooves, that an advanced civilization should be able to convert into scientific diagrams and photographs."},
  { src: 'src/assets/voyager/v2.jpg', 
    alt: 'iss', 
    credit: 'https://www.pbs.org/the-farthest/mission/voyager-history-photos/', 
    desc: "Lamination bonding of the golden record. The 12-inch records were mastered in lacquer, cut from copper, then plated in gold. They were designed to be played at 16-2/3 revolutions per minute, allowing for two hours of play time."},
  { src: 'src/assets/voyager/v1.jpg', 
    alt: 'iss', 
    credit: 'https://www.pbs.org/the-farthest/mission/voyager-history-photos/', 
    desc: "The encapsulation of the Voyager Development Test Model at https://www.pbs.org/the-farthest/mission/voyager-history-photos/'s Kennedy Space Center's Eastern Test Range. Each Voyager spacecraft has 65,000 individual parts. Photograph taken on October 8, 1976."},
  { src: 'src/assets/voyager/v0.png', 
    alt: 'iss', 
    credit: 'https://www.pbs.org/the-farthest/mission/voyager-history-photos/', 
    desc: "In 1977, Voyagers 1 and 2 took off from Cape Canaveral, Florida, on what would become a more than 4-decade odyssey to explore the outer planets and beyond.  Along the way, the spacecraft made history time and again, sending back startling scientific data and images for all the world to see."},
  ]
                        
  const paragraphs = [
    "Starlink is a satellite internet constellation being constructed by SpaceX to provide high-speed internet access across the globe, particularly in underserved and remote areas. The constellation consists of thousands of small satellites in low Earth orbit, offering coverage where traditional internet services are unavailable or unreliable."
  ];
  
  const listItems = [
    "SpaceX plans to continue launching Starlink satellites, with the goal of expanding the network to offer global coverage and improve connection speeds.",
    "In the near future, Starlink will focus on enhancing its service in rural and underserved regions, providing affordable internet access to millions of people.",
    "Starlink's integration with other SpaceX technologies, such as Starship, could enable the rapid deployment of satellites and expand its capabilities beyond Earth.",
    "SpaceX is also exploring partnerships with airlines, shipping companies, and other industries to provide internet access to vehicles in transit, including planes and ships.",
    "As the constellation grows, SpaceX will work on reducing the risk of space debris and improving satellite deorbiting procedures to minimize the environmental impact.",
    "Long-term plans include the possibility of using Starlink as a communication network for missions to the Moon, Mars, and beyond, supporting deep space exploration efforts."
  ];

  export {
    paragraphs,
    listItems,
    images
  }