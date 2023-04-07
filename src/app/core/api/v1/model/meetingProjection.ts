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


export interface MeetingProjection { 
    id?: string;
    description?: string;
    searchLine?: string;
    sessionCount?: number;
    sessionFrom?: string;
    sessionTill?: string;
    todosTotal?: number;
    todosDone?: number;
    creator?: string;
    created?: string;
    updated?: string;
    version?: number;
}
