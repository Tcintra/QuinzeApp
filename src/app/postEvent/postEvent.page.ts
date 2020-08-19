import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';

// Import angular reactive form classes
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

// TODO: Implement angular validation for forms

@Component({
  selector: 'app-postEvent',
  templateUrl: 'postEvent.page.html',
  styleUrls: ['postEvent.page.scss', '../app.component.scss']
})
export class PostEventPage {
  // Form instance vars
  private details : FormGroup;
  private time = '';
  private privacy = '';
  private file;
  private name : FormControl;
  private url : String | ArrayBuffer = '../../assets/add-image.jpg';

  // Global vars
  private myRouter : Router;
  private myTabsPage : TabsPage
  private tabBar = document.getElementById("myTabBar");
  private slides;
  private fileUpload;

  // Hide tabs when user enters
  ionViewWillEnter() {
    this.tabBar.style.display = "none";
  }

  updatePrivacy() {
    const eventPrivacy = (<HTMLInputElement>document.getElementById("eventPrivacy")).value;
    if (eventPrivacy == "public") {
      this.privacy = "todos";
    } else if (eventPrivacy == "friends") {
      this.privacy = "seus amigos";
    } else if (eventPrivacy == "onlyMe") {
      this.privacy = "somente você";
    } else {
      this.privacy = "convidados";
    }
  }

  updateTime() {
    const eventTime = new Date((<HTMLInputElement>document.getElementById("eventTime")).value);
    this.time = eventTime.toDateString() + ' ás ' + eventTime.toTimeString().substring(0, 5);
  }

  updateImage(event) {
    this.fileUpload.getInputElement().then((el) => {
      console.log(el.files);
      const files = el.files
      console.log(files);
      console.log(files[0]);
      if (files && files[0]) {
        console.log("qwer");
        var reader = new FileReader();

        reader.readAsDataURL(files[0]);

        reader.onload = (event) => { 
          this.url = reader.result;
        }
      }
    });
  }

  // Reset form if the user leaves
  ionViewWillLeave() {
    this.details.reset();
    this.slides.slideTo(0);
    this.url = '../../assets/add-image.jpg';
  }

  ngOnInit() {
    this.slides = document.querySelector("ion-slides")
    this.slides.lockSwipeToNext(true);
    this.fileUpload = document.getElementById("file-upload");
  }

  nextSlide() {
    this.slides = document.querySelector("ion-slides")
    this.slides.lockSwipeToNext(false);
    this.slides.slideNext();
    this.slides.lockSwipeToNext(true);
  }

  closeForm() {
    this.tabBar.style.display = "flex";
    this.myRouter.navigate(['/tabs/myFeed']);
    this.myTabsPage.selectHome();
  }

  uploadFile() {
    this.fileUpload.getInputElement().then((el) => el.click());
  }

  constructor( private formBuilder: FormBuilder, private router: Router, private tabsPage: TabsPage ) {
    this.details = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      time: ['', Validators.required],
      privacy: ['', Validators.required],
      file: ['', Validators.required]
    });
    this.myRouter = router;
    this.myTabsPage = tabsPage;
  }
  logForm(){
    console.log(this.details.value)
  }

  firstSlideValidation() {
    // Validate the first slide
    const eventName = (<HTMLInputElement>document.getElementById("eventName")).value;
    const eventLocation = (<HTMLInputElement>document.getElementById("eventLocation")).value;
    const eventTime = (<HTMLInputElement>document.getElementById("eventTime")).value;

    if (eventName != "" && eventLocation != "" && eventTime != "") {
      return true;
    }

    return false;
  }

  secondSlideValidation() {
    if (this.privacy != "") {
      return true;
    }
    return false;
  }

  thirdSlideValidation() {
    return true;
  }
}
