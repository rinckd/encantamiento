import { ViewEncapsulation, Component, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MDL } from './materialdesign.service';


@Component({
    selector: 'qs-login',
    template: `
        <form asp-controller="Auth" asp-action="Login" method="post">
            <!--Create an input for UserName using Tag Helper-->
            <input type="text" name="UserName" />
            Password: <input type="text" name="Password" /><br />
            <button type="submit">Login</button>
        </form>
    `,
    styles: [
        require('./app.component.scss'),
        require('../style/sass/styles.scss')
    ],
    encapsulation: ViewEncapsulation.None,
    directives: [
        MDL,
        NavbarComponent
    ]
})


export class LoginComponent {
}