import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SubscribeService } from '../../../services/subscribe.service';
import { AuthorizationService } from '../../../services/authorization.service';
import { MessageService } from './../../../services/message.service';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css'],
  providers:[ SubscribeService, AuthorizationService, MessageService ]
})

export class SubscriptionListComponent implements OnInit {
  User:any={};
  public userInfo : any;
  public user : any;
  public subscribeServiceList=[];

  
  constructor(private subscribeService:SubscribeService,
    private authorizationService:AuthorizationService,
    private messageService: MessageService,
    private _vcr: ViewContainerRef
    ) { }

  getUserId() {
    this.authorizationService.getUserId().subscribe((res) =>{
      this.userInfo = res.text().split(',');
      this.user = this.userInfo[2];
      this.getAllSubscriptions(this.user);
    }, (error) =>{
    })
  }

  ngOnInit() {
    this.getUserId();
    this.getAllSubscriptions(this.user);
  }
  getAllSubscriptions(user){
    console.log(user);
    this.subscribeService.getAllDetails(user).subscribe((res) =>{
      console.log(res);
      this.subscribeServiceList=res;
    },
    (error) =>{
      alert(error + "does not work");
    })
  }


  deleteSubscriptions(userId,vendorId){
    /*this.subscribeService.deleteSubscriptionsById(userId,vendorId).subscribe((res) =>{
    	console.log("calling get after delete");
    	this.getAllSubscriptions(userId);
    }, (error) =>{
      alert(error + "deleting restaurant does not works");
    })*/
    this.messageService.deleteConfirmation(()=>
     this.subscribeService.deleteSubscriptionsById(userId,vendorId).subscribe((res) =>{
      this.messageService.showSuccessToast(this._vcr,"Deleted");
      this.getAllSubscriptions(userId);
    }, (error) =>{
      alert(error + "deleting restaurant does not works");
    }));
  }
}
