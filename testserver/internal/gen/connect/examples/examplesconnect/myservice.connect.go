// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: examples/myservice.proto

package examplesconnect

import (
	context "context"
	errors "errors"
	connect_go "github.com/bufbuild/connect-go"
	examples "github.com/bufbuild/connect-web/testserver/internal/gen/go/examples"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect_go.IsAtLeastVersion0_0_1

const (
	// MyServiceName is the fully-qualified name of the MyService service.
	MyServiceName = "examples.MyService"
)

// MyServiceClient is a client for the examples.MyService service.
type MyServiceClient interface {
	// GetFoo echoes the request. It is *not* intended for the browser,
	// and ideally, we don't generate any client-side code for it.
	GetFoo(context.Context, *connect_go.Request[examples.FooRequest]) (*connect_go.Response[examples.FooResponse], error)
	// GetBar echoes the request. It is intended for the browser.
	GetBar(context.Context, *connect_go.Request[examples.BarRequest]) (*connect_go.Response[examples.BarResponse], error)
}

// NewMyServiceClient constructs a client for the examples.MyService service. By default, it uses
// the Connect protocol with the binary Protobuf Codec, asks for gzipped responses, and sends
// uncompressed requests. To use the gRPC or gRPC-Web protocols, supply the connect.WithGRPC() or
// connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewMyServiceClient(httpClient connect_go.HTTPClient, baseURL string, opts ...connect_go.ClientOption) MyServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &myServiceClient{
		getFoo: connect_go.NewClient[examples.FooRequest, examples.FooResponse](
			httpClient,
			baseURL+"/examples.MyService/GetFoo",
			opts...,
		),
		getBar: connect_go.NewClient[examples.BarRequest, examples.BarResponse](
			httpClient,
			baseURL+"/examples.MyService/GetBar",
			opts...,
		),
	}
}

// myServiceClient implements MyServiceClient.
type myServiceClient struct {
	getFoo *connect_go.Client[examples.FooRequest, examples.FooResponse]
	getBar *connect_go.Client[examples.BarRequest, examples.BarResponse]
}

// GetFoo calls examples.MyService.GetFoo.
func (c *myServiceClient) GetFoo(ctx context.Context, req *connect_go.Request[examples.FooRequest]) (*connect_go.Response[examples.FooResponse], error) {
	return c.getFoo.CallUnary(ctx, req)
}

// GetBar calls examples.MyService.GetBar.
func (c *myServiceClient) GetBar(ctx context.Context, req *connect_go.Request[examples.BarRequest]) (*connect_go.Response[examples.BarResponse], error) {
	return c.getBar.CallUnary(ctx, req)
}

// MyServiceHandler is an implementation of the examples.MyService service.
type MyServiceHandler interface {
	// GetFoo echoes the request. It is *not* intended for the browser,
	// and ideally, we don't generate any client-side code for it.
	GetFoo(context.Context, *connect_go.Request[examples.FooRequest]) (*connect_go.Response[examples.FooResponse], error)
	// GetBar echoes the request. It is intended for the browser.
	GetBar(context.Context, *connect_go.Request[examples.BarRequest]) (*connect_go.Response[examples.BarResponse], error)
}

// NewMyServiceHandler builds an HTTP handler from the service implementation. It returns the path
// on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewMyServiceHandler(svc MyServiceHandler, opts ...connect_go.HandlerOption) (string, http.Handler) {
	mux := http.NewServeMux()
	mux.Handle("/examples.MyService/GetFoo", connect_go.NewUnaryHandler(
		"/examples.MyService/GetFoo",
		svc.GetFoo,
		opts...,
	))
	mux.Handle("/examples.MyService/GetBar", connect_go.NewUnaryHandler(
		"/examples.MyService/GetBar",
		svc.GetBar,
		opts...,
	))
	return "/examples.MyService/", mux
}

// UnimplementedMyServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedMyServiceHandler struct{}

func (UnimplementedMyServiceHandler) GetFoo(context.Context, *connect_go.Request[examples.FooRequest]) (*connect_go.Response[examples.FooResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("examples.MyService.GetFoo is not implemented"))
}

func (UnimplementedMyServiceHandler) GetBar(context.Context, *connect_go.Request[examples.BarRequest]) (*connect_go.Response[examples.BarResponse], error) {
	return nil, connect_go.NewError(connect_go.CodeUnimplemented, errors.New("examples.MyService.GetBar is not implemented"))
}
