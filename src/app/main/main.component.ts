import { Component } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  closeResult = '';
  firstTab: boolean = false;
  secondTab: boolean = false;
  thirdTab: boolean = false;
  fourthTab: boolean = false;
  constructor(private modalService: NgbModal ) {
    this.changeTab("Train your bot")
  }

  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  changeTab(status: any) {
    debugger
    switch (status) {
      case "Train your bot":
        this.firstTab = true;
        this.secondTab = false;
        this.thirdTab = false;
        this.fourthTab = false;
        break;
      case "Intents":
        this.firstTab = false;
        this.secondTab = true;
        this.thirdTab = false;
        this.fourthTab = false;
        break;
      case "Catch all":
        this.firstTab = false;
        this.secondTab = false;
        this.thirdTab = true;
        this.fourthTab = false;
        break;

      case "Analytics":
        this.firstTab = false;
        this.secondTab = false;
        this.thirdTab = false;
        this.fourthTab = true;
        break;
    
      default:
        break;
    }
  }
}
