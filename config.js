var config = {
    style: 'mapbox://styles/amradorjbayar/cl12t8tcu003s15pb3e995qk2',
    accessToken: 'pk.eyJ1IjoiYW1yYWRvcmpiYXlhciIsImEiOiJjbDEwa253bXAwZ2puM2NwOWl2cHB3MWM0In0.jq-8XdMskVY5iTyK9eL1Iw',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'De verwoesting van Marioepol',
    subtitle: 'Satelietbeelden tonen de totale verwoesting van de havenstad Marioepol',
    image: 'https://images.vrt.be/w1280hx/2022/03/21/3ea00a0b-a90c-11ec-b07d-02b7b76bf47f.jpg',
    byline: '',
    footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'ukraine',
            alignment: 'full',
            title: 'Marioepol, de hel van Europa',
            image: 'https://www.rtlnieuws.nl/sites/default/files/content/images/2022/03/06/ANP-445080509.jpg?itok=HbGKqsFT&offsetX=50&offsetY=135&cropWidth=973&cropHeight=547&width=2048&height=1152&impolicy=dynamic',
            description: 'Glacier National Park is dominated by mountains which were carved into their present shapes by the huge glaciers of the last ice age. These glaciers have largely disappeared over the last 12,000 years. Evidence of widespread glacial action is found throughout the park in the form of U-shaped valleys, cirques, arêtes, and large outflow lakes radiating like fingers from the base of the highest peaks. Since the end of the ice ages, various warming and cooling trends have occurred. The last recent cooling trend was during the Little Ice Age, which took place approximately between 1550 and 1850. During the Little Ice Age, the glaciers in the park expanded and advanced, although to nowhere near as great an extent as they had during the Ice Age.',
            location: {
                center: [53.38272, 9.99941],
                zoom: 1.28,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 0
                }
            ]
        },
        {
            id: 'harrison1998',
            alignment: 'left',
            title: 'Al meer dan 20 duizend doden in Oekraïne',
            image: '',
            description: 'Sinds de Russische inval in Oekraïne zijn er al 20 duizend burgerdoden gevallen. Dat is een schatting van Amnesty International.', 

            location: {
                center: [31.51173, 48.76938],
                zoom: 5.48,
                pitch: 45.00,
                bearing: 0,
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'harrison2015',
            alignment: 'left',
            title: '',
            image: '',
            description: 'In havenstad Marioepol zitten 400.000 mensen al wekenlang zonder stromend water, elektriciteit en verwarming. Het is een belegerde stad waarin het vreselijk leven is: er liggen dode lichamen op straat en geregeld worden er ziekenhuizen, theaters en woningen gebombardeerd. Sinds vrijdag zijn de Russische soldaten de stad ook binnengetrokken en wordt volgens getuigen op straat gevochten.',
            location: {
                center: [37.54613, 47.09136],
                zoom: 11.50,
                pitch: 39.50,
                bearing: 36.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'blackfoot1998',
            alignment: 'left',
            title: 'Verwoeste school',
            image: 'https://unpluggedtv.press/wp-content/uploads/2022/03/Art-School.jpg',
            description: 'School nr 12',
            location: {
                center: [37.68230, 47.12650],
                zoom: 17.18,
                pitch: 51.50,
                bearing: -26.40
            },
            onChapterEnter: [
                {
                    layer: 'building-extrusion2',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'blackfoot2015',
            alignment: 'left',
            title: 'Blackfoot Glacier, 2015',
            image: 'https://i.insider.com/62368816927f4a001886b2ec?width=1000&format=jpeg&auto=webp',
            description: 'Between 1998 and 2015, Blackfoot Glacier lost 31 acres of surface area (about 8%).',
            location: {
                center: { lon: 37.54855, lat: 47.09604 },
                zoom: 17.39,
                pitch: 56.00,
                bearing: 14.40
            },
            onChapterEnter: [
                {
                    layer: 'building-extrusion2',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 0
                }
            ]
        },
        {
            id: 'agassiz1998',
            alignment: 'left',
            title: 'Agassiz Glacier, 1998',
            image: '',
            description: 'Agassiz Glacier is in Glacier National Park in the U.S. state of Montana. It is named after Louis Agassiz, a Swiss-American glaciologist. The glacier is situated in a cirque to the southeast of Kintla Peak west of the Continental Divide. Agassiz Glacier is one of several glaciers that have been selected for monitoring by the U.S. Geological Survey\'s Glacier Monitoring Research program, which is researching changes to the mass balance of glaciers in and surrounding Glacier National Park.',
            location: {
                center: { lon: 37.54855, lat: 47.09604 },
                zoom: 17.39,
                pitch: 56.00,
                bearing: 14.40
            },
            onChapterEnter: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'agassiz2015',
            alignment: 'left',
            title: 'Agassiz Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Agassiz Glacier lost 108 acres of surface area (about 37%).',
            location: {
                center: { lon: 37.54855, lat: 47.09604 },
                zoom: 17.39,
                pitch: 56.00,
                bearing: 14.40
            },
            onChapterEnter: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 0
                }
            ]
        },
        {
            id: 'rainbow1998',
            alignment: 'left',
            title: 'Rainbow Glacier, 1998',
            image: '',
            description: 'Rainbow Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated immediately to the east of Rainbow Peak at an elevation between 8,500 feet (2,600 m) and 8,000 feet (2,400 m) above sea level. The glacier has visible crevasses in satellite imagery. Rainbow Glacier has shown modest retreat compared to other glaciers in Glacier National Park.',
            location: {
                center: [-114.08659, 48.88039],
                zoom: 13.09,
                pitch: 50.00,
                bearing: -53.60
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rainbow2015',
            alignment: 'left',
            title: 'Rainbow Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Rainbow Glacier lost 17 acres of surface area (about 6%).',
            location: {
                center: [-114.08659, 48.88039],
                zoom: 13.09,
                pitch: 50.00,
                bearing: -53.60
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'kintla1998',
            alignment: 'left',
            title: 'Kintla Glacier, 1998',
            image: '',
            description: 'Kintla Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated on a plateau 2 miles (3.2 km) southwest of Kintla Peak at an elevation between 8,700 feet (2,700 m) and 7,700 feet (2,300 m) above sea level. The glacier has numerous crevasses and is actually two glaciers.',
            location: {
                center: [-114.18755, 48.92880],
                zoom: 13.09,
                pitch: 48.50,
                bearing: 164.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kintla2015',
            alignment: 'left',
            title: 'Kintla Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Harrison Glacier lost 24 acres of surface area (about 10%).',
            location: {
                center: [-114.18755, 48.92880],
                zoom: 13.09,
                pitch: 48.50,
                bearing: 164.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'sperry1998',
            alignment: 'left',
            title: 'Sperry Glacier, 1998',
            image: '',
            description: 'Sperry Glacier is a glacier on the north slopes of Gunsight Mountain west of the Continental Divide in Glacier National Park in the U.S. state of Montana. Although many geologic features of Glacier National Park were formed during the much longer period of glaciation ending over 10,000 years ago, Sperry Glacier — like all the glaciers in the park today — is a product of the recent Little Ice Age, the period of cooler average temperatures starting in about the 13th century and concluding in the mid-19th century.',
            location: {
                center: [-113.75672, 48.62433],
                zoom: 13.68,
                pitch: 34.50,
                bearing: 106.40
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sperry2015',
            alignment: 'left',
            title: 'Sperry Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Harrison Glacier lost 37 acres of surface area (about 16%).',
            location: {
                center: [-113.75672, 48.62433],
                zoom: 13.68,
                pitch: 34.50,
                bearing: 106.40
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
         }
    ]
};

