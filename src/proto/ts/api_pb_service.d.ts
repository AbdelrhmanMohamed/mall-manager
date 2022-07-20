// package: POSPck
// file: api.proto

import * as api_pb from "./api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type POSSignIn = {
  readonly methodName: string;
  readonly service: typeof POS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.LoginRequest;
  readonly responseType: typeof api_pb.LoginResponse;
};

type POSForgetPass = {
  readonly methodName: string;
  readonly service: typeof POS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.ForgetRequest;
  readonly responseType: typeof api_pb.ForgetResponse;
};

type POSGetUserProfile = {
  readonly methodName: string;
  readonly service: typeof POS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.EmptyMessage;
  readonly responseType: typeof api_pb.GetUserProfileResponse;
};

type POSGetShopById = {
  readonly methodName: string;
  readonly service: typeof POS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.ShopRequest;
  readonly responseType: typeof api_pb.ShopResponse;
};

type POSGetDashboardCounts = {
  readonly methodName: string;
  readonly service: typeof POS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.DashboardCountsRequest;
  readonly responseType: typeof api_pb.DashboardCountsResponse;
};

type POSGetShopSalesStatistics = {
  readonly methodName: string;
  readonly service: typeof POS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.StatsRequest;
  readonly responseType: typeof api_pb.StatsWithDescResponse;
};

type POSGetMallRevenueDifference = {
  readonly methodName: string;
  readonly service: typeof POS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.StatsRequest;
  readonly responseType: typeof api_pb.StatsWithDescResponse;
};

type POSGetShopInvoices = {
  readonly methodName: string;
  readonly service: typeof POS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.ShopInvoicesRequest;
  readonly responseType: typeof api_pb.ShopInvoicResponse;
};

type POSGetTransactionsOfInvoice = {
  readonly methodName: string;
  readonly service: typeof POS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.TransactionsOfInvoiceRequest;
  readonly responseType: typeof api_pb.TransactionsOfInvoiceRespone;
};

type POSGetMallStructure = {
  readonly methodName: string;
  readonly service: typeof POS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.EmptyMessage;
  readonly responseType: typeof api_pb.MallStructureResponse;
};

type POSGetAllShops = {
  readonly methodName: string;
  readonly service: typeof POS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.AllShopsRequest;
  readonly responseType: typeof api_pb.AllShopsResponse;
};

type POSAddShop = {
  readonly methodName: string;
  readonly service: typeof POS;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof api_pb.Shop;
  readonly responseType: typeof api_pb.MessageResponse;
};

export class POS {
  static readonly serviceName: string;
  static readonly SignIn: POSSignIn;
  static readonly ForgetPass: POSForgetPass;
  static readonly GetUserProfile: POSGetUserProfile;
  static readonly GetShopById: POSGetShopById;
  static readonly GetDashboardCounts: POSGetDashboardCounts;
  static readonly GetShopSalesStatistics: POSGetShopSalesStatistics;
  static readonly GetMallRevenueDifference: POSGetMallRevenueDifference;
  static readonly GetShopInvoices: POSGetShopInvoices;
  static readonly GetTransactionsOfInvoice: POSGetTransactionsOfInvoice;
  static readonly GetMallStructure: POSGetMallStructure;
  static readonly GetAllShops: POSGetAllShops;
  static readonly AddShop: POSAddShop;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class POSClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  signIn(
    requestMessage: api_pb.LoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.LoginResponse|null) => void
  ): UnaryResponse;
  signIn(
    requestMessage: api_pb.LoginRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.LoginResponse|null) => void
  ): UnaryResponse;
  forgetPass(
    requestMessage: api_pb.ForgetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.ForgetResponse|null) => void
  ): UnaryResponse;
  forgetPass(
    requestMessage: api_pb.ForgetRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.ForgetResponse|null) => void
  ): UnaryResponse;
  getUserProfile(
    requestMessage: api_pb.EmptyMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.GetUserProfileResponse|null) => void
  ): UnaryResponse;
  getUserProfile(
    requestMessage: api_pb.EmptyMessage,
    callback: (error: ServiceError|null, responseMessage: api_pb.GetUserProfileResponse|null) => void
  ): UnaryResponse;
  getShopById(
    requestMessage: api_pb.ShopRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.ShopResponse|null) => void
  ): UnaryResponse;
  getShopById(
    requestMessage: api_pb.ShopRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.ShopResponse|null) => void
  ): UnaryResponse;
  getDashboardCounts(
    requestMessage: api_pb.DashboardCountsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.DashboardCountsResponse|null) => void
  ): UnaryResponse;
  getDashboardCounts(
    requestMessage: api_pb.DashboardCountsRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.DashboardCountsResponse|null) => void
  ): UnaryResponse;
  getShopSalesStatistics(
    requestMessage: api_pb.StatsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.StatsWithDescResponse|null) => void
  ): UnaryResponse;
  getShopSalesStatistics(
    requestMessage: api_pb.StatsRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.StatsWithDescResponse|null) => void
  ): UnaryResponse;
  getMallRevenueDifference(
    requestMessage: api_pb.StatsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.StatsWithDescResponse|null) => void
  ): UnaryResponse;
  getMallRevenueDifference(
    requestMessage: api_pb.StatsRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.StatsWithDescResponse|null) => void
  ): UnaryResponse;
  getShopInvoices(
    requestMessage: api_pb.ShopInvoicesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.ShopInvoicResponse|null) => void
  ): UnaryResponse;
  getShopInvoices(
    requestMessage: api_pb.ShopInvoicesRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.ShopInvoicResponse|null) => void
  ): UnaryResponse;
  getTransactionsOfInvoice(
    requestMessage: api_pb.TransactionsOfInvoiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.TransactionsOfInvoiceRespone|null) => void
  ): UnaryResponse;
  getTransactionsOfInvoice(
    requestMessage: api_pb.TransactionsOfInvoiceRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.TransactionsOfInvoiceRespone|null) => void
  ): UnaryResponse;
  getMallStructure(
    requestMessage: api_pb.EmptyMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.MallStructureResponse|null) => void
  ): UnaryResponse;
  getMallStructure(
    requestMessage: api_pb.EmptyMessage,
    callback: (error: ServiceError|null, responseMessage: api_pb.MallStructureResponse|null) => void
  ): UnaryResponse;
  getAllShops(
    requestMessage: api_pb.AllShopsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.AllShopsResponse|null) => void
  ): UnaryResponse;
  getAllShops(
    requestMessage: api_pb.AllShopsRequest,
    callback: (error: ServiceError|null, responseMessage: api_pb.AllShopsResponse|null) => void
  ): UnaryResponse;
  addShop(
    requestMessage: api_pb.Shop,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: api_pb.MessageResponse|null) => void
  ): UnaryResponse;
  addShop(
    requestMessage: api_pb.Shop,
    callback: (error: ServiceError|null, responseMessage: api_pb.MessageResponse|null) => void
  ): UnaryResponse;
}

