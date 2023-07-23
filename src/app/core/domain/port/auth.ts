import { User } from "src/app/shared/domain/models/user.model"
import { Observable } from 'rxjs';
export interface IAuthentication {
    register(user: Partial<User>): Observable<User>
    login(user: Partial<User>): Observable<User>
    logout(): void
    isAuthenticated(): Promise<boolean>
}