const Info = [
  {
    id: 1,
    name: "Intel i386",
    title: "Produkowany w latach 1985-2007",
    image: "https://jlcfirst.kszk-online.pl/1985_i386.jpg",
    quote: "32-bity, 275.000 tranzystorów",
  },
  {
    id: 2,
    name: "MS Windows 1.01",
    title: "Premiera 20. listopad 1985",
    image: "https://jlcfirst.kszk-online.pl/1985_Win101.jpg",
    quote: "Wypasiony PeCet miał 256kB RAM i dwie stacje dysków...",
  },
  {
    id: 3,
    name: "Commodore C-64",
    title: "Pierwszy hit sprzedaży JLC First",
    image: "https://jlcfirst.kszk-online.pl/1986_c64.jpg",
    quote: "Król maszyn 8-bitowych. W ofercie (była) pełna gama akcesorii",
  },
  {
    id: 4,
    name: "MS Windows 2.0",
    title: "Premiera 9. grudnia 1987",
    image: "https://jlcfirst.kszk-online.pl/1987_Win203.jpg",
    quote: "Pierwsza wersja ze sterowalnymi okienkami",
  },
  {
    id: 5,
    name: "Commodore Amiga 500",
    title: "Multimedialny komputer do domu",
    image: "https://jlcfirst.kszk-online.pl/1988_a500.jpg",
    quote:
      "Stacja dysków 880kB, roździelczość dochodząca do 736x567, processor Motorolla 68000 z zegarem 7.16 MHz",
  },
  {
    id: 6,
    name: "Intel i486",
    title: "Produkowany w latach 1989-2007",
    image: "https://jlcfirst.kszk-online.pl/1989_i486.jpg",
    quote: "32-bity, 1.6 miliona tranzystorów",
  },
  {
    id: 7,
    name: "MS Windows 3.0",
    title: "Premiera 22. maj 1990",
    image: "https://jlcfirst.kszk-online.pl/1990_Win30.jpg",
    quote:
      "Multitasking, zaawansowane zarządzanie pamięcią i pierwsza wersja Program Menedżera",
  },
  {
    id: 8,
    name: "MS Windows 3.1",
    title: "Premiera 6. kwietnia 1992",
    image: "https://jlcfirst.kszk-online.pl/1992_Win31.jpg",
    quote: "Fonty TrueType i przede i nade wszystko Polska Wersja Językowa :)",
  },
  {
    id: 9,
    name: "Intel Pentium",
    title: "Produkowany w latach 1993-1999",
    image: "https://jlcfirst.kszk-online.pl/1993_Pentium.jpg",
    quote:
      "32-bity, 3.3 miliona tranzystorów, częstotliwość taktowania zegara do 300 MHz",
  },
  {
    id: 10,
    name: "MS Windows 95",
    title: "Premiera 24. sierpnia 1995",
    image: "https://jlcfirst.kszk-online.pl/1995_Win95.jpg",
    quote:
      "Obsługa protokułu IP i przeglądarka internetowa otwierała drzwi do Wirtualnego Świata",
  },
  {
    id: 11,
    name: "Intel Pentium II",
    title: "Produkowany w latach 1997-1999",
    image: "https://jlcfirst.kszk-online.pl/1997_Pentium_II.jpg",
    quote:
      "32-bity, 5.5 miliona tranzystorów, częstotliwość taktowania zegara do 450 MHz",
  },
  {
    id: 12,
    name: "MS Windows 98",
    title: "Premiera 25. czerwca 1998",
    image: "https://jlcfirst.kszk-online.pl/1998_Win98.jpg",
    quote:
      "Pełna personalizacja wyglądu. Polska wersja językowa to juz standard",
  },
  {
    id: 13,
    name: "Intel Pentium III",
    title: "Produkowany w latach 1999-2003",
    image: "https://jlcfirst.kszk-online.pl/1999_Pentium_III.jpg",
    quote:
      "32-bity, 50 milionów tranzystorów, częstotliwość taktowania zegara do 1.4 GHz",
  },
  {
    id: 14,
    name: "GEFORCE 256",
    title: "Debiut na rynku 1. lutego 2000",
    image: "https://jlcfirst.kszk-online.pl/2000_GF256.jpg",
    quote: "Pamięć - 32MB DDR, przepustowość 4.800 GB/s",
  },
  {
    id: 15,
    name: "MS Windows 2000",
    title: "Premiera 17. lutego 2000",
    image: "https://jlcfirst.kszk-online.pl/2000_Win2k.jpg",
    quote:
      "Równoczesna obsługa FAT, FAT32 i NTFS. Obsługa technologii USB i (zapomnianej dziś) IrDA",
  },
  {
    id: 16,
    name: "GEFORCE 2 ULTRA",
    title: "Debiut na rynku 14. sierpnia 2000",
    image: "https://jlcfirst.kszk-online.pl/2000_NVIDIA_GeForce2_Ultra.jpg",
    quote: "Pamięć - 64MB DDR, przepustowość 7.360 GB/s",
  },
  {
    id: 17,
    name: "Intel Pentium 4",
    title: "Produkowany w latach 2000-2008",
    image: "https://jlcfirst.kszk-online.pl/2000_P4.jpg",
    quote:
      "32-bity, 188 milionów tranzystorów, częstotliwość taktowania zegara do 3.8 GHz",
  },
  {
    id: 18,
    name: "MS Windows Me",
    title: "Premiera 14. sierpnia 2000",
    image: "https://jlcfirst.kszk-online.pl/2000_WinMe.jpg",
    quote: "Klawiatura na ekranie. Dziś standard - wtedy nowinka...",
  },
  {
    id: 19,
    name: "GEFORCE 3 TI 500",
    title: "Debiut na rynku 1. października 2001",
    image: "https://jlcfirst.kszk-online.pl/2001_GeForce3_Ti_500.jpg",
    quote: "Pamięć - 64MB DDR, przepustowość 8.000 GB/s",
  },
  {
    id: 20,
    name: "MS Windows XP",
    title: "Premiera 25. października 2001",
    image: "https://jlcfirst.kszk-online.pl/2001_WinXP.jpg",
    quote: `Po Win3.11 i przed Win7 - najlepsza i najdłużej użytkowana wersja "okienek"`,
  },
  {
    id: 21,
    name: "GEFORCE 4 TI 4800",
    title: "Debiut na rynku 15. marca 2003",
    image:
      "https://jlcfirst.kszk-online.pl/2003_GeForce4-Ti-4800-AGP-8x-P152-2.jpg",
    quote: "Pamięć - 128MB DDR, przepustowość 10.400 GB/s",
  },
  {
    id: 22,
    name: "GEFORCE FX 5950 ULTRA",
    title: "Debiut na rynku 23. października 2003",
    image:
      "https://jlcfirst.kszk-online.pl/2003_NVIDIA_GeForce_FX_5950_Ultra_ES.jpg",
    quote: "Pamięć - 256MB DDR, przepustowość 30.400 GB/s",
  },
  {
    id: 23,
    name: "GEFORCE 6800 ULTRA",
    title: "Debiut na rynku 26. lipca 2004",
    image: "https://jlcfirst.kszk-online.pl/2004_GEFORCE6800Ultra.jpg",
    quote: "Pamięć - 256MB DDR, przepustowość 30.400 GB/s",
  },
  {
    id: 24,
    name: "GEFORCE 7950 GX2",
    title: "Debiut na rynku 5. czerwca 2006",
    image: "https://jlcfirst.kszk-online.pl/2006_GEFORCE7950GX2.jpg",
    quote: "Pamięć - 512MB DDR, przepustowość 38.400 GB/s",
  },
  {
    id: 25,
    name: "GEFORCE 8800 GTX",
    title: "Debiut na rynku 8. listopada 2006",
    image: "https://jlcfirst.kszk-online.pl/2006_GEFORCE8800GTX.jpg",
    quote: "Pamięć - 768MB DDR, przepustowość 86.400 GB/s",
  },
  {
    id: 26,
    name: "MS Windows Vista",
    title: "Premiera 30. lipca 2007",
    image: "https://jlcfirst.kszk-online.pl/2007_Vista.jpg",
    quote:
      "Do dziś słyszymy terkotanie dysku indeksującego dane. Zapomniana wersja, bądź do zapomnienia...",
  },
  {
    id: 27,
    name: "GEFORCE GTX 295",
    title: "Debiut na rynku 8. stycznia 2009",
    image: "https://jlcfirst.kszk-online.pl/2009_GTS150.jpg",
    quote: "Pamięć - 1GB DDR3, przepustowość 64.000 GB/s",
  },
  {
    id: 28,
    name: "GEFORCE GTX 295",
    title: "Debiut na rynku 8. stycznia 2009",
    image: "https://jlcfirst.kszk-online.pl/2009_GTX295.jpg",
    quote: "Pamięć - 896MB DDR3, przepustowość 111.900 GB/s",
  },
  {
    id: 29,
    name: "MS Windows 7",
    title: "Premiera 22. października 2009",
    image: "https://jlcfirst.kszk-online.pl/2009_Win7.jpg",
    quote:
      "Długo oczekiwana wersja - spełniła stawiane wymagania. Wsparcie zakończyło się 14 stycznia 2020 r",
  },
  {
    id: 30,
    name: "GEFORCE GTX 480",
    title: "Debiut na rynku 26. marca 2010",
    image: "https://jlcfirst.kszk-online.pl/2010_GTX480.jpg",
    quote: "Pamięć - 1.5GB DDR5, przepustowość 177.4 GB/s",
  },
  {
    id: 31,
    name: "Intel Core i3",
    title: "Rodzina Core i3 dostępna jest od 2010 roku",
    image: "https://jlcfirst.kszk-online.pl/2010_i3.jpg",
    quote: "64-bity, do 4 corów, Turbo mode: 4.6 Ghz",
  },
  {
    id: 31.5,
    name: "Intel Core i5",
    title: "Rodzina Core i5 dostępna jest od 2010 roku",
    image: "https://jlcfirst.kszk-online.pl/2010_i5.jpeg",
    quote: "64-bity, do 6 corów, Turbo mode: 4.6 Ghz",
  },
  {
    id: 31.7,
    name: "Intel Core i7",
    title: "Rodzina Core i7 dostępna jest od 2010 roku",
    image: "https://jlcfirst.kszk-online.pl/2010_i7.jpeg",
    quote: "64-bity, do 8 corów, Turbo mode: 4.7 Ghz",
  },
  {
    id: 32,
    name: "GEFORCE GTX 590",
    title: "Debiut na rynku 24. marca 2011",
    image: "https://jlcfirst.kszk-online.pl/2011_GTX590.jpg",
    quote: "Pamięć - 1.5GB DDR5, przepustowość 164.0 GB/s",
  },
  {
    id: 33,
    name: "GEFORCE GTX 690",
    title: "Debiut na rynku 3. maja 2012",
    image: "https://jlcfirst.kszk-online.pl/2012_GTX690.jpg",
    quote: "Pamięć - 2GB DDR5, przepustowość 192.3 GB/s",
  },
  {
    id: 34,
    name: "MS Windows 8",
    title: "Premiera 26. października 2012",
    image: "https://jlcfirst.kszk-online.pl/2012_Win8.jpg",
    quote: "Świat kafelków - wsparcie rozszerzone dostępne do stycznia 2023 r",
  },
  {
    id: 35,
    name: "GEFORCE GTX 980 TI",
    title: "Debiut na rynku 2. czerwca 2015",
    image: "https://jlcfirst.kszk-online.pl/2015_GTX980TI.jpg",
    quote: "Świat kafelków - wsparcie rozszerzone dostępne do stycznia 2023 r",
  },
  {
    id: 36,
    name: "MS Windows 10",
    title: "Premiera 29. lipca 2015",
    image: "https://jlcfirst.kszk-online.pl/2015_Win10.jpg",
    quote:
      "Udana i lubiana wersja 'okienek'. Wsparcie rozszerzone dostępne do października 2025 r",
  },
  {
    id: 37,
    name: "GEFORCE GTX 1080 TI",
    title: "Debiut na rynku 10. marca 2017",
    image: "https://jlcfirst.kszk-online.pl/2017_GTX1080TI.jpg",
    quote: "Pamięć - 11GB DDR5, przepustowość 484.4 GB/s",
  },
  {
    id: 39,
    name: "Intel Core i9",
    title: "Rodzina Intel Core i9 dostępna jest od 2017 roku",
    image: "https://jlcfirst.kszk-online.pl/2017_i9.jpg",
    quote: "64-bity, do 18 corów, Turbo mode: 4.7 Ghz",
  },
  {
    id: 40,
    name: "GEFORCE RTX 2080 TI",
    title: "Debiut na rynku 20. września 2018",
    image: "https://jlcfirst.kszk-online.pl/2018_RTX2080TI.jpg",
    quote: "Pamięć - 11GB DDR5, przepustowość 616.0 GB/s",
  },
];

const infoByYear = Info.sort((a, b) => {
  return b.id - a.id;
});

export const slideInfo = [...infoByYear];
