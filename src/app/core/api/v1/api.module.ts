import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AwsS3ResourceService } from './api/awsS3Resource.service';
import { ExampleResourceService } from './api/exampleResource.service';
import { GeneralDriveWebAdapterService } from './api/generalDriveWebAdapter.service';
import { KeyGenWebAdapterService } from './api/keyGenWebAdapter.service';
import { ListCommandControllerService } from './api/listCommandController.service';
import { ListCommandControllerV2Service } from './api/listCommandControllerV2.service';
import { ListsService } from './api/lists.service';
import { ListsShoppingSettlementService } from './api/listsShoppingSettlement.service';
import { ListsTodoService } from './api/listsTodo.service';
import { MeetingService } from './api/meeting.service';
import { ParticipantService } from './api/participant.service';
import { ProfileService } from './api/profile.service';
import { RabbitMqPublisherService } from './api/rabbitMqPublisher.service';
import { SafeService } from './api/safe.service';
import { SchoolService } from './api/school.service';
import { SessionActivationControllerService } from './api/sessionActivationController.service';
import { SessionTimeTrackCommandControllerService } from './api/sessionTimeTrackCommandController.service';
import { SessionTimeTrackQueryControllerService } from './api/sessionTimeTrackQueryController.service';
import { ShoppingService } from './api/shopping.service';
import { ShoppingListQueryResourceService } from './api/shoppingListQueryResource.service';
import { ShoppingStoreCommandResourceService } from './api/shoppingStoreCommandResource.service';
import { TasksControllerService } from './api/tasksController.service';
import { TeamControllerService } from './api/teamController.service';
import { WdysMeetingService } from './api/wdysMeeting.service';
import { WdysMeetingNotesService } from './api/wdysMeetingNotes.service';
import { WdysTodoService } from './api/wdysTodo.service';
import { WeekplanControllerService } from './api/weekplanController.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
