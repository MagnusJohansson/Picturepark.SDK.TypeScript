
    export class ContentClient {
        private http;
        private baseUrl;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
        constructor(baseUrl?: string, http?: {
            fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
        });
        /**
         * Update Single - OwnershipTransfer
         * @contentId The content id.
         * @updateRequest The content ownership transfer request update request.
         * @timeout Maximum time in milliseconds to wait for the business process completed state.
         * @return ContentDoc
         */
        updateTransferOwnership(contentId: string, updateRequest: ContentOwnershipTransferRequest | null, timeout: number | null): Promise<ContentDetail | null>;
        protected processUpdateTransferOwnership(response: Response): Promise<ContentDetail | null>;
        /**
         * Get Many
         * @contentIds Comma-separated list of contentIds
         * @resolve Resolves the data of referenced list items into the contents's content.
         * @timeout Maximum time in milliseconds to wait for the business process completed state.
         * @patterns Comma-separated list of display pattern ids. Resolves display values of referenced list items where the display pattern id matches.
         */
        getMany(contentIds: string[] | null, resolve: boolean, timeout: number | null, patterns: string[] | null): Promise<ContentDetail[] | null>;
        protected processGetMany(response: Response): Promise<ContentDetail[] | null>;
        transferOwnershipMany(contentsOwnershipTransferRequest: ContentsOwnershipTransferRequest | null): Promise<BusinessProcess | null>;
        protected processTransferOwnershipMany(response: Response): Promise<BusinessProcess | null>;
        /**
         * Aggregate
         * @contentAggregationRequest The aggregation request.
         * @return ObjectAggregationResult
         */
        aggregate(contentAggregationRequest: ContentAggregationRequest | null): Promise<ObjectAggregationResult | null>;
        protected processAggregate(response: Response): Promise<ObjectAggregationResult | null>;
        /**
         * Aggregate By Channel
         * @channelId The channel id
         * @contentAggregationRequest The content aggregation request.
         * @return ObjectAggregationResult
         */
        aggregateByChannel(channelId: string, contentAggregationRequest: ContentAggregationRequest | null): Promise<ObjectAggregationResult | null>;
        protected processAggregateByChannel(response: Response): Promise<ObjectAggregationResult | null>;
        createDownloadLink(request: ContentBatchDownloadRequest | null): Promise<ContentBatchDownloadItem | null>;
        protected processCreateDownloadLink(response: Response): Promise<ContentBatchDownloadItem | null>;
        /**
         * Create Single
         * @createRequest The content create request.
         * @resolve Resolves the data of referenced list items into the contents's content.
         * @timeout Maximum time in milliseconds to wait for the business process completed state.
         * @patterns Comma-separated list of display pattern ids. Resolves display values of referenced list items where the display pattern id matches.
         */
        createContent(createRequest: CreateContentRequest | null, resolve: boolean, timeout: number | null, patterns: string[] | null): Promise<ContentDetail | null>;
        protected processCreateContent(response: Response): Promise<ContentDetail | null>;
        download(contentId: string, outputFormatId: string, range: string | null): Promise<FileResponse | null>;
        protected processDownload(response: Response): Promise<FileResponse | null>;
        /**
         * Get Thumbnail
         * @contentId The Content id
         * @size Thumbnail size. Either small, medium or large
         * @return HttpResponseMessage
         */
        downloadThumbnail(contentId: string, size: ThumbnailSize): Promise<FileResponse | null>;
        protected processDownloadThumbnail(response: Response): Promise<FileResponse | null>;
        downloadResized(contentId: string, outputFormatId: string, width: number, height: number): Promise<FileResponse | null>;
        protected processDownloadResized(response: Response): Promise<FileResponse | null>;
        /**
         * Get Single
         * @contentId The content id.
         * @resolve Resolves the data of referenced list items into the contents's content.
         * @patterns Comma-separated list of display pattern ids. Resolves display values of referenced list items where the display pattern id matches.
         * @return ContentDetail
         */
        get(contentId: string, resolve: boolean, patterns: string[] | null): Promise<ContentDetail | null>;
        protected processGet(response: Response): Promise<ContentDetail | null>;
        /**
         * Update Single - Metadata
         * @contentId The content id.
         * @updateRequest The metadata update request.
         * @resolve Resolves the data of referenced list items into the contents's content.
         * @timeout Maximum time in milliseconds to wait for the business process completed state.
         * @patterns Comma-separated list of display pattern ids. Resolves display values of referenced list items where the display pattern id matches.
         * @return ContentDetail
         */
        updateMetadata(contentId: string, updateRequest: UpdateContentMetadataRequest | null, resolve: boolean, timeout: number | null, patterns: string[] | null): Promise<ContentDetail | null>;
        protected processUpdateMetadata(response: Response): Promise<ContentDetail | null>;
        /**
         * Update Single - Permissions
         * @contentId The content id.
         * @updateRequest The content permission update request.
         * @resolve Resolves the data of referenced list items into the contents's content.
         * @timeout Maximum time in milliseconds to wait for the business process completed state.
         * @patterns Comma-separated list of display pattern ids. Resolves display values of referenced list items where the display pattern id matches.
         * @return ContentDetail
         */
        updatePermissions(contentId: string, updateRequest: UpdateContentPermissionsRequest | null, resolve: boolean, timeout: number | null, patterns: string[] | null): Promise<ContentDetail | null>;
        protected processUpdatePermissions(response: Response): Promise<ContentDetail | null>;
        /**
         * Search
         * @contentSearchRequest The content search request.
         * @return ContentSearchResult
         */
        search(contentSearchRequest: ContentSearchRequest | null): Promise<ContentSearchResult | null>;
        protected processSearch(response: Response): Promise<ContentSearchResult | null>;
        /**
         * Search By Channel
         * @channelId The channel id.
         * @contentSearchRequest The content search request.
         * @return ContentSearchResult
         */
        searchByChannel(channelId: string, contentSearchRequest: ContentSearchRequest | null): Promise<ContentSearchResult | null>;
        protected processSearchByChannel(response: Response): Promise<ContentSearchResult | null>;
        deactivate(contentId: string, timeout: number): Promise<void>;
        protected processDeactivate(response: Response): Promise<void>;
        /**
         * Update file
         * @contentId The id of the content to replace
         * @updateRequest Update request
         */
        updateFile(contentId: string, updateRequest: ContentFileUpdateRequest | null): Promise<BusinessProcess | null>;
        protected processUpdateFile(response: Response): Promise<BusinessProcess | null>;
        reactivate(contentId: string, resolve: boolean, timeout: number | null, patterns: string[] | null): Promise<ContentDetail | null>;
        protected processReactivate(response: Response): Promise<ContentDetail | null>;
        deactivateMany(deactivationRequest: ContentDeactivationRequest | null): Promise<BusinessProcess | null>;
        protected processDeactivateMany(response: Response): Promise<BusinessProcess | null>;
        reactivateMany(reactivationRequest: ContentReactivationRequest | null): Promise<BusinessProcess | null>;
        protected processReactivateMany(response: Response): Promise<BusinessProcess | null>;
        /**
         * Update Many - Metadata
         * @updateRequest The metadata update request.
         * @return BusinessProcess
         */
        updateMetadataMany(updateRequest: ContentsMetadataUpdateRequest | null): Promise<BusinessProcess | null>;
        protected processUpdateMetadataMany(response: Response): Promise<BusinessProcess | null>;
        /**
         * Update Many - Permissions
         * @updateRequest The permissions update request.
         * @return BusinessProcess
         */
        updatePermissionsMany(updateRequest: UpdateContentPermissionsRequest[] | null): Promise<BusinessProcess | null>;
        protected processUpdatePermissionsMany(response: Response): Promise<BusinessProcess | null>;
    }
    export class BusinessProcessClient {
        private http;
        private baseUrl;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
        constructor(baseUrl?: string, http?: {
            fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
        });
        search(businessProcessSearchRequest: BusinessProcessSearchResult | null): Promise<BusinessProcessSearchResult | null>;
        protected processSearch(response: Response): Promise<BusinessProcessSearchResult | null>;
        start(processDefinitionId: string, request: StartProcessRequest | null): Promise<BusinessProcess | null>;
        protected processStart(response: Response): Promise<BusinessProcess | null>;
        markAsEnded(processId: string): Promise<void>;
        protected processMarkAsEnded(response: Response): Promise<void>;
        sendMessage(processId: string, request: SendMessageRequest | null): Promise<void>;
        protected processSendMessage(response: Response): Promise<void>;
        waitForStates(processId: string, states: string | null, timeout: number): Promise<BusinessProcessWaitResult | null>;
        protected processWaitForStates(response: Response): Promise<BusinessProcessWaitResult | null>;
    }
    export class DocumentHistoryClient {
        private http;
        private baseUrl;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
        constructor(baseUrl?: string, http?: {
            fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
        });
        search(documentHistorySearchRequest: DocumentHistorySearchRequest | null): Promise<DocumentHistorySearchResult | null>;
        protected processSearch(response: Response): Promise<DocumentHistorySearchResult | null>;
        get(id: string): Promise<DocumentHistory | null>;
        protected processGet(response: Response): Promise<DocumentHistory | null>;
        getVersion(id: string, version: string): Promise<DocumentHistory | null>;
        protected processGetVersion(response: Response): Promise<DocumentHistory | null>;
        getDifferenceLatest(id: string, oldVersion: number): Promise<DocumentHistoryDifference | null>;
        protected processGetDifferenceLatest(response: Response): Promise<DocumentHistoryDifference | null>;
        getDifference(id: string, oldVersion: number, newVersion: number): Promise<DocumentHistoryDifference | null>;
        protected processGetDifference(response: Response): Promise<DocumentHistoryDifference | null>;
    }
    export class JsonSchemaClient {
        private http;
        private baseUrl;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
        constructor(baseUrl?: string, http?: {
            fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
        });
        /**
         * Get Json Schema
         * @schemaId Schema Id
         * @return JsonSchemaViewItem
         */
        get(schemaId: string): Promise<any | null>;
        protected processGet(response: Response): Promise<any | null>;
    }
    export class ListItemClient {
        private http;
        private baseUrl;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
        constructor(baseUrl?: string, http?: {
            fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
        });
        /**
         * Create Single
         * @listItem List item create request.
         * @resolve Resolves the data of referenced list items into the list item's content.
         * @timeout Maximum time in milliseconds to wait for the business process completed state.
         * @patterns Comma-separated list of display pattern ids. Resolves display values of referenced list items where the display pattern id matches.
         * @return ListItemDetail
         */
        create(listItem: ListItemCreateRequest | null, resolve: boolean, timeout: number | null, patterns: string[] | null): Promise<ListItemDetail | null>;
        protected processCreate(response: Response): Promise<ListItemDetail | null>;
        /**
         * Create Many
         * @objects A list of ListItemCreateRequests.
         * @return BusinessProcess
         */
        createMany(objects: ListItemCreateRequest[] | null): Promise<BusinessProcess | null>;
        protected processCreateMany(response: Response): Promise<BusinessProcess | null>;
        /**
         * Delete Many
         * @ids The list item id list.
         * @return BusinessProcess
         */
        deleteMany(ids: string[] | null): Promise<BusinessProcess | null>;
        protected processDeleteMany(response: Response): Promise<BusinessProcess | null>;
        /**
         * Update Many
         * @objects A list of ListItemUpdateRequests.
         * @return BusinessProcess
         */
        updateMany(objects: ListItemUpdateRequest[] | null): Promise<BusinessProcess | null>;
        protected processUpdateMany(response: Response): Promise<BusinessProcess | null>;
        /**
         * Aggregate
         * @listItemAggregationRequest The list item aggregation request.
         * @return ObjectAggregationResult
         */
        aggregate(listItemAggregationRequest: ListItemAggregationRequest | null): Promise<ObjectAggregationResult | null>;
        protected processAggregate(response: Response): Promise<ObjectAggregationResult | null>;
        /**
         * Search
         * @listItemSearchRequest The list item search request.
         * @return List item result set.
         */
        search(listItemSearchRequest: ListItemSearchRequest | null): Promise<ListItemSearchResult | null>;
        protected processSearch(response: Response): Promise<ListItemSearchResult | null>;
        /**
         * Delete Single
         * @objectId The list item id.
         * @timeout Maximum time in milliseconds to wait for the business process completed state.
         */
        delete(objectId: string, timeout: number): Promise<void>;
        protected processDelete(response: Response): Promise<void>;
        /**
         * Get Single
         * @listItemId The list item id.
         * @resolve Resolves the data of referenced list items into the list item's content.
         * @patterns Comma-separated list of display pattern ids. Resolves display values of referenced list items where the display pattern id matches.
         */
        get(listItemId: string, resolve: boolean, patterns: string[] | null): Promise<ListItemDetail | null>;
        protected processGet(response: Response): Promise<ListItemDetail | null>;
        /**
         * Update Single
         * @listItemId The list item id.
         * @updateRequest The list item update request.
         * @resolve Resolves the data of referenced list items into the list item's content.
         * @timeout Maximum time in milliseconds to wait for the business process completed state.
         * @patterns Comma-separated list of display pattern ids. Resolves display values of referenced list items where the display pattern id matches.
         * @return ListItemDetail
         */
        update(listItemId: string, updateRequest: ListItemUpdateRequest | null, resolve: boolean, timeout: number | null, patterns: string[] | null): Promise<ListItemDetail | null>;
        protected processUpdate(response: Response): Promise<ListItemDetail | null>;
        /**
         * Wait For States
         * @processId The business process id.
         * @states Comma-separated list of business process states to wait for.
         * @timeout Maximum time in milliseconds to wait for the business process completed state.
         * @return BusinessProcessWaitResult
         */
        waitForStates(processId: string, states: string[] | null, timeout: number): Promise<BusinessProcessWaitResult | null>;
        protected processWaitForStates(response: Response): Promise<BusinessProcessWaitResult | null>;
        /**
         * Import
         * @contentId The content id.
         * @fileTransferId The file transfer id.
         * @includeObjects Imports list items defined in the json import file.
         */
        import(contentId: string | null, fileTransferId: string | null, includeObjects: boolean): Promise<void>;
        protected processImport(response: Response): Promise<void>;
    }
    export class LiveStreamClient {
        private http;
        private baseUrl;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
        constructor(baseUrl?: string, http?: {
            fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
        });
        search(liveStreamSearchRequest: LiveStreamSearchRequest | null): Promise<ObjectSearchResult | null>;
        protected processSearch(response: Response): Promise<ObjectSearchResult | null>;
    }
    export class SchemaClient {
        private http;
        private baseUrl;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
        constructor(baseUrl?: string, http?: {
            fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
        });
        /**
         * Get Many
         * @ids Comma separated list of schema ids
         * @return SchemaDetail
         */
        getAll(ids: string[] | null): Promise<SchemaDetail[] | null>;
        protected processGetAll(response: Response): Promise<SchemaDetail[] | null>;
        /**
         * Create Single
         * @schema The schema create request.
         * @return BusinessProcess
         */
        create(schema: SchemaCreateRequest | null): Promise<BusinessProcess | null>;
        protected processCreate(response: Response): Promise<BusinessProcess | null>;
        /**
         * Get Single
         * @schemaId The schema id.
         * @return SchemaDetail
         */
        get(schemaId: string): Promise<SchemaDetail | null>;
        protected processGet(response: Response): Promise<SchemaDetail | null>;
        /**
         * Update Single
         * @schemaId The schema id.
         * @schema The schema update request.
         * @return BusinessProcess
         */
        update(schemaId: string, schema: SchemaUpdateRequest | null): Promise<BusinessProcess | null>;
        protected processUpdate(response: Response): Promise<BusinessProcess | null>;
        /**
         * Delete Single
         * @schemaId The schema id.
         * @return BusinessProcess
         */
        delete(schemaId: string): Promise<BusinessProcess | null>;
        protected processDelete(response: Response): Promise<BusinessProcess | null>;
        /**
         * Exists
         * @schemaId The schema id.
         * @fieldId The optional field id.
         * @return ExistsResponse
         */
        exists(schemaId: string, fieldId: string | null): Promise<ExistsResponse | null>;
        protected processExists(response: Response): Promise<ExistsResponse | null>;
        /**
         * Search
         * @schemaSearchRequest The schema search request.
         * @return Schema result set.
         */
        search(schemaSearchRequest: SchemaSearchRequest | null): Promise<SchemaSearchResult | null>;
        protected processSearch(response: Response): Promise<SchemaSearchResult | null>;
    }
    export class PermissionClient {
        private http;
        private baseUrl;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
        constructor(baseUrl?: string, http?: {
            fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
        });
        /**
         * Get UserRight validation result
         * @permission The UserRight to validate
         * @return Boolean - user has permission
         */
        getUserPermissions(permission: UserRight): Promise<boolean | null>;
        protected processGetUserPermissions(response: Response): Promise<boolean | null>;
        /**
         * Search Content Permissions
         * @request The permission search request.
         * @return PermissionSetSearchResult
         */
        searchContentPermissions(request: PermissionSetSearchRequest | null): Promise<PermissionSetSearchResult | null>;
        protected processSearchContentPermissions(response: Response): Promise<PermissionSetSearchResult | null>;
        /**
         * Get Content Permission Single
         * @permissionSetId The content permission set id.
         * @return ContentPermissionSetDetail
         */
        getContentPermissions(permissionSetId: string): Promise<ContentPermissionSetDetail | null>;
        protected processGetContentPermissions(response: Response): Promise<ContentPermissionSetDetail | null>;
        /**
         * Search Schema Permissions
         * @request The permission search request.
         * @return PermissionSetSearchResult
         */
        searchSchemaPermissions(request: PermissionSetSearchRequest | null): Promise<PermissionSetSearchResult | null>;
        protected processSearchSchemaPermissions(response: Response): Promise<PermissionSetSearchResult | null>;
        /**
         * Get Schema Permission Single
         * @permissionSetId The schema permission set id.
         * @return SchemaPermissionSetDetail
         */
        getSchemaPermissions(permissionSetId: string): Promise<SchemaPermissionSetDetail | null>;
        protected processGetSchemaPermissions(response: Response): Promise<SchemaPermissionSetDetail | null>;
    }
    export class PublicAccessClient {
        private http;
        private baseUrl;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
        constructor(baseUrl?: string, http?: {
            fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
        });
        getVersion(): Promise<VersionInfo | null>;
        protected processGetVersion(response: Response): Promise<VersionInfo | null>;
        getShare(token: string | null): Promise<ShareBaseDetail | null>;
        protected processGetShare(response: Response): Promise<ShareBaseDetail | null>;
    }
    export class ShareClient {
        private http;
        private baseUrl;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
        constructor(baseUrl?: string, http?: {
            fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
        });
        /**
         * Update Single - Share
         * @id The share id.
         * @updateRequest The share update request.
         * @resolve Resolves the data of referenced list items into the shares content.
         * @timeout Maximum time in milliseconds to wait for the business process completed state.
         * @return Share
         */
        update(id: string, updateRequest: ShareBaseUpdateRequest | null, resolve: boolean, timeout: number | null): Promise<BaseResultOfShareBase | null>;
        protected processUpdate(response: Response): Promise<BaseResultOfShareBase | null>;
        /**
         * Get share by id (basic or embed)
         * @id Share Id (not token, use PublicAccess to get share by token)
         * @return Polymorph share
         */
        get(id: string): Promise<ShareBaseDetail | null>;
        protected processGet(response: Response): Promise<ShareBaseDetail | null>;
        /**
         * Delete Many
         * @shareIds A list of ListItemCreateRequests.
         * @return BusinessProcess
         */
        deleteMany(shareIds: string[] | null): Promise<BusinessProcess | null>;
        protected processDeleteMany(response: Response): Promise<BusinessProcess | null>;
        /**
         * Aggregates own shares
         * @request Aggregation request
         * @return AggregationResult
         */
        aggregate(request: ShareAggregationRequest | null): Promise<ObjectAggregationResult | null>;
        protected processAggregate(response: Response): Promise<ObjectAggregationResult | null>;
        /**
         * Create a new share (basic or embed).
         * @request Polymorph create contract. Use either ShareBasicCreateRequest or ShareEmbedCreateRequest
         * @return Create result
         */
        create(request: ShareBaseCreateRequest | null): Promise<CreateShareResult | null>;
        protected processCreate(response: Response): Promise<CreateShareResult | null>;
        /**
         * Search shares
         * @request Search request
         * @return Share search result
         */
        search(request: ContentSearchRequest | null): Promise<ShareSearchResult | null>;
        protected processSearch(response: Response): Promise<ShareSearchResult | null>;
    }
    export class TransferClient {
        private http;
        private baseUrl;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
        constructor(baseUrl?: string, http?: {
            fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
        });
        deleteFiles(request: FileTransferDeleteRequest | null): Promise<void>;
        protected processDeleteFiles(response: Response): Promise<void>;
        getBlacklist(): Promise<Blacklist | null>;
        protected processGetBlacklist(response: Response): Promise<Blacklist | null>;
        /**
         * Cancels an active batch. Valid states: TODO
         */
        cancelBatch(transferId: string): Promise<void>;
        protected processCancelBatch(response: Response): Promise<void>;
        create(request: CreateTransferRequest | null): Promise<Transfer | null>;
        protected processCreate(response: Response): Promise<Transfer | null>;
        delete(transferId: string): Promise<void>;
        protected processDelete(response: Response): Promise<void>;
        get(transferId: string): Promise<TransferDetail | null>;
        protected processGet(response: Response): Promise<TransferDetail | null>;
        getFile(fileTransferId: string): Promise<FileTransferDetail | null>;
        protected processGetFile(response: Response): Promise<FileTransferDetail | null>;
        importBatch(transferId: string, request: FileTransfer2ContentCreateRequest | null): Promise<Transfer | null>;
        protected processImportBatch(response: Response): Promise<Transfer | null>;
        partialImport(transferId: string, request: FileTransferPartial2ContentCreateRequest | null): Promise<Transfer | null>;
        protected processPartialImport(response: Response): Promise<Transfer | null>;
        search(request: TransferSearchRequest | null): Promise<TransferSearchResult | null>;
        protected processSearch(response: Response): Promise<TransferSearchResult | null>;
        searchFiles(request: FileTransferSearchRequest | null): Promise<FileTransferSearchResult | null>;
        protected processSearchFiles(response: Response): Promise<FileTransferSearchResult | null>;
        /**
         * @flowChunkNumber Starts with 1
         */
        uploadFile(formFile: FileParameter | null, flowRelativePath: string | null, flowChunkNumber: number, flowCurrentChunkSize: number, flowTotalSize: number, flowTotalChunks: number, transferId: string, identifier: string): Promise<void>;
        protected processUploadFile(response: Response): Promise<void>;
    }
    export class UserClient {
        private http;
        private baseUrl;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
        constructor(baseUrl?: string, http?: {
            fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
        });
        search(searchRequest: UserSearchRequest | null): Promise<UserSearchResult | null>;
        protected processSearch(response: Response): Promise<UserSearchResult | null>;
        getUser(userId: string): Promise<UserDetail | null>;
        protected processGetUser(response: Response): Promise<UserDetail | null>;
        getProfile(): Promise<UserProfile | null>;
        protected processGetProfile(response: Response): Promise<UserProfile | null>;
        getByOwnerToken(tokenId: string): Promise<UserDetail | null>;
        protected processGetByOwnerToken(response: Response): Promise<UserDetail | null>;
        getChannels(): Promise<Channel[] | null>;
        protected processGetChannels(response: Response): Promise<Channel[] | null>;
    }
    export class OutputClient {
        private http;
        private baseUrl;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined;
        constructor(baseUrl?: string, http?: {
            fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;
        });
        /**
         * Get outputs by contentIds
         * @contentsByIdsRequest Contains the list of contentIds for which the outputs are requested
         * @return The Result containing a list of OutputDetail's
         */
        getByContentIds(contentsByIdsRequest: ContentsByIdsRequest | null): Promise<OutputDetail[] | null>;
        protected processGetByContentIds(response: Response): Promise<OutputDetail[] | null>;
        /**
         * Get Single
         * @outputId The output id.
         * @return OutputDetail
         */
        get(outputId: string): Promise<OutputDetail | null>;
        protected processGet(response: Response): Promise<OutputDetail | null>;
    }
    export interface ContentOwnershipTransferRequest {
        /** The content id. */
        contentId?: string | undefined;
        /** The id of the user to whom the content document has to be transfered to. */
        transferUserId?: string | undefined;
    }
    export interface ContentDetail {
        /** Document audit information with information regarding document creation and modification. */
        audit?: StoreAudit | undefined;
        /** The content data of the content document. */
        content?: any | undefined;
        /** An optional id list of content permission sets. Controls content accessibility outside of content ownership. */
        contentPermissionSetIds?: string[] | undefined;
        /** The id of the schema with schema type content. */
        contentSchemaId?: string | undefined;
        /** The content type of a content document. */
        contentType: ContentType;
        /** The content type of a content document. */
        contentTypeId: number;
        /** Contains language specific display values, rendered according to the content schema's display pattern configuration. */
        displayValues?: DisplayValueDictionary | undefined;
        /** The entity type of a content document is content. */
        entityType: EntityType;
        /** The content id. */
        id?: string | undefined;
        /** An optional id list of schemas with schema type layer. */
        layerSchemaIds?: string[] | undefined;
        /** The layer metadata of the content document. */
        metadata?: DataDictionary | undefined;
        /** A list of rendering ouputs for contents with an underlying digital file. */
        outputs?: Output[] | undefined;
        /** The id of a owner token. Defines the content owner. */
        ownerTokenId?: string | undefined;
        /** The trashed flag. */
        trashed: boolean;
    }
    export interface StoreAudit {
        creationDate: Date;
        createdByUser?: UserItem | undefined;
        modificationDate: Date;
        modifiedByUser?: UserItem | undefined;
    }
    export interface UserItem {
        id?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        emailAddress?: string | undefined;
    }
    export enum ContentType {
        Unknown,
        Bitmap,
        VectorGraphic,
        RawImage,
        InterchangeDocument,
        WordProcessingDocument,
        TextDocument,
        DesktopPublishingDocument,
        Presentation,
        Spreadsheet,
        Archive,
        Audio,
        Video,
        Font,
        Multimedia,
        Application,
        SourceCode,
        Database,
        Cad,
        Model3d,
    }
    export interface DisplayValueDictionary {
        [key: string]: string | any;
    }
    export enum EntityType {
        Content,
        BasicShare,
        EmbedShare,
        Metadata,
        FileTransfer,
    }
    export interface DataDictionary {
        [key: string]: any;
    }
    export interface Output {
        id?: string | undefined;
        outputFormatId?: string | undefined;
        contentId?: string | undefined;
        detail?: OutputDetailBase | undefined;
    }
    export interface OutputDetailBase {
        fileExtension?: string | undefined;
        fileName?: string | undefined;
        filePath?: string | undefined;
        fileSizeInBytes?: number | undefined;
        sha1Hash?: string | undefined;
    }
    export interface OutputDetailImage extends OutputDetailBase {
        width: number;
        height: number;
    }
    export interface OutputDetailAudio extends OutputDetailBase {
        durationInSeconds?: number | undefined;
    }
    export interface OutputDetailVideo extends OutputDetailBase {
        durationInSeconds: number;
        width: number;
        height: number;
        sprites?: Sprite[] | undefined;
    }
    export interface Sprite {
        width: number;
        height: number;
        y: number;
        x: number;
        start: string;
        end: string;
    }
    export interface OutputDetailDocument extends OutputDetailBase {
        pageCount: number;
    }
    export interface OutputDetailDefault extends OutputDetailBase {
    }
    export interface OutputDetail extends Output {
    }
    export interface Exception {
        message?: string | undefined;
        innerException?: Exception | undefined;
        stackTrace?: string | undefined;
        source?: string | undefined;
    }
    export interface PictureparkException extends Exception {
        traceLevel: TraceLevel;
        traceId?: string | undefined;
        traceJobId?: string | undefined;
        httpStatusCode: number;
    }
    export enum TraceLevel {
        Critical,
        Error,
        Warning,
        Information,
        Verbose,
    }
    export interface PictureparkBusinessException extends PictureparkException {
        customerId?: string | undefined;
        customerAlias?: string | undefined;
        userId?: string | undefined;
    }
    export interface PictureparkApplicationException extends PictureparkBusinessException {
    }
    export interface PictureparkArgumentNullException extends PictureparkBusinessException {
        argumentName?: string | undefined;
    }
    export interface ContentNotFoundException extends PictureparkBusinessException {
        contentId?: string | undefined;
    }
    export interface BusinessProcessDefinitionCreateException extends PictureparkBusinessException {
        processDefinitionIds?: string[] | undefined;
    }
    export interface BusinessProcessDefinitionNotFoundException extends PictureparkBusinessException {
        processDefinitionId?: string | undefined;
    }
    export interface BusinessProcessNotFoundException extends PictureparkBusinessException {
        businessProcessId?: string | undefined;
    }
    export interface CustomerHostNotFoundException extends PictureparkException {
        hostName?: string | undefined;
    }
    export interface CustomerNotFoundException extends PictureparkException {
        customerId?: string | undefined;
    }
    export interface DocumentNotFoundException extends PictureparkBusinessException {
        documentId?: string | undefined;
    }
    export interface DocumentVersionNotFoundException extends PictureparkBusinessException {
        documentId?: string | undefined;
        documentVersion?: string | undefined;
    }
    export interface DriveRequestException extends PictureparkBusinessException {
    }
    export interface DuplicateRightException extends PictureparkBusinessException {
        permissionSetId?: string | undefined;
    }
    export interface DuplicateDocumentException extends PictureparkBusinessException {
        documentId?: string | undefined;
        documentType?: string | undefined;
    }
    export interface DuplicateAggregatorException extends PictureparkBusinessException {
        aggregatorName?: string | undefined;
    }
    export interface FailedToLockException extends PictureparkBusinessException {
        resourceId?: string | undefined;
    }
    export interface IndexException extends PictureparkBusinessException {
        indexName?: string | undefined;
        debugInformation?: string | undefined;
    }
    export interface InvalidArgumentException extends PictureparkBusinessException {
        argumentName?: string | undefined;
        argumentValue?: string | undefined;
    }
    export interface InvalidCustomerException extends PictureparkException {
        customerId?: string | undefined;
    }
    export interface PictureparkInvalidMetadataException extends PictureparkBusinessException {
        metadataErrors?: MetadataError[] | undefined;
    }
    export interface MetadataError {
        errorType?: string | undefined;
        lineNumber: number;
        linePosition: number;
        path?: string | undefined;
        message?: string | undefined;
        schemaId?: string | undefined;
    }
    export interface InvalidStateException extends PictureparkBusinessException {
        resourceId?: string | undefined;
        state?: string | undefined;
    }
    export interface InvalidStateTransitionException extends InvalidStateException {
        transition?: string | undefined;
    }
    export interface InvalidUserOrPasswordException extends PictureparkException {
        customerId?: string | undefined;
    }
    export interface PictureparkMappingException extends PictureparkBusinessException {
        indexName?: string | undefined;
        debugInformation?: string | undefined;
    }
    export interface MessagePerformerTaskCanceledException extends PictureparkException {
        messageId?: string | undefined;
        customerId?: string | undefined;
    }
    export interface NotFoundException extends PictureparkBusinessException {
        reference?: string | undefined;
    }
    export interface ObjectStoreException extends PictureparkBusinessException {
        rowErrorMessages?: string | undefined;
        errorMessage?: string | undefined;
        message?: string | undefined;
    }
    export interface ObjectStoreResponseException extends PictureparkBusinessException {
        rowErrorMessages?: string | undefined;
        message?: string | undefined;
    }
    export interface PictureparkOperationCanceledException extends PictureparkBusinessException {
        cancellationToken?: string | undefined;
    }
    export interface OperationTimeoutException extends PictureparkBusinessException {
        messageId?: string | undefined;
    }
    export interface OutputNotFoundException extends PictureparkBusinessException {
        contentId?: string | undefined;
        outputFormatId?: string | undefined;
    }
    export interface PermissionException extends PictureparkBusinessException {
        permission?: string | undefined;
        operation?: string | undefined;
    }
    export interface QueryException extends PictureparkBusinessException {
        debugInformation?: string | undefined;
    }
    export interface RenderingException extends PictureparkBusinessException {
    }
    export interface RenderingJobItemNotSetException extends PictureparkBusinessException {
    }
    export interface ServiceProviderCreateException extends PictureparkException {
        userId?: string | undefined;
        externalId?: string | undefined;
        virtualHost?: string | undefined;
        detailErrorMessage?: string | undefined;
    }
    export interface ServiceProviderDeleteException extends PictureparkException {
        serviceProviderId?: string | undefined;
        detailedErrorMessage?: string | undefined;
    }
    export interface ServiceProviderNotFoundException extends PictureparkException {
        missingServiceProviderId?: string | undefined;
    }
    export interface TokenValidationException extends PictureparkBusinessException {
    }
    export interface UnknownException extends PictureparkBusinessException {
        exceptionDetail?: string | undefined;
    }
    export interface UserNotFoundException extends PictureparkBusinessException {
        missingUserId?: string | undefined;
    }
    export interface UserPermanentlyRemovedException extends PictureparkBusinessException {
        removedUserId?: string | undefined;
    }
    export interface UserRoleAssignedException extends PictureparkBusinessException {
        userRoleId?: string | undefined;
    }
    export interface UserRolesRightsAssignedException extends PictureparkBusinessException {
        contentPermissionSetId?: string | undefined;
    }
    export interface ContentsOwnershipTransferRequest {
        /** The content ids. */
        contentIds?: string[] | undefined;
        /** The id of user to whom the content documents have to be transfered to. */
        transferUserId?: string | undefined;
    }
    export interface BusinessProcess {
        id?: string | undefined;
        processDefinitionId?: string | undefined;
        referenceId?: string | undefined;
        referenceDocType?: string | undefined;
        notificationId?: string | undefined;
        businessProcessScope: BusinessProcessScope;
        lifeCycle: BusinessProcessLifeCylce;
        startDate: Date;
        endDate: Date;
        stateHistory?: BusinessProcessStateItem[] | undefined;
        processDefinitionName?: string | undefined;
        currentState?: string | undefined;
    }
    export enum BusinessProcessScope {
        System,
        User,
    }
    export enum BusinessProcessLifeCylce {
        Draft,
        Started,
        Ended,
        Cancelled,
    }
    export interface BusinessProcessStateItem {
        state?: string | undefined;
        timestamp: Date;
        error?: ErrorResponse | undefined;
    }
    export interface ErrorResponse {
        exception?: string | undefined;
        traceId?: string | undefined;
        traceJobId?: string | undefined;
    }
    export interface BusinessProcessBulkResponse extends BusinessProcess {
        response?: BulkResponse | undefined;
    }
    export interface BulkResponse {
        rows?: BulkResponseRow[] | undefined;
    }
    export interface BulkResponseRow {
        id?: string | undefined;
        version: number;
        error?: string | undefined;
        reason?: string | undefined;
        succeeded: boolean;
    }
    export interface ContentAggregationRequest {
        /** Limits the search by using a query string filter. The Lucene query string syntax is supported. Defaults to *. */
        searchString?: string | undefined;
        /** An optional search filter. Limits the content document result set. */
        filter?: FilterBase | undefined;
        /** Special filters used to filter down on a specific aggregated value. */
        aggregationFilters?: AggregationFilter[] | undefined;
        /** Defines the aggregation resultset. */
        aggregators?: AggregatorBase[] | undefined;
        /** Limits the simple search fields to the fields available in the specified channel. */
        channelId?: string | undefined;
        /** Defines the return language of translation values. Defaults to x-default. */
        displayLanguage?: string | undefined;
        /** Only searches the specified language values. Defaults to all metadata languages in configured within the customer's language configuration. */
        searchLanguages?: string[] | undefined;
        /** The collection id. */
        collectionId?: string | undefined;
        /** Limits the content document result set to that life cycle state. Defaults to ActiveOnly. */
        lifeCycleFilter: LifeCycleFilter;
    }
    /** The FilterBase is the base class for all filters. */
    export interface FilterBase {
    }
    export interface AndFilter extends FilterBase {
        /** Accepts all filters. */
        filters?: FilterBase[] | undefined;
    }
    export interface OrFilter extends FilterBase {
        /** Accepts all filters. */
        filters?: FilterBase[] | undefined;
    }
    export interface NotFilter extends FilterBase {
        /** Limits the result set. */
        filter?: FilterBase | undefined;
    }
    export interface DateRangeFilter extends FilterBase {
        /** The elastic search index field to execute the filter on. */
        field?: string | undefined;
        /** The date range. Supported pattern: now(+-)(int)(YMDHm). */
        range?: DateRange | undefined;
    }
    /** The date range class used in aggregators and filters. */
    export interface DateRange {
        /** Tranlsated range names. */
        names?: TranslatedStringDictionary | undefined;
        /** The from value can be a datetime string or a pattern now(+-)(int)(YMDHm). */
        from?: string | undefined;
        /** The to value can be a datetime string or a pattern now(+-)(int)(YMDHm). */
        to?: string | undefined;
    }
    export interface TranslatedStringDictionary {
        [key: string]: string | any;
    }
    export interface ExistsFilter extends FilterBase {
        /** The elastic search index field to execute the filter on. */
        field?: string | undefined;
    }
    export interface GeoBoundingBoxFilter extends FilterBase {
        /** The elastic search index field to execute the filter on. */
        field?: string | undefined;
        /** The top left longitude/latitude configuration. */
        topLeft?: GeoLocation | undefined;
        /** The bottom right longitude/latitude configuration. */
        bottomRight?: GeoLocation | undefined;
    }
    export interface GeoLocation {
        lat: number;
        lon: number;
    }
    export interface GeoDistanceFilter extends FilterBase {
        /** The elastic search index field to execute the filter on. */
        field?: string | undefined;
        /** The longitude/latitude configuration for the point of origin. */
        location?: GeoLocation | undefined;
        /** The range distance in meters. */
        distance: number;
    }
    export interface GeoDistanceRangeFilter extends FilterBase {
        /** The elastic search index field to execute the filter on. */
        field?: string | undefined;
        /** The longitude/latitude configuration for the point of origin. */
        location?: GeoLocation | undefined;
        /** The numeric range. */
        range?: NumericRange | undefined;
    }
    export interface NumericRange {
        /** Tranlsated range names. */
        names?: TranslatedStringDictionary | undefined;
        /** The from value. */
        from?: number | undefined;
        /** The to value. */
        to?: number | undefined;
    }
    export interface NestedFilter extends FilterBase {
        /** The path pointing to the nested object. */
        path?: string | undefined;
        /** Limits the result set. */
        filter?: FilterBase | undefined;
    }
    export interface NumericRangeFilter extends FilterBase {
        /** The elastic search index field to execute the filter on. */
        field?: string | undefined;
        /** The numeric range with from and to properties. */
        range?: NumericRange | undefined;
    }
    export interface PrefixFilter extends FilterBase {
        /** The elastic search index field to execute the filter on. */
        field?: string | undefined;
        /** The prefix term to filter on. */
        prefix?: string | undefined;
    }
    export interface TermFilter extends FilterBase {
        /** The elastic search index field to execute the filter on. */
        field?: string | undefined;
        /** The term to filter on. */
        term?: string | undefined;
    }
    export interface TermsFilter extends FilterBase {
        /** The elastic search index field to execute the filter on. */
        field?: string | undefined;
        /** A list of OR combined terms. */
        terms?: string[] | undefined;
    }
    /** An AggregationFilter is provided with each aggregated value. When selecting the aggregated value the aggregation filter is added to the search query and returns doucments meeting the aggregation condition. */
    export interface AggregationFilter extends FilterBase {
        /** The name of the aggregation this filter is connected to. */
        aggregationName?: string | undefined;
        /** The aggregation filter property. Available filters are TermFilter, DateRangeFilter, NumericRangeFilter and GeoDistanceRangeFilter. */
        filter?: FilterBase | undefined;
        temporaryAggregatorRequestId?: string | undefined;
    }
    export interface ChildFilter extends FilterBase {
        /** The elastic search index type to filter as a child. */
        childType?: string | undefined;
        /** The filter to apply on the child entity. It accepts all filters. */
        filter?: FilterBase | undefined;
    }
    export interface ParentFilter extends FilterBase {
        /** The elastic search index type to filter as a parent. */
        parentType?: string | undefined;
        /** The filter to apply on the child entity. It accepts all filters. */
        filter?: FilterBase | undefined;
    }
    /** The AggregatorBase is the base class for all aggregators. */
    export interface AggregatorBase {
        /** The slug name of the aggregation. Must be unique per aggregation request. */
        name?: string | undefined;
        /** The translated names of the aggregation. */
        names?: TranslatedStringDictionary | undefined;
        /** An optional aggregator list for nested aggregations. */
        aggregators?: AggregatorBase[] | undefined;
    }
    export interface DateRangeAggregator extends AggregatorBase {
        /** The elastic search index field to execute the aggregation on. */
        field?: string | undefined;
        /** A list of date ranges. Supported pattern: now(+-)(int)(YMDHm). */
        ranges?: DateRange[] | undefined;
    }
    export interface FilterAggregator extends AggregatorBase {
        /** Limits the result set. */
        filter?: FilterBase | undefined;
    }
    export interface GeoDistanceAggregator extends AggregatorBase {
        /** The elastic search index field to execute the aggregation on. */
        field?: string | undefined;
        /** The latitude/logitude configuration for the point of origin. */
        location?: GeoLocation | undefined;
        /** A list of numeric ranges in meter. */
        ranges?: NumericRange[] | undefined;
    }
    export interface NestedAggregator extends AggregatorBase {
        /** The path pointing to the nested object. */
        path?: string | undefined;
    }
    export interface NumericRangeAggregator extends AggregatorBase {
        /** The elastic search index field to execute the aggregation on. */
        field?: string | undefined;
        /** A list of numeric ranges. */
        ranges?: NumericRange[] | undefined;
    }
    export interface TermsAggregator extends AggregatorBase {
        /** The elastic search index field (not analyzed) to execute the aggregation on. */
        field?: string | undefined;
        /** The size parameter can be set to define how many term buckets should be returned out of the overall terms list. */
        size?: number | undefined;
        /** Includes values for which buckets will be created. Supports regular expression strings or arrays of exact values. */
        includes?: string[] | undefined;
        /** Excludes values for which buckets will be created. Supports regular expression strings or arrays of exact values. */
        excludes?: string[] | undefined;
    }
    export interface TermsRelationAggregator extends TermsAggregator {
        /** When aggregating on relations ids the DocumentType is needed to resolve the target item translation. */
        documentType: TermsRelationAggregatorDocumentType;
    }
    export enum TermsRelationAggregatorDocumentType {
        Content,
        ListItem,
        Schema,
        User,
        ContentPermissionSet,
    }
    export interface TermsEnumAggregator extends TermsAggregator {
        /** When aggregating on enum fields EnumType is needed to resolve the enum translation. */
        enumType?: string | undefined;
    }
    export enum LifeCycleFilter {
        ActiveOnly,
        All,
        InactiveOnly,
    }
    export interface ObjectAggregationResult {
        elapsedMilliseconds: number;
        aggregationResults?: AggregationResult[] | undefined;
    }
    export interface AggregationResult {
        name?: string | undefined;
        sumOtherDocCount?: number | undefined;
        temporaryRequestId?: string | undefined;
        aggregationResultItems?: AggregationResultItem[] | undefined;
    }
    export interface AggregationResultItem {
        name?: string | undefined;
        count: number;
        filter?: AggregationFilter | undefined;
        active: boolean;
        aggregationResults?: AggregationResult[] | undefined;
    }
    export interface ContentBatchDownloadRequest {
        contents?: ContentDownloadItem[] | undefined;
    }
    export interface ContentDownloadItem {
        contentId?: string | undefined;
        outputFormatId?: string | undefined;
    }
    export interface DownloadItem {
    }
    export interface ContentBatchDownloadItem extends DownloadItem {
        downloadToken?: string | undefined;
        downloadUrl?: string | undefined;
    }
    /** A request structure for creating a content document. */
    export interface CreateContentRequest {
        /** The id of a schema with schema type content. */
        contentSchemaId?: string | undefined;
        /** An optional id list of schemas with schema type layer. */
        layerSchemaIds?: string[] | undefined;
        /** The content data of the content document. */
        content?: any | undefined;
        /** The layer metadata of the content document. */
        metadata?: DataDictionary | undefined;
        /** An optional id list of content permission sets.  */
        contentPermissionSetIds?: string[] | undefined;
    }
    export enum ThumbnailSize {
        Small,
        Medium,
        Large,
    }
    export interface UpdateContentPermissionsRequest {
        /** The content id. */
        contentId?: string | undefined;
        /** An optional id list of content permission sets. Controls content accessibility outside of content ownership. */
        contentPermissionSetIds?: string[] | undefined;
    }
    export interface ContentSearchRequest {
        /** Limits the simple search fields to the fields available in the specified channel. */
        channelIds?: string[] | undefined;
        /** Defines the return language of translation values. Defaults to x-default. */
        displayLanguage?: string | undefined;
        /** Limits the display values included in the search response. Defaults to all display values. */
        displayPatternIds?: string[] | undefined;
        /** Only searches the specified language values. Defaults to all metadata languages of the language configuration. */
        searchLanguages?: string[] | undefined;
        /** The collection id. */
        collectionId?: string | undefined;
        /** Limits the search by using a query string filter. The Lucene query string syntax is supported. Defaults to *. */
        searchString?: string | undefined;
        /** Sorts the search results. Sorting on a not indexed field will throw an exception. */
        sort?: SortInfo[] | undefined;
        /** Defines the offset from the first result you want to fetch. Defaults to 0. */
        start: number;
        /** Limits the document count of the result set. Defaults to 30. */
        limit: number;
        /** An optional search filter. Limits the content document result set. */
        filter?: FilterBase | undefined;
        /** Limits the content document result set to that life cycle state. Defaults to ActiveOnly. */
        lifeCycleFilter: LifeCycleFilter;
        /** Limits the content document result set to specific ContentRights the user has */
        rightsFilter?: ContentRight[] | undefined;
    }
    export interface SortInfo {
        field?: string | undefined;
        direction: SortDirection;
    }
    export enum SortDirection {
        Asc,
        Desc,
    }
    export enum ContentRight {
        View,
        Edit,
        Update,
        Manage,
        Trash,
    }
    export interface BaseResultOfContent {
        totalResults: number;
        results?: Content[] | undefined;
        pageToken?: string | undefined;
    }
    export interface ContentSearchResult extends BaseResultOfContent {
        aggregationResults?: AggregationResult[] | undefined;
        elapsedMilliseconds: number;
    }
    export interface Content {
        audit?: StoreAudit | undefined;
        /** The entity type of a content document is content. */
        entityType: EntityType;
        /** The id of the schema with schema type content. */
        contentSchemaId?: string | undefined;
        /** An optional id list of schemas with schema type layer. */
        layerSchemaIds?: string[] | undefined;
        /** Contains display values of the specified language, rendered according to the content schema's display pattern configuration. */
        displayValues?: {
            [key: string]: string;
        } | undefined;
        id?: string | undefined;
    }
    export interface ContentFileUpdateRequest {
        contentId?: string | undefined;
        fileTransferId?: string | undefined;
    }
    export interface UpdateContentMetadataRequest {
        /** The content id. */
        id?: string | undefined;
        /** An id list of schemas with schema type content or layer. */
        schemaIds?: string[] | undefined;
        /** The dynamic data structure matching the field schematics of the schemas with schema type content or layer. */
        metadata?: DataDictionary | undefined;
    }
    export interface ContentDeactivationRequest {
        contentIds?: string[] | undefined;
    }
    export interface ContentReactivationRequest {
        contentIds?: string[] | undefined;
    }
    export interface MetadataValuesChangeRequestBase {
        /** A container for all change commads. */
        changeCommands?: MetadataValuesChangeCommandBase[] | undefined;
    }
    export interface ContentsMetadataUpdateRequest extends MetadataValuesChangeRequestBase {
        /** The ids of the content documents. */
        contentIds?: string[] | undefined;
    }
    /** The base class for metadata value change commands. */
    export interface MetadataValuesChangeCommandBase {
    }
    /** Updates schema values. */
    export interface MetadataValuesSchemaUpdateCommand extends MetadataValuesChangeCommandBase {
        /** The id of the schema with type content or layer to be updated. */
        schemaId?: string | undefined;
        /** The metadata values containing a set of changes. Update is additive and will not remove values. To remove complete fields use the MetadataValuesFieldRemoveCommand instead. */
        value?: DataDictionary | undefined;
    }
    /** Adds or updates schema values. */
    export interface MetadataValuesSchemaUpsertCommand extends MetadataValuesChangeCommandBase {
        /** The id of the schema with type content or layer to be updated. */
        schemaId?: string | undefined;
        /** The metadata values containing a set of changes. Update is additive and will not remove values. To remove complete fields use the MetadataValuesFieldRemoveCommand instead. */
        value?: DataDictionary | undefined;
    }
    /** Removes schema values. */
    export interface MetadataValuesSchemaRemoveCommand extends MetadataValuesChangeCommandBase {
        /** The id of the schema with type layer to be removed. */
        schemaId?: string | undefined;
    }
    /** Removes a field and its value from the schema values. */
    export interface MetadataValuesFieldRemoveCommand extends MetadataValuesChangeCommandBase {
        /** The fully qualified field name of the field to be removed, e.g. "Data.SchemaId.FieldId". */
        fieldNamespace?: string | undefined;
    }
    /** Adds a list item id reference to a multi tagbox. */
    export interface MetadataValuesSchemaItemAddCommand extends MetadataValuesChangeCommandBase {
        /** The fully qualified field name of the multi tagbox field. */
        fieldNamespace?: string | undefined;
        /** The id of the list item to be added. */
        referenceId?: string | undefined;
    }
    /** Removes a list item id reference from a multi tagbox. */
    export interface MetadataValuesSchemaItemRemoveCommand extends MetadataValuesChangeCommandBase {
        /** The fully qualified field name of the multi tagbox field. */
        fieldNamespace?: string | undefined;
        /** The id of the list item to be removed. */
        referenceId?: string | undefined;
    }
    export interface FilterContentsMetadataUpdateRequest extends MetadataValuesChangeRequestBase {
        contentSearchRequest?: ContentSearchRequest | undefined;
        totalItemsCount: number;
    }
    export interface BaseResultOfBusinessProcess {
        totalResults: number;
        results?: BusinessProcess[] | undefined;
        pageToken?: string | undefined;
    }
    export interface BusinessProcessSearchResult extends BaseResultOfBusinessProcess {
        elapsedMilliseconds: number;
    }
    export interface StartProcessRequest {
        variables?: any | undefined;
    }
    export interface SendMessageRequest {
        messageName?: string | undefined;
        variables?: any | undefined;
    }
    export interface BusinessProcessWaitResult {
        hasStateHit: boolean;
        processEnded: boolean;
        stateHit?: string | undefined;
        businessProcess?: BusinessProcess | undefined;
    }
    export interface DocumentHistorySearchRequest {
        from: Date;
        to: Date;
        start: number;
        limit: number;
        pageToken?: string | undefined;
        id?: string | undefined;
        documentId?: string | undefined;
        documentVersion: number;
        documentType?: string | undefined;
    }
    export interface DocumentHistorySearchResult {
        totalResults: number;
        results?: DocumentHistory[] | undefined;
        pageToken?: string | undefined;
        elapsedMilliseconds: number;
    }
    export interface DocumentHistory {
        id?: string | undefined;
        documentId?: string | undefined;
        documentVersion: number;
        documentType?: string | undefined;
        documentTypeContract?: string | undefined;
        documentDate: Date;
        document?: string | undefined;
        timestamp: Date;
        audit?: HistoryAudit | undefined;
        deleted: boolean;
    }
    export interface HistoryAudit {
        modificationDate: Date;
        modifiedByUser?: UserItem | undefined;
    }
    export interface DocumentHistoryDifference {
        documentId?: string | undefined;
        oldDocumentVersion: number;
        newDocumentVersion: number;
        oldValues?: any | undefined;
        newValues?: any | undefined;
    }
    /** A request structure for creating a list item document. */
    export interface ListItemCreateRequest {
        /** The content data of the list item. */
        content?: any | undefined;
        /** The id of the schema with schema type list. */
        contentSchemaId?: string | undefined;
        /** The list item id. When not provided a Guid is generated. */
        listItemId?: string | undefined;
    }
    /** The detail view item for the list item. */
    export interface ListItemDetail {
        /** The content data of the list item. */
        content?: any | undefined;
        /** The id of the schema with schema type list. */
        contentSchemaId?: string | undefined;
        /** Contains language specific display values, rendered according to the list schema's display pattern configuration. */
        displayValues?: DisplayValueDictionary | undefined;
        /** The entity type of the list item is metadata. */
        entityType: EntityType;
        /** The list item id. */
        id?: string | undefined;
    }
    export interface ListItemAggregationRequest {
        /** Limits the search by using a query string filter. The Lucene query string syntax is supported. Defaults to *. */
        searchString?: string | undefined;
        /** An optional search filter. Limits the list item result set. */
        filter?: FilterBase | undefined;
        /** Special filters used to filter down on a specific aggregated value. */
        aggregationFilters?: AggregationFilter[] | undefined;
        /** Defines the aggregation resultset. */
        aggregators?: AggregatorBase[] | undefined;
        /** Broadens the aggregation and include all schema descendant list items. */
        includeAllSchemaChildren: boolean;
        /** Limits the aggregation to list items of the provided schemas. */
        schemaIds?: string[] | undefined;
        /** Defines the return language of translation values. Defaults to x-default. */
        displayLanguage?: string | undefined;
        /** Only searches the specified language values. Defaults to all metadata languages of the language configuration. */
        searchLanguages?: string[] | undefined;
    }
    export interface ListItemSearchRequest {
        /** Limits the search by using a query string filter. The Lucene query string syntax is supported. Defaults to *. */
        searchString?: string | undefined;
        /** Sorts the search results. Sorting on a not indexed field will throw an exception. */
        sort?: SortInfo[] | undefined;
        /** Defines the offset from the first result you want to fetch. Defaults to 0. */
        start: number;
        /** Limits the document count of the result set. Defaults to 30. */
        limit: number;
        /** An optional search filter. Limits the list item result set. */
        filter?: FilterBase | undefined;
        /** Broadens the search and include all schema descendant list items. */
        includeAllSchemaChildren: boolean;
        /** Limits the search to list items of the provided schemas. */
        schemaIds?: string[] | undefined;
        /** Defines the return language of translation values. Defaults to x-default. */
        displayLanguage?: string | undefined;
        /** Limits the display values included in the search response. Defaults to all display values. */
        displayPatternIds?: string[] | undefined;
        /** Only searches the specified language values. Defaults to all metadata languages of the language configuration. */
        searchLanguages?: string[] | undefined;
        /** When set to true the content data is included in the result items. */
        includeMetadata: boolean;
    }
    export interface BaseResultOfListItem {
        totalResults: number;
        results?: ListItem[] | undefined;
        pageToken?: string | undefined;
    }
    export interface ListItemSearchResult extends BaseResultOfListItem {
    }
    export interface ListItem {
        /** The list item id. */
        id?: string | undefined;
        /** The id of the schema with schema type list. */
        contentSchemaId?: string | undefined;
        /** Contains language specific display values, rendered according to the list schema's display pattern configuration. */
        displayValues?: DisplayValueDictionary | undefined;
        /** The content data of the list item. */
        content?: DataDictionary | undefined;
        /** The entity type of a list item is metadata. */
        entityType: EntityType;
    }
    /** A request structure for updating a list item. */
    export interface ListItemUpdateRequest {
        /** The content data of the list item. */
        content?: any | undefined;
        /** The list item id. */
        id?: string | undefined;
    }
    export interface LiveStreamSearchRequest {
        from: Date;
        to: Date;
        start: number;
        limit: number;
        pageToken?: string | undefined;
    }
    export interface BaseResultOfObject {
        totalResults: number;
        results?: any[] | undefined;
        pageToken?: string | undefined;
    }
    export interface ObjectSearchResult extends BaseResultOfObject {
        elapsedMilliseconds: number;
    }
    export interface SchemaDetail {
        /** The schema id. */
        id?: string | undefined;
        /** The parent schema id. */
        parentSchemaId?: string | undefined;
        /** Types control schema usage. */
        types?: SchemaType[] | undefined;
        /** Language specific schema names. */
        names?: TranslatedStringDictionary | undefined;
        /** Language specific schema descriptions. */
        descriptions?: TranslatedStringDictionary | undefined;
        /** An optional id list of schemas with type layer. */
        layerSchemaIds?: string[] | undefined;
        /** Language specific DotLiquid templates. These templates will be resolved into display values in content documents and/or list items. */
        displayPatterns?: DisplayPattern[] | undefined;
        /** The schema fields. */
        fields?: FieldBase[] | undefined;
        /** Sorts content documents and/or list items. */
        sort?: SortInfo[] | undefined;
        /** An optional list of aggregations to group content documents and list items. */
        aggregations?: AggregatorBase[] | undefined;
        /** A simple ordering property for schemas. */
        sortOrder: number;
        /** Is true when schema is system provided. */
        system: boolean;
        /** The owner token id. Defines the schema owner. */
        ownerTokenId?: string | undefined;
        /** Opens list item document accessibility. If true the SchemaPermissionSetIds must be empty. */
        public: boolean;
        /** An optional id list of schema permission sets which control list item permissions. When not empty Public must be false. */
        schemaPermissionSetIds?: string[] | undefined;
        /** An optional id list of schemas with type content for a schema with type layer. */
        referencedInContentSchemaIds?: string[] | undefined;
        /** A complete id list of all descendant schemas. */
        descendantSchemaIds?: string[] | undefined;
        audit?: StoreAudit | undefined;
        /** The number of fields generated by the schema for the Search operations. */
        searchFieldCount?: SearchFieldCount | undefined;
    }
    export enum SchemaType {
        Content,
        Layer,
        List,
        Struct,
    }
    export interface DisplayPattern {
        id?: string | undefined;
        templateEngine: TemplateEngine;
        displayPatternType: DisplayPatternType;
        templates?: TranslatedStringDictionary | undefined;
    }
    export enum TemplateEngine {
        DotLiquid,
    }
    export enum DisplayPatternType {
        Thumbnail,
        List,
        Detail,
        Custom,
        Name,
    }
    export interface FieldBase {
        id?: string | undefined;
        indexId?: string | undefined;
        fieldNamespace?: string | undefined;
        names?: TranslatedStringDictionary | undefined;
        descriptions?: TranslatedStringDictionary | undefined;
        required: boolean;
        fixed: boolean;
        index: boolean;
        simpleSearch: boolean;
        boost: number;
    }
    export interface FieldBoolean extends FieldBase {
    }
    export interface FieldDate extends FieldBase {
        format?: string | undefined;
    }
    export interface FieldDateTime extends FieldBase {
        format?: string | undefined;
    }
    export interface FieldDateTimeArray extends FieldDateTime {
        uniqueItems: boolean;
        maximumItems?: number | undefined;
        minimumItems?: number | undefined;
    }
    export interface FieldDecimal extends FieldBase {
        pattern?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }
    export interface FieldDictionary extends FieldBase {
    }
    export interface FieldDictionaryArray extends FieldDictionary {
        uniqueItems: boolean;
        maximumItems?: number | undefined;
        minimumItems?: number | undefined;
    }
    export interface FieldGeoPoint extends FieldBase {
    }
    export interface FieldLong extends FieldBase {
        pattern?: string | undefined;
        minimum?: number | undefined;
        maximum?: number | undefined;
    }
    export interface FieldLongArray extends FieldLong {
        uniqueItems: boolean;
        maximumItems?: number | undefined;
        minimumItems?: number | undefined;
    }
    export interface FieldSingleFieldset extends FieldBase {
        schemaId?: string | undefined;
        schemaIndexingInfo?: SchemaIndexingInfo | undefined;
        maxRecursion: number;
    }
    export interface SchemaIndexingInfo {
        fields?: FieldIndexingInfo[] | undefined;
    }
    export interface FieldIndexingInfo {
        id?: string | undefined;
        index: boolean;
        simpleSearch: boolean;
        relatedSchemaIndexing?: SchemaIndexingInfo | undefined;
    }
    export interface FieldMultiFieldset extends FieldBase {
        schemaId?: string | undefined;
        schemaIndexingInfo?: SchemaIndexingInfo | undefined;
        maxRecursion: number;
        uniqueItems: boolean;
        maximumItems?: number | undefined;
        minimumItems?: number | undefined;
    }
    export interface FieldSingleTagbox extends FieldBase {
        schemaId?: string | undefined;
        schemaIndexingInfo?: SchemaIndexingInfo | undefined;
        maxRecursion: number;
        filter?: FilterBase | undefined;
        listItemCreateTemplate?: string | undefined;
    }
    export interface FieldMultiTagbox extends FieldBase {
        schemaId?: string | undefined;
        schemaIndexingInfo?: SchemaIndexingInfo | undefined;
        maxRecursion: number;
        uniqueItems: boolean;
        maximumItems?: number | undefined;
        minimumItems?: number | undefined;
        filter?: FilterBase | undefined;
        listItemCreateTemplate?: string | undefined;
    }
    export interface FieldString extends FieldBase {
        template?: string | undefined;
        keepFieldValue: boolean;
        pattern?: string | undefined;
        minimumLength?: number | undefined;
        maximumLength?: number | undefined;
        analyzers?: AnalyzerBase[] | undefined;
        multiLine: boolean;
        grantedValues?: string[] | undefined;
    }
    /** The analyzer base class. */
    export interface AnalyzerBase {
        /** Includes the analyzed field in the simple search. */
        simpleSearch: boolean;
    }
    /** An analyzer using the EdgeNGram tokenizer. https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-edgengram-tokenizer.html */
    export interface EdgeNGramAnalyzer extends AnalyzerBase {
        fieldSuffix?: string | undefined;
    }
    /** An analyzer using a language analyzer. Restricted to the languages supported by elastic search. https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-lang-analyzer.html */
    export interface LanguageAnalyzer extends AnalyzerBase {
        fieldSuffix?: string | undefined;
    }
    /** An analyzer using the NGram tokenizer. https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-ngram-tokenizer.html */
    export interface NGramAnalyzer extends AnalyzerBase {
        fieldSuffix?: string | undefined;
    }
    /** An analyzer using the path hierarchy tokenizer. https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-pathhierarchy-tokenizer.html */
    export interface PathHierarchyAnalyzer extends AnalyzerBase {
        fieldSuffix?: string | undefined;
    }
    /** An analyzer using a custom pattern tokenizer. https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-pattern-tokenizer.html */
    export interface SimpleAnalyzer extends AnalyzerBase {
        fieldSuffix?: string | undefined;
    }
    export interface FieldStringArray extends FieldString {
        uniqueItems: boolean;
        maximumItems?: number | undefined;
        minimumItems?: number | undefined;
    }
    export interface FieldTranslatedString extends FieldBase {
        pattern?: string | undefined;
        minimumLength?: number | undefined;
        maximumLength?: number | undefined;
        analyzers?: AnalyzerBase[] | undefined;
        multiLine: boolean;
        requiredMetadataLanguages?: string[] | undefined;
        template?: string | undefined;
        keepFieldValue: boolean;
    }
    export interface FieldSingleRelation extends FieldBase {
        schemaId?: string | undefined;
        schemaIndexingInfo?: SchemaIndexingInfo | undefined;
        relationTypes?: RelationType[] | undefined;
        maxRecursion: number;
    }
    export interface RelationType {
        id?: string | undefined;
        names?: TranslatedStringDictionary | undefined;
        targetContext: TargetContext;
        schemaId?: string | undefined;
        filter?: FilterBase | undefined;
    }
    export enum TargetContext {
        Content,
        ListItem,
        User,
        Custom,
    }
    export interface FieldMultiRelation extends FieldBase {
        schemaId?: string | undefined;
        schemaIndexingInfo?: SchemaIndexingInfo | undefined;
        relationTypes?: RelationType[] | undefined;
        maxRecursion: number;
        uniqueItems: boolean;
        maximumItems?: number | undefined;
        minimumItems?: number | undefined;
    }
    /** Count info of fields for search operations */
    export interface SearchFieldCount {
        /** The number of fields generated by the schema in the Search index. */
        dataField: number;
        /** The number of indexed fields generated by the schema in the Search index. */
        indexedField: number;
        /** The number of fields to be queried in the simple search for the schema. */
        simpleSearchField: number;
    }
    export interface ExistsResponse {
        exists: boolean;
    }
    export interface SchemaCreateRequest {
        /** The schema id. Can be a slug, but must be unique throughout the whole customer setup. */
        id?: string | undefined;
        /** The parent schema id. */
        parentSchemaId?: string | undefined;
        /** Types control schema usage. */
        types?: SchemaType[] | undefined;
        /** Language specific schema names. */
        names?: TranslatedStringDictionary | undefined;
        /** Language specific schema descriptions. */
        descriptions?: TranslatedStringDictionary | undefined;
        /** Language specific DotLiquid templates. These templates will be resolved into display values in content documents and/or list items. */
        displayPatterns?: DisplayPattern[] | undefined;
        /** The schema fields. Can be empty. */
        fields?: FieldBase[] | undefined;
        /** An optional list of aggregations to group content documents and/or list items. */
        aggregations?: AggregatorBase[] | undefined;
        /** A simple ordering property for schemas. */
        sortOrder: number;
        /** Sorts content documents and/or list items. */
        sort?: SortInfo[] | undefined;
        /** Opens list item document accessibility. If true SchemaPermissionSetIds must be empty. */
        public: boolean;
        /** An optional id list of schema permission sets. Control list item document permissions. When not empty Public must be false. */
        schemaPermissionSetIds?: string[] | undefined;
        /** An optional id list of schemas with type layer. */
        layerSchemaIds?: string[] | undefined;
        /** An optional id list of schemas with type content for a schema with type layer. */
        referencedInContentSchemaIds?: string[] | undefined;
    }
    export interface SchemaUpdateRequest {
        /** Language specific schema names. */
        names?: TranslatedStringDictionary | undefined;
        /** Language specific schema descriptions. */
        descriptions?: TranslatedStringDictionary | undefined;
        /** Language specific DotLiquid templates. These templates will be resolved into display values in content documents and/or list items. */
        displayPatterns?: DisplayPattern[] | undefined;
        /** The schema fields. */
        fields?: FieldBase[] | undefined;
        /** An optional list of aggregations to group content documents and list items. */
        aggregations?: AggregatorBase[] | undefined;
        /** A simple ordering property for schemas. */
        sortOrder: number;
        /** Sorts content documents and/or list items. */
        sort?: SortInfo[] | undefined;
        /** Opens schema accessibility. */
        public: boolean;
        /** An optional id list of schema permission sets which control list item permissions. When not empty Public must be false. */
        schemaPermissionSetIds?: string[] | undefined;
        /** An optional id list of schemas with type layer. */
        layerSchemaIds?: string[] | undefined;
        /** An optional id list of schemas with type content for a schema with type layer. */
        referencedInContentSchemaIds?: string[] | undefined;
        /** Types control schema usage. Schema types can only be added, but not removed. */
        types?: SchemaType[] | undefined;
    }
    export interface SchemaSearchRequest {
        /** Limits the search by using a query string filter. The Lucene query string syntax is supported. Defaults to *. */
        searchString?: string | undefined;
        /** Sorts the search results. Sorting on a not indexed field will throw an exception. */
        sort?: SortInfo[] | undefined;
        /** Defines the offset from the first result you want to fetch. Defaults to 0. */
        start: number;
        /** Limits the document count of the result set. Defaults to 30. */
        limit: number;
        /** An optional search filter. Limits the schema result set. */
        filter?: FilterBase | undefined;
    }
    export interface BaseResultOfSchema {
        totalResults: number;
        results?: Schema[] | undefined;
        pageToken?: string | undefined;
    }
    export interface SchemaSearchResult extends BaseResultOfSchema {
    }
    export interface Schema {
        /** The schema id. */
        id?: string | undefined;
        /** The parent schema id. */
        parentSchemaId?: string | undefined;
        /** Types control schema usage. */
        types?: SchemaType[] | undefined;
        /** Language specific schema names. */
        names?: TranslatedStringDictionary | undefined;
        /** Language specific schema descriptions. */
        descriptions?: TranslatedStringDictionary | undefined;
        /** An optional id list of schemas with type layer. */
        layerSchemaIds?: string[] | undefined;
        /** The count of all fields. */
        fieldCount: number;
        /** The count of all schema descendants with a immediate inheritance. */
        childCount: number;
        /** The descendancy depth of the schema. */
        level: number;
        /** Is true when schema is system provided. */
        system: boolean;
    }
    export enum UserRight {
        ManageContent,
        ManageSharings,
        ManageDrives,
        ManageTransfer,
        ManageAnalytics,
        ManageChannels,
        ManageSchemas,
        ManageUsers,
        ManageUserRoles,
        ManagePermissions,
        ManageSearchIndexes,
        ManageRecipients,
        ManageCollections,
        ManageListItems,
        ManageServiceProviders,
        ManageEmbeds,
    }
    export interface PermissionSetSearchRequest {
        searchString?: string | undefined;
        sort?: SortInfo[] | undefined;
        start: number;
        limit: number;
        filter?: FilterBase | undefined;
        rightFilter?: PermissionSetRight | undefined;
    }
    export enum PermissionSetRight {
        Apply,
    }
    export interface BaseResultOfPermissionSet {
        totalResults: number;
        results?: PermissionSet[] | undefined;
        pageToken?: string | undefined;
    }
    export interface PermissionSetSearchResult extends BaseResultOfPermissionSet {
        aggregationResults?: AggregationResult[] | undefined;
        elapsedMilliseconds: number;
    }
    export interface PermissionSet {
        /** The permission set id. */
        id?: string | undefined;
        trashed: boolean;
        /** Language specific permission set names. */
        names?: TranslatedStringDictionary | undefined;
    }
    export interface PermissionSetDetailOfContentRight {
        id?: string | undefined;
        names?: TranslatedStringDictionary | undefined;
        trashed: boolean;
        userRolesRights?: PermissionUserRoleRightsOfContentRight[] | undefined;
        userRolesPermissionSetRights?: PermissionUserRoleRightsOfPermissionSetRight[] | undefined;
        exclusive: boolean;
    }
    export interface ContentPermissionSetDetail extends PermissionSetDetailOfContentRight {
    }
    export interface PermissionUserRoleRightsOfContentRight {
        userRoleId?: string | undefined;
        names?: TranslatedStringDictionary | undefined;
        rights?: ContentRight[] | undefined;
    }
    export interface PermissionUserRoleRightsOfPermissionSetRight {
        userRoleId?: string | undefined;
        names?: TranslatedStringDictionary | undefined;
        rights?: PermissionSetRight[] | undefined;
    }
    export interface PermissionSetDetailOfMetadataRight {
        id?: string | undefined;
        names?: TranslatedStringDictionary | undefined;
        trashed: boolean;
        userRolesRights?: PermissionUserRoleRightsOfMetadataRight[] | undefined;
        userRolesPermissionSetRights?: PermissionUserRoleRightsOfPermissionSetRight[] | undefined;
        exclusive: boolean;
    }
    export interface SchemaPermissionSetDetail extends PermissionSetDetailOfMetadataRight {
    }
    export interface PermissionUserRoleRightsOfMetadataRight {
        userRoleId?: string | undefined;
        names?: TranslatedStringDictionary | undefined;
        rights?: MetadataRight[] | undefined;
    }
    export enum MetadataRight {
        View,
        Edit,
        Manage,
    }
    export interface VersionInfo {
        comments?: string | undefined;
        event?: Event | undefined;
        modifier?: string | undefined;
        modifyDate?: Date | undefined;
        version?: string | undefined;
    }
    export interface Event {
        action?: EventAction | undefined;
        changed?: string | undefined;
        instanceID?: string | undefined;
        parameters?: string | undefined;
        softwareAgent?: string | undefined;
        when?: Date | undefined;
    }
    /** Corresponds to stEvt.ActionChoice */
    export enum EventAction {
        Converted,
        Copied,
        Created,
        Cropped,
        Edited,
        Filtered,
        Formatted,
        VersionUpdated,
        Printed,
        Published,
        Managed,
        Produced,
        Resized,
        Saved,
        Derived,
    }
    export interface ShareBaseDetail {
        id?: string | undefined;
        name?: string | undefined;
        description?: string | undefined;
        audit?: StoreAudit | undefined;
        entityType: EntityType;
        contentSelections?: ContentDetail2[] | undefined;
        layerSchemaIds?: string[] | undefined;
        mailTemplateId?: string | undefined;
        expirationDate?: Date | undefined;
        template?: TemplateBase | undefined;
        outputAccess: OutputAccess;
    }
    export interface ContentDetail2 {
        contentTypeId: number;
        trashed: boolean;
        /** The entity type of a content document is content. */
        entityType: EntityType;
        /** The id of the schema with schema type content. */
        contentSchemaId?: string | undefined;
        /** An optional id list of schemas with type layer. */
        layerSchemaIds?: string[] | undefined;
        content?: DataDictionary | undefined;
        metadata?: DataDictionary | undefined;
        id?: string | undefined;
        /** An optional id list of content permission sets. Controls content accessibility outside of content ownership. */
        contentPermissionSetIds?: string[] | undefined;
        outputs?: Output[] | undefined;
        audit?: StoreAudit | undefined;
        ownerTokenId?: string | undefined;
        contentType: ContentType;
        /** Contains language specific display values, rendered according to the content schema's display pattern configuration. */
        displayValues?: DisplayValueDictionary | undefined;
    }
    export interface TemplateBase {
        width?: number | undefined;
        height?: number | undefined;
    }
    export interface CardTemplate extends TemplateBase {
        showNavigation: boolean;
        showOverlay: boolean;
        showLogo: boolean;
        showFooter: boolean;
    }
    export interface ListTemplate extends TemplateBase {
    }
    export interface BasicTemplate extends TemplateBase {
    }
    export enum OutputAccess {
        Full,
        Preview,
        None,
    }
    export interface ShareBasicDetail extends ShareBaseDetail {
        mailRecipients?: MailRecipient[] | undefined;
        internalRecipients?: InternalRecipient[] | undefined;
        languageCode?: string | undefined;
    }
    export interface MailRecipient {
        userEmail?: UserEmail | undefined;
        token?: string | undefined;
        url?: string | undefined;
    }
    export interface UserEmail {
        firstName?: string | undefined;
        lastName?: string | undefined;
        emailAddress?: string | undefined;
    }
    export interface InternalRecipient {
        recipient?: UserItem | undefined;
        token?: string | undefined;
        url?: string | undefined;
    }
    export interface ShareEmbedDetail extends ShareBaseDetail {
        embedContentItems?: EmbedContentDetail[] | undefined;
        token?: string | undefined;
        url?: string | undefined;
    }
    export interface EmbedContentDetail {
        contentId?: string | undefined;
        outputFormatId?: string | undefined;
        token?: string | undefined;
        url?: string | undefined;
    }
    export interface ShareBaseUpdateRequest {
        id?: string | undefined;
        name?: string | undefined;
        expirationDate?: Date | undefined;
        description?: string | undefined;
        shareContentItems?: ShareContent[] | undefined;
        layerSchemaIds?: string[] | undefined;
        template?: TemplateBase | undefined;
        outputAccess: OutputAccess;
    }
    export interface ShareContent {
        contentId?: string | undefined;
        outputFormatIds?: string[] | undefined;
    }
    export interface ShareBasicUpdateRequest extends ShareBaseUpdateRequest {
    }
    export interface ShareEmbedUpdateRequest extends ShareBaseUpdateRequest {
    }
    export interface BaseResultOfShareBase {
        totalResults: number;
        results?: ShareBase[] | undefined;
        pageToken?: string | undefined;
    }
    export interface ShareBase {
        name?: string | undefined;
        contentIds?: string[] | undefined;
        id?: string | undefined;
        audit?: StoreAudit | undefined;
        entityType: EntityType;
        expirationDate?: Date | undefined;
    }
    export interface ShareBasic extends ShareBase {
        mailRecipients?: MailRecipient[] | undefined;
        internalRecipients?: InternalRecipient[] | undefined;
        description?: string | undefined;
    }
    export interface ShareEmbed extends ShareBase {
    }
    export interface ShareAggregationRequest {
        searchString?: string | undefined;
        sort?: SortInfo[] | undefined;
        /** An optional search filter. Limits the content document result set. */
        filter?: FilterBase | undefined;
        aggregationFilters?: AggregationFilter[] | undefined;
        aggregators?: AggregatorBase[] | undefined;
        displayLanguage?: string | undefined;
    }
    export interface ShareBaseCreateRequest {
        name?: string | undefined;
        description?: string | undefined;
        expirationDate?: Date | undefined;
        contents?: ShareContent[] | undefined;
        layerSchemaIds?: string[] | undefined;
        template?: TemplateBase | undefined;
        outputAccess: OutputAccess;
    }
    export interface ShareBasicCreateRequest extends ShareBaseCreateRequest {
        recipientsEmail?: UserEmail[] | undefined;
        recipientsUser?: UserItem[] | undefined;
        recipientsGroup?: UserRole[] | undefined;
        languageCode?: string | undefined;
        mailTemplateId?: string | undefined;
    }
    export interface UserRole {
        /** The user role id. */
        id?: string | undefined;
        trashed: boolean;
        /** Language specific user role names. */
        names?: TranslatedStringDictionary | undefined;
        /** All user rights for this user role. */
        userRights?: UserRight[] | undefined;
    }
    export interface ShareEmbedCreateRequest extends ShareBaseCreateRequest {
    }
    export interface CreateShareResult {
        shareId?: string | undefined;
    }
    export interface ShareSearchResult extends BaseResultOfShareBase {
        elapsedMilliseconds: number;
    }
    export interface FileTransferDeleteRequest {
        transferId?: string | undefined;
        fileTransferIds?: string[] | undefined;
    }
    export interface Blacklist {
        items?: BlacklistItem[] | undefined;
    }
    export interface BlacklistItem {
        name?: string | undefined;
        match?: string | undefined;
    }
    export interface CreateTransferRequest {
        name?: string | undefined;
        transferType: TransferType;
        files?: TransferUploadFile[] | undefined;
        driveFiles?: TransferDriveFile[] | undefined;
        webLinks?: TransferWebLink[] | undefined;
        collectionName?: string | undefined;
        createCollection: boolean;
    }
    export enum TransferType {
        FileUpload,
        DriveImport,
        DriveExport,
        WebDownload,
        SchemaImport,
    }
    export interface TransferFile {
        identifier?: string | undefined;
    }
    export interface TransferUploadFile extends TransferFile {
        fileName?: string | undefined;
    }
    export interface TransferDriveFile extends TransferFile {
        driveId?: string | undefined;
        fileId?: string | undefined;
        name?: string | undefined;
        externalOutputFolderId?: string | undefined;
    }
    export interface TransferWebLink extends TransferFile {
        url?: string | undefined;
    }
    export interface Transfer {
        id?: string | undefined;
        name?: string | undefined;
        state: TransferState;
        transferType: TransferType;
        businessProcessId?: string | undefined;
        fileTransferCount: number;
    }
    export enum TransferState {
        Draft,
        UploadInProgress,
        UploadCompleted,
        ImportInProgress,
        ImportCompleted,
        UploadCancelled,
        ImportCancelled,
        ImportFailed,
        Created,
        UploadFailed,
        Deleted,
        TransferReady,
        FileDeleteInProgress,
        TransferCleanup,
    }
    export interface TransferDetail {
        id?: string | undefined;
        rev?: string | undefined;
        audit?: StoreAudit | undefined;
        name?: string | undefined;
        state: TransferState;
        businessProcessId?: string | undefined;
        transferType: TransferType;
        itemProgress: number;
        itemCount: number;
        itemsFailed: number;
        itemsCancelled: number;
        lastProgressStamp: number;
        fileTransferCount: number;
    }
    export interface FileTransferDetail {
        id?: string | undefined;
        rev?: string | undefined;
        name?: string | undefined;
        identifier?: string | undefined;
        audit?: StoreAudit | undefined;
        transferId?: string | undefined;
        state: FileTransferState;
        entityType: EntityType;
        fileMetadata?: FileMetadata | undefined;
        driveMetadata?: DriveMetadata | undefined;
        outputItems?: OutputItem[] | undefined;
        contentId?: string | undefined;
    }
    export enum FileTransferState {
        Draft,
        UploadInProgress,
        UploadCompleted,
        DataExtractionInProgress,
        DataExtractionDone,
        ImportInProgress,
        ImportCompleted,
        UploadCancelled,
        ImportCancelled,
        UploadFailed,
        ImportFailed,
        DeleteInProgress,
        Deleted,
        CleanupInProgress,
        CleanupCompleted,
    }
    export interface FileMetadata {
        names?: TranslatedStringDictionary | undefined;
        descriptions?: TranslatedStringDictionary | undefined;
        fileExtension?: string | undefined;
        fileName?: string | undefined;
        filePath?: string | undefined;
        fileSizeInBytes?: number | undefined;
        sha1Hash?: string | undefined;
        xmpMetadata?: XmpMetadata | undefined;
        exifMetadata?: ExifMetadata | undefined;
        language?: string | undefined;
    }
    export interface XmpMetadata {
        dc?: Dc | undefined;
        crs?: Crs | undefined;
        iptcCore?: IptcCore | undefined;
        iptcExt?: IptcExt | undefined;
        iptcIIM?: IptcIIM | undefined;
        lr?: Lr | undefined;
        pdf?: Pdf | undefined;
        photoshop?: Photoshop | undefined;
        plus?: Plus | undefined;
        tiff?: Tiff | undefined;
        xmp?: Xmp | undefined;
        xmpBJ?: XmpBJ | undefined;
        xmpDM?: XmpDM | undefined;
        xmpG?: XmpG | undefined;
        xmpGImg?: XmpGImg | undefined;
        xmpidq?: Xmpidq | undefined;
        xmpMM?: XmpMM | undefined;
        xmpNote?: XmpNote | undefined;
        xmpRights?: XmpRights | undefined;
        xmpTPg?: XmpTPg | undefined;
    }
    export interface Dc {
        contributor?: string[] | undefined;
        coverage?: string | undefined;
        creator?: string[] | undefined;
        date?: Date[] | undefined;
        description?: {
            [key: string]: string;
        } | undefined;
        format?: string | undefined;
        identifier?: string | undefined;
        language?: string[] | undefined;
        publisher?: string[] | undefined;
        relation?: string[] | undefined;
        rights?: {
            [key: string]: string;
        } | undefined;
        source?: string | undefined;
        subject?: string[] | undefined;
        title?: {
            [key: string]: string;
        } | undefined;
        type?: string | undefined;
    }
    export interface Crs {
        autoBrightness?: boolean | undefined;
        autoContrast?: boolean | undefined;
        autoExposure?: boolean | undefined;
        autoShadows?: boolean | undefined;
        blueHue?: number | undefined;
        blueSaturation?: number | undefined;
        brightness?: number | undefined;
        cameraProfile?: string | undefined;
        chromaticAberrationB?: number | undefined;
        chromaticAberrationR?: number | undefined;
        colorNoiseReduction?: number | undefined;
        contrast?: number | undefined;
        cropTop?: number | undefined;
        cropLeft?: number | undefined;
        cropBottom?: number | undefined;
        cropRight?: number | undefined;
        cropAngle?: number | undefined;
        cropWidth?: number | undefined;
        cropHeight?: number | undefined;
        cropUnits?: CropUnit | undefined;
        exposure?: number | undefined;
        greenHue?: number | undefined;
        greenSaturation?: number | undefined;
        hasCrop?: boolean | undefined;
        hasSettings?: boolean | undefined;
        luminanceSmoothing?: number | undefined;
        rawFileName?: string | undefined;
        redHue?: number | undefined;
        redSaturation?: number | undefined;
        saturation?: number | undefined;
        shadows?: number | undefined;
        shadowTint?: number | undefined;
        sharpness?: number | undefined;
        temperature?: number | undefined;
        tint?: number | undefined;
        toneCurve?: string[] | undefined;
        toneCurveName?: ToneCurve | undefined;
        version?: string | undefined;
        vignetteAmount?: number | undefined;
        vignetteMidpoint?: number | undefined;
        whiteBalance?: WhiteBalance | undefined;
    }
    /** Corresponds to crs.CropUnitsChoice */
    export enum CropUnit {
        Pixels,
        Inches,
        Centimeters,
    }
    /** Corresponds to crs.ToneCurveNameChoice */
    export enum ToneCurve {
        Linear,
        MediumContrast,
        StrongContrast,
        Custom,
    }
    /** Corresponds to crs.WhiteBalanceChoice */
    export enum WhiteBalance {
        AsShot,
        Auto,
        Daylight,
        Cloudy,
        Shade,
        Tungsten,
        Fluorescent,
        Flash,
        Custom,
    }
    export interface IptcCore {
        countryCode?: string | undefined;
        intellectualGenre?: string | undefined;
        scene?: string[] | undefined;
        subjectCode?: string[] | undefined;
        location?: string | undefined;
        creatorContactInfo?: CreatorContactInfo | undefined;
    }
    export interface CreatorContactInfo {
        address?: string | undefined;
        city?: string | undefined;
        country?: string | undefined;
        emailAddress?: string | undefined;
        phoneNumber?: string | undefined;
        postalCode?: string | undefined;
        region?: string | undefined;
        url?: string | undefined;
    }
    export interface IptcExt {
        additionalModelInformation?: string | undefined;
        artworkOrObject?: ArtworkOrObjectInfo[] | undefined;
        organisationInImageCode?: string[] | undefined;
        controlledVocabularyTerm?: string[] | undefined;
        locationShown?: LocationInfo[] | undefined;
        modelAge?: number[] | undefined;
        organisationInImageName?: string[] | undefined;
        personInImage?: string[] | undefined;
        digitalImageGUID?: string | undefined;
        digitalSourceType?: string | undefined;
        event?: {
            [key: string]: string;
        } | undefined;
        imageRegistryEntry?: RegistryEntryInfo[] | undefined;
        metadataLastEdited?: Date | undefined;
        locationCreated?: LocationInfo[] | undefined;
        maxAvailHeight?: number | undefined;
        maxAvailWidth?: number | undefined;
    }
    export interface ArtworkOrObjectInfo {
        copyrightNotice?: string | undefined;
        creator?: string[] | undefined;
        dateCreated?: Date | undefined;
        source?: string | undefined;
        sourceInventoryNumber?: string | undefined;
        title?: {
            [key: string]: string;
        } | undefined;
    }
    export interface LocationInfo {
        city?: string | undefined;
        countryCode?: string | undefined;
        countryName?: string | undefined;
        provinceState?: string | undefined;
        sublocation?: string | undefined;
        worldRegion?: string | undefined;
    }
    export interface RegistryEntryInfo {
        registryItemIdentifier?: string | undefined;
        registryOrganisationIdentifier?: string | undefined;
    }
    export interface IptcIIM {
        modelVersion?: number | undefined;
        destination?: string[] | undefined;
        fileFormat?: number | undefined;
        fileFormatVersion?: number | undefined;
        serviceIdentifier?: string | undefined;
        envelopeNumber?: string | undefined;
        productID?: string[] | undefined;
        envelopePriority?: number | undefined;
        dateSent?: Date | undefined;
        timeSent?: Date | undefined;
        uno?: string | undefined;
        recordVersion?: number | undefined;
        objectTypeReference?: string | undefined;
        objectAttributeReference?: string | undefined;
        objectName?: {
            [key: string]: string;
        } | undefined;
        editStatus?: string | undefined;
        urgency?: number | undefined;
        subjectReference?: string[] | undefined;
        category?: string | undefined;
        supplementalCategory?: string[] | undefined;
        fixtureIdentifier?: string | undefined;
        keywords?: string[] | undefined;
        contentLocationCode?: string[] | undefined;
        contentLocationName?: string[] | undefined;
        releaseDate?: Date | undefined;
        releaseTime?: Date | undefined;
        expirationDate?: Date | undefined;
        expirationTime?: Date | undefined;
        specialInstruction?: string | undefined;
        actionAdvised?: string | undefined;
        referenceService?: string | undefined;
        referenceDate?: Date | undefined;
        referenceNumber?: string | undefined;
        dateCreated?: Date | undefined;
        timeCreated?: Date | undefined;
        digitalCreationDate?: Date | undefined;
        digitalCreationTime?: Date | undefined;
        originatingProgram?: string | undefined;
        programVersion?: string | undefined;
        byline?: string[] | undefined;
        bylineTitle?: string | undefined;
        city?: string | undefined;
        sublocation?: string | undefined;
        provinceState?: string | undefined;
        countryPrimaryLocationCode?: string | undefined;
        countryPrimaryLocationName?: string | undefined;
        originalTransmissionReference?: string | undefined;
        headline?: string | undefined;
        credit?: string | undefined;
        source?: string | undefined;
        copyrightNotice?: {
            [key: string]: string;
        } | undefined;
        captionAbstract?: {
            [key: string]: string;
        } | undefined;
        writerEditor?: string | undefined;
        imageType?: string | undefined;
        imageOrientation?: string | undefined;
        languageIdentifier?: string | undefined;
    }
    export interface Lr {
        hierarchicalSubject?: string[] | undefined;
    }
    export interface Pdf {
        keywords?: string | undefined;
        pdfVersion?: string | undefined;
        producer?: string | undefined;
        trapped?: boolean | undefined;
    }
    export interface Photoshop {
        authorsPosition?: string | undefined;
        captionWriter?: string | undefined;
        category?: string | undefined;
        city?: string | undefined;
        colorMode?: ColorMode | undefined;
        country?: string | undefined;
        credit?: string | undefined;
        dateCreated?: Date | undefined;
        documentAncestors?: string[] | undefined;
        headline?: string | undefined;
        history?: string | undefined;
        iccProfile?: string | undefined;
        instructions?: string | undefined;
        source?: string | undefined;
        state?: string | undefined;
        supplementalCategories?: string[] | undefined;
        textLayers?: PhotoshopLayer[] | undefined;
        transmissionReference?: string | undefined;
        urgency?: number | undefined;
        legacyIPTCDigest?: string | undefined;
    }
    /** Corresponds to photoshop.ColorModeChoice */
    export enum ColorMode {
        Bitmap,
        Grayscale,
        Indexed,
        RGB,
        CMYK,
        Multichannel,
        Duotone,
        LAB,
    }
    export interface PhotoshopLayer {
        layerName?: string | undefined;
        layerText?: string | undefined;
    }
    export interface Plus {
        version?: string | undefined;
        licensee?: LicenseeInfo[] | undefined;
        licenseeID?: string | undefined;
        licenseeName?: string | undefined;
        endUser?: EndUserInfo[] | undefined;
        endUserID?: string | undefined;
        endUserName?: string | undefined;
        licensor?: LicensorInfo[] | undefined;
        licensorNotes?: {
            [key: string]: string;
        } | undefined;
        mediaSummaryCode?: string | undefined;
        licenseStartDate?: Date | undefined;
        licenseEndDate?: Date | undefined;
        mediaConstraints?: {
            [key: string]: string;
        } | undefined;
        regionConstraints?: {
            [key: string]: string;
        } | undefined;
        productOrServiceConstraints?: {
            [key: string]: string;
        } | undefined;
        imageFileConstraints?: string[] | undefined;
        imageAlterationConstraints?: string[] | undefined;
        imageDuplicationConstraints?: string | undefined;
        modelReleaseStatus?: string | undefined;
        modelReleaseID?: string[] | undefined;
        minorModelAgeDisclosure?: string | undefined;
        propertyReleaseStatus?: string | undefined;
        propertyReleaseID?: string[] | undefined;
        otherConstraints?: {
            [key: string]: string;
        } | undefined;
        creditLineRequired?: string | undefined;
        adultContentWarning?: string | undefined;
        otherLicenseRequirements?: {
            [key: string]: string;
        } | undefined;
        termsAndConditionsText?: {
            [key: string]: string;
        } | undefined;
        termsAndConditionsURL?: string | undefined;
        otherConditions?: {
            [key: string]: string;
        } | undefined;
        imageType?: string | undefined;
        licensorImageID?: string | undefined;
        fileNameAsDelivered?: string | undefined;
        imageFileFormatAsDelivered?: string | undefined;
        imageFileSizeAsDelivered?: string | undefined;
        copyrightStatus?: string | undefined;
        copyrightRegistrationNumber?: string | undefined;
        firstPublicationDate?: Date | undefined;
        copyrightOwner?: CopyrightOwnerInfo[] | undefined;
        copyrightOwnerImageID?: string | undefined;
        imageCreator?: ImageCreatorInfo[] | undefined;
        imageCreatorImageID?: string | undefined;
        imageSupplier?: ImageSupplierInfo[] | undefined;
        imageSupplierImageID?: string | undefined;
        licenseeImageID?: string | undefined;
        licenseeImageNotes?: {
            [key: string]: string;
        } | undefined;
        otherImageInfo?: {
            [key: string]: string;
        } | undefined;
        licenseID?: string | undefined;
        licensorTransactionID?: string[] | undefined;
        licenseeTransactionID?: string[] | undefined;
        licenseeProjectReference?: string[] | undefined;
        licenseTransactionDate?: Date | undefined;
        reuse?: string | undefined;
        otherLicenseDocuments?: string[] | undefined;
        otherLicenseInfo?: {
            [key: string]: string;
        } | undefined;
        custom1?: {
            [key: string]: string;
        }[] | undefined;
        custom2?: {
            [key: string]: string;
        }[] | undefined;
        custom3?: {
            [key: string]: string;
        }[] | undefined;
        custom4?: {
            [key: string]: string;
        }[] | undefined;
        custom5?: {
            [key: string]: string;
        }[] | undefined;
        custom6?: {
            [key: string]: string;
        }[] | undefined;
        custom7?: {
            [key: string]: string;
        }[] | undefined;
        custom8?: {
            [key: string]: string;
        }[] | undefined;
        custom9?: {
            [key: string]: string;
        }[] | undefined;
        custom10?: {
            [key: string]: string;
        }[] | undefined;
    }
    export interface LicenseeInfo {
        licenseeName?: string | undefined;
        licenseeID?: string | undefined;
    }
    export interface EndUserInfo {
        endUserName?: string | undefined;
        endUserID?: string | undefined;
    }
    export interface LicensorInfo {
        licensorName?: string | undefined;
        licensorID?: string | undefined;
        licensorStreetAddress?: string | undefined;
        licensorExtendedAddress?: string | undefined;
        licensorCity?: string | undefined;
        licensorRegion?: string | undefined;
        licensorPostalCode?: string | undefined;
        licensorCountry?: string | undefined;
        licensorTelephoneType1?: string | undefined;
        licensorTelephone1?: string | undefined;
        licensorTelephoneType2?: string | undefined;
        licensorTelephone2?: string | undefined;
        licensorEmail?: string | undefined;
        licensorURL?: string | undefined;
    }
    export interface CopyrightOwnerInfo {
        copyrightOwnerName?: string | undefined;
        copyrightOwnerID?: string | undefined;
    }
    export interface ImageCreatorInfo {
        imageCreatorName?: string | undefined;
        imageCreatorID?: string | undefined;
    }
    export interface ImageSupplierInfo {
        imageSupplierName?: string | undefined;
        imageSupplierID?: string | undefined;
    }
    export interface Tiff {
        artist?: string | undefined;
        bitsPerSample?: number[] | undefined;
        compression?: Compression | undefined;
        copyright?: {
            [key: string]: string;
        } | undefined;
        dateTime?: Date | undefined;
        imageDescription?: {
            [key: string]: string;
        } | undefined;
        imageLength?: number | undefined;
        imageWidth?: number | undefined;
        make?: string | undefined;
        model?: string | undefined;
        orientation?: Orientation | undefined;
        photometricInterpretation?: PhotometricInterpretation | undefined;
        planarConfiguration?: PlanarConfiguration | undefined;
        primaryChromaticities?: string[] | undefined;
        referenceBlackWhite?: string[] | undefined;
        resolutionUnit?: ResolutionUnit | undefined;
        samplesPerPixel?: number | undefined;
        software?: string | undefined;
        transferFunction?: number[] | undefined;
        whitePoint?: string[] | undefined;
        xResolution?: string | undefined;
        yResolution?: string | undefined;
        yCbCrCoefficients?: string[] | undefined;
        yCbCrPositioning?: YCbCrPositioning | undefined;
        yCbCrSubSampling?: YCbCrSubSampling | undefined;
        nativeDigest?: string | undefined;
    }
    /** Corresponds to tiff.CompressionChoice */
    export enum Compression {
        Uncompressed,
        CCITT,
        T4,
        T6,
        LZW,
        OJPEG,
        JPEG,
        Deflate,
        T82,
        T43,
        NeXT,
        ARW,
        RAW,
        SRW,
        Group3_1D,
        PackBits,
        ThunderScan,
        KDC,
        RasterPadding,
        LineWork,
        HighContinuous,
        BinaryLineWork,
        PixarFilm,
        PixarLog,
        DCS,
        JBIG,
        JPEG2000,
        NEF,
        JBIG2,
        DCR,
        PEF,
    }
    /** Corresponds to tiff.OrientationChoice */
    export enum Orientation {
        None,
        TopRowLeftColumn,
        TopRowRightColumn,
        BottomRowLeftColumn,
        BottomRowRightColumn,
        LeftRowTopColumn,
        RightRowTopColumn,
        RightRowBottomColumn,
        LeftRowBottomColumn,
        Unknown,
    }
    /** Corresponds to tiff.PhotometricInterpretationChoice */
    export enum PhotometricInterpretation {
        WhiteIsZero,
        BlackIsZero,
        RGB,
        Palette,
        TransparencyMask,
        CMYK,
        YCbCr,
        CIELab,
        ICCLab,
        ITULab,
        ColorFilterArray,
        LogL,
        LogLUV,
        LinearRaw,
    }
    /** Corresponds to tiff.PlanarConfigurationChoice */
    export enum PlanarConfiguration {
        Chunky,
        Planar,
        Line,
    }
    /** Corresponds to exif.FocalPlaneResolutionUnitChoice */
    export enum ResolutionUnit {
        None,
        Inch,
        Centimeter,
    }
    /** Corresponds to tiff.YCbCrPositioningChoice */
    export enum YCbCrPositioning {
        Centered,
        Cosited,
    }
    /** Corresponds to tiff.YCbCrSubSamplingChoice */
    export enum YCbCrSubSampling {
        YCbCr111,
        YCbCr422,
        YCbCr420,
    }
    export interface Xmp {
        baseURL?: string | undefined;
        createDate?: Date | undefined;
        creatorTool?: string | undefined;
        identifier?: string[] | undefined;
        label?: string | undefined;
        metadataDate?: Date | undefined;
        modifyDate?: Date | undefined;
        nickname?: string | undefined;
        rating?: Rating | undefined;
        thumbnails?: XmpGImg[] | undefined;
        pageInfo?: XmpGImg[] | undefined;
    }
    /** Corresponds to xmp.RatingChoice */
    export enum Rating {
        Rejected,
        Unrated,
        One,
        Two,
        Three,
        Four,
        Five,
    }
    export interface XmpGImg {
        format?: ImgFormat | undefined;
        width?: number | undefined;
        height?: number | undefined;
        image?: string | undefined;
    }
    /** Corresponds to xmpGImg.FormatChoice */
    export enum ImgFormat {
        JPEG,
    }
    export interface XmpBJ {
        jobRef?: Job[] | undefined;
    }
    export interface Job {
        id?: string | undefined;
        name?: string | undefined;
        url?: string | undefined;
    }
    export interface XmpDM {
        absPeakAudioFilePath?: string | undefined;
        artist?: string | undefined;
        album?: string | undefined;
        altTapeName?: string | undefined;
        altTimecode?: TimeCode | undefined;
        audioChannelType?: AudioChannelType | undefined;
        audioCompressor?: string | undefined;
        audioSampleRate?: number | undefined;
        audioSampleType?: AudioSampleType | undefined;
        beatSpliceParams?: BeatSpliceStretch | undefined;
        cameraAngle?: CameraAngle | undefined;
        cameraLabel?: string | undefined;
        cameraModel?: string | undefined;
        cameraMove?: CameraMove | undefined;
        client?: string | undefined;
        comment?: string | undefined;
        composer?: string | undefined;
        contributedMedia?: Media[] | undefined;
        director?: string | undefined;
        directorPhotography?: string | undefined;
        duration?: Time | undefined;
        engineer?: string | undefined;
        fileDataRate?: string | undefined;
        genre?: string | undefined;
        good?: boolean | undefined;
        instrument?: string | undefined;
        introTime?: Time | undefined;
        key?: AudioMusicalKey | undefined;
        logComment?: string | undefined;
        loop?: boolean | undefined;
        numberOfBeats?: number | undefined;
        markers?: Marker[] | undefined;
        outCue?: Time | undefined;
        projectName?: string | undefined;
        projectRef?: ProjectLink | undefined;
        pullDown?: VideoPullDown | undefined;
        relativePeakAudioFilePath?: string | undefined;
        relativeTimestamp?: Time | undefined;
        releaseDate?: Date | undefined;
        resampleParams?: ResampleStretch | undefined;
        scaleType?: AudioMusicalScaleType | undefined;
        scene?: string | undefined;
        shotDate?: Date | undefined;
        shotDay?: string | undefined;
        shotLocation?: string | undefined;
        shotName?: string | undefined;
        shotNumber?: string | undefined;
        shotSize?: ShotSize | undefined;
        speakerPlacement?: string | undefined;
        startTimecode?: TimeCode | undefined;
        stretchMode?: AudioStretchMode | undefined;
        takeNumber?: number | undefined;
        tapeName?: string | undefined;
        tempo?: number | undefined;
        timeScaleParams?: TimeScaleStretch | undefined;
        timeSignature?: TimeSignature | undefined;
        trackNumber?: number | undefined;
        tracks?: Track[] | undefined;
        videoAlphaMode?: VideoAlphaMode | undefined;
        videoAlphaPremultipleColor?: XmpG | undefined;
        videoAlphaUnityIsTransparent?: boolean | undefined;
        videoColorSpace?: VideoColorSpace | undefined;
        videoCompressor?: string | undefined;
        videoFieldOrder?: VideoFieldOrder | undefined;
        videoFrameRate?: VideoFrameRate | undefined;
        videoFrameSize?: Dimension | undefined;
        videoPixelDepth?: VideoPixelDepth | undefined;
        videoPixelAspectRatio?: string | undefined;
    }
    export interface TimeCode {
        timeFormat?: TimeFormat | undefined;
        timeValue?: string | undefined;
    }
    /** Corresponds to Timecode.TimeFormatChoice */
    export enum TimeFormat {
        Timecode24,
        Timecode25,
        Timecode2997Drop,
        Timecode2997NonDrop,
        Timecode30,
        Timecode50,
        Timecode5994Drop,
        Timecode5994NonDrop,
        Timecode60,
        Timecode23976,
    }
    /** Corresponds to xmpDM.AudioChannelTypeChoice */
    export enum AudioChannelType {
        CHANNEL_MONO,
        CHANNEL_STEREO,
        CHANNEL_5_1,
        CHANNEL_7_1,
        CHANNEL_16,
        CHANNEL_OTHER,
    }
    /** Corresponds to xmpDM.AudioSampleTypeChoice */
    export enum AudioSampleType {
        SAMPLE_8_INT,
        SAMPLE_16_INT,
        SAMPLE_24_INT,
        SAMPLE_32_INT,
        SAMPLE_32_FLOAT,
        SAMPLE_COMPRESSED,
        SAMPLE_PACKED,
        SAMPLE_OTHER,
    }
    export interface BeatSpliceStretch {
        riseInDecibel?: number | undefined;
        riseInTimeDuration?: Time | undefined;
        useFileBeatsMarker?: boolean | undefined;
    }
    export interface Time {
        scale?: string | undefined;
        value?: number | undefined;
    }
    /** Corresponds to xmpDM.CameraAngleChoice */
    export enum CameraAngle {
        ANGLE_LOW,
        ANGLE_EYE_LEVEL,
        ANGLE_HIGH,
        ANGLE_OVERHEAD_SHOT,
        ANGLE_BIRDS_EYE_SHOT,
        ANGLE_DUTCH,
        ANGLE_POV,
        ANGLE_OVER_THE_SHOULDER,
        ANGLE_REACTION_SHOT,
    }
    /** Corresponds to xmpDM.CameraMoveChoice */
    export enum CameraMove {
        MOVE_AERIAL,
        MOVE_BOOM_UP,
        MOVE_BOOM_DOWN,
        MOVE_CRANE_UP,
        MOVE_CRANE_DOWN,
        MOVE_DOLLY_IN,
        MOVE_DOLLY_OUT,
        MOVE_PAN_LEFT,
        MOVE_PAN_RIGHT,
        MOVE_PEDESTAL_UP,
        MOVE_PEDESTAL_DOWN,
        MOVE_TILT_UP,
        MOVE_TILT_DOWN,
        MOVE_TRACKING,
        MOVE_TRUCK_LEFT,
        MOVE_TRUCK_RIGHT,
        MOVE_ZOOM_IN,
        MOVE_ZOOM_OUT,
    }
    export interface Media {
        duration?: Time | undefined;
        managed?: boolean | undefined;
        path?: string | undefined;
        startTime?: Time | undefined;
        track?: string | undefined;
        webStatement?: string | undefined;
    }
    /** Corresponds to xmpDM.AudioMusicalKeyChoice */
    export enum AudioMusicalKey {
        KEY_C,
        KEY_C_SHARP,
        KEY_D,
        KEY_D_SHARP,
        KEY_E,
        KEY_F,
        KEY_F_SHARP,
        KEY_G,
        KEY_G_SHARP,
        KEY_A,
        KEY_A_SHARP,
        KEY_B,
    }
    export interface Marker {
        comment?: string | undefined;
        cuePointParams?: {
            [key: string]: string;
        } | undefined;
        cuePointType?: string | undefined;
        duration?: string | undefined;
        location?: string | undefined;
        name?: string | undefined;
        probability?: number | undefined;
        speaker?: string | undefined;
        startTime?: string | undefined;
        target?: string | undefined;
        type?: MarkerType | undefined;
    }
    /** Corresponds to Xmp.Media.Marker.TypeChoice */
    export enum MarkerType {
        Chapter,
        Cue,
        Index,
        Speech,
        Track,
    }
    export interface ProjectLink {
        path?: string | undefined;
        type?: ProjectLinkType | undefined;
    }
    /** Corresponds to Xmp.Media.ProjectLink.TypeChoice */
    export enum ProjectLinkType {
        Movie,
        Still,
        Audio,
        Custom,
    }
    /** Corresponds to xmpDM.VideoPullDownChoice */
    export enum VideoPullDown {
        PULLDOWN_WSSWW,
        PULLDOWN_SSWWW,
        PULLDOWN_SWWWS,
        PULLDOWN_WWWSS,
        PULLDOWN_WWSSW,
        PULLDOWN_WWWSW,
        PULLDOWN_WWSWW,
        PULLDOWN_WSWWW,
        PULLDOWN_SWWWW,
        PULLDOWN_WWWWS,
    }
    export interface ResampleStretch {
        quality?: Quality | undefined;
    }
    /** Corresponds to Xmp.Media.resampleStretch.QualityChoice and Xmp.Media.timeScaleStretch.QualityChoice */
    export enum Quality {
        High,
        Medium,
        Low,
    }
    /** Corresponds to xmpDM.AudioMusicalScaleTypeChoice */
    export enum AudioMusicalScaleType {
        SCALE_MAJOR,
        SCALE_MINOR,
        SCALE_BOTH,
        SCALE_NEITHER,
    }
    /** Corresponds to xmpDM.ShotSizeChoice */
    export enum ShotSize {
        SHOT_ECU,
        SHOT_MCU,
        SHOT_CU,
        SHOT_MS,
        SHOT_WS,
        SHOT_MWS,
        SHOT_EWS,
    }
    /** Corresponds to xmpDM.AudioStretchModeChoice */
    export enum AudioStretchMode {
        STRETCH_FIXED_LENGTH,
        STRETCH_TIME_SCALE,
        STRETCH_RESAMPLE,
        STRETCH_BEAT_SPLICE,
        STRETCH_HYBRID,
    }
    export interface TimeScaleStretch {
        frameOverlappingPercentage?: number | undefined;
        frameSize?: number | undefined;
        quality?: Quality | undefined;
    }
    /** Corresponds to xmpDM.TimeSignatureChoice */
    export enum TimeSignature {
        TIME_2_4,
        TIME_3_4,
        TIME_4_4,
        TIME_5_4,
        TIME_7_4,
        TIME_6_8,
        TIME_9_8,
        TIME_12_8,
        TIME_OTHER,
    }
    export interface Track {
        frameRate?: string | undefined;
        markers?: Marker[] | undefined;
        trackName?: string | undefined;
        trackType?: MarkerType | undefined;
    }
    /** Corresponds to xmpDM.VideoAlphaModeChoice */
    export enum VideoAlphaMode {
        ALPHA_MODE_STRAIGHT,
        ALPHA_MODE_PREMULTIPLIED,
        ALPHA_MODE_NONE,
    }
    export interface XmpG {
        a?: number | undefined;
        b?: number | undefined;
        l?: number | undefined;
        black?: number | undefined;
        cyan?: number | undefined;
        magenta?: number | undefined;
        yellow?: number | undefined;
        blue?: number | undefined;
        green?: number | undefined;
        red?: number | undefined;
        mode?: ColorantMode | undefined;
        swatchName?: string | undefined;
        type?: ColorantType | undefined;
    }
    /** Corresponds to xmpG.ModeChoice */
    export enum ColorantMode {
        CMYK,
        RGB,
        LAB,
    }
    /** Corresponds to xmpG.TypeChoice */
    export enum ColorantType {
        Process,
        Spot,
    }
    /** Corresponds to xmpDM.VideoColorSpaceChoice */
    export enum VideoColorSpace {
        COLOR_SPACE_SRGB,
        COLOR_SPACE_CCIR_601,
        COLOR_SPACE_CCIR_709,
    }
    /** Corresponds to xmpDM.VideoFieldOrderChoice */
    export enum VideoFieldOrder {
        FIELD_ORDER_UPPER,
        FIELD_ORDER_LOWER,
        FIELD_ORDER_PROGRESSIVE,
    }
    /** Corresponds to xmpDM.VideoFrameRateChoice */
    export enum VideoFrameRate {
        FRAME_RATE_24,
        FRAME_RATE_NTSC,
        FRAME_RATE_PAL,
    }
    export interface Dimension {
        height?: number | undefined;
        width?: number | undefined;
        unit?: Unit | undefined;
    }
    /** Corresponds to stDim.UnitChoice */
    export enum Unit {
        Inch,
        Millimeter,
        Centimeter,
        Pixel,
        Pica,
        Point,
    }
    /** Corresponds to xmpDM.VideoPixelDepthChoice */
    export enum VideoPixelDepth {
        PIXEL_DEPTH_8_INT,
        PIXEL_DEPTH_16_INT,
        PIXEL_DEPTH_24_INT,
        PIXEL_DEPTH_32_INT,
        PIXEL_DEPTH_32_FLOAT,
        PIXEL_DEPTH_OTHER,
    }
    export interface Xmpidq {
        scheme?: string | undefined;
    }
    export interface XmpMM {
        derivedFrom?: Reference | undefined;
        documentID?: string | undefined;
        history?: Event[] | undefined;
        ingredients?: Reference[] | undefined;
        instanceID?: string | undefined;
        managedFrom?: Reference | undefined;
        manager?: string | undefined;
        manageTo?: string | undefined;
        manageUI?: string | undefined;
        managerVariant?: string | undefined;
        originalDocumentID?: string | undefined;
        renditionClass?: string | undefined;
        renditionParams?: string | undefined;
        versionID?: string | undefined;
        versions?: VersionInfo[] | undefined;
    }
    export interface Reference {
        alternatePaths?: string[] | undefined;
        documentID?: string | undefined;
        filePath?: string | undefined;
        fromPart?: string | undefined;
        instanceID?: string | undefined;
        lastModifyDate?: Date | undefined;
        manager?: string | undefined;
        managerVariant?: string | undefined;
        manageTo?: string | undefined;
        manageUI?: string | undefined;
        maskMarkers?: MaskMarkers | undefined;
        originalDocumentID?: string | undefined;
        partMapping?: string | undefined;
        renditionClass?: string | undefined;
        renditionParams?: string | undefined;
        toPart?: string | undefined;
        versionID?: string | undefined;
    }
    /** Corresponds to stRef.MaskMarkersChoice */
    export enum MaskMarkers {
        All,
        None,
    }
    export interface XmpNote {
        hasExtendedXMP?: string | undefined;
    }
    export interface XmpRights {
        certificate?: string | undefined;
        marked?: boolean | undefined;
        owner?: string[] | undefined;
        usageTerms?: {
            [key: string]: string;
        } | undefined;
        webStatement?: string | undefined;
    }
    export interface XmpTPg {
        colorants?: XmpG[] | undefined;
        fonts?: Font[] | undefined;
        maxPageSize?: Dimension | undefined;
        nPages?: number | undefined;
        plateNames?: string[] | undefined;
    }
    export interface Font {
        childFontFiles?: string[] | undefined;
        composite?: boolean | undefined;
        fontFace?: string | undefined;
        fontFamily?: string | undefined;
        fontFileName?: string | undefined;
        fontName?: string | undefined;
        fontType?: FontType | undefined;
        versionString?: string | undefined;
    }
    /** Corresponds to stFnt.FontTypeChoice */
    export enum FontType {
        TrueType,
        Type1,
        OpenType,
        OpenTypeCFF,
    }
    export interface ExifMetadata {
        exif?: Exif | undefined;
        exifAux?: ExifAux | undefined;
    }
    export interface Exif {
        apertureValue?: string | undefined;
        brightnessValue?: string | undefined;
        cfaPattern?: CFAPattern | undefined;
        colorSpace?: ColorSpace | undefined;
        componentsConfiguration?: number[] | undefined;
        compressedBitsPerPixel?: string | undefined;
        contrast?: Contrast | undefined;
        customRendered?: CustomRendered | undefined;
        dateTimeOriginal?: Date | undefined;
        dateTimeDigitized?: Date | undefined;
        deviceSettingDescription?: DeviceSettings | undefined;
        digitalZoomRatio?: string | undefined;
        exifVersion?: ExifVersion | undefined;
        exposureBiasValue?: string | undefined;
        exposureIndex?: string | undefined;
        exposureMode?: ExposureMode | undefined;
        exposureProgram?: ExposureProgram | undefined;
        exposureTime?: string | undefined;
        fileSource?: FileSource | undefined;
        flash?: Flash | undefined;
        flashEnergy?: string | undefined;
        flashpixVersion?: FlashpixVersion | undefined;
        fNumber?: string | undefined;
        focalLength?: string | undefined;
        focalLengthIn35mmFilm?: number | undefined;
        focalPlaneResolutionUnit?: FocalPlaneResolutionUnit | undefined;
        focalPlaneXResolution?: string | undefined;
        focalPlaneYResolution?: string | undefined;
        gainControl?: GainControl | undefined;
        gpsAltitude?: string | undefined;
        gpsAltitudeRef?: GPSAltitudeRef | undefined;
        gpsAreaInformation?: string | undefined;
        gpsDestBearing?: string | undefined;
        gpsDestBearingRef?: GPSDestBearingRef | undefined;
        gpsDestDistance?: string | undefined;
        gpsDestDistanceRef?: GPSDestDistanceRef | undefined;
        gpsDestLatitude?: string | undefined;
        gpsDestLongitude?: string | undefined;
        gpsDifferential?: GPSDifferential | undefined;
        gpsdop?: string | undefined;
        gpsImgDirection?: string | undefined;
        gpsImgDirectionRef?: GPSImgDirectionRef | undefined;
        gpsCoordinate?: GPSCoordinate | undefined;
        gpsLatitude?: string | undefined;
        gpsLongitude?: string | undefined;
        gpsMapDatum?: string | undefined;
        gpsMeasureMode?: string | undefined;
        gpsProcessingMethod?: string | undefined;
        gpsSatellites?: string | undefined;
        gpsSpeed?: string | undefined;
        gpsSpeedRef?: GPSSpeedRef | undefined;
        gpsStatus?: GPSStatus | undefined;
        gpsTimeStamp?: Date | undefined;
        gpsTrack?: string | undefined;
        gpsTrackRef?: string | undefined;
        gpsVersionID?: string | undefined;
        imageUniqueID?: string | undefined;
        isoSpeedRatings?: number[] | undefined;
        lightSource?: LightSource | undefined;
        maxApertureValue?: string | undefined;
        meteringMode?: MeteringMode | undefined;
        oecf?: OECF | undefined;
        pixelXDimension?: number | undefined;
        pixelYDimension?: number | undefined;
        relatedSoundFile?: string | undefined;
        saturation?: Saturation | undefined;
        sceneCaptureType?: SceneCaptureType | undefined;
        sceneType?: SceneType | undefined;
        sensingMethod?: SensingMethod | undefined;
        sharpness?: Sharpness | undefined;
        shutterSpeedValue?: string | undefined;
        spatialFrequencyResponse?: SFR | undefined;
        spectralSensitivity?: string | undefined;
        subjectArea?: number[] | undefined;
        subjectDistance?: string | undefined;
        subjectDistanceRange?: SubjectDistanceRange | undefined;
        subjectLocation?: number[] | undefined;
        userComment?: {
            [key: string]: string;
        } | undefined;
        whiteBalance?: WhiteBalanceExif | undefined;
        nativeDigest?: string | undefined;
    }
    export interface CFAPattern {
        columns?: number | undefined;
        rows?: number | undefined;
        values?: number[] | undefined;
    }
    /** Corresponds to exif.ColorSpaceChoice */
    export enum ColorSpace {
        None,
        SRGB,
        AdobeRGB,
        Uncalibrated,
    }
    /** Corresponds to exif.ContrastChoice */
    export enum Contrast {
        Normal,
        Soft,
        Hard,
        Unknown,
    }
    /** Corresponds to exif.CustomRenderedChoice */
    export enum CustomRendered {
        NormalProcess,
        CustomProcess,
    }
    export interface DeviceSettings {
        columns?: number | undefined;
        rows?: number | undefined;
        settings?: string[] | undefined;
    }
    /** Corresponds to exif.ExifVersionChoice */
    export enum ExifVersion {
        V210,
        V220,
        V221,
        V222,
        V230,
    }
    /** Corresponds to exif.ExposureModeChoice */
    export enum ExposureMode {
        Auto,
        Manual,
        AutoBracket,
    }
    /** Corresponds to exif.ExposureProgramChoice */
    export enum ExposureProgram {
        Undefined,
        Manual,
        NormalProgram,
        AperturePriority,
        ShutterPriority,
        CreativeProgram,
        ActionProgram,
        PortraitMode,
        LandscapeMode,
        Unknown,
    }
    /** Corresponds to exif.FileSourceChoice */
    export enum FileSource {
        Other,
        TransparentScanner,
        ReflexScanner,
        DSC,
    }
    export interface Flash {
        fired?: boolean | undefined;
        return?: FlashReturn | undefined;
        mode?: FlashMode | undefined;
        function?: boolean | undefined;
        redEyeMode?: boolean | undefined;
    }
    /** Corresponds to Xmp.Structure.Flash.ReturnChoice */
    export enum FlashReturn {
        NoStrobeReturnDetection,
        StrobeReturnLightNotDetected,
        StrobeReturnLightDetected,
    }
    /** Corresponds to Xmp.Structure.Flash.ModeChoice */
    export enum FlashMode {
        Unknown,
        CompulsoryFlashFiring,
        CompulsoryFlashSuppression,
        AutoMode,
    }
    /** Corresponds to exif.FlashpixVersionChoice */
    export enum FlashpixVersion {
        V100,
        V101,
        V110,
    }
    /** Corresponds to exif.FocalPlaneResolutionUnitChoice */
    export enum FocalPlaneResolutionUnit {
        None,
        Inch,
        Meter,
        Centimeter,
        Millimeter,
        Micrometer,
    }
    /** Corresponds to exif.GainControlChoice */
    export enum GainControl {
        None,
        LowGainUp,
        HighGainUp,
        LowGainDown,
        HighGainDown,
    }
    /** Corresponds to exif.GPSAltitudeRefChoice */
    export enum GPSAltitudeRef {
        AboveSeaLevel,
        BelowSeaLevel,
    }
    /** Corresponds to exif.GPSDestBearingRefChoice */
    export enum GPSDestBearingRef {
        TrueDirection,
        MagneticDirection,
    }
    /** Corresponds to exif.GPSDestDistanceRefChoice */
    export enum GPSDestDistanceRef {
        Kilometers,
        Miles,
        Knots,
    }
    /** Corresponds to exif.GPSDifferentialChoice */
    export enum GPSDifferential {
        WithoutCorrection,
        WithCorrection,
    }
    /** Corresponds to exif.GPSImgDirectionRefChoice */
    export enum GPSImgDirectionRef {
        TrueDirection,
        MagneticDirection,
    }
    export interface GPSCoordinate {
        lon?: number | undefined;
        lat?: number | undefined;
    }
    /** Corresponds to exif.GPSSpeedRefChoice */
    export enum GPSSpeedRef {
        KilometersPerHour,
        MilesPerHour,
        Knots,
    }
    /** Corresponds to exif.GPSStatusChoice */
    export enum GPSStatus {
        MeasurementInProgress,
        MeasurementIsInteroperability,
    }
    /** Corresponds to exif.LightSourceChoice */
    export enum LightSource {
        Unidentified,
        Daylight,
        Fluorescent,
        Tungsten,
        Flash,
        FineWeather,
        CloudyWeather,
        Shade,
        DaylightFluorescent,
        DayWhiteFluorescent,
        CoolWhiteFluorescent,
        WhiteFluorescent,
        StandardIlluminantA,
        StandardIlluminantB,
        StandardIlluminantC,
        D55Illuminant,
        D65Illuminant,
        D75Illuminant,
        D50Illuminant,
        ISOStudioTungsten,
        Other,
    }
    /** Corresponds to exif.MeteringModeChoice */
    export enum MeteringMode {
        Unidentified,
        Average,
        CenterWeightedAverage,
        Spot,
        MultiSpot,
        Pattern,
        Partial,
        Reserved,
        Other,
    }
    export interface OECF {
        columns?: number | undefined;
        rows?: number | undefined;
        values?: string[] | undefined;
        names?: string[] | undefined;
    }
    /** Corresponds to exif.SaturationChoice */
    export enum Saturation {
        Normal,
        Low,
        High,
        Unknown,
    }
    /** Corresponds to exif.SceneCaptureTypeChoice */
    export enum SceneCaptureType {
        Standard,
        Landscape,
        Portrait,
        NightScene,
    }
    /** Corresponds to exif.SceneTypeChoice */
    export enum SceneType {
        DirectlyPhotographedImage,
    }
    /** Corresponds to exif.SensingMethodChoice */
    export enum SensingMethod {
        Undefined,
        MonochromeArea,
        OneChipColourAreaSensor,
        TwoChipColourAreaSensor,
        ThreeChipColourAreaSensor,
        ColourSequentialAreaSensor,
        MonochromeLinearArea,
        TrilinearSensor,
        ColourSequentialLinearSensor,
    }
    /** Corresponds to exif.SharpnessChoice */
    export enum Sharpness {
        Normal,
        Soft,
        Hard,
        Unknown,
    }
    export interface SFR {
        columns?: number | undefined;
        rows?: number | undefined;
        values?: string[] | undefined;
        names?: string[] | undefined;
    }
    /** Corresponds to exif.SubjectDistanceRangeChoice */
    export enum SubjectDistanceRange {
        Unknown,
        Macro,
        CloseView,
        DistantView,
    }
    /** Corresponds to exif.WhiteBalanceChoice */
    export enum WhiteBalanceExif {
        Auto,
        Manual,
        Unknown,
    }
    export interface ExifAux {
        lens?: string | undefined;
        serialNumber?: string | undefined;
    }
    export interface AudioMetadata extends FileMetadata {
        audioStreams?: AudioStream[] | undefined;
    }
    export interface AudioStream {
        bitRate?: string | undefined;
        bitRateMode?: string | undefined;
        channels?: string | undefined;
        channelPositions?: string | undefined;
        codec?: string | undefined;
        durationInSeconds?: number | undefined;
        format?: string | undefined;
        language?: string | undefined;
        resolution?: number | undefined;
        samplingRate?: number | undefined;
        streamSize?: number | undefined;
    }
    export interface DocumentMetadata extends FileMetadata {
        applicationName?: string | undefined;
        applicationVersion?: string | undefined;
        author?: string | undefined;
        creator?: string | undefined;
        publisher?: string | undefined;
        company?: string | undefined;
        documentTitle?: string | undefined;
        characterCount: number;
        characterCountWithSpaces: number;
        lineCount: number;
        pageCount: number;
        slideCount: number;
        paragraphCount: number;
        revisionNumber: number;
        titles?: string[] | undefined;
        imageTitles?: string[] | undefined;
        epsInfo?: EpsMetadata | undefined;
        embeddedFiles?: FileMetadata[] | undefined;
    }
    export interface EpsMetadata {
        isRasterized: boolean;
        widthInPoints: number;
        heightInPoints: number;
    }
    export interface ImageMetadata extends FileMetadata {
        width: number;
        height: number;
        widthInInch: number;
        heightInInch: number;
        widthInCm: number;
        heightInCm: number;
        colorSpace?: string | undefined;
        colorProfile?: string | undefined;
        bitsPerPixel: number;
        bitsPerChannel: number;
        channels?: string | undefined;
        pixelFormat?: string | undefined;
        hasAlpha: boolean;
        isIndexed: boolean;
        isExtended: boolean;
        horizontalResolution: number;
        verticalResolution: number;
        totalFrames: number;
        totalUnspecifiedTiffExtraChannels: number;
        hasExifData: boolean;
        hasIptcData: boolean;
        hasAdobeResourceData: boolean;
        hasXmpData: boolean;
        uncompressedSizeInBytes: number;
    }
    export interface VideoMetadata extends FileMetadata {
        width: number;
        height: number;
        durationInSeconds: number;
        format?: string | undefined;
        codec?: string | undefined;
        overallBitrate?: number | undefined;
        videoStreams?: VideoStream[] | undefined;
        audioStreams?: AudioStream[] | undefined;
    }
    export interface VideoStream {
        bitRate?: string | undefined;
        codec?: string | undefined;
        displayAspectRatio?: string | undefined;
        durationInSeconds: number;
        format?: string | undefined;
        frameCount?: number | undefined;
        frameRate?: number | undefined;
        height?: number | undefined;
        language?: string | undefined;
        pixelAspectRatio?: number | undefined;
        resolution?: number | undefined;
        streamSize?: number | undefined;
        width?: number | undefined;
        rotation?: number | undefined;
    }
    export interface DriveMetadata {
        location?: string | undefined;
        fileType?: string | undefined;
        audit?: DriveMetadataAudit | undefined;
        description?: string | undefined;
    }
    export interface DriveMetadataAudit {
        owner?: string | undefined;
        modified?: string | undefined;
        opened?: string | undefined;
        created?: string | undefined;
    }
    export interface OutputItem {
        id?: string | undefined;
        filePath?: string | undefined;
        outputSource: OutputSource;
    }
    export enum OutputSource {
        Rendered,
        Embedded,
    }
    export interface FileTransfer2ContentCreateRequest {
        transferId?: string | undefined;
        /** An optional id list of schemas with type layer. */
        layerSchemaIds?: string[] | undefined;
        metadata?: DataDictionary | undefined;
        /** An optional id list of content permission sets. Controls content accessibility outside of content ownership. */
        contentPermissionSetIds?: string[] | undefined;
    }
    export interface FileTransferPartial2ContentCreateRequest {
        transferId?: string | undefined;
        items?: FileTransferCreateItem[] | undefined;
    }
    export interface FileTransferCreateItem {
        fileId?: string | undefined;
        /** An optional id list of schemas with type layer. */
        layerSchemaIds?: string[] | undefined;
        metadata?: DataDictionary | undefined;
        /** An optional id list of content permission sets. Controls content accessibility outside of content ownership. */
        contentPermissionSetIds?: string[] | undefined;
    }
    export interface TransferSearchRequest {
        channel?: string | undefined;
        searchString?: string | undefined;
        sort?: SortInfo[] | undefined;
        start: number;
        limit: number;
        filter?: FilterBase | undefined;
    }
    export interface BaseResultOfTransfer {
        totalResults: number;
        results?: Transfer[] | undefined;
        pageToken?: string | undefined;
    }
    export interface TransferSearchResult extends BaseResultOfTransfer {
        elapsedMilliseconds: number;
    }
    export interface FileTransferSearchRequest {
        searchString?: string | undefined;
        sort?: SortInfo[] | undefined;
        start: number;
        limit: number;
        filter?: FilterBase | undefined;
    }
    export interface BaseResultOfFileTransfer {
        totalResults: number;
        results?: FileTransfer[] | undefined;
        pageToken?: string | undefined;
    }
    export interface FileTransferSearchResult extends BaseResultOfFileTransfer {
        elapsedMilliseconds: number;
    }
    export interface FileTransfer {
        id?: string | undefined;
        name?: string | undefined;
        identifier?: string | undefined;
        transferId?: string | undefined;
        state: FileTransferState;
        entityType: EntityType;
        contentId?: string | undefined;
    }
    export interface UserSearchRequest {
        searchString?: string | undefined;
        sort?: SortInfo[] | undefined;
        start: number;
        limit: number;
        filter?: FilterBase | undefined;
        lifeCycleFilter: LifeCycleFilter;
    }
    export interface BaseResultOfUser {
        totalResults: number;
        results?: User[] | undefined;
        pageToken?: string | undefined;
    }
    export interface UserSearchResult extends BaseResultOfUser {
        elapsedMilliseconds: number;
    }
    export interface User extends UserItem {
        userRoleIds?: string[] | undefined;
    }
    export interface UserDetail extends UserItem {
        password?: string | undefined;
        userRoles?: UserRole[] | undefined;
        comment?: string | undefined;
        languageCode?: string | undefined;
        address?: UserAddress | undefined;
        drives?: Drive[] | undefined;
        ownerTokens?: OwnerToken[] | undefined;
    }
    export interface UserAddress {
        company?: string | undefined;
        address?: string | undefined;
        alternativeAddress?: string | undefined;
        department?: string | undefined;
        zip?: string | undefined;
        city?: string | undefined;
        phone?: string | undefined;
        countryCode?: string | undefined;
    }
    export interface Drive {
        id?: string | undefined;
        name?: string | undefined;
    }
    export interface OwnerToken {
        /** The ownertoken id. */
        id?: string | undefined;
        /** The id of the user to whom this ownertoken currently belongs to. */
        userId?: string | undefined;
    }
    export interface UserProfile {
        id?: string | undefined;
        emailAddress?: string | undefined;
        firstName?: string | undefined;
        lastName?: string | undefined;
        company?: string | undefined;
        address?: string | undefined;
        alternativeAddress?: string | undefined;
        department?: string | undefined;
        zip?: string | undefined;
        city?: string | undefined;
        phone?: string | undefined;
    }
    export interface Channel {
        id?: string | undefined;
        sortOrder: number;
        /** The search index id. */
        searchIndexId?: string | undefined;
        entityType: EntityType;
        /** An id list of schemas with schema type content whose content documents should be found by the simple search.
    The search by filters and aggregations are unaffected. */
        schemaIds?: string[] | undefined;
        /** An optional search filter. Limits the content document result set on each search and aggregation request. */
        filter?: FilterBase | undefined;
        /** Language specific names. */
        names?: TranslatedStringDictionary | undefined;
        sort?: SortInfo[] | undefined;
        /** An optional list of aggregators. These aggregations are added by default on each aggregation requests. */
        aggregations?: AggregatorBase[] | undefined;
        /** An Optional list of fields. These fields extend the list of simple search fields outside the bounds of any schema field configuration. */
        extendedSimpleSearchFields?: string[] | undefined;
    }
    export interface ContentsByIdsRequest {
        contentIds?: string[] | undefined;
    }
    export interface FileParameter {
        data: any;
        fileName: string;
    }
    export interface FileResponse {
        data: Blob;
        status: number;
        fileName?: string;
        headers?: {
            [name: string]: any;
        };
    }
    export class SwaggerException extends Error {
        message: string;
        status: number;
        response: string;
        headers: {
            [key: string]: any;
        };
        result: any;
        constructor(message: string, status: number, response: string, headers: {
            [key: string]: any;
        }, result: any);
        protected isSwaggerException: boolean;
        static isSwaggerException(obj: any): obj is SwaggerException;
    }

