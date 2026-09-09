export const SITE = {
  brand: 'VS GLOBAL',
  tagline: 'UK Education Consultancy',
  ukPhone: '+44 7435 651614',
  ukPhoneHref: '+447435651614',
  indiaName: 'Radha Syam Manduva',
  indiaPhone: '+91 99896 36729',
  indiaPhoneHref: '+919989636729',
  ukName: 'Venkat Reddy Garlapati',
  waNumber: '447435651614',
  waMessage:
    'Hello VS GLOBAL, I am interested in studying a Master\'s degree in the UK. I would like to know more about the application process.',
  disclaimer:
    'VS GLOBAL provides education counselling and application support. University admission, CAS issuance and visa decisions are made by the relevant institutions/authorities. Requirements can change and students should check current official guidance.',
};

export const waLink = (msg = SITE.waMessage) =>
  `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(msg)}`;
