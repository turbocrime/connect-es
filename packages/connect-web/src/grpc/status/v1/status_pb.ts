/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "ts_nocheck=false"
// @generated from file grpc/status/v1/status.proto (package grpc.status.v1, syntax proto3)

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message grpc.status.v1.Status
 */
export class Status extends Message<Status> {
  /**
   * @generated from field: int32 code = 1;
   */
  code = 0;

  /**
   * @generated from field: string message = 2;
   */
  message = "";

  /**
   * @generated from field: repeated google.protobuf.Any details = 3;
   */
  details: Any[] = [];

  constructor(data?: PartialMessage<Status>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "grpc.status.v1.Status";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "details", kind: "message", T: Any, repeated: true },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): Status {
    return new Status().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): Status {
    return new Status().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): Status {
    return new Status().fromJsonString(jsonString, options);
  }

  static equals(
    a: Status | PlainMessage<Status> | undefined,
    b: Status | PlainMessage<Status> | undefined
  ): boolean {
    return proto3.util.equals(Status, a, b);
  }
}