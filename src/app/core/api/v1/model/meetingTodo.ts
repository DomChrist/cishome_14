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
import { TodoDueDate } from './todoDueDate';
import { Creator } from './creator';
import { MeetingSessionId } from './meetingSessionId';
import { TodoDone } from './todoDone';


export interface MeetingTodo { 
    creator?: Creator;
    created?: string;
    updated?: string;
    version?: number;
    id?: string;
    meetingSessionId?: MeetingSessionId;
    label?: string;
    done?: TodoDone;
    due?: TodoDueDate;
    checked?: boolean;
    overdue?: boolean;
}

