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
import { ActivatedSessionId } from './activatedSessionId';
import { CollaborationSessionCode } from './collaborationSessionCode';
import { MeetingSessionId } from './meetingSessionId';


export interface SessionActivation { 
    id?: ActivatedSessionId;
    meetingSessionId?: MeetingSessionId;
    collaborationSessionCode?: CollaborationSessionCode;
    user?: string;
}

