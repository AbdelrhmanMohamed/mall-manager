// package: POSPck
// file: api.proto

import * as jspb from "google-protobuf";

export class EmptyMessage extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyMessage): EmptyMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmptyMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyMessage;
  static deserializeBinaryFromReader(message: EmptyMessage, reader: jspb.BinaryReader): EmptyMessage;
}

export namespace EmptyMessage {
  export type AsObject = {
  }
}

export class LoginRequest extends jspb.Message {
  hasUsername(): boolean;
  clearUsername(): void;
  getUsername(): string | undefined;
  setUsername(value: string): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): string | undefined;
  setEmail(value: string): void;

  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): string | undefined;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    username?: string,
    email?: string,
    password?: string,
  }
}

export class LoginResponse extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): string | undefined;
  setToken(value: string): void;

  hasActivated(): boolean;
  clearActivated(): void;
  getActivated(): boolean | undefined;
  setActivated(value: boolean): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasExpiresat(): boolean;
  clearExpiresat(): void;
  getExpiresat(): string | undefined;
  setExpiresat(value: string): void;

  hasIsMallmanager(): boolean;
  clearIsMallmanager(): void;
  getIsMallmanager(): boolean | undefined;
  setIsMallmanager(value: boolean): void;

  hasIsShopmanager(): boolean;
  clearIsShopmanager(): void;
  getIsShopmanager(): boolean | undefined;
  setIsShopmanager(value: boolean): void;

  hasShopid(): boolean;
  clearShopid(): void;
  getShopid(): number | undefined;
  setShopid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    token?: string,
    activated?: boolean,
    name?: string,
    expiresat?: string,
    isMallmanager?: boolean,
    isShopmanager?: boolean,
    shopid?: number,
  }
}

export class ForgetRequest extends jspb.Message {
  hasUsername(): boolean;
  clearUsername(): void;
  getUsername(): string | undefined;
  setUsername(value: string): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): string | undefined;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForgetRequest): ForgetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForgetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgetRequest;
  static deserializeBinaryFromReader(message: ForgetRequest, reader: jspb.BinaryReader): ForgetRequest;
}

export namespace ForgetRequest {
  export type AsObject = {
    username?: string,
    email?: string,
  }
}

export class ForgetResponse extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string | undefined;
  setMessage(value: string): void;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): string | undefined;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForgetResponse): ForgetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForgetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgetResponse;
  static deserializeBinaryFromReader(message: ForgetResponse, reader: jspb.BinaryReader): ForgetResponse;
}

export namespace ForgetResponse {
  export type AsObject = {
    message?: string,
    token?: string,
  }
}

export class GetUserProfileResponse extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string | undefined;
  setName(value: string): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): string | undefined;
  setEmail(value: string): void;

  hasMobileno(): boolean;
  clearMobileno(): void;
  getMobileno(): string | undefined;
  setMobileno(value: string): void;

  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): string | undefined;
  setPassword(value: string): void;

  hasActivated(): boolean;
  clearActivated(): void;
  getActivated(): boolean | undefined;
  setActivated(value: boolean): void;

  hasIsMallmanager(): boolean;
  clearIsMallmanager(): void;
  getIsMallmanager(): boolean | undefined;
  setIsMallmanager(value: boolean): void;

  hasIsShopmanager(): boolean;
  clearIsShopmanager(): void;
  getIsShopmanager(): boolean | undefined;
  setIsShopmanager(value: boolean): void;

  hasJobtitle(): boolean;
  clearJobtitle(): void;
  getJobtitle(): string | undefined;
  setJobtitle(value: string): void;

  hasShopid(): boolean;
  clearShopid(): void;
  getShopid(): number | undefined;
  setShopid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserProfileResponse): GetUserProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserProfileResponse;
  static deserializeBinaryFromReader(message: GetUserProfileResponse, reader: jspb.BinaryReader): GetUserProfileResponse;
}

export namespace GetUserProfileResponse {
  export type AsObject = {
    id?: number,
    name?: string,
    email?: string,
    mobileno?: string,
    password?: string,
    activated?: boolean,
    isMallmanager?: boolean,
    isShopmanager?: boolean,
    jobtitle?: string,
    shopid?: number,
  }
}

export class ShopRequest extends jspb.Message {
  hasShopid(): boolean;
  clearShopid(): void;
  getShopid(): number | undefined;
  setShopid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShopRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShopRequest): ShopRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShopRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShopRequest;
  static deserializeBinaryFromReader(message: ShopRequest, reader: jspb.BinaryReader): ShopRequest;
}

export namespace ShopRequest {
  export type AsObject = {
    shopid?: number,
  }
}

export class ShopResponse extends jspb.Message {
  hasShopname(): boolean;
  clearShopname(): void;
  getShopname(): number | undefined;
  setShopname(value: number): void;

  hasShopid(): boolean;
  clearShopid(): void;
  getShopid(): number | undefined;
  setShopid(value: number): void;

  hasShoparea(): boolean;
  clearShoparea(): void;
  getShoparea(): number | undefined;
  setShoparea(value: number): void;

  hasShoptype(): boolean;
  clearShoptype(): void;
  getShoptype(): number | undefined;
  setShoptype(value: number): void;

  hasTmgpercentage(): boolean;
  clearTmgpercentage(): void;
  getTmgpercentage(): number | undefined;
  setTmgpercentage(value: number): void;

  hasContractstart(): boolean;
  clearContractstart(): void;
  getContractstart(): string | undefined;
  setContractstart(value: string): void;

  hasContractend(): boolean;
  clearContractend(): void;
  getContractend(): string | undefined;
  setContractend(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShopResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShopResponse): ShopResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShopResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShopResponse;
  static deserializeBinaryFromReader(message: ShopResponse, reader: jspb.BinaryReader): ShopResponse;
}

export namespace ShopResponse {
  export type AsObject = {
    shopname?: number,
    shopid?: number,
    shoparea?: number,
    shoptype?: number,
    tmgpercentage?: number,
    contractstart?: string,
    contractend?: string,
  }
}

export class RenterInfo extends jspb.Message {
  hasRentername(): boolean;
  clearRentername(): void;
  getRentername(): number | undefined;
  setRentername(value: number): void;

  hasRenterid(): boolean;
  clearRenterid(): void;
  getRenterid(): number | undefined;
  setRenterid(value: number): void;

  hasPhone(): boolean;
  clearPhone(): void;
  getPhone(): number | undefined;
  setPhone(value: number): void;

  hasPercentage(): boolean;
  clearPercentage(): void;
  getPercentage(): number | undefined;
  setPercentage(value: number): void;

  hasTmgpercentage(): boolean;
  clearTmgpercentage(): void;
  getTmgpercentage(): number | undefined;
  setTmgpercentage(value: number): void;

  hasContractstart(): boolean;
  clearContractstart(): void;
  getContractstart(): string | undefined;
  setContractstart(value: string): void;

  hasContractend(): boolean;
  clearContractend(): void;
  getContractend(): string | undefined;
  setContractend(value: string): void;

  hasTradename(): boolean;
  clearTradename(): void;
  getTradename(): string | undefined;
  setTradename(value: string): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): string | undefined;
  setEmail(value: string): void;

  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): string | undefined;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenterInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RenterInfo): RenterInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenterInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenterInfo;
  static deserializeBinaryFromReader(message: RenterInfo, reader: jspb.BinaryReader): RenterInfo;
}

export namespace RenterInfo {
  export type AsObject = {
    rentername?: number,
    renterid?: number,
    phone?: number,
    percentage?: number,
    tmgpercentage?: number,
    contractstart?: string,
    contractend?: string,
    tradename?: string,
    email?: string,
    password?: string,
  }
}

export class DashboardCountsRequest extends jspb.Message {
  hasDatefrom(): boolean;
  clearDatefrom(): void;
  getDatefrom(): string | undefined;
  setDatefrom(value: string): void;

  hasDateto(): boolean;
  clearDateto(): void;
  getDateto(): string | undefined;
  setDateto(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardCountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardCountsRequest): DashboardCountsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardCountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardCountsRequest;
  static deserializeBinaryFromReader(message: DashboardCountsRequest, reader: jspb.BinaryReader): DashboardCountsRequest;
}

export namespace DashboardCountsRequest {
  export type AsObject = {
    datefrom?: string,
    dateto?: string,
  }
}

export class DashboardCountsResponse extends jspb.Message {
  hasTotalsales(): boolean;
  clearTotalsales(): void;
  getTotalsales(): number | undefined;
  setTotalsales(value: number): void;

  hasRefunds(): boolean;
  clearRefunds(): void;
  getRefunds(): number | undefined;
  setRefunds(value: number): void;

  hasTmgpercentage(): boolean;
  clearTmgpercentage(): void;
  getTmgpercentage(): number | undefined;
  setTmgpercentage(value: number): void;

  hasTmgamount(): boolean;
  clearTmgamount(): void;
  getTmgamount(): number | undefined;
  setTmgamount(value: number): void;

  clearPopularcategoriesList(): void;
  getPopularcategoriesList(): Array<StatsWithDescResponse>;
  setPopularcategoriesList(value: Array<StatsWithDescResponse>): void;
  addPopularcategories(value?: StatsWithDescResponse, index?: number): StatsWithDescResponse;

  clearCustomertrafficList(): void;
  getCustomertrafficList(): Array<StatsWithDescResponse>;
  setCustomertrafficList(value: Array<StatsWithDescResponse>): void;
  addCustomertraffic(value?: StatsWithDescResponse, index?: number): StatsWithDescResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DashboardCountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DashboardCountsResponse): DashboardCountsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DashboardCountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DashboardCountsResponse;
  static deserializeBinaryFromReader(message: DashboardCountsResponse, reader: jspb.BinaryReader): DashboardCountsResponse;
}

export namespace DashboardCountsResponse {
  export type AsObject = {
    totalsales?: number,
    refunds?: number,
    tmgpercentage?: number,
    tmgamount?: number,
    popularcategoriesList: Array<StatsWithDescResponse.AsObject>,
    customertrafficList: Array<StatsWithDescResponse.AsObject>,
  }
}

export class StatsWithDescResponse extends jspb.Message {
  clearStatsList(): void;
  getStatsList(): Array<StatsResponse>;
  setStatsList(value: Array<StatsResponse>): void;
  addStats(value?: StatsResponse, index?: number): StatsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsWithDescResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatsWithDescResponse): StatsWithDescResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatsWithDescResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsWithDescResponse;
  static deserializeBinaryFromReader(message: StatsWithDescResponse, reader: jspb.BinaryReader): StatsWithDescResponse;
}

export namespace StatsWithDescResponse {
  export type AsObject = {
    statsList: Array<StatsResponse.AsObject>,
  }
}

export class StatsRequest extends jspb.Message {
  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): FILTERMap[keyof FILTERMap] | undefined;
  setFilter(value: FILTERMap[keyof FILTERMap]): void;

  hasYear(): boolean;
  clearYear(): void;
  getYear(): string | undefined;
  setYear(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatsRequest): StatsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsRequest;
  static deserializeBinaryFromReader(message: StatsRequest, reader: jspb.BinaryReader): StatsRequest;
}

export namespace StatsRequest {
  export type AsObject = {
    filter?: FILTERMap[keyof FILTERMap],
    year?: string,
  }
}

export class StatsResponse extends jspb.Message {
  clearLabelsList(): void;
  getLabelsList(): Array<string>;
  setLabelsList(value: Array<string>): void;
  addLabels(value: string, index?: number): string;

  clearDatasetsList(): void;
  getDatasetsList(): Array<DatasetCounts>;
  setDatasetsList(value: Array<DatasetCounts>): void;
  addDatasets(value?: DatasetCounts, index?: number): DatasetCounts;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatsResponse): StatsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsResponse;
  static deserializeBinaryFromReader(message: StatsResponse, reader: jspb.BinaryReader): StatsResponse;
}

export namespace StatsResponse {
  export type AsObject = {
    labelsList: Array<string>,
    datasetsList: Array<DatasetCounts.AsObject>,
  }
}

export class DatasetCounts extends jspb.Message {
  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): string | undefined;
  setLabel(value: string): void;

  clearDataList(): void;
  getDataList(): Array<number>;
  setDataList(value: Array<number>): void;
  addData(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetCounts.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetCounts): DatasetCounts.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DatasetCounts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetCounts;
  static deserializeBinaryFromReader(message: DatasetCounts, reader: jspb.BinaryReader): DatasetCounts;
}

export namespace DatasetCounts {
  export type AsObject = {
    label?: string,
    dataList: Array<number>,
  }
}

export class ShopInvoicesRequest extends jspb.Message {
  hasShopid(): boolean;
  clearShopid(): void;
  getShopid(): number | undefined;
  setShopid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShopInvoicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShopInvoicesRequest): ShopInvoicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShopInvoicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShopInvoicesRequest;
  static deserializeBinaryFromReader(message: ShopInvoicesRequest, reader: jspb.BinaryReader): ShopInvoicesRequest;
}

export namespace ShopInvoicesRequest {
  export type AsObject = {
    shopid?: number,
  }
}

export class ShopInvoicResponse extends jspb.Message {
  hasInvoiceid(): boolean;
  clearInvoiceid(): void;
  getInvoiceid(): number | undefined;
  setInvoiceid(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): string | undefined;
  setTimestamp(value: string): void;

  hasSubtotal(): boolean;
  clearSubtotal(): void;
  getSubtotal(): number | undefined;
  setSubtotal(value: number): void;

  hasServices(): boolean;
  clearServices(): void;
  getServices(): string | undefined;
  setServices(value: string): void;

  hasVat(): boolean;
  clearVat(): void;
  getVat(): number | undefined;
  setVat(value: number): void;

  hasGrandtotal(): boolean;
  clearGrandtotal(): void;
  getGrandtotal(): number | undefined;
  setGrandtotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShopInvoicResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShopInvoicResponse): ShopInvoicResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShopInvoicResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShopInvoicResponse;
  static deserializeBinaryFromReader(message: ShopInvoicResponse, reader: jspb.BinaryReader): ShopInvoicResponse;
}

export namespace ShopInvoicResponse {
  export type AsObject = {
    invoiceid?: number,
    timestamp?: string,
    subtotal?: number,
    services?: string,
    vat?: number,
    grandtotal?: number,
  }
}

export class TransactionsOfInvoiceRequest extends jspb.Message {
  hasInvoiceid(): boolean;
  clearInvoiceid(): void;
  getInvoiceid(): number | undefined;
  setInvoiceid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionsOfInvoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionsOfInvoiceRequest): TransactionsOfInvoiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionsOfInvoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionsOfInvoiceRequest;
  static deserializeBinaryFromReader(message: TransactionsOfInvoiceRequest, reader: jspb.BinaryReader): TransactionsOfInvoiceRequest;
}

export namespace TransactionsOfInvoiceRequest {
  export type AsObject = {
    invoiceid?: number,
  }
}

export class TransactionsOfInvoiceRespone extends jspb.Message {
  hasOrderid(): boolean;
  clearOrderid(): void;
  getOrderid(): number | undefined;
  setOrderid(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): string | undefined;
  setTimestamp(value: string): void;

  hasProduct(): boolean;
  clearProduct(): void;
  getProduct(): string | undefined;
  setProduct(value: string): void;

  hasQuantity(): boolean;
  clearQuantity(): void;
  getQuantity(): string | undefined;
  setQuantity(value: string): void;

  hasVat(): boolean;
  clearVat(): void;
  getVat(): number | undefined;
  setVat(value: number): void;

  hasSubtotal(): boolean;
  clearSubtotal(): void;
  getSubtotal(): number | undefined;
  setSubtotal(value: number): void;

  hasGrandtotal(): boolean;
  clearGrandtotal(): void;
  getGrandtotal(): number | undefined;
  setGrandtotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionsOfInvoiceRespone.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionsOfInvoiceRespone): TransactionsOfInvoiceRespone.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionsOfInvoiceRespone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionsOfInvoiceRespone;
  static deserializeBinaryFromReader(message: TransactionsOfInvoiceRespone, reader: jspb.BinaryReader): TransactionsOfInvoiceRespone;
}

export namespace TransactionsOfInvoiceRespone {
  export type AsObject = {
    orderid?: number,
    timestamp?: string,
    product?: string,
    quantity?: string,
    vat?: number,
    subtotal?: number,
    grandtotal?: number,
  }
}

export class MallStructureResponse extends jspb.Message {
  hasTotalareas(): boolean;
  clearTotalareas(): void;
  getTotalareas(): number | undefined;
  setTotalareas(value: number): void;

  hasTotalshops(): boolean;
  clearTotalshops(): void;
  getTotalshops(): number | undefined;
  setTotalshops(value: number): void;

  hasRented(): boolean;
  clearRented(): void;
  getRented(): number | undefined;
  setRented(value: number): void;

  hasIntegrated(): boolean;
  clearIntegrated(): void;
  getIntegrated(): number | undefined;
  setIntegrated(value: number): void;

  clearAreasList(): void;
  getAreasList(): Array<Areas>;
  setAreasList(value: Array<Areas>): void;
  addAreas(value?: Areas, index?: number): Areas;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MallStructureResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MallStructureResponse): MallStructureResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MallStructureResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MallStructureResponse;
  static deserializeBinaryFromReader(message: MallStructureResponse, reader: jspb.BinaryReader): MallStructureResponse;
}

export namespace MallStructureResponse {
  export type AsObject = {
    totalareas?: number,
    totalshops?: number,
    rented?: number,
    integrated?: number,
    areasList: Array<Areas.AsObject>,
  }
}

export class Areas extends jspb.Message {
  hasFloornumber(): boolean;
  clearFloornumber(): void;
  getFloornumber(): number | undefined;
  setFloornumber(value: number): void;

  hasNumberofshops(): boolean;
  clearNumberofshops(): void;
  getNumberofshops(): number | undefined;
  setNumberofshops(value: number): void;

  hasActive(): boolean;
  clearActive(): void;
  getActive(): number | undefined;
  setActive(value: number): void;

  hasIntegrated(): boolean;
  clearIntegrated(): void;
  getIntegrated(): number | undefined;
  setIntegrated(value: number): void;

  hasClosed(): boolean;
  clearClosed(): void;
  getClosed(): number | undefined;
  setClosed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Areas.AsObject;
  static toObject(includeInstance: boolean, msg: Areas): Areas.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Areas, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Areas;
  static deserializeBinaryFromReader(message: Areas, reader: jspb.BinaryReader): Areas;
}

export namespace Areas {
  export type AsObject = {
    floornumber?: number,
    numberofshops?: number,
    active?: number,
    integrated?: number,
    closed?: number,
  }
}

export class AllShopsRequest extends jspb.Message {
  hasFloornumber(): boolean;
  clearFloornumber(): void;
  getFloornumber(): number | undefined;
  setFloornumber(value: number): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): SHOP_STATUSMap[keyof SHOP_STATUSMap] | undefined;
  setStatus(value: SHOP_STATUSMap[keyof SHOP_STATUSMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllShopsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AllShopsRequest): AllShopsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllShopsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllShopsRequest;
  static deserializeBinaryFromReader(message: AllShopsRequest, reader: jspb.BinaryReader): AllShopsRequest;
}

export namespace AllShopsRequest {
  export type AsObject = {
    floornumber?: number,
    status?: SHOP_STATUSMap[keyof SHOP_STATUSMap],
  }
}

export class AllShopsResponse extends jspb.Message {
  clearShopsList(): void;
  getShopsList(): Array<Shop>;
  setShopsList(value: Array<Shop>): void;
  addShops(value?: Shop, index?: number): Shop;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllShopsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AllShopsResponse): AllShopsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllShopsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllShopsResponse;
  static deserializeBinaryFromReader(message: AllShopsResponse, reader: jspb.BinaryReader): AllShopsResponse;
}

export namespace AllShopsResponse {
  export type AsObject = {
    shopsList: Array<Shop.AsObject>,
  }
}

export class Shop extends jspb.Message {
  hasShopname(): boolean;
  clearShopname(): void;
  getShopname(): string | undefined;
  setShopname(value: string): void;

  hasShopid(): boolean;
  clearShopid(): void;
  getShopid(): number | undefined;
  setShopid(value: number): void;

  hasArea(): boolean;
  clearArea(): void;
  getArea(): number | undefined;
  setArea(value: number): void;

  hasPercentage(): boolean;
  clearPercentage(): void;
  getPercentage(): number | undefined;
  setPercentage(value: number): void;

  hasType(): boolean;
  clearType(): void;
  getType(): string | undefined;
  setType(value: string): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): SHOP_STATUSMap[keyof SHOP_STATUSMap] | undefined;
  setStatus(value: SHOP_STATUSMap[keyof SHOP_STATUSMap]): void;

  hasContractstart(): boolean;
  clearContractstart(): void;
  getContractstart(): string | undefined;
  setContractstart(value: string): void;

  hasContractend(): boolean;
  clearContractend(): void;
  getContractend(): string | undefined;
  setContractend(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Shop.AsObject;
  static toObject(includeInstance: boolean, msg: Shop): Shop.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Shop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Shop;
  static deserializeBinaryFromReader(message: Shop, reader: jspb.BinaryReader): Shop;
}

export namespace Shop {
  export type AsObject = {
    shopname?: string,
    shopid?: number,
    area?: number,
    percentage?: number,
    type?: string,
    status?: SHOP_STATUSMap[keyof SHOP_STATUSMap],
    contractstart?: string,
    contractend?: string,
  }
}

export class MessageResponse extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string | undefined;
  setMessage(value: string): void;

  hasDone(): boolean;
  clearDone(): void;
  getDone(): boolean | undefined;
  setDone(value: boolean): void;

  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MessageResponse): MessageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageResponse;
  static deserializeBinaryFromReader(message: MessageResponse, reader: jspb.BinaryReader): MessageResponse;
}

export namespace MessageResponse {
  export type AsObject = {
    message?: string,
    done?: boolean,
    id?: number,
  }
}

export interface FILTERMap {
  WEEK: 1;
  MONTH: 2;
  YEAR: 3;
}

export const FILTER: FILTERMap;

export interface SHOP_STATUSMap {
  RENTED: 1;
  UNRENTED: 2;
  INTEGRATED: 3;
  CLOSED: 4;
  ACTIVE: 5;
}

export const SHOP_STATUS: SHOP_STATUSMap;

