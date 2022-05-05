import {AgentsRoles} from '../generated/graphql';

export function redirect(url: string): void {
    if (typeof window !== 'undefined') {
        window.location.href = url;
    }
}

export function generateSSORedirectUrl(): string {
    return `https://sso.identix.space/auth?redirect_uri=${process.env.NEXT_PUBLIC_APP_URL}`;
}

export function extractTokenFromUrl(url: string): string {
    const queryParams = new URLSearchParams(new URL(url).search);
    const userAccessToekn = queryParams.get('token');
    if (!userAccessToekn) {
        return '';
    }
    return decodeURIComponent(userAccessToekn);
}

export function setAuthorizationToken(token: string) {
    localStorage.setItem('authorization-token', token);
}

export function generateAfterWeb2OutServisesUserLogin(uri: string): string {
    return `${process.env.NEXT_PUBLIC_APP_URL}${uri}`;
}

export function Logout() {
    localStorage.clear();
    console.log('asdasdsadasd');
    redirect('/');
}

export function startAndEnd(str: string, gap: number) {
    const lngth = 35;
    const gapMin = 0;
    if (str && str.length > lngth) {
        return `${str.substr(gapMin, gap)}...${str.substr(str.length - gap, str.length)}`;
    }
    return str;
}

export function formatDate(date: string) {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.toLocaleString('en-US', {month: 'short'});
    return `${day} ${month} ${d.getFullYear()}`;
}

export const checkOfPermission = async (did: string, userDid: string, role: AgentsRoles) => {
    if (role === AgentsRoles.Holder) {
        return did === userDid;
    }
    if (role === AgentsRoles.Issuer) {
        return did === userDid;
    }
    if (role === AgentsRoles.Verifier) {
        return did === userDid;
    }
    return false;
};
