interface IFilterColumns {
    name: 'gender' | 'size' | 'type'
    title: string
    options: { value: string; text: string }[]
  }

export const filterColumns: IFilterColumns[] = [
    {
    name: 'type',
    title: 'Espécie',
    options:[
        {
            value:'',
            text: 'Todos'
        },
        {
            value:'dog',
            text: 'Cachorros',
        },
        {
            value:'cat',
            text: 'Gatos',
        },
        {
            value: 'turtle',
            text: 'Tartarugas'
        },
        {
            value: 'raccoon',
            text: 'Guaxinins'
        },
        {
            value: 'hamster',
            text: 'Hamsters'
        },
    ]
},
{
    name: 'size',
    title: 'Porte',
    options: [
        {
            value:'',
            text: 'Todos',
        },
        {
            value:'small',
            text: 'Pequeno',
        },
        {
            value:'medium',
            text: 'Médio',
        },
        {
            value:'big',
            text: 'Grande',
        },
    ],
    },
    {
        name: 'gender',
        title: 'Sexo',
        options:[
            {
                value:'',
                text: 'Todos'
            },
            {
                value:'female',
                text: 'Fêmea'
            },
            {
                value:'male',
                text: 'Macho'
            },
        ]
    }
]
