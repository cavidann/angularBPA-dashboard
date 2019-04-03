
// export interface PermissonChildren {
//     pageName: string;
//     access: boolean;
// }

// export interface Permissions {
//     pageName: string;
//     access: boolean;
//     children: PermissonChildren[];
// }

export interface Users {
    id: string;
    name: string;
    surname: string;
    blocked: boolean;
    permissions: string[];
}