export const checkObjJSON = [
    {
        id: '1',
        ip: '198.162.103.107',
        checkType: 'don`t check',
        isNextCheckRequest: true,
        source: 'user-agent',
        createdAt: 'Fri Mar 29 2018 00:00:00 GMT+0400',
        createdBy: 'Cavidan',
        modifiedAt: 'Fri Mar 29 2019 00:00:00 GMT+0400',
        modifiedBy: 'Zaur'
    },
    {
        id: '2',
        ip: '198.162.254.250',
        checkType: 'check only allowed',
        isNextCheckRequest: true,
        source: 'body',
        createdAt: 'Fri Mar 20 2018 00:00:00 GMT+0400',
        createdBy: 'Zaur',
        modifiedAt: 'Fri Mar 10 2019 00:00:00 GMT+0400',
        modifiedBy: 'Cavidan'
    },
    {
        id: '3',
        ip: '198.162.254.250',
        checkType: 'check only blocked',
        isNextCheckRequest: false,
        source: 'query',
        createdAt: 'Fri Mar 20 2018 00:00:00 GMT+0400',
        createdBy: 'Perviz',
        modifiedAt: 'Fri Mar 10 2019 00:00:00 GMT+0400',
        modifiedBy: 'Cavidan'
    },
    {
        id: '4',
        ip: '198.162.154.150',
        checkType: 'check both',
        isNextCheckRequest: true,
        source: 'body',
        createdAt: 'Fri Mar 20 2018 00:00:00 GMT+0400',
        createdBy: 'Perviz',
        modifiedAt: 'Fri Mar 10 2019 00:00:00 GMT+0400',
        modifiedBy: 'Fuad'
    },
    {
        id: '5',
        ip: '198.162.104.175',
        checkType: 'check both',
        isNextCheckRequest: false,
        source: 'custom',
        createdAt: 'Fri Mar 20 2018 00:00:00 GMT+0400',
        createdBy: 'Perviz',
        modifiedAt: 'Fri Mar 10 2019 00:00:00 GMT+0400',
        modifiedBy: 'Fuad'
    },
    {
        id: '6',
        ip: '198.162.104.175',
        checkType: 'check both',
        isNextCheckRequest: false,
        source: 'custom',
        createdAt: 'Fri Mar 20 2018 00:00:00 GMT+0400',
        createdBy: 'Perviz',
        modifiedAt: 'Fri Mar 10 2019 00:00:00 GMT+0400',
        modifiedBy: 'Fuad'
    }
]