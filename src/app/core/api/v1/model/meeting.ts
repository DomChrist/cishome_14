/**
 * Quarkus CIS Home service
 * Quarkus ChristInformationSystem
 *
 * The version of the OpenAPI document: 1.0
 * Contact: dominik@christ-rlp.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MeetingTopic } from './meetingTopic';
import { MeetingCreator } from './meetingCreator';
import { Participant } from './participant';
import { MeetingStatus } from './meetingStatus';
import { SessionWindow } from './sessionWindow';
import { MeetingDateRange } from './meetingDateRange';


export interface Meeting { 
    id?: string;
    status?: MeetingStatus;
    meetingTopic?: MeetingTopic;
    creator?: MeetingCreator;
    session?: SessionWindow;
    created?: string;
    participants?: Array<Participant>;
    dateRange?: MeetingDateRange;
}

