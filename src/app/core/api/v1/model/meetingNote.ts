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
import { MeetingNoteDescription } from './meetingNoteDescription';
import { Participant } from './participant';
import { MeetingSessionId } from './meetingSessionId';


export interface MeetingNote { 
    creator?: string;
    created?: string;
    updated?: string;
    version?: number;
    id?: string;
    meeting?: MeetingSessionId;
    note?: MeetingNoteDescription;
    participant?: Participant;
}

