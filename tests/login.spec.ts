//import 'test' from Base folder
import {test, expect} from "./Base/test-fixtures"
import { LoginAction } from "./actions/login.action"

test('Login test using POM with Base Class', async ({page}) =>
{

    //Initialize Action class with the active page
    const loginAction = new LoginAction (page);

    //Execute the login logic
    await loginAction.login('student','Password123');
    
    //Assert login was successful
    await page.getByRole('heading',{name: 'Logged In Successfully'});

});
