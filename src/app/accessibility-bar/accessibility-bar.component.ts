import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import * as $ from 'jquery';


@Component({
  selector: 'app-accessibility-bar',
  templateUrl: './accessibility-bar.component.html',
  styleUrls: ['./accessibility-bar.component.css']
})
export class AccessibilityBarComponent implements OnInit {
  private elementos = new Array(
    { tag: 'body' },
    { tag: 'h1' },
    { tag: 'h3'},
    { tag: 'button' },
    { tag: 'input' }
  );
  
  private maxFontSize = 4.0;
  private minFontSize = -4.0;

  constructor() { }

  ngOnInit() {
  }

  resetFont() {
    let fontSize = 0;

    if (sessionStorage.getItem('fontSize')) {
      fontSize = parseFloat(sessionStorage.getItem('fontSize'));
    }

    while (fontSize < 0.0) {
      this.elementos.forEach(element => {
        this.changeFontSize(element.tag, "ASC");
      });

      fontSize++;
    }

    while (fontSize > 0.0) {
      this.elementos.forEach(element => {
        this.changeFontSize(element.tag, "DESC");
      });

      fontSize--;
    }

    sessionStorage.setItem('fontSize', fontSize.toString());
  }

  increaseFont() {
    let fontSize = 0;

    if (sessionStorage.getItem('fontSize')) {
      fontSize = parseFloat(sessionStorage.getItem('fontSize'));
    }

    if (fontSize < this.maxFontSize) {
     this.elementos.forEach(element => {
        this.changeFontSize(element.tag, "ASC");
      });

      ++fontSize;
    }

    sessionStorage.setItem('fontSize', fontSize.toString());
  }

  decreaseFont() {
    let fontSize = 0;

    if (sessionStorage.getItem('fontSize')) {
      fontSize = parseFloat(sessionStorage.getItem('fontSize'));
    }

    if (fontSize > this.minFontSize) {
      this.elementos.forEach(element => {
        this.changeFontSize(element.tag, "DES")
      });

      --fontSize;
    }

    sessionStorage.setItem('fontSize', fontSize.toString());
  }

  changeFontSize(tag, order) {
    let elements = document.getElementsByTagName(tag);

    for (let i = 0; i< elements.length; i++) {
      let element = document.getElementsByTagName(tag)[i];

      let fontString = window.getComputedStyle(element, null).getPropertyValue('font-size');
      let fontNumber = parseFloat(fontString);

      if (order == "ASC") {
        fontNumber++;
      } else {
        fontNumber--;
      }
      
      element.style.fontSize = fontNumber.toString() + 'px';
    }
  }

  changeHighConstrast() {
    let status = sessionStorage.getItem('altoContraste');
    let element: HTMLElement = document.getElementById("main") as HTMLElement;
    if (status == "true") {
      sessionStorage.setItem('altoContraste', "false");
      status = "false"
      
      element.classList.remove("high-contrast-login");
      element.classList.remove("high-contrast");

      $('#iframe').contents().find('body').removeClass('auto-contraste');

    } else{
      sessionStorage.setItem('altoContraste', "true");
      status = "true"
      
      element.classList.remove("high-contrast-login");
      element.classList.add("high-contrast");

      $('#iframe').contents().find('body').addClass('auto-contraste');

    }
  }
  
}
