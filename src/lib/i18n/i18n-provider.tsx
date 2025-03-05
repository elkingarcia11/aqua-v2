'use client';

import { ReactNode, useEffect, useState } from 'react';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { usePathname } from 'next/navigation';

// Define translations directly in the provider
const resources = {
  en: {
    translation: {
      "navigation": {
        "properties": "Properties",
        "location": "Location",
        "community": "Community",
        "contact": "Contact"
      },
      "hero": {
        "title": "Beachfront Luxury at AQUA",
        "subtitle": "Experience the perfect beach getaway at El Pueblito Beach with our stunning oceanfront apartments",
        "exploreProperties": "Explore Properties",
        "discoverCommunity": "Discover Community",
        "scrollDown": "Scroll Down"
      },
      "properties": {
        "title": "Our Beachfront Apartments",
        "subtitle": "Discover our collection of beautiful apartments, each offering a unique experience",
        "noResults": "No properties match your filters",
        "tryDifferentFilters": "Please try different filter options"
      },
      "property": {
        "beachView": "Beach View",
        "floor": "Floor",
        "bedrooms": "Bedrooms",
        "bathrooms": "Bathrooms",
        "capacity": "Sleeps",
        "bookOnAirbnb": "Book on Airbnb",
        "description": "Description",
        "location": "Location",
        "loadingMap": "Loading map..."
      },
      "filter": {
        "title": "Filter Properties",
        "beachView": "Beach View",
        "bedrooms": "Bedrooms",
        "bathrooms": "Bathrooms",
        "capacity": "Capacity",
        "yes": "Yes",
        "no": "No",
        "resetAll": "Reset All Filters",
        "showing": "Showing",
        "of": "of",
        "collapse": "Collapse filters",
        "expand": "Expand filters"
      },
      "community": {
        "title": "El Pueblito Beach Community",
        "amenities": "Amenities",
        "nearbyAttractions": "Nearby Attractions",
        "away": "away",
        "location": "Location",
        "locationDescription": "AQUA is located in El Pueblito, Puerto Plata, Dominican Republic, offering stunning beachfront views and easy access to local attractions.",
        "parkingInfo": "Parking Information",
        "parkingDescription": "There are two public parking lots located about 270 meters away from the property.",
        "getDirections": "Get Directions",
        "loadingMap": "Loading map..."
      },
      "commodities": {
        "title": "Commodities",
        "wifi": "Free WiFi",
        "airConditioning": "Air Conditioning",
        "kitchen": "Fully Equipped Kitchen",
        "tv": "Smart TV",
        "washer": "Washer",
        "parking": "Free Parking",
        "publicParking": "Public Parking",
        "pool": "Swimming Pool",
        "beach": "Beach Access",
        "beachAccess": "Direct Beach Access",
        "patio": "Private Patio/Balcony",
        "rooftop": "Rooftop Access",
        "grill": "BBQ Grill"
      },
      "footer": {
        "description": "AQUA offers luxury beachfront accommodations in Puerto Plata, providing the perfect setting for your dream vacation.",
        "quickLinks": "Quick Links",
        "contact": "Contact",
        "rights": "All Rights Reserved.",
        "instagram": "Instagram"
      }
    }
  },
  es: {
    translation: {
      "navigation": {
        "properties": "Propiedades",
        "location": "Ubicación",
        "community": "Comunidad",
        "contact": "Contacto"
      },
      "hero": {
        "title": "Lujo frente al mar en AQUA",
        "subtitle": "Experimente la escapada perfecta a la playa en El Pueblito Beach con nuestros impresionantes apartamentos frente al mar",
        "exploreProperties": "Explorar Propiedades",
        "discoverCommunity": "Descubrir Comunidad",
        "scrollDown": "Desplazarse hacia abajo"
      },
      "properties": {
        "title": "Nuestros Apartamentos Frente al Mar",
        "subtitle": "Descubra nuestra colección de hermosos apartamentos, cada uno ofreciendo una experiencia única",
        "noResults": "Ninguna propiedad coincide con sus filtros",
        "tryDifferentFilters": "Por favor, pruebe diferentes opciones de filtro"
      },
      "property": {
        "beachView": "Vista al Mar",
        "floor": "Piso",
        "bedrooms": "Dormitorios",
        "bathrooms": "Baños",
        "capacity": "Capacidad",
        "bookOnAirbnb": "Reservar en Airbnb",
        "description": "Descripción",
        "location": "Ubicación",
        "loadingMap": "Cargando mapa..."
      },
      "filter": {
        "title": "Filtrar Propiedades",
        "beachView": "Vista al Mar",
        "bedrooms": "Dormitorios",
        "bathrooms": "Baños",
        "capacity": "Capacidad",
        "yes": "Sí",
        "no": "No",
        "resetAll": "Restablecer Todos los Filtros",
        "showing": "Mostrando",
        "of": "de",
        "collapse": "Colapsar filtros",
        "expand": "Expandir filtros"
      },
      "community": {
        "title": "Comunidad de El Pueblito Beach",
        "amenities": "Comodidades",
        "nearbyAttractions": "Atracciones Cercanas",
        "away": "de distancia",
        "location": "Ubicación",
        "locationDescription": "AQUA está ubicado en El Pueblito, Puerto Plata, República Dominicana, ofreciendo impresionantes vistas al mar y fácil acceso a atracciones locales.",
        "parkingInfo": "Información de Estacionamiento",
        "parkingDescription": "Hay dos estacionamientos públicos ubicados a unos 270 metros de la propiedad.",
        "getDirections": "Obtener Direcciones",
        "loadingMap": "Cargando mapa..."
      },
      "commodities": {
        "title": "Comodidades",
        "wifi": "WiFi Gratis",
        "airConditioning": "Aire Acondicionado",
        "kitchen": "Cocina Totalmente Equipada",
        "tv": "Smart TV",
        "washer": "Lavadora",
        "parking": "Estacionamiento Gratuito",
        "publicParking": "Estacionamiento Público",
        "pool": "Piscina",
        "beach": "Acceso a la Playa",
        "beachAccess": "Acceso Directo a la Playa",
        "patio": "Patio/Balcón Privado",
        "rooftop": "Acceso a la Azotea",
        "grill": "Parrilla BBQ"
      },
      "footer": {
        "description": "AQUA ofrece alojamientos de lujo frente al mar en Puerto Plata, proporcionando el escenario perfecto para sus vacaciones de ensueño.",
        "quickLinks": "Enlaces Rápidos",
        "contact": "Contacto",
        "rights": "Todos los Derechos Reservados.",
        "instagram": "Instagram"
      }
    }
  },
  fr: {
    translation: {
      "navigation": {
        "properties": "Propriétés",
        "location": "Emplacement",
        "community": "Communauté",
        "contact": "Contact"
      },
      "hero": {
        "title": "Luxe en bord de mer à AQUA",
        "subtitle": "Profitez d'une escapade parfaite à la plage d'El Pueblito avec nos magnifiques appartements en front de mer",
        "exploreProperties": "Explorer les Propriétés",
        "discoverCommunity": "Découvrir la Communauté",
        "scrollDown": "Défiler vers le bas"
      },
      "properties": {
        "title": "Nos Appartements en Bord de Mer",
        "subtitle": "Découvrez notre collection de beaux appartements, chacun offrant une expérience unique",
        "noResults": "Aucune propriété ne correspond à vos filtres",
        "tryDifferentFilters": "Veuillez essayer différentes options de filtrage"
      },
      "property": {
        "beachView": "Vue sur la Plage",
        "floor": "Étage",
        "bedrooms": "Chambres",
        "bathrooms": "Salles de Bain",
        "capacity": "Capacité",
        "bookOnAirbnb": "Réserver sur Airbnb",
        "description": "Description",
        "location": "Emplacement",
        "loadingMap": "Chargement de la carte..."
      },
      "filter": {
        "title": "Filtrer les Propriétés",
        "beachView": "Vue sur la Plage",
        "bedrooms": "Chambres",
        "bathrooms": "Salles de Bain",
        "capacity": "Capacité",
        "yes": "Oui",
        "no": "Non",
        "resetAll": "Réinitialiser Tous les Filtres",
        "showing": "Affichage",
        "of": "de",
        "collapse": "Réduire les filtres",
        "expand": "Développer les filtres"
      },
      "community": {
        "title": "Communauté de la Plage El Pueblito",
        "amenities": "Équipements",
        "nearbyAttractions": "Attractions à Proximité",
        "away": "de distance",
        "location": "Emplacement",
        "locationDescription": "AQUA est situé à El Pueblito, Puerto Plata, République Dominicaine, offrant une vue imprenable sur la mer et un accès facile aux attractions locales.",
        "parkingInfo": "Informations sur le Stationnement",
        "parkingDescription": "Il y a deux parkings publics situés à environ 270 mètres de la propriété.",
        "getDirections": "Obtenir l'Itinéraire",
        "loadingMap": "Chargement de la carte..."
      },
      "commodities": {
        "title": "Commodités",
        "wifi": "WiFi Gratuit",
        "airConditioning": "Climatisation",
        "kitchen": "Cuisine Entièrement Équipée",
        "tv": "Smart TV",
        "washer": "Machine à Laver",
        "parking": "Stationnement Gratuit",
        "publicParking": "Stationnement Public",
        "pool": "Piscine",
        "beach": "Accès à la Plage",
        "beachAccess": "Accès Direct à la Plage",
        "patio": "Patio/Balcon Privé",
        "rooftop": "Accès au Toit-Terrasse",
        "grill": "Barbecue"
      },
      "footer": {
        "description": "AQUA offre des hébergements de luxe en bord de mer à Puerto Plata, fournissant le cadre parfait pour vos vacances de rêve.",
        "quickLinks": "Liens Rapides",
        "contact": "Contact",
        "rights": "Tous Droits Réservés.",
        "instagram": "Instagram"
      }
    }
  },
  ru: {
    translation: {
      "navigation": {
        "properties": "Объекты",
        "location": "Расположение",
        "community": "Сообщество",
        "contact": "Контакты"
      },
      "hero": {
        "title": "Роскошь на берегу моря в AQUA",
        "subtitle": "Испытайте идеальный пляжный отдых на пляже Эль-Пуэблито с нашими потрясающими апартаментами у океана",
        "exploreProperties": "Исследовать Объекты",
        "discoverCommunity": "Узнать о Сообществе",
        "scrollDown": "Прокрутить вниз"
      },
      "properties": {
        "title": "Наши Апартаменты на Берегу Моря",
        "subtitle": "Откройте для себя нашу коллекцию красивых апартаментов, каждый из которых предлагает уникальный опыт",
        "noResults": "Нет объектов, соответствующих вашим фильтрам",
        "tryDifferentFilters": "Пожалуйста, попробуйте другие параметры фильтра"
      },
      "property": {
        "beachView": "Вид на Пляж",
        "floor": "Этаж",
        "bedrooms": "Спальни",
        "bathrooms": "Ванные комнаты",
        "capacity": "Вместимость",
        "bookOnAirbnb": "Забронировать на Airbnb",
        "description": "Описание",
        "location": "Расположение",
        "loadingMap": "Загрузка карты..."
      },
      "filter": {
        "title": "Фильтровать Объекты",
        "beachView": "Вид на Пляж",
        "bedrooms": "Спальни",
        "bathrooms": "Ванные комнаты",
        "capacity": "Вместимость",
        "yes": "Да",
        "no": "Нет",
        "resetAll": "Сбросить Все Фильтры",
        "showing": "Показано",
        "of": "из",
        "collapse": "Свернуть фильтры",
        "expand": "Развернуть фильтры"
      },
      "community": {
        "title": "Сообщество Пляжа Эль-Пуэблито",
        "amenities": "Удобства",
        "nearbyAttractions": "Ближайшие Достопримечательности",
        "away": "расстояние",
        "location": "Расположение",
        "locationDescription": "AQUA расположен в Эль-Пуэблито, Пуэрто-Плата, Доминиканская Республика, предлагая потрясающие виды на море и легкий доступ к местным достопримечательностям.",
        "parkingInfo": "Информация о Парковке",
        "parkingDescription": "Есть две общественные парковки, расположенные примерно в 270 метрах от объекта.",
        "getDirections": "Получить Маршрут",
        "loadingMap": "Загрузка карты..."
      },
      "commodities": {
        "title": "Удобства",
        "wifi": "Бесплатный WiFi",
        "airConditioning": "Кондиционер",
        "kitchen": "Полностью Оборудованная Кухня",
        "tv": "Smart TV",
        "washer": "Стиральная Машина",
        "parking": "Бесплатная Парковка",
        "publicParking": "Общественная Парковка",
        "pool": "Бассейн",
        "beach": "Доступ к Пляжу",
        "beachAccess": "Прямой Доступ к Пляжу",
        "patio": "Частный Патио/Балкон",
        "rooftop": "Доступ на Крышу",
        "grill": "Барбекю"
      },
      "footer": {
        "description": "AQUA предлагает роскошное размещение на берегу моря в Пуэрто-Плата, обеспечивая идеальную обстановку для вашего отпуска мечты.",
        "quickLinks": "Быстрые Ссылки",
        "contact": "Контакты",
        "rights": "Все Права Защищены.",
        "instagram": "Instagram"
      }
    }
  },
  nl: {
    translation: {
      "navigation": {
        "properties": "Eigenschappen",
        "location": "Locatie",
        "community": "Gemeenschap",
        "contact": "Contact"
      },
      "hero": {
        "title": "Luxe aan het strand bij AQUA",
        "subtitle": "Ervaar de perfecte strandvakantie bij El Pueblito Beach met onze prachtige appartementen aan zee",
        "exploreProperties": "Verken Eigenschappen",
        "discoverCommunity": "Ontdek Gemeenschap",
        "scrollDown": "Scroll naar beneden"
      },
      "properties": {
        "title": "Onze Appartementen aan Zee",
        "subtitle": "Ontdek onze collectie prachtige appartementen, elk met een unieke ervaring",
        "noResults": "Geen eigenschappen komen overeen met uw filters",
        "tryDifferentFilters": "Probeer verschillende filteropties"
      },
      "property": {
        "beachView": "Uitzicht op Strand",
        "floor": "Verdieping",
        "bedrooms": "Slaapkamers",
        "bathrooms": "Badkamers",
        "capacity": "Capaciteit",
        "bookOnAirbnb": "Boek op Airbnb",
        "description": "Beschrijving",
        "location": "Locatie",
        "loadingMap": "Kaart laden..."
      },
      "filter": {
        "title": "Filter Eigenschappen",
        "beachView": "Uitzicht op Strand",
        "bedrooms": "Slaapkamers",
        "bathrooms": "Badkamers",
        "capacity": "Capaciteit",
        "yes": "Ja",
        "no": "Nee",
        "resetAll": "Reset Alle Filters",
        "showing": "Tonen",
        "of": "van",
        "collapse": "Filters inklappen",
        "expand": "Filters uitklappen"
      },
      "community": {
        "title": "El Pueblito Beach Gemeenschap",
        "amenities": "Voorzieningen",
        "nearbyAttractions": "Nabijgelegen Attracties",
        "away": "afstand",
        "location": "Locatie",
        "locationDescription": "AQUA is gelegen in El Pueblito, Puerto Plata, Dominicaanse Republiek, met prachtig uitzicht op zee en gemakkelijke toegang tot lokale attracties.",
        "parkingInfo": "Parkeerinformatie",
        "parkingDescription": "Er zijn twee openbare parkeerplaatsen op ongeveer 270 meter afstand van het pand.",
        "getDirections": "Routebeschrijving",
        "loadingMap": "Kaart laden..."
      },
      "commodities": {
        "title": "Voorzieningen",
        "wifi": "Gratis WiFi",
        "airConditioning": "Airconditioning",
        "kitchen": "Volledig Uitgeruste Keuken",
        "tv": "Smart TV",
        "washer": "Wasmachine",
        "parking": "Gratis Parkeren",
        "publicParking": "Openbare Parkeerplaats",
        "pool": "Zwembad",
        "beach": "Toegang tot Strand",
        "beachAccess": "Directe Toegang tot Strand",
        "patio": "Privé Patio/Balkon",
        "rooftop": "Toegang tot Dakterras",
        "grill": "BBQ Grill"
      },
      "footer": {
        "description": "AQUA biedt luxe accommodatie aan zee in Puerto Plata, de perfecte setting voor uw droomvakantie.",
        "quickLinks": "Snelle Links",
        "contact": "Contact",
        "rights": "Alle Rechten Voorbehouden.",
        "instagram": "Instagram"
      }
    }
  },
  de: {
    translation: {
      "navigation": {
        "properties": "Immobilien",
        "location": "Standort",
        "community": "Gemeinschaft",
        "contact": "Kontakt"
      },
      "hero": {
        "title": "Strandluxus bei AQUA",
        "subtitle": "Erleben Sie den perfekten Strandurlaub am El Pueblito Beach mit unseren atemberaubenden Apartments am Meer",
        "exploreProperties": "Immobilien Erkunden",
        "discoverCommunity": "Gemeinschaft Entdecken",
        "scrollDown": "Nach unten scrollen"
      },
      "properties": {
        "title": "Unsere Strandapartments",
        "subtitle": "Entdecken Sie unsere Sammlung schöner Apartments, jedes bietet ein einzigartiges Erlebnis",
        "noResults": "Keine Immobilien entsprechen Ihren Filtern",
        "tryDifferentFilters": "Bitte versuchen Sie andere Filteroptionen"
      },
      "property": {
        "beachView": "Meerblick",
        "floor": "Etage",
        "bedrooms": "Schlafzimmer",
        "bathrooms": "Badezimmer",
        "capacity": "Kapazität",
        "bookOnAirbnb": "Auf Airbnb buchen",
        "description": "Beschreibung",
        "location": "Standort",
        "loadingMap": "Karte wird geladen..."
      },
      "filter": {
        "title": "Immobilien Filtern",
        "beachView": "Meerblick",
        "bedrooms": "Schlafzimmer",
        "bathrooms": "Badezimmer",
        "capacity": "Kapazität",
        "yes": "Ja",
        "no": "Nein",
        "resetAll": "Alle Filter zurücksetzen",
        "showing": "Anzeigen",
        "of": "von",
        "collapse": "Filter einklappen",
        "expand": "Filter ausklappen"
      },
      "community": {
        "title": "El Pueblito Beach Gemeinschaft",
        "amenities": "Annehmlichkeiten",
        "nearbyAttractions": "Nahegelegene Attraktionen",
        "away": "entfernt",
        "location": "Standort",
        "locationDescription": "AQUA befindet sich in El Pueblito, Puerto Plata, Dominikanische Republik, und bietet atemberaubenden Meerblick und einfachen Zugang zu lokalen Attraktionen.",
        "parkingInfo": "Parkplatzinformationen",
        "parkingDescription": "Es gibt zwei öffentliche Parkplätze, die etwa 270 Meter vom Anwesen entfernt sind.",
        "getDirections": "Wegbeschreibung",
        "loadingMap": "Karte wird geladen..."
      },
      "commodities": {
        "title": "Annehmlichkeiten",
        "wifi": "Kostenloses WLAN",
        "airConditioning": "Klimaanlage",
        "kitchen": "Voll ausgestattete Küche",
        "tv": "Smart TV",
        "washer": "Waschmaschine",
        "parking": "Kostenlose Parkplätze",
        "publicParking": "Öffentliche Parkplätze",
        "pool": "Schwimmbad",
        "beach": "Strandzugang",
        "beachAccess": "Direkter Strandzugang",
        "patio": "Private Terrasse/Balkon",
        "rooftop": "Dachterrassenzugang",
        "grill": "Grill"
      },
      "footer": {
        "description": "AQUA bietet luxuriöse Unterkünfte am Meer in Puerto Plata und schafft die perfekte Umgebung für Ihren Traumurlaub.",
        "quickLinks": "Schnelllinks",
        "contact": "Kontakt",
        "rights": "Alle Rechte vorbehalten.",
        "instagram": "Instagram"
      }
    }
  },
  it: {
    translation: {
      "navigation": {
        "properties": "Proprietà",
        "location": "Posizione",
        "community": "Comunità",
        "contact": "Contatto"
      },
      "hero": {
        "title": "Lusso fronte mare ad AQUA",
        "subtitle": "Vivi la perfetta fuga al mare a El Pueblito Beach con i nostri splendidi appartamenti fronte oceano",
        "exploreProperties": "Esplora Proprietà",
        "discoverCommunity": "Scopri la Comunità",
        "scrollDown": "Scorri verso il basso"
      },
      "properties": {
        "title": "I Nostri Appartamenti Fronte Mare",
        "subtitle": "Scopri la nostra collezione di bellissimi appartamenti, ognuno offre un'esperienza unica",
        "noResults": "Nessuna proprietà corrisponde ai tuoi filtri",
        "tryDifferentFilters": "Prova diverse opzioni di filtro"
      },
      "property": {
        "beachView": "Vista Mare",
        "floor": "Piano",
        "bedrooms": "Camere da letto",
        "bathrooms": "Bagni",
        "capacity": "Capacità",
        "bookOnAirbnb": "Prenota su Airbnb",
        "description": "Descrizione",
        "location": "Posizione",
        "loadingMap": "Caricamento mappa..."
      },
      "filter": {
        "title": "Filtra Proprietà",
        "beachView": "Vista Mare",
        "bedrooms": "Camere da letto",
        "bathrooms": "Bagni",
        "capacity": "Capacità",
        "yes": "Sì",
        "no": "No",
        "resetAll": "Reimposta Tutti i Filtri",
        "showing": "Mostrando",
        "of": "di",
        "collapse": "Comprimi filtri",
        "expand": "Espandi filtri"
      },
      "community": {
        "title": "Comunità di El Pueblito Beach",
        "amenities": "Servizi",
        "nearbyAttractions": "Attrazioni Nelle Vicinanze",
        "away": "di distanza",
        "location": "Posizione",
        "locationDescription": "AQUA si trova a El Pueblito, Puerto Plata, Repubblica Dominicana, offrendo splendide viste sul mare e facile accesso alle attrazioni locali.",
        "parkingInfo": "Informazioni sul Parcheggio",
        "parkingDescription": "Ci sono due parcheggi pubblici situati a circa 270 metri dalla proprietà.",
        "getDirections": "Ottieni Indicazioni",
        "loadingMap": "Caricamento mappa..."
      },
      "commodities": {
        "title": "Servizi",
        "wifi": "WiFi Gratuito",
        "airConditioning": "Aria Condizionata",
        "kitchen": "Cucina Completamente Attrezzata",
        "tv": "Smart TV",
        "washer": "Lavatrice",
        "parking": "Parcheggio Gratuito",
        "publicParking": "Parcheggio Pubblico",
        "pool": "Piscina",
        "beach": "Accesso alla Spiaggia",
        "beachAccess": "Accesso Diretto alla Spiaggia",
        "patio": "Patio/Balcone Privato",
        "rooftop": "Accesso al Tetto",
        "grill": "Barbecue"
      },
      "footer": {
        "description": "AQUA offre alloggi di lusso fronte mare a Puerto Plata, fornendo l'ambientazione perfetta per la tua vacanza da sogno.",
        "quickLinks": "Link Rapidi",
        "contact": "Contatto",
        "rights": "Tutti i Diritti Riservati.",
        "instagram": "Instagram"
      }
    }
  }
};

interface I18nProviderProps {
  children: ReactNode;
}

// Initialize i18next only once
const i18n = i18next
  .use(LanguageDetector)
  .use(initReactI18next);

// Check if i18next is already initialized
if (!i18next.isInitialized) {
  i18n.init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
    },
    load: 'languageOnly', // Only load language code (e.g., 'en' instead of 'en-US')
    ns: ['translation'],
    defaultNS: 'translation',
    react: {
      useSuspense: false, // Disable suspense for better performance
    },
    keySeparator: '.',
    nsSeparator: ':',
  });
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const pathname = usePathname();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Use a short timeout to defer i18n initialization until after initial render
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      i18next.changeLanguage(i18next.language);
    }
  }, [pathname, isInitialized]);

  if (!isInitialized) {
    return null;
  }

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
} 