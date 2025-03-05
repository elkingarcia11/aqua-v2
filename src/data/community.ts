export interface CommunityInfo {
  description: {
    en: string;
    es: string;
    fr: string;
    ru: string;
    nl: string;
    de: string;
    it: string;
  };
  amenities: {
    name: {
      en: string;
      es: string;
      fr: string;
      ru: string;
      nl: string;
      de: string;
      it: string;
    };
    icon: string;
  }[];
  nearbyAttractions: {
    name: {
      en: string;
      es: string;
      fr: string;
      ru: string;
      nl: string;
      de: string;
      it: string;
    };
    distance: number; // in meters
    icon: string;
  }[];
}

export const communityInfo: CommunityInfo = {
  description: {
    en: 'The "El Pueblito" or "Playa El Chaparral" community is a welcoming, public-access area that attracts tourists and seniors seeking a tranquil beachside escape. It features an assortment of bars, restaurants, and grocery stores, with a casino, shopping center, and supermarket just a short drive away. Every apartment comes equipped with a 10 Mbps internet connection. There are two public parking lots located about 270 meters away from the property. The property has rooftop access which provides stunning mountain and ocean vistas.',
    es: 'La comunidad "El Pueblito" o "Playa El Chaparral" es un área de acceso público y acogedor que atrae a turistas y personas mayores que buscan un tranquilo escape junto a la playa. Cuenta con una variedad de bares, restaurantes y tiendas de comestibles, con un casino, centro comercial y supermercado a poca distancia en coche. Cada apartamento viene equipado con una conexión a Internet de 10 Mbps. Hay dos estacionamientos públicos ubicados a unos 270 metros de la propiedad. La propiedad tiene acceso a la azotea que ofrece impresionantes vistas a la montaña y al océano.',
    fr: 'La communauté "El Pueblito" ou "Playa El Chaparral" est un espace accueillant à accès public qui attire les touristes et les seniors à la recherche d\'une évasion tranquille au bord de la mer. Elle propose un assortiment de bars, de restaurants et d\'épiceries, avec un casino, un centre commercial et un supermarché à quelques minutes en voiture. Chaque appartement est équipé d\'une connexion Internet de 10 Mbps. Il y a deux parkings publics situés à environ 270 mètres de la propriété. La propriété dispose d\'un accès au toit qui offre de superbes vues sur la montagne et l\'océan.',
    ru: 'Сообщество "Эль-Пуэблито" или "Плайя-Эль-Чапарраль" - это гостеприимная зона с общественным доступом, которая привлекает туристов и пожилых людей, ищущих спокойного отдыха на берегу моря. Здесь есть множество баров, ресторанов и продуктовых магазинов, а также казино, торговый центр и супермаркет, до которых можно быстро добраться на машине. Каждая квартира оснащена интернет-соединением 10 Мбит/с. Рядом с объектом, примерно в 270 метрах, находятся две общественные парковки. На территории есть доступ на крышу, откуда открывается потрясающий вид на горы и океан.',
    nl: 'De gemeenschap "El Pueblito" of "Playa El Chaparral" is een gastvrij, openbaar toegankelijk gebied dat toeristen en senioren aantrekt die op zoek zijn naar een rustige ontsnapping aan het strand. Het beschikt over een assortiment aan bars, restaurants en supermarkten, met een casino, winkelcentrum en supermarkt op korte rijafstand. Elk appartement is uitgerust met een 10 Mbps internetverbinding. Er zijn twee openbare parkeerplaatsen op ongeveer 270 meter afstand van het pand. Het pand heeft toegang tot het dak, dat een prachtig uitzicht biedt op de bergen en de oceaan.',
    de: 'Die Gemeinschaft "El Pueblito" oder "Playa El Chaparral" ist ein einladendes, öffentlich zugängliches Gebiet, das Touristen und Senioren anzieht, die eine ruhige Auszeit am Strand suchen. Es bietet eine Auswahl an Bars, Restaurants und Lebensmittelgeschäften, mit einem Casino, Einkaufszentrum und Supermarkt in kurzer Fahrzeit. Jede Wohnung ist mit einem 10 Mbps Internetanschluss ausgestattet. Es gibt zwei öffentliche Parkplätze, die etwa 270 Meter von der Immobilie entfernt sind. Die Immobilie verfügt über einen Zugang zum Dach, der einen atemberaubenden Blick auf die Berge und den Ozean bietet.',
    it: 'La comunità "El Pueblito" o "Playa El Chaparral" è un\'area accogliente ad accesso pubblico che attira turisti e anziani in cerca di una tranquilla fuga al mare. Offre un assortimento di bar, ristoranti e negozi di alimentari, con un casinò, un centro commerciale e un supermercato a breve distanza in auto. Ogni appartamento è dotato di una connessione Internet da 10 Mbps. Ci sono due parcheggi pubblici situati a circa 270 metri dalla proprietà. La proprietà ha accesso al tetto che offre splendide viste sulla montagna e sull\'oceano.',
  },
  amenities: [
    {
      name: {
        en: 'WiFi',
        es: 'WiFi',
        fr: 'WiFi',
        ru: 'WiFi',
        nl: 'WiFi',
        de: 'WLAN',
        it: 'WiFi',
      },
      icon: 'wifi',
    },
    {
      name: {
        en: 'Beach Access',
        es: 'Acceso a la Playa',
        fr: 'Accès à la Plage',
        ru: 'Доступ к Пляжу',
        nl: 'Toegang tot Strand',
        de: 'Strandzugang',
        it: 'Accesso alla Spiaggia',
      },
      icon: 'beach_access',
    },
    {
      name: {
        en: 'Rooftop Access',
        es: 'Acceso a la Azotea',
        fr: 'Accès au Toit-Terrasse',
        ru: 'Доступ на Крышу',
        nl: 'Toegang tot Dakterras',
        de: 'Dachterrassenzugang',
        it: 'Accesso al Tetto',
      },
      icon: 'deck',
    },
    {
      name: {
        en: 'Public Parking',
        es: 'Estacionamiento Público',
        fr: 'Stationnement Public',
        ru: 'Общественная Парковка',
        nl: 'Openbare Parkeerplaats',
        de: 'Öffentliche Parkplätze',
        it: 'Parcheggio Pubblico',
      },
      icon: 'local_parking',
    },
    {
      name: {
        en: 'Washer',
        es: 'Lavadora',
        fr: 'Machine à Laver',
        ru: 'Стиральная Машина',
        nl: 'Wasmachine',
        de: 'Waschmaschine',
        it: 'Lavatrice',
      },
      icon: 'local_laundry_service',
    },
  ],
  nearbyAttractions: [
    {
      name: {
        en: 'Restaurants & Bars',
        es: 'Restaurantes y Bares',
        fr: 'Restaurants et Bars',
        ru: 'Рестораны и Бары',
        nl: 'Restaurants en Bars',
        de: 'Restaurants und Bars',
        it: 'Ristoranti e Bar',
      },
      distance: 100,
      icon: 'restaurant',
    },
    {
      name: {
        en: 'Grocery Stores',
        es: 'Tiendas de Comestibles',
        fr: 'Épiceries',
        ru: 'Продуктовые Магазины',
        nl: 'Supermarkten',
        de: 'Lebensmittelgeschäfte',
        it: 'Negozi di Alimentari',
      },
      distance: 200,
      icon: 'shopping_cart',
    },
    {
      name: {
        en: 'Casino',
        es: 'Casino',
        fr: 'Casino',
        ru: 'Казино',
        nl: 'Casino',
        de: 'Kasino',
        it: 'Casinò',
      },
      distance: 2000,
      icon: 'casino',
    },
    {
      name: {
        en: 'Shopping Center',
        es: 'Centro Comercial',
        fr: 'Centre Commercial',
        ru: 'Торговый Центр',
        nl: 'Winkelcentrum',
        de: 'Einkaufszentrum',
        it: 'Centro Commerciale',
      },
      distance: 3000,
      icon: 'shopping_bag',
    },
  ],
}; 