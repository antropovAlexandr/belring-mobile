import {USER_ROLE} from "./constant";

export const getUserRoleNameByType = (type) => {
    switch (type) {
        case USER_ROLE.OBSERVER:
            return 'topLevelMenu.userRoles.observer';
        case USER_ROLE.ADMIN:
            return 'topLevelMenu.userRoles.admin';
        case USER_ROLE.MODERATOR:
            return 'topLevelMenu.userRoles.moderator';
        case USER_ROLE.RINGER:
            return 'topLevelMenu.userRoles.ringer';
        case USER_ROLE.SCIENTIST:
            return 'topLevelMenu.userRoles.scientist';
        default:
            return '';
    }
};
