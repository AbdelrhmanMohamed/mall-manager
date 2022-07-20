// package: POSPck
// file: api.proto

var api_pb = require("./api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var POS = (function () {
  function POS() {}
  POS.serviceName = "POSPck.POS";
  return POS;
}());

POS.SignIn = {
  methodName: "SignIn",
  service: POS,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.LoginRequest,
  responseType: api_pb.LoginResponse
};

POS.ForgetPass = {
  methodName: "ForgetPass",
  service: POS,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.ForgetRequest,
  responseType: api_pb.ForgetResponse
};

POS.GetUserProfile = {
  methodName: "GetUserProfile",
  service: POS,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.EmptyMessage,
  responseType: api_pb.GetUserProfileResponse
};

POS.GetShopById = {
  methodName: "GetShopById",
  service: POS,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.ShopRequest,
  responseType: api_pb.ShopResponse
};

POS.GetDashboardCounts = {
  methodName: "GetDashboardCounts",
  service: POS,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.DashboardCountsRequest,
  responseType: api_pb.DashboardCountsResponse
};

POS.GetShopSalesStatistics = {
  methodName: "GetShopSalesStatistics",
  service: POS,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.StatsRequest,
  responseType: api_pb.StatsWithDescResponse
};

POS.GetMallRevenueDifference = {
  methodName: "GetMallRevenueDifference",
  service: POS,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.StatsRequest,
  responseType: api_pb.StatsWithDescResponse
};

POS.GetShopInvoices = {
  methodName: "GetShopInvoices",
  service: POS,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.ShopInvoicesRequest,
  responseType: api_pb.ShopInvoicResponse
};

POS.GetTransactionsOfInvoice = {
  methodName: "GetTransactionsOfInvoice",
  service: POS,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.TransactionsOfInvoiceRequest,
  responseType: api_pb.TransactionsOfInvoiceRespone
};

POS.GetMallStructure = {
  methodName: "GetMallStructure",
  service: POS,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.EmptyMessage,
  responseType: api_pb.MallStructureResponse
};

POS.GetAllShops = {
  methodName: "GetAllShops",
  service: POS,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.AllShopsRequest,
  responseType: api_pb.AllShopsResponse
};

POS.AddShop = {
  methodName: "AddShop",
  service: POS,
  requestStream: false,
  responseStream: false,
  requestType: api_pb.Shop,
  responseType: api_pb.MessageResponse
};

exports.POS = POS;

function POSClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

POSClient.prototype.signIn = function signIn(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(POS.SignIn, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

POSClient.prototype.forgetPass = function forgetPass(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(POS.ForgetPass, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

POSClient.prototype.getUserProfile = function getUserProfile(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(POS.GetUserProfile, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

POSClient.prototype.getShopById = function getShopById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(POS.GetShopById, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

POSClient.prototype.getDashboardCounts = function getDashboardCounts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(POS.GetDashboardCounts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

POSClient.prototype.getShopSalesStatistics = function getShopSalesStatistics(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(POS.GetShopSalesStatistics, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

POSClient.prototype.getMallRevenueDifference = function getMallRevenueDifference(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(POS.GetMallRevenueDifference, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

POSClient.prototype.getShopInvoices = function getShopInvoices(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(POS.GetShopInvoices, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

POSClient.prototype.getTransactionsOfInvoice = function getTransactionsOfInvoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(POS.GetTransactionsOfInvoice, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

POSClient.prototype.getMallStructure = function getMallStructure(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(POS.GetMallStructure, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

POSClient.prototype.getAllShops = function getAllShops(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(POS.GetAllShops, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

POSClient.prototype.addShop = function addShop(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(POS.AddShop, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.POSClient = POSClient;

