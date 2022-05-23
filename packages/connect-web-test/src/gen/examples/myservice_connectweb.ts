// Copyright 2021-2022 Buf Technologies, Inc.
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

// @generated by protoc-gen-connect-web v0.0.6 with parameter "target=ts"
// @generated from file examples/myservice.proto (package examples, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {BarRequest, BarResponse, FooRequest, FooResponse} from "./myservice_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * A service that provides several methods, some of which
 * are intended for the browser, but some are not.
 *
 * @generated from service examples.MyService
 */
export const MyService = {
  typeName: "examples.MyService",
  methods: {
    /**
     * GetFoo echoes the request. It is *not* intended for the browser,
     * and ideally, we don't generate any client-side code for it.
     *
     * @generated from rpc examples.MyService.GetFoo
     */
    getFoo: {
      name: "GetFoo",
      I: FooRequest,
      O: FooResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetBar echoes the request. It is intended for the browser.
     *
     * @generated from rpc examples.MyService.GetBar
     */
    getBar: {
      name: "GetBar",
      I: BarRequest,
      O: BarResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

