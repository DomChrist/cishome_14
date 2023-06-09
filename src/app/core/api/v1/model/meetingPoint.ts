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
import { MeetingAgendaPointId } from './meetingAgendaPointId';
import { MeetingAgendaStatus } from './meetingAgendaStatus';
import { MeetingAgendaName } from './meetingAgendaName';


export interface MeetingPoint { 
    id?: MeetingAgendaPointId;
    name?: MeetingAgendaName;
    status?: MeetingAgendaStatus;
}

