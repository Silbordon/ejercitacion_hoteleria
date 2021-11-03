import indoorpool from './imagenes/indoorpool.jpeg';
import bar from './imagenes/bar.jpeg';
import standard from './imagenes/standar.jpeg';
import outdoorpool from './imagenes/outdoorpool.jpeg';
import executive from './imagenes/executive.jpeg';
import withbalcony from './imagenes/withbalcony.jpeg';
import juniorsuite from './imagenes/juniorsuite.jpeg';
import suite from './imagenes/suite.jpeg';

const mockData = [
    {
        src: indoorpool,
        title: "Our indoor pool",
        description: "25m long indoor pool with hammocks sauna",
    },
    {
        src: bar,
        title: "Cocktail bar",
        description: "Esplendid classic cocktails bar with live music",
    },
    {
        src: standard,
        title: "Standard room",
        description: "20 sqm rooms with full amenities",
        cat: "room",
        price: 140,
        stock: 12,
        notAvailablestart: new Date(2021, 3, 10).getTime(),
        notAvailableend: new Date(2021, 3, 10).getTime(),
    },
    {
        src: outdoorpool,
        title: "Outdoor pool",
        description: "infinity pool with breath taking Ocean views",
    },
    {
        src: executive,
        title: "Executive room",
        description: "Our business rooms with lounge acess",
        cat: "room",
        price: 170,
        stock: 9,
        notAvailablestart: new Date(2021, 3, 10).getTime(),
        notAvailableend: new Date(2021, 3, 10).getTime(),
    },
    {
        src: withbalcony,
        title: "Rooms with balcony",
        description: "Rooms with amazing sea views",
        cat: "room",
        price: 175,
        stock: 15,
        notAvailablestart: new Date(2021, 3, 10).getTime(),
        notAvailableend: new Date(2021, 3, 10).getTime(),
    },
    {
        src: juniorsuite,
        title: "Junior Suite with kitchenette",
        description: "Our Junior Suites are perfect for families",
        cat: "room",
        price: 225,
        stock: 10,
        notAvailablestart: new Date(2021, 3, 10).getTime(),
        notAvailableend: new Date(2021, 3, 10).getTime(),
    },
    {
        src: suite,
        title: "Our Corner Suite",
        description: "Discrete and luxurious with butler service",
        cat: "room",
        price: 350,
        stock: 4,
        notAvailablestart: new Date(2021, 3, 20).getTime(),
        notAvailableend: new Date(2021, 3, 25).getTime(),
    },
];

export const chips = [
    { key: 0, label: "Cancellation Flexibility" },
    { key: 1, label: "Standard rooms" },
    { key: 2, label: "Executive rooms" },
    { key: 3, label: "Access to lounge" },
    { key: 4, label: "more filters" },
];

export default mockData;