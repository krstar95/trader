/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const markets = $root.markets = (() => {

    /**
     * Namespace markets.
     * @exports markets
     * @namespace
     */
    const markets = {};

    markets.Price = (function() {

        /**
         * Properties of a Price.
         * @memberof markets
         * @interface IPrice
         * @property {number|Long|null} [price] Price price
         * @property {number|Long|null} [size] Price size
         * @property {google.protobuf.ITimestamp|null} [timestamp] Price timestamp
         */

        /**
         * Constructs a new Price.
         * @memberof markets
         * @classdesc Represents a Price.
         * @implements IPrice
         * @constructor
         * @param {markets.IPrice=} [properties] Properties to set
         */
        function Price(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Price price.
         * @member {number|Long} price
         * @memberof markets.Price
         * @instance
         */
        Price.prototype.price = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Price size.
         * @member {number|Long} size
         * @memberof markets.Price
         * @instance
         */
        Price.prototype.size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Price timestamp.
         * @member {google.protobuf.ITimestamp|null|undefined} timestamp
         * @memberof markets.Price
         * @instance
         */
        Price.prototype.timestamp = null;

        /**
         * Creates a new Price instance using the specified properties.
         * @function create
         * @memberof markets.Price
         * @static
         * @param {markets.IPrice=} [properties] Properties to set
         * @returns {markets.Price} Price instance
         */
        Price.create = function create(properties) {
            return new Price(properties);
        };

        /**
         * Encodes the specified Price message. Does not implicitly {@link markets.Price.verify|verify} messages.
         * @function encode
         * @memberof markets.Price
         * @static
         * @param {markets.IPrice} message Price message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Price.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.price);
            if (message.size != null && message.hasOwnProperty("size"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.size);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Price message, length delimited. Does not implicitly {@link markets.Price.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.Price
         * @static
         * @param {markets.IPrice} message Price message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Price.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Price message from the specified reader or buffer.
         * @function decode
         * @memberof markets.Price
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.Price} Price
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Price.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.Price();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.price = reader.uint64();
                    break;
                case 2:
                    message.size = reader.uint64();
                    break;
                case 3:
                    message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Price message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.Price
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.Price} Price
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Price.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Price message.
         * @function verify
         * @memberof markets.Price
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Price.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price) && !(message.price && $util.isInteger(message.price.low) && $util.isInteger(message.price.high)))
                    return "price: integer|Long expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                    return "size: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                if (error)
                    return "timestamp." + error;
            }
            return null;
        };

        /**
         * Creates a Price message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.Price
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.Price} Price
         */
        Price.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.Price)
                return object;
            let message = new $root.markets.Price();
            if (object.price != null)
                if ($util.Long)
                    (message.price = $util.Long.fromValue(object.price)).unsigned = true;
                else if (typeof object.price === "string")
                    message.price = parseInt(object.price, 10);
                else if (typeof object.price === "number")
                    message.price = object.price;
                else if (typeof object.price === "object")
                    message.price = new $util.LongBits(object.price.low >>> 0, object.price.high >>> 0).toNumber(true);
            if (object.size != null)
                if ($util.Long)
                    (message.size = $util.Long.fromValue(object.size)).unsigned = true;
                else if (typeof object.size === "string")
                    message.size = parseInt(object.size, 10);
                else if (typeof object.size === "number")
                    message.size = object.size;
                else if (typeof object.size === "object")
                    message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber(true);
            if (object.timestamp != null) {
                if (typeof object.timestamp !== "object")
                    throw TypeError(".markets.Price.timestamp: object expected");
                message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
            }
            return message;
        };

        /**
         * Creates a plain object from a Price message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.Price
         * @static
         * @param {markets.Price} message Price
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Price.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.price = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.price = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.size = options.longs === String ? "0" : 0;
                object.timestamp = null;
            }
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price === "number")
                    object.price = options.longs === String ? String(message.price) : message.price;
                else
                    object.price = options.longs === String ? $util.Long.prototype.toString.call(message.price) : options.longs === Number ? new $util.LongBits(message.price.low >>> 0, message.price.high >>> 0).toNumber(true) : message.price;
            if (message.size != null && message.hasOwnProperty("size"))
                if (typeof message.size === "number")
                    object.size = options.longs === String ? String(message.size) : message.size;
                else
                    object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber(true) : message.size;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
            return object;
        };

        /**
         * Converts this Price to JSON.
         * @function toJSON
         * @memberof markets.Price
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Price.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Price;
    })();

    markets.BBO = (function() {

        /**
         * Properties of a BBO.
         * @memberof markets
         * @interface IBBO
         * @property {markets.IPrice|null} [bidPrice] BBO bidPrice
         * @property {markets.IPrice|null} [askPrice] BBO askPrice
         * @property {markets.IPrice|null} [lastTradePrice] BBO lastTradePrice
         */

        /**
         * Constructs a new BBO.
         * @memberof markets
         * @classdesc Represents a BBO.
         * @implements IBBO
         * @constructor
         * @param {markets.IBBO=} [properties] Properties to set
         */
        function BBO(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BBO bidPrice.
         * @member {markets.IPrice|null|undefined} bidPrice
         * @memberof markets.BBO
         * @instance
         */
        BBO.prototype.bidPrice = null;

        /**
         * BBO askPrice.
         * @member {markets.IPrice|null|undefined} askPrice
         * @memberof markets.BBO
         * @instance
         */
        BBO.prototype.askPrice = null;

        /**
         * BBO lastTradePrice.
         * @member {markets.IPrice|null|undefined} lastTradePrice
         * @memberof markets.BBO
         * @instance
         */
        BBO.prototype.lastTradePrice = null;

        /**
         * Creates a new BBO instance using the specified properties.
         * @function create
         * @memberof markets.BBO
         * @static
         * @param {markets.IBBO=} [properties] Properties to set
         * @returns {markets.BBO} BBO instance
         */
        BBO.create = function create(properties) {
            return new BBO(properties);
        };

        /**
         * Encodes the specified BBO message. Does not implicitly {@link markets.BBO.verify|verify} messages.
         * @function encode
         * @memberof markets.BBO
         * @static
         * @param {markets.IBBO} message BBO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BBO.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bidPrice != null && message.hasOwnProperty("bidPrice"))
                $root.markets.Price.encode(message.bidPrice, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.askPrice != null && message.hasOwnProperty("askPrice"))
                $root.markets.Price.encode(message.askPrice, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.lastTradePrice != null && message.hasOwnProperty("lastTradePrice"))
                $root.markets.Price.encode(message.lastTradePrice, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BBO message, length delimited. Does not implicitly {@link markets.BBO.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.BBO
         * @static
         * @param {markets.IBBO} message BBO message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BBO.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BBO message from the specified reader or buffer.
         * @function decode
         * @memberof markets.BBO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.BBO} BBO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BBO.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.BBO();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.bidPrice = $root.markets.Price.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.askPrice = $root.markets.Price.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.lastTradePrice = $root.markets.Price.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BBO message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.BBO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.BBO} BBO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BBO.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BBO message.
         * @function verify
         * @memberof markets.BBO
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BBO.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bidPrice != null && message.hasOwnProperty("bidPrice")) {
                let error = $root.markets.Price.verify(message.bidPrice);
                if (error)
                    return "bidPrice." + error;
            }
            if (message.askPrice != null && message.hasOwnProperty("askPrice")) {
                let error = $root.markets.Price.verify(message.askPrice);
                if (error)
                    return "askPrice." + error;
            }
            if (message.lastTradePrice != null && message.hasOwnProperty("lastTradePrice")) {
                let error = $root.markets.Price.verify(message.lastTradePrice);
                if (error)
                    return "lastTradePrice." + error;
            }
            return null;
        };

        /**
         * Creates a BBO message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.BBO
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.BBO} BBO
         */
        BBO.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.BBO)
                return object;
            let message = new $root.markets.BBO();
            if (object.bidPrice != null) {
                if (typeof object.bidPrice !== "object")
                    throw TypeError(".markets.BBO.bidPrice: object expected");
                message.bidPrice = $root.markets.Price.fromObject(object.bidPrice);
            }
            if (object.askPrice != null) {
                if (typeof object.askPrice !== "object")
                    throw TypeError(".markets.BBO.askPrice: object expected");
                message.askPrice = $root.markets.Price.fromObject(object.askPrice);
            }
            if (object.lastTradePrice != null) {
                if (typeof object.lastTradePrice !== "object")
                    throw TypeError(".markets.BBO.lastTradePrice: object expected");
                message.lastTradePrice = $root.markets.Price.fromObject(object.lastTradePrice);
            }
            return message;
        };

        /**
         * Creates a plain object from a BBO message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.BBO
         * @static
         * @param {markets.BBO} message BBO
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BBO.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.bidPrice = null;
                object.askPrice = null;
                object.lastTradePrice = null;
            }
            if (message.bidPrice != null && message.hasOwnProperty("bidPrice"))
                object.bidPrice = $root.markets.Price.toObject(message.bidPrice, options);
            if (message.askPrice != null && message.hasOwnProperty("askPrice"))
                object.askPrice = $root.markets.Price.toObject(message.askPrice, options);
            if (message.lastTradePrice != null && message.hasOwnProperty("lastTradePrice"))
                object.lastTradePrice = $root.markets.Price.toObject(message.lastTradePrice, options);
            return object;
        };

        /**
         * Converts this BBO to JSON.
         * @function toJSON
         * @memberof markets.BBO
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BBO.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BBO;
    })();

    /**
     * Side enum.
     * @name markets.Side
     * @enum {string}
     * @property {number} BUY=0 BUY value
     * @property {number} SELL=1 SELL value
     */
    markets.Side = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BUY"] = 0;
        values[valuesById[1] = "SELL"] = 1;
        return values;
    })();

    markets.Trade = (function() {

        /**
         * Properties of a Trade.
         * @memberof markets
         * @interface ITrade
         * @property {google.protobuf.ITimestamp|null} [timestamp] Trade timestamp
         * @property {number|Long|null} [price] Trade price
         * @property {number|Long|null} [size] Trade size
         * @property {markets.Side|null} [taker] Trade taker
         * @property {number|null} [bidID] Trade bidID
         * @property {number|null} [askID] Trade askID
         * @property {number|null} [buyer] Trade buyer
         * @property {number|null} [seller] Trade seller
         * @property {markets.IPrice|null} [tradePrice] Trade tradePrice
         */

        /**
         * Constructs a new Trade.
         * @memberof markets
         * @classdesc Represents a Trade.
         * @implements ITrade
         * @constructor
         * @param {markets.ITrade=} [properties] Properties to set
         */
        function Trade(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Trade timestamp.
         * @member {google.protobuf.ITimestamp|null|undefined} timestamp
         * @memberof markets.Trade
         * @instance
         */
        Trade.prototype.timestamp = null;

        /**
         * Trade price.
         * @member {number|Long} price
         * @memberof markets.Trade
         * @instance
         */
        Trade.prototype.price = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Trade size.
         * @member {number|Long} size
         * @memberof markets.Trade
         * @instance
         */
        Trade.prototype.size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Trade taker.
         * @member {markets.Side} taker
         * @memberof markets.Trade
         * @instance
         */
        Trade.prototype.taker = 0;

        /**
         * Trade bidID.
         * @member {number} bidID
         * @memberof markets.Trade
         * @instance
         */
        Trade.prototype.bidID = 0;

        /**
         * Trade askID.
         * @member {number} askID
         * @memberof markets.Trade
         * @instance
         */
        Trade.prototype.askID = 0;

        /**
         * Trade buyer.
         * @member {number} buyer
         * @memberof markets.Trade
         * @instance
         */
        Trade.prototype.buyer = 0;

        /**
         * Trade seller.
         * @member {number} seller
         * @memberof markets.Trade
         * @instance
         */
        Trade.prototype.seller = 0;

        /**
         * Trade tradePrice.
         * @member {markets.IPrice|null|undefined} tradePrice
         * @memberof markets.Trade
         * @instance
         */
        Trade.prototype.tradePrice = null;

        /**
         * Creates a new Trade instance using the specified properties.
         * @function create
         * @memberof markets.Trade
         * @static
         * @param {markets.ITrade=} [properties] Properties to set
         * @returns {markets.Trade} Trade instance
         */
        Trade.create = function create(properties) {
            return new Trade(properties);
        };

        /**
         * Encodes the specified Trade message. Does not implicitly {@link markets.Trade.verify|verify} messages.
         * @function encode
         * @memberof markets.Trade
         * @static
         * @param {markets.ITrade} message Trade message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Trade.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tradePrice != null && message.hasOwnProperty("tradePrice"))
                $root.markets.Price.encode(message.tradePrice, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.taker != null && message.hasOwnProperty("taker"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.taker);
            if (message.bidID != null && message.hasOwnProperty("bidID"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.bidID);
            if (message.askID != null && message.hasOwnProperty("askID"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.askID);
            if (message.buyer != null && message.hasOwnProperty("buyer"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.buyer);
            if (message.seller != null && message.hasOwnProperty("seller"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.seller);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.price);
            if (message.size != null && message.hasOwnProperty("size"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.size);
            return writer;
        };

        /**
         * Encodes the specified Trade message, length delimited. Does not implicitly {@link markets.Trade.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.Trade
         * @static
         * @param {markets.ITrade} message Trade message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Trade.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Trade message from the specified reader or buffer.
         * @function decode
         * @memberof markets.Trade
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.Trade} Trade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Trade.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.Trade();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 7:
                    message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.price = reader.uint64();
                    break;
                case 9:
                    message.size = reader.uint64();
                    break;
                case 2:
                    message.taker = reader.int32();
                    break;
                case 3:
                    message.bidID = reader.uint32();
                    break;
                case 4:
                    message.askID = reader.uint32();
                    break;
                case 5:
                    message.buyer = reader.uint32();
                    break;
                case 6:
                    message.seller = reader.uint32();
                    break;
                case 1:
                    message.tradePrice = $root.markets.Price.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Trade message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.Trade
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.Trade} Trade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Trade.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Trade message.
         * @function verify
         * @memberof markets.Trade
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Trade.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                if (error)
                    return "timestamp." + error;
            }
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price) && !(message.price && $util.isInteger(message.price.low) && $util.isInteger(message.price.high)))
                    return "price: integer|Long expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                    return "size: integer|Long expected";
            if (message.taker != null && message.hasOwnProperty("taker"))
                switch (message.taker) {
                default:
                    return "taker: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.bidID != null && message.hasOwnProperty("bidID"))
                if (!$util.isInteger(message.bidID))
                    return "bidID: integer expected";
            if (message.askID != null && message.hasOwnProperty("askID"))
                if (!$util.isInteger(message.askID))
                    return "askID: integer expected";
            if (message.buyer != null && message.hasOwnProperty("buyer"))
                if (!$util.isInteger(message.buyer))
                    return "buyer: integer expected";
            if (message.seller != null && message.hasOwnProperty("seller"))
                if (!$util.isInteger(message.seller))
                    return "seller: integer expected";
            if (message.tradePrice != null && message.hasOwnProperty("tradePrice")) {
                let error = $root.markets.Price.verify(message.tradePrice);
                if (error)
                    return "tradePrice." + error;
            }
            return null;
        };

        /**
         * Creates a Trade message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.Trade
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.Trade} Trade
         */
        Trade.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.Trade)
                return object;
            let message = new $root.markets.Trade();
            if (object.timestamp != null) {
                if (typeof object.timestamp !== "object")
                    throw TypeError(".markets.Trade.timestamp: object expected");
                message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
            }
            if (object.price != null)
                if ($util.Long)
                    (message.price = $util.Long.fromValue(object.price)).unsigned = true;
                else if (typeof object.price === "string")
                    message.price = parseInt(object.price, 10);
                else if (typeof object.price === "number")
                    message.price = object.price;
                else if (typeof object.price === "object")
                    message.price = new $util.LongBits(object.price.low >>> 0, object.price.high >>> 0).toNumber(true);
            if (object.size != null)
                if ($util.Long)
                    (message.size = $util.Long.fromValue(object.size)).unsigned = true;
                else if (typeof object.size === "string")
                    message.size = parseInt(object.size, 10);
                else if (typeof object.size === "number")
                    message.size = object.size;
                else if (typeof object.size === "object")
                    message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber(true);
            switch (object.taker) {
            case "BUY":
            case 0:
                message.taker = 0;
                break;
            case "SELL":
            case 1:
                message.taker = 1;
                break;
            }
            if (object.bidID != null)
                message.bidID = object.bidID >>> 0;
            if (object.askID != null)
                message.askID = object.askID >>> 0;
            if (object.buyer != null)
                message.buyer = object.buyer >>> 0;
            if (object.seller != null)
                message.seller = object.seller >>> 0;
            if (object.tradePrice != null) {
                if (typeof object.tradePrice !== "object")
                    throw TypeError(".markets.Trade.tradePrice: object expected");
                message.tradePrice = $root.markets.Price.fromObject(object.tradePrice);
            }
            return message;
        };

        /**
         * Creates a plain object from a Trade message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.Trade
         * @static
         * @param {markets.Trade} message Trade
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Trade.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.tradePrice = null;
                object.taker = options.enums === String ? "BUY" : 0;
                object.bidID = 0;
                object.askID = 0;
                object.buyer = 0;
                object.seller = 0;
                object.timestamp = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.price = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.price = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.size = options.longs === String ? "0" : 0;
            }
            if (message.tradePrice != null && message.hasOwnProperty("tradePrice"))
                object.tradePrice = $root.markets.Price.toObject(message.tradePrice, options);
            if (message.taker != null && message.hasOwnProperty("taker"))
                object.taker = options.enums === String ? $root.markets.Side[message.taker] : message.taker;
            if (message.bidID != null && message.hasOwnProperty("bidID"))
                object.bidID = message.bidID;
            if (message.askID != null && message.hasOwnProperty("askID"))
                object.askID = message.askID;
            if (message.buyer != null && message.hasOwnProperty("buyer"))
                object.buyer = message.buyer;
            if (message.seller != null && message.hasOwnProperty("seller"))
                object.seller = message.seller;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price === "number")
                    object.price = options.longs === String ? String(message.price) : message.price;
                else
                    object.price = options.longs === String ? $util.Long.prototype.toString.call(message.price) : options.longs === Number ? new $util.LongBits(message.price.low >>> 0, message.price.high >>> 0).toNumber(true) : message.price;
            if (message.size != null && message.hasOwnProperty("size"))
                if (typeof message.size === "number")
                    object.size = options.longs === String ? String(message.size) : message.size;
                else
                    object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber(true) : message.size;
            return object;
        };

        /**
         * Converts this Trade to JSON.
         * @function toJSON
         * @memberof markets.Trade
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Trade.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Trade;
    })();

    markets.Trades = (function() {

        /**
         * Properties of a Trades.
         * @memberof markets
         * @interface ITrades
         * @property {Array.<markets.ITrade>|null} [trades] Trades trades
         * @property {string|null} [market] Trades market
         */

        /**
         * Constructs a new Trades.
         * @memberof markets
         * @classdesc Represents a Trades.
         * @implements ITrades
         * @constructor
         * @param {markets.ITrades=} [properties] Properties to set
         */
        function Trades(properties) {
            this.trades = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Trades trades.
         * @member {Array.<markets.ITrade>} trades
         * @memberof markets.Trades
         * @instance
         */
        Trades.prototype.trades = $util.emptyArray;

        /**
         * Trades market.
         * @member {string} market
         * @memberof markets.Trades
         * @instance
         */
        Trades.prototype.market = "";

        /**
         * Creates a new Trades instance using the specified properties.
         * @function create
         * @memberof markets.Trades
         * @static
         * @param {markets.ITrades=} [properties] Properties to set
         * @returns {markets.Trades} Trades instance
         */
        Trades.create = function create(properties) {
            return new Trades(properties);
        };

        /**
         * Encodes the specified Trades message. Does not implicitly {@link markets.Trades.verify|verify} messages.
         * @function encode
         * @memberof markets.Trades
         * @static
         * @param {markets.ITrades} message Trades message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Trades.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.trades != null && message.trades.length)
                for (let i = 0; i < message.trades.length; ++i)
                    $root.markets.Trade.encode(message.trades[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.market != null && message.hasOwnProperty("market"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.market);
            return writer;
        };

        /**
         * Encodes the specified Trades message, length delimited. Does not implicitly {@link markets.Trades.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.Trades
         * @static
         * @param {markets.ITrades} message Trades message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Trades.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Trades message from the specified reader or buffer.
         * @function decode
         * @memberof markets.Trades
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.Trades} Trades
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Trades.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.Trades();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.trades && message.trades.length))
                        message.trades = [];
                    message.trades.push($root.markets.Trade.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.market = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Trades message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.Trades
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.Trades} Trades
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Trades.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Trades message.
         * @function verify
         * @memberof markets.Trades
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Trades.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.trades != null && message.hasOwnProperty("trades")) {
                if (!Array.isArray(message.trades))
                    return "trades: array expected";
                for (let i = 0; i < message.trades.length; ++i) {
                    let error = $root.markets.Trade.verify(message.trades[i]);
                    if (error)
                        return "trades." + error;
                }
            }
            if (message.market != null && message.hasOwnProperty("market"))
                if (!$util.isString(message.market))
                    return "market: string expected";
            return null;
        };

        /**
         * Creates a Trades message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.Trades
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.Trades} Trades
         */
        Trades.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.Trades)
                return object;
            let message = new $root.markets.Trades();
            if (object.trades) {
                if (!Array.isArray(object.trades))
                    throw TypeError(".markets.Trades.trades: array expected");
                message.trades = [];
                for (let i = 0; i < object.trades.length; ++i) {
                    if (typeof object.trades[i] !== "object")
                        throw TypeError(".markets.Trades.trades: object expected");
                    message.trades[i] = $root.markets.Trade.fromObject(object.trades[i]);
                }
            }
            if (object.market != null)
                message.market = String(object.market);
            return message;
        };

        /**
         * Creates a plain object from a Trades message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.Trades
         * @static
         * @param {markets.Trades} message Trades
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Trades.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.trades = [];
            if (options.defaults)
                object.market = "";
            if (message.trades && message.trades.length) {
                object.trades = [];
                for (let j = 0; j < message.trades.length; ++j)
                    object.trades[j] = $root.markets.Trade.toObject(message.trades[j], options);
            }
            if (message.market != null && message.hasOwnProperty("market"))
                object.market = message.market;
            return object;
        };

        /**
         * Converts this Trades to JSON.
         * @function toJSON
         * @memberof markets.Trades
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Trades.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Trades;
    })();

    /**
     * OrderType enum.
     * @name markets.OrderType
     * @enum {string}
     * @property {number} GTC=0 GTC value
     * @property {number} AON=1 AON value
     * @property {number} IOC=2 IOC value
     * @property {number} FOK=3 FOK value
     * @property {number} STOP=4 STOP value
     */
    markets.OrderType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GTC"] = 0;
        values[valuesById[1] = "AON"] = 1;
        values[valuesById[2] = "IOC"] = 2;
        values[valuesById[3] = "FOK"] = 3;
        values[valuesById[4] = "STOP"] = 4;
        return values;
    })();

    /**
     * ModifyType enum.
     * @name markets.ModifyType
     * @enum {string}
     * @property {number} PRICE=0 PRICE value
     * @property {number} QUANTITY=1 QUANTITY value
     * @property {number} PRICE_AND_QUANTITY=2 PRICE_AND_QUANTITY value
     */
    markets.ModifyType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PRICE"] = 0;
        values[valuesById[1] = "QUANTITY"] = 1;
        values[valuesById[2] = "PRICE_AND_QUANTITY"] = 2;
        return values;
    })();

    markets.NewOrder = (function() {

        /**
         * Properties of a NewOrder.
         * @memberof markets
         * @interface INewOrder
         * @property {string|null} [clOrdID] NewOrder clOrdID
         * @property {number|null} [orderIDParent] NewOrder orderIDParent
         * @property {markets.Side|null} [side] NewOrder side
         * @property {markets.OrderType|null} [orderType] NewOrder orderType
         * @property {number|Long|null} [price] NewOrder price
         * @property {number|Long|null} [quantity] NewOrder quantity
         * @property {number|Long|null} [stopPrice] NewOrder stopPrice
         * @property {number|null} [orderID] NewOrder orderID
         * @property {google.protobuf.ITimestamp|null} [timestamp] NewOrder timestamp
         * @property {number|Long|null} [held] NewOrder held
         */

        /**
         * Constructs a new NewOrder.
         * @memberof markets
         * @classdesc Represents a NewOrder.
         * @implements INewOrder
         * @constructor
         * @param {markets.INewOrder=} [properties] Properties to set
         */
        function NewOrder(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NewOrder clOrdID.
         * @member {string} clOrdID
         * @memberof markets.NewOrder
         * @instance
         */
        NewOrder.prototype.clOrdID = "";

        /**
         * NewOrder orderIDParent.
         * @member {number} orderIDParent
         * @memberof markets.NewOrder
         * @instance
         */
        NewOrder.prototype.orderIDParent = 0;

        /**
         * NewOrder side.
         * @member {markets.Side} side
         * @memberof markets.NewOrder
         * @instance
         */
        NewOrder.prototype.side = 0;

        /**
         * NewOrder orderType.
         * @member {markets.OrderType} orderType
         * @memberof markets.NewOrder
         * @instance
         */
        NewOrder.prototype.orderType = 0;

        /**
         * NewOrder price.
         * @member {number|Long} price
         * @memberof markets.NewOrder
         * @instance
         */
        NewOrder.prototype.price = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * NewOrder quantity.
         * @member {number|Long} quantity
         * @memberof markets.NewOrder
         * @instance
         */
        NewOrder.prototype.quantity = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * NewOrder stopPrice.
         * @member {number|Long} stopPrice
         * @memberof markets.NewOrder
         * @instance
         */
        NewOrder.prototype.stopPrice = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * NewOrder orderID.
         * @member {number} orderID
         * @memberof markets.NewOrder
         * @instance
         */
        NewOrder.prototype.orderID = 0;

        /**
         * NewOrder timestamp.
         * @member {google.protobuf.ITimestamp|null|undefined} timestamp
         * @memberof markets.NewOrder
         * @instance
         */
        NewOrder.prototype.timestamp = null;

        /**
         * NewOrder held.
         * @member {number|Long} held
         * @memberof markets.NewOrder
         * @instance
         */
        NewOrder.prototype.held = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new NewOrder instance using the specified properties.
         * @function create
         * @memberof markets.NewOrder
         * @static
         * @param {markets.INewOrder=} [properties] Properties to set
         * @returns {markets.NewOrder} NewOrder instance
         */
        NewOrder.create = function create(properties) {
            return new NewOrder(properties);
        };

        /**
         * Encodes the specified NewOrder message. Does not implicitly {@link markets.NewOrder.verify|verify} messages.
         * @function encode
         * @memberof markets.NewOrder
         * @static
         * @param {markets.INewOrder} message NewOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clOrdID != null && message.hasOwnProperty("clOrdID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.clOrdID);
            if (message.orderIDParent != null && message.hasOwnProperty("orderIDParent"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.orderIDParent);
            if (message.side != null && message.hasOwnProperty("side"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.side);
            if (message.orderType != null && message.hasOwnProperty("orderType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.orderType);
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.price);
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.quantity);
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.stopPrice);
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.orderID);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.held != null && message.hasOwnProperty("held"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.held);
            return writer;
        };

        /**
         * Encodes the specified NewOrder message, length delimited. Does not implicitly {@link markets.NewOrder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.NewOrder
         * @static
         * @param {markets.INewOrder} message NewOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NewOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NewOrder message from the specified reader or buffer.
         * @function decode
         * @memberof markets.NewOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.NewOrder} NewOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewOrder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.NewOrder();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clOrdID = reader.string();
                    break;
                case 2:
                    message.orderIDParent = reader.uint32();
                    break;
                case 3:
                    message.side = reader.int32();
                    break;
                case 4:
                    message.orderType = reader.int32();
                    break;
                case 5:
                    message.price = reader.uint64();
                    break;
                case 6:
                    message.quantity = reader.uint64();
                    break;
                case 7:
                    message.stopPrice = reader.uint64();
                    break;
                case 8:
                    message.orderID = reader.uint32();
                    break;
                case 9:
                    message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.held = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NewOrder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.NewOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.NewOrder} NewOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NewOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NewOrder message.
         * @function verify
         * @memberof markets.NewOrder
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NewOrder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clOrdID != null && message.hasOwnProperty("clOrdID"))
                if (!$util.isString(message.clOrdID))
                    return "clOrdID: string expected";
            if (message.orderIDParent != null && message.hasOwnProperty("orderIDParent"))
                if (!$util.isInteger(message.orderIDParent))
                    return "orderIDParent: integer expected";
            if (message.side != null && message.hasOwnProperty("side"))
                switch (message.side) {
                default:
                    return "side: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.orderType != null && message.hasOwnProperty("orderType"))
                switch (message.orderType) {
                default:
                    return "orderType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price) && !(message.price && $util.isInteger(message.price.low) && $util.isInteger(message.price.high)))
                    return "price: integer|Long expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity) && !(message.quantity && $util.isInteger(message.quantity.low) && $util.isInteger(message.quantity.high)))
                    return "quantity: integer|Long expected";
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                if (!$util.isInteger(message.stopPrice) && !(message.stopPrice && $util.isInteger(message.stopPrice.low) && $util.isInteger(message.stopPrice.high)))
                    return "stopPrice: integer|Long expected";
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                if (!$util.isInteger(message.orderID))
                    return "orderID: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                if (error)
                    return "timestamp." + error;
            }
            if (message.held != null && message.hasOwnProperty("held"))
                if (!$util.isInteger(message.held) && !(message.held && $util.isInteger(message.held.low) && $util.isInteger(message.held.high)))
                    return "held: integer|Long expected";
            return null;
        };

        /**
         * Creates a NewOrder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.NewOrder
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.NewOrder} NewOrder
         */
        NewOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.NewOrder)
                return object;
            let message = new $root.markets.NewOrder();
            if (object.clOrdID != null)
                message.clOrdID = String(object.clOrdID);
            if (object.orderIDParent != null)
                message.orderIDParent = object.orderIDParent >>> 0;
            switch (object.side) {
            case "BUY":
            case 0:
                message.side = 0;
                break;
            case "SELL":
            case 1:
                message.side = 1;
                break;
            }
            switch (object.orderType) {
            case "GTC":
            case 0:
                message.orderType = 0;
                break;
            case "AON":
            case 1:
                message.orderType = 1;
                break;
            case "IOC":
            case 2:
                message.orderType = 2;
                break;
            case "FOK":
            case 3:
                message.orderType = 3;
                break;
            case "STOP":
            case 4:
                message.orderType = 4;
                break;
            }
            if (object.price != null)
                if ($util.Long)
                    (message.price = $util.Long.fromValue(object.price)).unsigned = true;
                else if (typeof object.price === "string")
                    message.price = parseInt(object.price, 10);
                else if (typeof object.price === "number")
                    message.price = object.price;
                else if (typeof object.price === "object")
                    message.price = new $util.LongBits(object.price.low >>> 0, object.price.high >>> 0).toNumber(true);
            if (object.quantity != null)
                if ($util.Long)
                    (message.quantity = $util.Long.fromValue(object.quantity)).unsigned = true;
                else if (typeof object.quantity === "string")
                    message.quantity = parseInt(object.quantity, 10);
                else if (typeof object.quantity === "number")
                    message.quantity = object.quantity;
                else if (typeof object.quantity === "object")
                    message.quantity = new $util.LongBits(object.quantity.low >>> 0, object.quantity.high >>> 0).toNumber(true);
            if (object.stopPrice != null)
                if ($util.Long)
                    (message.stopPrice = $util.Long.fromValue(object.stopPrice)).unsigned = true;
                else if (typeof object.stopPrice === "string")
                    message.stopPrice = parseInt(object.stopPrice, 10);
                else if (typeof object.stopPrice === "number")
                    message.stopPrice = object.stopPrice;
                else if (typeof object.stopPrice === "object")
                    message.stopPrice = new $util.LongBits(object.stopPrice.low >>> 0, object.stopPrice.high >>> 0).toNumber(true);
            if (object.orderID != null)
                message.orderID = object.orderID >>> 0;
            if (object.timestamp != null) {
                if (typeof object.timestamp !== "object")
                    throw TypeError(".markets.NewOrder.timestamp: object expected");
                message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
            }
            if (object.held != null)
                if ($util.Long)
                    (message.held = $util.Long.fromValue(object.held)).unsigned = true;
                else if (typeof object.held === "string")
                    message.held = parseInt(object.held, 10);
                else if (typeof object.held === "number")
                    message.held = object.held;
                else if (typeof object.held === "object")
                    message.held = new $util.LongBits(object.held.low >>> 0, object.held.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a NewOrder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.NewOrder
         * @static
         * @param {markets.NewOrder} message NewOrder
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NewOrder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.clOrdID = "";
                object.orderIDParent = 0;
                object.side = options.enums === String ? "BUY" : 0;
                object.orderType = options.enums === String ? "GTC" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.price = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.price = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.quantity = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.quantity = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.stopPrice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.stopPrice = options.longs === String ? "0" : 0;
                object.orderID = 0;
                object.timestamp = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.held = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.held = options.longs === String ? "0" : 0;
            }
            if (message.clOrdID != null && message.hasOwnProperty("clOrdID"))
                object.clOrdID = message.clOrdID;
            if (message.orderIDParent != null && message.hasOwnProperty("orderIDParent"))
                object.orderIDParent = message.orderIDParent;
            if (message.side != null && message.hasOwnProperty("side"))
                object.side = options.enums === String ? $root.markets.Side[message.side] : message.side;
            if (message.orderType != null && message.hasOwnProperty("orderType"))
                object.orderType = options.enums === String ? $root.markets.OrderType[message.orderType] : message.orderType;
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price === "number")
                    object.price = options.longs === String ? String(message.price) : message.price;
                else
                    object.price = options.longs === String ? $util.Long.prototype.toString.call(message.price) : options.longs === Number ? new $util.LongBits(message.price.low >>> 0, message.price.high >>> 0).toNumber(true) : message.price;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (typeof message.quantity === "number")
                    object.quantity = options.longs === String ? String(message.quantity) : message.quantity;
                else
                    object.quantity = options.longs === String ? $util.Long.prototype.toString.call(message.quantity) : options.longs === Number ? new $util.LongBits(message.quantity.low >>> 0, message.quantity.high >>> 0).toNumber(true) : message.quantity;
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                if (typeof message.stopPrice === "number")
                    object.stopPrice = options.longs === String ? String(message.stopPrice) : message.stopPrice;
                else
                    object.stopPrice = options.longs === String ? $util.Long.prototype.toString.call(message.stopPrice) : options.longs === Number ? new $util.LongBits(message.stopPrice.low >>> 0, message.stopPrice.high >>> 0).toNumber(true) : message.stopPrice;
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                object.orderID = message.orderID;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
            if (message.held != null && message.hasOwnProperty("held"))
                if (typeof message.held === "number")
                    object.held = options.longs === String ? String(message.held) : message.held;
                else
                    object.held = options.longs === String ? $util.Long.prototype.toString.call(message.held) : options.longs === Number ? new $util.LongBits(message.held.low >>> 0, message.held.high >>> 0).toNumber(true) : message.held;
            return object;
        };

        /**
         * Converts this NewOrder to JSON.
         * @function toJSON
         * @memberof markets.NewOrder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NewOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NewOrder;
    })();

    markets.ClientKey = (function() {

        /**
         * Properties of a ClientKey.
         * @memberof markets
         * @interface IClientKey
         * @property {number|null} [pocketID] ClientKey pocketID
         * @property {string|null} [clOrdID] ClientKey clOrdID
         */

        /**
         * Constructs a new ClientKey.
         * @memberof markets
         * @classdesc Represents a ClientKey.
         * @implements IClientKey
         * @constructor
         * @param {markets.IClientKey=} [properties] Properties to set
         */
        function ClientKey(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientKey pocketID.
         * @member {number} pocketID
         * @memberof markets.ClientKey
         * @instance
         */
        ClientKey.prototype.pocketID = 0;

        /**
         * ClientKey clOrdID.
         * @member {string} clOrdID
         * @memberof markets.ClientKey
         * @instance
         */
        ClientKey.prototype.clOrdID = "";

        /**
         * Creates a new ClientKey instance using the specified properties.
         * @function create
         * @memberof markets.ClientKey
         * @static
         * @param {markets.IClientKey=} [properties] Properties to set
         * @returns {markets.ClientKey} ClientKey instance
         */
        ClientKey.create = function create(properties) {
            return new ClientKey(properties);
        };

        /**
         * Encodes the specified ClientKey message. Does not implicitly {@link markets.ClientKey.verify|verify} messages.
         * @function encode
         * @memberof markets.ClientKey
         * @static
         * @param {markets.IClientKey} message ClientKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientKey.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pocketID != null && message.hasOwnProperty("pocketID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.pocketID);
            if (message.clOrdID != null && message.hasOwnProperty("clOrdID"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.clOrdID);
            return writer;
        };

        /**
         * Encodes the specified ClientKey message, length delimited. Does not implicitly {@link markets.ClientKey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.ClientKey
         * @static
         * @param {markets.IClientKey} message ClientKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientKey.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientKey message from the specified reader or buffer.
         * @function decode
         * @memberof markets.ClientKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.ClientKey} ClientKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientKey.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.ClientKey();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pocketID = reader.uint32();
                    break;
                case 2:
                    message.clOrdID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientKey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.ClientKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.ClientKey} ClientKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientKey.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientKey message.
         * @function verify
         * @memberof markets.ClientKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientKey.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pocketID != null && message.hasOwnProperty("pocketID"))
                if (!$util.isInteger(message.pocketID))
                    return "pocketID: integer expected";
            if (message.clOrdID != null && message.hasOwnProperty("clOrdID"))
                if (!$util.isString(message.clOrdID))
                    return "clOrdID: string expected";
            return null;
        };

        /**
         * Creates a ClientKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.ClientKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.ClientKey} ClientKey
         */
        ClientKey.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.ClientKey)
                return object;
            let message = new $root.markets.ClientKey();
            if (object.pocketID != null)
                message.pocketID = object.pocketID >>> 0;
            if (object.clOrdID != null)
                message.clOrdID = String(object.clOrdID);
            return message;
        };

        /**
         * Creates a plain object from a ClientKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.ClientKey
         * @static
         * @param {markets.ClientKey} message ClientKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientKey.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.pocketID = 0;
                object.clOrdID = "";
            }
            if (message.pocketID != null && message.hasOwnProperty("pocketID"))
                object.pocketID = message.pocketID;
            if (message.clOrdID != null && message.hasOwnProperty("clOrdID"))
                object.clOrdID = message.clOrdID;
            return object;
        };

        /**
         * Converts this ClientKey to JSON.
         * @function toJSON
         * @memberof markets.ClientKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientKey.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClientKey;
    })();

    markets.CancelOrder = (function() {

        /**
         * Properties of a CancelOrder.
         * @memberof markets
         * @interface ICancelOrder
         * @property {string|null} [requestID] CancelOrder requestID
         * @property {google.protobuf.ITimestamp|null} [timestamp] CancelOrder timestamp
         * @property {number|null} [orderID] CancelOrder orderID
         * @property {markets.IClientKey|null} [clientKey] CancelOrder clientKey
         */

        /**
         * Constructs a new CancelOrder.
         * @memberof markets
         * @classdesc Represents a CancelOrder.
         * @implements ICancelOrder
         * @constructor
         * @param {markets.ICancelOrder=} [properties] Properties to set
         */
        function CancelOrder(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CancelOrder requestID.
         * @member {string} requestID
         * @memberof markets.CancelOrder
         * @instance
         */
        CancelOrder.prototype.requestID = "";

        /**
         * CancelOrder timestamp.
         * @member {google.protobuf.ITimestamp|null|undefined} timestamp
         * @memberof markets.CancelOrder
         * @instance
         */
        CancelOrder.prototype.timestamp = null;

        /**
         * CancelOrder orderID.
         * @member {number} orderID
         * @memberof markets.CancelOrder
         * @instance
         */
        CancelOrder.prototype.orderID = 0;

        /**
         * CancelOrder clientKey.
         * @member {markets.IClientKey|null|undefined} clientKey
         * @memberof markets.CancelOrder
         * @instance
         */
        CancelOrder.prototype.clientKey = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * CancelOrder key.
         * @member {"orderID"|"clientKey"|undefined} key
         * @memberof markets.CancelOrder
         * @instance
         */
        Object.defineProperty(CancelOrder.prototype, "key", {
            get: $util.oneOfGetter($oneOfFields = ["orderID", "clientKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CancelOrder instance using the specified properties.
         * @function create
         * @memberof markets.CancelOrder
         * @static
         * @param {markets.ICancelOrder=} [properties] Properties to set
         * @returns {markets.CancelOrder} CancelOrder instance
         */
        CancelOrder.create = function create(properties) {
            return new CancelOrder(properties);
        };

        /**
         * Encodes the specified CancelOrder message. Does not implicitly {@link markets.CancelOrder.verify|verify} messages.
         * @function encode
         * @memberof markets.CancelOrder
         * @static
         * @param {markets.ICancelOrder} message CancelOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.requestID != null && message.hasOwnProperty("requestID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestID);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.orderID);
            if (message.clientKey != null && message.hasOwnProperty("clientKey"))
                $root.markets.ClientKey.encode(message.clientKey, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CancelOrder message, length delimited. Does not implicitly {@link markets.CancelOrder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.CancelOrder
         * @static
         * @param {markets.ICancelOrder} message CancelOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelOrder message from the specified reader or buffer.
         * @function decode
         * @memberof markets.CancelOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.CancelOrder} CancelOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelOrder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.CancelOrder();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestID = reader.string();
                    break;
                case 2:
                    message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.orderID = reader.uint32();
                    break;
                case 4:
                    message.clientKey = $root.markets.ClientKey.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CancelOrder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.CancelOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.CancelOrder} CancelOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelOrder message.
         * @function verify
         * @memberof markets.CancelOrder
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelOrder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.requestID != null && message.hasOwnProperty("requestID"))
                if (!$util.isString(message.requestID))
                    return "requestID: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                if (error)
                    return "timestamp." + error;
            }
            if (message.orderID != null && message.hasOwnProperty("orderID")) {
                properties.key = 1;
                if (!$util.isInteger(message.orderID))
                    return "orderID: integer expected";
            }
            if (message.clientKey != null && message.hasOwnProperty("clientKey")) {
                if (properties.key === 1)
                    return "key: multiple values";
                properties.key = 1;
                {
                    let error = $root.markets.ClientKey.verify(message.clientKey);
                    if (error)
                        return "clientKey." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CancelOrder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.CancelOrder
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.CancelOrder} CancelOrder
         */
        CancelOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.CancelOrder)
                return object;
            let message = new $root.markets.CancelOrder();
            if (object.requestID != null)
                message.requestID = String(object.requestID);
            if (object.timestamp != null) {
                if (typeof object.timestamp !== "object")
                    throw TypeError(".markets.CancelOrder.timestamp: object expected");
                message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
            }
            if (object.orderID != null)
                message.orderID = object.orderID >>> 0;
            if (object.clientKey != null) {
                if (typeof object.clientKey !== "object")
                    throw TypeError(".markets.CancelOrder.clientKey: object expected");
                message.clientKey = $root.markets.ClientKey.fromObject(object.clientKey);
            }
            return message;
        };

        /**
         * Creates a plain object from a CancelOrder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.CancelOrder
         * @static
         * @param {markets.CancelOrder} message CancelOrder
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CancelOrder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.requestID = "";
                object.timestamp = null;
            }
            if (message.requestID != null && message.hasOwnProperty("requestID"))
                object.requestID = message.requestID;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
            if (message.orderID != null && message.hasOwnProperty("orderID")) {
                object.orderID = message.orderID;
                if (options.oneofs)
                    object.key = "orderID";
            }
            if (message.clientKey != null && message.hasOwnProperty("clientKey")) {
                object.clientKey = $root.markets.ClientKey.toObject(message.clientKey, options);
                if (options.oneofs)
                    object.key = "clientKey";
            }
            return object;
        };

        /**
         * Converts this CancelOrder to JSON.
         * @function toJSON
         * @memberof markets.CancelOrder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CancelOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CancelOrder;
    })();

    /**
     * CancelStatusCode enum.
     * @name markets.CancelStatusCode
     * @enum {string}
     * @property {number} CS_NEW=0 CS_NEW value
     * @property {number} CS_PENDING=1 CS_PENDING value
     * @property {number} CS_ACCEPTED=2 CS_ACCEPTED value
     * @property {number} CS_REJECTED=3 CS_REJECTED value
     */
    markets.CancelStatusCode = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CS_NEW"] = 0;
        values[valuesById[1] = "CS_PENDING"] = 1;
        values[valuesById[2] = "CS_ACCEPTED"] = 2;
        values[valuesById[3] = "CS_REJECTED"] = 3;
        return values;
    })();

    markets.CancelStatus = (function() {

        /**
         * Properties of a CancelStatus.
         * @memberof markets
         * @interface ICancelStatus
         * @property {string|null} [requestID] CancelStatus requestID
         * @property {number|null} [orderID] CancelStatus orderID
         * @property {google.protobuf.ITimestamp|null} [timestamp] CancelStatus timestamp
         * @property {markets.CancelStatusCode|null} [code] CancelStatus code
         * @property {string|null} [reason] CancelStatus reason
         */

        /**
         * Constructs a new CancelStatus.
         * @memberof markets
         * @classdesc Represents a CancelStatus.
         * @implements ICancelStatus
         * @constructor
         * @param {markets.ICancelStatus=} [properties] Properties to set
         */
        function CancelStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CancelStatus requestID.
         * @member {string} requestID
         * @memberof markets.CancelStatus
         * @instance
         */
        CancelStatus.prototype.requestID = "";

        /**
         * CancelStatus orderID.
         * @member {number} orderID
         * @memberof markets.CancelStatus
         * @instance
         */
        CancelStatus.prototype.orderID = 0;

        /**
         * CancelStatus timestamp.
         * @member {google.protobuf.ITimestamp|null|undefined} timestamp
         * @memberof markets.CancelStatus
         * @instance
         */
        CancelStatus.prototype.timestamp = null;

        /**
         * CancelStatus code.
         * @member {markets.CancelStatusCode} code
         * @memberof markets.CancelStatus
         * @instance
         */
        CancelStatus.prototype.code = 0;

        /**
         * CancelStatus reason.
         * @member {string} reason
         * @memberof markets.CancelStatus
         * @instance
         */
        CancelStatus.prototype.reason = "";

        /**
         * Creates a new CancelStatus instance using the specified properties.
         * @function create
         * @memberof markets.CancelStatus
         * @static
         * @param {markets.ICancelStatus=} [properties] Properties to set
         * @returns {markets.CancelStatus} CancelStatus instance
         */
        CancelStatus.create = function create(properties) {
            return new CancelStatus(properties);
        };

        /**
         * Encodes the specified CancelStatus message. Does not implicitly {@link markets.CancelStatus.verify|verify} messages.
         * @function encode
         * @memberof markets.CancelStatus
         * @static
         * @param {markets.ICancelStatus} message CancelStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.requestID != null && message.hasOwnProperty("requestID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestID);
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.orderID);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.code);
            if (message.reason != null && message.hasOwnProperty("reason"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.reason);
            return writer;
        };

        /**
         * Encodes the specified CancelStatus message, length delimited. Does not implicitly {@link markets.CancelStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.CancelStatus
         * @static
         * @param {markets.ICancelStatus} message CancelStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CancelStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CancelStatus message from the specified reader or buffer.
         * @function decode
         * @memberof markets.CancelStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.CancelStatus} CancelStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.CancelStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestID = reader.string();
                    break;
                case 2:
                    message.orderID = reader.uint32();
                    break;
                case 3:
                    message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.code = reader.int32();
                    break;
                case 5:
                    message.reason = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CancelStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.CancelStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.CancelStatus} CancelStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CancelStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CancelStatus message.
         * @function verify
         * @memberof markets.CancelStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CancelStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.requestID != null && message.hasOwnProperty("requestID"))
                if (!$util.isString(message.requestID))
                    return "requestID: string expected";
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                if (!$util.isInteger(message.orderID))
                    return "orderID: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                if (error)
                    return "timestamp." + error;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        /**
         * Creates a CancelStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.CancelStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.CancelStatus} CancelStatus
         */
        CancelStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.CancelStatus)
                return object;
            let message = new $root.markets.CancelStatus();
            if (object.requestID != null)
                message.requestID = String(object.requestID);
            if (object.orderID != null)
                message.orderID = object.orderID >>> 0;
            if (object.timestamp != null) {
                if (typeof object.timestamp !== "object")
                    throw TypeError(".markets.CancelStatus.timestamp: object expected");
                message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
            }
            switch (object.code) {
            case "CS_NEW":
            case 0:
                message.code = 0;
                break;
            case "CS_PENDING":
            case 1:
                message.code = 1;
                break;
            case "CS_ACCEPTED":
            case 2:
                message.code = 2;
                break;
            case "CS_REJECTED":
            case 3:
                message.code = 3;
                break;
            }
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        /**
         * Creates a plain object from a CancelStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.CancelStatus
         * @static
         * @param {markets.CancelStatus} message CancelStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CancelStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.requestID = "";
                object.orderID = 0;
                object.timestamp = null;
                object.code = options.enums === String ? "CS_NEW" : 0;
                object.reason = "";
            }
            if (message.requestID != null && message.hasOwnProperty("requestID"))
                object.requestID = message.requestID;
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                object.orderID = message.orderID;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.markets.CancelStatusCode[message.code] : message.code;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        /**
         * Converts this CancelStatus to JSON.
         * @function toJSON
         * @memberof markets.CancelStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CancelStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CancelStatus;
    })();

    markets.ModifyOrder = (function() {

        /**
         * Properties of a ModifyOrder.
         * @memberof markets
         * @interface IModifyOrder
         * @property {number|null} [userID] ModifyOrder userID
         * @property {number|null} [profileID] ModifyOrder profileID
         * @property {number|null} [pocketID] ModifyOrder pocketID
         * @property {number|null} [orderID] ModifyOrder orderID
         * @property {markets.ModifyType|null} [modifyType] ModifyOrder modifyType
         * @property {number|Long|null} [price] ModifyOrder price
         * @property {number|Long|null} [quantity] ModifyOrder quantity
         */

        /**
         * Constructs a new ModifyOrder.
         * @memberof markets
         * @classdesc Represents a ModifyOrder.
         * @implements IModifyOrder
         * @constructor
         * @param {markets.IModifyOrder=} [properties] Properties to set
         */
        function ModifyOrder(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModifyOrder userID.
         * @member {number} userID
         * @memberof markets.ModifyOrder
         * @instance
         */
        ModifyOrder.prototype.userID = 0;

        /**
         * ModifyOrder profileID.
         * @member {number} profileID
         * @memberof markets.ModifyOrder
         * @instance
         */
        ModifyOrder.prototype.profileID = 0;

        /**
         * ModifyOrder pocketID.
         * @member {number} pocketID
         * @memberof markets.ModifyOrder
         * @instance
         */
        ModifyOrder.prototype.pocketID = 0;

        /**
         * ModifyOrder orderID.
         * @member {number} orderID
         * @memberof markets.ModifyOrder
         * @instance
         */
        ModifyOrder.prototype.orderID = 0;

        /**
         * ModifyOrder modifyType.
         * @member {markets.ModifyType} modifyType
         * @memberof markets.ModifyOrder
         * @instance
         */
        ModifyOrder.prototype.modifyType = 0;

        /**
         * ModifyOrder price.
         * @member {number|Long} price
         * @memberof markets.ModifyOrder
         * @instance
         */
        ModifyOrder.prototype.price = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ModifyOrder quantity.
         * @member {number|Long} quantity
         * @memberof markets.ModifyOrder
         * @instance
         */
        ModifyOrder.prototype.quantity = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new ModifyOrder instance using the specified properties.
         * @function create
         * @memberof markets.ModifyOrder
         * @static
         * @param {markets.IModifyOrder=} [properties] Properties to set
         * @returns {markets.ModifyOrder} ModifyOrder instance
         */
        ModifyOrder.create = function create(properties) {
            return new ModifyOrder(properties);
        };

        /**
         * Encodes the specified ModifyOrder message. Does not implicitly {@link markets.ModifyOrder.verify|verify} messages.
         * @function encode
         * @memberof markets.ModifyOrder
         * @static
         * @param {markets.IModifyOrder} message ModifyOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userID != null && message.hasOwnProperty("userID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userID);
            if (message.profileID != null && message.hasOwnProperty("profileID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.profileID);
            if (message.pocketID != null && message.hasOwnProperty("pocketID"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.pocketID);
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.orderID);
            if (message.modifyType != null && message.hasOwnProperty("modifyType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.modifyType);
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.price);
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.quantity);
            return writer;
        };

        /**
         * Encodes the specified ModifyOrder message, length delimited. Does not implicitly {@link markets.ModifyOrder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.ModifyOrder
         * @static
         * @param {markets.IModifyOrder} message ModifyOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModifyOrder message from the specified reader or buffer.
         * @function decode
         * @memberof markets.ModifyOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.ModifyOrder} ModifyOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyOrder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.ModifyOrder();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userID = reader.uint32();
                    break;
                case 2:
                    message.profileID = reader.uint32();
                    break;
                case 3:
                    message.pocketID = reader.uint32();
                    break;
                case 4:
                    message.orderID = reader.uint32();
                    break;
                case 5:
                    message.modifyType = reader.int32();
                    break;
                case 6:
                    message.price = reader.uint64();
                    break;
                case 7:
                    message.quantity = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ModifyOrder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.ModifyOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.ModifyOrder} ModifyOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModifyOrder message.
         * @function verify
         * @memberof markets.ModifyOrder
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModifyOrder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!$util.isInteger(message.userID))
                    return "userID: integer expected";
            if (message.profileID != null && message.hasOwnProperty("profileID"))
                if (!$util.isInteger(message.profileID))
                    return "profileID: integer expected";
            if (message.pocketID != null && message.hasOwnProperty("pocketID"))
                if (!$util.isInteger(message.pocketID))
                    return "pocketID: integer expected";
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                if (!$util.isInteger(message.orderID))
                    return "orderID: integer expected";
            if (message.modifyType != null && message.hasOwnProperty("modifyType"))
                switch (message.modifyType) {
                default:
                    return "modifyType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price) && !(message.price && $util.isInteger(message.price.low) && $util.isInteger(message.price.high)))
                    return "price: integer|Long expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity) && !(message.quantity && $util.isInteger(message.quantity.low) && $util.isInteger(message.quantity.high)))
                    return "quantity: integer|Long expected";
            return null;
        };

        /**
         * Creates a ModifyOrder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.ModifyOrder
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.ModifyOrder} ModifyOrder
         */
        ModifyOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.ModifyOrder)
                return object;
            let message = new $root.markets.ModifyOrder();
            if (object.userID != null)
                message.userID = object.userID >>> 0;
            if (object.profileID != null)
                message.profileID = object.profileID >>> 0;
            if (object.pocketID != null)
                message.pocketID = object.pocketID >>> 0;
            if (object.orderID != null)
                message.orderID = object.orderID >>> 0;
            switch (object.modifyType) {
            case "PRICE":
            case 0:
                message.modifyType = 0;
                break;
            case "QUANTITY":
            case 1:
                message.modifyType = 1;
                break;
            case "PRICE_AND_QUANTITY":
            case 2:
                message.modifyType = 2;
                break;
            }
            if (object.price != null)
                if ($util.Long)
                    (message.price = $util.Long.fromValue(object.price)).unsigned = true;
                else if (typeof object.price === "string")
                    message.price = parseInt(object.price, 10);
                else if (typeof object.price === "number")
                    message.price = object.price;
                else if (typeof object.price === "object")
                    message.price = new $util.LongBits(object.price.low >>> 0, object.price.high >>> 0).toNumber(true);
            if (object.quantity != null)
                if ($util.Long)
                    (message.quantity = $util.Long.fromValue(object.quantity)).unsigned = true;
                else if (typeof object.quantity === "string")
                    message.quantity = parseInt(object.quantity, 10);
                else if (typeof object.quantity === "number")
                    message.quantity = object.quantity;
                else if (typeof object.quantity === "object")
                    message.quantity = new $util.LongBits(object.quantity.low >>> 0, object.quantity.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a ModifyOrder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.ModifyOrder
         * @static
         * @param {markets.ModifyOrder} message ModifyOrder
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModifyOrder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.userID = 0;
                object.profileID = 0;
                object.pocketID = 0;
                object.orderID = 0;
                object.modifyType = options.enums === String ? "PRICE" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.price = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.price = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.quantity = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.quantity = options.longs === String ? "0" : 0;
            }
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = message.userID;
            if (message.profileID != null && message.hasOwnProperty("profileID"))
                object.profileID = message.profileID;
            if (message.pocketID != null && message.hasOwnProperty("pocketID"))
                object.pocketID = message.pocketID;
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                object.orderID = message.orderID;
            if (message.modifyType != null && message.hasOwnProperty("modifyType"))
                object.modifyType = options.enums === String ? $root.markets.ModifyType[message.modifyType] : message.modifyType;
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price === "number")
                    object.price = options.longs === String ? String(message.price) : message.price;
                else
                    object.price = options.longs === String ? $util.Long.prototype.toString.call(message.price) : options.longs === Number ? new $util.LongBits(message.price.low >>> 0, message.price.high >>> 0).toNumber(true) : message.price;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (typeof message.quantity === "number")
                    object.quantity = options.longs === String ? String(message.quantity) : message.quantity;
                else
                    object.quantity = options.longs === String ? $util.Long.prototype.toString.call(message.quantity) : options.longs === Number ? new $util.LongBits(message.quantity.low >>> 0, message.quantity.high >>> 0).toNumber(true) : message.quantity;
            return object;
        };

        /**
         * Converts this ModifyOrder to JSON.
         * @function toJSON
         * @memberof markets.ModifyOrder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModifyOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ModifyOrder;
    })();

    markets.Action = (function() {

        /**
         * Properties of an Action.
         * @memberof markets
         * @interface IAction
         * @property {google.protobuf.ITimestamp|null} [timestamp] Action timestamp
         * @property {markets.INewOrder|null} [newOrder] Action newOrder
         * @property {markets.ICancelOrder|null} [cancelOrder] Action cancelOrder
         * @property {markets.IModifyOrder|null} [modifyOrder] Action modifyOrder
         */

        /**
         * Constructs a new Action.
         * @memberof markets
         * @classdesc Represents an Action.
         * @implements IAction
         * @constructor
         * @param {markets.IAction=} [properties] Properties to set
         */
        function Action(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Action timestamp.
         * @member {google.protobuf.ITimestamp|null|undefined} timestamp
         * @memberof markets.Action
         * @instance
         */
        Action.prototype.timestamp = null;

        /**
         * Action newOrder.
         * @member {markets.INewOrder|null|undefined} newOrder
         * @memberof markets.Action
         * @instance
         */
        Action.prototype.newOrder = null;

        /**
         * Action cancelOrder.
         * @member {markets.ICancelOrder|null|undefined} cancelOrder
         * @memberof markets.Action
         * @instance
         */
        Action.prototype.cancelOrder = null;

        /**
         * Action modifyOrder.
         * @member {markets.IModifyOrder|null|undefined} modifyOrder
         * @memberof markets.Action
         * @instance
         */
        Action.prototype.modifyOrder = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Action msg.
         * @member {"newOrder"|"cancelOrder"|"modifyOrder"|undefined} msg
         * @memberof markets.Action
         * @instance
         */
        Object.defineProperty(Action.prototype, "msg", {
            get: $util.oneOfGetter($oneOfFields = ["newOrder", "cancelOrder", "modifyOrder"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Action instance using the specified properties.
         * @function create
         * @memberof markets.Action
         * @static
         * @param {markets.IAction=} [properties] Properties to set
         * @returns {markets.Action} Action instance
         */
        Action.create = function create(properties) {
            return new Action(properties);
        };

        /**
         * Encodes the specified Action message. Does not implicitly {@link markets.Action.verify|verify} messages.
         * @function encode
         * @memberof markets.Action
         * @static
         * @param {markets.IAction} message Action message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Action.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.newOrder != null && message.hasOwnProperty("newOrder"))
                $root.markets.NewOrder.encode(message.newOrder, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.cancelOrder != null && message.hasOwnProperty("cancelOrder"))
                $root.markets.CancelOrder.encode(message.cancelOrder, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.modifyOrder != null && message.hasOwnProperty("modifyOrder"))
                $root.markets.ModifyOrder.encode(message.modifyOrder, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Action message, length delimited. Does not implicitly {@link markets.Action.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.Action
         * @static
         * @param {markets.IAction} message Action message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Action.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Action message from the specified reader or buffer.
         * @function decode
         * @memberof markets.Action
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.Action} Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Action.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.Action();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 4:
                    message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 1:
                    message.newOrder = $root.markets.NewOrder.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.cancelOrder = $root.markets.CancelOrder.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.modifyOrder = $root.markets.ModifyOrder.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Action message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.Action
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.Action} Action
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Action.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Action message.
         * @function verify
         * @memberof markets.Action
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Action.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                if (error)
                    return "timestamp." + error;
            }
            if (message.newOrder != null && message.hasOwnProperty("newOrder")) {
                properties.msg = 1;
                {
                    let error = $root.markets.NewOrder.verify(message.newOrder);
                    if (error)
                        return "newOrder." + error;
                }
            }
            if (message.cancelOrder != null && message.hasOwnProperty("cancelOrder")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.markets.CancelOrder.verify(message.cancelOrder);
                    if (error)
                        return "cancelOrder." + error;
                }
            }
            if (message.modifyOrder != null && message.hasOwnProperty("modifyOrder")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.markets.ModifyOrder.verify(message.modifyOrder);
                    if (error)
                        return "modifyOrder." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Action message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.Action
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.Action} Action
         */
        Action.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.Action)
                return object;
            let message = new $root.markets.Action();
            if (object.timestamp != null) {
                if (typeof object.timestamp !== "object")
                    throw TypeError(".markets.Action.timestamp: object expected");
                message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
            }
            if (object.newOrder != null) {
                if (typeof object.newOrder !== "object")
                    throw TypeError(".markets.Action.newOrder: object expected");
                message.newOrder = $root.markets.NewOrder.fromObject(object.newOrder);
            }
            if (object.cancelOrder != null) {
                if (typeof object.cancelOrder !== "object")
                    throw TypeError(".markets.Action.cancelOrder: object expected");
                message.cancelOrder = $root.markets.CancelOrder.fromObject(object.cancelOrder);
            }
            if (object.modifyOrder != null) {
                if (typeof object.modifyOrder !== "object")
                    throw TypeError(".markets.Action.modifyOrder: object expected");
                message.modifyOrder = $root.markets.ModifyOrder.fromObject(object.modifyOrder);
            }
            return message;
        };

        /**
         * Creates a plain object from an Action message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.Action
         * @static
         * @param {markets.Action} message Action
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Action.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.timestamp = null;
            if (message.newOrder != null && message.hasOwnProperty("newOrder")) {
                object.newOrder = $root.markets.NewOrder.toObject(message.newOrder, options);
                if (options.oneofs)
                    object.msg = "newOrder";
            }
            if (message.cancelOrder != null && message.hasOwnProperty("cancelOrder")) {
                object.cancelOrder = $root.markets.CancelOrder.toObject(message.cancelOrder, options);
                if (options.oneofs)
                    object.msg = "cancelOrder";
            }
            if (message.modifyOrder != null && message.hasOwnProperty("modifyOrder")) {
                object.modifyOrder = $root.markets.ModifyOrder.toObject(message.modifyOrder, options);
                if (options.oneofs)
                    object.msg = "modifyOrder";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
            return object;
        };

        /**
         * Converts this Action to JSON.
         * @function toJSON
         * @memberof markets.Action
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Action.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Action;
    })();

    /**
     * OrderStatusCode enum.
     * @name markets.OrderStatusCode
     * @enum {string}
     * @property {number} OS_NEW=0 OS_NEW value
     * @property {number} OS_PENDING=1 OS_PENDING value
     * @property {number} OS_REJECTED=2 OS_REJECTED value
     * @property {number} OS_OPEN=3 OS_OPEN value
     * @property {number} OS_CANCELED=4 OS_CANCELED value
     * @property {number} OS_PARTIAL_FILL=5 OS_PARTIAL_FILL value
     * @property {number} OS_FILLED=6 OS_FILLED value
     */
    markets.OrderStatusCode = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OS_NEW"] = 0;
        values[valuesById[1] = "OS_PENDING"] = 1;
        values[valuesById[2] = "OS_REJECTED"] = 2;
        values[valuesById[3] = "OS_OPEN"] = 3;
        values[valuesById[4] = "OS_CANCELED"] = 4;
        values[valuesById[5] = "OS_PARTIAL_FILL"] = 5;
        values[valuesById[6] = "OS_FILLED"] = 6;
        return values;
    })();

    markets.Fill = (function() {

        /**
         * Properties of a Fill.
         * @memberof markets
         * @interface IFill
         * @property {markets.Side|null} [side] Fill side
         * @property {number|Long|null} [price] Fill price
         * @property {number|Long|null} [size] Fill size
         * @property {boolean|null} [took] Fill took
         */

        /**
         * Constructs a new Fill.
         * @memberof markets
         * @classdesc Represents a Fill.
         * @implements IFill
         * @constructor
         * @param {markets.IFill=} [properties] Properties to set
         */
        function Fill(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Fill side.
         * @member {markets.Side} side
         * @memberof markets.Fill
         * @instance
         */
        Fill.prototype.side = 0;

        /**
         * Fill price.
         * @member {number|Long} price
         * @memberof markets.Fill
         * @instance
         */
        Fill.prototype.price = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Fill size.
         * @member {number|Long} size
         * @memberof markets.Fill
         * @instance
         */
        Fill.prototype.size = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Fill took.
         * @member {boolean} took
         * @memberof markets.Fill
         * @instance
         */
        Fill.prototype.took = false;

        /**
         * Creates a new Fill instance using the specified properties.
         * @function create
         * @memberof markets.Fill
         * @static
         * @param {markets.IFill=} [properties] Properties to set
         * @returns {markets.Fill} Fill instance
         */
        Fill.create = function create(properties) {
            return new Fill(properties);
        };

        /**
         * Encodes the specified Fill message. Does not implicitly {@link markets.Fill.verify|verify} messages.
         * @function encode
         * @memberof markets.Fill
         * @static
         * @param {markets.IFill} message Fill message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Fill.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.side != null && message.hasOwnProperty("side"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.side);
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.price);
            if (message.size != null && message.hasOwnProperty("size"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.size);
            if (message.took != null && message.hasOwnProperty("took"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.took);
            return writer;
        };

        /**
         * Encodes the specified Fill message, length delimited. Does not implicitly {@link markets.Fill.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.Fill
         * @static
         * @param {markets.IFill} message Fill message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Fill.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Fill message from the specified reader or buffer.
         * @function decode
         * @memberof markets.Fill
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.Fill} Fill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Fill.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.Fill();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.side = reader.int32();
                    break;
                case 2:
                    message.price = reader.uint64();
                    break;
                case 3:
                    message.size = reader.uint64();
                    break;
                case 4:
                    message.took = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Fill message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.Fill
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.Fill} Fill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Fill.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Fill message.
         * @function verify
         * @memberof markets.Fill
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Fill.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.side != null && message.hasOwnProperty("side"))
                switch (message.side) {
                default:
                    return "side: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price) && !(message.price && $util.isInteger(message.price.low) && $util.isInteger(message.price.high)))
                    return "price: integer|Long expected";
            if (message.size != null && message.hasOwnProperty("size"))
                if (!$util.isInteger(message.size) && !(message.size && $util.isInteger(message.size.low) && $util.isInteger(message.size.high)))
                    return "size: integer|Long expected";
            if (message.took != null && message.hasOwnProperty("took"))
                if (typeof message.took !== "boolean")
                    return "took: boolean expected";
            return null;
        };

        /**
         * Creates a Fill message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.Fill
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.Fill} Fill
         */
        Fill.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.Fill)
                return object;
            let message = new $root.markets.Fill();
            switch (object.side) {
            case "BUY":
            case 0:
                message.side = 0;
                break;
            case "SELL":
            case 1:
                message.side = 1;
                break;
            }
            if (object.price != null)
                if ($util.Long)
                    (message.price = $util.Long.fromValue(object.price)).unsigned = true;
                else if (typeof object.price === "string")
                    message.price = parseInt(object.price, 10);
                else if (typeof object.price === "number")
                    message.price = object.price;
                else if (typeof object.price === "object")
                    message.price = new $util.LongBits(object.price.low >>> 0, object.price.high >>> 0).toNumber(true);
            if (object.size != null)
                if ($util.Long)
                    (message.size = $util.Long.fromValue(object.size)).unsigned = true;
                else if (typeof object.size === "string")
                    message.size = parseInt(object.size, 10);
                else if (typeof object.size === "number")
                    message.size = object.size;
                else if (typeof object.size === "object")
                    message.size = new $util.LongBits(object.size.low >>> 0, object.size.high >>> 0).toNumber(true);
            if (object.took != null)
                message.took = Boolean(object.took);
            return message;
        };

        /**
         * Creates a plain object from a Fill message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.Fill
         * @static
         * @param {markets.Fill} message Fill
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Fill.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.side = options.enums === String ? "BUY" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.price = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.price = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.size = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.size = options.longs === String ? "0" : 0;
                object.took = false;
            }
            if (message.side != null && message.hasOwnProperty("side"))
                object.side = options.enums === String ? $root.markets.Side[message.side] : message.side;
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price === "number")
                    object.price = options.longs === String ? String(message.price) : message.price;
                else
                    object.price = options.longs === String ? $util.Long.prototype.toString.call(message.price) : options.longs === Number ? new $util.LongBits(message.price.low >>> 0, message.price.high >>> 0).toNumber(true) : message.price;
            if (message.size != null && message.hasOwnProperty("size"))
                if (typeof message.size === "number")
                    object.size = options.longs === String ? String(message.size) : message.size;
                else
                    object.size = options.longs === String ? $util.Long.prototype.toString.call(message.size) : options.longs === Number ? new $util.LongBits(message.size.low >>> 0, message.size.high >>> 0).toNumber(true) : message.size;
            if (message.took != null && message.hasOwnProperty("took"))
                object.took = message.took;
            return object;
        };

        /**
         * Converts this Fill to JSON.
         * @function toJSON
         * @memberof markets.Fill
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Fill.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Fill;
    })();

    markets.FillEvent = (function() {

        /**
         * Properties of a FillEvent.
         * @memberof markets
         * @interface IFillEvent
         * @property {google.protobuf.ITimestamp|null} [timestamp] FillEvent timestamp
         * @property {string|null} [market] FillEvent market
         * @property {number|null} [orderID] FillEvent orderID
         * @property {string|null} [clOrdID] FillEvent clOrdID
         * @property {markets.IFill|null} [fill] FillEvent fill
         */

        /**
         * Constructs a new FillEvent.
         * @memberof markets
         * @classdesc Represents a FillEvent.
         * @implements IFillEvent
         * @constructor
         * @param {markets.IFillEvent=} [properties] Properties to set
         */
        function FillEvent(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FillEvent timestamp.
         * @member {google.protobuf.ITimestamp|null|undefined} timestamp
         * @memberof markets.FillEvent
         * @instance
         */
        FillEvent.prototype.timestamp = null;

        /**
         * FillEvent market.
         * @member {string} market
         * @memberof markets.FillEvent
         * @instance
         */
        FillEvent.prototype.market = "";

        /**
         * FillEvent orderID.
         * @member {number} orderID
         * @memberof markets.FillEvent
         * @instance
         */
        FillEvent.prototype.orderID = 0;

        /**
         * FillEvent clOrdID.
         * @member {string} clOrdID
         * @memberof markets.FillEvent
         * @instance
         */
        FillEvent.prototype.clOrdID = "";

        /**
         * FillEvent fill.
         * @member {markets.IFill|null|undefined} fill
         * @memberof markets.FillEvent
         * @instance
         */
        FillEvent.prototype.fill = null;

        /**
         * Creates a new FillEvent instance using the specified properties.
         * @function create
         * @memberof markets.FillEvent
         * @static
         * @param {markets.IFillEvent=} [properties] Properties to set
         * @returns {markets.FillEvent} FillEvent instance
         */
        FillEvent.create = function create(properties) {
            return new FillEvent(properties);
        };

        /**
         * Encodes the specified FillEvent message. Does not implicitly {@link markets.FillEvent.verify|verify} messages.
         * @function encode
         * @memberof markets.FillEvent
         * @static
         * @param {markets.IFillEvent} message FillEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FillEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.clOrdID != null && message.hasOwnProperty("clOrdID"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.clOrdID);
            if (message.fill != null && message.hasOwnProperty("fill"))
                $root.markets.Fill.encode(message.fill, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.orderID);
            if (message.market != null && message.hasOwnProperty("market"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.market);
            return writer;
        };

        /**
         * Encodes the specified FillEvent message, length delimited. Does not implicitly {@link markets.FillEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.FillEvent
         * @static
         * @param {markets.IFillEvent} message FillEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FillEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FillEvent message from the specified reader or buffer.
         * @function decode
         * @memberof markets.FillEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.FillEvent} FillEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FillEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.FillEvent();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.market = reader.string();
                    break;
                case 4:
                    message.orderID = reader.uint32();
                    break;
                case 2:
                    message.clOrdID = reader.string();
                    break;
                case 3:
                    message.fill = $root.markets.Fill.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FillEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.FillEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.FillEvent} FillEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FillEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FillEvent message.
         * @function verify
         * @memberof markets.FillEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FillEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                if (error)
                    return "timestamp." + error;
            }
            if (message.market != null && message.hasOwnProperty("market"))
                if (!$util.isString(message.market))
                    return "market: string expected";
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                if (!$util.isInteger(message.orderID))
                    return "orderID: integer expected";
            if (message.clOrdID != null && message.hasOwnProperty("clOrdID"))
                if (!$util.isString(message.clOrdID))
                    return "clOrdID: string expected";
            if (message.fill != null && message.hasOwnProperty("fill")) {
                let error = $root.markets.Fill.verify(message.fill);
                if (error)
                    return "fill." + error;
            }
            return null;
        };

        /**
         * Creates a FillEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.FillEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.FillEvent} FillEvent
         */
        FillEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.FillEvent)
                return object;
            let message = new $root.markets.FillEvent();
            if (object.timestamp != null) {
                if (typeof object.timestamp !== "object")
                    throw TypeError(".markets.FillEvent.timestamp: object expected");
                message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
            }
            if (object.market != null)
                message.market = String(object.market);
            if (object.orderID != null)
                message.orderID = object.orderID >>> 0;
            if (object.clOrdID != null)
                message.clOrdID = String(object.clOrdID);
            if (object.fill != null) {
                if (typeof object.fill !== "object")
                    throw TypeError(".markets.FillEvent.fill: object expected");
                message.fill = $root.markets.Fill.fromObject(object.fill);
            }
            return message;
        };

        /**
         * Creates a plain object from a FillEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.FillEvent
         * @static
         * @param {markets.FillEvent} message FillEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FillEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.timestamp = null;
                object.clOrdID = "";
                object.fill = null;
                object.orderID = 0;
                object.market = "";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
            if (message.clOrdID != null && message.hasOwnProperty("clOrdID"))
                object.clOrdID = message.clOrdID;
            if (message.fill != null && message.hasOwnProperty("fill"))
                object.fill = $root.markets.Fill.toObject(message.fill, options);
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                object.orderID = message.orderID;
            if (message.market != null && message.hasOwnProperty("market"))
                object.market = message.market;
            return object;
        };

        /**
         * Converts this FillEvent to JSON.
         * @function toJSON
         * @memberof markets.FillEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FillEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FillEvent;
    })();

    markets.FillEventList = (function() {

        /**
         * Properties of a FillEventList.
         * @memberof markets
         * @interface IFillEventList
         * @property {Array.<markets.IFillEvent>|null} [fills] FillEventList fills
         */

        /**
         * Constructs a new FillEventList.
         * @memberof markets
         * @classdesc Represents a FillEventList.
         * @implements IFillEventList
         * @constructor
         * @param {markets.IFillEventList=} [properties] Properties to set
         */
        function FillEventList(properties) {
            this.fills = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FillEventList fills.
         * @member {Array.<markets.IFillEvent>} fills
         * @memberof markets.FillEventList
         * @instance
         */
        FillEventList.prototype.fills = $util.emptyArray;

        /**
         * Creates a new FillEventList instance using the specified properties.
         * @function create
         * @memberof markets.FillEventList
         * @static
         * @param {markets.IFillEventList=} [properties] Properties to set
         * @returns {markets.FillEventList} FillEventList instance
         */
        FillEventList.create = function create(properties) {
            return new FillEventList(properties);
        };

        /**
         * Encodes the specified FillEventList message. Does not implicitly {@link markets.FillEventList.verify|verify} messages.
         * @function encode
         * @memberof markets.FillEventList
         * @static
         * @param {markets.IFillEventList} message FillEventList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FillEventList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fills != null && message.fills.length)
                for (let i = 0; i < message.fills.length; ++i)
                    $root.markets.FillEvent.encode(message.fills[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FillEventList message, length delimited. Does not implicitly {@link markets.FillEventList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.FillEventList
         * @static
         * @param {markets.IFillEventList} message FillEventList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FillEventList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FillEventList message from the specified reader or buffer.
         * @function decode
         * @memberof markets.FillEventList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.FillEventList} FillEventList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FillEventList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.FillEventList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.fills && message.fills.length))
                        message.fills = [];
                    message.fills.push($root.markets.FillEvent.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FillEventList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.FillEventList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.FillEventList} FillEventList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FillEventList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FillEventList message.
         * @function verify
         * @memberof markets.FillEventList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FillEventList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fills != null && message.hasOwnProperty("fills")) {
                if (!Array.isArray(message.fills))
                    return "fills: array expected";
                for (let i = 0; i < message.fills.length; ++i) {
                    let error = $root.markets.FillEvent.verify(message.fills[i]);
                    if (error)
                        return "fills." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FillEventList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.FillEventList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.FillEventList} FillEventList
         */
        FillEventList.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.FillEventList)
                return object;
            let message = new $root.markets.FillEventList();
            if (object.fills) {
                if (!Array.isArray(object.fills))
                    throw TypeError(".markets.FillEventList.fills: array expected");
                message.fills = [];
                for (let i = 0; i < object.fills.length; ++i) {
                    if (typeof object.fills[i] !== "object")
                        throw TypeError(".markets.FillEventList.fills: object expected");
                    message.fills[i] = $root.markets.FillEvent.fromObject(object.fills[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FillEventList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.FillEventList
         * @static
         * @param {markets.FillEventList} message FillEventList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FillEventList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.fills = [];
            if (message.fills && message.fills.length) {
                object.fills = [];
                for (let j = 0; j < message.fills.length; ++j)
                    object.fills[j] = $root.markets.FillEvent.toObject(message.fills[j], options);
            }
            return object;
        };

        /**
         * Converts this FillEventList to JSON.
         * @function toJSON
         * @memberof markets.FillEventList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FillEventList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FillEventList;
    })();

    markets.OrderStatusEvent = (function() {

        /**
         * Properties of an OrderStatusEvent.
         * @memberof markets
         * @interface IOrderStatusEvent
         * @property {google.protobuf.ITimestamp|null} [timestamp] OrderStatusEvent timestamp
         * @property {markets.OrderStatusCode|null} [code] OrderStatusEvent code
         * @property {string|null} [reason] OrderStatusEvent reason
         * @property {markets.IFill|null} [fill] OrderStatusEvent fill
         * @property {string|null} [market] OrderStatusEvent market
         * @property {markets.Side|null} [side] OrderStatusEvent side
         * @property {markets.OrderType|null} [orderType] OrderStatusEvent orderType
         * @property {number|Long|null} [price] OrderStatusEvent price
         * @property {number|Long|null} [quantity] OrderStatusEvent quantity
         * @property {number|Long|null} [stopPrice] OrderStatusEvent stopPrice
         */

        /**
         * Constructs a new OrderStatusEvent.
         * @memberof markets
         * @classdesc Represents an OrderStatusEvent.
         * @implements IOrderStatusEvent
         * @constructor
         * @param {markets.IOrderStatusEvent=} [properties] Properties to set
         */
        function OrderStatusEvent(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OrderStatusEvent timestamp.
         * @member {google.protobuf.ITimestamp|null|undefined} timestamp
         * @memberof markets.OrderStatusEvent
         * @instance
         */
        OrderStatusEvent.prototype.timestamp = null;

        /**
         * OrderStatusEvent code.
         * @member {markets.OrderStatusCode} code
         * @memberof markets.OrderStatusEvent
         * @instance
         */
        OrderStatusEvent.prototype.code = 0;

        /**
         * OrderStatusEvent reason.
         * @member {string} reason
         * @memberof markets.OrderStatusEvent
         * @instance
         */
        OrderStatusEvent.prototype.reason = "";

        /**
         * OrderStatusEvent fill.
         * @member {markets.IFill|null|undefined} fill
         * @memberof markets.OrderStatusEvent
         * @instance
         */
        OrderStatusEvent.prototype.fill = null;

        /**
         * OrderStatusEvent market.
         * @member {string} market
         * @memberof markets.OrderStatusEvent
         * @instance
         */
        OrderStatusEvent.prototype.market = "";

        /**
         * OrderStatusEvent side.
         * @member {markets.Side} side
         * @memberof markets.OrderStatusEvent
         * @instance
         */
        OrderStatusEvent.prototype.side = 0;

        /**
         * OrderStatusEvent orderType.
         * @member {markets.OrderType} orderType
         * @memberof markets.OrderStatusEvent
         * @instance
         */
        OrderStatusEvent.prototype.orderType = 0;

        /**
         * OrderStatusEvent price.
         * @member {number|Long} price
         * @memberof markets.OrderStatusEvent
         * @instance
         */
        OrderStatusEvent.prototype.price = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * OrderStatusEvent quantity.
         * @member {number|Long} quantity
         * @memberof markets.OrderStatusEvent
         * @instance
         */
        OrderStatusEvent.prototype.quantity = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * OrderStatusEvent stopPrice.
         * @member {number|Long} stopPrice
         * @memberof markets.OrderStatusEvent
         * @instance
         */
        OrderStatusEvent.prototype.stopPrice = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * OrderStatusEvent msg.
         * @member {"reason"|"fill"|undefined} msg
         * @memberof markets.OrderStatusEvent
         * @instance
         */
        Object.defineProperty(OrderStatusEvent.prototype, "msg", {
            get: $util.oneOfGetter($oneOfFields = ["reason", "fill"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new OrderStatusEvent instance using the specified properties.
         * @function create
         * @memberof markets.OrderStatusEvent
         * @static
         * @param {markets.IOrderStatusEvent=} [properties] Properties to set
         * @returns {markets.OrderStatusEvent} OrderStatusEvent instance
         */
        OrderStatusEvent.create = function create(properties) {
            return new OrderStatusEvent(properties);
        };

        /**
         * Encodes the specified OrderStatusEvent message. Does not implicitly {@link markets.OrderStatusEvent.verify|verify} messages.
         * @function encode
         * @memberof markets.OrderStatusEvent
         * @static
         * @param {markets.IOrderStatusEvent} message OrderStatusEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderStatusEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
            if (message.reason != null && message.hasOwnProperty("reason"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.reason);
            if (message.fill != null && message.hasOwnProperty("fill"))
                $root.markets.Fill.encode(message.fill, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.market != null && message.hasOwnProperty("market"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.market);
            if (message.side != null && message.hasOwnProperty("side"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.side);
            if (message.orderType != null && message.hasOwnProperty("orderType"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.orderType);
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.price);
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.quantity);
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.stopPrice);
            return writer;
        };

        /**
         * Encodes the specified OrderStatusEvent message, length delimited. Does not implicitly {@link markets.OrderStatusEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.OrderStatusEvent
         * @static
         * @param {markets.IOrderStatusEvent} message OrderStatusEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderStatusEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OrderStatusEvent message from the specified reader or buffer.
         * @function decode
         * @memberof markets.OrderStatusEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.OrderStatusEvent} OrderStatusEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderStatusEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.OrderStatusEvent();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.code = reader.int32();
                    break;
                case 3:
                    message.reason = reader.string();
                    break;
                case 4:
                    message.fill = $root.markets.Fill.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.market = reader.string();
                    break;
                case 6:
                    message.side = reader.int32();
                    break;
                case 7:
                    message.orderType = reader.int32();
                    break;
                case 8:
                    message.price = reader.uint64();
                    break;
                case 9:
                    message.quantity = reader.uint64();
                    break;
                case 10:
                    message.stopPrice = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OrderStatusEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.OrderStatusEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.OrderStatusEvent} OrderStatusEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderStatusEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OrderStatusEvent message.
         * @function verify
         * @memberof markets.OrderStatusEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OrderStatusEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                if (error)
                    return "timestamp." + error;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.reason != null && message.hasOwnProperty("reason")) {
                properties.msg = 1;
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            }
            if (message.fill != null && message.hasOwnProperty("fill")) {
                if (properties.msg === 1)
                    return "msg: multiple values";
                properties.msg = 1;
                {
                    let error = $root.markets.Fill.verify(message.fill);
                    if (error)
                        return "fill." + error;
                }
            }
            if (message.market != null && message.hasOwnProperty("market"))
                if (!$util.isString(message.market))
                    return "market: string expected";
            if (message.side != null && message.hasOwnProperty("side"))
                switch (message.side) {
                default:
                    return "side: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.orderType != null && message.hasOwnProperty("orderType"))
                switch (message.orderType) {
                default:
                    return "orderType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price) && !(message.price && $util.isInteger(message.price.low) && $util.isInteger(message.price.high)))
                    return "price: integer|Long expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity) && !(message.quantity && $util.isInteger(message.quantity.low) && $util.isInteger(message.quantity.high)))
                    return "quantity: integer|Long expected";
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                if (!$util.isInteger(message.stopPrice) && !(message.stopPrice && $util.isInteger(message.stopPrice.low) && $util.isInteger(message.stopPrice.high)))
                    return "stopPrice: integer|Long expected";
            return null;
        };

        /**
         * Creates an OrderStatusEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.OrderStatusEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.OrderStatusEvent} OrderStatusEvent
         */
        OrderStatusEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.OrderStatusEvent)
                return object;
            let message = new $root.markets.OrderStatusEvent();
            if (object.timestamp != null) {
                if (typeof object.timestamp !== "object")
                    throw TypeError(".markets.OrderStatusEvent.timestamp: object expected");
                message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
            }
            switch (object.code) {
            case "OS_NEW":
            case 0:
                message.code = 0;
                break;
            case "OS_PENDING":
            case 1:
                message.code = 1;
                break;
            case "OS_REJECTED":
            case 2:
                message.code = 2;
                break;
            case "OS_OPEN":
            case 3:
                message.code = 3;
                break;
            case "OS_CANCELED":
            case 4:
                message.code = 4;
                break;
            case "OS_PARTIAL_FILL":
            case 5:
                message.code = 5;
                break;
            case "OS_FILLED":
            case 6:
                message.code = 6;
                break;
            }
            if (object.reason != null)
                message.reason = String(object.reason);
            if (object.fill != null) {
                if (typeof object.fill !== "object")
                    throw TypeError(".markets.OrderStatusEvent.fill: object expected");
                message.fill = $root.markets.Fill.fromObject(object.fill);
            }
            if (object.market != null)
                message.market = String(object.market);
            switch (object.side) {
            case "BUY":
            case 0:
                message.side = 0;
                break;
            case "SELL":
            case 1:
                message.side = 1;
                break;
            }
            switch (object.orderType) {
            case "GTC":
            case 0:
                message.orderType = 0;
                break;
            case "AON":
            case 1:
                message.orderType = 1;
                break;
            case "IOC":
            case 2:
                message.orderType = 2;
                break;
            case "FOK":
            case 3:
                message.orderType = 3;
                break;
            case "STOP":
            case 4:
                message.orderType = 4;
                break;
            }
            if (object.price != null)
                if ($util.Long)
                    (message.price = $util.Long.fromValue(object.price)).unsigned = true;
                else if (typeof object.price === "string")
                    message.price = parseInt(object.price, 10);
                else if (typeof object.price === "number")
                    message.price = object.price;
                else if (typeof object.price === "object")
                    message.price = new $util.LongBits(object.price.low >>> 0, object.price.high >>> 0).toNumber(true);
            if (object.quantity != null)
                if ($util.Long)
                    (message.quantity = $util.Long.fromValue(object.quantity)).unsigned = true;
                else if (typeof object.quantity === "string")
                    message.quantity = parseInt(object.quantity, 10);
                else if (typeof object.quantity === "number")
                    message.quantity = object.quantity;
                else if (typeof object.quantity === "object")
                    message.quantity = new $util.LongBits(object.quantity.low >>> 0, object.quantity.high >>> 0).toNumber(true);
            if (object.stopPrice != null)
                if ($util.Long)
                    (message.stopPrice = $util.Long.fromValue(object.stopPrice)).unsigned = true;
                else if (typeof object.stopPrice === "string")
                    message.stopPrice = parseInt(object.stopPrice, 10);
                else if (typeof object.stopPrice === "number")
                    message.stopPrice = object.stopPrice;
                else if (typeof object.stopPrice === "object")
                    message.stopPrice = new $util.LongBits(object.stopPrice.low >>> 0, object.stopPrice.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an OrderStatusEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.OrderStatusEvent
         * @static
         * @param {markets.OrderStatusEvent} message OrderStatusEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OrderStatusEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.timestamp = null;
                object.code = options.enums === String ? "OS_NEW" : 0;
                object.market = "";
                object.side = options.enums === String ? "BUY" : 0;
                object.orderType = options.enums === String ? "GTC" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.price = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.price = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.quantity = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.quantity = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.stopPrice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.stopPrice = options.longs === String ? "0" : 0;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.markets.OrderStatusCode[message.code] : message.code;
            if (message.reason != null && message.hasOwnProperty("reason")) {
                object.reason = message.reason;
                if (options.oneofs)
                    object.msg = "reason";
            }
            if (message.fill != null && message.hasOwnProperty("fill")) {
                object.fill = $root.markets.Fill.toObject(message.fill, options);
                if (options.oneofs)
                    object.msg = "fill";
            }
            if (message.market != null && message.hasOwnProperty("market"))
                object.market = message.market;
            if (message.side != null && message.hasOwnProperty("side"))
                object.side = options.enums === String ? $root.markets.Side[message.side] : message.side;
            if (message.orderType != null && message.hasOwnProperty("orderType"))
                object.orderType = options.enums === String ? $root.markets.OrderType[message.orderType] : message.orderType;
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price === "number")
                    object.price = options.longs === String ? String(message.price) : message.price;
                else
                    object.price = options.longs === String ? $util.Long.prototype.toString.call(message.price) : options.longs === Number ? new $util.LongBits(message.price.low >>> 0, message.price.high >>> 0).toNumber(true) : message.price;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (typeof message.quantity === "number")
                    object.quantity = options.longs === String ? String(message.quantity) : message.quantity;
                else
                    object.quantity = options.longs === String ? $util.Long.prototype.toString.call(message.quantity) : options.longs === Number ? new $util.LongBits(message.quantity.low >>> 0, message.quantity.high >>> 0).toNumber(true) : message.quantity;
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                if (typeof message.stopPrice === "number")
                    object.stopPrice = options.longs === String ? String(message.stopPrice) : message.stopPrice;
                else
                    object.stopPrice = options.longs === String ? $util.Long.prototype.toString.call(message.stopPrice) : options.longs === Number ? new $util.LongBits(message.stopPrice.low >>> 0, message.stopPrice.high >>> 0).toNumber(true) : message.stopPrice;
            return object;
        };

        /**
         * Converts this OrderStatusEvent to JSON.
         * @function toJSON
         * @memberof markets.OrderStatusEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OrderStatusEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OrderStatusEvent;
    })();

    markets.OrderStatus = (function() {

        /**
         * Properties of an OrderStatus.
         * @memberof markets
         * @interface IOrderStatus
         * @property {number|null} [orderID] OrderStatus orderID
         * @property {number|null} [orderIDParent] OrderStatus orderIDParent
         * @property {string|null} [clOrdID] OrderStatus clOrdID
         * @property {markets.IOrderStatusEvent|null} [event] OrderStatus event
         * @property {number|Long|null} [filled] OrderStatus filled
         * @property {number|Long|null} [filledCost] OrderStatus filledCost
         */

        /**
         * Constructs a new OrderStatus.
         * @memberof markets
         * @classdesc Represents an OrderStatus.
         * @implements IOrderStatus
         * @constructor
         * @param {markets.IOrderStatus=} [properties] Properties to set
         */
        function OrderStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OrderStatus orderID.
         * @member {number} orderID
         * @memberof markets.OrderStatus
         * @instance
         */
        OrderStatus.prototype.orderID = 0;

        /**
         * OrderStatus orderIDParent.
         * @member {number} orderIDParent
         * @memberof markets.OrderStatus
         * @instance
         */
        OrderStatus.prototype.orderIDParent = 0;

        /**
         * OrderStatus clOrdID.
         * @member {string} clOrdID
         * @memberof markets.OrderStatus
         * @instance
         */
        OrderStatus.prototype.clOrdID = "";

        /**
         * OrderStatus event.
         * @member {markets.IOrderStatusEvent|null|undefined} event
         * @memberof markets.OrderStatus
         * @instance
         */
        OrderStatus.prototype.event = null;

        /**
         * OrderStatus filled.
         * @member {number|Long} filled
         * @memberof markets.OrderStatus
         * @instance
         */
        OrderStatus.prototype.filled = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * OrderStatus filledCost.
         * @member {number|Long} filledCost
         * @memberof markets.OrderStatus
         * @instance
         */
        OrderStatus.prototype.filledCost = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new OrderStatus instance using the specified properties.
         * @function create
         * @memberof markets.OrderStatus
         * @static
         * @param {markets.IOrderStatus=} [properties] Properties to set
         * @returns {markets.OrderStatus} OrderStatus instance
         */
        OrderStatus.create = function create(properties) {
            return new OrderStatus(properties);
        };

        /**
         * Encodes the specified OrderStatus message. Does not implicitly {@link markets.OrderStatus.verify|verify} messages.
         * @function encode
         * @memberof markets.OrderStatus
         * @static
         * @param {markets.IOrderStatus} message OrderStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.orderID);
            if (message.orderIDParent != null && message.hasOwnProperty("orderIDParent"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.orderIDParent);
            if (message.clOrdID != null && message.hasOwnProperty("clOrdID"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.clOrdID);
            if (message.event != null && message.hasOwnProperty("event"))
                $root.markets.OrderStatusEvent.encode(message.event, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.filled != null && message.hasOwnProperty("filled"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.filled);
            if (message.filledCost != null && message.hasOwnProperty("filledCost"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.filledCost);
            return writer;
        };

        /**
         * Encodes the specified OrderStatus message, length delimited. Does not implicitly {@link markets.OrderStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.OrderStatus
         * @static
         * @param {markets.IOrderStatus} message OrderStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OrderStatus message from the specified reader or buffer.
         * @function decode
         * @memberof markets.OrderStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.OrderStatus} OrderStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.OrderStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.orderID = reader.uint32();
                    break;
                case 2:
                    message.orderIDParent = reader.uint32();
                    break;
                case 3:
                    message.clOrdID = reader.string();
                    break;
                case 4:
                    message.event = $root.markets.OrderStatusEvent.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.filled = reader.uint64();
                    break;
                case 6:
                    message.filledCost = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OrderStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.OrderStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.OrderStatus} OrderStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OrderStatus message.
         * @function verify
         * @memberof markets.OrderStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OrderStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                if (!$util.isInteger(message.orderID))
                    return "orderID: integer expected";
            if (message.orderIDParent != null && message.hasOwnProperty("orderIDParent"))
                if (!$util.isInteger(message.orderIDParent))
                    return "orderIDParent: integer expected";
            if (message.clOrdID != null && message.hasOwnProperty("clOrdID"))
                if (!$util.isString(message.clOrdID))
                    return "clOrdID: string expected";
            if (message.event != null && message.hasOwnProperty("event")) {
                let error = $root.markets.OrderStatusEvent.verify(message.event);
                if (error)
                    return "event." + error;
            }
            if (message.filled != null && message.hasOwnProperty("filled"))
                if (!$util.isInteger(message.filled) && !(message.filled && $util.isInteger(message.filled.low) && $util.isInteger(message.filled.high)))
                    return "filled: integer|Long expected";
            if (message.filledCost != null && message.hasOwnProperty("filledCost"))
                if (!$util.isInteger(message.filledCost) && !(message.filledCost && $util.isInteger(message.filledCost.low) && $util.isInteger(message.filledCost.high)))
                    return "filledCost: integer|Long expected";
            return null;
        };

        /**
         * Creates an OrderStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.OrderStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.OrderStatus} OrderStatus
         */
        OrderStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.OrderStatus)
                return object;
            let message = new $root.markets.OrderStatus();
            if (object.orderID != null)
                message.orderID = object.orderID >>> 0;
            if (object.orderIDParent != null)
                message.orderIDParent = object.orderIDParent >>> 0;
            if (object.clOrdID != null)
                message.clOrdID = String(object.clOrdID);
            if (object.event != null) {
                if (typeof object.event !== "object")
                    throw TypeError(".markets.OrderStatus.event: object expected");
                message.event = $root.markets.OrderStatusEvent.fromObject(object.event);
            }
            if (object.filled != null)
                if ($util.Long)
                    (message.filled = $util.Long.fromValue(object.filled)).unsigned = true;
                else if (typeof object.filled === "string")
                    message.filled = parseInt(object.filled, 10);
                else if (typeof object.filled === "number")
                    message.filled = object.filled;
                else if (typeof object.filled === "object")
                    message.filled = new $util.LongBits(object.filled.low >>> 0, object.filled.high >>> 0).toNumber(true);
            if (object.filledCost != null)
                if ($util.Long)
                    (message.filledCost = $util.Long.fromValue(object.filledCost)).unsigned = true;
                else if (typeof object.filledCost === "string")
                    message.filledCost = parseInt(object.filledCost, 10);
                else if (typeof object.filledCost === "number")
                    message.filledCost = object.filledCost;
                else if (typeof object.filledCost === "object")
                    message.filledCost = new $util.LongBits(object.filledCost.low >>> 0, object.filledCost.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an OrderStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.OrderStatus
         * @static
         * @param {markets.OrderStatus} message OrderStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OrderStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.orderID = 0;
                object.orderIDParent = 0;
                object.clOrdID = "";
                object.event = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.filled = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.filled = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.filledCost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.filledCost = options.longs === String ? "0" : 0;
            }
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                object.orderID = message.orderID;
            if (message.orderIDParent != null && message.hasOwnProperty("orderIDParent"))
                object.orderIDParent = message.orderIDParent;
            if (message.clOrdID != null && message.hasOwnProperty("clOrdID"))
                object.clOrdID = message.clOrdID;
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = $root.markets.OrderStatusEvent.toObject(message.event, options);
            if (message.filled != null && message.hasOwnProperty("filled"))
                if (typeof message.filled === "number")
                    object.filled = options.longs === String ? String(message.filled) : message.filled;
                else
                    object.filled = options.longs === String ? $util.Long.prototype.toString.call(message.filled) : options.longs === Number ? new $util.LongBits(message.filled.low >>> 0, message.filled.high >>> 0).toNumber(true) : message.filled;
            if (message.filledCost != null && message.hasOwnProperty("filledCost"))
                if (typeof message.filledCost === "number")
                    object.filledCost = options.longs === String ? String(message.filledCost) : message.filledCost;
                else
                    object.filledCost = options.longs === String ? $util.Long.prototype.toString.call(message.filledCost) : options.longs === Number ? new $util.LongBits(message.filledCost.low >>> 0, message.filledCost.high >>> 0).toNumber(true) : message.filledCost;
            return object;
        };

        /**
         * Converts this OrderStatus to JSON.
         * @function toJSON
         * @memberof markets.OrderStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OrderStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OrderStatus;
    })();

    markets.Order = (function() {

        /**
         * Properties of an Order.
         * @memberof markets
         * @interface IOrder
         * @property {number|null} [userID] Order userID
         * @property {number|null} [profileID] Order profileID
         * @property {number|null} [pocketID] Order pocketID
         * @property {string|null} [clOrdID] Order clOrdID
         * @property {number|null} [orderID] Order orderID
         * @property {number|null} [orderIDParent] Order orderIDParent
         * @property {string|null} [market] Order market
         * @property {markets.Side|null} [side] Order side
         * @property {markets.OrderType|null} [orderType] Order orderType
         * @property {number|Long|null} [price] Order price
         * @property {number|Long|null} [quantity] Order quantity
         * @property {number|Long|null} [stopPrice] Order stopPrice
         * @property {google.protobuf.ITimestamp|null} [timestamp] Order timestamp
         * @property {markets.OrderStatusCode|null} [status] Order status
         * @property {number|Long|null} [filled] Order filled
         * @property {number|Long|null} [filledCost] Order filledCost
         * @property {Array.<markets.IOrderStatusEvent>|null} [history] Order history
         */

        /**
         * Constructs a new Order.
         * @memberof markets
         * @classdesc Represents an Order.
         * @implements IOrder
         * @constructor
         * @param {markets.IOrder=} [properties] Properties to set
         */
        function Order(properties) {
            this.history = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Order userID.
         * @member {number} userID
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.userID = 0;

        /**
         * Order profileID.
         * @member {number} profileID
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.profileID = 0;

        /**
         * Order pocketID.
         * @member {number} pocketID
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.pocketID = 0;

        /**
         * Order clOrdID.
         * @member {string} clOrdID
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.clOrdID = "";

        /**
         * Order orderID.
         * @member {number} orderID
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.orderID = 0;

        /**
         * Order orderIDParent.
         * @member {number} orderIDParent
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.orderIDParent = 0;

        /**
         * Order market.
         * @member {string} market
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.market = "";

        /**
         * Order side.
         * @member {markets.Side} side
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.side = 0;

        /**
         * Order orderType.
         * @member {markets.OrderType} orderType
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.orderType = 0;

        /**
         * Order price.
         * @member {number|Long} price
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.price = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Order quantity.
         * @member {number|Long} quantity
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.quantity = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Order stopPrice.
         * @member {number|Long} stopPrice
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.stopPrice = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Order timestamp.
         * @member {google.protobuf.ITimestamp|null|undefined} timestamp
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.timestamp = null;

        /**
         * Order status.
         * @member {markets.OrderStatusCode} status
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.status = 0;

        /**
         * Order filled.
         * @member {number|Long} filled
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.filled = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Order filledCost.
         * @member {number|Long} filledCost
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.filledCost = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Order history.
         * @member {Array.<markets.IOrderStatusEvent>} history
         * @memberof markets.Order
         * @instance
         */
        Order.prototype.history = $util.emptyArray;

        /**
         * Creates a new Order instance using the specified properties.
         * @function create
         * @memberof markets.Order
         * @static
         * @param {markets.IOrder=} [properties] Properties to set
         * @returns {markets.Order} Order instance
         */
        Order.create = function create(properties) {
            return new Order(properties);
        };

        /**
         * Encodes the specified Order message. Does not implicitly {@link markets.Order.verify|verify} messages.
         * @function encode
         * @memberof markets.Order
         * @static
         * @param {markets.IOrder} message Order message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Order.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userID != null && message.hasOwnProperty("userID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userID);
            if (message.profileID != null && message.hasOwnProperty("profileID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.profileID);
            if (message.pocketID != null && message.hasOwnProperty("pocketID"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.pocketID);
            if (message.clOrdID != null && message.hasOwnProperty("clOrdID"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.clOrdID);
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.orderID);
            if (message.orderIDParent != null && message.hasOwnProperty("orderIDParent"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.orderIDParent);
            if (message.market != null && message.hasOwnProperty("market"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.market);
            if (message.side != null && message.hasOwnProperty("side"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.side);
            if (message.orderType != null && message.hasOwnProperty("orderType"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.orderType);
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.price);
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.quantity);
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.stopPrice);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.status);
            if (message.filled != null && message.hasOwnProperty("filled"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint64(message.filled);
            if (message.filledCost != null && message.hasOwnProperty("filledCost"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint64(message.filledCost);
            if (message.history != null && message.history.length)
                for (let i = 0; i < message.history.length; ++i)
                    $root.markets.OrderStatusEvent.encode(message.history[i], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Order message, length delimited. Does not implicitly {@link markets.Order.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.Order
         * @static
         * @param {markets.IOrder} message Order message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Order.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Order message from the specified reader or buffer.
         * @function decode
         * @memberof markets.Order
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.Order} Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Order.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.Order();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userID = reader.uint32();
                    break;
                case 2:
                    message.profileID = reader.uint32();
                    break;
                case 3:
                    message.pocketID = reader.uint32();
                    break;
                case 4:
                    message.clOrdID = reader.string();
                    break;
                case 5:
                    message.orderID = reader.uint32();
                    break;
                case 6:
                    message.orderIDParent = reader.uint32();
                    break;
                case 7:
                    message.market = reader.string();
                    break;
                case 8:
                    message.side = reader.int32();
                    break;
                case 9:
                    message.orderType = reader.int32();
                    break;
                case 10:
                    message.price = reader.uint64();
                    break;
                case 11:
                    message.quantity = reader.uint64();
                    break;
                case 12:
                    message.stopPrice = reader.uint64();
                    break;
                case 13:
                    message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.status = reader.int32();
                    break;
                case 15:
                    message.filled = reader.uint64();
                    break;
                case 16:
                    message.filledCost = reader.uint64();
                    break;
                case 17:
                    if (!(message.history && message.history.length))
                        message.history = [];
                    message.history.push($root.markets.OrderStatusEvent.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Order message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.Order
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.Order} Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Order.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Order message.
         * @function verify
         * @memberof markets.Order
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Order.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!$util.isInteger(message.userID))
                    return "userID: integer expected";
            if (message.profileID != null && message.hasOwnProperty("profileID"))
                if (!$util.isInteger(message.profileID))
                    return "profileID: integer expected";
            if (message.pocketID != null && message.hasOwnProperty("pocketID"))
                if (!$util.isInteger(message.pocketID))
                    return "pocketID: integer expected";
            if (message.clOrdID != null && message.hasOwnProperty("clOrdID"))
                if (!$util.isString(message.clOrdID))
                    return "clOrdID: string expected";
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                if (!$util.isInteger(message.orderID))
                    return "orderID: integer expected";
            if (message.orderIDParent != null && message.hasOwnProperty("orderIDParent"))
                if (!$util.isInteger(message.orderIDParent))
                    return "orderIDParent: integer expected";
            if (message.market != null && message.hasOwnProperty("market"))
                if (!$util.isString(message.market))
                    return "market: string expected";
            if (message.side != null && message.hasOwnProperty("side"))
                switch (message.side) {
                default:
                    return "side: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.orderType != null && message.hasOwnProperty("orderType"))
                switch (message.orderType) {
                default:
                    return "orderType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price) && !(message.price && $util.isInteger(message.price.low) && $util.isInteger(message.price.high)))
                    return "price: integer|Long expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity) && !(message.quantity && $util.isInteger(message.quantity.low) && $util.isInteger(message.quantity.high)))
                    return "quantity: integer|Long expected";
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                if (!$util.isInteger(message.stopPrice) && !(message.stopPrice && $util.isInteger(message.stopPrice.low) && $util.isInteger(message.stopPrice.high)))
                    return "stopPrice: integer|Long expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                if (error)
                    return "timestamp." + error;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.filled != null && message.hasOwnProperty("filled"))
                if (!$util.isInteger(message.filled) && !(message.filled && $util.isInteger(message.filled.low) && $util.isInteger(message.filled.high)))
                    return "filled: integer|Long expected";
            if (message.filledCost != null && message.hasOwnProperty("filledCost"))
                if (!$util.isInteger(message.filledCost) && !(message.filledCost && $util.isInteger(message.filledCost.low) && $util.isInteger(message.filledCost.high)))
                    return "filledCost: integer|Long expected";
            if (message.history != null && message.hasOwnProperty("history")) {
                if (!Array.isArray(message.history))
                    return "history: array expected";
                for (let i = 0; i < message.history.length; ++i) {
                    let error = $root.markets.OrderStatusEvent.verify(message.history[i]);
                    if (error)
                        return "history." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Order message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.Order
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.Order} Order
         */
        Order.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.Order)
                return object;
            let message = new $root.markets.Order();
            if (object.userID != null)
                message.userID = object.userID >>> 0;
            if (object.profileID != null)
                message.profileID = object.profileID >>> 0;
            if (object.pocketID != null)
                message.pocketID = object.pocketID >>> 0;
            if (object.clOrdID != null)
                message.clOrdID = String(object.clOrdID);
            if (object.orderID != null)
                message.orderID = object.orderID >>> 0;
            if (object.orderIDParent != null)
                message.orderIDParent = object.orderIDParent >>> 0;
            if (object.market != null)
                message.market = String(object.market);
            switch (object.side) {
            case "BUY":
            case 0:
                message.side = 0;
                break;
            case "SELL":
            case 1:
                message.side = 1;
                break;
            }
            switch (object.orderType) {
            case "GTC":
            case 0:
                message.orderType = 0;
                break;
            case "AON":
            case 1:
                message.orderType = 1;
                break;
            case "IOC":
            case 2:
                message.orderType = 2;
                break;
            case "FOK":
            case 3:
                message.orderType = 3;
                break;
            case "STOP":
            case 4:
                message.orderType = 4;
                break;
            }
            if (object.price != null)
                if ($util.Long)
                    (message.price = $util.Long.fromValue(object.price)).unsigned = true;
                else if (typeof object.price === "string")
                    message.price = parseInt(object.price, 10);
                else if (typeof object.price === "number")
                    message.price = object.price;
                else if (typeof object.price === "object")
                    message.price = new $util.LongBits(object.price.low >>> 0, object.price.high >>> 0).toNumber(true);
            if (object.quantity != null)
                if ($util.Long)
                    (message.quantity = $util.Long.fromValue(object.quantity)).unsigned = true;
                else if (typeof object.quantity === "string")
                    message.quantity = parseInt(object.quantity, 10);
                else if (typeof object.quantity === "number")
                    message.quantity = object.quantity;
                else if (typeof object.quantity === "object")
                    message.quantity = new $util.LongBits(object.quantity.low >>> 0, object.quantity.high >>> 0).toNumber(true);
            if (object.stopPrice != null)
                if ($util.Long)
                    (message.stopPrice = $util.Long.fromValue(object.stopPrice)).unsigned = true;
                else if (typeof object.stopPrice === "string")
                    message.stopPrice = parseInt(object.stopPrice, 10);
                else if (typeof object.stopPrice === "number")
                    message.stopPrice = object.stopPrice;
                else if (typeof object.stopPrice === "object")
                    message.stopPrice = new $util.LongBits(object.stopPrice.low >>> 0, object.stopPrice.high >>> 0).toNumber(true);
            if (object.timestamp != null) {
                if (typeof object.timestamp !== "object")
                    throw TypeError(".markets.Order.timestamp: object expected");
                message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
            }
            switch (object.status) {
            case "OS_NEW":
            case 0:
                message.status = 0;
                break;
            case "OS_PENDING":
            case 1:
                message.status = 1;
                break;
            case "OS_REJECTED":
            case 2:
                message.status = 2;
                break;
            case "OS_OPEN":
            case 3:
                message.status = 3;
                break;
            case "OS_CANCELED":
            case 4:
                message.status = 4;
                break;
            case "OS_PARTIAL_FILL":
            case 5:
                message.status = 5;
                break;
            case "OS_FILLED":
            case 6:
                message.status = 6;
                break;
            }
            if (object.filled != null)
                if ($util.Long)
                    (message.filled = $util.Long.fromValue(object.filled)).unsigned = true;
                else if (typeof object.filled === "string")
                    message.filled = parseInt(object.filled, 10);
                else if (typeof object.filled === "number")
                    message.filled = object.filled;
                else if (typeof object.filled === "object")
                    message.filled = new $util.LongBits(object.filled.low >>> 0, object.filled.high >>> 0).toNumber(true);
            if (object.filledCost != null)
                if ($util.Long)
                    (message.filledCost = $util.Long.fromValue(object.filledCost)).unsigned = true;
                else if (typeof object.filledCost === "string")
                    message.filledCost = parseInt(object.filledCost, 10);
                else if (typeof object.filledCost === "number")
                    message.filledCost = object.filledCost;
                else if (typeof object.filledCost === "object")
                    message.filledCost = new $util.LongBits(object.filledCost.low >>> 0, object.filledCost.high >>> 0).toNumber(true);
            if (object.history) {
                if (!Array.isArray(object.history))
                    throw TypeError(".markets.Order.history: array expected");
                message.history = [];
                for (let i = 0; i < object.history.length; ++i) {
                    if (typeof object.history[i] !== "object")
                        throw TypeError(".markets.Order.history: object expected");
                    message.history[i] = $root.markets.OrderStatusEvent.fromObject(object.history[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Order message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.Order
         * @static
         * @param {markets.Order} message Order
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Order.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.history = [];
            if (options.defaults) {
                object.userID = 0;
                object.profileID = 0;
                object.pocketID = 0;
                object.clOrdID = "";
                object.orderID = 0;
                object.orderIDParent = 0;
                object.market = "";
                object.side = options.enums === String ? "BUY" : 0;
                object.orderType = options.enums === String ? "GTC" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.price = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.price = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.quantity = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.quantity = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.stopPrice = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.stopPrice = options.longs === String ? "0" : 0;
                object.timestamp = null;
                object.status = options.enums === String ? "OS_NEW" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.filled = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.filled = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.filledCost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.filledCost = options.longs === String ? "0" : 0;
            }
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = message.userID;
            if (message.profileID != null && message.hasOwnProperty("profileID"))
                object.profileID = message.profileID;
            if (message.pocketID != null && message.hasOwnProperty("pocketID"))
                object.pocketID = message.pocketID;
            if (message.clOrdID != null && message.hasOwnProperty("clOrdID"))
                object.clOrdID = message.clOrdID;
            if (message.orderID != null && message.hasOwnProperty("orderID"))
                object.orderID = message.orderID;
            if (message.orderIDParent != null && message.hasOwnProperty("orderIDParent"))
                object.orderIDParent = message.orderIDParent;
            if (message.market != null && message.hasOwnProperty("market"))
                object.market = message.market;
            if (message.side != null && message.hasOwnProperty("side"))
                object.side = options.enums === String ? $root.markets.Side[message.side] : message.side;
            if (message.orderType != null && message.hasOwnProperty("orderType"))
                object.orderType = options.enums === String ? $root.markets.OrderType[message.orderType] : message.orderType;
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price === "number")
                    object.price = options.longs === String ? String(message.price) : message.price;
                else
                    object.price = options.longs === String ? $util.Long.prototype.toString.call(message.price) : options.longs === Number ? new $util.LongBits(message.price.low >>> 0, message.price.high >>> 0).toNumber(true) : message.price;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (typeof message.quantity === "number")
                    object.quantity = options.longs === String ? String(message.quantity) : message.quantity;
                else
                    object.quantity = options.longs === String ? $util.Long.prototype.toString.call(message.quantity) : options.longs === Number ? new $util.LongBits(message.quantity.low >>> 0, message.quantity.high >>> 0).toNumber(true) : message.quantity;
            if (message.stopPrice != null && message.hasOwnProperty("stopPrice"))
                if (typeof message.stopPrice === "number")
                    object.stopPrice = options.longs === String ? String(message.stopPrice) : message.stopPrice;
                else
                    object.stopPrice = options.longs === String ? $util.Long.prototype.toString.call(message.stopPrice) : options.longs === Number ? new $util.LongBits(message.stopPrice.low >>> 0, message.stopPrice.high >>> 0).toNumber(true) : message.stopPrice;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.markets.OrderStatusCode[message.status] : message.status;
            if (message.filled != null && message.hasOwnProperty("filled"))
                if (typeof message.filled === "number")
                    object.filled = options.longs === String ? String(message.filled) : message.filled;
                else
                    object.filled = options.longs === String ? $util.Long.prototype.toString.call(message.filled) : options.longs === Number ? new $util.LongBits(message.filled.low >>> 0, message.filled.high >>> 0).toNumber(true) : message.filled;
            if (message.filledCost != null && message.hasOwnProperty("filledCost"))
                if (typeof message.filledCost === "number")
                    object.filledCost = options.longs === String ? String(message.filledCost) : message.filledCost;
                else
                    object.filledCost = options.longs === String ? $util.Long.prototype.toString.call(message.filledCost) : options.longs === Number ? new $util.LongBits(message.filledCost.low >>> 0, message.filledCost.high >>> 0).toNumber(true) : message.filledCost;
            if (message.history && message.history.length) {
                object.history = [];
                for (let j = 0; j < message.history.length; ++j)
                    object.history[j] = $root.markets.OrderStatusEvent.toObject(message.history[j], options);
            }
            return object;
        };

        /**
         * Converts this Order to JSON.
         * @function toJSON
         * @memberof markets.Order
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Order.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Order;
    })();

    markets.OrderList = (function() {

        /**
         * Properties of an OrderList.
         * @memberof markets
         * @interface IOrderList
         * @property {Array.<markets.IOrder>|null} [orders] OrderList orders
         */

        /**
         * Constructs a new OrderList.
         * @memberof markets
         * @classdesc Represents an OrderList.
         * @implements IOrderList
         * @constructor
         * @param {markets.IOrderList=} [properties] Properties to set
         */
        function OrderList(properties) {
            this.orders = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OrderList orders.
         * @member {Array.<markets.IOrder>} orders
         * @memberof markets.OrderList
         * @instance
         */
        OrderList.prototype.orders = $util.emptyArray;

        /**
         * Creates a new OrderList instance using the specified properties.
         * @function create
         * @memberof markets.OrderList
         * @static
         * @param {markets.IOrderList=} [properties] Properties to set
         * @returns {markets.OrderList} OrderList instance
         */
        OrderList.create = function create(properties) {
            return new OrderList(properties);
        };

        /**
         * Encodes the specified OrderList message. Does not implicitly {@link markets.OrderList.verify|verify} messages.
         * @function encode
         * @memberof markets.OrderList
         * @static
         * @param {markets.IOrderList} message OrderList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orders != null && message.orders.length)
                for (let i = 0; i < message.orders.length; ++i)
                    $root.markets.Order.encode(message.orders[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OrderList message, length delimited. Does not implicitly {@link markets.OrderList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.OrderList
         * @static
         * @param {markets.IOrderList} message OrderList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OrderList message from the specified reader or buffer.
         * @function decode
         * @memberof markets.OrderList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.OrderList} OrderList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.OrderList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.orders && message.orders.length))
                        message.orders = [];
                    message.orders.push($root.markets.Order.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OrderList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.OrderList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.OrderList} OrderList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OrderList message.
         * @function verify
         * @memberof markets.OrderList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OrderList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.orders != null && message.hasOwnProperty("orders")) {
                if (!Array.isArray(message.orders))
                    return "orders: array expected";
                for (let i = 0; i < message.orders.length; ++i) {
                    let error = $root.markets.Order.verify(message.orders[i]);
                    if (error)
                        return "orders." + error;
                }
            }
            return null;
        };

        /**
         * Creates an OrderList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.OrderList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.OrderList} OrderList
         */
        OrderList.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.OrderList)
                return object;
            let message = new $root.markets.OrderList();
            if (object.orders) {
                if (!Array.isArray(object.orders))
                    throw TypeError(".markets.OrderList.orders: array expected");
                message.orders = [];
                for (let i = 0; i < object.orders.length; ++i) {
                    if (typeof object.orders[i] !== "object")
                        throw TypeError(".markets.OrderList.orders: object expected");
                    message.orders[i] = $root.markets.Order.fromObject(object.orders[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an OrderList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.OrderList
         * @static
         * @param {markets.OrderList} message OrderList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OrderList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.orders = [];
            if (message.orders && message.orders.length) {
                object.orders = [];
                for (let j = 0; j < message.orders.length; ++j)
                    object.orders[j] = $root.markets.Order.toObject(message.orders[j], options);
            }
            return object;
        };

        /**
         * Converts this OrderList to JSON.
         * @function toJSON
         * @memberof markets.OrderList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OrderList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OrderList;
    })();

    markets.Date = (function() {

        /**
         * Properties of a Date.
         * @memberof markets
         * @interface IDate
         * @property {number|null} [year] Date year
         * @property {number|null} [month] Date month
         * @property {number|null} [day] Date day
         */

        /**
         * Constructs a new Date.
         * @memberof markets
         * @classdesc Represents a Date.
         * @implements IDate
         * @constructor
         * @param {markets.IDate=} [properties] Properties to set
         */
        function Date(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Date year.
         * @member {number} year
         * @memberof markets.Date
         * @instance
         */
        Date.prototype.year = 0;

        /**
         * Date month.
         * @member {number} month
         * @memberof markets.Date
         * @instance
         */
        Date.prototype.month = 0;

        /**
         * Date day.
         * @member {number} day
         * @memberof markets.Date
         * @instance
         */
        Date.prototype.day = 0;

        /**
         * Creates a new Date instance using the specified properties.
         * @function create
         * @memberof markets.Date
         * @static
         * @param {markets.IDate=} [properties] Properties to set
         * @returns {markets.Date} Date instance
         */
        Date.create = function create(properties) {
            return new Date(properties);
        };

        /**
         * Encodes the specified Date message. Does not implicitly {@link markets.Date.verify|verify} messages.
         * @function encode
         * @memberof markets.Date
         * @static
         * @param {markets.IDate} message Date message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Date.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.year != null && message.hasOwnProperty("year"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.year);
            if (message.month != null && message.hasOwnProperty("month"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.month);
            if (message.day != null && message.hasOwnProperty("day"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.day);
            return writer;
        };

        /**
         * Encodes the specified Date message, length delimited. Does not implicitly {@link markets.Date.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.Date
         * @static
         * @param {markets.IDate} message Date message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Date.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Date message from the specified reader or buffer.
         * @function decode
         * @memberof markets.Date
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.Date} Date
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Date.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.Date();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.year = reader.uint32();
                    break;
                case 2:
                    message.month = reader.uint32();
                    break;
                case 3:
                    message.day = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Date message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.Date
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.Date} Date
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Date.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Date message.
         * @function verify
         * @memberof markets.Date
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Date.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.year != null && message.hasOwnProperty("year"))
                if (!$util.isInteger(message.year))
                    return "year: integer expected";
            if (message.month != null && message.hasOwnProperty("month"))
                if (!$util.isInteger(message.month))
                    return "month: integer expected";
            if (message.day != null && message.hasOwnProperty("day"))
                if (!$util.isInteger(message.day))
                    return "day: integer expected";
            return null;
        };

        /**
         * Creates a Date message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.Date
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.Date} Date
         */
        Date.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.Date)
                return object;
            let message = new $root.markets.Date();
            if (object.year != null)
                message.year = object.year >>> 0;
            if (object.month != null)
                message.month = object.month >>> 0;
            if (object.day != null)
                message.day = object.day >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Date message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.Date
         * @static
         * @param {markets.Date} message Date
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Date.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.year = 0;
                object.month = 0;
                object.day = 0;
            }
            if (message.year != null && message.hasOwnProperty("year"))
                object.year = message.year;
            if (message.month != null && message.hasOwnProperty("month"))
                object.month = message.month;
            if (message.day != null && message.hasOwnProperty("day"))
                object.day = message.day;
            return object;
        };

        /**
         * Converts this Date to JSON.
         * @function toJSON
         * @memberof markets.Date
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Date.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Date;
    })();

    markets.px = (function() {

        /**
         * Properties of a px.
         * @memberof markets
         * @interface Ipx
         * @property {number|Long|null} [val] px val
         */

        /**
         * Constructs a new px.
         * @memberof markets
         * @classdesc Represents a px.
         * @implements Ipx
         * @constructor
         * @param {markets.Ipx=} [properties] Properties to set
         */
        function px(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * px val.
         * @member {number|Long} val
         * @memberof markets.px
         * @instance
         */
        px.prototype.val = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new px instance using the specified properties.
         * @function create
         * @memberof markets.px
         * @static
         * @param {markets.Ipx=} [properties] Properties to set
         * @returns {markets.px} px instance
         */
        px.create = function create(properties) {
            return new px(properties);
        };

        /**
         * Encodes the specified px message. Does not implicitly {@link markets.px.verify|verify} messages.
         * @function encode
         * @memberof markets.px
         * @static
         * @param {markets.Ipx} message px message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        px.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.val != null && message.hasOwnProperty("val"))
                writer.uint32(/* id 1, wireType 0 =*/8).sint64(message.val);
            return writer;
        };

        /**
         * Encodes the specified px message, length delimited. Does not implicitly {@link markets.px.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.px
         * @static
         * @param {markets.Ipx} message px message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        px.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a px message from the specified reader or buffer.
         * @function decode
         * @memberof markets.px
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.px} px
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        px.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.px();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.val = reader.sint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a px message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.px
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.px} px
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        px.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a px message.
         * @function verify
         * @memberof markets.px
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        px.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.val != null && message.hasOwnProperty("val"))
                if (!$util.isInteger(message.val) && !(message.val && $util.isInteger(message.val.low) && $util.isInteger(message.val.high)))
                    return "val: integer|Long expected";
            return null;
        };

        /**
         * Creates a px message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.px
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.px} px
         */
        px.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.px)
                return object;
            let message = new $root.markets.px();
            if (object.val != null)
                if ($util.Long)
                    (message.val = $util.Long.fromValue(object.val)).unsigned = false;
                else if (typeof object.val === "string")
                    message.val = parseInt(object.val, 10);
                else if (typeof object.val === "number")
                    message.val = object.val;
                else if (typeof object.val === "object")
                    message.val = new $util.LongBits(object.val.low >>> 0, object.val.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a px message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.px
         * @static
         * @param {markets.px} message px
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        px.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.val = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.val = options.longs === String ? "0" : 0;
            if (message.val != null && message.hasOwnProperty("val"))
                if (typeof message.val === "number")
                    object.val = options.longs === String ? String(message.val) : message.val;
                else
                    object.val = options.longs === String ? $util.Long.prototype.toString.call(message.val) : options.longs === Number ? new $util.LongBits(message.val.low >>> 0, message.val.high >>> 0).toNumber() : message.val;
            return object;
        };

        /**
         * Converts this px to JSON.
         * @function toJSON
         * @memberof markets.px
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        px.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return px;
    })();

    markets.sz = (function() {

        /**
         * Properties of a sz.
         * @memberof markets
         * @interface Isz
         * @property {number|Long|null} [val] sz val
         */

        /**
         * Constructs a new sz.
         * @memberof markets
         * @classdesc Represents a sz.
         * @implements Isz
         * @constructor
         * @param {markets.Isz=} [properties] Properties to set
         */
        function sz(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * sz val.
         * @member {number|Long} val
         * @memberof markets.sz
         * @instance
         */
        sz.prototype.val = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new sz instance using the specified properties.
         * @function create
         * @memberof markets.sz
         * @static
         * @param {markets.Isz=} [properties] Properties to set
         * @returns {markets.sz} sz instance
         */
        sz.create = function create(properties) {
            return new sz(properties);
        };

        /**
         * Encodes the specified sz message. Does not implicitly {@link markets.sz.verify|verify} messages.
         * @function encode
         * @memberof markets.sz
         * @static
         * @param {markets.Isz} message sz message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        sz.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.val != null && message.hasOwnProperty("val"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.val);
            return writer;
        };

        /**
         * Encodes the specified sz message, length delimited. Does not implicitly {@link markets.sz.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.sz
         * @static
         * @param {markets.Isz} message sz message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        sz.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a sz message from the specified reader or buffer.
         * @function decode
         * @memberof markets.sz
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.sz} sz
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        sz.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.sz();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.val = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a sz message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.sz
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.sz} sz
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        sz.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a sz message.
         * @function verify
         * @memberof markets.sz
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        sz.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.val != null && message.hasOwnProperty("val"))
                if (!$util.isInteger(message.val) && !(message.val && $util.isInteger(message.val.low) && $util.isInteger(message.val.high)))
                    return "val: integer|Long expected";
            return null;
        };

        /**
         * Creates a sz message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.sz
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.sz} sz
         */
        sz.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.sz)
                return object;
            let message = new $root.markets.sz();
            if (object.val != null)
                if ($util.Long)
                    (message.val = $util.Long.fromValue(object.val)).unsigned = true;
                else if (typeof object.val === "string")
                    message.val = parseInt(object.val, 10);
                else if (typeof object.val === "number")
                    message.val = object.val;
                else if (typeof object.val === "object")
                    message.val = new $util.LongBits(object.val.low >>> 0, object.val.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a sz message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.sz
         * @static
         * @param {markets.sz} message sz
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        sz.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.val = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.val = options.longs === String ? "0" : 0;
            if (message.val != null && message.hasOwnProperty("val"))
                if (typeof message.val === "number")
                    object.val = options.longs === String ? String(message.val) : message.val;
                else
                    object.val = options.longs === String ? $util.Long.prototype.toString.call(message.val) : options.longs === Number ? new $util.LongBits(message.val.low >>> 0, message.val.high >>> 0).toNumber(true) : message.val;
            return object;
        };

        /**
         * Converts this sz to JSON.
         * @function toJSON
         * @memberof markets.sz
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        sz.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return sz;
    })();

    markets.Summary = (function() {

        /**
         * Properties of a Summary.
         * @memberof markets
         * @interface ISummary
         * @property {google.protobuf.ITimestamp|null} [timestamp] Summary timestamp
         * @property {string|null} [symbol] Summary symbol
         * @property {markets.IDate|null} [day] Summary day
         * @property {markets.Ipx|null} [closePrior] Summary closePrior
         * @property {markets.Ipx|null} [closePrior24] Summary closePrior24
         * @property {markets.Ipx|null} [open] Summary open
         * @property {markets.Ipx|null} [open24] Summary open24
         * @property {markets.Ipx|null} [high] Summary high
         * @property {markets.Ipx|null} [high24] Summary high24
         * @property {markets.Ipx|null} [low] Summary low
         * @property {markets.Ipx|null} [low24] Summary low24
         * @property {markets.Ipx|null} [last] Summary last
         * @property {markets.Isz|null} [lastQty] Summary lastQty
         * @property {markets.Isz|null} [lastQtyCum] Summary lastQtyCum
         * @property {markets.Ipx|null} [lastPrior] Summary lastPrior
         * @property {google.protobuf.ITimestamp|null} [lastTime] Summary lastTime
         * @property {markets.Isz|null} [volume] Summary volume
         * @property {markets.Isz|null} [volume24] Summary volume24
         * @property {markets.Isz|null} [volumeCum] Summary volumeCum
         * @property {markets.Ipx|null} [bid] Summary bid
         * @property {markets.Isz|null} [bidQty] Summary bidQty
         * @property {markets.Ipx|null} [bidPrior] Summary bidPrior
         * @property {markets.Ipx|null} [ask] Summary ask
         * @property {markets.Isz|null} [askQty] Summary askQty
         * @property {markets.Ipx|null} [askPrior] Summary askPrior
         * @property {number|null} [flags] Summary flags
         */

        /**
         * Constructs a new Summary.
         * @memberof markets
         * @classdesc Represents a Summary.
         * @implements ISummary
         * @constructor
         * @param {markets.ISummary=} [properties] Properties to set
         */
        function Summary(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Summary timestamp.
         * @member {google.protobuf.ITimestamp|null|undefined} timestamp
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.timestamp = null;

        /**
         * Summary symbol.
         * @member {string} symbol
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.symbol = "";

        /**
         * Summary day.
         * @member {markets.IDate|null|undefined} day
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.day = null;

        /**
         * Summary closePrior.
         * @member {markets.Ipx|null|undefined} closePrior
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.closePrior = null;

        /**
         * Summary closePrior24.
         * @member {markets.Ipx|null|undefined} closePrior24
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.closePrior24 = null;

        /**
         * Summary open.
         * @member {markets.Ipx|null|undefined} open
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.open = null;

        /**
         * Summary open24.
         * @member {markets.Ipx|null|undefined} open24
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.open24 = null;

        /**
         * Summary high.
         * @member {markets.Ipx|null|undefined} high
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.high = null;

        /**
         * Summary high24.
         * @member {markets.Ipx|null|undefined} high24
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.high24 = null;

        /**
         * Summary low.
         * @member {markets.Ipx|null|undefined} low
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.low = null;

        /**
         * Summary low24.
         * @member {markets.Ipx|null|undefined} low24
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.low24 = null;

        /**
         * Summary last.
         * @member {markets.Ipx|null|undefined} last
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.last = null;

        /**
         * Summary lastQty.
         * @member {markets.Isz|null|undefined} lastQty
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.lastQty = null;

        /**
         * Summary lastQtyCum.
         * @member {markets.Isz|null|undefined} lastQtyCum
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.lastQtyCum = null;

        /**
         * Summary lastPrior.
         * @member {markets.Ipx|null|undefined} lastPrior
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.lastPrior = null;

        /**
         * Summary lastTime.
         * @member {google.protobuf.ITimestamp|null|undefined} lastTime
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.lastTime = null;

        /**
         * Summary volume.
         * @member {markets.Isz|null|undefined} volume
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.volume = null;

        /**
         * Summary volume24.
         * @member {markets.Isz|null|undefined} volume24
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.volume24 = null;

        /**
         * Summary volumeCum.
         * @member {markets.Isz|null|undefined} volumeCum
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.volumeCum = null;

        /**
         * Summary bid.
         * @member {markets.Ipx|null|undefined} bid
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.bid = null;

        /**
         * Summary bidQty.
         * @member {markets.Isz|null|undefined} bidQty
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.bidQty = null;

        /**
         * Summary bidPrior.
         * @member {markets.Ipx|null|undefined} bidPrior
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.bidPrior = null;

        /**
         * Summary ask.
         * @member {markets.Ipx|null|undefined} ask
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.ask = null;

        /**
         * Summary askQty.
         * @member {markets.Isz|null|undefined} askQty
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.askQty = null;

        /**
         * Summary askPrior.
         * @member {markets.Ipx|null|undefined} askPrior
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.askPrior = null;

        /**
         * Summary flags.
         * @member {number} flags
         * @memberof markets.Summary
         * @instance
         */
        Summary.prototype.flags = 0;

        /**
         * Creates a new Summary instance using the specified properties.
         * @function create
         * @memberof markets.Summary
         * @static
         * @param {markets.ISummary=} [properties] Properties to set
         * @returns {markets.Summary} Summary instance
         */
        Summary.create = function create(properties) {
            return new Summary(properties);
        };

        /**
         * Encodes the specified Summary message. Does not implicitly {@link markets.Summary.verify|verify} messages.
         * @function encode
         * @memberof markets.Summary
         * @static
         * @param {markets.ISummary} message Summary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Summary.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.symbol);
            if (message.day != null && message.hasOwnProperty("day"))
                $root.markets.Date.encode(message.day, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.closePrior24 != null && message.hasOwnProperty("closePrior24"))
                $root.markets.px.encode(message.closePrior24, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.closePrior != null && message.hasOwnProperty("closePrior"))
                $root.markets.px.encode(message.closePrior, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.open != null && message.hasOwnProperty("open"))
                $root.markets.px.encode(message.open, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.high != null && message.hasOwnProperty("high"))
                $root.markets.px.encode(message.high, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.high24 != null && message.hasOwnProperty("high24"))
                $root.markets.px.encode(message.high24, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.low != null && message.hasOwnProperty("low"))
                $root.markets.px.encode(message.low, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.low24 != null && message.hasOwnProperty("low24"))
                $root.markets.px.encode(message.low24, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.last != null && message.hasOwnProperty("last"))
                $root.markets.px.encode(message.last, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.lastQty != null && message.hasOwnProperty("lastQty"))
                $root.markets.sz.encode(message.lastQty, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.lastQtyCum != null && message.hasOwnProperty("lastQtyCum"))
                $root.markets.sz.encode(message.lastQtyCum, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.lastPrior != null && message.hasOwnProperty("lastPrior"))
                $root.markets.px.encode(message.lastPrior, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.lastTime != null && message.hasOwnProperty("lastTime"))
                $root.google.protobuf.Timestamp.encode(message.lastTime, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.volume != null && message.hasOwnProperty("volume"))
                $root.markets.sz.encode(message.volume, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.volume24 != null && message.hasOwnProperty("volume24"))
                $root.markets.sz.encode(message.volume24, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.volumeCum != null && message.hasOwnProperty("volumeCum"))
                $root.markets.sz.encode(message.volumeCum, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.bid != null && message.hasOwnProperty("bid"))
                $root.markets.px.encode(message.bid, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.bidQty != null && message.hasOwnProperty("bidQty"))
                $root.markets.sz.encode(message.bidQty, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.bidPrior != null && message.hasOwnProperty("bidPrior"))
                $root.markets.px.encode(message.bidPrior, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.ask != null && message.hasOwnProperty("ask"))
                $root.markets.px.encode(message.ask, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.askQty != null && message.hasOwnProperty("askQty"))
                $root.markets.sz.encode(message.askQty, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.askPrior != null && message.hasOwnProperty("askPrior"))
                $root.markets.px.encode(message.askPrior, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.flags != null && message.hasOwnProperty("flags"))
                writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.flags);
            if (message.open24 != null && message.hasOwnProperty("open24"))
                $root.markets.px.encode(message.open24, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Summary message, length delimited. Does not implicitly {@link markets.Summary.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.Summary
         * @static
         * @param {markets.ISummary} message Summary message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Summary.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Summary message from the specified reader or buffer.
         * @function decode
         * @memberof markets.Summary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.Summary} Summary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Summary.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.Summary();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.symbol = reader.string();
                    break;
                case 3:
                    message.day = $root.markets.Date.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.closePrior = $root.markets.px.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.closePrior24 = $root.markets.px.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.open = $root.markets.px.decode(reader, reader.uint32());
                    break;
                case 26:
                    message.open24 = $root.markets.px.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.high = $root.markets.px.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.high24 = $root.markets.px.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.low = $root.markets.px.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.low24 = $root.markets.px.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.last = $root.markets.px.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.lastQty = $root.markets.sz.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.lastQtyCum = $root.markets.sz.decode(reader, reader.uint32());
                    break;
                case 14:
                    message.lastPrior = $root.markets.px.decode(reader, reader.uint32());
                    break;
                case 15:
                    message.lastTime = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.volume = $root.markets.sz.decode(reader, reader.uint32());
                    break;
                case 17:
                    message.volume24 = $root.markets.sz.decode(reader, reader.uint32());
                    break;
                case 18:
                    message.volumeCum = $root.markets.sz.decode(reader, reader.uint32());
                    break;
                case 19:
                    message.bid = $root.markets.px.decode(reader, reader.uint32());
                    break;
                case 20:
                    message.bidQty = $root.markets.sz.decode(reader, reader.uint32());
                    break;
                case 21:
                    message.bidPrior = $root.markets.px.decode(reader, reader.uint32());
                    break;
                case 22:
                    message.ask = $root.markets.px.decode(reader, reader.uint32());
                    break;
                case 23:
                    message.askQty = $root.markets.sz.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.askPrior = $root.markets.px.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.flags = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Summary message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.Summary
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.Summary} Summary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Summary.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Summary message.
         * @function verify
         * @memberof markets.Summary
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Summary.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                let error = $root.google.protobuf.Timestamp.verify(message.timestamp);
                if (error)
                    return "timestamp." + error;
            }
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                if (!$util.isString(message.symbol))
                    return "symbol: string expected";
            if (message.day != null && message.hasOwnProperty("day")) {
                let error = $root.markets.Date.verify(message.day);
                if (error)
                    return "day." + error;
            }
            if (message.closePrior != null && message.hasOwnProperty("closePrior")) {
                let error = $root.markets.px.verify(message.closePrior);
                if (error)
                    return "closePrior." + error;
            }
            if (message.closePrior24 != null && message.hasOwnProperty("closePrior24")) {
                let error = $root.markets.px.verify(message.closePrior24);
                if (error)
                    return "closePrior24." + error;
            }
            if (message.open != null && message.hasOwnProperty("open")) {
                let error = $root.markets.px.verify(message.open);
                if (error)
                    return "open." + error;
            }
            if (message.open24 != null && message.hasOwnProperty("open24")) {
                let error = $root.markets.px.verify(message.open24);
                if (error)
                    return "open24." + error;
            }
            if (message.high != null && message.hasOwnProperty("high")) {
                let error = $root.markets.px.verify(message.high);
                if (error)
                    return "high." + error;
            }
            if (message.high24 != null && message.hasOwnProperty("high24")) {
                let error = $root.markets.px.verify(message.high24);
                if (error)
                    return "high24." + error;
            }
            if (message.low != null && message.hasOwnProperty("low")) {
                let error = $root.markets.px.verify(message.low);
                if (error)
                    return "low." + error;
            }
            if (message.low24 != null && message.hasOwnProperty("low24")) {
                let error = $root.markets.px.verify(message.low24);
                if (error)
                    return "low24." + error;
            }
            if (message.last != null && message.hasOwnProperty("last")) {
                let error = $root.markets.px.verify(message.last);
                if (error)
                    return "last." + error;
            }
            if (message.lastQty != null && message.hasOwnProperty("lastQty")) {
                let error = $root.markets.sz.verify(message.lastQty);
                if (error)
                    return "lastQty." + error;
            }
            if (message.lastQtyCum != null && message.hasOwnProperty("lastQtyCum")) {
                let error = $root.markets.sz.verify(message.lastQtyCum);
                if (error)
                    return "lastQtyCum." + error;
            }
            if (message.lastPrior != null && message.hasOwnProperty("lastPrior")) {
                let error = $root.markets.px.verify(message.lastPrior);
                if (error)
                    return "lastPrior." + error;
            }
            if (message.lastTime != null && message.hasOwnProperty("lastTime")) {
                let error = $root.google.protobuf.Timestamp.verify(message.lastTime);
                if (error)
                    return "lastTime." + error;
            }
            if (message.volume != null && message.hasOwnProperty("volume")) {
                let error = $root.markets.sz.verify(message.volume);
                if (error)
                    return "volume." + error;
            }
            if (message.volume24 != null && message.hasOwnProperty("volume24")) {
                let error = $root.markets.sz.verify(message.volume24);
                if (error)
                    return "volume24." + error;
            }
            if (message.volumeCum != null && message.hasOwnProperty("volumeCum")) {
                let error = $root.markets.sz.verify(message.volumeCum);
                if (error)
                    return "volumeCum." + error;
            }
            if (message.bid != null && message.hasOwnProperty("bid")) {
                let error = $root.markets.px.verify(message.bid);
                if (error)
                    return "bid." + error;
            }
            if (message.bidQty != null && message.hasOwnProperty("bidQty")) {
                let error = $root.markets.sz.verify(message.bidQty);
                if (error)
                    return "bidQty." + error;
            }
            if (message.bidPrior != null && message.hasOwnProperty("bidPrior")) {
                let error = $root.markets.px.verify(message.bidPrior);
                if (error)
                    return "bidPrior." + error;
            }
            if (message.ask != null && message.hasOwnProperty("ask")) {
                let error = $root.markets.px.verify(message.ask);
                if (error)
                    return "ask." + error;
            }
            if (message.askQty != null && message.hasOwnProperty("askQty")) {
                let error = $root.markets.sz.verify(message.askQty);
                if (error)
                    return "askQty." + error;
            }
            if (message.askPrior != null && message.hasOwnProperty("askPrior")) {
                let error = $root.markets.px.verify(message.askPrior);
                if (error)
                    return "askPrior." + error;
            }
            if (message.flags != null && message.hasOwnProperty("flags"))
                if (!$util.isInteger(message.flags))
                    return "flags: integer expected";
            return null;
        };

        /**
         * Creates a Summary message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.Summary
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.Summary} Summary
         */
        Summary.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.Summary)
                return object;
            let message = new $root.markets.Summary();
            if (object.timestamp != null) {
                if (typeof object.timestamp !== "object")
                    throw TypeError(".markets.Summary.timestamp: object expected");
                message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
            }
            if (object.symbol != null)
                message.symbol = String(object.symbol);
            if (object.day != null) {
                if (typeof object.day !== "object")
                    throw TypeError(".markets.Summary.day: object expected");
                message.day = $root.markets.Date.fromObject(object.day);
            }
            if (object.closePrior != null) {
                if (typeof object.closePrior !== "object")
                    throw TypeError(".markets.Summary.closePrior: object expected");
                message.closePrior = $root.markets.px.fromObject(object.closePrior);
            }
            if (object.closePrior24 != null) {
                if (typeof object.closePrior24 !== "object")
                    throw TypeError(".markets.Summary.closePrior24: object expected");
                message.closePrior24 = $root.markets.px.fromObject(object.closePrior24);
            }
            if (object.open != null) {
                if (typeof object.open !== "object")
                    throw TypeError(".markets.Summary.open: object expected");
                message.open = $root.markets.px.fromObject(object.open);
            }
            if (object.open24 != null) {
                if (typeof object.open24 !== "object")
                    throw TypeError(".markets.Summary.open24: object expected");
                message.open24 = $root.markets.px.fromObject(object.open24);
            }
            if (object.high != null) {
                if (typeof object.high !== "object")
                    throw TypeError(".markets.Summary.high: object expected");
                message.high = $root.markets.px.fromObject(object.high);
            }
            if (object.high24 != null) {
                if (typeof object.high24 !== "object")
                    throw TypeError(".markets.Summary.high24: object expected");
                message.high24 = $root.markets.px.fromObject(object.high24);
            }
            if (object.low != null) {
                if (typeof object.low !== "object")
                    throw TypeError(".markets.Summary.low: object expected");
                message.low = $root.markets.px.fromObject(object.low);
            }
            if (object.low24 != null) {
                if (typeof object.low24 !== "object")
                    throw TypeError(".markets.Summary.low24: object expected");
                message.low24 = $root.markets.px.fromObject(object.low24);
            }
            if (object.last != null) {
                if (typeof object.last !== "object")
                    throw TypeError(".markets.Summary.last: object expected");
                message.last = $root.markets.px.fromObject(object.last);
            }
            if (object.lastQty != null) {
                if (typeof object.lastQty !== "object")
                    throw TypeError(".markets.Summary.lastQty: object expected");
                message.lastQty = $root.markets.sz.fromObject(object.lastQty);
            }
            if (object.lastQtyCum != null) {
                if (typeof object.lastQtyCum !== "object")
                    throw TypeError(".markets.Summary.lastQtyCum: object expected");
                message.lastQtyCum = $root.markets.sz.fromObject(object.lastQtyCum);
            }
            if (object.lastPrior != null) {
                if (typeof object.lastPrior !== "object")
                    throw TypeError(".markets.Summary.lastPrior: object expected");
                message.lastPrior = $root.markets.px.fromObject(object.lastPrior);
            }
            if (object.lastTime != null) {
                if (typeof object.lastTime !== "object")
                    throw TypeError(".markets.Summary.lastTime: object expected");
                message.lastTime = $root.google.protobuf.Timestamp.fromObject(object.lastTime);
            }
            if (object.volume != null) {
                if (typeof object.volume !== "object")
                    throw TypeError(".markets.Summary.volume: object expected");
                message.volume = $root.markets.sz.fromObject(object.volume);
            }
            if (object.volume24 != null) {
                if (typeof object.volume24 !== "object")
                    throw TypeError(".markets.Summary.volume24: object expected");
                message.volume24 = $root.markets.sz.fromObject(object.volume24);
            }
            if (object.volumeCum != null) {
                if (typeof object.volumeCum !== "object")
                    throw TypeError(".markets.Summary.volumeCum: object expected");
                message.volumeCum = $root.markets.sz.fromObject(object.volumeCum);
            }
            if (object.bid != null) {
                if (typeof object.bid !== "object")
                    throw TypeError(".markets.Summary.bid: object expected");
                message.bid = $root.markets.px.fromObject(object.bid);
            }
            if (object.bidQty != null) {
                if (typeof object.bidQty !== "object")
                    throw TypeError(".markets.Summary.bidQty: object expected");
                message.bidQty = $root.markets.sz.fromObject(object.bidQty);
            }
            if (object.bidPrior != null) {
                if (typeof object.bidPrior !== "object")
                    throw TypeError(".markets.Summary.bidPrior: object expected");
                message.bidPrior = $root.markets.px.fromObject(object.bidPrior);
            }
            if (object.ask != null) {
                if (typeof object.ask !== "object")
                    throw TypeError(".markets.Summary.ask: object expected");
                message.ask = $root.markets.px.fromObject(object.ask);
            }
            if (object.askQty != null) {
                if (typeof object.askQty !== "object")
                    throw TypeError(".markets.Summary.askQty: object expected");
                message.askQty = $root.markets.sz.fromObject(object.askQty);
            }
            if (object.askPrior != null) {
                if (typeof object.askPrior !== "object")
                    throw TypeError(".markets.Summary.askPrior: object expected");
                message.askPrior = $root.markets.px.fromObject(object.askPrior);
            }
            if (object.flags != null)
                message.flags = object.flags >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Summary message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.Summary
         * @static
         * @param {markets.Summary} message Summary
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Summary.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.timestamp = null;
                object.symbol = "";
                object.day = null;
                object.closePrior24 = null;
                object.closePrior = null;
                object.open = null;
                object.high = null;
                object.high24 = null;
                object.low = null;
                object.low24 = null;
                object.last = null;
                object.lastQty = null;
                object.lastQtyCum = null;
                object.lastPrior = null;
                object.lastTime = null;
                object.volume = null;
                object.volume24 = null;
                object.volumeCum = null;
                object.bid = null;
                object.bidQty = null;
                object.bidPrior = null;
                object.ask = null;
                object.askQty = null;
                object.askPrior = null;
                object.flags = 0;
                object.open24 = null;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = message.symbol;
            if (message.day != null && message.hasOwnProperty("day"))
                object.day = $root.markets.Date.toObject(message.day, options);
            if (message.closePrior24 != null && message.hasOwnProperty("closePrior24"))
                object.closePrior24 = $root.markets.px.toObject(message.closePrior24, options);
            if (message.closePrior != null && message.hasOwnProperty("closePrior"))
                object.closePrior = $root.markets.px.toObject(message.closePrior, options);
            if (message.open != null && message.hasOwnProperty("open"))
                object.open = $root.markets.px.toObject(message.open, options);
            if (message.high != null && message.hasOwnProperty("high"))
                object.high = $root.markets.px.toObject(message.high, options);
            if (message.high24 != null && message.hasOwnProperty("high24"))
                object.high24 = $root.markets.px.toObject(message.high24, options);
            if (message.low != null && message.hasOwnProperty("low"))
                object.low = $root.markets.px.toObject(message.low, options);
            if (message.low24 != null && message.hasOwnProperty("low24"))
                object.low24 = $root.markets.px.toObject(message.low24, options);
            if (message.last != null && message.hasOwnProperty("last"))
                object.last = $root.markets.px.toObject(message.last, options);
            if (message.lastQty != null && message.hasOwnProperty("lastQty"))
                object.lastQty = $root.markets.sz.toObject(message.lastQty, options);
            if (message.lastQtyCum != null && message.hasOwnProperty("lastQtyCum"))
                object.lastQtyCum = $root.markets.sz.toObject(message.lastQtyCum, options);
            if (message.lastPrior != null && message.hasOwnProperty("lastPrior"))
                object.lastPrior = $root.markets.px.toObject(message.lastPrior, options);
            if (message.lastTime != null && message.hasOwnProperty("lastTime"))
                object.lastTime = $root.google.protobuf.Timestamp.toObject(message.lastTime, options);
            if (message.volume != null && message.hasOwnProperty("volume"))
                object.volume = $root.markets.sz.toObject(message.volume, options);
            if (message.volume24 != null && message.hasOwnProperty("volume24"))
                object.volume24 = $root.markets.sz.toObject(message.volume24, options);
            if (message.volumeCum != null && message.hasOwnProperty("volumeCum"))
                object.volumeCum = $root.markets.sz.toObject(message.volumeCum, options);
            if (message.bid != null && message.hasOwnProperty("bid"))
                object.bid = $root.markets.px.toObject(message.bid, options);
            if (message.bidQty != null && message.hasOwnProperty("bidQty"))
                object.bidQty = $root.markets.sz.toObject(message.bidQty, options);
            if (message.bidPrior != null && message.hasOwnProperty("bidPrior"))
                object.bidPrior = $root.markets.px.toObject(message.bidPrior, options);
            if (message.ask != null && message.hasOwnProperty("ask"))
                object.ask = $root.markets.px.toObject(message.ask, options);
            if (message.askQty != null && message.hasOwnProperty("askQty"))
                object.askQty = $root.markets.sz.toObject(message.askQty, options);
            if (message.askPrior != null && message.hasOwnProperty("askPrior"))
                object.askPrior = $root.markets.px.toObject(message.askPrior, options);
            if (message.flags != null && message.hasOwnProperty("flags"))
                object.flags = message.flags;
            if (message.open24 != null && message.hasOwnProperty("open24"))
                object.open24 = $root.markets.px.toObject(message.open24, options);
            return object;
        };

        /**
         * Converts this Summary to JSON.
         * @function toJSON
         * @memberof markets.Summary
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Summary.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Summary;
    })();

    markets.Position = (function() {

        /**
         * Properties of a Position.
         * @memberof markets
         * @interface IPosition
         * @property {number|Long|null} [available] Position available
         * @property {number|Long|null} [open] Position open
         * @property {number|Long|null} [pending] Position pending
         */

        /**
         * Constructs a new Position.
         * @memberof markets
         * @classdesc Represents a Position.
         * @implements IPosition
         * @constructor
         * @param {markets.IPosition=} [properties] Properties to set
         */
        function Position(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Position available.
         * @member {number|Long} available
         * @memberof markets.Position
         * @instance
         */
        Position.prototype.available = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Position open.
         * @member {number|Long} open
         * @memberof markets.Position
         * @instance
         */
        Position.prototype.open = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Position pending.
         * @member {number|Long} pending
         * @memberof markets.Position
         * @instance
         */
        Position.prototype.pending = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Position instance using the specified properties.
         * @function create
         * @memberof markets.Position
         * @static
         * @param {markets.IPosition=} [properties] Properties to set
         * @returns {markets.Position} Position instance
         */
        Position.create = function create(properties) {
            return new Position(properties);
        };

        /**
         * Encodes the specified Position message. Does not implicitly {@link markets.Position.verify|verify} messages.
         * @function encode
         * @memberof markets.Position
         * @static
         * @param {markets.IPosition} message Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Position.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.available != null && message.hasOwnProperty("available"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.available);
            if (message.open != null && message.hasOwnProperty("open"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.open);
            if (message.pending != null && message.hasOwnProperty("pending"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.pending);
            return writer;
        };

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link markets.Position.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.Position
         * @static
         * @param {markets.IPosition} message Position message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Position.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @function decode
         * @memberof markets.Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.Position} Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Position.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.Position();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.available = reader.uint64();
                    break;
                case 2:
                    message.open = reader.uint64();
                    break;
                case 3:
                    message.pending = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.Position
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.Position} Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Position.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Position message.
         * @function verify
         * @memberof markets.Position
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Position.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.available != null && message.hasOwnProperty("available"))
                if (!$util.isInteger(message.available) && !(message.available && $util.isInteger(message.available.low) && $util.isInteger(message.available.high)))
                    return "available: integer|Long expected";
            if (message.open != null && message.hasOwnProperty("open"))
                if (!$util.isInteger(message.open) && !(message.open && $util.isInteger(message.open.low) && $util.isInteger(message.open.high)))
                    return "open: integer|Long expected";
            if (message.pending != null && message.hasOwnProperty("pending"))
                if (!$util.isInteger(message.pending) && !(message.pending && $util.isInteger(message.pending.low) && $util.isInteger(message.pending.high)))
                    return "pending: integer|Long expected";
            return null;
        };

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.Position
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.Position} Position
         */
        Position.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.Position)
                return object;
            let message = new $root.markets.Position();
            if (object.available != null)
                if ($util.Long)
                    (message.available = $util.Long.fromValue(object.available)).unsigned = true;
                else if (typeof object.available === "string")
                    message.available = parseInt(object.available, 10);
                else if (typeof object.available === "number")
                    message.available = object.available;
                else if (typeof object.available === "object")
                    message.available = new $util.LongBits(object.available.low >>> 0, object.available.high >>> 0).toNumber(true);
            if (object.open != null)
                if ($util.Long)
                    (message.open = $util.Long.fromValue(object.open)).unsigned = true;
                else if (typeof object.open === "string")
                    message.open = parseInt(object.open, 10);
                else if (typeof object.open === "number")
                    message.open = object.open;
                else if (typeof object.open === "object")
                    message.open = new $util.LongBits(object.open.low >>> 0, object.open.high >>> 0).toNumber(true);
            if (object.pending != null)
                if ($util.Long)
                    (message.pending = $util.Long.fromValue(object.pending)).unsigned = true;
                else if (typeof object.pending === "string")
                    message.pending = parseInt(object.pending, 10);
                else if (typeof object.pending === "number")
                    message.pending = object.pending;
                else if (typeof object.pending === "object")
                    message.pending = new $util.LongBits(object.pending.low >>> 0, object.pending.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.Position
         * @static
         * @param {markets.Position} message Position
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Position.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.available = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.available = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.open = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.open = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.pending = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pending = options.longs === String ? "0" : 0;
            }
            if (message.available != null && message.hasOwnProperty("available"))
                if (typeof message.available === "number")
                    object.available = options.longs === String ? String(message.available) : message.available;
                else
                    object.available = options.longs === String ? $util.Long.prototype.toString.call(message.available) : options.longs === Number ? new $util.LongBits(message.available.low >>> 0, message.available.high >>> 0).toNumber(true) : message.available;
            if (message.open != null && message.hasOwnProperty("open"))
                if (typeof message.open === "number")
                    object.open = options.longs === String ? String(message.open) : message.open;
                else
                    object.open = options.longs === String ? $util.Long.prototype.toString.call(message.open) : options.longs === Number ? new $util.LongBits(message.open.low >>> 0, message.open.high >>> 0).toNumber(true) : message.open;
            if (message.pending != null && message.hasOwnProperty("pending"))
                if (typeof message.pending === "number")
                    object.pending = options.longs === String ? String(message.pending) : message.pending;
                else
                    object.pending = options.longs === String ? $util.Long.prototype.toString.call(message.pending) : options.longs === Number ? new $util.LongBits(message.pending.low >>> 0, message.pending.high >>> 0).toNumber(true) : message.pending;
            return object;
        };

        /**
         * Converts this Position to JSON.
         * @function toJSON
         * @memberof markets.Position
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Position.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Position;
    })();

    markets.Wallet = (function() {

        /**
         * Properties of a Wallet.
         * @memberof markets
         * @interface IWallet
         * @property {string|null} [asset] Wallet asset
         * @property {markets.IPosition|null} [position] Wallet position
         */

        /**
         * Constructs a new Wallet.
         * @memberof markets
         * @classdesc Represents a Wallet.
         * @implements IWallet
         * @constructor
         * @param {markets.IWallet=} [properties] Properties to set
         */
        function Wallet(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Wallet asset.
         * @member {string} asset
         * @memberof markets.Wallet
         * @instance
         */
        Wallet.prototype.asset = "";

        /**
         * Wallet position.
         * @member {markets.IPosition|null|undefined} position
         * @memberof markets.Wallet
         * @instance
         */
        Wallet.prototype.position = null;

        /**
         * Creates a new Wallet instance using the specified properties.
         * @function create
         * @memberof markets.Wallet
         * @static
         * @param {markets.IWallet=} [properties] Properties to set
         * @returns {markets.Wallet} Wallet instance
         */
        Wallet.create = function create(properties) {
            return new Wallet(properties);
        };

        /**
         * Encodes the specified Wallet message. Does not implicitly {@link markets.Wallet.verify|verify} messages.
         * @function encode
         * @memberof markets.Wallet
         * @static
         * @param {markets.IWallet} message Wallet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Wallet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.asset != null && message.hasOwnProperty("asset"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.asset);
            if (message.position != null && message.hasOwnProperty("position"))
                $root.markets.Position.encode(message.position, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Wallet message, length delimited. Does not implicitly {@link markets.Wallet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.Wallet
         * @static
         * @param {markets.IWallet} message Wallet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Wallet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Wallet message from the specified reader or buffer.
         * @function decode
         * @memberof markets.Wallet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.Wallet} Wallet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Wallet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.Wallet();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.asset = reader.string();
                    break;
                case 2:
                    message.position = $root.markets.Position.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Wallet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.Wallet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.Wallet} Wallet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Wallet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Wallet message.
         * @function verify
         * @memberof markets.Wallet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Wallet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.asset != null && message.hasOwnProperty("asset"))
                if (!$util.isString(message.asset))
                    return "asset: string expected";
            if (message.position != null && message.hasOwnProperty("position")) {
                let error = $root.markets.Position.verify(message.position);
                if (error)
                    return "position." + error;
            }
            return null;
        };

        /**
         * Creates a Wallet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.Wallet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.Wallet} Wallet
         */
        Wallet.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.Wallet)
                return object;
            let message = new $root.markets.Wallet();
            if (object.asset != null)
                message.asset = String(object.asset);
            if (object.position != null) {
                if (typeof object.position !== "object")
                    throw TypeError(".markets.Wallet.position: object expected");
                message.position = $root.markets.Position.fromObject(object.position);
            }
            return message;
        };

        /**
         * Creates a plain object from a Wallet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.Wallet
         * @static
         * @param {markets.Wallet} message Wallet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Wallet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.asset = "";
                object.position = null;
            }
            if (message.asset != null && message.hasOwnProperty("asset"))
                object.asset = message.asset;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = $root.markets.Position.toObject(message.position, options);
            return object;
        };

        /**
         * Converts this Wallet to JSON.
         * @function toJSON
         * @memberof markets.Wallet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Wallet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Wallet;
    })();

    markets.Pocket = (function() {

        /**
         * Properties of a Pocket.
         * @memberof markets
         * @interface IPocket
         * @property {number|null} [profileID] Pocket profileID
         * @property {string|null} [name] Pocket name
         * @property {Array.<markets.IWallet>|null} [wallets] Pocket wallets
         */

        /**
         * Constructs a new Pocket.
         * @memberof markets
         * @classdesc Represents a Pocket.
         * @implements IPocket
         * @constructor
         * @param {markets.IPocket=} [properties] Properties to set
         */
        function Pocket(properties) {
            this.wallets = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Pocket profileID.
         * @member {number} profileID
         * @memberof markets.Pocket
         * @instance
         */
        Pocket.prototype.profileID = 0;

        /**
         * Pocket name.
         * @member {string} name
         * @memberof markets.Pocket
         * @instance
         */
        Pocket.prototype.name = "";

        /**
         * Pocket wallets.
         * @member {Array.<markets.IWallet>} wallets
         * @memberof markets.Pocket
         * @instance
         */
        Pocket.prototype.wallets = $util.emptyArray;

        /**
         * Creates a new Pocket instance using the specified properties.
         * @function create
         * @memberof markets.Pocket
         * @static
         * @param {markets.IPocket=} [properties] Properties to set
         * @returns {markets.Pocket} Pocket instance
         */
        Pocket.create = function create(properties) {
            return new Pocket(properties);
        };

        /**
         * Encodes the specified Pocket message. Does not implicitly {@link markets.Pocket.verify|verify} messages.
         * @function encode
         * @memberof markets.Pocket
         * @static
         * @param {markets.IPocket} message Pocket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pocket.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.profileID != null && message.hasOwnProperty("profileID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.profileID);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.wallets != null && message.wallets.length)
                for (let i = 0; i < message.wallets.length; ++i)
                    $root.markets.Wallet.encode(message.wallets[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Pocket message, length delimited. Does not implicitly {@link markets.Pocket.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.Pocket
         * @static
         * @param {markets.IPocket} message Pocket message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Pocket.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Pocket message from the specified reader or buffer.
         * @function decode
         * @memberof markets.Pocket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.Pocket} Pocket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pocket.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.Pocket();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.profileID = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    if (!(message.wallets && message.wallets.length))
                        message.wallets = [];
                    message.wallets.push($root.markets.Wallet.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Pocket message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.Pocket
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.Pocket} Pocket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Pocket.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Pocket message.
         * @function verify
         * @memberof markets.Pocket
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Pocket.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.profileID != null && message.hasOwnProperty("profileID"))
                if (!$util.isInteger(message.profileID))
                    return "profileID: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.wallets != null && message.hasOwnProperty("wallets")) {
                if (!Array.isArray(message.wallets))
                    return "wallets: array expected";
                for (let i = 0; i < message.wallets.length; ++i) {
                    let error = $root.markets.Wallet.verify(message.wallets[i]);
                    if (error)
                        return "wallets." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Pocket message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.Pocket
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.Pocket} Pocket
         */
        Pocket.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.Pocket)
                return object;
            let message = new $root.markets.Pocket();
            if (object.profileID != null)
                message.profileID = object.profileID >>> 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.wallets) {
                if (!Array.isArray(object.wallets))
                    throw TypeError(".markets.Pocket.wallets: array expected");
                message.wallets = [];
                for (let i = 0; i < object.wallets.length; ++i) {
                    if (typeof object.wallets[i] !== "object")
                        throw TypeError(".markets.Pocket.wallets: object expected");
                    message.wallets[i] = $root.markets.Wallet.fromObject(object.wallets[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Pocket message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.Pocket
         * @static
         * @param {markets.Pocket} message Pocket
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Pocket.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.wallets = [];
            if (options.defaults) {
                object.profileID = 0;
                object.name = "";
            }
            if (message.profileID != null && message.hasOwnProperty("profileID"))
                object.profileID = message.profileID;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.wallets && message.wallets.length) {
                object.wallets = [];
                for (let j = 0; j < message.wallets.length; ++j)
                    object.wallets[j] = $root.markets.Wallet.toObject(message.wallets[j], options);
            }
            return object;
        };

        /**
         * Converts this Pocket to JSON.
         * @function toJSON
         * @memberof markets.Pocket
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Pocket.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Pocket;
    })();

    markets.Interval = (function() {

        /**
         * Properties of an Interval.
         * @memberof markets
         * @interface IInterval
         * @property {google.protobuf.ITimestamp|null} [begin] Interval begin
         * @property {google.protobuf.ITimestamp|null} [end] Interval end
         */

        /**
         * Constructs a new Interval.
         * @memberof markets
         * @classdesc Represents an Interval.
         * @implements IInterval
         * @constructor
         * @param {markets.IInterval=} [properties] Properties to set
         */
        function Interval(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Interval begin.
         * @member {google.protobuf.ITimestamp|null|undefined} begin
         * @memberof markets.Interval
         * @instance
         */
        Interval.prototype.begin = null;

        /**
         * Interval end.
         * @member {google.protobuf.ITimestamp|null|undefined} end
         * @memberof markets.Interval
         * @instance
         */
        Interval.prototype.end = null;

        /**
         * Creates a new Interval instance using the specified properties.
         * @function create
         * @memberof markets.Interval
         * @static
         * @param {markets.IInterval=} [properties] Properties to set
         * @returns {markets.Interval} Interval instance
         */
        Interval.create = function create(properties) {
            return new Interval(properties);
        };

        /**
         * Encodes the specified Interval message. Does not implicitly {@link markets.Interval.verify|verify} messages.
         * @function encode
         * @memberof markets.Interval
         * @static
         * @param {markets.IInterval} message Interval message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Interval.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.begin != null && message.hasOwnProperty("begin"))
                $root.google.protobuf.Timestamp.encode(message.begin, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.end != null && message.hasOwnProperty("end"))
                $root.google.protobuf.Timestamp.encode(message.end, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Interval message, length delimited. Does not implicitly {@link markets.Interval.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.Interval
         * @static
         * @param {markets.IInterval} message Interval message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Interval.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Interval message from the specified reader or buffer.
         * @function decode
         * @memberof markets.Interval
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.Interval} Interval
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Interval.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.Interval();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.begin = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.end = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Interval message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.Interval
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.Interval} Interval
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Interval.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Interval message.
         * @function verify
         * @memberof markets.Interval
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Interval.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.begin != null && message.hasOwnProperty("begin")) {
                let error = $root.google.protobuf.Timestamp.verify(message.begin);
                if (error)
                    return "begin." + error;
            }
            if (message.end != null && message.hasOwnProperty("end")) {
                let error = $root.google.protobuf.Timestamp.verify(message.end);
                if (error)
                    return "end." + error;
            }
            return null;
        };

        /**
         * Creates an Interval message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.Interval
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.Interval} Interval
         */
        Interval.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.Interval)
                return object;
            let message = new $root.markets.Interval();
            if (object.begin != null) {
                if (typeof object.begin !== "object")
                    throw TypeError(".markets.Interval.begin: object expected");
                message.begin = $root.google.protobuf.Timestamp.fromObject(object.begin);
            }
            if (object.end != null) {
                if (typeof object.end !== "object")
                    throw TypeError(".markets.Interval.end: object expected");
                message.end = $root.google.protobuf.Timestamp.fromObject(object.end);
            }
            return message;
        };

        /**
         * Creates a plain object from an Interval message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.Interval
         * @static
         * @param {markets.Interval} message Interval
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Interval.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.begin = null;
                object.end = null;
            }
            if (message.begin != null && message.hasOwnProperty("begin"))
                object.begin = $root.google.protobuf.Timestamp.toObject(message.begin, options);
            if (message.end != null && message.hasOwnProperty("end"))
                object.end = $root.google.protobuf.Timestamp.toObject(message.end, options);
            return object;
        };

        /**
         * Converts this Interval to JSON.
         * @function toJSON
         * @memberof markets.Interval
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Interval.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Interval;
    })();

    markets.Segment = (function() {

        /**
         * Properties of a Segment.
         * @memberof markets
         * @interface ISegment
         * @property {markets.IInterval|null} [domain] Segment domain
         * @property {markets.ITrades|null} [trades] Segment trades
         */

        /**
         * Constructs a new Segment.
         * @memberof markets
         * @classdesc Represents a Segment.
         * @implements ISegment
         * @constructor
         * @param {markets.ISegment=} [properties] Properties to set
         */
        function Segment(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Segment domain.
         * @member {markets.IInterval|null|undefined} domain
         * @memberof markets.Segment
         * @instance
         */
        Segment.prototype.domain = null;

        /**
         * Segment trades.
         * @member {markets.ITrades|null|undefined} trades
         * @memberof markets.Segment
         * @instance
         */
        Segment.prototype.trades = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Segment series.
         * @member {"trades"|undefined} series
         * @memberof markets.Segment
         * @instance
         */
        Object.defineProperty(Segment.prototype, "series", {
            get: $util.oneOfGetter($oneOfFields = ["trades"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Segment instance using the specified properties.
         * @function create
         * @memberof markets.Segment
         * @static
         * @param {markets.ISegment=} [properties] Properties to set
         * @returns {markets.Segment} Segment instance
         */
        Segment.create = function create(properties) {
            return new Segment(properties);
        };

        /**
         * Encodes the specified Segment message. Does not implicitly {@link markets.Segment.verify|verify} messages.
         * @function encode
         * @memberof markets.Segment
         * @static
         * @param {markets.ISegment} message Segment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Segment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.domain != null && message.hasOwnProperty("domain"))
                $root.markets.Interval.encode(message.domain, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.trades != null && message.hasOwnProperty("trades"))
                $root.markets.Trades.encode(message.trades, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Segment message, length delimited. Does not implicitly {@link markets.Segment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.Segment
         * @static
         * @param {markets.ISegment} message Segment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Segment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Segment message from the specified reader or buffer.
         * @function decode
         * @memberof markets.Segment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.Segment} Segment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Segment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.Segment();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.domain = $root.markets.Interval.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.trades = $root.markets.Trades.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Segment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.Segment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.Segment} Segment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Segment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Segment message.
         * @function verify
         * @memberof markets.Segment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Segment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.domain != null && message.hasOwnProperty("domain")) {
                let error = $root.markets.Interval.verify(message.domain);
                if (error)
                    return "domain." + error;
            }
            if (message.trades != null && message.hasOwnProperty("trades")) {
                properties.series = 1;
                {
                    let error = $root.markets.Trades.verify(message.trades);
                    if (error)
                        return "trades." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Segment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.Segment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.Segment} Segment
         */
        Segment.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.Segment)
                return object;
            let message = new $root.markets.Segment();
            if (object.domain != null) {
                if (typeof object.domain !== "object")
                    throw TypeError(".markets.Segment.domain: object expected");
                message.domain = $root.markets.Interval.fromObject(object.domain);
            }
            if (object.trades != null) {
                if (typeof object.trades !== "object")
                    throw TypeError(".markets.Segment.trades: object expected");
                message.trades = $root.markets.Trades.fromObject(object.trades);
            }
            return message;
        };

        /**
         * Creates a plain object from a Segment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.Segment
         * @static
         * @param {markets.Segment} message Segment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Segment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.domain = null;
            if (message.domain != null && message.hasOwnProperty("domain"))
                object.domain = $root.markets.Interval.toObject(message.domain, options);
            if (message.trades != null && message.hasOwnProperty("trades")) {
                object.trades = $root.markets.Trades.toObject(message.trades, options);
                if (options.oneofs)
                    object.series = "trades";
            }
            return object;
        };

        /**
         * Converts this Segment to JSON.
         * @function toJSON
         * @memberof markets.Segment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Segment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Segment;
    })();

    markets.Continuum = (function() {

        /**
         * Properties of a Continuum.
         * @memberof markets
         * @interface IContinuum
         * @property {string|null} [topic] Continuum topic
         * @property {markets.ISegment|null} [segment] Continuum segment
         * @property {markets.ITrade|null} [trade] Continuum trade
         */

        /**
         * Constructs a new Continuum.
         * @memberof markets
         * @classdesc Represents a Continuum.
         * @implements IContinuum
         * @constructor
         * @param {markets.IContinuum=} [properties] Properties to set
         */
        function Continuum(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Continuum topic.
         * @member {string} topic
         * @memberof markets.Continuum
         * @instance
         */
        Continuum.prototype.topic = "";

        /**
         * Continuum segment.
         * @member {markets.ISegment|null|undefined} segment
         * @memberof markets.Continuum
         * @instance
         */
        Continuum.prototype.segment = null;

        /**
         * Continuum trade.
         * @member {markets.ITrade|null|undefined} trade
         * @memberof markets.Continuum
         * @instance
         */
        Continuum.prototype.trade = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Continuum data.
         * @member {"segment"|"trade"|undefined} data
         * @memberof markets.Continuum
         * @instance
         */
        Object.defineProperty(Continuum.prototype, "data", {
            get: $util.oneOfGetter($oneOfFields = ["segment", "trade"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Continuum instance using the specified properties.
         * @function create
         * @memberof markets.Continuum
         * @static
         * @param {markets.IContinuum=} [properties] Properties to set
         * @returns {markets.Continuum} Continuum instance
         */
        Continuum.create = function create(properties) {
            return new Continuum(properties);
        };

        /**
         * Encodes the specified Continuum message. Does not implicitly {@link markets.Continuum.verify|verify} messages.
         * @function encode
         * @memberof markets.Continuum
         * @static
         * @param {markets.IContinuum} message Continuum message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Continuum.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.topic != null && message.hasOwnProperty("topic"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.topic);
            if (message.segment != null && message.hasOwnProperty("segment"))
                $root.markets.Segment.encode(message.segment, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.trade != null && message.hasOwnProperty("trade"))
                $root.markets.Trade.encode(message.trade, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Continuum message, length delimited. Does not implicitly {@link markets.Continuum.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.Continuum
         * @static
         * @param {markets.IContinuum} message Continuum message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Continuum.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Continuum message from the specified reader or buffer.
         * @function decode
         * @memberof markets.Continuum
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.Continuum} Continuum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Continuum.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.Continuum();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.topic = reader.string();
                    break;
                case 2:
                    message.segment = $root.markets.Segment.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trade = $root.markets.Trade.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Continuum message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.Continuum
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.Continuum} Continuum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Continuum.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Continuum message.
         * @function verify
         * @memberof markets.Continuum
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Continuum.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.topic != null && message.hasOwnProperty("topic"))
                if (!$util.isString(message.topic))
                    return "topic: string expected";
            if (message.segment != null && message.hasOwnProperty("segment")) {
                properties.data = 1;
                {
                    let error = $root.markets.Segment.verify(message.segment);
                    if (error)
                        return "segment." + error;
                }
            }
            if (message.trade != null && message.hasOwnProperty("trade")) {
                if (properties.data === 1)
                    return "data: multiple values";
                properties.data = 1;
                {
                    let error = $root.markets.Trade.verify(message.trade);
                    if (error)
                        return "trade." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Continuum message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.Continuum
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.Continuum} Continuum
         */
        Continuum.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.Continuum)
                return object;
            let message = new $root.markets.Continuum();
            if (object.topic != null)
                message.topic = String(object.topic);
            if (object.segment != null) {
                if (typeof object.segment !== "object")
                    throw TypeError(".markets.Continuum.segment: object expected");
                message.segment = $root.markets.Segment.fromObject(object.segment);
            }
            if (object.trade != null) {
                if (typeof object.trade !== "object")
                    throw TypeError(".markets.Continuum.trade: object expected");
                message.trade = $root.markets.Trade.fromObject(object.trade);
            }
            return message;
        };

        /**
         * Creates a plain object from a Continuum message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.Continuum
         * @static
         * @param {markets.Continuum} message Continuum
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Continuum.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.topic = "";
            if (message.topic != null && message.hasOwnProperty("topic"))
                object.topic = message.topic;
            if (message.segment != null && message.hasOwnProperty("segment")) {
                object.segment = $root.markets.Segment.toObject(message.segment, options);
                if (options.oneofs)
                    object.data = "segment";
            }
            if (message.trade != null && message.hasOwnProperty("trade")) {
                object.trade = $root.markets.Trade.toObject(message.trade, options);
                if (options.oneofs)
                    object.data = "trade";
            }
            return object;
        };

        /**
         * Converts this Continuum to JSON.
         * @function toJSON
         * @memberof markets.Continuum
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Continuum.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Continuum;
    })();

    markets.AuthInfo = (function() {

        /**
         * Properties of an AuthInfo.
         * @memberof markets
         * @interface IAuthInfo
         * @property {boolean|null} [isAuthorized] AuthInfo isAuthorized
         * @property {string|null} [sessionKey] AuthInfo sessionKey
         * @property {number|null} [userID] AuthInfo userID
         * @property {number|null} [profileID] AuthInfo profileID
         * @property {number|null} [pocketID] AuthInfo pocketID
         * @property {string|null} [jwt] AuthInfo jwt
         * @property {string|null} [mqttHost] AuthInfo mqttHost
         * @property {string|null} [mqttPort] AuthInfo mqttPort
         * @property {string|null} [mdsHost] AuthInfo mdsHost
         * @property {string|null} [mdsPort] AuthInfo mdsPort
         */

        /**
         * Constructs a new AuthInfo.
         * @memberof markets
         * @classdesc Represents an AuthInfo.
         * @implements IAuthInfo
         * @constructor
         * @param {markets.IAuthInfo=} [properties] Properties to set
         */
        function AuthInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthInfo isAuthorized.
         * @member {boolean} isAuthorized
         * @memberof markets.AuthInfo
         * @instance
         */
        AuthInfo.prototype.isAuthorized = false;

        /**
         * AuthInfo sessionKey.
         * @member {string} sessionKey
         * @memberof markets.AuthInfo
         * @instance
         */
        AuthInfo.prototype.sessionKey = "";

        /**
         * AuthInfo userID.
         * @member {number} userID
         * @memberof markets.AuthInfo
         * @instance
         */
        AuthInfo.prototype.userID = 0;

        /**
         * AuthInfo profileID.
         * @member {number} profileID
         * @memberof markets.AuthInfo
         * @instance
         */
        AuthInfo.prototype.profileID = 0;

        /**
         * AuthInfo pocketID.
         * @member {number} pocketID
         * @memberof markets.AuthInfo
         * @instance
         */
        AuthInfo.prototype.pocketID = 0;

        /**
         * AuthInfo jwt.
         * @member {string} jwt
         * @memberof markets.AuthInfo
         * @instance
         */
        AuthInfo.prototype.jwt = "";

        /**
         * AuthInfo mqttHost.
         * @member {string} mqttHost
         * @memberof markets.AuthInfo
         * @instance
         */
        AuthInfo.prototype.mqttHost = "";

        /**
         * AuthInfo mqttPort.
         * @member {string} mqttPort
         * @memberof markets.AuthInfo
         * @instance
         */
        AuthInfo.prototype.mqttPort = "";

        /**
         * AuthInfo mdsHost.
         * @member {string} mdsHost
         * @memberof markets.AuthInfo
         * @instance
         */
        AuthInfo.prototype.mdsHost = "";

        /**
         * AuthInfo mdsPort.
         * @member {string} mdsPort
         * @memberof markets.AuthInfo
         * @instance
         */
        AuthInfo.prototype.mdsPort = "";

        /**
         * Creates a new AuthInfo instance using the specified properties.
         * @function create
         * @memberof markets.AuthInfo
         * @static
         * @param {markets.IAuthInfo=} [properties] Properties to set
         * @returns {markets.AuthInfo} AuthInfo instance
         */
        AuthInfo.create = function create(properties) {
            return new AuthInfo(properties);
        };

        /**
         * Encodes the specified AuthInfo message. Does not implicitly {@link markets.AuthInfo.verify|verify} messages.
         * @function encode
         * @memberof markets.AuthInfo
         * @static
         * @param {markets.IAuthInfo} message AuthInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionKey != null && message.hasOwnProperty("sessionKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionKey);
            if (message.userID != null && message.hasOwnProperty("userID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.userID);
            if (message.profileID != null && message.hasOwnProperty("profileID"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.profileID);
            if (message.pocketID != null && message.hasOwnProperty("pocketID"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.pocketID);
            if (message.jwt != null && message.hasOwnProperty("jwt"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.jwt);
            if (message.mqttHost != null && message.hasOwnProperty("mqttHost"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.mqttHost);
            if (message.mqttPort != null && message.hasOwnProperty("mqttPort"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.mqttPort);
            if (message.mdsHost != null && message.hasOwnProperty("mdsHost"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.mdsHost);
            if (message.mdsPort != null && message.hasOwnProperty("mdsPort"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.mdsPort);
            if (message.isAuthorized != null && message.hasOwnProperty("isAuthorized"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.isAuthorized);
            return writer;
        };

        /**
         * Encodes the specified AuthInfo message, length delimited. Does not implicitly {@link markets.AuthInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof markets.AuthInfo
         * @static
         * @param {markets.IAuthInfo} message AuthInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthInfo message from the specified reader or buffer.
         * @function decode
         * @memberof markets.AuthInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {markets.AuthInfo} AuthInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.markets.AuthInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.isAuthorized = reader.bool();
                    break;
                case 1:
                    message.sessionKey = reader.string();
                    break;
                case 2:
                    message.userID = reader.uint32();
                    break;
                case 3:
                    message.profileID = reader.uint32();
                    break;
                case 4:
                    message.pocketID = reader.uint32();
                    break;
                case 5:
                    message.jwt = reader.string();
                    break;
                case 6:
                    message.mqttHost = reader.string();
                    break;
                case 7:
                    message.mqttPort = reader.string();
                    break;
                case 8:
                    message.mdsHost = reader.string();
                    break;
                case 9:
                    message.mdsPort = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof markets.AuthInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {markets.AuthInfo} AuthInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthInfo message.
         * @function verify
         * @memberof markets.AuthInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isAuthorized != null && message.hasOwnProperty("isAuthorized"))
                if (typeof message.isAuthorized !== "boolean")
                    return "isAuthorized: boolean expected";
            if (message.sessionKey != null && message.hasOwnProperty("sessionKey"))
                if (!$util.isString(message.sessionKey))
                    return "sessionKey: string expected";
            if (message.userID != null && message.hasOwnProperty("userID"))
                if (!$util.isInteger(message.userID))
                    return "userID: integer expected";
            if (message.profileID != null && message.hasOwnProperty("profileID"))
                if (!$util.isInteger(message.profileID))
                    return "profileID: integer expected";
            if (message.pocketID != null && message.hasOwnProperty("pocketID"))
                if (!$util.isInteger(message.pocketID))
                    return "pocketID: integer expected";
            if (message.jwt != null && message.hasOwnProperty("jwt"))
                if (!$util.isString(message.jwt))
                    return "jwt: string expected";
            if (message.mqttHost != null && message.hasOwnProperty("mqttHost"))
                if (!$util.isString(message.mqttHost))
                    return "mqttHost: string expected";
            if (message.mqttPort != null && message.hasOwnProperty("mqttPort"))
                if (!$util.isString(message.mqttPort))
                    return "mqttPort: string expected";
            if (message.mdsHost != null && message.hasOwnProperty("mdsHost"))
                if (!$util.isString(message.mdsHost))
                    return "mdsHost: string expected";
            if (message.mdsPort != null && message.hasOwnProperty("mdsPort"))
                if (!$util.isString(message.mdsPort))
                    return "mdsPort: string expected";
            return null;
        };

        /**
         * Creates an AuthInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof markets.AuthInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {markets.AuthInfo} AuthInfo
         */
        AuthInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.markets.AuthInfo)
                return object;
            let message = new $root.markets.AuthInfo();
            if (object.isAuthorized != null)
                message.isAuthorized = Boolean(object.isAuthorized);
            if (object.sessionKey != null)
                message.sessionKey = String(object.sessionKey);
            if (object.userID != null)
                message.userID = object.userID >>> 0;
            if (object.profileID != null)
                message.profileID = object.profileID >>> 0;
            if (object.pocketID != null)
                message.pocketID = object.pocketID >>> 0;
            if (object.jwt != null)
                message.jwt = String(object.jwt);
            if (object.mqttHost != null)
                message.mqttHost = String(object.mqttHost);
            if (object.mqttPort != null)
                message.mqttPort = String(object.mqttPort);
            if (object.mdsHost != null)
                message.mdsHost = String(object.mdsHost);
            if (object.mdsPort != null)
                message.mdsPort = String(object.mdsPort);
            return message;
        };

        /**
         * Creates a plain object from an AuthInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof markets.AuthInfo
         * @static
         * @param {markets.AuthInfo} message AuthInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.sessionKey = "";
                object.userID = 0;
                object.profileID = 0;
                object.pocketID = 0;
                object.jwt = "";
                object.mqttHost = "";
                object.mqttPort = "";
                object.mdsHost = "";
                object.mdsPort = "";
                object.isAuthorized = false;
            }
            if (message.sessionKey != null && message.hasOwnProperty("sessionKey"))
                object.sessionKey = message.sessionKey;
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = message.userID;
            if (message.profileID != null && message.hasOwnProperty("profileID"))
                object.profileID = message.profileID;
            if (message.pocketID != null && message.hasOwnProperty("pocketID"))
                object.pocketID = message.pocketID;
            if (message.jwt != null && message.hasOwnProperty("jwt"))
                object.jwt = message.jwt;
            if (message.mqttHost != null && message.hasOwnProperty("mqttHost"))
                object.mqttHost = message.mqttHost;
            if (message.mqttPort != null && message.hasOwnProperty("mqttPort"))
                object.mqttPort = message.mqttPort;
            if (message.mdsHost != null && message.hasOwnProperty("mdsHost"))
                object.mdsHost = message.mdsHost;
            if (message.mdsPort != null && message.hasOwnProperty("mdsPort"))
                object.mdsPort = message.mdsPort;
            if (message.isAuthorized != null && message.hasOwnProperty("isAuthorized"))
                object.isAuthorized = message.isAuthorized;
            return object;
        };

        /**
         * Converts this AuthInfo to JSON.
         * @function toJSON
         * @memberof markets.AuthInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AuthInfo;
    })();

    return markets;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|Long|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                let message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
