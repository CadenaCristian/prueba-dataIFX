import { environment } from "src/environments/environment";

export const endpoint = {
    Characters: `${environment.serverUrl}/house`,
    Students: `${environment.serverUrl}/students`,
    Staff: `${environment.serverUrl}/staff`,
}