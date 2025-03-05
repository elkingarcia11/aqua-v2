export interface Property {
  id: string;
  name: string;
  floor: number;
  description: {
    en: string;
    es: string;
    fr: string;
    ru: string;
    nl: string;
    de: string;
    it: string;
  };
  features: {
    beachView: boolean;
    bedrooms: number;
    bathrooms: number;
    capacity: number;
  };
  images: string[];
  airbnbLink: string;
  location: {
    lat: number;
    lng: number;
  };
}

export const properties: Property[] = [
  {
    id: 'aqua1',
    name: 'AQUA 1',
    floor: 1,
    description: {
      en: 'Situated on the first floor of the AQUA building, directly on the sands of El Pueblito Beach, this apartment offers a beach view.',
      es: 'Situado en el primer piso del edificio AQUA, directamente en las arenas de la playa El Pueblito, este apartamento ofrece vista a la playa.',
      fr: 'Situé au premier étage du bâtiment AQUA, directement sur les sables de la plage El Pueblito, cet appartement offre une vue sur la plage.',
      ru: 'Расположенный на первом этаже здания AQUA, прямо на песках пляжа Эль-Пуэблито, этот апартамент предлагает вид на пляж.',
      nl: 'Gelegen op de eerste verdieping van het AQUA-gebouw, direct aan het zand van El Pueblito Beach, biedt dit appartement uitzicht op het strand.',
      de: 'Dieses Apartment befindet sich im ersten Stock des AQUA-Gebäudes, direkt am Sand des El Pueblito Beach und bietet einen Blick auf den Strand.',
      it: 'Situato al primo piano dell\'edificio AQUA, direttamente sulla sabbia della spiaggia di El Pueblito, questo appartamento offre una vista sulla spiaggia.',
    },
    features: {
      beachView: true,
      bedrooms: 2,
      bathrooms: 2,
      capacity: 4,
    },
    images: [
      '/images/properties/aqua1/a.webp',
      '/images/properties/aqua1/c.webp',
      '/images/properties/aqua1/d.webp',
      '/images/properties/aqua1/e.webp',
      '/images/properties/aqua1/f.webp',
      '/images/properties/aqua1/g.webp',
      '/images/properties/aqua1/h.webp',
      '/images/properties/aqua1/i.webp',
      '/images/properties/aqua1/j.webp',
      '/images/properties/aqua1/k.webp',
      '/images/properties/aqua1/l.webp',
      '/images/properties/aqua1/m.webp',
      '/images/properties/aqua1/n.webp',
      '/images/properties/aqua1/o.webp',
      '/images/properties/aqua1/q.webp'
    ],
    airbnbLink: 'https://www.airbnb.com/rooms/614372473896092731?guests=2&adults=2&s=67&unique_share_id=c88a11a6-acaa-45e9-bdbe-57018de8e8e5',
    location: {
      lat: 19.7739099,
      lng: -70.6520804,
    },
  },
  {
    id: 'aqua2',
    name: 'AQUA 2',
    floor: 2,
    description: {
      en: 'Situated on the second floor of the AQUA building, directly on the sands of El Pueblito Beach, this apartment offers a beach view.',
      es: 'Situado en el segundo piso del edificio AQUA, directamente en las arenas de la playa El Pueblito, este apartamento ofrece vista a la playa.',
      fr: 'Situé au deuxième étage du bâtiment AQUA, directement sur les sables de la plage El Pueblito, cet appartement offre une vue sur la plage.',
      ru: 'Расположенный на втором этаже здания AQUA, прямо на песках пляжа Эль-Пуэблито, этот апартамент предлагает вид на пляж.',
      nl: 'Gelegen op de tweede verdieping van het AQUA-gebouw, direct aan het zand van El Pueblito Beach, biedt dit appartement uitzicht op het strand.',
      de: 'Dieses Apartment befindet sich im zweiten Stock des AQUA-Gebäudes, direkt am Sand des El Pueblito Beach und bietet einen Blick auf den Strand.',
      it: 'Situato al secondo piano dell\'edificio AQUA, direttamente sulla sabbia della spiaggia di El Pueblito, questo appartamento offre una vista sulla spiaggia.',
    },
    features: {
      beachView: true,
      bedrooms: 1,
      bathrooms: 1,
      capacity: 2,
    },
    images: [
      '/images/properties/aqua2/a.webp',
      '/images/properties/aqua2/b.webp',
      '/images/properties/aqua2/c.webp',
      '/images/properties/aqua2/d.webp',
      '/images/properties/aqua2/e.webp',
      '/images/properties/aqua2/f.webp',
      '/images/properties/aqua2/g.webp',
      '/images/properties/aqua2/h.webp',
      '/images/properties/aqua2/i.webp',
      '/images/properties/aqua2/l.webp',
      '/images/properties/aqua2/s.webp',
      '/images/properties/aqua2/t.webp',
      '/images/properties/aqua2/u.webp',
      '/images/properties/aqua2/v.webp',
      '/images/properties/aqua2/x.webp',
      '/images/properties/aqua2/z.webp'
    ],
    airbnbLink: 'https://www.airbnb.com/rooms/614388890268120421?guests=2&adults=2&s=67&unique_share_id=879aed86-3f6e-466d-9d69-1cfa72b323ee',
    location: {
      lat: 19.7739099,
      lng: -70.6520804,
    },
  },
  {
    id: 'aqua3',
    name: 'AQUA 3',
    floor: 3,
    description: {
      en: 'Situated on the third floor of the AQUA building, directly on the sands of El Pueblito Beach, this apartment offers a beach view.',
      es: 'Situado en el tercer piso del edificio AQUA, directamente en las arenas de la playa El Pueblito, este apartamento ofrece vista a la playa.',
      fr: 'Situé au troisième étage du bâtiment AQUA, directement sur les sables de la plage El Pueblito, cet appartement offre une vue sur la plage.',
      ru: 'Расположенный на третьем этаже здания AQUA, прямо на песках пляжа Эль-Пуэблито, этот апартамент предлагает вид на пляж.',
      nl: 'Gelegen op de derde verdieping van het AQUA-gebouw, direct aan het zand van El Pueblito Beach, biedt dit appartement uitzicht op het strand.',
      de: 'Dieses Apartment befindet sich im dritten Stock des AQUA-Gebäudes, direkt am Sand des El Pueblito Beach und bietet einen Blick auf den Strand.',
      it: 'Situato al terzo piano dell\'edificio AQUA, direttamente sulla sabbia della spiaggia di El Pueblito, questo appartamento offre una vista sulla spiaggia.',
    },
    features: {
      beachView: true,
      bedrooms: 2,
      bathrooms: 1,
      capacity: 4,
    },
    images: [
      '/images/properties/aqua3/a.webp',
      '/images/properties/aqua3/b.webp',
      '/images/properties/aqua3/c.webp',
      '/images/properties/aqua3/d.webp',
      '/images/properties/aqua3/e.webp',
      '/images/properties/aqua3/f.webp',
      '/images/properties/aqua3/g.webp',
      '/images/properties/aqua3/h.webp',
      '/images/properties/aqua3/i.webp',
      '/images/properties/aqua3/j.webp',
      '/images/properties/aqua3/k.webp',
      '/images/properties/aqua3/s.webp',
      '/images/properties/aqua3/t.webp',
      '/images/properties/aqua3/u.webp',
      '/images/properties/aqua3/v.webp',
      '/images/properties/aqua3/x.webp',
      '/images/properties/aqua3/z.webp'
    ],
    airbnbLink: 'https://www.airbnb.com/rooms/615279204201976863?guests=2&adults=2&s=67&unique_share_id=f6f57145-e259-4bbb-badd-df59e976d723',
    location: {
      lat: 19.7739099,
      lng: -70.6520804,
    },
  },
  {
    id: 'aqua4',
    name: 'AQUA 4',
    floor: 1,
    description: {
      en: 'Located on the first floor of the AQUA building, directly on the sands of El Pueblito Beach, this apartment does not offer a beach view, but offers easy beach access right around the corner.',
      es: 'Ubicado en el primer piso del edificio AQUA, directamente en las arenas de la playa El Pueblito, este apartamento no ofrece vista a la playa, pero ofrece fácil acceso a la playa a la vuelta de la esquina.',
      fr: 'Situé au premier étage du bâtiment AQUA, directement sur les sables de la plage El Pueblito, cet appartement n\'offre pas de vue sur la plage, mais offre un accès facile à la plage juste au coin.',
      ru: 'Расположенный на первом этаже здания AQUA, прямо на песках пляжа Эль-Пуэблито, этот апартамент не предлагает вид на пляж, но предлагает легкий доступ к пляжу прямо за углом.',
      nl: 'Gelegen op de eerste verdieping van het AQUA-gebouw, direct aan het zand van El Pueblito Beach, biedt dit appartement geen uitzicht op het strand, maar biedt het gemakkelijke toegang tot het strand om de hoek.',
      de: 'Dieses Apartment befindet sich im ersten Stock des AQUA-Gebäudes, direkt am Sand des El Pueblito Beach und bietet keinen Blick auf den Strand, aber einen einfachen Zugang zum Strand gleich um die Ecke.',
      it: 'Situato al primo piano dell\'edificio AQUA, direttamente sulla sabbia della spiaggia di El Pueblito, questo appartamento non offre una vista sulla spiaggia, ma offre un facile accesso alla spiaggia proprio dietro l\'angolo.',
    },
    features: {
      beachView: false,
      bedrooms: 1,
      bathrooms: 1,
      capacity: 2,
    },
    images: [
      '/images/properties/aqua4/b.webp',
      '/images/properties/aqua4/c.webp',
      '/images/properties/aqua4/d.webp',
      '/images/properties/aqua4/e.webp',
      '/images/properties/aqua4/f.webp',
      '/images/properties/aqua4/g.webp',
      '/images/properties/aqua4/h.webp',
      '/images/properties/aqua4/i.webp',
      '/images/properties/aqua4/j.webp',
      '/images/properties/aqua4/k.webp',
      '/images/properties/aqua4/s.webp',
      '/images/properties/aqua4/u.webp',
      '/images/properties/aqua4/v.webp',
      '/images/properties/aqua4/x.webp',
      '/images/properties/aqua4/y.webp',
      '/images/properties/aqua4/z.webp'
    ],
    airbnbLink: 'https://www.airbnb.com/rooms/54207575?guests=2&adults=2&s=67&unique_share_id=b1f40417-9dea-4f66-8db9-e43d86944f15',
    location: {
      lat: 19.7739099,
      lng: -70.6520804,
    },
  },
  {
    id: 'aqua5',
    name: 'AQUA 5',
    floor: 2,
    description: {
      en: 'Located on the second floor of the AQUA building, directly on the sands of El Pueblito Beach, this apartment does not offer a beach view, but offers easy beach access right around the corner.',
      es: 'Ubicado en el segundo piso del edificio AQUA, directamente en las arenas de la playa El Pueblito, este apartamento no ofrece vista a la playa, pero ofrece fácil acceso a la playa a la vuelta de la esquina.',
      fr: 'Situé au deuxième étage du bâtiment AQUA, directement sur les sables de la plage El Pueblito, cet appartement n\'offre pas de vue sur la plage, mais offre un accès facile à la plage juste au coin.',
      ru: 'Расположенный на втором этаже здания AQUA, прямо на песках пляжа Эль-Пуэблито, этот апартамент не предлагает вид на пляж, но предлагает легкий доступ к пляжу прямо за углом.',
      nl: 'Gelegen op de tweede verdieping van het AQUA-gebouw, direct aan het zand van El Pueblito Beach, biedt dit appartement geen uitzicht op het strand, maar biedt het gemakkelijke toegang tot het strand om de hoek.',
      de: 'Dieses Apartment befindet sich im zweiten Stock des AQUA-Gebäudes, direkt am Sand des El Pueblito Beach und bietet keinen Blick auf den Strand, aber einen einfachen Zugang zum Strand gleich um die Ecke.',
      it: 'Situato al secondo piano dell\'edificio AQUA, direttamente sulla sabbia della spiaggia di El Pueblito, questo appartamento non offre una vista sulla spiaggia, ma offre un facile accesso alla spiaggia proprio dietro l\'angolo.',
    },
    features: {
      beachView: false,
      bedrooms: 2,
      bathrooms: 1,
      capacity: 4,
    },
    images: [
      '/images/properties/aqua5/b.webp',
      '/images/properties/aqua5/d.webp',
      '/images/properties/aqua5/e.webp',
      '/images/properties/aqua5/f.webp',
      '/images/properties/aqua5/g.webp',
      '/images/properties/aqua5/h.webp',
      '/images/properties/aqua5/i.webp',
      '/images/properties/aqua5/j.webp',
      '/images/properties/aqua5/k.webp',
      '/images/properties/aqua5/l.webp',
      '/images/properties/aqua5/s.webp',
      '/images/properties/aqua5/u.webp',
      '/images/properties/aqua5/v.webp',
      '/images/properties/aqua5/x.webp',
      '/images/properties/aqua5/y.webp',
      '/images/properties/aqua5/z.webp'
    ],
    airbnbLink: 'https://www.airbnb.com/rooms/614357465355883390?guests=2&adults=2&s=67&unique_share_id=c35a72d1-ac05-480d-99fd-864e43e933bf',
    location: {
      lat: 19.7739099,
      lng: -70.6520804,
    },
  },
  {
    id: 'aqua6',
    name: 'AQUA 6',
    floor: 4,
    description: {
      en: 'Located on the fourth floor and rooftop of the AQUA building, directly on the sands of El Pueblito Beach, this apartment offers a partial beach view, but offers easy beach & rooftop access.',
      es: 'Ubicado en el cuarto piso y azotea del edificio AQUA, directamente en las arenas de la playa El Pueblito, este apartamento ofrece una vista parcial a la playa, pero ofrece fácil acceso a la playa y a la azotea.',
      fr: 'Situé au quatrième étage et sur le toit du bâtiment AQUA, directement sur les sables de la plage El Pueblito, cet appartement offre une vue partielle sur la plage, mais offre un accès facile à la plage et au toit.',
      ru: 'Расположенный на четвертом этаже и крыше здания AQUA, прямо на песках пляжа Эль-Пуэблито, этот апартамент предлагает частичный вид на пляж, но предлагает легкий доступ к пляжу и крыше.',
      nl: 'Gelegen op de vierde verdieping en het dak van het AQUA-gebouw, direct aan het zand van El Pueblito Beach, biedt dit appartement een gedeeltelijk uitzicht op het strand, maar biedt het gemakkelijke toegang tot het strand en het dak.',
      de: 'Dieses Apartment befindet sich im vierten Stock und auf dem Dach des AQUA-Gebäudes, direkt am Sand des El Pueblito Beach und bietet einen teilweisen Blick auf den Strand, aber einen einfachen Zugang zum Strand und zum Dach.',
      it: 'Situato al quarto piano e sul tetto dell\'edificio AQUA, direttamente sulla sabbia della spiaggia di El Pueblito, questo appartamento offre una vista parziale sulla spiaggia, ma offre un facile accesso alla spiaggia e al tetto.',
    },
    features: {
      beachView: false,
      bedrooms: 1,
      bathrooms: 1,
      capacity: 2,
    },
    images: [
      '/images/properties/aqua6/b.webp',
      '/images/properties/aqua6/c.webp',
      '/images/properties/aqua6/d.webp',
      '/images/properties/aqua6/e.webp',
      '/images/properties/aqua6/h.webp',
      '/images/properties/aqua6/i.webp',
      '/images/properties/aqua6/j.webp',
      '/images/properties/aqua6/k.webp',
      '/images/properties/aqua6/s.webp',
      '/images/properties/aqua6/u.webp',
      '/images/properties/aqua6/v.webp',
      '/images/properties/aqua6/x.webp',
      '/images/properties/aqua6/y.webp',
      '/images/properties/aqua6/z.webp'
    ],
    airbnbLink: 'https://www.airbnb.com/rooms/670959074975116873?guests=2&adults=2&s=67&unique_share_id=3c32847b-1e1d-446a-a30e-99bc31a6272a',
    location: {
      lat: 19.7739099,
      lng: -70.6520804,
    },
  },
]; 