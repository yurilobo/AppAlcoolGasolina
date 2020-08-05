import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public resultado: String = "resultado"

  calcular(){
  	//validando preços
  	if( this.precoAlcool && this.precoGasolina){
  		var pAlcool = parseFloat(this.precoAlcool)
  		var pGasolina = parseFloat(this.precoGasolina)

  		var res = pAlcool/pGasolina
  		if(res>=0.7){
  			this.resultado ="Melhor ultilizar Gasolina"
  		}else{
  			this.resultado = "Melhor utilizar Álcool"
  		}
  	}else{
  		this.resultado = "não preenchido"
  	}
  }

}
