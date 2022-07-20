// source: api.proto
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
"use strict";

const grpc = require("grpc");
const api_pb = require("./api_pb.js");

function serialize_POSPck_LoginRequest(arg) {
  if (!arg instanceof api_pb.LoginRequest) {
    throw new Error("Expected argument of type POSPck.LoginRequest");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_LoginRequest(arg) {
  return api_pb.LoginRequest.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_LoginResponse(arg) {
  if (!arg instanceof api_pb.LoginResponse) {
    throw new Error("Expected argument of type POSPck.LoginResponse");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_LoginResponse(arg) {
  return api_pb.LoginResponse.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_ForgetRequest(arg) {
  if (!arg instanceof api_pb.ForgetRequest) {
    throw new Error("Expected argument of type POSPck.ForgetRequest");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_ForgetRequest(arg) {
  return api_pb.ForgetRequest.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_ForgetResponse(arg) {
  if (!arg instanceof api_pb.ForgetResponse) {
    throw new Error("Expected argument of type POSPck.ForgetResponse");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_ForgetResponse(arg) {
  return api_pb.ForgetResponse.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_EmptyMessage(arg) {
  if (!arg instanceof api_pb.EmptyMessage) {
    throw new Error("Expected argument of type POSPck.EmptyMessage");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_EmptyMessage(arg) {
  return api_pb.EmptyMessage.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_GetUserProfileResponse(arg) {
  if (!arg instanceof api_pb.GetUserProfileResponse) {
    throw new Error("Expected argument of type POSPck.GetUserProfileResponse");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_GetUserProfileResponse(arg) {
  return api_pb.GetUserProfileResponse.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_ShopRequest(arg) {
  if (!arg instanceof api_pb.ShopRequest) {
    throw new Error("Expected argument of type POSPck.ShopRequest");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_ShopRequest(arg) {
  return api_pb.ShopRequest.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_ShopResponse(arg) {
  if (!arg instanceof api_pb.ShopResponse) {
    throw new Error("Expected argument of type POSPck.ShopResponse");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_ShopResponse(arg) {
  return api_pb.ShopResponse.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_DashboardCountsRequest(arg) {
  if (!arg instanceof api_pb.DashboardCountsRequest) {
    throw new Error("Expected argument of type POSPck.DashboardCountsRequest");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_DashboardCountsRequest(arg) {
  return api_pb.DashboardCountsRequest.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_DashboardCountsResponse(arg) {
  if (!arg instanceof api_pb.DashboardCountsResponse) {
    throw new Error("Expected argument of type POSPck.DashboardCountsResponse");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_DashboardCountsResponse(arg) {
  return api_pb.DashboardCountsResponse.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_StatsRequest(arg) {
  if (!arg instanceof api_pb.StatsRequest) {
    throw new Error("Expected argument of type POSPck.StatsRequest");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_StatsRequest(arg) {
  return api_pb.StatsRequest.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_StatsWithDescResponse(arg) {
  if (!arg instanceof api_pb.StatsWithDescResponse) {
    throw new Error("Expected argument of type POSPck.StatsWithDescResponse");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_StatsWithDescResponse(arg) {
  return api_pb.StatsWithDescResponse.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_ShopInvoicesRequest(arg) {
  if (!arg instanceof api_pb.ShopInvoicesRequest) {
    throw new Error("Expected argument of type POSPck.ShopInvoicesRequest");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_ShopInvoicesRequest(arg) {
  return api_pb.ShopInvoicesRequest.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_ShopInvoicResponse(arg) {
  if (!arg instanceof api_pb.ShopInvoicResponse) {
    throw new Error("Expected argument of type POSPck.ShopInvoicResponse");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_ShopInvoicResponse(arg) {
  return api_pb.ShopInvoicResponse.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_TransactionsOfInvoiceRequest(arg) {
  if (!arg instanceof api_pb.TransactionsOfInvoiceRequest) {
    throw new Error("Expected argument of type POSPck.TransactionsOfInvoiceRequest");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_TransactionsOfInvoiceRequest(arg) {
  return api_pb.TransactionsOfInvoiceRequest.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_TransactionsOfInvoiceRespone(arg) {
  if (!arg instanceof api_pb.TransactionsOfInvoiceRespone) {
    throw new Error("Expected argument of type POSPck.TransactionsOfInvoiceRespone");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_TransactionsOfInvoiceRespone(arg) {
  return api_pb.TransactionsOfInvoiceRespone.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_MallStructureResponse(arg) {
  if (!arg instanceof api_pb.MallStructureResponse) {
    throw new Error("Expected argument of type POSPck.MallStructureResponse");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_MallStructureResponse(arg) {
  return api_pb.MallStructureResponse.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_AllShopsRequest(arg) {
  if (!arg instanceof api_pb.AllShopsRequest) {
    throw new Error("Expected argument of type POSPck.AllShopsRequest");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_AllShopsRequest(arg) {
  return api_pb.AllShopsRequest.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_AllShopsResponse(arg) {
  if (!arg instanceof api_pb.AllShopsResponse) {
    throw new Error("Expected argument of type POSPck.AllShopsResponse");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_AllShopsResponse(arg) {
  return api_pb.AllShopsResponse.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_Shop(arg) {
  if (!arg instanceof api_pb.Shop) {
    throw new Error("Expected argument of type POSPck.Shop");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_Shop(arg) {
  return api_pb.Shop.deserializeBinary(new Uint8Array(arg));
}

function serialize_POSPck_MessageResponse(arg) {
  if (!arg instanceof api_pb.MessageResponse) {
    throw new Error("Expected argument of type POSPck.MessageResponse");
  }

  return Buffer.from(arg.serializeBinary());
}

function deserialize_POSPck_MessageResponse(arg) {
  return api_pb.MessageResponse.deserializeBinary(new Uint8Array(arg));
}

const POSService = exports.POSService = {
  signIn: {
    path: "/POSPck.POS/SignIn",
    requestStream: false,
    responseStream: false,
    requestType: api_pb.LoginRequest,
    responseType: api_pb.LoginResponse,
    requestSerialize: serialize_POSPck_LoginRequest,
    requestDeserialize: deserialize_POSPck_LoginRequest,
    responseSerialize: serialize_POSPck_LoginResponse,
    responseDeserialize: deserialize_POSPck_LoginResponse
  },
  forgetPass: {
    path: "/POSPck.POS/ForgetPass",
    requestStream: false,
    responseStream: false,
    requestType: api_pb.ForgetRequest,
    responseType: api_pb.ForgetResponse,
    requestSerialize: serialize_POSPck_ForgetRequest,
    requestDeserialize: deserialize_POSPck_ForgetRequest,
    responseSerialize: serialize_POSPck_ForgetResponse,
    responseDeserialize: deserialize_POSPck_ForgetResponse
  },
  getUserProfile: {
    path: "/POSPck.POS/GetUserProfile",
    requestStream: false,
    responseStream: false,
    requestType: api_pb.EmptyMessage,
    responseType: api_pb.GetUserProfileResponse,
    requestSerialize: serialize_POSPck_EmptyMessage,
    requestDeserialize: deserialize_POSPck_EmptyMessage,
    responseSerialize: serialize_POSPck_GetUserProfileResponse,
    responseDeserialize: deserialize_POSPck_GetUserProfileResponse
  },
  getShopById: {
    path: "/POSPck.POS/GetShopById",
    requestStream: false,
    responseStream: false,
    requestType: api_pb.ShopRequest,
    responseType: api_pb.ShopResponse,
    requestSerialize: serialize_POSPck_ShopRequest,
    requestDeserialize: deserialize_POSPck_ShopRequest,
    responseSerialize: serialize_POSPck_ShopResponse,
    responseDeserialize: deserialize_POSPck_ShopResponse
  },
  getDashboardCounts: {
    path: "/POSPck.POS/GetDashboardCounts",
    requestStream: false,
    responseStream: false,
    requestType: api_pb.DashboardCountsRequest,
    responseType: api_pb.DashboardCountsResponse,
    requestSerialize: serialize_POSPck_DashboardCountsRequest,
    requestDeserialize: deserialize_POSPck_DashboardCountsRequest,
    responseSerialize: serialize_POSPck_DashboardCountsResponse,
    responseDeserialize: deserialize_POSPck_DashboardCountsResponse
  },
  getShopSalesStatistics: {
    path: "/POSPck.POS/GetShopSalesStatistics",
    requestStream: false,
    responseStream: false,
    requestType: api_pb.StatsRequest,
    responseType: api_pb.StatsWithDescResponse,
    requestSerialize: serialize_POSPck_StatsRequest,
    requestDeserialize: deserialize_POSPck_StatsRequest,
    responseSerialize: serialize_POSPck_StatsWithDescResponse,
    responseDeserialize: deserialize_POSPck_StatsWithDescResponse
  },
  getMallRevenueDifference: {
    path: "/POSPck.POS/GetMallRevenueDifference",
    requestStream: false,
    responseStream: false,
    requestType: api_pb.StatsRequest,
    responseType: api_pb.StatsWithDescResponse,
    requestSerialize: serialize_POSPck_StatsRequest,
    requestDeserialize: deserialize_POSPck_StatsRequest,
    responseSerialize: serialize_POSPck_StatsWithDescResponse,
    responseDeserialize: deserialize_POSPck_StatsWithDescResponse
  },
  getShopInvoices: {
    path: "/POSPck.POS/GetShopInvoices",
    requestStream: false,
    responseStream: false,
    requestType: api_pb.ShopInvoicesRequest,
    responseType: api_pb.ShopInvoicResponse,
    requestSerialize: serialize_POSPck_ShopInvoicesRequest,
    requestDeserialize: deserialize_POSPck_ShopInvoicesRequest,
    responseSerialize: serialize_POSPck_ShopInvoicResponse,
    responseDeserialize: deserialize_POSPck_ShopInvoicResponse
  },
  getTransactionsOfInvoice: {
    path: "/POSPck.POS/GetTransactionsOfInvoice",
    requestStream: false,
    responseStream: false,
    requestType: api_pb.TransactionsOfInvoiceRequest,
    responseType: api_pb.TransactionsOfInvoiceRespone,
    requestSerialize: serialize_POSPck_TransactionsOfInvoiceRequest,
    requestDeserialize: deserialize_POSPck_TransactionsOfInvoiceRequest,
    responseSerialize: serialize_POSPck_TransactionsOfInvoiceRespone,
    responseDeserialize: deserialize_POSPck_TransactionsOfInvoiceRespone
  },
  getMallStructure: {
    path: "/POSPck.POS/GetMallStructure",
    requestStream: false,
    responseStream: false,
    requestType: api_pb.EmptyMessage,
    responseType: api_pb.MallStructureResponse,
    requestSerialize: serialize_POSPck_EmptyMessage,
    requestDeserialize: deserialize_POSPck_EmptyMessage,
    responseSerialize: serialize_POSPck_MallStructureResponse,
    responseDeserialize: deserialize_POSPck_MallStructureResponse
  },
  getAllShops: {
    path: "/POSPck.POS/GetAllShops",
    requestStream: false,
    responseStream: false,
    requestType: api_pb.AllShopsRequest,
    responseType: api_pb.AllShopsResponse,
    requestSerialize: serialize_POSPck_AllShopsRequest,
    requestDeserialize: deserialize_POSPck_AllShopsRequest,
    responseSerialize: serialize_POSPck_AllShopsResponse,
    responseDeserialize: deserialize_POSPck_AllShopsResponse
  },
  addShop: {
    path: "/POSPck.POS/AddShop",
    requestStream: false,
    responseStream: false,
    requestType: api_pb.Shop,
    responseType: api_pb.MessageResponse,
    requestSerialize: serialize_POSPck_Shop,
    requestDeserialize: deserialize_POSPck_Shop,
    responseSerialize: serialize_POSPck_MessageResponse,
    responseDeserialize: deserialize_POSPck_MessageResponse
  },
};

exports.POSClient = grpc.makeGenericClientConstructor(POSService);