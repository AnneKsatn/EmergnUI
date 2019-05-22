import { Pipe, PipeTransform } from "@angular/core";
import { filter } from 'rxjs/operators';

@Pipe({
    name: 'wfmFilter'
})

export class FilterPipe implements PipeTransform{
    transform(users: any, email: string, name: string, login: string): any {
        if (users.length == 0 || (!email&&!name&&!login)) {
            return users
        }

        return users.filter((user)=> {
            return ((user['email'].toLowerCase().indexOf(email.toLowerCase()) !== -1) 
            && (user['name'].toLowerCase().indexOf(name.toLowerCase()) !== -1)
            && (user['login'].toLowerCase().indexOf(login.toLowerCase()) !== -1));
        })
    }
}