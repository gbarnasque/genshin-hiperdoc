const Items = [
    {
        description: 'O que é Genshin Impact?', 
        link: 'o-que-e-genshin-impact',
        children: null,
    },
    {
        description: 'Teyvat', 
        link: 'teyvat', 
        children: [
            {
                description: 'Mondstadt',
                link: 'mondstadt',
                children: null,
            },
            {
                description: 'Liyue',
                link: 'liyue',
                children: null,
            },
            {
                description: 'Inazuma',
                link: 'inazuma',
                children: null,
            }
        ],
    },
    {
        description: 'Personagens', 
        link: 'personagens',
        children: null,
    },
];

export default Items;