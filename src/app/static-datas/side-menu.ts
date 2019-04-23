export const sideMenuJSON = [
    {
        'name': 'users',
        'url': 'users',
    },
    {
        'name': 'status managment',
        'children': [
            {
                'name': 'status', 
                'url': 'status'
            },{
                'name': 'scheduling', 
                'url': 'scheduling'
            },
            {
                'name': 'check-obj', 
                'url': 'check-obj'
            },
            {
                'name': 'rules', 
                'url': 'rules'
            },
            {
                'name': 'CMS', 
                'url': 'cms'
            },
            {
                'name': 'logs', 
                'url': 'logs'
            }
        ]
    },
    {
        'name': 'control managment',
        'children': [
            {
                'name': 'card balance', 
                'url': 'cardBalance'
            },
            {
                'name': 'sim cards', 
                'url': 'simCards'
            },
            {
                'name': 'configs', 
                'url': 'configs'
            }
        ]
    },
    {
        'name': 'notifications',
        'children': [
            {
                'name': 'SMTP settings', 
                'url': 'smtp-settings'
            },
            {
                'name': 'firebase settings', 
                'url': 'firebase-settings'
            },
            {
                'name': 'subscribers', 
                'url': 'subscribers'
            },
        ]
    },
    {
        'name': 'settings',
        'url': 'settings',
    },
]