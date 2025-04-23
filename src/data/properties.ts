export interface Property {
  id: number;
  title: string;
  type: string;
  price: number;
  address: string;
  surface: number;
  rooms: number;
  bathrooms: number;
  bedrooms: number;
  description: string;
  features: string[];
  image: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Villa contemporaine avec vue panoramique",
    type: "Maison",
    price: 850000,
    address: "12 Chemin des Hauteurs, 75016 Paris",
    surface: 220,
    rooms: 7,
    bathrooms: 3,
    bedrooms: 4,
    description: "Magnifique villa moderne avec vue imprenable sur la ville. Prestations haut de gamme, espace de vie lumineux et terrasse spacieuse.",
    features: ["Piscine", "Jardin", "Terrasse", "Garage double", "Domotique"],
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Appartement de standing en centre-ville",
    type: "Appartement",
    price: 495000,
    address: "25 Rue des Lilas, 69003 Lyon",
    surface: 95,
    rooms: 4,
    bathrooms: 2,
    bedrooms: 2,
    description: "Bel appartement rénové avec matériaux de qualité. Emplacement idéal à proximité des commerces et transports.",
    features: ["Balcon", "Ascenseur", "Parking", "Cave", "Cuisine équipée"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Loft industriel dans quartier branché",
    type: "Loft",
    price: 620000,
    address: "8 Place de la République, 33000 Bordeaux",
    surface: 150,
    rooms: 3,
    bathrooms: 2,
    bedrooms: 2,
    description: "Ancien atelier réhabilité en loft. Volumes exceptionnels, luminosité maximale et design contemporain.",
    features: ["Hauteur sous plafond", "Verrière", "Terrasse sur toit", "Stationnement"],
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Maison de caractère avec jardin",
    type: "Maison",
    price: 545000,
    address: "15 Avenue du Parc, 44000 Nantes",
    surface: 180,
    rooms: 6,
    bathrooms: 2,
    bedrooms: 4,
    description: "Charmante maison dans quartier calme et résidentiel. Rénovée avec goût, elle offre un cadre de vie idéal pour une famille.",
    features: ["Jardin arboré", "Véranda", "Dépendance", "Cave à vin"],
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Penthouse avec vue mer",
    type: "Appartement",
    price: 980000,
    address: "3 Boulevard de la Mer, 06400 Cannes",
    surface: 135,
    rooms: 5,
    bathrooms: 3,
    bedrooms: 3,
    description: "Somptueux penthouse offrant une vue imprenable sur la mer. Finitions luxueuses et terrasse panoramique de 50m².",
    features: ["Vue panoramique", "Terrasse", "Jacuzzi", "Domotique", "Sécurité"],
    image: "https://images.unsplash.com/photo-1562182384-08115de5ee97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Maison d'architecte contemporaine",
    type: "Maison",
    price: 780000,
    address: "42 Route des Pins, 31000 Toulouse",
    surface: 210,
    rooms: 6,
    bathrooms: 3,
    bedrooms: 4,
    description: "Création originale d'un architecte renommé. Lignes épurées, matériaux nobles et intégration parfaite dans l'environnement.",
    features: ["Piscine à débordement", "Jardin paysager", "Domotique complète", "Panneaux solaires"],
    image: "https://images.unsplash.com/photo-1600607687644-c7171b46277f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const marketTrends = [
  { month: "Jan", price: 4500 },
  { month: "Fév", price: 4550 },
  { month: "Mar", price: 4600 },
  { month: "Avr", price: 4650 },
  { month: "Mai", price: 4700 },
  { month: "Juin", price: 4750 },
  { month: "Juil", price: 4800 },
  { month: "Août", price: 4850 },
  { month: "Sep", price: 4900 },
  { month: "Oct", price: 4950 },
  { month: "Nov", price: 5000 },
  { month: "Déc", price: 5050 }
];

export const propertyTypes = {
  apartment: 35,
  house: 45,
  villa: 12,
  loft: 8
};

export const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Propriétaire",
    content: "Service exceptionnel ! L'équipe a su répondre à toutes mes attentes et a trouvé rapidement des acquéreurs sérieux.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Thomas Bernard",
    role: "Acquéreur",
    content: "L'outil d'estimation m'a permis d'avoir une idée précise du marché avant de me lancer. Très simple d'utilisation !",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Sophie Martin",
    role: "Investisseur",
    content: "Je recommande vivement cette agence pour son professionnalisme et sa connaissance approfondie du marché immobilier.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];
