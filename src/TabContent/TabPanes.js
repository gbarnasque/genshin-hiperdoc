import GenshinImpact from '../images/Genshin_Impact.jpeg';
import GenshinImpactTrailer from '../images/genshin-impact-trailer.mp4';
import Teyvat from '../images/Teyvat.webp';
import Mondstadt from '../images/Emblema_Mondstadt.webp';
import Liyue from '../images/Emblema_Liyue.webp';
import Inazuma from '../images/Emblema_Inazuma.webp';
import Personagens from '../images/personagens.jpg';

const TabPanes  = [
    {
        id: '1',
        eventKey: 'o-que-e-genshin-impact',
        image: {
            src: GenshinImpact,
            width: '720',
        },
        trailer: {
            src: GenshinImpactTrailer,
            type: 'video/mp4',
            width: '720',
        },
        title: 'Genshin Impact',
        text: [
            'Genshin Impact é um RPG de ação de mundo aberto desenvolvido e publicado pela miHoYo para plataformas PC, iOS / Android, PS4 e PS5. O jogo é gratuito com um sistema de monetização Gacha na forma de Orações.',
            'Uma aventura imersiva single player. Como um viajante do outro mundo, você irá partir para uma jornada para encontrar a si mesmo e se reunir com o seu ente perdido.',
            'Voando num mundo vasto, mergulhando num mar interminável, escale montanhas magníficas, explore os segredos ocultos de um mundo cheio de aventura e mistérios.',
            'No mundo aberto de Genshin Impact, a manipulação inteligente de elementos é a chave para derrotar inimigos e solucionar os enigmas.',
            'A história de Genshin Impact se passa no mundo de Teyvat.',
        ],
    },
    {
        id: '2',
        eventKey: 'teyvat',
        image: {
            src: Teyvat,
            height: '400',
            alt: 'Mapa de Teyvat',
        },
        title: 'Teyvat',
        text: [
            'Teyvat é o mundo fantasia onde dominam os Sete Elementos (Água, Fogo, Terra, Ar, Eletro, Gelo e Dendro).',
            'Há muito tempo, as pessoas, através de suas crenças nos Deuses, aprenderam a controlar o poder desses elementos, e transformaram este lugar inóspito em suas moradias. O colapso desse império, há 500 anos, abalou os céus e a terra.',
            'Atualmente existem 3 nações disponíveis para exploração: Mondstadt, Liyue e Inazuma.',
        ],
    },
    {
        id: '3',
        eventKey: 'mondstadt',
        image: {
            src: Mondstadt,
            width: '256',
            height: '256',
            alt: 'Brasão de Mondstadt',
        },
        title: 'Mondstadt',
        text: [
            'Mondstadt é uma das sete nações de Teyvat, tem como seu elemento o Ar, e é a primeira nação em que o Viajante começa a busca por seu irmão(a). É a cidade-estado que venera Barbatos, o Arconte Anemo.',
            'Mondstadt significa "Cidade da Lua" em alemão, e a arquitetura de Mondstadt é inspirada em casas de enxaimel, edifícios medievais típicos da Alemanha.'
        ],
    },
    {
        id: '4',
        eventKey: 'liyue',
        image: {
            src: Liyue,
            width: '256',
            height: '256',
            alt: 'Brasão de Liyue',
        },
        title: 'Liyue',
        text: [
            'Segunda nação em que o Viajante chega em sua jornada.',
            'Liyue é a nação do elemento Terra e a mais próspera das sete nações de Teyvat',
            'É inspirada na China e considerada um centro econômico de Teyvat.'
        ],
    },
    {
        id: '5',
        eventKey: 'inazuma',
        image: {
            src: Inazuma,
            width: '256',
            height: '256',
            alt: 'Brasão de Inazuma',
        },
        title: 'Inazuma',
        text: [
            'Terceira nação em que o Viajante chega em sua jornada.',
            'É o arquipélago que venera a Shogun Raiden, a Arconte Electro, logo tem seu elemento o Electro, que também é a líder de seu corpo governante, o Bafuku de Inazuma.',
            'Muito parecido com o Japão na vida real, Inazuma foi criada como uma ilha acessível apenas por barco.',
        ],
    },
    {
        id: '6',
        eventKey: 'personagens',
        image: {
            src: Personagens,
            width: '711',
            height: '400',
            alt: 'Personagens de Genshin Impact',
        },
        title: 'Personagens',
        text: [
            'No começo do jogo pode-se escolher um entre um casal de irmãos gêmeos para ser seu Viajante. Esta escolha não afeta o jogo de modo geral.',
            'O Viajante é o único personagem, até o momento, que pode utilizar poderes de mais de um elemento, entretanto somente um de cada vez.',
            'Além do Viajante, o jogador pode utilizar de outros 7 personagens fornecidos gratuitamente, cada um com seu elemento e suas habilidades',
            'Para obter mais personagens jogáveis, deve-se utilizar um sistema Gacha, sistema de jogo de sorte onde se tem uma porcentagem de chance de conseguir o personagem que está no sorteio.'
        ],
    },
];

export default TabPanes;