/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "ts_nocheck=false"
// @generated from file buf/alpha/registry/v1alpha1/owner.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
//
// Copyright 2020-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3} from "@bufbuild/protobuf";
import {User} from "./user_pb.js";
import {Organization} from "./organization_pb.js";

/**
 * @generated from message buf.alpha.registry.v1alpha1.Owner
 */
export class Owner extends Message<Owner> {

    /**
     * @generated from oneof buf.alpha.registry.v1alpha1.Owner.owner
     */
    owner: {
        /**
         * The requested owner is a `User`.
         *
         * @generated from field: buf.alpha.registry.v1alpha1.User user = 1;
         */
        value: User;
        case: "user";
    } | {
        /**
         * The requested owner is a `Organization`.
         *
         * @generated from field: buf.alpha.registry.v1alpha1.Organization organization = 2;
         */
        value: Organization;
        case: "organization";
    } | { case: undefined; value?: undefined } = { case: undefined };

    constructor(data?: PartialMessage<Owner>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.Owner";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "user", kind: "message", T: User, oneof: "owner"},
        {no: 2, name: "organization", kind: "message", T: Organization, oneof: "owner"},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Owner {
        return new Owner().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Owner {
        return new Owner().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Owner {
        return new Owner().fromJsonString(jsonString, options);
    }

    static equals(a: Owner | PlainMessage<Owner> | undefined, b: Owner | PlainMessage<Owner> | undefined): boolean {
        return proto3.util.equals(Owner, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.GetOwnerByNameRequest
 */
export class GetOwnerByNameRequest extends Message<GetOwnerByNameRequest> {

    /**
     * Name of the requested owner.
     *
     * @generated from field: string name = 1;
     */
    name = "";

    constructor(data?: PartialMessage<GetOwnerByNameRequest>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.GetOwnerByNameRequest";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOwnerByNameRequest {
        return new GetOwnerByNameRequest().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOwnerByNameRequest {
        return new GetOwnerByNameRequest().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOwnerByNameRequest {
        return new GetOwnerByNameRequest().fromJsonString(jsonString, options);
    }

    static equals(a: GetOwnerByNameRequest | PlainMessage<GetOwnerByNameRequest> | undefined, b: GetOwnerByNameRequest | PlainMessage<GetOwnerByNameRequest> | undefined): boolean {
        return proto3.util.equals(GetOwnerByNameRequest, a, b);
    }

}


/**
 * @generated from message buf.alpha.registry.v1alpha1.GetOwnerByNameResponse
 */
export class GetOwnerByNameResponse extends Message<GetOwnerByNameResponse> {

    /**
     * @generated from field: buf.alpha.registry.v1alpha1.Owner owner = 1;
     */
    owner?: Owner;

    constructor(data?: PartialMessage<GetOwnerByNameResponse>) {
        super();
        proto3.util.initPartial(data, this);
    }

    static readonly runtime = proto3;
    static readonly typeName = "buf.alpha.registry.v1alpha1.GetOwnerByNameResponse";
    static readonly fields: FieldList = proto3.util.newFieldList(() => [
        {no: 1, name: "owner", kind: "message", T: Owner},
    ]);

    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOwnerByNameResponse {
        return new GetOwnerByNameResponse().fromBinary(bytes, options);
    }

    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOwnerByNameResponse {
        return new GetOwnerByNameResponse().fromJson(jsonValue, options);
    }

    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOwnerByNameResponse {
        return new GetOwnerByNameResponse().fromJsonString(jsonString, options);
    }

    static equals(a: GetOwnerByNameResponse | PlainMessage<GetOwnerByNameResponse> | undefined, b: GetOwnerByNameResponse | PlainMessage<GetOwnerByNameResponse> | undefined): boolean {
        return proto3.util.equals(GetOwnerByNameResponse, a, b);
    }

}

