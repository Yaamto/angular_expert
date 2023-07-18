import { User } from "src/app/shared/domain/user.model"
import { Observable } from 'rxjs';
export interface IAuthentication {
    register(user: Partial<User>): Observable<User>
    login(user: Partial<User>): Observable<User>
    logout(): void
}