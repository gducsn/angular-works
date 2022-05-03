import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  result: Array<any> = []

  countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy"];
  
  title = 'reactive-form';

  contactForm: any = new FormGroup({

    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
  
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
  
    email: new FormControl('', [Validators.required, Validators.email]),
  
    gender: new FormControl(),
  
    country: new FormControl()
  
  })

  onSubmit() {

    this.result.splice(0,1) // aggiungo questo metodo così ogni volta mostra solo un risultato.
    this.result.push(this.contactForm.value)
  }

  
}/* 

per aggiungere una validazione devi prima utilizzare la proprietà valid sul button: [disabled]="!contactForm.valid", questo significa che se il valore è false non risulterà possibile inviare.
Come rendere true questo valore? Aggiungere al controller.ts i Validators come scritto sopra.

*/