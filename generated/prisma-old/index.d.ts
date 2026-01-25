
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users_tmp
 * 
 */
export type Users_tmp = $Result.DefaultSelection<Prisma.$Users_tmpPayload>
/**
 * Model Association__Users_And_Sessions_tmp
 * 
 */
export type Association__Users_And_Sessions_tmp = $Result.DefaultSelection<Prisma.$Association__Users_And_Sessions_tmpPayload>
/**
 * Model Sessions_tmp
 * 
 */
export type Sessions_tmp = $Result.DefaultSelection<Prisma.$Sessions_tmpPayload>
/**
 * Model Players_tmp
 * 
 */
export type Players_tmp = $Result.DefaultSelection<Prisma.$Players_tmpPayload>
/**
 * Model Table_Columns_tmp
 * 
 */
export type Table_Columns_tmp = $Result.DefaultSelection<Prisma.$Table_Columns_tmpPayload>
/**
 * Model Table_Archives_tmp
 * 
 */
export type Table_Archives_tmp = $Result.DefaultSelection<Prisma.$Table_Archives_tmpPayload>
/**
 * Model Association__Players_And_FinalScores_With_Sessions_tmp
 * 
 */
export type Association__Players_And_FinalScores_With_Sessions_tmp = $Result.DefaultSelection<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload>
/**
 * Model Association__Sessions_And_Players_tmp
 * 
 */
export type Association__Sessions_And_Players_tmp = $Result.DefaultSelection<Prisma.$Association__Sessions_And_Players_tmpPayload>
/**
 * Model FinalScores_tmp
 * 
 */
export type FinalScores_tmp = $Result.DefaultSelection<Prisma.$FinalScores_tmpPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const enum_Association__Users_And_Sessions_InputType: {
  type: 'type',
  select: 'select',
  select_and_type: 'select_and_type'
};

export type enum_Association__Users_And_Sessions_InputType = (typeof enum_Association__Users_And_Sessions_InputType)[keyof typeof enum_Association__Users_And_Sessions_InputType]


export const enum_Association__Users_And_Sessions_Statistics_View: {
  statistics_overall: 'statistics_overall',
  statistics_year: 'statistics_year',
  statistics_month: 'statistics_month'
};

export type enum_Association__Users_And_Sessions_Statistics_View = (typeof enum_Association__Users_And_Sessions_Statistics_View)[keyof typeof enum_Association__Users_And_Sessions_Statistics_View]


export const enum_Association__Users_And_Sessions_View: {
  show_month: 'show_month',
  show_year: 'show_year',
  show_custom_date: 'show_custom_date',
  show_all: 'show_all'
};

export type enum_Association__Users_And_Sessions_View = (typeof enum_Association__Users_And_Sessions_View)[keyof typeof enum_Association__Users_And_Sessions_View]


export const enum_Sessions_InputType: {
  type: 'type',
  select: 'select',
  select_and_type: 'select_and_type'
};

export type enum_Sessions_InputType = (typeof enum_Sessions_InputType)[keyof typeof enum_Sessions_InputType]


export const enum_Sessions_View: {
  show_month: 'show_month',
  show_year: 'show_year',
  custom_date: 'custom_date',
  show_all: 'show_all'
};

export type enum_Sessions_View = (typeof enum_Sessions_View)[keyof typeof enum_Sessions_View]


export const enum_Users_Statistics_View: {
  statistics_overall: 'statistics_overall',
  statistics_year: 'statistics_year',
  statistics_month: 'statistics_month'
};

export type enum_Users_Statistics_View = (typeof enum_Users_Statistics_View)[keyof typeof enum_Users_Statistics_View]


export const enum_Users_View_Sessions: {
  Last_Played: 'Last_Played',
  Created: 'Created',
  Name: 'Name'
};

export type enum_Users_View_Sessions = (typeof enum_Users_View_Sessions)[keyof typeof enum_Users_View_Sessions]

}

export type enum_Association__Users_And_Sessions_InputType = $Enums.enum_Association__Users_And_Sessions_InputType

export const enum_Association__Users_And_Sessions_InputType: typeof $Enums.enum_Association__Users_And_Sessions_InputType

export type enum_Association__Users_And_Sessions_Statistics_View = $Enums.enum_Association__Users_And_Sessions_Statistics_View

export const enum_Association__Users_And_Sessions_Statistics_View: typeof $Enums.enum_Association__Users_And_Sessions_Statistics_View

export type enum_Association__Users_And_Sessions_View = $Enums.enum_Association__Users_And_Sessions_View

export const enum_Association__Users_And_Sessions_View: typeof $Enums.enum_Association__Users_And_Sessions_View

export type enum_Sessions_InputType = $Enums.enum_Sessions_InputType

export const enum_Sessions_InputType: typeof $Enums.enum_Sessions_InputType

export type enum_Sessions_View = $Enums.enum_Sessions_View

export const enum_Sessions_View: typeof $Enums.enum_Sessions_View

export type enum_Users_Statistics_View = $Enums.enum_Users_Statistics_View

export const enum_Users_Statistics_View: typeof $Enums.enum_Users_Statistics_View

export type enum_Users_View_Sessions = $Enums.enum_Users_View_Sessions

export const enum_Users_View_Sessions: typeof $Enums.enum_Users_View_Sessions

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users_tmps
 * const users_tmps = await prisma.users_tmp.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users_tmps
   * const users_tmps = await prisma.users_tmp.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users_tmp`: Exposes CRUD operations for the **Users_tmp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users_tmps
    * const users_tmps = await prisma.users_tmp.findMany()
    * ```
    */
  get users_tmp(): Prisma.Users_tmpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.association__Users_And_Sessions_tmp`: Exposes CRUD operations for the **Association__Users_And_Sessions_tmp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Association__Users_And_Sessions_tmps
    * const association__Users_And_Sessions_tmps = await prisma.association__Users_And_Sessions_tmp.findMany()
    * ```
    */
  get association__Users_And_Sessions_tmp(): Prisma.Association__Users_And_Sessions_tmpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions_tmp`: Exposes CRUD operations for the **Sessions_tmp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions_tmps
    * const sessions_tmps = await prisma.sessions_tmp.findMany()
    * ```
    */
  get sessions_tmp(): Prisma.Sessions_tmpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.players_tmp`: Exposes CRUD operations for the **Players_tmp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players_tmps
    * const players_tmps = await prisma.players_tmp.findMany()
    * ```
    */
  get players_tmp(): Prisma.Players_tmpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.table_Columns_tmp`: Exposes CRUD operations for the **Table_Columns_tmp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Table_Columns_tmps
    * const table_Columns_tmps = await prisma.table_Columns_tmp.findMany()
    * ```
    */
  get table_Columns_tmp(): Prisma.Table_Columns_tmpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.table_Archives_tmp`: Exposes CRUD operations for the **Table_Archives_tmp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Table_Archives_tmps
    * const table_Archives_tmps = await prisma.table_Archives_tmp.findMany()
    * ```
    */
  get table_Archives_tmp(): Prisma.Table_Archives_tmpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.association__Players_And_FinalScores_With_Sessions_tmp`: Exposes CRUD operations for the **Association__Players_And_FinalScores_With_Sessions_tmp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Association__Players_And_FinalScores_With_Sessions_tmps
    * const association__Players_And_FinalScores_With_Sessions_tmps = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.findMany()
    * ```
    */
  get association__Players_And_FinalScores_With_Sessions_tmp(): Prisma.Association__Players_And_FinalScores_With_Sessions_tmpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.association__Sessions_And_Players_tmp`: Exposes CRUD operations for the **Association__Sessions_And_Players_tmp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Association__Sessions_And_Players_tmps
    * const association__Sessions_And_Players_tmps = await prisma.association__Sessions_And_Players_tmp.findMany()
    * ```
    */
  get association__Sessions_And_Players_tmp(): Prisma.Association__Sessions_And_Players_tmpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.finalScores_tmp`: Exposes CRUD operations for the **FinalScores_tmp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinalScores_tmps
    * const finalScores_tmps = await prisma.finalScores_tmp.findMany()
    * ```
    */
  get finalScores_tmp(): Prisma.FinalScores_tmpDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users_tmp: 'Users_tmp',
    Association__Users_And_Sessions_tmp: 'Association__Users_And_Sessions_tmp',
    Sessions_tmp: 'Sessions_tmp',
    Players_tmp: 'Players_tmp',
    Table_Columns_tmp: 'Table_Columns_tmp',
    Table_Archives_tmp: 'Table_Archives_tmp',
    Association__Players_And_FinalScores_With_Sessions_tmp: 'Association__Players_And_FinalScores_With_Sessions_tmp',
    Association__Sessions_And_Players_tmp: 'Association__Sessions_And_Players_tmp',
    FinalScores_tmp: 'FinalScores_tmp'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users_tmp" | "association__Users_And_Sessions_tmp" | "sessions_tmp" | "players_tmp" | "table_Columns_tmp" | "table_Archives_tmp" | "association__Players_And_FinalScores_With_Sessions_tmp" | "association__Sessions_And_Players_tmp" | "finalScores_tmp"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users_tmp: {
        payload: Prisma.$Users_tmpPayload<ExtArgs>
        fields: Prisma.Users_tmpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Users_tmpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_tmpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Users_tmpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_tmpPayload>
          }
          findFirst: {
            args: Prisma.Users_tmpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_tmpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Users_tmpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_tmpPayload>
          }
          findMany: {
            args: Prisma.Users_tmpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_tmpPayload>[]
          }
          create: {
            args: Prisma.Users_tmpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_tmpPayload>
          }
          createMany: {
            args: Prisma.Users_tmpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Users_tmpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_tmpPayload>[]
          }
          delete: {
            args: Prisma.Users_tmpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_tmpPayload>
          }
          update: {
            args: Prisma.Users_tmpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_tmpPayload>
          }
          deleteMany: {
            args: Prisma.Users_tmpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Users_tmpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Users_tmpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_tmpPayload>[]
          }
          upsert: {
            args: Prisma.Users_tmpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_tmpPayload>
          }
          aggregate: {
            args: Prisma.Users_tmpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers_tmp>
          }
          groupBy: {
            args: Prisma.Users_tmpGroupByArgs<ExtArgs>
            result: $Utils.Optional<Users_tmpGroupByOutputType>[]
          }
          count: {
            args: Prisma.Users_tmpCountArgs<ExtArgs>
            result: $Utils.Optional<Users_tmpCountAggregateOutputType> | number
          }
        }
      }
      Association__Users_And_Sessions_tmp: {
        payload: Prisma.$Association__Users_And_Sessions_tmpPayload<ExtArgs>
        fields: Prisma.Association__Users_And_Sessions_tmpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Association__Users_And_Sessions_tmpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Users_And_Sessions_tmpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Association__Users_And_Sessions_tmpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Users_And_Sessions_tmpPayload>
          }
          findFirst: {
            args: Prisma.Association__Users_And_Sessions_tmpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Users_And_Sessions_tmpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Association__Users_And_Sessions_tmpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Users_And_Sessions_tmpPayload>
          }
          findMany: {
            args: Prisma.Association__Users_And_Sessions_tmpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Users_And_Sessions_tmpPayload>[]
          }
          create: {
            args: Prisma.Association__Users_And_Sessions_tmpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Users_And_Sessions_tmpPayload>
          }
          createMany: {
            args: Prisma.Association__Users_And_Sessions_tmpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Association__Users_And_Sessions_tmpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Users_And_Sessions_tmpPayload>[]
          }
          delete: {
            args: Prisma.Association__Users_And_Sessions_tmpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Users_And_Sessions_tmpPayload>
          }
          update: {
            args: Prisma.Association__Users_And_Sessions_tmpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Users_And_Sessions_tmpPayload>
          }
          deleteMany: {
            args: Prisma.Association__Users_And_Sessions_tmpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Association__Users_And_Sessions_tmpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Association__Users_And_Sessions_tmpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Users_And_Sessions_tmpPayload>[]
          }
          upsert: {
            args: Prisma.Association__Users_And_Sessions_tmpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Users_And_Sessions_tmpPayload>
          }
          aggregate: {
            args: Prisma.Association__Users_And_Sessions_tmpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssociation__Users_And_Sessions_tmp>
          }
          groupBy: {
            args: Prisma.Association__Users_And_Sessions_tmpGroupByArgs<ExtArgs>
            result: $Utils.Optional<Association__Users_And_Sessions_tmpGroupByOutputType>[]
          }
          count: {
            args: Prisma.Association__Users_And_Sessions_tmpCountArgs<ExtArgs>
            result: $Utils.Optional<Association__Users_And_Sessions_tmpCountAggregateOutputType> | number
          }
        }
      }
      Sessions_tmp: {
        payload: Prisma.$Sessions_tmpPayload<ExtArgs>
        fields: Prisma.Sessions_tmpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Sessions_tmpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sessions_tmpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Sessions_tmpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sessions_tmpPayload>
          }
          findFirst: {
            args: Prisma.Sessions_tmpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sessions_tmpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Sessions_tmpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sessions_tmpPayload>
          }
          findMany: {
            args: Prisma.Sessions_tmpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sessions_tmpPayload>[]
          }
          create: {
            args: Prisma.Sessions_tmpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sessions_tmpPayload>
          }
          createMany: {
            args: Prisma.Sessions_tmpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Sessions_tmpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sessions_tmpPayload>[]
          }
          delete: {
            args: Prisma.Sessions_tmpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sessions_tmpPayload>
          }
          update: {
            args: Prisma.Sessions_tmpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sessions_tmpPayload>
          }
          deleteMany: {
            args: Prisma.Sessions_tmpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Sessions_tmpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Sessions_tmpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sessions_tmpPayload>[]
          }
          upsert: {
            args: Prisma.Sessions_tmpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Sessions_tmpPayload>
          }
          aggregate: {
            args: Prisma.Sessions_tmpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions_tmp>
          }
          groupBy: {
            args: Prisma.Sessions_tmpGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sessions_tmpGroupByOutputType>[]
          }
          count: {
            args: Prisma.Sessions_tmpCountArgs<ExtArgs>
            result: $Utils.Optional<Sessions_tmpCountAggregateOutputType> | number
          }
        }
      }
      Players_tmp: {
        payload: Prisma.$Players_tmpPayload<ExtArgs>
        fields: Prisma.Players_tmpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Players_tmpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Players_tmpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Players_tmpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Players_tmpPayload>
          }
          findFirst: {
            args: Prisma.Players_tmpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Players_tmpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Players_tmpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Players_tmpPayload>
          }
          findMany: {
            args: Prisma.Players_tmpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Players_tmpPayload>[]
          }
          create: {
            args: Prisma.Players_tmpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Players_tmpPayload>
          }
          createMany: {
            args: Prisma.Players_tmpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Players_tmpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Players_tmpPayload>[]
          }
          delete: {
            args: Prisma.Players_tmpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Players_tmpPayload>
          }
          update: {
            args: Prisma.Players_tmpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Players_tmpPayload>
          }
          deleteMany: {
            args: Prisma.Players_tmpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Players_tmpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Players_tmpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Players_tmpPayload>[]
          }
          upsert: {
            args: Prisma.Players_tmpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Players_tmpPayload>
          }
          aggregate: {
            args: Prisma.Players_tmpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayers_tmp>
          }
          groupBy: {
            args: Prisma.Players_tmpGroupByArgs<ExtArgs>
            result: $Utils.Optional<Players_tmpGroupByOutputType>[]
          }
          count: {
            args: Prisma.Players_tmpCountArgs<ExtArgs>
            result: $Utils.Optional<Players_tmpCountAggregateOutputType> | number
          }
        }
      }
      Table_Columns_tmp: {
        payload: Prisma.$Table_Columns_tmpPayload<ExtArgs>
        fields: Prisma.Table_Columns_tmpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Table_Columns_tmpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Columns_tmpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Table_Columns_tmpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Columns_tmpPayload>
          }
          findFirst: {
            args: Prisma.Table_Columns_tmpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Columns_tmpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Table_Columns_tmpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Columns_tmpPayload>
          }
          findMany: {
            args: Prisma.Table_Columns_tmpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Columns_tmpPayload>[]
          }
          create: {
            args: Prisma.Table_Columns_tmpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Columns_tmpPayload>
          }
          createMany: {
            args: Prisma.Table_Columns_tmpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Table_Columns_tmpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Columns_tmpPayload>[]
          }
          delete: {
            args: Prisma.Table_Columns_tmpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Columns_tmpPayload>
          }
          update: {
            args: Prisma.Table_Columns_tmpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Columns_tmpPayload>
          }
          deleteMany: {
            args: Prisma.Table_Columns_tmpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Table_Columns_tmpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Table_Columns_tmpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Columns_tmpPayload>[]
          }
          upsert: {
            args: Prisma.Table_Columns_tmpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Columns_tmpPayload>
          }
          aggregate: {
            args: Prisma.Table_Columns_tmpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable_Columns_tmp>
          }
          groupBy: {
            args: Prisma.Table_Columns_tmpGroupByArgs<ExtArgs>
            result: $Utils.Optional<Table_Columns_tmpGroupByOutputType>[]
          }
          count: {
            args: Prisma.Table_Columns_tmpCountArgs<ExtArgs>
            result: $Utils.Optional<Table_Columns_tmpCountAggregateOutputType> | number
          }
        }
      }
      Table_Archives_tmp: {
        payload: Prisma.$Table_Archives_tmpPayload<ExtArgs>
        fields: Prisma.Table_Archives_tmpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Table_Archives_tmpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Archives_tmpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Table_Archives_tmpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Archives_tmpPayload>
          }
          findFirst: {
            args: Prisma.Table_Archives_tmpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Archives_tmpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Table_Archives_tmpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Archives_tmpPayload>
          }
          findMany: {
            args: Prisma.Table_Archives_tmpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Archives_tmpPayload>[]
          }
          create: {
            args: Prisma.Table_Archives_tmpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Archives_tmpPayload>
          }
          createMany: {
            args: Prisma.Table_Archives_tmpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Table_Archives_tmpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Archives_tmpPayload>[]
          }
          delete: {
            args: Prisma.Table_Archives_tmpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Archives_tmpPayload>
          }
          update: {
            args: Prisma.Table_Archives_tmpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Archives_tmpPayload>
          }
          deleteMany: {
            args: Prisma.Table_Archives_tmpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Table_Archives_tmpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Table_Archives_tmpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Archives_tmpPayload>[]
          }
          upsert: {
            args: Prisma.Table_Archives_tmpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Table_Archives_tmpPayload>
          }
          aggregate: {
            args: Prisma.Table_Archives_tmpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable_Archives_tmp>
          }
          groupBy: {
            args: Prisma.Table_Archives_tmpGroupByArgs<ExtArgs>
            result: $Utils.Optional<Table_Archives_tmpGroupByOutputType>[]
          }
          count: {
            args: Prisma.Table_Archives_tmpCountArgs<ExtArgs>
            result: $Utils.Optional<Table_Archives_tmpCountAggregateOutputType> | number
          }
        }
      }
      Association__Players_And_FinalScores_With_Sessions_tmp: {
        payload: Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>
        fields: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload>
          }
          findFirst: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload>
          }
          findMany: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload>[]
          }
          create: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload>
          }
          createMany: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload>[]
          }
          delete: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload>
          }
          update: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload>
          }
          deleteMany: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload>[]
          }
          upsert: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload>
          }
          aggregate: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssociation__Players_And_FinalScores_With_Sessions_tmp>
          }
          groupBy: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpGroupByArgs<ExtArgs>
            result: $Utils.Optional<Association__Players_And_FinalScores_With_Sessions_tmpGroupByOutputType>[]
          }
          count: {
            args: Prisma.Association__Players_And_FinalScores_With_Sessions_tmpCountArgs<ExtArgs>
            result: $Utils.Optional<Association__Players_And_FinalScores_With_Sessions_tmpCountAggregateOutputType> | number
          }
        }
      }
      Association__Sessions_And_Players_tmp: {
        payload: Prisma.$Association__Sessions_And_Players_tmpPayload<ExtArgs>
        fields: Prisma.Association__Sessions_And_Players_tmpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Association__Sessions_And_Players_tmpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Sessions_And_Players_tmpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Association__Sessions_And_Players_tmpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Sessions_And_Players_tmpPayload>
          }
          findFirst: {
            args: Prisma.Association__Sessions_And_Players_tmpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Sessions_And_Players_tmpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Association__Sessions_And_Players_tmpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Sessions_And_Players_tmpPayload>
          }
          findMany: {
            args: Prisma.Association__Sessions_And_Players_tmpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Sessions_And_Players_tmpPayload>[]
          }
          create: {
            args: Prisma.Association__Sessions_And_Players_tmpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Sessions_And_Players_tmpPayload>
          }
          createMany: {
            args: Prisma.Association__Sessions_And_Players_tmpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Association__Sessions_And_Players_tmpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Sessions_And_Players_tmpPayload>[]
          }
          delete: {
            args: Prisma.Association__Sessions_And_Players_tmpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Sessions_And_Players_tmpPayload>
          }
          update: {
            args: Prisma.Association__Sessions_And_Players_tmpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Sessions_And_Players_tmpPayload>
          }
          deleteMany: {
            args: Prisma.Association__Sessions_And_Players_tmpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Association__Sessions_And_Players_tmpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Association__Sessions_And_Players_tmpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Sessions_And_Players_tmpPayload>[]
          }
          upsert: {
            args: Prisma.Association__Sessions_And_Players_tmpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Association__Sessions_And_Players_tmpPayload>
          }
          aggregate: {
            args: Prisma.Association__Sessions_And_Players_tmpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssociation__Sessions_And_Players_tmp>
          }
          groupBy: {
            args: Prisma.Association__Sessions_And_Players_tmpGroupByArgs<ExtArgs>
            result: $Utils.Optional<Association__Sessions_And_Players_tmpGroupByOutputType>[]
          }
          count: {
            args: Prisma.Association__Sessions_And_Players_tmpCountArgs<ExtArgs>
            result: $Utils.Optional<Association__Sessions_And_Players_tmpCountAggregateOutputType> | number
          }
        }
      }
      FinalScores_tmp: {
        payload: Prisma.$FinalScores_tmpPayload<ExtArgs>
        fields: Prisma.FinalScores_tmpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinalScores_tmpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalScores_tmpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinalScores_tmpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalScores_tmpPayload>
          }
          findFirst: {
            args: Prisma.FinalScores_tmpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalScores_tmpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinalScores_tmpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalScores_tmpPayload>
          }
          findMany: {
            args: Prisma.FinalScores_tmpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalScores_tmpPayload>[]
          }
          create: {
            args: Prisma.FinalScores_tmpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalScores_tmpPayload>
          }
          createMany: {
            args: Prisma.FinalScores_tmpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinalScores_tmpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalScores_tmpPayload>[]
          }
          delete: {
            args: Prisma.FinalScores_tmpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalScores_tmpPayload>
          }
          update: {
            args: Prisma.FinalScores_tmpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalScores_tmpPayload>
          }
          deleteMany: {
            args: Prisma.FinalScores_tmpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinalScores_tmpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinalScores_tmpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalScores_tmpPayload>[]
          }
          upsert: {
            args: Prisma.FinalScores_tmpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinalScores_tmpPayload>
          }
          aggregate: {
            args: Prisma.FinalScores_tmpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinalScores_tmp>
          }
          groupBy: {
            args: Prisma.FinalScores_tmpGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinalScores_tmpGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinalScores_tmpCountArgs<ExtArgs>
            result: $Utils.Optional<FinalScores_tmpCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    users_tmp?: Users_tmpOmit
    association__Users_And_Sessions_tmp?: Association__Users_And_Sessions_tmpOmit
    sessions_tmp?: Sessions_tmpOmit
    players_tmp?: Players_tmpOmit
    table_Columns_tmp?: Table_Columns_tmpOmit
    table_Archives_tmp?: Table_Archives_tmpOmit
    association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpOmit
    association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpOmit
    finalScores_tmp?: FinalScores_tmpOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Users_tmpCountOutputType
   */

  export type Users_tmpCountOutputType = {
    List___Association__Users_And_Sessions: number
  }

  export type Users_tmpCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    List___Association__Users_And_Sessions?: boolean | Users_tmpCountOutputTypeCountList___Association__Users_And_SessionsArgs
  }

  // Custom InputTypes
  /**
   * Users_tmpCountOutputType without action
   */
  export type Users_tmpCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_tmpCountOutputType
     */
    select?: Users_tmpCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Users_tmpCountOutputType without action
   */
  export type Users_tmpCountOutputTypeCountList___Association__Users_And_SessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Association__Users_And_Sessions_tmpWhereInput
  }


  /**
   * Count Type Sessions_tmpCountOutputType
   */

  export type Sessions_tmpCountOutputType = {
    Association__Players_And_FinalScores_With_Sessions_tmp: number
    Association__Sessions_And_Players_tmp: number
    Association__Users_And_Sessions_tmp: number
  }

  export type Sessions_tmpCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Association__Players_And_FinalScores_With_Sessions_tmp?: boolean | Sessions_tmpCountOutputTypeCountAssociation__Players_And_FinalScores_With_Sessions_tmpArgs
    Association__Sessions_And_Players_tmp?: boolean | Sessions_tmpCountOutputTypeCountAssociation__Sessions_And_Players_tmpArgs
    Association__Users_And_Sessions_tmp?: boolean | Sessions_tmpCountOutputTypeCountAssociation__Users_And_Sessions_tmpArgs
  }

  // Custom InputTypes
  /**
   * Sessions_tmpCountOutputType without action
   */
  export type Sessions_tmpCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions_tmpCountOutputType
     */
    select?: Sessions_tmpCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Sessions_tmpCountOutputType without action
   */
  export type Sessions_tmpCountOutputTypeCountAssociation__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
  }

  /**
   * Sessions_tmpCountOutputType without action
   */
  export type Sessions_tmpCountOutputTypeCountAssociation__Sessions_And_Players_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Association__Sessions_And_Players_tmpWhereInput
  }

  /**
   * Sessions_tmpCountOutputType without action
   */
  export type Sessions_tmpCountOutputTypeCountAssociation__Users_And_Sessions_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Association__Users_And_Sessions_tmpWhereInput
  }


  /**
   * Count Type Players_tmpCountOutputType
   */

  export type Players_tmpCountOutputType = {
    Association__Players_And_FinalScores_With_Sessions_tmp: number
    Association__Sessions_And_Players_tmp: number
    Table_Columns_tmp: number
  }

  export type Players_tmpCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Association__Players_And_FinalScores_With_Sessions_tmp?: boolean | Players_tmpCountOutputTypeCountAssociation__Players_And_FinalScores_With_Sessions_tmpArgs
    Association__Sessions_And_Players_tmp?: boolean | Players_tmpCountOutputTypeCountAssociation__Sessions_And_Players_tmpArgs
    Table_Columns_tmp?: boolean | Players_tmpCountOutputTypeCountTable_Columns_tmpArgs
  }

  // Custom InputTypes
  /**
   * Players_tmpCountOutputType without action
   */
  export type Players_tmpCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players_tmpCountOutputType
     */
    select?: Players_tmpCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Players_tmpCountOutputType without action
   */
  export type Players_tmpCountOutputTypeCountAssociation__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
  }

  /**
   * Players_tmpCountOutputType without action
   */
  export type Players_tmpCountOutputTypeCountAssociation__Sessions_And_Players_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Association__Sessions_And_Players_tmpWhereInput
  }

  /**
   * Players_tmpCountOutputType without action
   */
  export type Players_tmpCountOutputTypeCountTable_Columns_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Table_Columns_tmpWhereInput
  }


  /**
   * Count Type FinalScores_tmpCountOutputType
   */

  export type FinalScores_tmpCountOutputType = {
    Association__Players_And_FinalScores_With_Sessions_tmp: number
    Table_Archives_tmp: number
  }

  export type FinalScores_tmpCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Association__Players_And_FinalScores_With_Sessions_tmp?: boolean | FinalScores_tmpCountOutputTypeCountAssociation__Players_And_FinalScores_With_Sessions_tmpArgs
    Table_Archives_tmp?: boolean | FinalScores_tmpCountOutputTypeCountTable_Archives_tmpArgs
  }

  // Custom InputTypes
  /**
   * FinalScores_tmpCountOutputType without action
   */
  export type FinalScores_tmpCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalScores_tmpCountOutputType
     */
    select?: FinalScores_tmpCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FinalScores_tmpCountOutputType without action
   */
  export type FinalScores_tmpCountOutputTypeCountAssociation__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
  }

  /**
   * FinalScores_tmpCountOutputType without action
   */
  export type FinalScores_tmpCountOutputTypeCountTable_Archives_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Table_Archives_tmpWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users_tmp
   */

  export type AggregateUsers_tmp = {
    _count: Users_tmpCountAggregateOutputType | null
    _avg: Users_tmpAvgAggregateOutputType | null
    _sum: Users_tmpSumAggregateOutputType | null
    _min: Users_tmpMinAggregateOutputType | null
    _max: Users_tmpMaxAggregateOutputType | null
  }

  export type Users_tmpAvgAggregateOutputType = {
    id: number | null
    Statistics_View_Month: number | null
    Statistics_View_Year: number | null
  }

  export type Users_tmpSumAggregateOutputType = {
    id: number | null
    Statistics_View_Month: number | null
    Statistics_View_Year: number | null
  }

  export type Users_tmpMinAggregateOutputType = {
    id: number | null
    Name: string | null
    Password: string | null
    RefreshToken: string | null
    DarkMode: boolean | null
    Show_Session_Names: boolean | null
    Show_Session_Date: boolean | null
    View_Sessions: $Enums.enum_Users_View_Sessions | null
    View_Sessions_Desc: boolean | null
    Statistics_View: $Enums.enum_Users_Statistics_View | null
    Statistics_View_Month: number | null
    Statistics_View_Year: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Users_tmpMaxAggregateOutputType = {
    id: number | null
    Name: string | null
    Password: string | null
    RefreshToken: string | null
    DarkMode: boolean | null
    Show_Session_Names: boolean | null
    Show_Session_Date: boolean | null
    View_Sessions: $Enums.enum_Users_View_Sessions | null
    View_Sessions_Desc: boolean | null
    Statistics_View: $Enums.enum_Users_Statistics_View | null
    Statistics_View_Month: number | null
    Statistics_View_Year: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Users_tmpCountAggregateOutputType = {
    id: number
    Name: number
    Password: number
    RefreshToken: number
    DarkMode: number
    Show_Session_Names: number
    Show_Session_Date: number
    View_Sessions: number
    View_Sessions_Desc: number
    Statistics_View: number
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Users_tmpAvgAggregateInputType = {
    id?: true
    Statistics_View_Month?: true
    Statistics_View_Year?: true
  }

  export type Users_tmpSumAggregateInputType = {
    id?: true
    Statistics_View_Month?: true
    Statistics_View_Year?: true
  }

  export type Users_tmpMinAggregateInputType = {
    id?: true
    Name?: true
    Password?: true
    RefreshToken?: true
    DarkMode?: true
    Show_Session_Names?: true
    Show_Session_Date?: true
    View_Sessions?: true
    View_Sessions_Desc?: true
    Statistics_View?: true
    Statistics_View_Month?: true
    Statistics_View_Year?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Users_tmpMaxAggregateInputType = {
    id?: true
    Name?: true
    Password?: true
    RefreshToken?: true
    DarkMode?: true
    Show_Session_Names?: true
    Show_Session_Date?: true
    View_Sessions?: true
    View_Sessions_Desc?: true
    Statistics_View?: true
    Statistics_View_Month?: true
    Statistics_View_Year?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Users_tmpCountAggregateInputType = {
    id?: true
    Name?: true
    Password?: true
    RefreshToken?: true
    DarkMode?: true
    Show_Session_Names?: true
    Show_Session_Date?: true
    View_Sessions?: true
    View_Sessions_Desc?: true
    Statistics_View?: true
    Statistics_View_Month?: true
    Statistics_View_Year?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Users_tmpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users_tmp to aggregate.
     */
    where?: Users_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_tmps to fetch.
     */
    orderBy?: Users_tmpOrderByWithRelationInput | Users_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Users_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users_tmps
    **/
    _count?: true | Users_tmpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Users_tmpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Users_tmpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Users_tmpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Users_tmpMaxAggregateInputType
  }

  export type GetUsers_tmpAggregateType<T extends Users_tmpAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers_tmp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers_tmp[P]>
      : GetScalarType<T[P], AggregateUsers_tmp[P]>
  }




  export type Users_tmpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Users_tmpWhereInput
    orderBy?: Users_tmpOrderByWithAggregationInput | Users_tmpOrderByWithAggregationInput[]
    by: Users_tmpScalarFieldEnum[] | Users_tmpScalarFieldEnum
    having?: Users_tmpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Users_tmpCountAggregateInputType | true
    _avg?: Users_tmpAvgAggregateInputType
    _sum?: Users_tmpSumAggregateInputType
    _min?: Users_tmpMinAggregateInputType
    _max?: Users_tmpMaxAggregateInputType
  }

  export type Users_tmpGroupByOutputType = {
    id: number
    Name: string
    Password: string
    RefreshToken: string | null
    DarkMode: boolean
    Show_Session_Names: boolean
    Show_Session_Date: boolean
    View_Sessions: $Enums.enum_Users_View_Sessions
    View_Sessions_Desc: boolean
    Statistics_View: $Enums.enum_Users_Statistics_View
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: Date
    updatedAt: Date
    _count: Users_tmpCountAggregateOutputType | null
    _avg: Users_tmpAvgAggregateOutputType | null
    _sum: Users_tmpSumAggregateOutputType | null
    _min: Users_tmpMinAggregateOutputType | null
    _max: Users_tmpMaxAggregateOutputType | null
  }

  type GetUsers_tmpGroupByPayload<T extends Users_tmpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Users_tmpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Users_tmpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Users_tmpGroupByOutputType[P]>
            : GetScalarType<T[P], Users_tmpGroupByOutputType[P]>
        }
      >
    >


  export type Users_tmpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    Password?: boolean
    RefreshToken?: boolean
    DarkMode?: boolean
    Show_Session_Names?: boolean
    Show_Session_Date?: boolean
    View_Sessions?: boolean
    View_Sessions_Desc?: boolean
    Statistics_View?: boolean
    Statistics_View_Month?: boolean
    Statistics_View_Year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    List___Association__Users_And_Sessions?: boolean | Users_tmp$List___Association__Users_And_SessionsArgs<ExtArgs>
    _count?: boolean | Users_tmpCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users_tmp"]>

  export type Users_tmpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    Password?: boolean
    RefreshToken?: boolean
    DarkMode?: boolean
    Show_Session_Names?: boolean
    Show_Session_Date?: boolean
    View_Sessions?: boolean
    View_Sessions_Desc?: boolean
    Statistics_View?: boolean
    Statistics_View_Month?: boolean
    Statistics_View_Year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users_tmp"]>

  export type Users_tmpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    Password?: boolean
    RefreshToken?: boolean
    DarkMode?: boolean
    Show_Session_Names?: boolean
    Show_Session_Date?: boolean
    View_Sessions?: boolean
    View_Sessions_Desc?: boolean
    Statistics_View?: boolean
    Statistics_View_Month?: boolean
    Statistics_View_Year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users_tmp"]>

  export type Users_tmpSelectScalar = {
    id?: boolean
    Name?: boolean
    Password?: boolean
    RefreshToken?: boolean
    DarkMode?: boolean
    Show_Session_Names?: boolean
    Show_Session_Date?: boolean
    View_Sessions?: boolean
    View_Sessions_Desc?: boolean
    Statistics_View?: boolean
    Statistics_View_Month?: boolean
    Statistics_View_Year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Users_tmpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Name" | "Password" | "RefreshToken" | "DarkMode" | "Show_Session_Names" | "Show_Session_Date" | "View_Sessions" | "View_Sessions_Desc" | "Statistics_View" | "Statistics_View_Month" | "Statistics_View_Year" | "createdAt" | "updatedAt", ExtArgs["result"]["users_tmp"]>
  export type Users_tmpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    List___Association__Users_And_Sessions?: boolean | Users_tmp$List___Association__Users_And_SessionsArgs<ExtArgs>
    _count?: boolean | Users_tmpCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Users_tmpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Users_tmpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Users_tmpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users_tmp"
    objects: {
      List___Association__Users_And_Sessions: Prisma.$Association__Users_And_Sessions_tmpPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Name: string
      Password: string
      RefreshToken: string | null
      DarkMode: boolean
      Show_Session_Names: boolean
      Show_Session_Date: boolean
      View_Sessions: $Enums.enum_Users_View_Sessions
      View_Sessions_Desc: boolean
      Statistics_View: $Enums.enum_Users_Statistics_View
      Statistics_View_Month: number
      Statistics_View_Year: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users_tmp"]>
    composites: {}
  }

  type Users_tmpGetPayload<S extends boolean | null | undefined | Users_tmpDefaultArgs> = $Result.GetResult<Prisma.$Users_tmpPayload, S>

  type Users_tmpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Users_tmpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Users_tmpCountAggregateInputType | true
    }

  export interface Users_tmpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users_tmp'], meta: { name: 'Users_tmp' } }
    /**
     * Find zero or one Users_tmp that matches the filter.
     * @param {Users_tmpFindUniqueArgs} args - Arguments to find a Users_tmp
     * @example
     * // Get one Users_tmp
     * const users_tmp = await prisma.users_tmp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Users_tmpFindUniqueArgs>(args: SelectSubset<T, Users_tmpFindUniqueArgs<ExtArgs>>): Prisma__Users_tmpClient<$Result.GetResult<Prisma.$Users_tmpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users_tmp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Users_tmpFindUniqueOrThrowArgs} args - Arguments to find a Users_tmp
     * @example
     * // Get one Users_tmp
     * const users_tmp = await prisma.users_tmp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Users_tmpFindUniqueOrThrowArgs>(args: SelectSubset<T, Users_tmpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Users_tmpClient<$Result.GetResult<Prisma.$Users_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_tmp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_tmpFindFirstArgs} args - Arguments to find a Users_tmp
     * @example
     * // Get one Users_tmp
     * const users_tmp = await prisma.users_tmp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Users_tmpFindFirstArgs>(args?: SelectSubset<T, Users_tmpFindFirstArgs<ExtArgs>>): Prisma__Users_tmpClient<$Result.GetResult<Prisma.$Users_tmpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_tmp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_tmpFindFirstOrThrowArgs} args - Arguments to find a Users_tmp
     * @example
     * // Get one Users_tmp
     * const users_tmp = await prisma.users_tmp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Users_tmpFindFirstOrThrowArgs>(args?: SelectSubset<T, Users_tmpFindFirstOrThrowArgs<ExtArgs>>): Prisma__Users_tmpClient<$Result.GetResult<Prisma.$Users_tmpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users_tmps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_tmpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users_tmps
     * const users_tmps = await prisma.users_tmp.findMany()
     * 
     * // Get first 10 Users_tmps
     * const users_tmps = await prisma.users_tmp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const users_tmpWithIdOnly = await prisma.users_tmp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Users_tmpFindManyArgs>(args?: SelectSubset<T, Users_tmpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Users_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users_tmp.
     * @param {Users_tmpCreateArgs} args - Arguments to create a Users_tmp.
     * @example
     * // Create one Users_tmp
     * const Users_tmp = await prisma.users_tmp.create({
     *   data: {
     *     // ... data to create a Users_tmp
     *   }
     * })
     * 
     */
    create<T extends Users_tmpCreateArgs>(args: SelectSubset<T, Users_tmpCreateArgs<ExtArgs>>): Prisma__Users_tmpClient<$Result.GetResult<Prisma.$Users_tmpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users_tmps.
     * @param {Users_tmpCreateManyArgs} args - Arguments to create many Users_tmps.
     * @example
     * // Create many Users_tmps
     * const users_tmp = await prisma.users_tmp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Users_tmpCreateManyArgs>(args?: SelectSubset<T, Users_tmpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users_tmps and returns the data saved in the database.
     * @param {Users_tmpCreateManyAndReturnArgs} args - Arguments to create many Users_tmps.
     * @example
     * // Create many Users_tmps
     * const users_tmp = await prisma.users_tmp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users_tmps and only return the `id`
     * const users_tmpWithIdOnly = await prisma.users_tmp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Users_tmpCreateManyAndReturnArgs>(args?: SelectSubset<T, Users_tmpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Users_tmpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users_tmp.
     * @param {Users_tmpDeleteArgs} args - Arguments to delete one Users_tmp.
     * @example
     * // Delete one Users_tmp
     * const Users_tmp = await prisma.users_tmp.delete({
     *   where: {
     *     // ... filter to delete one Users_tmp
     *   }
     * })
     * 
     */
    delete<T extends Users_tmpDeleteArgs>(args: SelectSubset<T, Users_tmpDeleteArgs<ExtArgs>>): Prisma__Users_tmpClient<$Result.GetResult<Prisma.$Users_tmpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users_tmp.
     * @param {Users_tmpUpdateArgs} args - Arguments to update one Users_tmp.
     * @example
     * // Update one Users_tmp
     * const users_tmp = await prisma.users_tmp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Users_tmpUpdateArgs>(args: SelectSubset<T, Users_tmpUpdateArgs<ExtArgs>>): Prisma__Users_tmpClient<$Result.GetResult<Prisma.$Users_tmpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users_tmps.
     * @param {Users_tmpDeleteManyArgs} args - Arguments to filter Users_tmps to delete.
     * @example
     * // Delete a few Users_tmps
     * const { count } = await prisma.users_tmp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Users_tmpDeleteManyArgs>(args?: SelectSubset<T, Users_tmpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_tmpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users_tmps
     * const users_tmp = await prisma.users_tmp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Users_tmpUpdateManyArgs>(args: SelectSubset<T, Users_tmpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_tmps and returns the data updated in the database.
     * @param {Users_tmpUpdateManyAndReturnArgs} args - Arguments to update many Users_tmps.
     * @example
     * // Update many Users_tmps
     * const users_tmp = await prisma.users_tmp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users_tmps and only return the `id`
     * const users_tmpWithIdOnly = await prisma.users_tmp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Users_tmpUpdateManyAndReturnArgs>(args: SelectSubset<T, Users_tmpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Users_tmpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users_tmp.
     * @param {Users_tmpUpsertArgs} args - Arguments to update or create a Users_tmp.
     * @example
     * // Update or create a Users_tmp
     * const users_tmp = await prisma.users_tmp.upsert({
     *   create: {
     *     // ... data to create a Users_tmp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users_tmp we want to update
     *   }
     * })
     */
    upsert<T extends Users_tmpUpsertArgs>(args: SelectSubset<T, Users_tmpUpsertArgs<ExtArgs>>): Prisma__Users_tmpClient<$Result.GetResult<Prisma.$Users_tmpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_tmpCountArgs} args - Arguments to filter Users_tmps to count.
     * @example
     * // Count the number of Users_tmps
     * const count = await prisma.users_tmp.count({
     *   where: {
     *     // ... the filter for the Users_tmps we want to count
     *   }
     * })
    **/
    count<T extends Users_tmpCountArgs>(
      args?: Subset<T, Users_tmpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Users_tmpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_tmpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Users_tmpAggregateArgs>(args: Subset<T, Users_tmpAggregateArgs>): Prisma.PrismaPromise<GetUsers_tmpAggregateType<T>>

    /**
     * Group by Users_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_tmpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Users_tmpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Users_tmpGroupByArgs['orderBy'] }
        : { orderBy?: Users_tmpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Users_tmpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsers_tmpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users_tmp model
   */
  readonly fields: Users_tmpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users_tmp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Users_tmpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    List___Association__Users_And_Sessions<T extends Users_tmp$List___Association__Users_And_SessionsArgs<ExtArgs> = {}>(args?: Subset<T, Users_tmp$List___Association__Users_And_SessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Association__Users_And_Sessions_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users_tmp model
   */
  interface Users_tmpFieldRefs {
    readonly id: FieldRef<"Users_tmp", 'Int'>
    readonly Name: FieldRef<"Users_tmp", 'String'>
    readonly Password: FieldRef<"Users_tmp", 'String'>
    readonly RefreshToken: FieldRef<"Users_tmp", 'String'>
    readonly DarkMode: FieldRef<"Users_tmp", 'Boolean'>
    readonly Show_Session_Names: FieldRef<"Users_tmp", 'Boolean'>
    readonly Show_Session_Date: FieldRef<"Users_tmp", 'Boolean'>
    readonly View_Sessions: FieldRef<"Users_tmp", 'enum_Users_View_Sessions'>
    readonly View_Sessions_Desc: FieldRef<"Users_tmp", 'Boolean'>
    readonly Statistics_View: FieldRef<"Users_tmp", 'enum_Users_Statistics_View'>
    readonly Statistics_View_Month: FieldRef<"Users_tmp", 'Int'>
    readonly Statistics_View_Year: FieldRef<"Users_tmp", 'Int'>
    readonly createdAt: FieldRef<"Users_tmp", 'DateTime'>
    readonly updatedAt: FieldRef<"Users_tmp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users_tmp findUnique
   */
  export type Users_tmpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_tmp
     */
    select?: Users_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_tmp
     */
    omit?: Users_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Users_tmp to fetch.
     */
    where: Users_tmpWhereUniqueInput
  }

  /**
   * Users_tmp findUniqueOrThrow
   */
  export type Users_tmpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_tmp
     */
    select?: Users_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_tmp
     */
    omit?: Users_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Users_tmp to fetch.
     */
    where: Users_tmpWhereUniqueInput
  }

  /**
   * Users_tmp findFirst
   */
  export type Users_tmpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_tmp
     */
    select?: Users_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_tmp
     */
    omit?: Users_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Users_tmp to fetch.
     */
    where?: Users_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_tmps to fetch.
     */
    orderBy?: Users_tmpOrderByWithRelationInput | Users_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users_tmps.
     */
    cursor?: Users_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users_tmps.
     */
    distinct?: Users_tmpScalarFieldEnum | Users_tmpScalarFieldEnum[]
  }

  /**
   * Users_tmp findFirstOrThrow
   */
  export type Users_tmpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_tmp
     */
    select?: Users_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_tmp
     */
    omit?: Users_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Users_tmp to fetch.
     */
    where?: Users_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_tmps to fetch.
     */
    orderBy?: Users_tmpOrderByWithRelationInput | Users_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users_tmps.
     */
    cursor?: Users_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users_tmps.
     */
    distinct?: Users_tmpScalarFieldEnum | Users_tmpScalarFieldEnum[]
  }

  /**
   * Users_tmp findMany
   */
  export type Users_tmpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_tmp
     */
    select?: Users_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_tmp
     */
    omit?: Users_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Users_tmps to fetch.
     */
    where?: Users_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_tmps to fetch.
     */
    orderBy?: Users_tmpOrderByWithRelationInput | Users_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users_tmps.
     */
    cursor?: Users_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_tmps.
     */
    skip?: number
    distinct?: Users_tmpScalarFieldEnum | Users_tmpScalarFieldEnum[]
  }

  /**
   * Users_tmp create
   */
  export type Users_tmpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_tmp
     */
    select?: Users_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_tmp
     */
    omit?: Users_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_tmpInclude<ExtArgs> | null
    /**
     * The data needed to create a Users_tmp.
     */
    data: XOR<Users_tmpCreateInput, Users_tmpUncheckedCreateInput>
  }

  /**
   * Users_tmp createMany
   */
  export type Users_tmpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users_tmps.
     */
    data: Users_tmpCreateManyInput | Users_tmpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users_tmp createManyAndReturn
   */
  export type Users_tmpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_tmp
     */
    select?: Users_tmpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users_tmp
     */
    omit?: Users_tmpOmit<ExtArgs> | null
    /**
     * The data used to create many Users_tmps.
     */
    data: Users_tmpCreateManyInput | Users_tmpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users_tmp update
   */
  export type Users_tmpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_tmp
     */
    select?: Users_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_tmp
     */
    omit?: Users_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_tmpInclude<ExtArgs> | null
    /**
     * The data needed to update a Users_tmp.
     */
    data: XOR<Users_tmpUpdateInput, Users_tmpUncheckedUpdateInput>
    /**
     * Choose, which Users_tmp to update.
     */
    where: Users_tmpWhereUniqueInput
  }

  /**
   * Users_tmp updateMany
   */
  export type Users_tmpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users_tmps.
     */
    data: XOR<Users_tmpUpdateManyMutationInput, Users_tmpUncheckedUpdateManyInput>
    /**
     * Filter which Users_tmps to update
     */
    where?: Users_tmpWhereInput
    /**
     * Limit how many Users_tmps to update.
     */
    limit?: number
  }

  /**
   * Users_tmp updateManyAndReturn
   */
  export type Users_tmpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_tmp
     */
    select?: Users_tmpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users_tmp
     */
    omit?: Users_tmpOmit<ExtArgs> | null
    /**
     * The data used to update Users_tmps.
     */
    data: XOR<Users_tmpUpdateManyMutationInput, Users_tmpUncheckedUpdateManyInput>
    /**
     * Filter which Users_tmps to update
     */
    where?: Users_tmpWhereInput
    /**
     * Limit how many Users_tmps to update.
     */
    limit?: number
  }

  /**
   * Users_tmp upsert
   */
  export type Users_tmpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_tmp
     */
    select?: Users_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_tmp
     */
    omit?: Users_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_tmpInclude<ExtArgs> | null
    /**
     * The filter to search for the Users_tmp to update in case it exists.
     */
    where: Users_tmpWhereUniqueInput
    /**
     * In case the Users_tmp found by the `where` argument doesn't exist, create a new Users_tmp with this data.
     */
    create: XOR<Users_tmpCreateInput, Users_tmpUncheckedCreateInput>
    /**
     * In case the Users_tmp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Users_tmpUpdateInput, Users_tmpUncheckedUpdateInput>
  }

  /**
   * Users_tmp delete
   */
  export type Users_tmpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_tmp
     */
    select?: Users_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_tmp
     */
    omit?: Users_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_tmpInclude<ExtArgs> | null
    /**
     * Filter which Users_tmp to delete.
     */
    where: Users_tmpWhereUniqueInput
  }

  /**
   * Users_tmp deleteMany
   */
  export type Users_tmpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users_tmps to delete
     */
    where?: Users_tmpWhereInput
    /**
     * Limit how many Users_tmps to delete.
     */
    limit?: number
  }

  /**
   * Users_tmp.List___Association__Users_And_Sessions
   */
  export type Users_tmp$List___Association__Users_And_SessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Users_And_Sessions_tmp
     */
    select?: Association__Users_And_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Users_And_Sessions_tmp
     */
    omit?: Association__Users_And_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Users_And_Sessions_tmpInclude<ExtArgs> | null
    where?: Association__Users_And_Sessions_tmpWhereInput
    orderBy?: Association__Users_And_Sessions_tmpOrderByWithRelationInput | Association__Users_And_Sessions_tmpOrderByWithRelationInput[]
    cursor?: Association__Users_And_Sessions_tmpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Association__Users_And_Sessions_tmpScalarFieldEnum | Association__Users_And_Sessions_tmpScalarFieldEnum[]
  }

  /**
   * Users_tmp without action
   */
  export type Users_tmpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_tmp
     */
    select?: Users_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_tmp
     */
    omit?: Users_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_tmpInclude<ExtArgs> | null
  }


  /**
   * Model Association__Users_And_Sessions_tmp
   */

  export type AggregateAssociation__Users_And_Sessions_tmp = {
    _count: Association__Users_And_Sessions_tmpCountAggregateOutputType | null
    _avg: Association__Users_And_Sessions_tmpAvgAggregateOutputType | null
    _sum: Association__Users_And_Sessions_tmpSumAggregateOutputType | null
    _min: Association__Users_And_Sessions_tmpMinAggregateOutputType | null
    _max: Association__Users_And_Sessions_tmpMaxAggregateOutputType | null
  }

  export type Association__Users_And_Sessions_tmpAvgAggregateOutputType = {
    View_Month: number | null
    View_Year: number | null
    Statistics_View_Month: number | null
    Statistics_View_Year: number | null
    UserID: number | null
    SessionID: number | null
  }

  export type Association__Users_And_Sessions_tmpSumAggregateOutputType = {
    View_Month: number | null
    View_Year: number | null
    Statistics_View_Month: number | null
    Statistics_View_Year: number | null
    UserID: number | null
    SessionID: number | null
  }

  export type Association__Users_And_Sessions_tmpMinAggregateOutputType = {
    InputType: $Enums.enum_Association__Users_And_Sessions_InputType | null
    Scores_Visible: boolean | null
    View: $Enums.enum_Association__Users_And_Sessions_View | null
    View_Month: number | null
    View_Year: number | null
    View_CustomDate: Date | null
    Statistics_Show_Border: boolean | null
    Statistics_View: $Enums.enum_Association__Users_And_Sessions_Statistics_View | null
    Statistics_View_Month: number | null
    Statistics_View_Year: number | null
    createdAt: Date | null
    updatedAt: Date | null
    UserID: number | null
    SessionID: number | null
  }

  export type Association__Users_And_Sessions_tmpMaxAggregateOutputType = {
    InputType: $Enums.enum_Association__Users_And_Sessions_InputType | null
    Scores_Visible: boolean | null
    View: $Enums.enum_Association__Users_And_Sessions_View | null
    View_Month: number | null
    View_Year: number | null
    View_CustomDate: Date | null
    Statistics_Show_Border: boolean | null
    Statistics_View: $Enums.enum_Association__Users_And_Sessions_Statistics_View | null
    Statistics_View_Month: number | null
    Statistics_View_Year: number | null
    createdAt: Date | null
    updatedAt: Date | null
    UserID: number | null
    SessionID: number | null
  }

  export type Association__Users_And_Sessions_tmpCountAggregateOutputType = {
    InputType: number
    Scores_Visible: number
    View: number
    View_Month: number
    View_Year: number
    View_CustomDate: number
    Statistics_Show_Border: number
    Statistics_View: number
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: number
    updatedAt: number
    UserID: number
    SessionID: number
    _all: number
  }


  export type Association__Users_And_Sessions_tmpAvgAggregateInputType = {
    View_Month?: true
    View_Year?: true
    Statistics_View_Month?: true
    Statistics_View_Year?: true
    UserID?: true
    SessionID?: true
  }

  export type Association__Users_And_Sessions_tmpSumAggregateInputType = {
    View_Month?: true
    View_Year?: true
    Statistics_View_Month?: true
    Statistics_View_Year?: true
    UserID?: true
    SessionID?: true
  }

  export type Association__Users_And_Sessions_tmpMinAggregateInputType = {
    InputType?: true
    Scores_Visible?: true
    View?: true
    View_Month?: true
    View_Year?: true
    View_CustomDate?: true
    Statistics_Show_Border?: true
    Statistics_View?: true
    Statistics_View_Month?: true
    Statistics_View_Year?: true
    createdAt?: true
    updatedAt?: true
    UserID?: true
    SessionID?: true
  }

  export type Association__Users_And_Sessions_tmpMaxAggregateInputType = {
    InputType?: true
    Scores_Visible?: true
    View?: true
    View_Month?: true
    View_Year?: true
    View_CustomDate?: true
    Statistics_Show_Border?: true
    Statistics_View?: true
    Statistics_View_Month?: true
    Statistics_View_Year?: true
    createdAt?: true
    updatedAt?: true
    UserID?: true
    SessionID?: true
  }

  export type Association__Users_And_Sessions_tmpCountAggregateInputType = {
    InputType?: true
    Scores_Visible?: true
    View?: true
    View_Month?: true
    View_Year?: true
    View_CustomDate?: true
    Statistics_Show_Border?: true
    Statistics_View?: true
    Statistics_View_Month?: true
    Statistics_View_Year?: true
    createdAt?: true
    updatedAt?: true
    UserID?: true
    SessionID?: true
    _all?: true
  }

  export type Association__Users_And_Sessions_tmpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Association__Users_And_Sessions_tmp to aggregate.
     */
    where?: Association__Users_And_Sessions_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Association__Users_And_Sessions_tmps to fetch.
     */
    orderBy?: Association__Users_And_Sessions_tmpOrderByWithRelationInput | Association__Users_And_Sessions_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Association__Users_And_Sessions_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Association__Users_And_Sessions_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Association__Users_And_Sessions_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Association__Users_And_Sessions_tmps
    **/
    _count?: true | Association__Users_And_Sessions_tmpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Association__Users_And_Sessions_tmpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Association__Users_And_Sessions_tmpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Association__Users_And_Sessions_tmpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Association__Users_And_Sessions_tmpMaxAggregateInputType
  }

  export type GetAssociation__Users_And_Sessions_tmpAggregateType<T extends Association__Users_And_Sessions_tmpAggregateArgs> = {
        [P in keyof T & keyof AggregateAssociation__Users_And_Sessions_tmp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssociation__Users_And_Sessions_tmp[P]>
      : GetScalarType<T[P], AggregateAssociation__Users_And_Sessions_tmp[P]>
  }




  export type Association__Users_And_Sessions_tmpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Association__Users_And_Sessions_tmpWhereInput
    orderBy?: Association__Users_And_Sessions_tmpOrderByWithAggregationInput | Association__Users_And_Sessions_tmpOrderByWithAggregationInput[]
    by: Association__Users_And_Sessions_tmpScalarFieldEnum[] | Association__Users_And_Sessions_tmpScalarFieldEnum
    having?: Association__Users_And_Sessions_tmpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Association__Users_And_Sessions_tmpCountAggregateInputType | true
    _avg?: Association__Users_And_Sessions_tmpAvgAggregateInputType
    _sum?: Association__Users_And_Sessions_tmpSumAggregateInputType
    _min?: Association__Users_And_Sessions_tmpMinAggregateInputType
    _max?: Association__Users_And_Sessions_tmpMaxAggregateInputType
  }

  export type Association__Users_And_Sessions_tmpGroupByOutputType = {
    InputType: $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible: boolean
    View: $Enums.enum_Association__Users_And_Sessions_View
    View_Month: number
    View_Year: number
    View_CustomDate: Date
    Statistics_Show_Border: boolean
    Statistics_View: $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: Date
    updatedAt: Date
    UserID: number
    SessionID: number
    _count: Association__Users_And_Sessions_tmpCountAggregateOutputType | null
    _avg: Association__Users_And_Sessions_tmpAvgAggregateOutputType | null
    _sum: Association__Users_And_Sessions_tmpSumAggregateOutputType | null
    _min: Association__Users_And_Sessions_tmpMinAggregateOutputType | null
    _max: Association__Users_And_Sessions_tmpMaxAggregateOutputType | null
  }

  type GetAssociation__Users_And_Sessions_tmpGroupByPayload<T extends Association__Users_And_Sessions_tmpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Association__Users_And_Sessions_tmpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Association__Users_And_Sessions_tmpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Association__Users_And_Sessions_tmpGroupByOutputType[P]>
            : GetScalarType<T[P], Association__Users_And_Sessions_tmpGroupByOutputType[P]>
        }
      >
    >


  export type Association__Users_And_Sessions_tmpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InputType?: boolean
    Scores_Visible?: boolean
    View?: boolean
    View_Month?: boolean
    View_Year?: boolean
    View_CustomDate?: boolean
    Statistics_Show_Border?: boolean
    Statistics_View?: boolean
    Statistics_View_Month?: boolean
    Statistics_View_Year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserID?: boolean
    SessionID?: boolean
    Session?: boolean | Sessions_tmpDefaultArgs<ExtArgs>
    User?: boolean | Users_tmpDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["association__Users_And_Sessions_tmp"]>

  export type Association__Users_And_Sessions_tmpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InputType?: boolean
    Scores_Visible?: boolean
    View?: boolean
    View_Month?: boolean
    View_Year?: boolean
    View_CustomDate?: boolean
    Statistics_Show_Border?: boolean
    Statistics_View?: boolean
    Statistics_View_Month?: boolean
    Statistics_View_Year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserID?: boolean
    SessionID?: boolean
    Session?: boolean | Sessions_tmpDefaultArgs<ExtArgs>
    User?: boolean | Users_tmpDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["association__Users_And_Sessions_tmp"]>

  export type Association__Users_And_Sessions_tmpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    InputType?: boolean
    Scores_Visible?: boolean
    View?: boolean
    View_Month?: boolean
    View_Year?: boolean
    View_CustomDate?: boolean
    Statistics_Show_Border?: boolean
    Statistics_View?: boolean
    Statistics_View_Month?: boolean
    Statistics_View_Year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserID?: boolean
    SessionID?: boolean
    Session?: boolean | Sessions_tmpDefaultArgs<ExtArgs>
    User?: boolean | Users_tmpDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["association__Users_And_Sessions_tmp"]>

  export type Association__Users_And_Sessions_tmpSelectScalar = {
    InputType?: boolean
    Scores_Visible?: boolean
    View?: boolean
    View_Month?: boolean
    View_Year?: boolean
    View_CustomDate?: boolean
    Statistics_Show_Border?: boolean
    Statistics_View?: boolean
    Statistics_View_Month?: boolean
    Statistics_View_Year?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserID?: boolean
    SessionID?: boolean
  }

  export type Association__Users_And_Sessions_tmpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"InputType" | "Scores_Visible" | "View" | "View_Month" | "View_Year" | "View_CustomDate" | "Statistics_Show_Border" | "Statistics_View" | "Statistics_View_Month" | "Statistics_View_Year" | "createdAt" | "updatedAt" | "UserID" | "SessionID", ExtArgs["result"]["association__Users_And_Sessions_tmp"]>
  export type Association__Users_And_Sessions_tmpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Session?: boolean | Sessions_tmpDefaultArgs<ExtArgs>
    User?: boolean | Users_tmpDefaultArgs<ExtArgs>
  }
  export type Association__Users_And_Sessions_tmpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Session?: boolean | Sessions_tmpDefaultArgs<ExtArgs>
    User?: boolean | Users_tmpDefaultArgs<ExtArgs>
  }
  export type Association__Users_And_Sessions_tmpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Session?: boolean | Sessions_tmpDefaultArgs<ExtArgs>
    User?: boolean | Users_tmpDefaultArgs<ExtArgs>
  }

  export type $Association__Users_And_Sessions_tmpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Association__Users_And_Sessions_tmp"
    objects: {
      Session: Prisma.$Sessions_tmpPayload<ExtArgs>
      User: Prisma.$Users_tmpPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      InputType: $Enums.enum_Association__Users_And_Sessions_InputType
      Scores_Visible: boolean
      View: $Enums.enum_Association__Users_And_Sessions_View
      View_Month: number
      View_Year: number
      View_CustomDate: Date
      Statistics_Show_Border: boolean
      Statistics_View: $Enums.enum_Association__Users_And_Sessions_Statistics_View
      Statistics_View_Month: number
      Statistics_View_Year: number
      createdAt: Date
      updatedAt: Date
      UserID: number
      SessionID: number
    }, ExtArgs["result"]["association__Users_And_Sessions_tmp"]>
    composites: {}
  }

  type Association__Users_And_Sessions_tmpGetPayload<S extends boolean | null | undefined | Association__Users_And_Sessions_tmpDefaultArgs> = $Result.GetResult<Prisma.$Association__Users_And_Sessions_tmpPayload, S>

  type Association__Users_And_Sessions_tmpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Association__Users_And_Sessions_tmpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Association__Users_And_Sessions_tmpCountAggregateInputType | true
    }

  export interface Association__Users_And_Sessions_tmpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Association__Users_And_Sessions_tmp'], meta: { name: 'Association__Users_And_Sessions_tmp' } }
    /**
     * Find zero or one Association__Users_And_Sessions_tmp that matches the filter.
     * @param {Association__Users_And_Sessions_tmpFindUniqueArgs} args - Arguments to find a Association__Users_And_Sessions_tmp
     * @example
     * // Get one Association__Users_And_Sessions_tmp
     * const association__Users_And_Sessions_tmp = await prisma.association__Users_And_Sessions_tmp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Association__Users_And_Sessions_tmpFindUniqueArgs>(args: SelectSubset<T, Association__Users_And_Sessions_tmpFindUniqueArgs<ExtArgs>>): Prisma__Association__Users_And_Sessions_tmpClient<$Result.GetResult<Prisma.$Association__Users_And_Sessions_tmpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Association__Users_And_Sessions_tmp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Association__Users_And_Sessions_tmpFindUniqueOrThrowArgs} args - Arguments to find a Association__Users_And_Sessions_tmp
     * @example
     * // Get one Association__Users_And_Sessions_tmp
     * const association__Users_And_Sessions_tmp = await prisma.association__Users_And_Sessions_tmp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Association__Users_And_Sessions_tmpFindUniqueOrThrowArgs>(args: SelectSubset<T, Association__Users_And_Sessions_tmpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Association__Users_And_Sessions_tmpClient<$Result.GetResult<Prisma.$Association__Users_And_Sessions_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Association__Users_And_Sessions_tmp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Users_And_Sessions_tmpFindFirstArgs} args - Arguments to find a Association__Users_And_Sessions_tmp
     * @example
     * // Get one Association__Users_And_Sessions_tmp
     * const association__Users_And_Sessions_tmp = await prisma.association__Users_And_Sessions_tmp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Association__Users_And_Sessions_tmpFindFirstArgs>(args?: SelectSubset<T, Association__Users_And_Sessions_tmpFindFirstArgs<ExtArgs>>): Prisma__Association__Users_And_Sessions_tmpClient<$Result.GetResult<Prisma.$Association__Users_And_Sessions_tmpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Association__Users_And_Sessions_tmp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Users_And_Sessions_tmpFindFirstOrThrowArgs} args - Arguments to find a Association__Users_And_Sessions_tmp
     * @example
     * // Get one Association__Users_And_Sessions_tmp
     * const association__Users_And_Sessions_tmp = await prisma.association__Users_And_Sessions_tmp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Association__Users_And_Sessions_tmpFindFirstOrThrowArgs>(args?: SelectSubset<T, Association__Users_And_Sessions_tmpFindFirstOrThrowArgs<ExtArgs>>): Prisma__Association__Users_And_Sessions_tmpClient<$Result.GetResult<Prisma.$Association__Users_And_Sessions_tmpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Association__Users_And_Sessions_tmps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Users_And_Sessions_tmpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Association__Users_And_Sessions_tmps
     * const association__Users_And_Sessions_tmps = await prisma.association__Users_And_Sessions_tmp.findMany()
     * 
     * // Get first 10 Association__Users_And_Sessions_tmps
     * const association__Users_And_Sessions_tmps = await prisma.association__Users_And_Sessions_tmp.findMany({ take: 10 })
     * 
     * // Only select the `Scores_Visible`
     * const association__Users_And_Sessions_tmpWithScores_VisibleOnly = await prisma.association__Users_And_Sessions_tmp.findMany({ select: { Scores_Visible: true } })
     * 
     */
    findMany<T extends Association__Users_And_Sessions_tmpFindManyArgs>(args?: SelectSubset<T, Association__Users_And_Sessions_tmpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Association__Users_And_Sessions_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Association__Users_And_Sessions_tmp.
     * @param {Association__Users_And_Sessions_tmpCreateArgs} args - Arguments to create a Association__Users_And_Sessions_tmp.
     * @example
     * // Create one Association__Users_And_Sessions_tmp
     * const Association__Users_And_Sessions_tmp = await prisma.association__Users_And_Sessions_tmp.create({
     *   data: {
     *     // ... data to create a Association__Users_And_Sessions_tmp
     *   }
     * })
     * 
     */
    create<T extends Association__Users_And_Sessions_tmpCreateArgs>(args: SelectSubset<T, Association__Users_And_Sessions_tmpCreateArgs<ExtArgs>>): Prisma__Association__Users_And_Sessions_tmpClient<$Result.GetResult<Prisma.$Association__Users_And_Sessions_tmpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Association__Users_And_Sessions_tmps.
     * @param {Association__Users_And_Sessions_tmpCreateManyArgs} args - Arguments to create many Association__Users_And_Sessions_tmps.
     * @example
     * // Create many Association__Users_And_Sessions_tmps
     * const association__Users_And_Sessions_tmp = await prisma.association__Users_And_Sessions_tmp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Association__Users_And_Sessions_tmpCreateManyArgs>(args?: SelectSubset<T, Association__Users_And_Sessions_tmpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Association__Users_And_Sessions_tmps and returns the data saved in the database.
     * @param {Association__Users_And_Sessions_tmpCreateManyAndReturnArgs} args - Arguments to create many Association__Users_And_Sessions_tmps.
     * @example
     * // Create many Association__Users_And_Sessions_tmps
     * const association__Users_And_Sessions_tmp = await prisma.association__Users_And_Sessions_tmp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Association__Users_And_Sessions_tmps and only return the `Scores_Visible`
     * const association__Users_And_Sessions_tmpWithScores_VisibleOnly = await prisma.association__Users_And_Sessions_tmp.createManyAndReturn({
     *   select: { Scores_Visible: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Association__Users_And_Sessions_tmpCreateManyAndReturnArgs>(args?: SelectSubset<T, Association__Users_And_Sessions_tmpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Association__Users_And_Sessions_tmpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Association__Users_And_Sessions_tmp.
     * @param {Association__Users_And_Sessions_tmpDeleteArgs} args - Arguments to delete one Association__Users_And_Sessions_tmp.
     * @example
     * // Delete one Association__Users_And_Sessions_tmp
     * const Association__Users_And_Sessions_tmp = await prisma.association__Users_And_Sessions_tmp.delete({
     *   where: {
     *     // ... filter to delete one Association__Users_And_Sessions_tmp
     *   }
     * })
     * 
     */
    delete<T extends Association__Users_And_Sessions_tmpDeleteArgs>(args: SelectSubset<T, Association__Users_And_Sessions_tmpDeleteArgs<ExtArgs>>): Prisma__Association__Users_And_Sessions_tmpClient<$Result.GetResult<Prisma.$Association__Users_And_Sessions_tmpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Association__Users_And_Sessions_tmp.
     * @param {Association__Users_And_Sessions_tmpUpdateArgs} args - Arguments to update one Association__Users_And_Sessions_tmp.
     * @example
     * // Update one Association__Users_And_Sessions_tmp
     * const association__Users_And_Sessions_tmp = await prisma.association__Users_And_Sessions_tmp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Association__Users_And_Sessions_tmpUpdateArgs>(args: SelectSubset<T, Association__Users_And_Sessions_tmpUpdateArgs<ExtArgs>>): Prisma__Association__Users_And_Sessions_tmpClient<$Result.GetResult<Prisma.$Association__Users_And_Sessions_tmpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Association__Users_And_Sessions_tmps.
     * @param {Association__Users_And_Sessions_tmpDeleteManyArgs} args - Arguments to filter Association__Users_And_Sessions_tmps to delete.
     * @example
     * // Delete a few Association__Users_And_Sessions_tmps
     * const { count } = await prisma.association__Users_And_Sessions_tmp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Association__Users_And_Sessions_tmpDeleteManyArgs>(args?: SelectSubset<T, Association__Users_And_Sessions_tmpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Association__Users_And_Sessions_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Users_And_Sessions_tmpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Association__Users_And_Sessions_tmps
     * const association__Users_And_Sessions_tmp = await prisma.association__Users_And_Sessions_tmp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Association__Users_And_Sessions_tmpUpdateManyArgs>(args: SelectSubset<T, Association__Users_And_Sessions_tmpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Association__Users_And_Sessions_tmps and returns the data updated in the database.
     * @param {Association__Users_And_Sessions_tmpUpdateManyAndReturnArgs} args - Arguments to update many Association__Users_And_Sessions_tmps.
     * @example
     * // Update many Association__Users_And_Sessions_tmps
     * const association__Users_And_Sessions_tmp = await prisma.association__Users_And_Sessions_tmp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Association__Users_And_Sessions_tmps and only return the `Scores_Visible`
     * const association__Users_And_Sessions_tmpWithScores_VisibleOnly = await prisma.association__Users_And_Sessions_tmp.updateManyAndReturn({
     *   select: { Scores_Visible: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Association__Users_And_Sessions_tmpUpdateManyAndReturnArgs>(args: SelectSubset<T, Association__Users_And_Sessions_tmpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Association__Users_And_Sessions_tmpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Association__Users_And_Sessions_tmp.
     * @param {Association__Users_And_Sessions_tmpUpsertArgs} args - Arguments to update or create a Association__Users_And_Sessions_tmp.
     * @example
     * // Update or create a Association__Users_And_Sessions_tmp
     * const association__Users_And_Sessions_tmp = await prisma.association__Users_And_Sessions_tmp.upsert({
     *   create: {
     *     // ... data to create a Association__Users_And_Sessions_tmp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Association__Users_And_Sessions_tmp we want to update
     *   }
     * })
     */
    upsert<T extends Association__Users_And_Sessions_tmpUpsertArgs>(args: SelectSubset<T, Association__Users_And_Sessions_tmpUpsertArgs<ExtArgs>>): Prisma__Association__Users_And_Sessions_tmpClient<$Result.GetResult<Prisma.$Association__Users_And_Sessions_tmpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Association__Users_And_Sessions_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Users_And_Sessions_tmpCountArgs} args - Arguments to filter Association__Users_And_Sessions_tmps to count.
     * @example
     * // Count the number of Association__Users_And_Sessions_tmps
     * const count = await prisma.association__Users_And_Sessions_tmp.count({
     *   where: {
     *     // ... the filter for the Association__Users_And_Sessions_tmps we want to count
     *   }
     * })
    **/
    count<T extends Association__Users_And_Sessions_tmpCountArgs>(
      args?: Subset<T, Association__Users_And_Sessions_tmpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Association__Users_And_Sessions_tmpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Association__Users_And_Sessions_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Users_And_Sessions_tmpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Association__Users_And_Sessions_tmpAggregateArgs>(args: Subset<T, Association__Users_And_Sessions_tmpAggregateArgs>): Prisma.PrismaPromise<GetAssociation__Users_And_Sessions_tmpAggregateType<T>>

    /**
     * Group by Association__Users_And_Sessions_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Users_And_Sessions_tmpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Association__Users_And_Sessions_tmpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Association__Users_And_Sessions_tmpGroupByArgs['orderBy'] }
        : { orderBy?: Association__Users_And_Sessions_tmpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Association__Users_And_Sessions_tmpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssociation__Users_And_Sessions_tmpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Association__Users_And_Sessions_tmp model
   */
  readonly fields: Association__Users_And_Sessions_tmpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Association__Users_And_Sessions_tmp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Association__Users_And_Sessions_tmpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Session<T extends Sessions_tmpDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Sessions_tmpDefaultArgs<ExtArgs>>): Prisma__Sessions_tmpClient<$Result.GetResult<Prisma.$Sessions_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends Users_tmpDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Users_tmpDefaultArgs<ExtArgs>>): Prisma__Users_tmpClient<$Result.GetResult<Prisma.$Users_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Association__Users_And_Sessions_tmp model
   */
  interface Association__Users_And_Sessions_tmpFieldRefs {
    readonly InputType: FieldRef<"Association__Users_And_Sessions_tmp", 'enum_Association__Users_And_Sessions_InputType'>
    readonly Scores_Visible: FieldRef<"Association__Users_And_Sessions_tmp", 'Boolean'>
    readonly View: FieldRef<"Association__Users_And_Sessions_tmp", 'enum_Association__Users_And_Sessions_View'>
    readonly View_Month: FieldRef<"Association__Users_And_Sessions_tmp", 'Int'>
    readonly View_Year: FieldRef<"Association__Users_And_Sessions_tmp", 'Int'>
    readonly View_CustomDate: FieldRef<"Association__Users_And_Sessions_tmp", 'DateTime'>
    readonly Statistics_Show_Border: FieldRef<"Association__Users_And_Sessions_tmp", 'Boolean'>
    readonly Statistics_View: FieldRef<"Association__Users_And_Sessions_tmp", 'enum_Association__Users_And_Sessions_Statistics_View'>
    readonly Statistics_View_Month: FieldRef<"Association__Users_And_Sessions_tmp", 'Int'>
    readonly Statistics_View_Year: FieldRef<"Association__Users_And_Sessions_tmp", 'Int'>
    readonly createdAt: FieldRef<"Association__Users_And_Sessions_tmp", 'DateTime'>
    readonly updatedAt: FieldRef<"Association__Users_And_Sessions_tmp", 'DateTime'>
    readonly UserID: FieldRef<"Association__Users_And_Sessions_tmp", 'Int'>
    readonly SessionID: FieldRef<"Association__Users_And_Sessions_tmp", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Association__Users_And_Sessions_tmp findUnique
   */
  export type Association__Users_And_Sessions_tmpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Users_And_Sessions_tmp
     */
    select?: Association__Users_And_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Users_And_Sessions_tmp
     */
    omit?: Association__Users_And_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Users_And_Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Association__Users_And_Sessions_tmp to fetch.
     */
    where: Association__Users_And_Sessions_tmpWhereUniqueInput
  }

  /**
   * Association__Users_And_Sessions_tmp findUniqueOrThrow
   */
  export type Association__Users_And_Sessions_tmpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Users_And_Sessions_tmp
     */
    select?: Association__Users_And_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Users_And_Sessions_tmp
     */
    omit?: Association__Users_And_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Users_And_Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Association__Users_And_Sessions_tmp to fetch.
     */
    where: Association__Users_And_Sessions_tmpWhereUniqueInput
  }

  /**
   * Association__Users_And_Sessions_tmp findFirst
   */
  export type Association__Users_And_Sessions_tmpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Users_And_Sessions_tmp
     */
    select?: Association__Users_And_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Users_And_Sessions_tmp
     */
    omit?: Association__Users_And_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Users_And_Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Association__Users_And_Sessions_tmp to fetch.
     */
    where?: Association__Users_And_Sessions_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Association__Users_And_Sessions_tmps to fetch.
     */
    orderBy?: Association__Users_And_Sessions_tmpOrderByWithRelationInput | Association__Users_And_Sessions_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Association__Users_And_Sessions_tmps.
     */
    cursor?: Association__Users_And_Sessions_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Association__Users_And_Sessions_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Association__Users_And_Sessions_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Association__Users_And_Sessions_tmps.
     */
    distinct?: Association__Users_And_Sessions_tmpScalarFieldEnum | Association__Users_And_Sessions_tmpScalarFieldEnum[]
  }

  /**
   * Association__Users_And_Sessions_tmp findFirstOrThrow
   */
  export type Association__Users_And_Sessions_tmpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Users_And_Sessions_tmp
     */
    select?: Association__Users_And_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Users_And_Sessions_tmp
     */
    omit?: Association__Users_And_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Users_And_Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Association__Users_And_Sessions_tmp to fetch.
     */
    where?: Association__Users_And_Sessions_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Association__Users_And_Sessions_tmps to fetch.
     */
    orderBy?: Association__Users_And_Sessions_tmpOrderByWithRelationInput | Association__Users_And_Sessions_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Association__Users_And_Sessions_tmps.
     */
    cursor?: Association__Users_And_Sessions_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Association__Users_And_Sessions_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Association__Users_And_Sessions_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Association__Users_And_Sessions_tmps.
     */
    distinct?: Association__Users_And_Sessions_tmpScalarFieldEnum | Association__Users_And_Sessions_tmpScalarFieldEnum[]
  }

  /**
   * Association__Users_And_Sessions_tmp findMany
   */
  export type Association__Users_And_Sessions_tmpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Users_And_Sessions_tmp
     */
    select?: Association__Users_And_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Users_And_Sessions_tmp
     */
    omit?: Association__Users_And_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Users_And_Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Association__Users_And_Sessions_tmps to fetch.
     */
    where?: Association__Users_And_Sessions_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Association__Users_And_Sessions_tmps to fetch.
     */
    orderBy?: Association__Users_And_Sessions_tmpOrderByWithRelationInput | Association__Users_And_Sessions_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Association__Users_And_Sessions_tmps.
     */
    cursor?: Association__Users_And_Sessions_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Association__Users_And_Sessions_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Association__Users_And_Sessions_tmps.
     */
    skip?: number
    distinct?: Association__Users_And_Sessions_tmpScalarFieldEnum | Association__Users_And_Sessions_tmpScalarFieldEnum[]
  }

  /**
   * Association__Users_And_Sessions_tmp create
   */
  export type Association__Users_And_Sessions_tmpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Users_And_Sessions_tmp
     */
    select?: Association__Users_And_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Users_And_Sessions_tmp
     */
    omit?: Association__Users_And_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Users_And_Sessions_tmpInclude<ExtArgs> | null
    /**
     * The data needed to create a Association__Users_And_Sessions_tmp.
     */
    data: XOR<Association__Users_And_Sessions_tmpCreateInput, Association__Users_And_Sessions_tmpUncheckedCreateInput>
  }

  /**
   * Association__Users_And_Sessions_tmp createMany
   */
  export type Association__Users_And_Sessions_tmpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Association__Users_And_Sessions_tmps.
     */
    data: Association__Users_And_Sessions_tmpCreateManyInput | Association__Users_And_Sessions_tmpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Association__Users_And_Sessions_tmp createManyAndReturn
   */
  export type Association__Users_And_Sessions_tmpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Users_And_Sessions_tmp
     */
    select?: Association__Users_And_Sessions_tmpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Users_And_Sessions_tmp
     */
    omit?: Association__Users_And_Sessions_tmpOmit<ExtArgs> | null
    /**
     * The data used to create many Association__Users_And_Sessions_tmps.
     */
    data: Association__Users_And_Sessions_tmpCreateManyInput | Association__Users_And_Sessions_tmpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Users_And_Sessions_tmpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Association__Users_And_Sessions_tmp update
   */
  export type Association__Users_And_Sessions_tmpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Users_And_Sessions_tmp
     */
    select?: Association__Users_And_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Users_And_Sessions_tmp
     */
    omit?: Association__Users_And_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Users_And_Sessions_tmpInclude<ExtArgs> | null
    /**
     * The data needed to update a Association__Users_And_Sessions_tmp.
     */
    data: XOR<Association__Users_And_Sessions_tmpUpdateInput, Association__Users_And_Sessions_tmpUncheckedUpdateInput>
    /**
     * Choose, which Association__Users_And_Sessions_tmp to update.
     */
    where: Association__Users_And_Sessions_tmpWhereUniqueInput
  }

  /**
   * Association__Users_And_Sessions_tmp updateMany
   */
  export type Association__Users_And_Sessions_tmpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Association__Users_And_Sessions_tmps.
     */
    data: XOR<Association__Users_And_Sessions_tmpUpdateManyMutationInput, Association__Users_And_Sessions_tmpUncheckedUpdateManyInput>
    /**
     * Filter which Association__Users_And_Sessions_tmps to update
     */
    where?: Association__Users_And_Sessions_tmpWhereInput
    /**
     * Limit how many Association__Users_And_Sessions_tmps to update.
     */
    limit?: number
  }

  /**
   * Association__Users_And_Sessions_tmp updateManyAndReturn
   */
  export type Association__Users_And_Sessions_tmpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Users_And_Sessions_tmp
     */
    select?: Association__Users_And_Sessions_tmpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Users_And_Sessions_tmp
     */
    omit?: Association__Users_And_Sessions_tmpOmit<ExtArgs> | null
    /**
     * The data used to update Association__Users_And_Sessions_tmps.
     */
    data: XOR<Association__Users_And_Sessions_tmpUpdateManyMutationInput, Association__Users_And_Sessions_tmpUncheckedUpdateManyInput>
    /**
     * Filter which Association__Users_And_Sessions_tmps to update
     */
    where?: Association__Users_And_Sessions_tmpWhereInput
    /**
     * Limit how many Association__Users_And_Sessions_tmps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Users_And_Sessions_tmpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Association__Users_And_Sessions_tmp upsert
   */
  export type Association__Users_And_Sessions_tmpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Users_And_Sessions_tmp
     */
    select?: Association__Users_And_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Users_And_Sessions_tmp
     */
    omit?: Association__Users_And_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Users_And_Sessions_tmpInclude<ExtArgs> | null
    /**
     * The filter to search for the Association__Users_And_Sessions_tmp to update in case it exists.
     */
    where: Association__Users_And_Sessions_tmpWhereUniqueInput
    /**
     * In case the Association__Users_And_Sessions_tmp found by the `where` argument doesn't exist, create a new Association__Users_And_Sessions_tmp with this data.
     */
    create: XOR<Association__Users_And_Sessions_tmpCreateInput, Association__Users_And_Sessions_tmpUncheckedCreateInput>
    /**
     * In case the Association__Users_And_Sessions_tmp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Association__Users_And_Sessions_tmpUpdateInput, Association__Users_And_Sessions_tmpUncheckedUpdateInput>
  }

  /**
   * Association__Users_And_Sessions_tmp delete
   */
  export type Association__Users_And_Sessions_tmpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Users_And_Sessions_tmp
     */
    select?: Association__Users_And_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Users_And_Sessions_tmp
     */
    omit?: Association__Users_And_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Users_And_Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter which Association__Users_And_Sessions_tmp to delete.
     */
    where: Association__Users_And_Sessions_tmpWhereUniqueInput
  }

  /**
   * Association__Users_And_Sessions_tmp deleteMany
   */
  export type Association__Users_And_Sessions_tmpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Association__Users_And_Sessions_tmps to delete
     */
    where?: Association__Users_And_Sessions_tmpWhereInput
    /**
     * Limit how many Association__Users_And_Sessions_tmps to delete.
     */
    limit?: number
  }

  /**
   * Association__Users_And_Sessions_tmp without action
   */
  export type Association__Users_And_Sessions_tmpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Users_And_Sessions_tmp
     */
    select?: Association__Users_And_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Users_And_Sessions_tmp
     */
    omit?: Association__Users_And_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Users_And_Sessions_tmpInclude<ExtArgs> | null
  }


  /**
   * Model Sessions_tmp
   */

  export type AggregateSessions_tmp = {
    _count: Sessions_tmpCountAggregateOutputType | null
    _avg: Sessions_tmpAvgAggregateOutputType | null
    _sum: Sessions_tmpSumAggregateOutputType | null
    _min: Sessions_tmpMinAggregateOutputType | null
    _max: Sessions_tmpMaxAggregateOutputType | null
  }

  export type Sessions_tmpAvgAggregateOutputType = {
    id: number | null
    Columns: number | null
    View_List_Years: number | null
  }

  export type Sessions_tmpSumAggregateOutputType = {
    id: number | null
    Columns: number | null
    View_List_Years: number[]
  }

  export type Sessions_tmpMinAggregateOutputType = {
    id: number | null
    Name: string | null
    Color: string | null
    Columns: number | null
    CurrentGameStart: Date | null
    LastPlayed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Sessions_tmpMaxAggregateOutputType = {
    id: number | null
    Name: string | null
    Color: string | null
    Columns: number | null
    CurrentGameStart: Date | null
    LastPlayed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Sessions_tmpCountAggregateOutputType = {
    id: number
    Name: number
    Color: number
    Columns: number
    View_List_Years: number
    CurrentGameStart: number
    LastPlayed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Sessions_tmpAvgAggregateInputType = {
    id?: true
    Columns?: true
    View_List_Years?: true
  }

  export type Sessions_tmpSumAggregateInputType = {
    id?: true
    Columns?: true
    View_List_Years?: true
  }

  export type Sessions_tmpMinAggregateInputType = {
    id?: true
    Name?: true
    Color?: true
    Columns?: true
    CurrentGameStart?: true
    LastPlayed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Sessions_tmpMaxAggregateInputType = {
    id?: true
    Name?: true
    Color?: true
    Columns?: true
    CurrentGameStart?: true
    LastPlayed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Sessions_tmpCountAggregateInputType = {
    id?: true
    Name?: true
    Color?: true
    Columns?: true
    View_List_Years?: true
    CurrentGameStart?: true
    LastPlayed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Sessions_tmpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions_tmp to aggregate.
     */
    where?: Sessions_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions_tmps to fetch.
     */
    orderBy?: Sessions_tmpOrderByWithRelationInput | Sessions_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Sessions_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions_tmps
    **/
    _count?: true | Sessions_tmpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sessions_tmpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sessions_tmpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sessions_tmpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sessions_tmpMaxAggregateInputType
  }

  export type GetSessions_tmpAggregateType<T extends Sessions_tmpAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions_tmp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions_tmp[P]>
      : GetScalarType<T[P], AggregateSessions_tmp[P]>
  }




  export type Sessions_tmpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Sessions_tmpWhereInput
    orderBy?: Sessions_tmpOrderByWithAggregationInput | Sessions_tmpOrderByWithAggregationInput[]
    by: Sessions_tmpScalarFieldEnum[] | Sessions_tmpScalarFieldEnum
    having?: Sessions_tmpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sessions_tmpCountAggregateInputType | true
    _avg?: Sessions_tmpAvgAggregateInputType
    _sum?: Sessions_tmpSumAggregateInputType
    _min?: Sessions_tmpMinAggregateInputType
    _max?: Sessions_tmpMaxAggregateInputType
  }

  export type Sessions_tmpGroupByOutputType = {
    id: number
    Name: string
    Color: string
    Columns: number
    View_List_Years: number[]
    CurrentGameStart: Date | null
    LastPlayed: Date
    createdAt: Date
    updatedAt: Date
    _count: Sessions_tmpCountAggregateOutputType | null
    _avg: Sessions_tmpAvgAggregateOutputType | null
    _sum: Sessions_tmpSumAggregateOutputType | null
    _min: Sessions_tmpMinAggregateOutputType | null
    _max: Sessions_tmpMaxAggregateOutputType | null
  }

  type GetSessions_tmpGroupByPayload<T extends Sessions_tmpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sessions_tmpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sessions_tmpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sessions_tmpGroupByOutputType[P]>
            : GetScalarType<T[P], Sessions_tmpGroupByOutputType[P]>
        }
      >
    >


  export type Sessions_tmpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    Color?: boolean
    Columns?: boolean
    View_List_Years?: boolean
    CurrentGameStart?: boolean
    LastPlayed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Association__Players_And_FinalScores_With_Sessions_tmp?: boolean | Sessions_tmp$Association__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs>
    Association__Sessions_And_Players_tmp?: boolean | Sessions_tmp$Association__Sessions_And_Players_tmpArgs<ExtArgs>
    Association__Users_And_Sessions_tmp?: boolean | Sessions_tmp$Association__Users_And_Sessions_tmpArgs<ExtArgs>
    _count?: boolean | Sessions_tmpCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions_tmp"]>

  export type Sessions_tmpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    Color?: boolean
    Columns?: boolean
    View_List_Years?: boolean
    CurrentGameStart?: boolean
    LastPlayed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sessions_tmp"]>

  export type Sessions_tmpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    Color?: boolean
    Columns?: boolean
    View_List_Years?: boolean
    CurrentGameStart?: boolean
    LastPlayed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sessions_tmp"]>

  export type Sessions_tmpSelectScalar = {
    id?: boolean
    Name?: boolean
    Color?: boolean
    Columns?: boolean
    View_List_Years?: boolean
    CurrentGameStart?: boolean
    LastPlayed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Sessions_tmpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Name" | "Color" | "Columns" | "View_List_Years" | "CurrentGameStart" | "LastPlayed" | "createdAt" | "updatedAt", ExtArgs["result"]["sessions_tmp"]>
  export type Sessions_tmpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Association__Players_And_FinalScores_With_Sessions_tmp?: boolean | Sessions_tmp$Association__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs>
    Association__Sessions_And_Players_tmp?: boolean | Sessions_tmp$Association__Sessions_And_Players_tmpArgs<ExtArgs>
    Association__Users_And_Sessions_tmp?: boolean | Sessions_tmp$Association__Users_And_Sessions_tmpArgs<ExtArgs>
    _count?: boolean | Sessions_tmpCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Sessions_tmpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Sessions_tmpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Sessions_tmpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sessions_tmp"
    objects: {
      Association__Players_And_FinalScores_With_Sessions_tmp: Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>[]
      Association__Sessions_And_Players_tmp: Prisma.$Association__Sessions_And_Players_tmpPayload<ExtArgs>[]
      Association__Users_And_Sessions_tmp: Prisma.$Association__Users_And_Sessions_tmpPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Name: string
      Color: string
      Columns: number
      View_List_Years: number[]
      CurrentGameStart: Date | null
      LastPlayed: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sessions_tmp"]>
    composites: {}
  }

  type Sessions_tmpGetPayload<S extends boolean | null | undefined | Sessions_tmpDefaultArgs> = $Result.GetResult<Prisma.$Sessions_tmpPayload, S>

  type Sessions_tmpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Sessions_tmpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sessions_tmpCountAggregateInputType | true
    }

  export interface Sessions_tmpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sessions_tmp'], meta: { name: 'Sessions_tmp' } }
    /**
     * Find zero or one Sessions_tmp that matches the filter.
     * @param {Sessions_tmpFindUniqueArgs} args - Arguments to find a Sessions_tmp
     * @example
     * // Get one Sessions_tmp
     * const sessions_tmp = await prisma.sessions_tmp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Sessions_tmpFindUniqueArgs>(args: SelectSubset<T, Sessions_tmpFindUniqueArgs<ExtArgs>>): Prisma__Sessions_tmpClient<$Result.GetResult<Prisma.$Sessions_tmpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions_tmp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Sessions_tmpFindUniqueOrThrowArgs} args - Arguments to find a Sessions_tmp
     * @example
     * // Get one Sessions_tmp
     * const sessions_tmp = await prisma.sessions_tmp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Sessions_tmpFindUniqueOrThrowArgs>(args: SelectSubset<T, Sessions_tmpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Sessions_tmpClient<$Result.GetResult<Prisma.$Sessions_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions_tmp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sessions_tmpFindFirstArgs} args - Arguments to find a Sessions_tmp
     * @example
     * // Get one Sessions_tmp
     * const sessions_tmp = await prisma.sessions_tmp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Sessions_tmpFindFirstArgs>(args?: SelectSubset<T, Sessions_tmpFindFirstArgs<ExtArgs>>): Prisma__Sessions_tmpClient<$Result.GetResult<Prisma.$Sessions_tmpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions_tmp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sessions_tmpFindFirstOrThrowArgs} args - Arguments to find a Sessions_tmp
     * @example
     * // Get one Sessions_tmp
     * const sessions_tmp = await prisma.sessions_tmp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Sessions_tmpFindFirstOrThrowArgs>(args?: SelectSubset<T, Sessions_tmpFindFirstOrThrowArgs<ExtArgs>>): Prisma__Sessions_tmpClient<$Result.GetResult<Prisma.$Sessions_tmpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions_tmps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sessions_tmpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions_tmps
     * const sessions_tmps = await prisma.sessions_tmp.findMany()
     * 
     * // Get first 10 Sessions_tmps
     * const sessions_tmps = await prisma.sessions_tmp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessions_tmpWithIdOnly = await prisma.sessions_tmp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Sessions_tmpFindManyArgs>(args?: SelectSubset<T, Sessions_tmpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sessions_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions_tmp.
     * @param {Sessions_tmpCreateArgs} args - Arguments to create a Sessions_tmp.
     * @example
     * // Create one Sessions_tmp
     * const Sessions_tmp = await prisma.sessions_tmp.create({
     *   data: {
     *     // ... data to create a Sessions_tmp
     *   }
     * })
     * 
     */
    create<T extends Sessions_tmpCreateArgs>(args: SelectSubset<T, Sessions_tmpCreateArgs<ExtArgs>>): Prisma__Sessions_tmpClient<$Result.GetResult<Prisma.$Sessions_tmpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions_tmps.
     * @param {Sessions_tmpCreateManyArgs} args - Arguments to create many Sessions_tmps.
     * @example
     * // Create many Sessions_tmps
     * const sessions_tmp = await prisma.sessions_tmp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Sessions_tmpCreateManyArgs>(args?: SelectSubset<T, Sessions_tmpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions_tmps and returns the data saved in the database.
     * @param {Sessions_tmpCreateManyAndReturnArgs} args - Arguments to create many Sessions_tmps.
     * @example
     * // Create many Sessions_tmps
     * const sessions_tmp = await prisma.sessions_tmp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions_tmps and only return the `id`
     * const sessions_tmpWithIdOnly = await prisma.sessions_tmp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Sessions_tmpCreateManyAndReturnArgs>(args?: SelectSubset<T, Sessions_tmpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sessions_tmpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessions_tmp.
     * @param {Sessions_tmpDeleteArgs} args - Arguments to delete one Sessions_tmp.
     * @example
     * // Delete one Sessions_tmp
     * const Sessions_tmp = await prisma.sessions_tmp.delete({
     *   where: {
     *     // ... filter to delete one Sessions_tmp
     *   }
     * })
     * 
     */
    delete<T extends Sessions_tmpDeleteArgs>(args: SelectSubset<T, Sessions_tmpDeleteArgs<ExtArgs>>): Prisma__Sessions_tmpClient<$Result.GetResult<Prisma.$Sessions_tmpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions_tmp.
     * @param {Sessions_tmpUpdateArgs} args - Arguments to update one Sessions_tmp.
     * @example
     * // Update one Sessions_tmp
     * const sessions_tmp = await prisma.sessions_tmp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Sessions_tmpUpdateArgs>(args: SelectSubset<T, Sessions_tmpUpdateArgs<ExtArgs>>): Prisma__Sessions_tmpClient<$Result.GetResult<Prisma.$Sessions_tmpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions_tmps.
     * @param {Sessions_tmpDeleteManyArgs} args - Arguments to filter Sessions_tmps to delete.
     * @example
     * // Delete a few Sessions_tmps
     * const { count } = await prisma.sessions_tmp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Sessions_tmpDeleteManyArgs>(args?: SelectSubset<T, Sessions_tmpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sessions_tmpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions_tmps
     * const sessions_tmp = await prisma.sessions_tmp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Sessions_tmpUpdateManyArgs>(args: SelectSubset<T, Sessions_tmpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions_tmps and returns the data updated in the database.
     * @param {Sessions_tmpUpdateManyAndReturnArgs} args - Arguments to update many Sessions_tmps.
     * @example
     * // Update many Sessions_tmps
     * const sessions_tmp = await prisma.sessions_tmp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions_tmps and only return the `id`
     * const sessions_tmpWithIdOnly = await prisma.sessions_tmp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Sessions_tmpUpdateManyAndReturnArgs>(args: SelectSubset<T, Sessions_tmpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Sessions_tmpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessions_tmp.
     * @param {Sessions_tmpUpsertArgs} args - Arguments to update or create a Sessions_tmp.
     * @example
     * // Update or create a Sessions_tmp
     * const sessions_tmp = await prisma.sessions_tmp.upsert({
     *   create: {
     *     // ... data to create a Sessions_tmp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions_tmp we want to update
     *   }
     * })
     */
    upsert<T extends Sessions_tmpUpsertArgs>(args: SelectSubset<T, Sessions_tmpUpsertArgs<ExtArgs>>): Prisma__Sessions_tmpClient<$Result.GetResult<Prisma.$Sessions_tmpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sessions_tmpCountArgs} args - Arguments to filter Sessions_tmps to count.
     * @example
     * // Count the number of Sessions_tmps
     * const count = await prisma.sessions_tmp.count({
     *   where: {
     *     // ... the filter for the Sessions_tmps we want to count
     *   }
     * })
    **/
    count<T extends Sessions_tmpCountArgs>(
      args?: Subset<T, Sessions_tmpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sessions_tmpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sessions_tmpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sessions_tmpAggregateArgs>(args: Subset<T, Sessions_tmpAggregateArgs>): Prisma.PrismaPromise<GetSessions_tmpAggregateType<T>>

    /**
     * Group by Sessions_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sessions_tmpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Sessions_tmpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Sessions_tmpGroupByArgs['orderBy'] }
        : { orderBy?: Sessions_tmpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Sessions_tmpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessions_tmpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sessions_tmp model
   */
  readonly fields: Sessions_tmpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sessions_tmp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Sessions_tmpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Association__Players_And_FinalScores_With_Sessions_tmp<T extends Sessions_tmp$Association__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs> = {}>(args?: Subset<T, Sessions_tmp$Association__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Association__Sessions_And_Players_tmp<T extends Sessions_tmp$Association__Sessions_And_Players_tmpArgs<ExtArgs> = {}>(args?: Subset<T, Sessions_tmp$Association__Sessions_And_Players_tmpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Association__Sessions_And_Players_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Association__Users_And_Sessions_tmp<T extends Sessions_tmp$Association__Users_And_Sessions_tmpArgs<ExtArgs> = {}>(args?: Subset<T, Sessions_tmp$Association__Users_And_Sessions_tmpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Association__Users_And_Sessions_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sessions_tmp model
   */
  interface Sessions_tmpFieldRefs {
    readonly id: FieldRef<"Sessions_tmp", 'Int'>
    readonly Name: FieldRef<"Sessions_tmp", 'String'>
    readonly Color: FieldRef<"Sessions_tmp", 'String'>
    readonly Columns: FieldRef<"Sessions_tmp", 'Int'>
    readonly View_List_Years: FieldRef<"Sessions_tmp", 'Int[]'>
    readonly CurrentGameStart: FieldRef<"Sessions_tmp", 'DateTime'>
    readonly LastPlayed: FieldRef<"Sessions_tmp", 'DateTime'>
    readonly createdAt: FieldRef<"Sessions_tmp", 'DateTime'>
    readonly updatedAt: FieldRef<"Sessions_tmp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sessions_tmp findUnique
   */
  export type Sessions_tmpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions_tmp
     */
    select?: Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions_tmp
     */
    omit?: Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Sessions_tmp to fetch.
     */
    where: Sessions_tmpWhereUniqueInput
  }

  /**
   * Sessions_tmp findUniqueOrThrow
   */
  export type Sessions_tmpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions_tmp
     */
    select?: Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions_tmp
     */
    omit?: Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Sessions_tmp to fetch.
     */
    where: Sessions_tmpWhereUniqueInput
  }

  /**
   * Sessions_tmp findFirst
   */
  export type Sessions_tmpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions_tmp
     */
    select?: Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions_tmp
     */
    omit?: Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Sessions_tmp to fetch.
     */
    where?: Sessions_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions_tmps to fetch.
     */
    orderBy?: Sessions_tmpOrderByWithRelationInput | Sessions_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions_tmps.
     */
    cursor?: Sessions_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions_tmps.
     */
    distinct?: Sessions_tmpScalarFieldEnum | Sessions_tmpScalarFieldEnum[]
  }

  /**
   * Sessions_tmp findFirstOrThrow
   */
  export type Sessions_tmpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions_tmp
     */
    select?: Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions_tmp
     */
    omit?: Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Sessions_tmp to fetch.
     */
    where?: Sessions_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions_tmps to fetch.
     */
    orderBy?: Sessions_tmpOrderByWithRelationInput | Sessions_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions_tmps.
     */
    cursor?: Sessions_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions_tmps.
     */
    distinct?: Sessions_tmpScalarFieldEnum | Sessions_tmpScalarFieldEnum[]
  }

  /**
   * Sessions_tmp findMany
   */
  export type Sessions_tmpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions_tmp
     */
    select?: Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions_tmp
     */
    omit?: Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Sessions_tmps to fetch.
     */
    where?: Sessions_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions_tmps to fetch.
     */
    orderBy?: Sessions_tmpOrderByWithRelationInput | Sessions_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions_tmps.
     */
    cursor?: Sessions_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions_tmps.
     */
    skip?: number
    distinct?: Sessions_tmpScalarFieldEnum | Sessions_tmpScalarFieldEnum[]
  }

  /**
   * Sessions_tmp create
   */
  export type Sessions_tmpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions_tmp
     */
    select?: Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions_tmp
     */
    omit?: Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sessions_tmpInclude<ExtArgs> | null
    /**
     * The data needed to create a Sessions_tmp.
     */
    data: XOR<Sessions_tmpCreateInput, Sessions_tmpUncheckedCreateInput>
  }

  /**
   * Sessions_tmp createMany
   */
  export type Sessions_tmpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions_tmps.
     */
    data: Sessions_tmpCreateManyInput | Sessions_tmpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sessions_tmp createManyAndReturn
   */
  export type Sessions_tmpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions_tmp
     */
    select?: Sessions_tmpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions_tmp
     */
    omit?: Sessions_tmpOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions_tmps.
     */
    data: Sessions_tmpCreateManyInput | Sessions_tmpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sessions_tmp update
   */
  export type Sessions_tmpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions_tmp
     */
    select?: Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions_tmp
     */
    omit?: Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sessions_tmpInclude<ExtArgs> | null
    /**
     * The data needed to update a Sessions_tmp.
     */
    data: XOR<Sessions_tmpUpdateInput, Sessions_tmpUncheckedUpdateInput>
    /**
     * Choose, which Sessions_tmp to update.
     */
    where: Sessions_tmpWhereUniqueInput
  }

  /**
   * Sessions_tmp updateMany
   */
  export type Sessions_tmpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions_tmps.
     */
    data: XOR<Sessions_tmpUpdateManyMutationInput, Sessions_tmpUncheckedUpdateManyInput>
    /**
     * Filter which Sessions_tmps to update
     */
    where?: Sessions_tmpWhereInput
    /**
     * Limit how many Sessions_tmps to update.
     */
    limit?: number
  }

  /**
   * Sessions_tmp updateManyAndReturn
   */
  export type Sessions_tmpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions_tmp
     */
    select?: Sessions_tmpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions_tmp
     */
    omit?: Sessions_tmpOmit<ExtArgs> | null
    /**
     * The data used to update Sessions_tmps.
     */
    data: XOR<Sessions_tmpUpdateManyMutationInput, Sessions_tmpUncheckedUpdateManyInput>
    /**
     * Filter which Sessions_tmps to update
     */
    where?: Sessions_tmpWhereInput
    /**
     * Limit how many Sessions_tmps to update.
     */
    limit?: number
  }

  /**
   * Sessions_tmp upsert
   */
  export type Sessions_tmpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions_tmp
     */
    select?: Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions_tmp
     */
    omit?: Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sessions_tmpInclude<ExtArgs> | null
    /**
     * The filter to search for the Sessions_tmp to update in case it exists.
     */
    where: Sessions_tmpWhereUniqueInput
    /**
     * In case the Sessions_tmp found by the `where` argument doesn't exist, create a new Sessions_tmp with this data.
     */
    create: XOR<Sessions_tmpCreateInput, Sessions_tmpUncheckedCreateInput>
    /**
     * In case the Sessions_tmp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Sessions_tmpUpdateInput, Sessions_tmpUncheckedUpdateInput>
  }

  /**
   * Sessions_tmp delete
   */
  export type Sessions_tmpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions_tmp
     */
    select?: Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions_tmp
     */
    omit?: Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter which Sessions_tmp to delete.
     */
    where: Sessions_tmpWhereUniqueInput
  }

  /**
   * Sessions_tmp deleteMany
   */
  export type Sessions_tmpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions_tmps to delete
     */
    where?: Sessions_tmpWhereInput
    /**
     * Limit how many Sessions_tmps to delete.
     */
    limit?: number
  }

  /**
   * Sessions_tmp.Association__Players_And_FinalScores_With_Sessions_tmp
   */
  export type Sessions_tmp$Association__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    select?: Association__Players_And_FinalScores_With_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    omit?: Association__Players_And_FinalScores_With_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Players_And_FinalScores_With_Sessions_tmpInclude<ExtArgs> | null
    where?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
    orderBy?: Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithRelationInput | Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithRelationInput[]
    cursor?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum | Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum[]
  }

  /**
   * Sessions_tmp.Association__Sessions_And_Players_tmp
   */
  export type Sessions_tmp$Association__Sessions_And_Players_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Sessions_And_Players_tmp
     */
    select?: Association__Sessions_And_Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Sessions_And_Players_tmp
     */
    omit?: Association__Sessions_And_Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Sessions_And_Players_tmpInclude<ExtArgs> | null
    where?: Association__Sessions_And_Players_tmpWhereInput
    orderBy?: Association__Sessions_And_Players_tmpOrderByWithRelationInput | Association__Sessions_And_Players_tmpOrderByWithRelationInput[]
    cursor?: Association__Sessions_And_Players_tmpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Association__Sessions_And_Players_tmpScalarFieldEnum | Association__Sessions_And_Players_tmpScalarFieldEnum[]
  }

  /**
   * Sessions_tmp.Association__Users_And_Sessions_tmp
   */
  export type Sessions_tmp$Association__Users_And_Sessions_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Users_And_Sessions_tmp
     */
    select?: Association__Users_And_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Users_And_Sessions_tmp
     */
    omit?: Association__Users_And_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Users_And_Sessions_tmpInclude<ExtArgs> | null
    where?: Association__Users_And_Sessions_tmpWhereInput
    orderBy?: Association__Users_And_Sessions_tmpOrderByWithRelationInput | Association__Users_And_Sessions_tmpOrderByWithRelationInput[]
    cursor?: Association__Users_And_Sessions_tmpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Association__Users_And_Sessions_tmpScalarFieldEnum | Association__Users_And_Sessions_tmpScalarFieldEnum[]
  }

  /**
   * Sessions_tmp without action
   */
  export type Sessions_tmpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions_tmp
     */
    select?: Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions_tmp
     */
    omit?: Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sessions_tmpInclude<ExtArgs> | null
  }


  /**
   * Model Players_tmp
   */

  export type AggregatePlayers_tmp = {
    _count: Players_tmpCountAggregateOutputType | null
    _avg: Players_tmpAvgAggregateOutputType | null
    _sum: Players_tmpSumAggregateOutputType | null
    _min: Players_tmpMinAggregateOutputType | null
    _max: Players_tmpMaxAggregateOutputType | null
  }

  export type Players_tmpAvgAggregateOutputType = {
    id: number | null
  }

  export type Players_tmpSumAggregateOutputType = {
    id: number | null
  }

  export type Players_tmpMinAggregateOutputType = {
    id: number | null
    Name: string | null
    Color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Players_tmpMaxAggregateOutputType = {
    id: number | null
    Name: string | null
    Color: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Players_tmpCountAggregateOutputType = {
    id: number
    Name: number
    Color: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Players_tmpAvgAggregateInputType = {
    id?: true
  }

  export type Players_tmpSumAggregateInputType = {
    id?: true
  }

  export type Players_tmpMinAggregateInputType = {
    id?: true
    Name?: true
    Color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Players_tmpMaxAggregateInputType = {
    id?: true
    Name?: true
    Color?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Players_tmpCountAggregateInputType = {
    id?: true
    Name?: true
    Color?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Players_tmpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players_tmp to aggregate.
     */
    where?: Players_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players_tmps to fetch.
     */
    orderBy?: Players_tmpOrderByWithRelationInput | Players_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Players_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players_tmps
    **/
    _count?: true | Players_tmpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Players_tmpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Players_tmpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Players_tmpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Players_tmpMaxAggregateInputType
  }

  export type GetPlayers_tmpAggregateType<T extends Players_tmpAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayers_tmp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayers_tmp[P]>
      : GetScalarType<T[P], AggregatePlayers_tmp[P]>
  }




  export type Players_tmpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Players_tmpWhereInput
    orderBy?: Players_tmpOrderByWithAggregationInput | Players_tmpOrderByWithAggregationInput[]
    by: Players_tmpScalarFieldEnum[] | Players_tmpScalarFieldEnum
    having?: Players_tmpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Players_tmpCountAggregateInputType | true
    _avg?: Players_tmpAvgAggregateInputType
    _sum?: Players_tmpSumAggregateInputType
    _min?: Players_tmpMinAggregateInputType
    _max?: Players_tmpMaxAggregateInputType
  }

  export type Players_tmpGroupByOutputType = {
    id: number
    Name: string
    Color: string
    createdAt: Date
    updatedAt: Date
    _count: Players_tmpCountAggregateOutputType | null
    _avg: Players_tmpAvgAggregateOutputType | null
    _sum: Players_tmpSumAggregateOutputType | null
    _min: Players_tmpMinAggregateOutputType | null
    _max: Players_tmpMaxAggregateOutputType | null
  }

  type GetPlayers_tmpGroupByPayload<T extends Players_tmpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Players_tmpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Players_tmpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Players_tmpGroupByOutputType[P]>
            : GetScalarType<T[P], Players_tmpGroupByOutputType[P]>
        }
      >
    >


  export type Players_tmpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    Color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Association__Players_And_FinalScores_With_Sessions_tmp?: boolean | Players_tmp$Association__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs>
    Association__Sessions_And_Players_tmp?: boolean | Players_tmp$Association__Sessions_And_Players_tmpArgs<ExtArgs>
    Table_Columns_tmp?: boolean | Players_tmp$Table_Columns_tmpArgs<ExtArgs>
    _count?: boolean | Players_tmpCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["players_tmp"]>

  export type Players_tmpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    Color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["players_tmp"]>

  export type Players_tmpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    Color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["players_tmp"]>

  export type Players_tmpSelectScalar = {
    id?: boolean
    Name?: boolean
    Color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Players_tmpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Name" | "Color" | "createdAt" | "updatedAt", ExtArgs["result"]["players_tmp"]>
  export type Players_tmpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Association__Players_And_FinalScores_With_Sessions_tmp?: boolean | Players_tmp$Association__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs>
    Association__Sessions_And_Players_tmp?: boolean | Players_tmp$Association__Sessions_And_Players_tmpArgs<ExtArgs>
    Table_Columns_tmp?: boolean | Players_tmp$Table_Columns_tmpArgs<ExtArgs>
    _count?: boolean | Players_tmpCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Players_tmpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Players_tmpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Players_tmpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Players_tmp"
    objects: {
      Association__Players_And_FinalScores_With_Sessions_tmp: Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>[]
      Association__Sessions_And_Players_tmp: Prisma.$Association__Sessions_And_Players_tmpPayload<ExtArgs>[]
      Table_Columns_tmp: Prisma.$Table_Columns_tmpPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Name: string
      Color: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["players_tmp"]>
    composites: {}
  }

  type Players_tmpGetPayload<S extends boolean | null | undefined | Players_tmpDefaultArgs> = $Result.GetResult<Prisma.$Players_tmpPayload, S>

  type Players_tmpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Players_tmpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Players_tmpCountAggregateInputType | true
    }

  export interface Players_tmpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Players_tmp'], meta: { name: 'Players_tmp' } }
    /**
     * Find zero or one Players_tmp that matches the filter.
     * @param {Players_tmpFindUniqueArgs} args - Arguments to find a Players_tmp
     * @example
     * // Get one Players_tmp
     * const players_tmp = await prisma.players_tmp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Players_tmpFindUniqueArgs>(args: SelectSubset<T, Players_tmpFindUniqueArgs<ExtArgs>>): Prisma__Players_tmpClient<$Result.GetResult<Prisma.$Players_tmpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Players_tmp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Players_tmpFindUniqueOrThrowArgs} args - Arguments to find a Players_tmp
     * @example
     * // Get one Players_tmp
     * const players_tmp = await prisma.players_tmp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Players_tmpFindUniqueOrThrowArgs>(args: SelectSubset<T, Players_tmpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Players_tmpClient<$Result.GetResult<Prisma.$Players_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players_tmp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Players_tmpFindFirstArgs} args - Arguments to find a Players_tmp
     * @example
     * // Get one Players_tmp
     * const players_tmp = await prisma.players_tmp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Players_tmpFindFirstArgs>(args?: SelectSubset<T, Players_tmpFindFirstArgs<ExtArgs>>): Prisma__Players_tmpClient<$Result.GetResult<Prisma.$Players_tmpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Players_tmp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Players_tmpFindFirstOrThrowArgs} args - Arguments to find a Players_tmp
     * @example
     * // Get one Players_tmp
     * const players_tmp = await prisma.players_tmp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Players_tmpFindFirstOrThrowArgs>(args?: SelectSubset<T, Players_tmpFindFirstOrThrowArgs<ExtArgs>>): Prisma__Players_tmpClient<$Result.GetResult<Prisma.$Players_tmpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players_tmps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Players_tmpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players_tmps
     * const players_tmps = await prisma.players_tmp.findMany()
     * 
     * // Get first 10 Players_tmps
     * const players_tmps = await prisma.players_tmp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const players_tmpWithIdOnly = await prisma.players_tmp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Players_tmpFindManyArgs>(args?: SelectSubset<T, Players_tmpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Players_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Players_tmp.
     * @param {Players_tmpCreateArgs} args - Arguments to create a Players_tmp.
     * @example
     * // Create one Players_tmp
     * const Players_tmp = await prisma.players_tmp.create({
     *   data: {
     *     // ... data to create a Players_tmp
     *   }
     * })
     * 
     */
    create<T extends Players_tmpCreateArgs>(args: SelectSubset<T, Players_tmpCreateArgs<ExtArgs>>): Prisma__Players_tmpClient<$Result.GetResult<Prisma.$Players_tmpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players_tmps.
     * @param {Players_tmpCreateManyArgs} args - Arguments to create many Players_tmps.
     * @example
     * // Create many Players_tmps
     * const players_tmp = await prisma.players_tmp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Players_tmpCreateManyArgs>(args?: SelectSubset<T, Players_tmpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players_tmps and returns the data saved in the database.
     * @param {Players_tmpCreateManyAndReturnArgs} args - Arguments to create many Players_tmps.
     * @example
     * // Create many Players_tmps
     * const players_tmp = await prisma.players_tmp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players_tmps and only return the `id`
     * const players_tmpWithIdOnly = await prisma.players_tmp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Players_tmpCreateManyAndReturnArgs>(args?: SelectSubset<T, Players_tmpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Players_tmpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Players_tmp.
     * @param {Players_tmpDeleteArgs} args - Arguments to delete one Players_tmp.
     * @example
     * // Delete one Players_tmp
     * const Players_tmp = await prisma.players_tmp.delete({
     *   where: {
     *     // ... filter to delete one Players_tmp
     *   }
     * })
     * 
     */
    delete<T extends Players_tmpDeleteArgs>(args: SelectSubset<T, Players_tmpDeleteArgs<ExtArgs>>): Prisma__Players_tmpClient<$Result.GetResult<Prisma.$Players_tmpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Players_tmp.
     * @param {Players_tmpUpdateArgs} args - Arguments to update one Players_tmp.
     * @example
     * // Update one Players_tmp
     * const players_tmp = await prisma.players_tmp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Players_tmpUpdateArgs>(args: SelectSubset<T, Players_tmpUpdateArgs<ExtArgs>>): Prisma__Players_tmpClient<$Result.GetResult<Prisma.$Players_tmpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players_tmps.
     * @param {Players_tmpDeleteManyArgs} args - Arguments to filter Players_tmps to delete.
     * @example
     * // Delete a few Players_tmps
     * const { count } = await prisma.players_tmp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Players_tmpDeleteManyArgs>(args?: SelectSubset<T, Players_tmpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Players_tmpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players_tmps
     * const players_tmp = await prisma.players_tmp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Players_tmpUpdateManyArgs>(args: SelectSubset<T, Players_tmpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players_tmps and returns the data updated in the database.
     * @param {Players_tmpUpdateManyAndReturnArgs} args - Arguments to update many Players_tmps.
     * @example
     * // Update many Players_tmps
     * const players_tmp = await prisma.players_tmp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players_tmps and only return the `id`
     * const players_tmpWithIdOnly = await prisma.players_tmp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Players_tmpUpdateManyAndReturnArgs>(args: SelectSubset<T, Players_tmpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Players_tmpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Players_tmp.
     * @param {Players_tmpUpsertArgs} args - Arguments to update or create a Players_tmp.
     * @example
     * // Update or create a Players_tmp
     * const players_tmp = await prisma.players_tmp.upsert({
     *   create: {
     *     // ... data to create a Players_tmp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Players_tmp we want to update
     *   }
     * })
     */
    upsert<T extends Players_tmpUpsertArgs>(args: SelectSubset<T, Players_tmpUpsertArgs<ExtArgs>>): Prisma__Players_tmpClient<$Result.GetResult<Prisma.$Players_tmpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Players_tmpCountArgs} args - Arguments to filter Players_tmps to count.
     * @example
     * // Count the number of Players_tmps
     * const count = await prisma.players_tmp.count({
     *   where: {
     *     // ... the filter for the Players_tmps we want to count
     *   }
     * })
    **/
    count<T extends Players_tmpCountArgs>(
      args?: Subset<T, Players_tmpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Players_tmpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Players_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Players_tmpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Players_tmpAggregateArgs>(args: Subset<T, Players_tmpAggregateArgs>): Prisma.PrismaPromise<GetPlayers_tmpAggregateType<T>>

    /**
     * Group by Players_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Players_tmpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Players_tmpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Players_tmpGroupByArgs['orderBy'] }
        : { orderBy?: Players_tmpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Players_tmpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayers_tmpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Players_tmp model
   */
  readonly fields: Players_tmpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Players_tmp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Players_tmpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Association__Players_And_FinalScores_With_Sessions_tmp<T extends Players_tmp$Association__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs> = {}>(args?: Subset<T, Players_tmp$Association__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Association__Sessions_And_Players_tmp<T extends Players_tmp$Association__Sessions_And_Players_tmpArgs<ExtArgs> = {}>(args?: Subset<T, Players_tmp$Association__Sessions_And_Players_tmpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Association__Sessions_And_Players_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Table_Columns_tmp<T extends Players_tmp$Table_Columns_tmpArgs<ExtArgs> = {}>(args?: Subset<T, Players_tmp$Table_Columns_tmpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Table_Columns_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Players_tmp model
   */
  interface Players_tmpFieldRefs {
    readonly id: FieldRef<"Players_tmp", 'Int'>
    readonly Name: FieldRef<"Players_tmp", 'String'>
    readonly Color: FieldRef<"Players_tmp", 'String'>
    readonly createdAt: FieldRef<"Players_tmp", 'DateTime'>
    readonly updatedAt: FieldRef<"Players_tmp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Players_tmp findUnique
   */
  export type Players_tmpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players_tmp
     */
    select?: Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players_tmp
     */
    omit?: Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Players_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Players_tmp to fetch.
     */
    where: Players_tmpWhereUniqueInput
  }

  /**
   * Players_tmp findUniqueOrThrow
   */
  export type Players_tmpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players_tmp
     */
    select?: Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players_tmp
     */
    omit?: Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Players_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Players_tmp to fetch.
     */
    where: Players_tmpWhereUniqueInput
  }

  /**
   * Players_tmp findFirst
   */
  export type Players_tmpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players_tmp
     */
    select?: Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players_tmp
     */
    omit?: Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Players_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Players_tmp to fetch.
     */
    where?: Players_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players_tmps to fetch.
     */
    orderBy?: Players_tmpOrderByWithRelationInput | Players_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players_tmps.
     */
    cursor?: Players_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players_tmps.
     */
    distinct?: Players_tmpScalarFieldEnum | Players_tmpScalarFieldEnum[]
  }

  /**
   * Players_tmp findFirstOrThrow
   */
  export type Players_tmpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players_tmp
     */
    select?: Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players_tmp
     */
    omit?: Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Players_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Players_tmp to fetch.
     */
    where?: Players_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players_tmps to fetch.
     */
    orderBy?: Players_tmpOrderByWithRelationInput | Players_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players_tmps.
     */
    cursor?: Players_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players_tmps.
     */
    distinct?: Players_tmpScalarFieldEnum | Players_tmpScalarFieldEnum[]
  }

  /**
   * Players_tmp findMany
   */
  export type Players_tmpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players_tmp
     */
    select?: Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players_tmp
     */
    omit?: Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Players_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Players_tmps to fetch.
     */
    where?: Players_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players_tmps to fetch.
     */
    orderBy?: Players_tmpOrderByWithRelationInput | Players_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players_tmps.
     */
    cursor?: Players_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players_tmps.
     */
    skip?: number
    distinct?: Players_tmpScalarFieldEnum | Players_tmpScalarFieldEnum[]
  }

  /**
   * Players_tmp create
   */
  export type Players_tmpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players_tmp
     */
    select?: Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players_tmp
     */
    omit?: Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Players_tmpInclude<ExtArgs> | null
    /**
     * The data needed to create a Players_tmp.
     */
    data: XOR<Players_tmpCreateInput, Players_tmpUncheckedCreateInput>
  }

  /**
   * Players_tmp createMany
   */
  export type Players_tmpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players_tmps.
     */
    data: Players_tmpCreateManyInput | Players_tmpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Players_tmp createManyAndReturn
   */
  export type Players_tmpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players_tmp
     */
    select?: Players_tmpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Players_tmp
     */
    omit?: Players_tmpOmit<ExtArgs> | null
    /**
     * The data used to create many Players_tmps.
     */
    data: Players_tmpCreateManyInput | Players_tmpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Players_tmp update
   */
  export type Players_tmpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players_tmp
     */
    select?: Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players_tmp
     */
    omit?: Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Players_tmpInclude<ExtArgs> | null
    /**
     * The data needed to update a Players_tmp.
     */
    data: XOR<Players_tmpUpdateInput, Players_tmpUncheckedUpdateInput>
    /**
     * Choose, which Players_tmp to update.
     */
    where: Players_tmpWhereUniqueInput
  }

  /**
   * Players_tmp updateMany
   */
  export type Players_tmpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players_tmps.
     */
    data: XOR<Players_tmpUpdateManyMutationInput, Players_tmpUncheckedUpdateManyInput>
    /**
     * Filter which Players_tmps to update
     */
    where?: Players_tmpWhereInput
    /**
     * Limit how many Players_tmps to update.
     */
    limit?: number
  }

  /**
   * Players_tmp updateManyAndReturn
   */
  export type Players_tmpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players_tmp
     */
    select?: Players_tmpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Players_tmp
     */
    omit?: Players_tmpOmit<ExtArgs> | null
    /**
     * The data used to update Players_tmps.
     */
    data: XOR<Players_tmpUpdateManyMutationInput, Players_tmpUncheckedUpdateManyInput>
    /**
     * Filter which Players_tmps to update
     */
    where?: Players_tmpWhereInput
    /**
     * Limit how many Players_tmps to update.
     */
    limit?: number
  }

  /**
   * Players_tmp upsert
   */
  export type Players_tmpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players_tmp
     */
    select?: Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players_tmp
     */
    omit?: Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Players_tmpInclude<ExtArgs> | null
    /**
     * The filter to search for the Players_tmp to update in case it exists.
     */
    where: Players_tmpWhereUniqueInput
    /**
     * In case the Players_tmp found by the `where` argument doesn't exist, create a new Players_tmp with this data.
     */
    create: XOR<Players_tmpCreateInput, Players_tmpUncheckedCreateInput>
    /**
     * In case the Players_tmp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Players_tmpUpdateInput, Players_tmpUncheckedUpdateInput>
  }

  /**
   * Players_tmp delete
   */
  export type Players_tmpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players_tmp
     */
    select?: Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players_tmp
     */
    omit?: Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Players_tmpInclude<ExtArgs> | null
    /**
     * Filter which Players_tmp to delete.
     */
    where: Players_tmpWhereUniqueInput
  }

  /**
   * Players_tmp deleteMany
   */
  export type Players_tmpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players_tmps to delete
     */
    where?: Players_tmpWhereInput
    /**
     * Limit how many Players_tmps to delete.
     */
    limit?: number
  }

  /**
   * Players_tmp.Association__Players_And_FinalScores_With_Sessions_tmp
   */
  export type Players_tmp$Association__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    select?: Association__Players_And_FinalScores_With_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    omit?: Association__Players_And_FinalScores_With_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Players_And_FinalScores_With_Sessions_tmpInclude<ExtArgs> | null
    where?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
    orderBy?: Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithRelationInput | Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithRelationInput[]
    cursor?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum | Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum[]
  }

  /**
   * Players_tmp.Association__Sessions_And_Players_tmp
   */
  export type Players_tmp$Association__Sessions_And_Players_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Sessions_And_Players_tmp
     */
    select?: Association__Sessions_And_Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Sessions_And_Players_tmp
     */
    omit?: Association__Sessions_And_Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Sessions_And_Players_tmpInclude<ExtArgs> | null
    where?: Association__Sessions_And_Players_tmpWhereInput
    orderBy?: Association__Sessions_And_Players_tmpOrderByWithRelationInput | Association__Sessions_And_Players_tmpOrderByWithRelationInput[]
    cursor?: Association__Sessions_And_Players_tmpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Association__Sessions_And_Players_tmpScalarFieldEnum | Association__Sessions_And_Players_tmpScalarFieldEnum[]
  }

  /**
   * Players_tmp.Table_Columns_tmp
   */
  export type Players_tmp$Table_Columns_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Columns_tmp
     */
    select?: Table_Columns_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Columns_tmp
     */
    omit?: Table_Columns_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Columns_tmpInclude<ExtArgs> | null
    where?: Table_Columns_tmpWhereInput
    orderBy?: Table_Columns_tmpOrderByWithRelationInput | Table_Columns_tmpOrderByWithRelationInput[]
    cursor?: Table_Columns_tmpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Table_Columns_tmpScalarFieldEnum | Table_Columns_tmpScalarFieldEnum[]
  }

  /**
   * Players_tmp without action
   */
  export type Players_tmpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players_tmp
     */
    select?: Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players_tmp
     */
    omit?: Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Players_tmpInclude<ExtArgs> | null
  }


  /**
   * Model Table_Columns_tmp
   */

  export type AggregateTable_Columns_tmp = {
    _count: Table_Columns_tmpCountAggregateOutputType | null
    _avg: Table_Columns_tmpAvgAggregateOutputType | null
    _sum: Table_Columns_tmpSumAggregateOutputType | null
    _min: Table_Columns_tmpMinAggregateOutputType | null
    _max: Table_Columns_tmpMaxAggregateOutputType | null
  }

  export type Table_Columns_tmpAvgAggregateOutputType = {
    id: number | null
    Column: number | null
    Upper_Table_1: number | null
    Upper_Table_2: number | null
    Upper_Table_3: number | null
    Upper_Table_4: number | null
    Upper_Table_5: number | null
    Upper_Table_6: number | null
    Upper_Table_Score: number | null
    Upper_Table_Add35: number | null
    Upper_Table_TotalScore: number | null
    Bottom_Table_1: number | null
    Bottom_Table_2: number | null
    Bottom_Table_3: number | null
    Bottom_Table_4: number | null
    Bottom_Table_5: number | null
    Bottom_Table_6: number | null
    Bottom_Table_7: number | null
    Bottom_Table_Score: number | null
    Bottom_Table_TotalScore: number | null
    TotalScore: number | null
    PlayerID: number | null
  }

  export type Table_Columns_tmpSumAggregateOutputType = {
    id: number | null
    Column: number | null
    Upper_Table_1: number | null
    Upper_Table_2: number | null
    Upper_Table_3: number | null
    Upper_Table_4: number | null
    Upper_Table_5: number | null
    Upper_Table_6: number | null
    Upper_Table_Score: number | null
    Upper_Table_Add35: number | null
    Upper_Table_TotalScore: number | null
    Bottom_Table_1: number | null
    Bottom_Table_2: number | null
    Bottom_Table_3: number | null
    Bottom_Table_4: number | null
    Bottom_Table_5: number | null
    Bottom_Table_6: number | null
    Bottom_Table_7: number | null
    Bottom_Table_Score: number | null
    Bottom_Table_TotalScore: number | null
    TotalScore: number | null
    PlayerID: number | null
  }

  export type Table_Columns_tmpMinAggregateOutputType = {
    id: number | null
    Column: number | null
    Upper_Table_1: number | null
    Upper_Table_2: number | null
    Upper_Table_3: number | null
    Upper_Table_4: number | null
    Upper_Table_5: number | null
    Upper_Table_6: number | null
    Upper_Table_Score: number | null
    Upper_Table_Add35: number | null
    Upper_Table_TotalScore: number | null
    Bottom_Table_1: number | null
    Bottom_Table_2: number | null
    Bottom_Table_3: number | null
    Bottom_Table_4: number | null
    Bottom_Table_5: number | null
    Bottom_Table_6: number | null
    Bottom_Table_7: number | null
    Bottom_Table_Score: number | null
    Bottom_Table_TotalScore: number | null
    TotalScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
    PlayerID: number | null
  }

  export type Table_Columns_tmpMaxAggregateOutputType = {
    id: number | null
    Column: number | null
    Upper_Table_1: number | null
    Upper_Table_2: number | null
    Upper_Table_3: number | null
    Upper_Table_4: number | null
    Upper_Table_5: number | null
    Upper_Table_6: number | null
    Upper_Table_Score: number | null
    Upper_Table_Add35: number | null
    Upper_Table_TotalScore: number | null
    Bottom_Table_1: number | null
    Bottom_Table_2: number | null
    Bottom_Table_3: number | null
    Bottom_Table_4: number | null
    Bottom_Table_5: number | null
    Bottom_Table_6: number | null
    Bottom_Table_7: number | null
    Bottom_Table_Score: number | null
    Bottom_Table_TotalScore: number | null
    TotalScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
    PlayerID: number | null
  }

  export type Table_Columns_tmpCountAggregateOutputType = {
    id: number
    Column: number
    Upper_Table_1: number
    Upper_Table_2: number
    Upper_Table_3: number
    Upper_Table_4: number
    Upper_Table_5: number
    Upper_Table_6: number
    Upper_Table_Score: number
    Upper_Table_Add35: number
    Upper_Table_TotalScore: number
    Bottom_Table_1: number
    Bottom_Table_2: number
    Bottom_Table_3: number
    Bottom_Table_4: number
    Bottom_Table_5: number
    Bottom_Table_6: number
    Bottom_Table_7: number
    Bottom_Table_Score: number
    Bottom_Table_TotalScore: number
    TotalScore: number
    createdAt: number
    updatedAt: number
    PlayerID: number
    _all: number
  }


  export type Table_Columns_tmpAvgAggregateInputType = {
    id?: true
    Column?: true
    Upper_Table_1?: true
    Upper_Table_2?: true
    Upper_Table_3?: true
    Upper_Table_4?: true
    Upper_Table_5?: true
    Upper_Table_6?: true
    Upper_Table_Score?: true
    Upper_Table_Add35?: true
    Upper_Table_TotalScore?: true
    Bottom_Table_1?: true
    Bottom_Table_2?: true
    Bottom_Table_3?: true
    Bottom_Table_4?: true
    Bottom_Table_5?: true
    Bottom_Table_6?: true
    Bottom_Table_7?: true
    Bottom_Table_Score?: true
    Bottom_Table_TotalScore?: true
    TotalScore?: true
    PlayerID?: true
  }

  export type Table_Columns_tmpSumAggregateInputType = {
    id?: true
    Column?: true
    Upper_Table_1?: true
    Upper_Table_2?: true
    Upper_Table_3?: true
    Upper_Table_4?: true
    Upper_Table_5?: true
    Upper_Table_6?: true
    Upper_Table_Score?: true
    Upper_Table_Add35?: true
    Upper_Table_TotalScore?: true
    Bottom_Table_1?: true
    Bottom_Table_2?: true
    Bottom_Table_3?: true
    Bottom_Table_4?: true
    Bottom_Table_5?: true
    Bottom_Table_6?: true
    Bottom_Table_7?: true
    Bottom_Table_Score?: true
    Bottom_Table_TotalScore?: true
    TotalScore?: true
    PlayerID?: true
  }

  export type Table_Columns_tmpMinAggregateInputType = {
    id?: true
    Column?: true
    Upper_Table_1?: true
    Upper_Table_2?: true
    Upper_Table_3?: true
    Upper_Table_4?: true
    Upper_Table_5?: true
    Upper_Table_6?: true
    Upper_Table_Score?: true
    Upper_Table_Add35?: true
    Upper_Table_TotalScore?: true
    Bottom_Table_1?: true
    Bottom_Table_2?: true
    Bottom_Table_3?: true
    Bottom_Table_4?: true
    Bottom_Table_5?: true
    Bottom_Table_6?: true
    Bottom_Table_7?: true
    Bottom_Table_Score?: true
    Bottom_Table_TotalScore?: true
    TotalScore?: true
    createdAt?: true
    updatedAt?: true
    PlayerID?: true
  }

  export type Table_Columns_tmpMaxAggregateInputType = {
    id?: true
    Column?: true
    Upper_Table_1?: true
    Upper_Table_2?: true
    Upper_Table_3?: true
    Upper_Table_4?: true
    Upper_Table_5?: true
    Upper_Table_6?: true
    Upper_Table_Score?: true
    Upper_Table_Add35?: true
    Upper_Table_TotalScore?: true
    Bottom_Table_1?: true
    Bottom_Table_2?: true
    Bottom_Table_3?: true
    Bottom_Table_4?: true
    Bottom_Table_5?: true
    Bottom_Table_6?: true
    Bottom_Table_7?: true
    Bottom_Table_Score?: true
    Bottom_Table_TotalScore?: true
    TotalScore?: true
    createdAt?: true
    updatedAt?: true
    PlayerID?: true
  }

  export type Table_Columns_tmpCountAggregateInputType = {
    id?: true
    Column?: true
    Upper_Table_1?: true
    Upper_Table_2?: true
    Upper_Table_3?: true
    Upper_Table_4?: true
    Upper_Table_5?: true
    Upper_Table_6?: true
    Upper_Table_Score?: true
    Upper_Table_Add35?: true
    Upper_Table_TotalScore?: true
    Bottom_Table_1?: true
    Bottom_Table_2?: true
    Bottom_Table_3?: true
    Bottom_Table_4?: true
    Bottom_Table_5?: true
    Bottom_Table_6?: true
    Bottom_Table_7?: true
    Bottom_Table_Score?: true
    Bottom_Table_TotalScore?: true
    TotalScore?: true
    createdAt?: true
    updatedAt?: true
    PlayerID?: true
    _all?: true
  }

  export type Table_Columns_tmpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table_Columns_tmp to aggregate.
     */
    where?: Table_Columns_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Table_Columns_tmps to fetch.
     */
    orderBy?: Table_Columns_tmpOrderByWithRelationInput | Table_Columns_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Table_Columns_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Table_Columns_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Table_Columns_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Table_Columns_tmps
    **/
    _count?: true | Table_Columns_tmpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Table_Columns_tmpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Table_Columns_tmpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Table_Columns_tmpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Table_Columns_tmpMaxAggregateInputType
  }

  export type GetTable_Columns_tmpAggregateType<T extends Table_Columns_tmpAggregateArgs> = {
        [P in keyof T & keyof AggregateTable_Columns_tmp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable_Columns_tmp[P]>
      : GetScalarType<T[P], AggregateTable_Columns_tmp[P]>
  }




  export type Table_Columns_tmpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Table_Columns_tmpWhereInput
    orderBy?: Table_Columns_tmpOrderByWithAggregationInput | Table_Columns_tmpOrderByWithAggregationInput[]
    by: Table_Columns_tmpScalarFieldEnum[] | Table_Columns_tmpScalarFieldEnum
    having?: Table_Columns_tmpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Table_Columns_tmpCountAggregateInputType | true
    _avg?: Table_Columns_tmpAvgAggregateInputType
    _sum?: Table_Columns_tmpSumAggregateInputType
    _min?: Table_Columns_tmpMinAggregateInputType
    _max?: Table_Columns_tmpMaxAggregateInputType
  }

  export type Table_Columns_tmpGroupByOutputType = {
    id: number
    Column: number
    Upper_Table_1: number | null
    Upper_Table_2: number | null
    Upper_Table_3: number | null
    Upper_Table_4: number | null
    Upper_Table_5: number | null
    Upper_Table_6: number | null
    Upper_Table_Score: number
    Upper_Table_Add35: number | null
    Upper_Table_TotalScore: number | null
    Bottom_Table_1: number | null
    Bottom_Table_2: number | null
    Bottom_Table_3: number | null
    Bottom_Table_4: number | null
    Bottom_Table_5: number | null
    Bottom_Table_6: number | null
    Bottom_Table_7: number | null
    Bottom_Table_Score: number | null
    Bottom_Table_TotalScore: number | null
    TotalScore: number
    createdAt: Date
    updatedAt: Date
    PlayerID: number | null
    _count: Table_Columns_tmpCountAggregateOutputType | null
    _avg: Table_Columns_tmpAvgAggregateOutputType | null
    _sum: Table_Columns_tmpSumAggregateOutputType | null
    _min: Table_Columns_tmpMinAggregateOutputType | null
    _max: Table_Columns_tmpMaxAggregateOutputType | null
  }

  type GetTable_Columns_tmpGroupByPayload<T extends Table_Columns_tmpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Table_Columns_tmpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Table_Columns_tmpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Table_Columns_tmpGroupByOutputType[P]>
            : GetScalarType<T[P], Table_Columns_tmpGroupByOutputType[P]>
        }
      >
    >


  export type Table_Columns_tmpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Column?: boolean
    Upper_Table_1?: boolean
    Upper_Table_2?: boolean
    Upper_Table_3?: boolean
    Upper_Table_4?: boolean
    Upper_Table_5?: boolean
    Upper_Table_6?: boolean
    Upper_Table_Score?: boolean
    Upper_Table_Add35?: boolean
    Upper_Table_TotalScore?: boolean
    Bottom_Table_1?: boolean
    Bottom_Table_2?: boolean
    Bottom_Table_3?: boolean
    Bottom_Table_4?: boolean
    Bottom_Table_5?: boolean
    Bottom_Table_6?: boolean
    Bottom_Table_7?: boolean
    Bottom_Table_Score?: boolean
    Bottom_Table_TotalScore?: boolean
    TotalScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PlayerID?: boolean
    Players_tmp?: boolean | Table_Columns_tmp$Players_tmpArgs<ExtArgs>
  }, ExtArgs["result"]["table_Columns_tmp"]>

  export type Table_Columns_tmpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Column?: boolean
    Upper_Table_1?: boolean
    Upper_Table_2?: boolean
    Upper_Table_3?: boolean
    Upper_Table_4?: boolean
    Upper_Table_5?: boolean
    Upper_Table_6?: boolean
    Upper_Table_Score?: boolean
    Upper_Table_Add35?: boolean
    Upper_Table_TotalScore?: boolean
    Bottom_Table_1?: boolean
    Bottom_Table_2?: boolean
    Bottom_Table_3?: boolean
    Bottom_Table_4?: boolean
    Bottom_Table_5?: boolean
    Bottom_Table_6?: boolean
    Bottom_Table_7?: boolean
    Bottom_Table_Score?: boolean
    Bottom_Table_TotalScore?: boolean
    TotalScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PlayerID?: boolean
    Players_tmp?: boolean | Table_Columns_tmp$Players_tmpArgs<ExtArgs>
  }, ExtArgs["result"]["table_Columns_tmp"]>

  export type Table_Columns_tmpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Column?: boolean
    Upper_Table_1?: boolean
    Upper_Table_2?: boolean
    Upper_Table_3?: boolean
    Upper_Table_4?: boolean
    Upper_Table_5?: boolean
    Upper_Table_6?: boolean
    Upper_Table_Score?: boolean
    Upper_Table_Add35?: boolean
    Upper_Table_TotalScore?: boolean
    Bottom_Table_1?: boolean
    Bottom_Table_2?: boolean
    Bottom_Table_3?: boolean
    Bottom_Table_4?: boolean
    Bottom_Table_5?: boolean
    Bottom_Table_6?: boolean
    Bottom_Table_7?: boolean
    Bottom_Table_Score?: boolean
    Bottom_Table_TotalScore?: boolean
    TotalScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PlayerID?: boolean
    Players_tmp?: boolean | Table_Columns_tmp$Players_tmpArgs<ExtArgs>
  }, ExtArgs["result"]["table_Columns_tmp"]>

  export type Table_Columns_tmpSelectScalar = {
    id?: boolean
    Column?: boolean
    Upper_Table_1?: boolean
    Upper_Table_2?: boolean
    Upper_Table_3?: boolean
    Upper_Table_4?: boolean
    Upper_Table_5?: boolean
    Upper_Table_6?: boolean
    Upper_Table_Score?: boolean
    Upper_Table_Add35?: boolean
    Upper_Table_TotalScore?: boolean
    Bottom_Table_1?: boolean
    Bottom_Table_2?: boolean
    Bottom_Table_3?: boolean
    Bottom_Table_4?: boolean
    Bottom_Table_5?: boolean
    Bottom_Table_6?: boolean
    Bottom_Table_7?: boolean
    Bottom_Table_Score?: boolean
    Bottom_Table_TotalScore?: boolean
    TotalScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PlayerID?: boolean
  }

  export type Table_Columns_tmpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Column" | "Upper_Table_1" | "Upper_Table_2" | "Upper_Table_3" | "Upper_Table_4" | "Upper_Table_5" | "Upper_Table_6" | "Upper_Table_Score" | "Upper_Table_Add35" | "Upper_Table_TotalScore" | "Bottom_Table_1" | "Bottom_Table_2" | "Bottom_Table_3" | "Bottom_Table_4" | "Bottom_Table_5" | "Bottom_Table_6" | "Bottom_Table_7" | "Bottom_Table_Score" | "Bottom_Table_TotalScore" | "TotalScore" | "createdAt" | "updatedAt" | "PlayerID", ExtArgs["result"]["table_Columns_tmp"]>
  export type Table_Columns_tmpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Players_tmp?: boolean | Table_Columns_tmp$Players_tmpArgs<ExtArgs>
  }
  export type Table_Columns_tmpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Players_tmp?: boolean | Table_Columns_tmp$Players_tmpArgs<ExtArgs>
  }
  export type Table_Columns_tmpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Players_tmp?: boolean | Table_Columns_tmp$Players_tmpArgs<ExtArgs>
  }

  export type $Table_Columns_tmpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Table_Columns_tmp"
    objects: {
      Players_tmp: Prisma.$Players_tmpPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Column: number
      Upper_Table_1: number | null
      Upper_Table_2: number | null
      Upper_Table_3: number | null
      Upper_Table_4: number | null
      Upper_Table_5: number | null
      Upper_Table_6: number | null
      Upper_Table_Score: number
      Upper_Table_Add35: number | null
      Upper_Table_TotalScore: number | null
      Bottom_Table_1: number | null
      Bottom_Table_2: number | null
      Bottom_Table_3: number | null
      Bottom_Table_4: number | null
      Bottom_Table_5: number | null
      Bottom_Table_6: number | null
      Bottom_Table_7: number | null
      Bottom_Table_Score: number | null
      Bottom_Table_TotalScore: number | null
      TotalScore: number
      createdAt: Date
      updatedAt: Date
      PlayerID: number | null
    }, ExtArgs["result"]["table_Columns_tmp"]>
    composites: {}
  }

  type Table_Columns_tmpGetPayload<S extends boolean | null | undefined | Table_Columns_tmpDefaultArgs> = $Result.GetResult<Prisma.$Table_Columns_tmpPayload, S>

  type Table_Columns_tmpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Table_Columns_tmpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Table_Columns_tmpCountAggregateInputType | true
    }

  export interface Table_Columns_tmpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table_Columns_tmp'], meta: { name: 'Table_Columns_tmp' } }
    /**
     * Find zero or one Table_Columns_tmp that matches the filter.
     * @param {Table_Columns_tmpFindUniqueArgs} args - Arguments to find a Table_Columns_tmp
     * @example
     * // Get one Table_Columns_tmp
     * const table_Columns_tmp = await prisma.table_Columns_tmp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Table_Columns_tmpFindUniqueArgs>(args: SelectSubset<T, Table_Columns_tmpFindUniqueArgs<ExtArgs>>): Prisma__Table_Columns_tmpClient<$Result.GetResult<Prisma.$Table_Columns_tmpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Table_Columns_tmp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Table_Columns_tmpFindUniqueOrThrowArgs} args - Arguments to find a Table_Columns_tmp
     * @example
     * // Get one Table_Columns_tmp
     * const table_Columns_tmp = await prisma.table_Columns_tmp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Table_Columns_tmpFindUniqueOrThrowArgs>(args: SelectSubset<T, Table_Columns_tmpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Table_Columns_tmpClient<$Result.GetResult<Prisma.$Table_Columns_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table_Columns_tmp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_Columns_tmpFindFirstArgs} args - Arguments to find a Table_Columns_tmp
     * @example
     * // Get one Table_Columns_tmp
     * const table_Columns_tmp = await prisma.table_Columns_tmp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Table_Columns_tmpFindFirstArgs>(args?: SelectSubset<T, Table_Columns_tmpFindFirstArgs<ExtArgs>>): Prisma__Table_Columns_tmpClient<$Result.GetResult<Prisma.$Table_Columns_tmpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table_Columns_tmp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_Columns_tmpFindFirstOrThrowArgs} args - Arguments to find a Table_Columns_tmp
     * @example
     * // Get one Table_Columns_tmp
     * const table_Columns_tmp = await prisma.table_Columns_tmp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Table_Columns_tmpFindFirstOrThrowArgs>(args?: SelectSubset<T, Table_Columns_tmpFindFirstOrThrowArgs<ExtArgs>>): Prisma__Table_Columns_tmpClient<$Result.GetResult<Prisma.$Table_Columns_tmpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Table_Columns_tmps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_Columns_tmpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Table_Columns_tmps
     * const table_Columns_tmps = await prisma.table_Columns_tmp.findMany()
     * 
     * // Get first 10 Table_Columns_tmps
     * const table_Columns_tmps = await prisma.table_Columns_tmp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const table_Columns_tmpWithIdOnly = await prisma.table_Columns_tmp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Table_Columns_tmpFindManyArgs>(args?: SelectSubset<T, Table_Columns_tmpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Table_Columns_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Table_Columns_tmp.
     * @param {Table_Columns_tmpCreateArgs} args - Arguments to create a Table_Columns_tmp.
     * @example
     * // Create one Table_Columns_tmp
     * const Table_Columns_tmp = await prisma.table_Columns_tmp.create({
     *   data: {
     *     // ... data to create a Table_Columns_tmp
     *   }
     * })
     * 
     */
    create<T extends Table_Columns_tmpCreateArgs>(args: SelectSubset<T, Table_Columns_tmpCreateArgs<ExtArgs>>): Prisma__Table_Columns_tmpClient<$Result.GetResult<Prisma.$Table_Columns_tmpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Table_Columns_tmps.
     * @param {Table_Columns_tmpCreateManyArgs} args - Arguments to create many Table_Columns_tmps.
     * @example
     * // Create many Table_Columns_tmps
     * const table_Columns_tmp = await prisma.table_Columns_tmp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Table_Columns_tmpCreateManyArgs>(args?: SelectSubset<T, Table_Columns_tmpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Table_Columns_tmps and returns the data saved in the database.
     * @param {Table_Columns_tmpCreateManyAndReturnArgs} args - Arguments to create many Table_Columns_tmps.
     * @example
     * // Create many Table_Columns_tmps
     * const table_Columns_tmp = await prisma.table_Columns_tmp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Table_Columns_tmps and only return the `id`
     * const table_Columns_tmpWithIdOnly = await prisma.table_Columns_tmp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Table_Columns_tmpCreateManyAndReturnArgs>(args?: SelectSubset<T, Table_Columns_tmpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Table_Columns_tmpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Table_Columns_tmp.
     * @param {Table_Columns_tmpDeleteArgs} args - Arguments to delete one Table_Columns_tmp.
     * @example
     * // Delete one Table_Columns_tmp
     * const Table_Columns_tmp = await prisma.table_Columns_tmp.delete({
     *   where: {
     *     // ... filter to delete one Table_Columns_tmp
     *   }
     * })
     * 
     */
    delete<T extends Table_Columns_tmpDeleteArgs>(args: SelectSubset<T, Table_Columns_tmpDeleteArgs<ExtArgs>>): Prisma__Table_Columns_tmpClient<$Result.GetResult<Prisma.$Table_Columns_tmpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Table_Columns_tmp.
     * @param {Table_Columns_tmpUpdateArgs} args - Arguments to update one Table_Columns_tmp.
     * @example
     * // Update one Table_Columns_tmp
     * const table_Columns_tmp = await prisma.table_Columns_tmp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Table_Columns_tmpUpdateArgs>(args: SelectSubset<T, Table_Columns_tmpUpdateArgs<ExtArgs>>): Prisma__Table_Columns_tmpClient<$Result.GetResult<Prisma.$Table_Columns_tmpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Table_Columns_tmps.
     * @param {Table_Columns_tmpDeleteManyArgs} args - Arguments to filter Table_Columns_tmps to delete.
     * @example
     * // Delete a few Table_Columns_tmps
     * const { count } = await prisma.table_Columns_tmp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Table_Columns_tmpDeleteManyArgs>(args?: SelectSubset<T, Table_Columns_tmpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Table_Columns_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_Columns_tmpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Table_Columns_tmps
     * const table_Columns_tmp = await prisma.table_Columns_tmp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Table_Columns_tmpUpdateManyArgs>(args: SelectSubset<T, Table_Columns_tmpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Table_Columns_tmps and returns the data updated in the database.
     * @param {Table_Columns_tmpUpdateManyAndReturnArgs} args - Arguments to update many Table_Columns_tmps.
     * @example
     * // Update many Table_Columns_tmps
     * const table_Columns_tmp = await prisma.table_Columns_tmp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Table_Columns_tmps and only return the `id`
     * const table_Columns_tmpWithIdOnly = await prisma.table_Columns_tmp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Table_Columns_tmpUpdateManyAndReturnArgs>(args: SelectSubset<T, Table_Columns_tmpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Table_Columns_tmpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Table_Columns_tmp.
     * @param {Table_Columns_tmpUpsertArgs} args - Arguments to update or create a Table_Columns_tmp.
     * @example
     * // Update or create a Table_Columns_tmp
     * const table_Columns_tmp = await prisma.table_Columns_tmp.upsert({
     *   create: {
     *     // ... data to create a Table_Columns_tmp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table_Columns_tmp we want to update
     *   }
     * })
     */
    upsert<T extends Table_Columns_tmpUpsertArgs>(args: SelectSubset<T, Table_Columns_tmpUpsertArgs<ExtArgs>>): Prisma__Table_Columns_tmpClient<$Result.GetResult<Prisma.$Table_Columns_tmpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Table_Columns_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_Columns_tmpCountArgs} args - Arguments to filter Table_Columns_tmps to count.
     * @example
     * // Count the number of Table_Columns_tmps
     * const count = await prisma.table_Columns_tmp.count({
     *   where: {
     *     // ... the filter for the Table_Columns_tmps we want to count
     *   }
     * })
    **/
    count<T extends Table_Columns_tmpCountArgs>(
      args?: Subset<T, Table_Columns_tmpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Table_Columns_tmpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table_Columns_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_Columns_tmpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Table_Columns_tmpAggregateArgs>(args: Subset<T, Table_Columns_tmpAggregateArgs>): Prisma.PrismaPromise<GetTable_Columns_tmpAggregateType<T>>

    /**
     * Group by Table_Columns_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_Columns_tmpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Table_Columns_tmpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Table_Columns_tmpGroupByArgs['orderBy'] }
        : { orderBy?: Table_Columns_tmpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Table_Columns_tmpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTable_Columns_tmpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Table_Columns_tmp model
   */
  readonly fields: Table_Columns_tmpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table_Columns_tmp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Table_Columns_tmpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Players_tmp<T extends Table_Columns_tmp$Players_tmpArgs<ExtArgs> = {}>(args?: Subset<T, Table_Columns_tmp$Players_tmpArgs<ExtArgs>>): Prisma__Players_tmpClient<$Result.GetResult<Prisma.$Players_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Table_Columns_tmp model
   */
  interface Table_Columns_tmpFieldRefs {
    readonly id: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Column: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Upper_Table_1: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Upper_Table_2: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Upper_Table_3: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Upper_Table_4: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Upper_Table_5: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Upper_Table_6: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Upper_Table_Score: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Upper_Table_Add35: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Upper_Table_TotalScore: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Bottom_Table_1: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Bottom_Table_2: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Bottom_Table_3: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Bottom_Table_4: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Bottom_Table_5: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Bottom_Table_6: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Bottom_Table_7: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Bottom_Table_Score: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly Bottom_Table_TotalScore: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly TotalScore: FieldRef<"Table_Columns_tmp", 'Int'>
    readonly createdAt: FieldRef<"Table_Columns_tmp", 'DateTime'>
    readonly updatedAt: FieldRef<"Table_Columns_tmp", 'DateTime'>
    readonly PlayerID: FieldRef<"Table_Columns_tmp", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Table_Columns_tmp findUnique
   */
  export type Table_Columns_tmpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Columns_tmp
     */
    select?: Table_Columns_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Columns_tmp
     */
    omit?: Table_Columns_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Columns_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Table_Columns_tmp to fetch.
     */
    where: Table_Columns_tmpWhereUniqueInput
  }

  /**
   * Table_Columns_tmp findUniqueOrThrow
   */
  export type Table_Columns_tmpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Columns_tmp
     */
    select?: Table_Columns_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Columns_tmp
     */
    omit?: Table_Columns_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Columns_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Table_Columns_tmp to fetch.
     */
    where: Table_Columns_tmpWhereUniqueInput
  }

  /**
   * Table_Columns_tmp findFirst
   */
  export type Table_Columns_tmpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Columns_tmp
     */
    select?: Table_Columns_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Columns_tmp
     */
    omit?: Table_Columns_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Columns_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Table_Columns_tmp to fetch.
     */
    where?: Table_Columns_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Table_Columns_tmps to fetch.
     */
    orderBy?: Table_Columns_tmpOrderByWithRelationInput | Table_Columns_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Table_Columns_tmps.
     */
    cursor?: Table_Columns_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Table_Columns_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Table_Columns_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Table_Columns_tmps.
     */
    distinct?: Table_Columns_tmpScalarFieldEnum | Table_Columns_tmpScalarFieldEnum[]
  }

  /**
   * Table_Columns_tmp findFirstOrThrow
   */
  export type Table_Columns_tmpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Columns_tmp
     */
    select?: Table_Columns_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Columns_tmp
     */
    omit?: Table_Columns_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Columns_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Table_Columns_tmp to fetch.
     */
    where?: Table_Columns_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Table_Columns_tmps to fetch.
     */
    orderBy?: Table_Columns_tmpOrderByWithRelationInput | Table_Columns_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Table_Columns_tmps.
     */
    cursor?: Table_Columns_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Table_Columns_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Table_Columns_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Table_Columns_tmps.
     */
    distinct?: Table_Columns_tmpScalarFieldEnum | Table_Columns_tmpScalarFieldEnum[]
  }

  /**
   * Table_Columns_tmp findMany
   */
  export type Table_Columns_tmpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Columns_tmp
     */
    select?: Table_Columns_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Columns_tmp
     */
    omit?: Table_Columns_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Columns_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Table_Columns_tmps to fetch.
     */
    where?: Table_Columns_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Table_Columns_tmps to fetch.
     */
    orderBy?: Table_Columns_tmpOrderByWithRelationInput | Table_Columns_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Table_Columns_tmps.
     */
    cursor?: Table_Columns_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Table_Columns_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Table_Columns_tmps.
     */
    skip?: number
    distinct?: Table_Columns_tmpScalarFieldEnum | Table_Columns_tmpScalarFieldEnum[]
  }

  /**
   * Table_Columns_tmp create
   */
  export type Table_Columns_tmpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Columns_tmp
     */
    select?: Table_Columns_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Columns_tmp
     */
    omit?: Table_Columns_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Columns_tmpInclude<ExtArgs> | null
    /**
     * The data needed to create a Table_Columns_tmp.
     */
    data: XOR<Table_Columns_tmpCreateInput, Table_Columns_tmpUncheckedCreateInput>
  }

  /**
   * Table_Columns_tmp createMany
   */
  export type Table_Columns_tmpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Table_Columns_tmps.
     */
    data: Table_Columns_tmpCreateManyInput | Table_Columns_tmpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Table_Columns_tmp createManyAndReturn
   */
  export type Table_Columns_tmpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Columns_tmp
     */
    select?: Table_Columns_tmpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Columns_tmp
     */
    omit?: Table_Columns_tmpOmit<ExtArgs> | null
    /**
     * The data used to create many Table_Columns_tmps.
     */
    data: Table_Columns_tmpCreateManyInput | Table_Columns_tmpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Columns_tmpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table_Columns_tmp update
   */
  export type Table_Columns_tmpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Columns_tmp
     */
    select?: Table_Columns_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Columns_tmp
     */
    omit?: Table_Columns_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Columns_tmpInclude<ExtArgs> | null
    /**
     * The data needed to update a Table_Columns_tmp.
     */
    data: XOR<Table_Columns_tmpUpdateInput, Table_Columns_tmpUncheckedUpdateInput>
    /**
     * Choose, which Table_Columns_tmp to update.
     */
    where: Table_Columns_tmpWhereUniqueInput
  }

  /**
   * Table_Columns_tmp updateMany
   */
  export type Table_Columns_tmpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Table_Columns_tmps.
     */
    data: XOR<Table_Columns_tmpUpdateManyMutationInput, Table_Columns_tmpUncheckedUpdateManyInput>
    /**
     * Filter which Table_Columns_tmps to update
     */
    where?: Table_Columns_tmpWhereInput
    /**
     * Limit how many Table_Columns_tmps to update.
     */
    limit?: number
  }

  /**
   * Table_Columns_tmp updateManyAndReturn
   */
  export type Table_Columns_tmpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Columns_tmp
     */
    select?: Table_Columns_tmpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Columns_tmp
     */
    omit?: Table_Columns_tmpOmit<ExtArgs> | null
    /**
     * The data used to update Table_Columns_tmps.
     */
    data: XOR<Table_Columns_tmpUpdateManyMutationInput, Table_Columns_tmpUncheckedUpdateManyInput>
    /**
     * Filter which Table_Columns_tmps to update
     */
    where?: Table_Columns_tmpWhereInput
    /**
     * Limit how many Table_Columns_tmps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Columns_tmpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table_Columns_tmp upsert
   */
  export type Table_Columns_tmpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Columns_tmp
     */
    select?: Table_Columns_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Columns_tmp
     */
    omit?: Table_Columns_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Columns_tmpInclude<ExtArgs> | null
    /**
     * The filter to search for the Table_Columns_tmp to update in case it exists.
     */
    where: Table_Columns_tmpWhereUniqueInput
    /**
     * In case the Table_Columns_tmp found by the `where` argument doesn't exist, create a new Table_Columns_tmp with this data.
     */
    create: XOR<Table_Columns_tmpCreateInput, Table_Columns_tmpUncheckedCreateInput>
    /**
     * In case the Table_Columns_tmp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Table_Columns_tmpUpdateInput, Table_Columns_tmpUncheckedUpdateInput>
  }

  /**
   * Table_Columns_tmp delete
   */
  export type Table_Columns_tmpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Columns_tmp
     */
    select?: Table_Columns_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Columns_tmp
     */
    omit?: Table_Columns_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Columns_tmpInclude<ExtArgs> | null
    /**
     * Filter which Table_Columns_tmp to delete.
     */
    where: Table_Columns_tmpWhereUniqueInput
  }

  /**
   * Table_Columns_tmp deleteMany
   */
  export type Table_Columns_tmpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table_Columns_tmps to delete
     */
    where?: Table_Columns_tmpWhereInput
    /**
     * Limit how many Table_Columns_tmps to delete.
     */
    limit?: number
  }

  /**
   * Table_Columns_tmp.Players_tmp
   */
  export type Table_Columns_tmp$Players_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players_tmp
     */
    select?: Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Players_tmp
     */
    omit?: Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Players_tmpInclude<ExtArgs> | null
    where?: Players_tmpWhereInput
  }

  /**
   * Table_Columns_tmp without action
   */
  export type Table_Columns_tmpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Columns_tmp
     */
    select?: Table_Columns_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Columns_tmp
     */
    omit?: Table_Columns_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Columns_tmpInclude<ExtArgs> | null
  }


  /**
   * Model Table_Archives_tmp
   */

  export type AggregateTable_Archives_tmp = {
    _count: Table_Archives_tmpCountAggregateOutputType | null
    _avg: Table_Archives_tmpAvgAggregateOutputType | null
    _sum: Table_Archives_tmpSumAggregateOutputType | null
    _min: Table_Archives_tmpMinAggregateOutputType | null
    _max: Table_Archives_tmpMaxAggregateOutputType | null
  }

  export type Table_Archives_tmpAvgAggregateOutputType = {
    id: number | null
    FinalScoreID: number | null
  }

  export type Table_Archives_tmpSumAggregateOutputType = {
    id: number | null
    FinalScoreID: number | null
  }

  export type Table_Archives_tmpMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    FinalScoreID: number | null
  }

  export type Table_Archives_tmpMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    FinalScoreID: number | null
  }

  export type Table_Archives_tmpCountAggregateOutputType = {
    id: number
    Table: number
    createdAt: number
    updatedAt: number
    FinalScoreID: number
    _all: number
  }


  export type Table_Archives_tmpAvgAggregateInputType = {
    id?: true
    FinalScoreID?: true
  }

  export type Table_Archives_tmpSumAggregateInputType = {
    id?: true
    FinalScoreID?: true
  }

  export type Table_Archives_tmpMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    FinalScoreID?: true
  }

  export type Table_Archives_tmpMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    FinalScoreID?: true
  }

  export type Table_Archives_tmpCountAggregateInputType = {
    id?: true
    Table?: true
    createdAt?: true
    updatedAt?: true
    FinalScoreID?: true
    _all?: true
  }

  export type Table_Archives_tmpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table_Archives_tmp to aggregate.
     */
    where?: Table_Archives_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Table_Archives_tmps to fetch.
     */
    orderBy?: Table_Archives_tmpOrderByWithRelationInput | Table_Archives_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Table_Archives_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Table_Archives_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Table_Archives_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Table_Archives_tmps
    **/
    _count?: true | Table_Archives_tmpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Table_Archives_tmpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Table_Archives_tmpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Table_Archives_tmpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Table_Archives_tmpMaxAggregateInputType
  }

  export type GetTable_Archives_tmpAggregateType<T extends Table_Archives_tmpAggregateArgs> = {
        [P in keyof T & keyof AggregateTable_Archives_tmp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable_Archives_tmp[P]>
      : GetScalarType<T[P], AggregateTable_Archives_tmp[P]>
  }




  export type Table_Archives_tmpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Table_Archives_tmpWhereInput
    orderBy?: Table_Archives_tmpOrderByWithAggregationInput | Table_Archives_tmpOrderByWithAggregationInput[]
    by: Table_Archives_tmpScalarFieldEnum[] | Table_Archives_tmpScalarFieldEnum
    having?: Table_Archives_tmpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Table_Archives_tmpCountAggregateInputType | true
    _avg?: Table_Archives_tmpAvgAggregateInputType
    _sum?: Table_Archives_tmpSumAggregateInputType
    _min?: Table_Archives_tmpMinAggregateInputType
    _max?: Table_Archives_tmpMaxAggregateInputType
  }

  export type Table_Archives_tmpGroupByOutputType = {
    id: number
    Table: JsonValue[]
    createdAt: Date
    updatedAt: Date
    FinalScoreID: number | null
    _count: Table_Archives_tmpCountAggregateOutputType | null
    _avg: Table_Archives_tmpAvgAggregateOutputType | null
    _sum: Table_Archives_tmpSumAggregateOutputType | null
    _min: Table_Archives_tmpMinAggregateOutputType | null
    _max: Table_Archives_tmpMaxAggregateOutputType | null
  }

  type GetTable_Archives_tmpGroupByPayload<T extends Table_Archives_tmpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Table_Archives_tmpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Table_Archives_tmpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Table_Archives_tmpGroupByOutputType[P]>
            : GetScalarType<T[P], Table_Archives_tmpGroupByOutputType[P]>
        }
      >
    >


  export type Table_Archives_tmpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Table?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    FinalScoreID?: boolean
    FinalScores_tmp?: boolean | Table_Archives_tmp$FinalScores_tmpArgs<ExtArgs>
  }, ExtArgs["result"]["table_Archives_tmp"]>

  export type Table_Archives_tmpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Table?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    FinalScoreID?: boolean
    FinalScores_tmp?: boolean | Table_Archives_tmp$FinalScores_tmpArgs<ExtArgs>
  }, ExtArgs["result"]["table_Archives_tmp"]>

  export type Table_Archives_tmpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Table?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    FinalScoreID?: boolean
    FinalScores_tmp?: boolean | Table_Archives_tmp$FinalScores_tmpArgs<ExtArgs>
  }, ExtArgs["result"]["table_Archives_tmp"]>

  export type Table_Archives_tmpSelectScalar = {
    id?: boolean
    Table?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    FinalScoreID?: boolean
  }

  export type Table_Archives_tmpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Table" | "createdAt" | "updatedAt" | "FinalScoreID", ExtArgs["result"]["table_Archives_tmp"]>
  export type Table_Archives_tmpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FinalScores_tmp?: boolean | Table_Archives_tmp$FinalScores_tmpArgs<ExtArgs>
  }
  export type Table_Archives_tmpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FinalScores_tmp?: boolean | Table_Archives_tmp$FinalScores_tmpArgs<ExtArgs>
  }
  export type Table_Archives_tmpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FinalScores_tmp?: boolean | Table_Archives_tmp$FinalScores_tmpArgs<ExtArgs>
  }

  export type $Table_Archives_tmpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Table_Archives_tmp"
    objects: {
      FinalScores_tmp: Prisma.$FinalScores_tmpPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Table: Prisma.JsonValue[]
      createdAt: Date
      updatedAt: Date
      FinalScoreID: number | null
    }, ExtArgs["result"]["table_Archives_tmp"]>
    composites: {}
  }

  type Table_Archives_tmpGetPayload<S extends boolean | null | undefined | Table_Archives_tmpDefaultArgs> = $Result.GetResult<Prisma.$Table_Archives_tmpPayload, S>

  type Table_Archives_tmpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Table_Archives_tmpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Table_Archives_tmpCountAggregateInputType | true
    }

  export interface Table_Archives_tmpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table_Archives_tmp'], meta: { name: 'Table_Archives_tmp' } }
    /**
     * Find zero or one Table_Archives_tmp that matches the filter.
     * @param {Table_Archives_tmpFindUniqueArgs} args - Arguments to find a Table_Archives_tmp
     * @example
     * // Get one Table_Archives_tmp
     * const table_Archives_tmp = await prisma.table_Archives_tmp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Table_Archives_tmpFindUniqueArgs>(args: SelectSubset<T, Table_Archives_tmpFindUniqueArgs<ExtArgs>>): Prisma__Table_Archives_tmpClient<$Result.GetResult<Prisma.$Table_Archives_tmpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Table_Archives_tmp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Table_Archives_tmpFindUniqueOrThrowArgs} args - Arguments to find a Table_Archives_tmp
     * @example
     * // Get one Table_Archives_tmp
     * const table_Archives_tmp = await prisma.table_Archives_tmp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Table_Archives_tmpFindUniqueOrThrowArgs>(args: SelectSubset<T, Table_Archives_tmpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Table_Archives_tmpClient<$Result.GetResult<Prisma.$Table_Archives_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table_Archives_tmp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_Archives_tmpFindFirstArgs} args - Arguments to find a Table_Archives_tmp
     * @example
     * // Get one Table_Archives_tmp
     * const table_Archives_tmp = await prisma.table_Archives_tmp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Table_Archives_tmpFindFirstArgs>(args?: SelectSubset<T, Table_Archives_tmpFindFirstArgs<ExtArgs>>): Prisma__Table_Archives_tmpClient<$Result.GetResult<Prisma.$Table_Archives_tmpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table_Archives_tmp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_Archives_tmpFindFirstOrThrowArgs} args - Arguments to find a Table_Archives_tmp
     * @example
     * // Get one Table_Archives_tmp
     * const table_Archives_tmp = await prisma.table_Archives_tmp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Table_Archives_tmpFindFirstOrThrowArgs>(args?: SelectSubset<T, Table_Archives_tmpFindFirstOrThrowArgs<ExtArgs>>): Prisma__Table_Archives_tmpClient<$Result.GetResult<Prisma.$Table_Archives_tmpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Table_Archives_tmps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_Archives_tmpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Table_Archives_tmps
     * const table_Archives_tmps = await prisma.table_Archives_tmp.findMany()
     * 
     * // Get first 10 Table_Archives_tmps
     * const table_Archives_tmps = await prisma.table_Archives_tmp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const table_Archives_tmpWithIdOnly = await prisma.table_Archives_tmp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Table_Archives_tmpFindManyArgs>(args?: SelectSubset<T, Table_Archives_tmpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Table_Archives_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Table_Archives_tmp.
     * @param {Table_Archives_tmpCreateArgs} args - Arguments to create a Table_Archives_tmp.
     * @example
     * // Create one Table_Archives_tmp
     * const Table_Archives_tmp = await prisma.table_Archives_tmp.create({
     *   data: {
     *     // ... data to create a Table_Archives_tmp
     *   }
     * })
     * 
     */
    create<T extends Table_Archives_tmpCreateArgs>(args: SelectSubset<T, Table_Archives_tmpCreateArgs<ExtArgs>>): Prisma__Table_Archives_tmpClient<$Result.GetResult<Prisma.$Table_Archives_tmpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Table_Archives_tmps.
     * @param {Table_Archives_tmpCreateManyArgs} args - Arguments to create many Table_Archives_tmps.
     * @example
     * // Create many Table_Archives_tmps
     * const table_Archives_tmp = await prisma.table_Archives_tmp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Table_Archives_tmpCreateManyArgs>(args?: SelectSubset<T, Table_Archives_tmpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Table_Archives_tmps and returns the data saved in the database.
     * @param {Table_Archives_tmpCreateManyAndReturnArgs} args - Arguments to create many Table_Archives_tmps.
     * @example
     * // Create many Table_Archives_tmps
     * const table_Archives_tmp = await prisma.table_Archives_tmp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Table_Archives_tmps and only return the `id`
     * const table_Archives_tmpWithIdOnly = await prisma.table_Archives_tmp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Table_Archives_tmpCreateManyAndReturnArgs>(args?: SelectSubset<T, Table_Archives_tmpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Table_Archives_tmpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Table_Archives_tmp.
     * @param {Table_Archives_tmpDeleteArgs} args - Arguments to delete one Table_Archives_tmp.
     * @example
     * // Delete one Table_Archives_tmp
     * const Table_Archives_tmp = await prisma.table_Archives_tmp.delete({
     *   where: {
     *     // ... filter to delete one Table_Archives_tmp
     *   }
     * })
     * 
     */
    delete<T extends Table_Archives_tmpDeleteArgs>(args: SelectSubset<T, Table_Archives_tmpDeleteArgs<ExtArgs>>): Prisma__Table_Archives_tmpClient<$Result.GetResult<Prisma.$Table_Archives_tmpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Table_Archives_tmp.
     * @param {Table_Archives_tmpUpdateArgs} args - Arguments to update one Table_Archives_tmp.
     * @example
     * // Update one Table_Archives_tmp
     * const table_Archives_tmp = await prisma.table_Archives_tmp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Table_Archives_tmpUpdateArgs>(args: SelectSubset<T, Table_Archives_tmpUpdateArgs<ExtArgs>>): Prisma__Table_Archives_tmpClient<$Result.GetResult<Prisma.$Table_Archives_tmpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Table_Archives_tmps.
     * @param {Table_Archives_tmpDeleteManyArgs} args - Arguments to filter Table_Archives_tmps to delete.
     * @example
     * // Delete a few Table_Archives_tmps
     * const { count } = await prisma.table_Archives_tmp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Table_Archives_tmpDeleteManyArgs>(args?: SelectSubset<T, Table_Archives_tmpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Table_Archives_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_Archives_tmpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Table_Archives_tmps
     * const table_Archives_tmp = await prisma.table_Archives_tmp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Table_Archives_tmpUpdateManyArgs>(args: SelectSubset<T, Table_Archives_tmpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Table_Archives_tmps and returns the data updated in the database.
     * @param {Table_Archives_tmpUpdateManyAndReturnArgs} args - Arguments to update many Table_Archives_tmps.
     * @example
     * // Update many Table_Archives_tmps
     * const table_Archives_tmp = await prisma.table_Archives_tmp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Table_Archives_tmps and only return the `id`
     * const table_Archives_tmpWithIdOnly = await prisma.table_Archives_tmp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Table_Archives_tmpUpdateManyAndReturnArgs>(args: SelectSubset<T, Table_Archives_tmpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Table_Archives_tmpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Table_Archives_tmp.
     * @param {Table_Archives_tmpUpsertArgs} args - Arguments to update or create a Table_Archives_tmp.
     * @example
     * // Update or create a Table_Archives_tmp
     * const table_Archives_tmp = await prisma.table_Archives_tmp.upsert({
     *   create: {
     *     // ... data to create a Table_Archives_tmp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table_Archives_tmp we want to update
     *   }
     * })
     */
    upsert<T extends Table_Archives_tmpUpsertArgs>(args: SelectSubset<T, Table_Archives_tmpUpsertArgs<ExtArgs>>): Prisma__Table_Archives_tmpClient<$Result.GetResult<Prisma.$Table_Archives_tmpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Table_Archives_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_Archives_tmpCountArgs} args - Arguments to filter Table_Archives_tmps to count.
     * @example
     * // Count the number of Table_Archives_tmps
     * const count = await prisma.table_Archives_tmp.count({
     *   where: {
     *     // ... the filter for the Table_Archives_tmps we want to count
     *   }
     * })
    **/
    count<T extends Table_Archives_tmpCountArgs>(
      args?: Subset<T, Table_Archives_tmpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Table_Archives_tmpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table_Archives_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_Archives_tmpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Table_Archives_tmpAggregateArgs>(args: Subset<T, Table_Archives_tmpAggregateArgs>): Prisma.PrismaPromise<GetTable_Archives_tmpAggregateType<T>>

    /**
     * Group by Table_Archives_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Table_Archives_tmpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Table_Archives_tmpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Table_Archives_tmpGroupByArgs['orderBy'] }
        : { orderBy?: Table_Archives_tmpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Table_Archives_tmpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTable_Archives_tmpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Table_Archives_tmp model
   */
  readonly fields: Table_Archives_tmpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table_Archives_tmp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Table_Archives_tmpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    FinalScores_tmp<T extends Table_Archives_tmp$FinalScores_tmpArgs<ExtArgs> = {}>(args?: Subset<T, Table_Archives_tmp$FinalScores_tmpArgs<ExtArgs>>): Prisma__FinalScores_tmpClient<$Result.GetResult<Prisma.$FinalScores_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Table_Archives_tmp model
   */
  interface Table_Archives_tmpFieldRefs {
    readonly id: FieldRef<"Table_Archives_tmp", 'Int'>
    readonly Table: FieldRef<"Table_Archives_tmp", 'Json[]'>
    readonly createdAt: FieldRef<"Table_Archives_tmp", 'DateTime'>
    readonly updatedAt: FieldRef<"Table_Archives_tmp", 'DateTime'>
    readonly FinalScoreID: FieldRef<"Table_Archives_tmp", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Table_Archives_tmp findUnique
   */
  export type Table_Archives_tmpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Archives_tmp
     */
    select?: Table_Archives_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Archives_tmp
     */
    omit?: Table_Archives_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Archives_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Table_Archives_tmp to fetch.
     */
    where: Table_Archives_tmpWhereUniqueInput
  }

  /**
   * Table_Archives_tmp findUniqueOrThrow
   */
  export type Table_Archives_tmpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Archives_tmp
     */
    select?: Table_Archives_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Archives_tmp
     */
    omit?: Table_Archives_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Archives_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Table_Archives_tmp to fetch.
     */
    where: Table_Archives_tmpWhereUniqueInput
  }

  /**
   * Table_Archives_tmp findFirst
   */
  export type Table_Archives_tmpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Archives_tmp
     */
    select?: Table_Archives_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Archives_tmp
     */
    omit?: Table_Archives_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Archives_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Table_Archives_tmp to fetch.
     */
    where?: Table_Archives_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Table_Archives_tmps to fetch.
     */
    orderBy?: Table_Archives_tmpOrderByWithRelationInput | Table_Archives_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Table_Archives_tmps.
     */
    cursor?: Table_Archives_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Table_Archives_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Table_Archives_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Table_Archives_tmps.
     */
    distinct?: Table_Archives_tmpScalarFieldEnum | Table_Archives_tmpScalarFieldEnum[]
  }

  /**
   * Table_Archives_tmp findFirstOrThrow
   */
  export type Table_Archives_tmpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Archives_tmp
     */
    select?: Table_Archives_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Archives_tmp
     */
    omit?: Table_Archives_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Archives_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Table_Archives_tmp to fetch.
     */
    where?: Table_Archives_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Table_Archives_tmps to fetch.
     */
    orderBy?: Table_Archives_tmpOrderByWithRelationInput | Table_Archives_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Table_Archives_tmps.
     */
    cursor?: Table_Archives_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Table_Archives_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Table_Archives_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Table_Archives_tmps.
     */
    distinct?: Table_Archives_tmpScalarFieldEnum | Table_Archives_tmpScalarFieldEnum[]
  }

  /**
   * Table_Archives_tmp findMany
   */
  export type Table_Archives_tmpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Archives_tmp
     */
    select?: Table_Archives_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Archives_tmp
     */
    omit?: Table_Archives_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Archives_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Table_Archives_tmps to fetch.
     */
    where?: Table_Archives_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Table_Archives_tmps to fetch.
     */
    orderBy?: Table_Archives_tmpOrderByWithRelationInput | Table_Archives_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Table_Archives_tmps.
     */
    cursor?: Table_Archives_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Table_Archives_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Table_Archives_tmps.
     */
    skip?: number
    distinct?: Table_Archives_tmpScalarFieldEnum | Table_Archives_tmpScalarFieldEnum[]
  }

  /**
   * Table_Archives_tmp create
   */
  export type Table_Archives_tmpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Archives_tmp
     */
    select?: Table_Archives_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Archives_tmp
     */
    omit?: Table_Archives_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Archives_tmpInclude<ExtArgs> | null
    /**
     * The data needed to create a Table_Archives_tmp.
     */
    data: XOR<Table_Archives_tmpCreateInput, Table_Archives_tmpUncheckedCreateInput>
  }

  /**
   * Table_Archives_tmp createMany
   */
  export type Table_Archives_tmpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Table_Archives_tmps.
     */
    data: Table_Archives_tmpCreateManyInput | Table_Archives_tmpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Table_Archives_tmp createManyAndReturn
   */
  export type Table_Archives_tmpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Archives_tmp
     */
    select?: Table_Archives_tmpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Archives_tmp
     */
    omit?: Table_Archives_tmpOmit<ExtArgs> | null
    /**
     * The data used to create many Table_Archives_tmps.
     */
    data: Table_Archives_tmpCreateManyInput | Table_Archives_tmpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Archives_tmpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table_Archives_tmp update
   */
  export type Table_Archives_tmpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Archives_tmp
     */
    select?: Table_Archives_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Archives_tmp
     */
    omit?: Table_Archives_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Archives_tmpInclude<ExtArgs> | null
    /**
     * The data needed to update a Table_Archives_tmp.
     */
    data: XOR<Table_Archives_tmpUpdateInput, Table_Archives_tmpUncheckedUpdateInput>
    /**
     * Choose, which Table_Archives_tmp to update.
     */
    where: Table_Archives_tmpWhereUniqueInput
  }

  /**
   * Table_Archives_tmp updateMany
   */
  export type Table_Archives_tmpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Table_Archives_tmps.
     */
    data: XOR<Table_Archives_tmpUpdateManyMutationInput, Table_Archives_tmpUncheckedUpdateManyInput>
    /**
     * Filter which Table_Archives_tmps to update
     */
    where?: Table_Archives_tmpWhereInput
    /**
     * Limit how many Table_Archives_tmps to update.
     */
    limit?: number
  }

  /**
   * Table_Archives_tmp updateManyAndReturn
   */
  export type Table_Archives_tmpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Archives_tmp
     */
    select?: Table_Archives_tmpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Archives_tmp
     */
    omit?: Table_Archives_tmpOmit<ExtArgs> | null
    /**
     * The data used to update Table_Archives_tmps.
     */
    data: XOR<Table_Archives_tmpUpdateManyMutationInput, Table_Archives_tmpUncheckedUpdateManyInput>
    /**
     * Filter which Table_Archives_tmps to update
     */
    where?: Table_Archives_tmpWhereInput
    /**
     * Limit how many Table_Archives_tmps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Archives_tmpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table_Archives_tmp upsert
   */
  export type Table_Archives_tmpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Archives_tmp
     */
    select?: Table_Archives_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Archives_tmp
     */
    omit?: Table_Archives_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Archives_tmpInclude<ExtArgs> | null
    /**
     * The filter to search for the Table_Archives_tmp to update in case it exists.
     */
    where: Table_Archives_tmpWhereUniqueInput
    /**
     * In case the Table_Archives_tmp found by the `where` argument doesn't exist, create a new Table_Archives_tmp with this data.
     */
    create: XOR<Table_Archives_tmpCreateInput, Table_Archives_tmpUncheckedCreateInput>
    /**
     * In case the Table_Archives_tmp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Table_Archives_tmpUpdateInput, Table_Archives_tmpUncheckedUpdateInput>
  }

  /**
   * Table_Archives_tmp delete
   */
  export type Table_Archives_tmpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Archives_tmp
     */
    select?: Table_Archives_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Archives_tmp
     */
    omit?: Table_Archives_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Archives_tmpInclude<ExtArgs> | null
    /**
     * Filter which Table_Archives_tmp to delete.
     */
    where: Table_Archives_tmpWhereUniqueInput
  }

  /**
   * Table_Archives_tmp deleteMany
   */
  export type Table_Archives_tmpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table_Archives_tmps to delete
     */
    where?: Table_Archives_tmpWhereInput
    /**
     * Limit how many Table_Archives_tmps to delete.
     */
    limit?: number
  }

  /**
   * Table_Archives_tmp.FinalScores_tmp
   */
  export type Table_Archives_tmp$FinalScores_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalScores_tmp
     */
    select?: FinalScores_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalScores_tmp
     */
    omit?: FinalScores_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalScores_tmpInclude<ExtArgs> | null
    where?: FinalScores_tmpWhereInput
  }

  /**
   * Table_Archives_tmp without action
   */
  export type Table_Archives_tmpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Archives_tmp
     */
    select?: Table_Archives_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Archives_tmp
     */
    omit?: Table_Archives_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Archives_tmpInclude<ExtArgs> | null
  }


  /**
   * Model Association__Players_And_FinalScores_With_Sessions_tmp
   */

  export type AggregateAssociation__Players_And_FinalScores_With_Sessions_tmp = {
    _count: Association__Players_And_FinalScores_With_Sessions_tmpCountAggregateOutputType | null
    _avg: Association__Players_And_FinalScores_With_Sessions_tmpAvgAggregateOutputType | null
    _sum: Association__Players_And_FinalScores_With_Sessions_tmpSumAggregateOutputType | null
    _min: Association__Players_And_FinalScores_With_Sessions_tmpMinAggregateOutputType | null
    _max: Association__Players_And_FinalScores_With_Sessions_tmpMaxAggregateOutputType | null
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpAvgAggregateOutputType = {
    Score: number | null
    Wins__Before: number | null
    Wins__After: number | null
    Wins__Before_Year: number | null
    Wins__After_Year: number | null
    Wins__Before_Month: number | null
    Wins__After_Month: number | null
    Wins__Before_SinceCustomDate: number | null
    Wins__After_SinceCustomDate: number | null
    SessionID: number | null
    PlayerID: number | null
    FinalScoreID: number | null
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpSumAggregateOutputType = {
    Score: number | null
    Wins__Before: number | null
    Wins__After: number | null
    Wins__Before_Year: number | null
    Wins__After_Year: number | null
    Wins__Before_Month: number | null
    Wins__After_Month: number | null
    Wins__Before_SinceCustomDate: number | null
    Wins__After_SinceCustomDate: number | null
    SessionID: number | null
    PlayerID: number | null
    FinalScoreID: number | null
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpMinAggregateOutputType = {
    IsWinner: boolean | null
    Score: number | null
    Wins__Before: number | null
    Wins__After: number | null
    Wins__Before_Year: number | null
    Wins__After_Year: number | null
    Wins__Before_Month: number | null
    Wins__After_Month: number | null
    Wins__Before_SinceCustomDate: number | null
    Wins__After_SinceCustomDate: number | null
    createdAt: Date | null
    updatedAt: Date | null
    SessionID: number | null
    PlayerID: number | null
    FinalScoreID: number | null
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpMaxAggregateOutputType = {
    IsWinner: boolean | null
    Score: number | null
    Wins__Before: number | null
    Wins__After: number | null
    Wins__Before_Year: number | null
    Wins__After_Year: number | null
    Wins__Before_Month: number | null
    Wins__After_Month: number | null
    Wins__Before_SinceCustomDate: number | null
    Wins__After_SinceCustomDate: number | null
    createdAt: Date | null
    updatedAt: Date | null
    SessionID: number | null
    PlayerID: number | null
    FinalScoreID: number | null
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCountAggregateOutputType = {
    IsWinner: number
    Score: number
    Wins__Before: number
    Wins__After: number
    Wins__Before_Year: number
    Wins__After_Year: number
    Wins__Before_Month: number
    Wins__After_Month: number
    Wins__Before_SinceCustomDate: number
    Wins__After_SinceCustomDate: number
    createdAt: number
    updatedAt: number
    SessionID: number
    PlayerID: number
    FinalScoreID: number
    _all: number
  }


  export type Association__Players_And_FinalScores_With_Sessions_tmpAvgAggregateInputType = {
    Score?: true
    Wins__Before?: true
    Wins__After?: true
    Wins__Before_Year?: true
    Wins__After_Year?: true
    Wins__Before_Month?: true
    Wins__After_Month?: true
    Wins__Before_SinceCustomDate?: true
    Wins__After_SinceCustomDate?: true
    SessionID?: true
    PlayerID?: true
    FinalScoreID?: true
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpSumAggregateInputType = {
    Score?: true
    Wins__Before?: true
    Wins__After?: true
    Wins__Before_Year?: true
    Wins__After_Year?: true
    Wins__Before_Month?: true
    Wins__After_Month?: true
    Wins__Before_SinceCustomDate?: true
    Wins__After_SinceCustomDate?: true
    SessionID?: true
    PlayerID?: true
    FinalScoreID?: true
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpMinAggregateInputType = {
    IsWinner?: true
    Score?: true
    Wins__Before?: true
    Wins__After?: true
    Wins__Before_Year?: true
    Wins__After_Year?: true
    Wins__Before_Month?: true
    Wins__After_Month?: true
    Wins__Before_SinceCustomDate?: true
    Wins__After_SinceCustomDate?: true
    createdAt?: true
    updatedAt?: true
    SessionID?: true
    PlayerID?: true
    FinalScoreID?: true
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpMaxAggregateInputType = {
    IsWinner?: true
    Score?: true
    Wins__Before?: true
    Wins__After?: true
    Wins__Before_Year?: true
    Wins__After_Year?: true
    Wins__Before_Month?: true
    Wins__After_Month?: true
    Wins__Before_SinceCustomDate?: true
    Wins__After_SinceCustomDate?: true
    createdAt?: true
    updatedAt?: true
    SessionID?: true
    PlayerID?: true
    FinalScoreID?: true
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCountAggregateInputType = {
    IsWinner?: true
    Score?: true
    Wins__Before?: true
    Wins__After?: true
    Wins__Before_Year?: true
    Wins__After_Year?: true
    Wins__Before_Month?: true
    Wins__After_Month?: true
    Wins__Before_SinceCustomDate?: true
    Wins__After_SinceCustomDate?: true
    createdAt?: true
    updatedAt?: true
    SessionID?: true
    PlayerID?: true
    FinalScoreID?: true
    _all?: true
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Association__Players_And_FinalScores_With_Sessions_tmp to aggregate.
     */
    where?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Association__Players_And_FinalScores_With_Sessions_tmps to fetch.
     */
    orderBy?: Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithRelationInput | Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Association__Players_And_FinalScores_With_Sessions_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Association__Players_And_FinalScores_With_Sessions_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Association__Players_And_FinalScores_With_Sessions_tmps
    **/
    _count?: true | Association__Players_And_FinalScores_With_Sessions_tmpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Association__Players_And_FinalScores_With_Sessions_tmpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Association__Players_And_FinalScores_With_Sessions_tmpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Association__Players_And_FinalScores_With_Sessions_tmpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Association__Players_And_FinalScores_With_Sessions_tmpMaxAggregateInputType
  }

  export type GetAssociation__Players_And_FinalScores_With_Sessions_tmpAggregateType<T extends Association__Players_And_FinalScores_With_Sessions_tmpAggregateArgs> = {
        [P in keyof T & keyof AggregateAssociation__Players_And_FinalScores_With_Sessions_tmp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssociation__Players_And_FinalScores_With_Sessions_tmp[P]>
      : GetScalarType<T[P], AggregateAssociation__Players_And_FinalScores_With_Sessions_tmp[P]>
  }




  export type Association__Players_And_FinalScores_With_Sessions_tmpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
    orderBy?: Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithAggregationInput | Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithAggregationInput[]
    by: Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum[] | Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum
    having?: Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Association__Players_And_FinalScores_With_Sessions_tmpCountAggregateInputType | true
    _avg?: Association__Players_And_FinalScores_With_Sessions_tmpAvgAggregateInputType
    _sum?: Association__Players_And_FinalScores_With_Sessions_tmpSumAggregateInputType
    _min?: Association__Players_And_FinalScores_With_Sessions_tmpMinAggregateInputType
    _max?: Association__Players_And_FinalScores_With_Sessions_tmpMaxAggregateInputType
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpGroupByOutputType = {
    IsWinner: boolean
    Score: number
    Wins__Before: number
    Wins__After: number
    Wins__Before_Year: number
    Wins__After_Year: number
    Wins__Before_Month: number
    Wins__After_Month: number
    Wins__Before_SinceCustomDate: number | null
    Wins__After_SinceCustomDate: number | null
    createdAt: Date
    updatedAt: Date
    SessionID: number | null
    PlayerID: number
    FinalScoreID: number
    _count: Association__Players_And_FinalScores_With_Sessions_tmpCountAggregateOutputType | null
    _avg: Association__Players_And_FinalScores_With_Sessions_tmpAvgAggregateOutputType | null
    _sum: Association__Players_And_FinalScores_With_Sessions_tmpSumAggregateOutputType | null
    _min: Association__Players_And_FinalScores_With_Sessions_tmpMinAggregateOutputType | null
    _max: Association__Players_And_FinalScores_With_Sessions_tmpMaxAggregateOutputType | null
  }

  type GetAssociation__Players_And_FinalScores_With_Sessions_tmpGroupByPayload<T extends Association__Players_And_FinalScores_With_Sessions_tmpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Association__Players_And_FinalScores_With_Sessions_tmpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Association__Players_And_FinalScores_With_Sessions_tmpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Association__Players_And_FinalScores_With_Sessions_tmpGroupByOutputType[P]>
            : GetScalarType<T[P], Association__Players_And_FinalScores_With_Sessions_tmpGroupByOutputType[P]>
        }
      >
    >


  export type Association__Players_And_FinalScores_With_Sessions_tmpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IsWinner?: boolean
    Score?: boolean
    Wins__Before?: boolean
    Wins__After?: boolean
    Wins__Before_Year?: boolean
    Wins__After_Year?: boolean
    Wins__Before_Month?: boolean
    Wins__After_Month?: boolean
    Wins__Before_SinceCustomDate?: boolean
    Wins__After_SinceCustomDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    SessionID?: boolean
    PlayerID?: boolean
    FinalScoreID?: boolean
    FinalScores_tmp?: boolean | FinalScores_tmpDefaultArgs<ExtArgs>
    Sessions_tmp?: boolean | Association__Players_And_FinalScores_With_Sessions_tmp$Sessions_tmpArgs<ExtArgs>
    Players_tmp?: boolean | Players_tmpDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["association__Players_And_FinalScores_With_Sessions_tmp"]>

  export type Association__Players_And_FinalScores_With_Sessions_tmpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IsWinner?: boolean
    Score?: boolean
    Wins__Before?: boolean
    Wins__After?: boolean
    Wins__Before_Year?: boolean
    Wins__After_Year?: boolean
    Wins__Before_Month?: boolean
    Wins__After_Month?: boolean
    Wins__Before_SinceCustomDate?: boolean
    Wins__After_SinceCustomDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    SessionID?: boolean
    PlayerID?: boolean
    FinalScoreID?: boolean
    FinalScores_tmp?: boolean | FinalScores_tmpDefaultArgs<ExtArgs>
    Sessions_tmp?: boolean | Association__Players_And_FinalScores_With_Sessions_tmp$Sessions_tmpArgs<ExtArgs>
    Players_tmp?: boolean | Players_tmpDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["association__Players_And_FinalScores_With_Sessions_tmp"]>

  export type Association__Players_And_FinalScores_With_Sessions_tmpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IsWinner?: boolean
    Score?: boolean
    Wins__Before?: boolean
    Wins__After?: boolean
    Wins__Before_Year?: boolean
    Wins__After_Year?: boolean
    Wins__Before_Month?: boolean
    Wins__After_Month?: boolean
    Wins__Before_SinceCustomDate?: boolean
    Wins__After_SinceCustomDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    SessionID?: boolean
    PlayerID?: boolean
    FinalScoreID?: boolean
    FinalScores_tmp?: boolean | FinalScores_tmpDefaultArgs<ExtArgs>
    Sessions_tmp?: boolean | Association__Players_And_FinalScores_With_Sessions_tmp$Sessions_tmpArgs<ExtArgs>
    Players_tmp?: boolean | Players_tmpDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["association__Players_And_FinalScores_With_Sessions_tmp"]>

  export type Association__Players_And_FinalScores_With_Sessions_tmpSelectScalar = {
    IsWinner?: boolean
    Score?: boolean
    Wins__Before?: boolean
    Wins__After?: boolean
    Wins__Before_Year?: boolean
    Wins__After_Year?: boolean
    Wins__Before_Month?: boolean
    Wins__After_Month?: boolean
    Wins__Before_SinceCustomDate?: boolean
    Wins__After_SinceCustomDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    SessionID?: boolean
    PlayerID?: boolean
    FinalScoreID?: boolean
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"IsWinner" | "Score" | "Wins__Before" | "Wins__After" | "Wins__Before_Year" | "Wins__After_Year" | "Wins__Before_Month" | "Wins__After_Month" | "Wins__Before_SinceCustomDate" | "Wins__After_SinceCustomDate" | "createdAt" | "updatedAt" | "SessionID" | "PlayerID" | "FinalScoreID", ExtArgs["result"]["association__Players_And_FinalScores_With_Sessions_tmp"]>
  export type Association__Players_And_FinalScores_With_Sessions_tmpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FinalScores_tmp?: boolean | FinalScores_tmpDefaultArgs<ExtArgs>
    Sessions_tmp?: boolean | Association__Players_And_FinalScores_With_Sessions_tmp$Sessions_tmpArgs<ExtArgs>
    Players_tmp?: boolean | Players_tmpDefaultArgs<ExtArgs>
  }
  export type Association__Players_And_FinalScores_With_Sessions_tmpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FinalScores_tmp?: boolean | FinalScores_tmpDefaultArgs<ExtArgs>
    Sessions_tmp?: boolean | Association__Players_And_FinalScores_With_Sessions_tmp$Sessions_tmpArgs<ExtArgs>
    Players_tmp?: boolean | Players_tmpDefaultArgs<ExtArgs>
  }
  export type Association__Players_And_FinalScores_With_Sessions_tmpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FinalScores_tmp?: boolean | FinalScores_tmpDefaultArgs<ExtArgs>
    Sessions_tmp?: boolean | Association__Players_And_FinalScores_With_Sessions_tmp$Sessions_tmpArgs<ExtArgs>
    Players_tmp?: boolean | Players_tmpDefaultArgs<ExtArgs>
  }

  export type $Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Association__Players_And_FinalScores_With_Sessions_tmp"
    objects: {
      FinalScores_tmp: Prisma.$FinalScores_tmpPayload<ExtArgs>
      Sessions_tmp: Prisma.$Sessions_tmpPayload<ExtArgs> | null
      Players_tmp: Prisma.$Players_tmpPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      IsWinner: boolean
      Score: number
      Wins__Before: number
      Wins__After: number
      Wins__Before_Year: number
      Wins__After_Year: number
      Wins__Before_Month: number
      Wins__After_Month: number
      Wins__Before_SinceCustomDate: number | null
      Wins__After_SinceCustomDate: number | null
      createdAt: Date
      updatedAt: Date
      SessionID: number | null
      PlayerID: number
      FinalScoreID: number
    }, ExtArgs["result"]["association__Players_And_FinalScores_With_Sessions_tmp"]>
    composites: {}
  }

  type Association__Players_And_FinalScores_With_Sessions_tmpGetPayload<S extends boolean | null | undefined | Association__Players_And_FinalScores_With_Sessions_tmpDefaultArgs> = $Result.GetResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload, S>

  type Association__Players_And_FinalScores_With_Sessions_tmpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Association__Players_And_FinalScores_With_Sessions_tmpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Association__Players_And_FinalScores_With_Sessions_tmpCountAggregateInputType | true
    }

  export interface Association__Players_And_FinalScores_With_Sessions_tmpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Association__Players_And_FinalScores_With_Sessions_tmp'], meta: { name: 'Association__Players_And_FinalScores_With_Sessions_tmp' } }
    /**
     * Find zero or one Association__Players_And_FinalScores_With_Sessions_tmp that matches the filter.
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpFindUniqueArgs} args - Arguments to find a Association__Players_And_FinalScores_With_Sessions_tmp
     * @example
     * // Get one Association__Players_And_FinalScores_With_Sessions_tmp
     * const association__Players_And_FinalScores_With_Sessions_tmp = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Association__Players_And_FinalScores_With_Sessions_tmpFindUniqueArgs>(args: SelectSubset<T, Association__Players_And_FinalScores_With_Sessions_tmpFindUniqueArgs<ExtArgs>>): Prisma__Association__Players_And_FinalScores_With_Sessions_tmpClient<$Result.GetResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Association__Players_And_FinalScores_With_Sessions_tmp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpFindUniqueOrThrowArgs} args - Arguments to find a Association__Players_And_FinalScores_With_Sessions_tmp
     * @example
     * // Get one Association__Players_And_FinalScores_With_Sessions_tmp
     * const association__Players_And_FinalScores_With_Sessions_tmp = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Association__Players_And_FinalScores_With_Sessions_tmpFindUniqueOrThrowArgs>(args: SelectSubset<T, Association__Players_And_FinalScores_With_Sessions_tmpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Association__Players_And_FinalScores_With_Sessions_tmpClient<$Result.GetResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Association__Players_And_FinalScores_With_Sessions_tmp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpFindFirstArgs} args - Arguments to find a Association__Players_And_FinalScores_With_Sessions_tmp
     * @example
     * // Get one Association__Players_And_FinalScores_With_Sessions_tmp
     * const association__Players_And_FinalScores_With_Sessions_tmp = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Association__Players_And_FinalScores_With_Sessions_tmpFindFirstArgs>(args?: SelectSubset<T, Association__Players_And_FinalScores_With_Sessions_tmpFindFirstArgs<ExtArgs>>): Prisma__Association__Players_And_FinalScores_With_Sessions_tmpClient<$Result.GetResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Association__Players_And_FinalScores_With_Sessions_tmp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpFindFirstOrThrowArgs} args - Arguments to find a Association__Players_And_FinalScores_With_Sessions_tmp
     * @example
     * // Get one Association__Players_And_FinalScores_With_Sessions_tmp
     * const association__Players_And_FinalScores_With_Sessions_tmp = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Association__Players_And_FinalScores_With_Sessions_tmpFindFirstOrThrowArgs>(args?: SelectSubset<T, Association__Players_And_FinalScores_With_Sessions_tmpFindFirstOrThrowArgs<ExtArgs>>): Prisma__Association__Players_And_FinalScores_With_Sessions_tmpClient<$Result.GetResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Association__Players_And_FinalScores_With_Sessions_tmps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Association__Players_And_FinalScores_With_Sessions_tmps
     * const association__Players_And_FinalScores_With_Sessions_tmps = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.findMany()
     * 
     * // Get first 10 Association__Players_And_FinalScores_With_Sessions_tmps
     * const association__Players_And_FinalScores_With_Sessions_tmps = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.findMany({ take: 10 })
     * 
     * // Only select the `IsWinner`
     * const association__Players_And_FinalScores_With_Sessions_tmpWithIsWinnerOnly = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.findMany({ select: { IsWinner: true } })
     * 
     */
    findMany<T extends Association__Players_And_FinalScores_With_Sessions_tmpFindManyArgs>(args?: SelectSubset<T, Association__Players_And_FinalScores_With_Sessions_tmpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Association__Players_And_FinalScores_With_Sessions_tmp.
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpCreateArgs} args - Arguments to create a Association__Players_And_FinalScores_With_Sessions_tmp.
     * @example
     * // Create one Association__Players_And_FinalScores_With_Sessions_tmp
     * const Association__Players_And_FinalScores_With_Sessions_tmp = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.create({
     *   data: {
     *     // ... data to create a Association__Players_And_FinalScores_With_Sessions_tmp
     *   }
     * })
     * 
     */
    create<T extends Association__Players_And_FinalScores_With_Sessions_tmpCreateArgs>(args: SelectSubset<T, Association__Players_And_FinalScores_With_Sessions_tmpCreateArgs<ExtArgs>>): Prisma__Association__Players_And_FinalScores_With_Sessions_tmpClient<$Result.GetResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Association__Players_And_FinalScores_With_Sessions_tmps.
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpCreateManyArgs} args - Arguments to create many Association__Players_And_FinalScores_With_Sessions_tmps.
     * @example
     * // Create many Association__Players_And_FinalScores_With_Sessions_tmps
     * const association__Players_And_FinalScores_With_Sessions_tmp = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Association__Players_And_FinalScores_With_Sessions_tmpCreateManyArgs>(args?: SelectSubset<T, Association__Players_And_FinalScores_With_Sessions_tmpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Association__Players_And_FinalScores_With_Sessions_tmps and returns the data saved in the database.
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpCreateManyAndReturnArgs} args - Arguments to create many Association__Players_And_FinalScores_With_Sessions_tmps.
     * @example
     * // Create many Association__Players_And_FinalScores_With_Sessions_tmps
     * const association__Players_And_FinalScores_With_Sessions_tmp = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Association__Players_And_FinalScores_With_Sessions_tmps and only return the `IsWinner`
     * const association__Players_And_FinalScores_With_Sessions_tmpWithIsWinnerOnly = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.createManyAndReturn({
     *   select: { IsWinner: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Association__Players_And_FinalScores_With_Sessions_tmpCreateManyAndReturnArgs>(args?: SelectSubset<T, Association__Players_And_FinalScores_With_Sessions_tmpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Association__Players_And_FinalScores_With_Sessions_tmp.
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpDeleteArgs} args - Arguments to delete one Association__Players_And_FinalScores_With_Sessions_tmp.
     * @example
     * // Delete one Association__Players_And_FinalScores_With_Sessions_tmp
     * const Association__Players_And_FinalScores_With_Sessions_tmp = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.delete({
     *   where: {
     *     // ... filter to delete one Association__Players_And_FinalScores_With_Sessions_tmp
     *   }
     * })
     * 
     */
    delete<T extends Association__Players_And_FinalScores_With_Sessions_tmpDeleteArgs>(args: SelectSubset<T, Association__Players_And_FinalScores_With_Sessions_tmpDeleteArgs<ExtArgs>>): Prisma__Association__Players_And_FinalScores_With_Sessions_tmpClient<$Result.GetResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Association__Players_And_FinalScores_With_Sessions_tmp.
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpUpdateArgs} args - Arguments to update one Association__Players_And_FinalScores_With_Sessions_tmp.
     * @example
     * // Update one Association__Players_And_FinalScores_With_Sessions_tmp
     * const association__Players_And_FinalScores_With_Sessions_tmp = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Association__Players_And_FinalScores_With_Sessions_tmpUpdateArgs>(args: SelectSubset<T, Association__Players_And_FinalScores_With_Sessions_tmpUpdateArgs<ExtArgs>>): Prisma__Association__Players_And_FinalScores_With_Sessions_tmpClient<$Result.GetResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Association__Players_And_FinalScores_With_Sessions_tmps.
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpDeleteManyArgs} args - Arguments to filter Association__Players_And_FinalScores_With_Sessions_tmps to delete.
     * @example
     * // Delete a few Association__Players_And_FinalScores_With_Sessions_tmps
     * const { count } = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Association__Players_And_FinalScores_With_Sessions_tmpDeleteManyArgs>(args?: SelectSubset<T, Association__Players_And_FinalScores_With_Sessions_tmpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Association__Players_And_FinalScores_With_Sessions_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Association__Players_And_FinalScores_With_Sessions_tmps
     * const association__Players_And_FinalScores_With_Sessions_tmp = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyArgs>(args: SelectSubset<T, Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Association__Players_And_FinalScores_With_Sessions_tmps and returns the data updated in the database.
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyAndReturnArgs} args - Arguments to update many Association__Players_And_FinalScores_With_Sessions_tmps.
     * @example
     * // Update many Association__Players_And_FinalScores_With_Sessions_tmps
     * const association__Players_And_FinalScores_With_Sessions_tmp = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Association__Players_And_FinalScores_With_Sessions_tmps and only return the `IsWinner`
     * const association__Players_And_FinalScores_With_Sessions_tmpWithIsWinnerOnly = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.updateManyAndReturn({
     *   select: { IsWinner: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyAndReturnArgs>(args: SelectSubset<T, Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Association__Players_And_FinalScores_With_Sessions_tmp.
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpUpsertArgs} args - Arguments to update or create a Association__Players_And_FinalScores_With_Sessions_tmp.
     * @example
     * // Update or create a Association__Players_And_FinalScores_With_Sessions_tmp
     * const association__Players_And_FinalScores_With_Sessions_tmp = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.upsert({
     *   create: {
     *     // ... data to create a Association__Players_And_FinalScores_With_Sessions_tmp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Association__Players_And_FinalScores_With_Sessions_tmp we want to update
     *   }
     * })
     */
    upsert<T extends Association__Players_And_FinalScores_With_Sessions_tmpUpsertArgs>(args: SelectSubset<T, Association__Players_And_FinalScores_With_Sessions_tmpUpsertArgs<ExtArgs>>): Prisma__Association__Players_And_FinalScores_With_Sessions_tmpClient<$Result.GetResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Association__Players_And_FinalScores_With_Sessions_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpCountArgs} args - Arguments to filter Association__Players_And_FinalScores_With_Sessions_tmps to count.
     * @example
     * // Count the number of Association__Players_And_FinalScores_With_Sessions_tmps
     * const count = await prisma.association__Players_And_FinalScores_With_Sessions_tmp.count({
     *   where: {
     *     // ... the filter for the Association__Players_And_FinalScores_With_Sessions_tmps we want to count
     *   }
     * })
    **/
    count<T extends Association__Players_And_FinalScores_With_Sessions_tmpCountArgs>(
      args?: Subset<T, Association__Players_And_FinalScores_With_Sessions_tmpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Association__Players_And_FinalScores_With_Sessions_tmpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Association__Players_And_FinalScores_With_Sessions_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Association__Players_And_FinalScores_With_Sessions_tmpAggregateArgs>(args: Subset<T, Association__Players_And_FinalScores_With_Sessions_tmpAggregateArgs>): Prisma.PrismaPromise<GetAssociation__Players_And_FinalScores_With_Sessions_tmpAggregateType<T>>

    /**
     * Group by Association__Players_And_FinalScores_With_Sessions_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Players_And_FinalScores_With_Sessions_tmpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Association__Players_And_FinalScores_With_Sessions_tmpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Association__Players_And_FinalScores_With_Sessions_tmpGroupByArgs['orderBy'] }
        : { orderBy?: Association__Players_And_FinalScores_With_Sessions_tmpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Association__Players_And_FinalScores_With_Sessions_tmpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssociation__Players_And_FinalScores_With_Sessions_tmpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Association__Players_And_FinalScores_With_Sessions_tmp model
   */
  readonly fields: Association__Players_And_FinalScores_With_Sessions_tmpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Association__Players_And_FinalScores_With_Sessions_tmp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Association__Players_And_FinalScores_With_Sessions_tmpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    FinalScores_tmp<T extends FinalScores_tmpDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FinalScores_tmpDefaultArgs<ExtArgs>>): Prisma__FinalScores_tmpClient<$Result.GetResult<Prisma.$FinalScores_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Sessions_tmp<T extends Association__Players_And_FinalScores_With_Sessions_tmp$Sessions_tmpArgs<ExtArgs> = {}>(args?: Subset<T, Association__Players_And_FinalScores_With_Sessions_tmp$Sessions_tmpArgs<ExtArgs>>): Prisma__Sessions_tmpClient<$Result.GetResult<Prisma.$Sessions_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Players_tmp<T extends Players_tmpDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Players_tmpDefaultArgs<ExtArgs>>): Prisma__Players_tmpClient<$Result.GetResult<Prisma.$Players_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Association__Players_And_FinalScores_With_Sessions_tmp model
   */
  interface Association__Players_And_FinalScores_With_Sessions_tmpFieldRefs {
    readonly IsWinner: FieldRef<"Association__Players_And_FinalScores_With_Sessions_tmp", 'Boolean'>
    readonly Score: FieldRef<"Association__Players_And_FinalScores_With_Sessions_tmp", 'Int'>
    readonly Wins__Before: FieldRef<"Association__Players_And_FinalScores_With_Sessions_tmp", 'Int'>
    readonly Wins__After: FieldRef<"Association__Players_And_FinalScores_With_Sessions_tmp", 'Int'>
    readonly Wins__Before_Year: FieldRef<"Association__Players_And_FinalScores_With_Sessions_tmp", 'Int'>
    readonly Wins__After_Year: FieldRef<"Association__Players_And_FinalScores_With_Sessions_tmp", 'Int'>
    readonly Wins__Before_Month: FieldRef<"Association__Players_And_FinalScores_With_Sessions_tmp", 'Int'>
    readonly Wins__After_Month: FieldRef<"Association__Players_And_FinalScores_With_Sessions_tmp", 'Int'>
    readonly Wins__Before_SinceCustomDate: FieldRef<"Association__Players_And_FinalScores_With_Sessions_tmp", 'Int'>
    readonly Wins__After_SinceCustomDate: FieldRef<"Association__Players_And_FinalScores_With_Sessions_tmp", 'Int'>
    readonly createdAt: FieldRef<"Association__Players_And_FinalScores_With_Sessions_tmp", 'DateTime'>
    readonly updatedAt: FieldRef<"Association__Players_And_FinalScores_With_Sessions_tmp", 'DateTime'>
    readonly SessionID: FieldRef<"Association__Players_And_FinalScores_With_Sessions_tmp", 'Int'>
    readonly PlayerID: FieldRef<"Association__Players_And_FinalScores_With_Sessions_tmp", 'Int'>
    readonly FinalScoreID: FieldRef<"Association__Players_And_FinalScores_With_Sessions_tmp", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Association__Players_And_FinalScores_With_Sessions_tmp findUnique
   */
  export type Association__Players_And_FinalScores_With_Sessions_tmpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    select?: Association__Players_And_FinalScores_With_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    omit?: Association__Players_And_FinalScores_With_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Players_And_FinalScores_With_Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Association__Players_And_FinalScores_With_Sessions_tmp to fetch.
     */
    where: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
  }

  /**
   * Association__Players_And_FinalScores_With_Sessions_tmp findUniqueOrThrow
   */
  export type Association__Players_And_FinalScores_With_Sessions_tmpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    select?: Association__Players_And_FinalScores_With_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    omit?: Association__Players_And_FinalScores_With_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Players_And_FinalScores_With_Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Association__Players_And_FinalScores_With_Sessions_tmp to fetch.
     */
    where: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
  }

  /**
   * Association__Players_And_FinalScores_With_Sessions_tmp findFirst
   */
  export type Association__Players_And_FinalScores_With_Sessions_tmpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    select?: Association__Players_And_FinalScores_With_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    omit?: Association__Players_And_FinalScores_With_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Players_And_FinalScores_With_Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Association__Players_And_FinalScores_With_Sessions_tmp to fetch.
     */
    where?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Association__Players_And_FinalScores_With_Sessions_tmps to fetch.
     */
    orderBy?: Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithRelationInput | Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Association__Players_And_FinalScores_With_Sessions_tmps.
     */
    cursor?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Association__Players_And_FinalScores_With_Sessions_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Association__Players_And_FinalScores_With_Sessions_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Association__Players_And_FinalScores_With_Sessions_tmps.
     */
    distinct?: Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum | Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum[]
  }

  /**
   * Association__Players_And_FinalScores_With_Sessions_tmp findFirstOrThrow
   */
  export type Association__Players_And_FinalScores_With_Sessions_tmpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    select?: Association__Players_And_FinalScores_With_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    omit?: Association__Players_And_FinalScores_With_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Players_And_FinalScores_With_Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Association__Players_And_FinalScores_With_Sessions_tmp to fetch.
     */
    where?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Association__Players_And_FinalScores_With_Sessions_tmps to fetch.
     */
    orderBy?: Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithRelationInput | Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Association__Players_And_FinalScores_With_Sessions_tmps.
     */
    cursor?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Association__Players_And_FinalScores_With_Sessions_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Association__Players_And_FinalScores_With_Sessions_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Association__Players_And_FinalScores_With_Sessions_tmps.
     */
    distinct?: Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum | Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum[]
  }

  /**
   * Association__Players_And_FinalScores_With_Sessions_tmp findMany
   */
  export type Association__Players_And_FinalScores_With_Sessions_tmpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    select?: Association__Players_And_FinalScores_With_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    omit?: Association__Players_And_FinalScores_With_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Players_And_FinalScores_With_Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Association__Players_And_FinalScores_With_Sessions_tmps to fetch.
     */
    where?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Association__Players_And_FinalScores_With_Sessions_tmps to fetch.
     */
    orderBy?: Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithRelationInput | Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Association__Players_And_FinalScores_With_Sessions_tmps.
     */
    cursor?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Association__Players_And_FinalScores_With_Sessions_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Association__Players_And_FinalScores_With_Sessions_tmps.
     */
    skip?: number
    distinct?: Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum | Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum[]
  }

  /**
   * Association__Players_And_FinalScores_With_Sessions_tmp create
   */
  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    select?: Association__Players_And_FinalScores_With_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    omit?: Association__Players_And_FinalScores_With_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Players_And_FinalScores_With_Sessions_tmpInclude<ExtArgs> | null
    /**
     * The data needed to create a Association__Players_And_FinalScores_With_Sessions_tmp.
     */
    data: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateInput>
  }

  /**
   * Association__Players_And_FinalScores_With_Sessions_tmp createMany
   */
  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Association__Players_And_FinalScores_With_Sessions_tmps.
     */
    data: Association__Players_And_FinalScores_With_Sessions_tmpCreateManyInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Association__Players_And_FinalScores_With_Sessions_tmp createManyAndReturn
   */
  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    select?: Association__Players_And_FinalScores_With_Sessions_tmpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    omit?: Association__Players_And_FinalScores_With_Sessions_tmpOmit<ExtArgs> | null
    /**
     * The data used to create many Association__Players_And_FinalScores_With_Sessions_tmps.
     */
    data: Association__Players_And_FinalScores_With_Sessions_tmpCreateManyInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Players_And_FinalScores_With_Sessions_tmpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Association__Players_And_FinalScores_With_Sessions_tmp update
   */
  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    select?: Association__Players_And_FinalScores_With_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    omit?: Association__Players_And_FinalScores_With_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Players_And_FinalScores_With_Sessions_tmpInclude<ExtArgs> | null
    /**
     * The data needed to update a Association__Players_And_FinalScores_With_Sessions_tmp.
     */
    data: XOR<Association__Players_And_FinalScores_With_Sessions_tmpUpdateInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateInput>
    /**
     * Choose, which Association__Players_And_FinalScores_With_Sessions_tmp to update.
     */
    where: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
  }

  /**
   * Association__Players_And_FinalScores_With_Sessions_tmp updateMany
   */
  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Association__Players_And_FinalScores_With_Sessions_tmps.
     */
    data: XOR<Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyMutationInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyInput>
    /**
     * Filter which Association__Players_And_FinalScores_With_Sessions_tmps to update
     */
    where?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
    /**
     * Limit how many Association__Players_And_FinalScores_With_Sessions_tmps to update.
     */
    limit?: number
  }

  /**
   * Association__Players_And_FinalScores_With_Sessions_tmp updateManyAndReturn
   */
  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    select?: Association__Players_And_FinalScores_With_Sessions_tmpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    omit?: Association__Players_And_FinalScores_With_Sessions_tmpOmit<ExtArgs> | null
    /**
     * The data used to update Association__Players_And_FinalScores_With_Sessions_tmps.
     */
    data: XOR<Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyMutationInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyInput>
    /**
     * Filter which Association__Players_And_FinalScores_With_Sessions_tmps to update
     */
    where?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
    /**
     * Limit how many Association__Players_And_FinalScores_With_Sessions_tmps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Players_And_FinalScores_With_Sessions_tmpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Association__Players_And_FinalScores_With_Sessions_tmp upsert
   */
  export type Association__Players_And_FinalScores_With_Sessions_tmpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    select?: Association__Players_And_FinalScores_With_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    omit?: Association__Players_And_FinalScores_With_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Players_And_FinalScores_With_Sessions_tmpInclude<ExtArgs> | null
    /**
     * The filter to search for the Association__Players_And_FinalScores_With_Sessions_tmp to update in case it exists.
     */
    where: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    /**
     * In case the Association__Players_And_FinalScores_With_Sessions_tmp found by the `where` argument doesn't exist, create a new Association__Players_And_FinalScores_With_Sessions_tmp with this data.
     */
    create: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateInput>
    /**
     * In case the Association__Players_And_FinalScores_With_Sessions_tmp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Association__Players_And_FinalScores_With_Sessions_tmpUpdateInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateInput>
  }

  /**
   * Association__Players_And_FinalScores_With_Sessions_tmp delete
   */
  export type Association__Players_And_FinalScores_With_Sessions_tmpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    select?: Association__Players_And_FinalScores_With_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    omit?: Association__Players_And_FinalScores_With_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Players_And_FinalScores_With_Sessions_tmpInclude<ExtArgs> | null
    /**
     * Filter which Association__Players_And_FinalScores_With_Sessions_tmp to delete.
     */
    where: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
  }

  /**
   * Association__Players_And_FinalScores_With_Sessions_tmp deleteMany
   */
  export type Association__Players_And_FinalScores_With_Sessions_tmpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Association__Players_And_FinalScores_With_Sessions_tmps to delete
     */
    where?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
    /**
     * Limit how many Association__Players_And_FinalScores_With_Sessions_tmps to delete.
     */
    limit?: number
  }

  /**
   * Association__Players_And_FinalScores_With_Sessions_tmp.Sessions_tmp
   */
  export type Association__Players_And_FinalScores_With_Sessions_tmp$Sessions_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions_tmp
     */
    select?: Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions_tmp
     */
    omit?: Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Sessions_tmpInclude<ExtArgs> | null
    where?: Sessions_tmpWhereInput
  }

  /**
   * Association__Players_And_FinalScores_With_Sessions_tmp without action
   */
  export type Association__Players_And_FinalScores_With_Sessions_tmpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    select?: Association__Players_And_FinalScores_With_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    omit?: Association__Players_And_FinalScores_With_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Players_And_FinalScores_With_Sessions_tmpInclude<ExtArgs> | null
  }


  /**
   * Model Association__Sessions_And_Players_tmp
   */

  export type AggregateAssociation__Sessions_And_Players_tmp = {
    _count: Association__Sessions_And_Players_tmpCountAggregateOutputType | null
    _avg: Association__Sessions_And_Players_tmpAvgAggregateOutputType | null
    _sum: Association__Sessions_And_Players_tmpSumAggregateOutputType | null
    _min: Association__Sessions_And_Players_tmpMinAggregateOutputType | null
    _max: Association__Sessions_And_Players_tmpMaxAggregateOutputType | null
  }

  export type Association__Sessions_And_Players_tmpAvgAggregateOutputType = {
    Order_Index: number | null
    SessionID: number | null
    PlayerID: number | null
  }

  export type Association__Sessions_And_Players_tmpSumAggregateOutputType = {
    Order_Index: number | null
    SessionID: number | null
    PlayerID: number | null
  }

  export type Association__Sessions_And_Players_tmpMinAggregateOutputType = {
    Gnadenwurf_Used: boolean | null
    Order_Index: number | null
    createdAt: Date | null
    updatedAt: Date | null
    SessionID: number | null
    PlayerID: number | null
  }

  export type Association__Sessions_And_Players_tmpMaxAggregateOutputType = {
    Gnadenwurf_Used: boolean | null
    Order_Index: number | null
    createdAt: Date | null
    updatedAt: Date | null
    SessionID: number | null
    PlayerID: number | null
  }

  export type Association__Sessions_And_Players_tmpCountAggregateOutputType = {
    Gnadenwurf_Used: number
    Order_Index: number
    createdAt: number
    updatedAt: number
    SessionID: number
    PlayerID: number
    _all: number
  }


  export type Association__Sessions_And_Players_tmpAvgAggregateInputType = {
    Order_Index?: true
    SessionID?: true
    PlayerID?: true
  }

  export type Association__Sessions_And_Players_tmpSumAggregateInputType = {
    Order_Index?: true
    SessionID?: true
    PlayerID?: true
  }

  export type Association__Sessions_And_Players_tmpMinAggregateInputType = {
    Gnadenwurf_Used?: true
    Order_Index?: true
    createdAt?: true
    updatedAt?: true
    SessionID?: true
    PlayerID?: true
  }

  export type Association__Sessions_And_Players_tmpMaxAggregateInputType = {
    Gnadenwurf_Used?: true
    Order_Index?: true
    createdAt?: true
    updatedAt?: true
    SessionID?: true
    PlayerID?: true
  }

  export type Association__Sessions_And_Players_tmpCountAggregateInputType = {
    Gnadenwurf_Used?: true
    Order_Index?: true
    createdAt?: true
    updatedAt?: true
    SessionID?: true
    PlayerID?: true
    _all?: true
  }

  export type Association__Sessions_And_Players_tmpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Association__Sessions_And_Players_tmp to aggregate.
     */
    where?: Association__Sessions_And_Players_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Association__Sessions_And_Players_tmps to fetch.
     */
    orderBy?: Association__Sessions_And_Players_tmpOrderByWithRelationInput | Association__Sessions_And_Players_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Association__Sessions_And_Players_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Association__Sessions_And_Players_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Association__Sessions_And_Players_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Association__Sessions_And_Players_tmps
    **/
    _count?: true | Association__Sessions_And_Players_tmpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Association__Sessions_And_Players_tmpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Association__Sessions_And_Players_tmpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Association__Sessions_And_Players_tmpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Association__Sessions_And_Players_tmpMaxAggregateInputType
  }

  export type GetAssociation__Sessions_And_Players_tmpAggregateType<T extends Association__Sessions_And_Players_tmpAggregateArgs> = {
        [P in keyof T & keyof AggregateAssociation__Sessions_And_Players_tmp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssociation__Sessions_And_Players_tmp[P]>
      : GetScalarType<T[P], AggregateAssociation__Sessions_And_Players_tmp[P]>
  }




  export type Association__Sessions_And_Players_tmpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Association__Sessions_And_Players_tmpWhereInput
    orderBy?: Association__Sessions_And_Players_tmpOrderByWithAggregationInput | Association__Sessions_And_Players_tmpOrderByWithAggregationInput[]
    by: Association__Sessions_And_Players_tmpScalarFieldEnum[] | Association__Sessions_And_Players_tmpScalarFieldEnum
    having?: Association__Sessions_And_Players_tmpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Association__Sessions_And_Players_tmpCountAggregateInputType | true
    _avg?: Association__Sessions_And_Players_tmpAvgAggregateInputType
    _sum?: Association__Sessions_And_Players_tmpSumAggregateInputType
    _min?: Association__Sessions_And_Players_tmpMinAggregateInputType
    _max?: Association__Sessions_And_Players_tmpMaxAggregateInputType
  }

  export type Association__Sessions_And_Players_tmpGroupByOutputType = {
    Gnadenwurf_Used: boolean
    Order_Index: number
    createdAt: Date
    updatedAt: Date
    SessionID: number
    PlayerID: number
    _count: Association__Sessions_And_Players_tmpCountAggregateOutputType | null
    _avg: Association__Sessions_And_Players_tmpAvgAggregateOutputType | null
    _sum: Association__Sessions_And_Players_tmpSumAggregateOutputType | null
    _min: Association__Sessions_And_Players_tmpMinAggregateOutputType | null
    _max: Association__Sessions_And_Players_tmpMaxAggregateOutputType | null
  }

  type GetAssociation__Sessions_And_Players_tmpGroupByPayload<T extends Association__Sessions_And_Players_tmpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Association__Sessions_And_Players_tmpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Association__Sessions_And_Players_tmpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Association__Sessions_And_Players_tmpGroupByOutputType[P]>
            : GetScalarType<T[P], Association__Sessions_And_Players_tmpGroupByOutputType[P]>
        }
      >
    >


  export type Association__Sessions_And_Players_tmpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Gnadenwurf_Used?: boolean
    Order_Index?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    SessionID?: boolean
    PlayerID?: boolean
    Players_tmp?: boolean | Players_tmpDefaultArgs<ExtArgs>
    Sessions_tmp?: boolean | Sessions_tmpDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["association__Sessions_And_Players_tmp"]>

  export type Association__Sessions_And_Players_tmpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Gnadenwurf_Used?: boolean
    Order_Index?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    SessionID?: boolean
    PlayerID?: boolean
    Players_tmp?: boolean | Players_tmpDefaultArgs<ExtArgs>
    Sessions_tmp?: boolean | Sessions_tmpDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["association__Sessions_And_Players_tmp"]>

  export type Association__Sessions_And_Players_tmpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Gnadenwurf_Used?: boolean
    Order_Index?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    SessionID?: boolean
    PlayerID?: boolean
    Players_tmp?: boolean | Players_tmpDefaultArgs<ExtArgs>
    Sessions_tmp?: boolean | Sessions_tmpDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["association__Sessions_And_Players_tmp"]>

  export type Association__Sessions_And_Players_tmpSelectScalar = {
    Gnadenwurf_Used?: boolean
    Order_Index?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    SessionID?: boolean
    PlayerID?: boolean
  }

  export type Association__Sessions_And_Players_tmpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"Gnadenwurf_Used" | "Order_Index" | "createdAt" | "updatedAt" | "SessionID" | "PlayerID", ExtArgs["result"]["association__Sessions_And_Players_tmp"]>
  export type Association__Sessions_And_Players_tmpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Players_tmp?: boolean | Players_tmpDefaultArgs<ExtArgs>
    Sessions_tmp?: boolean | Sessions_tmpDefaultArgs<ExtArgs>
  }
  export type Association__Sessions_And_Players_tmpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Players_tmp?: boolean | Players_tmpDefaultArgs<ExtArgs>
    Sessions_tmp?: boolean | Sessions_tmpDefaultArgs<ExtArgs>
  }
  export type Association__Sessions_And_Players_tmpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Players_tmp?: boolean | Players_tmpDefaultArgs<ExtArgs>
    Sessions_tmp?: boolean | Sessions_tmpDefaultArgs<ExtArgs>
  }

  export type $Association__Sessions_And_Players_tmpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Association__Sessions_And_Players_tmp"
    objects: {
      Players_tmp: Prisma.$Players_tmpPayload<ExtArgs>
      Sessions_tmp: Prisma.$Sessions_tmpPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Gnadenwurf_Used: boolean
      Order_Index: number
      createdAt: Date
      updatedAt: Date
      SessionID: number
      PlayerID: number
    }, ExtArgs["result"]["association__Sessions_And_Players_tmp"]>
    composites: {}
  }

  type Association__Sessions_And_Players_tmpGetPayload<S extends boolean | null | undefined | Association__Sessions_And_Players_tmpDefaultArgs> = $Result.GetResult<Prisma.$Association__Sessions_And_Players_tmpPayload, S>

  type Association__Sessions_And_Players_tmpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Association__Sessions_And_Players_tmpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Association__Sessions_And_Players_tmpCountAggregateInputType | true
    }

  export interface Association__Sessions_And_Players_tmpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Association__Sessions_And_Players_tmp'], meta: { name: 'Association__Sessions_And_Players_tmp' } }
    /**
     * Find zero or one Association__Sessions_And_Players_tmp that matches the filter.
     * @param {Association__Sessions_And_Players_tmpFindUniqueArgs} args - Arguments to find a Association__Sessions_And_Players_tmp
     * @example
     * // Get one Association__Sessions_And_Players_tmp
     * const association__Sessions_And_Players_tmp = await prisma.association__Sessions_And_Players_tmp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Association__Sessions_And_Players_tmpFindUniqueArgs>(args: SelectSubset<T, Association__Sessions_And_Players_tmpFindUniqueArgs<ExtArgs>>): Prisma__Association__Sessions_And_Players_tmpClient<$Result.GetResult<Prisma.$Association__Sessions_And_Players_tmpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Association__Sessions_And_Players_tmp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Association__Sessions_And_Players_tmpFindUniqueOrThrowArgs} args - Arguments to find a Association__Sessions_And_Players_tmp
     * @example
     * // Get one Association__Sessions_And_Players_tmp
     * const association__Sessions_And_Players_tmp = await prisma.association__Sessions_And_Players_tmp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Association__Sessions_And_Players_tmpFindUniqueOrThrowArgs>(args: SelectSubset<T, Association__Sessions_And_Players_tmpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Association__Sessions_And_Players_tmpClient<$Result.GetResult<Prisma.$Association__Sessions_And_Players_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Association__Sessions_And_Players_tmp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Sessions_And_Players_tmpFindFirstArgs} args - Arguments to find a Association__Sessions_And_Players_tmp
     * @example
     * // Get one Association__Sessions_And_Players_tmp
     * const association__Sessions_And_Players_tmp = await prisma.association__Sessions_And_Players_tmp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Association__Sessions_And_Players_tmpFindFirstArgs>(args?: SelectSubset<T, Association__Sessions_And_Players_tmpFindFirstArgs<ExtArgs>>): Prisma__Association__Sessions_And_Players_tmpClient<$Result.GetResult<Prisma.$Association__Sessions_And_Players_tmpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Association__Sessions_And_Players_tmp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Sessions_And_Players_tmpFindFirstOrThrowArgs} args - Arguments to find a Association__Sessions_And_Players_tmp
     * @example
     * // Get one Association__Sessions_And_Players_tmp
     * const association__Sessions_And_Players_tmp = await prisma.association__Sessions_And_Players_tmp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Association__Sessions_And_Players_tmpFindFirstOrThrowArgs>(args?: SelectSubset<T, Association__Sessions_And_Players_tmpFindFirstOrThrowArgs<ExtArgs>>): Prisma__Association__Sessions_And_Players_tmpClient<$Result.GetResult<Prisma.$Association__Sessions_And_Players_tmpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Association__Sessions_And_Players_tmps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Sessions_And_Players_tmpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Association__Sessions_And_Players_tmps
     * const association__Sessions_And_Players_tmps = await prisma.association__Sessions_And_Players_tmp.findMany()
     * 
     * // Get first 10 Association__Sessions_And_Players_tmps
     * const association__Sessions_And_Players_tmps = await prisma.association__Sessions_And_Players_tmp.findMany({ take: 10 })
     * 
     * // Only select the `Gnadenwurf_Used`
     * const association__Sessions_And_Players_tmpWithGnadenwurf_UsedOnly = await prisma.association__Sessions_And_Players_tmp.findMany({ select: { Gnadenwurf_Used: true } })
     * 
     */
    findMany<T extends Association__Sessions_And_Players_tmpFindManyArgs>(args?: SelectSubset<T, Association__Sessions_And_Players_tmpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Association__Sessions_And_Players_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Association__Sessions_And_Players_tmp.
     * @param {Association__Sessions_And_Players_tmpCreateArgs} args - Arguments to create a Association__Sessions_And_Players_tmp.
     * @example
     * // Create one Association__Sessions_And_Players_tmp
     * const Association__Sessions_And_Players_tmp = await prisma.association__Sessions_And_Players_tmp.create({
     *   data: {
     *     // ... data to create a Association__Sessions_And_Players_tmp
     *   }
     * })
     * 
     */
    create<T extends Association__Sessions_And_Players_tmpCreateArgs>(args: SelectSubset<T, Association__Sessions_And_Players_tmpCreateArgs<ExtArgs>>): Prisma__Association__Sessions_And_Players_tmpClient<$Result.GetResult<Prisma.$Association__Sessions_And_Players_tmpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Association__Sessions_And_Players_tmps.
     * @param {Association__Sessions_And_Players_tmpCreateManyArgs} args - Arguments to create many Association__Sessions_And_Players_tmps.
     * @example
     * // Create many Association__Sessions_And_Players_tmps
     * const association__Sessions_And_Players_tmp = await prisma.association__Sessions_And_Players_tmp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Association__Sessions_And_Players_tmpCreateManyArgs>(args?: SelectSubset<T, Association__Sessions_And_Players_tmpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Association__Sessions_And_Players_tmps and returns the data saved in the database.
     * @param {Association__Sessions_And_Players_tmpCreateManyAndReturnArgs} args - Arguments to create many Association__Sessions_And_Players_tmps.
     * @example
     * // Create many Association__Sessions_And_Players_tmps
     * const association__Sessions_And_Players_tmp = await prisma.association__Sessions_And_Players_tmp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Association__Sessions_And_Players_tmps and only return the `Gnadenwurf_Used`
     * const association__Sessions_And_Players_tmpWithGnadenwurf_UsedOnly = await prisma.association__Sessions_And_Players_tmp.createManyAndReturn({
     *   select: { Gnadenwurf_Used: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Association__Sessions_And_Players_tmpCreateManyAndReturnArgs>(args?: SelectSubset<T, Association__Sessions_And_Players_tmpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Association__Sessions_And_Players_tmpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Association__Sessions_And_Players_tmp.
     * @param {Association__Sessions_And_Players_tmpDeleteArgs} args - Arguments to delete one Association__Sessions_And_Players_tmp.
     * @example
     * // Delete one Association__Sessions_And_Players_tmp
     * const Association__Sessions_And_Players_tmp = await prisma.association__Sessions_And_Players_tmp.delete({
     *   where: {
     *     // ... filter to delete one Association__Sessions_And_Players_tmp
     *   }
     * })
     * 
     */
    delete<T extends Association__Sessions_And_Players_tmpDeleteArgs>(args: SelectSubset<T, Association__Sessions_And_Players_tmpDeleteArgs<ExtArgs>>): Prisma__Association__Sessions_And_Players_tmpClient<$Result.GetResult<Prisma.$Association__Sessions_And_Players_tmpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Association__Sessions_And_Players_tmp.
     * @param {Association__Sessions_And_Players_tmpUpdateArgs} args - Arguments to update one Association__Sessions_And_Players_tmp.
     * @example
     * // Update one Association__Sessions_And_Players_tmp
     * const association__Sessions_And_Players_tmp = await prisma.association__Sessions_And_Players_tmp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Association__Sessions_And_Players_tmpUpdateArgs>(args: SelectSubset<T, Association__Sessions_And_Players_tmpUpdateArgs<ExtArgs>>): Prisma__Association__Sessions_And_Players_tmpClient<$Result.GetResult<Prisma.$Association__Sessions_And_Players_tmpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Association__Sessions_And_Players_tmps.
     * @param {Association__Sessions_And_Players_tmpDeleteManyArgs} args - Arguments to filter Association__Sessions_And_Players_tmps to delete.
     * @example
     * // Delete a few Association__Sessions_And_Players_tmps
     * const { count } = await prisma.association__Sessions_And_Players_tmp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Association__Sessions_And_Players_tmpDeleteManyArgs>(args?: SelectSubset<T, Association__Sessions_And_Players_tmpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Association__Sessions_And_Players_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Sessions_And_Players_tmpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Association__Sessions_And_Players_tmps
     * const association__Sessions_And_Players_tmp = await prisma.association__Sessions_And_Players_tmp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Association__Sessions_And_Players_tmpUpdateManyArgs>(args: SelectSubset<T, Association__Sessions_And_Players_tmpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Association__Sessions_And_Players_tmps and returns the data updated in the database.
     * @param {Association__Sessions_And_Players_tmpUpdateManyAndReturnArgs} args - Arguments to update many Association__Sessions_And_Players_tmps.
     * @example
     * // Update many Association__Sessions_And_Players_tmps
     * const association__Sessions_And_Players_tmp = await prisma.association__Sessions_And_Players_tmp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Association__Sessions_And_Players_tmps and only return the `Gnadenwurf_Used`
     * const association__Sessions_And_Players_tmpWithGnadenwurf_UsedOnly = await prisma.association__Sessions_And_Players_tmp.updateManyAndReturn({
     *   select: { Gnadenwurf_Used: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Association__Sessions_And_Players_tmpUpdateManyAndReturnArgs>(args: SelectSubset<T, Association__Sessions_And_Players_tmpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Association__Sessions_And_Players_tmpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Association__Sessions_And_Players_tmp.
     * @param {Association__Sessions_And_Players_tmpUpsertArgs} args - Arguments to update or create a Association__Sessions_And_Players_tmp.
     * @example
     * // Update or create a Association__Sessions_And_Players_tmp
     * const association__Sessions_And_Players_tmp = await prisma.association__Sessions_And_Players_tmp.upsert({
     *   create: {
     *     // ... data to create a Association__Sessions_And_Players_tmp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Association__Sessions_And_Players_tmp we want to update
     *   }
     * })
     */
    upsert<T extends Association__Sessions_And_Players_tmpUpsertArgs>(args: SelectSubset<T, Association__Sessions_And_Players_tmpUpsertArgs<ExtArgs>>): Prisma__Association__Sessions_And_Players_tmpClient<$Result.GetResult<Prisma.$Association__Sessions_And_Players_tmpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Association__Sessions_And_Players_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Sessions_And_Players_tmpCountArgs} args - Arguments to filter Association__Sessions_And_Players_tmps to count.
     * @example
     * // Count the number of Association__Sessions_And_Players_tmps
     * const count = await prisma.association__Sessions_And_Players_tmp.count({
     *   where: {
     *     // ... the filter for the Association__Sessions_And_Players_tmps we want to count
     *   }
     * })
    **/
    count<T extends Association__Sessions_And_Players_tmpCountArgs>(
      args?: Subset<T, Association__Sessions_And_Players_tmpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Association__Sessions_And_Players_tmpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Association__Sessions_And_Players_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Sessions_And_Players_tmpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Association__Sessions_And_Players_tmpAggregateArgs>(args: Subset<T, Association__Sessions_And_Players_tmpAggregateArgs>): Prisma.PrismaPromise<GetAssociation__Sessions_And_Players_tmpAggregateType<T>>

    /**
     * Group by Association__Sessions_And_Players_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Association__Sessions_And_Players_tmpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Association__Sessions_And_Players_tmpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Association__Sessions_And_Players_tmpGroupByArgs['orderBy'] }
        : { orderBy?: Association__Sessions_And_Players_tmpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Association__Sessions_And_Players_tmpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssociation__Sessions_And_Players_tmpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Association__Sessions_And_Players_tmp model
   */
  readonly fields: Association__Sessions_And_Players_tmpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Association__Sessions_And_Players_tmp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Association__Sessions_And_Players_tmpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Players_tmp<T extends Players_tmpDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Players_tmpDefaultArgs<ExtArgs>>): Prisma__Players_tmpClient<$Result.GetResult<Prisma.$Players_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Sessions_tmp<T extends Sessions_tmpDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Sessions_tmpDefaultArgs<ExtArgs>>): Prisma__Sessions_tmpClient<$Result.GetResult<Prisma.$Sessions_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Association__Sessions_And_Players_tmp model
   */
  interface Association__Sessions_And_Players_tmpFieldRefs {
    readonly Gnadenwurf_Used: FieldRef<"Association__Sessions_And_Players_tmp", 'Boolean'>
    readonly Order_Index: FieldRef<"Association__Sessions_And_Players_tmp", 'Int'>
    readonly createdAt: FieldRef<"Association__Sessions_And_Players_tmp", 'DateTime'>
    readonly updatedAt: FieldRef<"Association__Sessions_And_Players_tmp", 'DateTime'>
    readonly SessionID: FieldRef<"Association__Sessions_And_Players_tmp", 'Int'>
    readonly PlayerID: FieldRef<"Association__Sessions_And_Players_tmp", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Association__Sessions_And_Players_tmp findUnique
   */
  export type Association__Sessions_And_Players_tmpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Sessions_And_Players_tmp
     */
    select?: Association__Sessions_And_Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Sessions_And_Players_tmp
     */
    omit?: Association__Sessions_And_Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Sessions_And_Players_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Association__Sessions_And_Players_tmp to fetch.
     */
    where: Association__Sessions_And_Players_tmpWhereUniqueInput
  }

  /**
   * Association__Sessions_And_Players_tmp findUniqueOrThrow
   */
  export type Association__Sessions_And_Players_tmpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Sessions_And_Players_tmp
     */
    select?: Association__Sessions_And_Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Sessions_And_Players_tmp
     */
    omit?: Association__Sessions_And_Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Sessions_And_Players_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Association__Sessions_And_Players_tmp to fetch.
     */
    where: Association__Sessions_And_Players_tmpWhereUniqueInput
  }

  /**
   * Association__Sessions_And_Players_tmp findFirst
   */
  export type Association__Sessions_And_Players_tmpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Sessions_And_Players_tmp
     */
    select?: Association__Sessions_And_Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Sessions_And_Players_tmp
     */
    omit?: Association__Sessions_And_Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Sessions_And_Players_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Association__Sessions_And_Players_tmp to fetch.
     */
    where?: Association__Sessions_And_Players_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Association__Sessions_And_Players_tmps to fetch.
     */
    orderBy?: Association__Sessions_And_Players_tmpOrderByWithRelationInput | Association__Sessions_And_Players_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Association__Sessions_And_Players_tmps.
     */
    cursor?: Association__Sessions_And_Players_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Association__Sessions_And_Players_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Association__Sessions_And_Players_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Association__Sessions_And_Players_tmps.
     */
    distinct?: Association__Sessions_And_Players_tmpScalarFieldEnum | Association__Sessions_And_Players_tmpScalarFieldEnum[]
  }

  /**
   * Association__Sessions_And_Players_tmp findFirstOrThrow
   */
  export type Association__Sessions_And_Players_tmpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Sessions_And_Players_tmp
     */
    select?: Association__Sessions_And_Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Sessions_And_Players_tmp
     */
    omit?: Association__Sessions_And_Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Sessions_And_Players_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Association__Sessions_And_Players_tmp to fetch.
     */
    where?: Association__Sessions_And_Players_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Association__Sessions_And_Players_tmps to fetch.
     */
    orderBy?: Association__Sessions_And_Players_tmpOrderByWithRelationInput | Association__Sessions_And_Players_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Association__Sessions_And_Players_tmps.
     */
    cursor?: Association__Sessions_And_Players_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Association__Sessions_And_Players_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Association__Sessions_And_Players_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Association__Sessions_And_Players_tmps.
     */
    distinct?: Association__Sessions_And_Players_tmpScalarFieldEnum | Association__Sessions_And_Players_tmpScalarFieldEnum[]
  }

  /**
   * Association__Sessions_And_Players_tmp findMany
   */
  export type Association__Sessions_And_Players_tmpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Sessions_And_Players_tmp
     */
    select?: Association__Sessions_And_Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Sessions_And_Players_tmp
     */
    omit?: Association__Sessions_And_Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Sessions_And_Players_tmpInclude<ExtArgs> | null
    /**
     * Filter, which Association__Sessions_And_Players_tmps to fetch.
     */
    where?: Association__Sessions_And_Players_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Association__Sessions_And_Players_tmps to fetch.
     */
    orderBy?: Association__Sessions_And_Players_tmpOrderByWithRelationInput | Association__Sessions_And_Players_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Association__Sessions_And_Players_tmps.
     */
    cursor?: Association__Sessions_And_Players_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Association__Sessions_And_Players_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Association__Sessions_And_Players_tmps.
     */
    skip?: number
    distinct?: Association__Sessions_And_Players_tmpScalarFieldEnum | Association__Sessions_And_Players_tmpScalarFieldEnum[]
  }

  /**
   * Association__Sessions_And_Players_tmp create
   */
  export type Association__Sessions_And_Players_tmpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Sessions_And_Players_tmp
     */
    select?: Association__Sessions_And_Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Sessions_And_Players_tmp
     */
    omit?: Association__Sessions_And_Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Sessions_And_Players_tmpInclude<ExtArgs> | null
    /**
     * The data needed to create a Association__Sessions_And_Players_tmp.
     */
    data: XOR<Association__Sessions_And_Players_tmpCreateInput, Association__Sessions_And_Players_tmpUncheckedCreateInput>
  }

  /**
   * Association__Sessions_And_Players_tmp createMany
   */
  export type Association__Sessions_And_Players_tmpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Association__Sessions_And_Players_tmps.
     */
    data: Association__Sessions_And_Players_tmpCreateManyInput | Association__Sessions_And_Players_tmpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Association__Sessions_And_Players_tmp createManyAndReturn
   */
  export type Association__Sessions_And_Players_tmpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Sessions_And_Players_tmp
     */
    select?: Association__Sessions_And_Players_tmpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Sessions_And_Players_tmp
     */
    omit?: Association__Sessions_And_Players_tmpOmit<ExtArgs> | null
    /**
     * The data used to create many Association__Sessions_And_Players_tmps.
     */
    data: Association__Sessions_And_Players_tmpCreateManyInput | Association__Sessions_And_Players_tmpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Sessions_And_Players_tmpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Association__Sessions_And_Players_tmp update
   */
  export type Association__Sessions_And_Players_tmpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Sessions_And_Players_tmp
     */
    select?: Association__Sessions_And_Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Sessions_And_Players_tmp
     */
    omit?: Association__Sessions_And_Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Sessions_And_Players_tmpInclude<ExtArgs> | null
    /**
     * The data needed to update a Association__Sessions_And_Players_tmp.
     */
    data: XOR<Association__Sessions_And_Players_tmpUpdateInput, Association__Sessions_And_Players_tmpUncheckedUpdateInput>
    /**
     * Choose, which Association__Sessions_And_Players_tmp to update.
     */
    where: Association__Sessions_And_Players_tmpWhereUniqueInput
  }

  /**
   * Association__Sessions_And_Players_tmp updateMany
   */
  export type Association__Sessions_And_Players_tmpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Association__Sessions_And_Players_tmps.
     */
    data: XOR<Association__Sessions_And_Players_tmpUpdateManyMutationInput, Association__Sessions_And_Players_tmpUncheckedUpdateManyInput>
    /**
     * Filter which Association__Sessions_And_Players_tmps to update
     */
    where?: Association__Sessions_And_Players_tmpWhereInput
    /**
     * Limit how many Association__Sessions_And_Players_tmps to update.
     */
    limit?: number
  }

  /**
   * Association__Sessions_And_Players_tmp updateManyAndReturn
   */
  export type Association__Sessions_And_Players_tmpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Sessions_And_Players_tmp
     */
    select?: Association__Sessions_And_Players_tmpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Sessions_And_Players_tmp
     */
    omit?: Association__Sessions_And_Players_tmpOmit<ExtArgs> | null
    /**
     * The data used to update Association__Sessions_And_Players_tmps.
     */
    data: XOR<Association__Sessions_And_Players_tmpUpdateManyMutationInput, Association__Sessions_And_Players_tmpUncheckedUpdateManyInput>
    /**
     * Filter which Association__Sessions_And_Players_tmps to update
     */
    where?: Association__Sessions_And_Players_tmpWhereInput
    /**
     * Limit how many Association__Sessions_And_Players_tmps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Sessions_And_Players_tmpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Association__Sessions_And_Players_tmp upsert
   */
  export type Association__Sessions_And_Players_tmpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Sessions_And_Players_tmp
     */
    select?: Association__Sessions_And_Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Sessions_And_Players_tmp
     */
    omit?: Association__Sessions_And_Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Sessions_And_Players_tmpInclude<ExtArgs> | null
    /**
     * The filter to search for the Association__Sessions_And_Players_tmp to update in case it exists.
     */
    where: Association__Sessions_And_Players_tmpWhereUniqueInput
    /**
     * In case the Association__Sessions_And_Players_tmp found by the `where` argument doesn't exist, create a new Association__Sessions_And_Players_tmp with this data.
     */
    create: XOR<Association__Sessions_And_Players_tmpCreateInput, Association__Sessions_And_Players_tmpUncheckedCreateInput>
    /**
     * In case the Association__Sessions_And_Players_tmp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Association__Sessions_And_Players_tmpUpdateInput, Association__Sessions_And_Players_tmpUncheckedUpdateInput>
  }

  /**
   * Association__Sessions_And_Players_tmp delete
   */
  export type Association__Sessions_And_Players_tmpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Sessions_And_Players_tmp
     */
    select?: Association__Sessions_And_Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Sessions_And_Players_tmp
     */
    omit?: Association__Sessions_And_Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Sessions_And_Players_tmpInclude<ExtArgs> | null
    /**
     * Filter which Association__Sessions_And_Players_tmp to delete.
     */
    where: Association__Sessions_And_Players_tmpWhereUniqueInput
  }

  /**
   * Association__Sessions_And_Players_tmp deleteMany
   */
  export type Association__Sessions_And_Players_tmpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Association__Sessions_And_Players_tmps to delete
     */
    where?: Association__Sessions_And_Players_tmpWhereInput
    /**
     * Limit how many Association__Sessions_And_Players_tmps to delete.
     */
    limit?: number
  }

  /**
   * Association__Sessions_And_Players_tmp without action
   */
  export type Association__Sessions_And_Players_tmpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Sessions_And_Players_tmp
     */
    select?: Association__Sessions_And_Players_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Sessions_And_Players_tmp
     */
    omit?: Association__Sessions_And_Players_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Sessions_And_Players_tmpInclude<ExtArgs> | null
  }


  /**
   * Model FinalScores_tmp
   */

  export type AggregateFinalScores_tmp = {
    _count: FinalScores_tmpCountAggregateOutputType | null
    _avg: FinalScores_tmpAvgAggregateOutputType | null
    _sum: FinalScores_tmpSumAggregateOutputType | null
    _min: FinalScores_tmpMinAggregateOutputType | null
    _max: FinalScores_tmpMaxAggregateOutputType | null
  }

  export type FinalScores_tmpAvgAggregateOutputType = {
    id: number | null
    Columns: number | null
  }

  export type FinalScores_tmpSumAggregateOutputType = {
    id: number | null
    Columns: number | null
  }

  export type FinalScores_tmpMinAggregateOutputType = {
    id: number | null
    Start: Date | null
    End: Date | null
    Columns: number | null
    Surrendered: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinalScores_tmpMaxAggregateOutputType = {
    id: number | null
    Start: Date | null
    End: Date | null
    Columns: number | null
    Surrendered: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FinalScores_tmpCountAggregateOutputType = {
    id: number
    Start: number
    End: number
    Columns: number
    Surrendered: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FinalScores_tmpAvgAggregateInputType = {
    id?: true
    Columns?: true
  }

  export type FinalScores_tmpSumAggregateInputType = {
    id?: true
    Columns?: true
  }

  export type FinalScores_tmpMinAggregateInputType = {
    id?: true
    Start?: true
    End?: true
    Columns?: true
    Surrendered?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinalScores_tmpMaxAggregateInputType = {
    id?: true
    Start?: true
    End?: true
    Columns?: true
    Surrendered?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FinalScores_tmpCountAggregateInputType = {
    id?: true
    Start?: true
    End?: true
    Columns?: true
    Surrendered?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FinalScores_tmpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinalScores_tmp to aggregate.
     */
    where?: FinalScores_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinalScores_tmps to fetch.
     */
    orderBy?: FinalScores_tmpOrderByWithRelationInput | FinalScores_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinalScores_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinalScores_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinalScores_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinalScores_tmps
    **/
    _count?: true | FinalScores_tmpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinalScores_tmpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinalScores_tmpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinalScores_tmpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinalScores_tmpMaxAggregateInputType
  }

  export type GetFinalScores_tmpAggregateType<T extends FinalScores_tmpAggregateArgs> = {
        [P in keyof T & keyof AggregateFinalScores_tmp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinalScores_tmp[P]>
      : GetScalarType<T[P], AggregateFinalScores_tmp[P]>
  }




  export type FinalScores_tmpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinalScores_tmpWhereInput
    orderBy?: FinalScores_tmpOrderByWithAggregationInput | FinalScores_tmpOrderByWithAggregationInput[]
    by: FinalScores_tmpScalarFieldEnum[] | FinalScores_tmpScalarFieldEnum
    having?: FinalScores_tmpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinalScores_tmpCountAggregateInputType | true
    _avg?: FinalScores_tmpAvgAggregateInputType
    _sum?: FinalScores_tmpSumAggregateInputType
    _min?: FinalScores_tmpMinAggregateInputType
    _max?: FinalScores_tmpMaxAggregateInputType
  }

  export type FinalScores_tmpGroupByOutputType = {
    id: number
    Start: Date
    End: Date
    Columns: number
    Surrendered: boolean
    createdAt: Date
    updatedAt: Date
    _count: FinalScores_tmpCountAggregateOutputType | null
    _avg: FinalScores_tmpAvgAggregateOutputType | null
    _sum: FinalScores_tmpSumAggregateOutputType | null
    _min: FinalScores_tmpMinAggregateOutputType | null
    _max: FinalScores_tmpMaxAggregateOutputType | null
  }

  type GetFinalScores_tmpGroupByPayload<T extends FinalScores_tmpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinalScores_tmpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinalScores_tmpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinalScores_tmpGroupByOutputType[P]>
            : GetScalarType<T[P], FinalScores_tmpGroupByOutputType[P]>
        }
      >
    >


  export type FinalScores_tmpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Start?: boolean
    End?: boolean
    Columns?: boolean
    Surrendered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Association__Players_And_FinalScores_With_Sessions_tmp?: boolean | FinalScores_tmp$Association__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs>
    Table_Archives_tmp?: boolean | FinalScores_tmp$Table_Archives_tmpArgs<ExtArgs>
    _count?: boolean | FinalScores_tmpCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finalScores_tmp"]>

  export type FinalScores_tmpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Start?: boolean
    End?: boolean
    Columns?: boolean
    Surrendered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["finalScores_tmp"]>

  export type FinalScores_tmpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Start?: boolean
    End?: boolean
    Columns?: boolean
    Surrendered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["finalScores_tmp"]>

  export type FinalScores_tmpSelectScalar = {
    id?: boolean
    Start?: boolean
    End?: boolean
    Columns?: boolean
    Surrendered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FinalScores_tmpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Start" | "End" | "Columns" | "Surrendered" | "createdAt" | "updatedAt", ExtArgs["result"]["finalScores_tmp"]>
  export type FinalScores_tmpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Association__Players_And_FinalScores_With_Sessions_tmp?: boolean | FinalScores_tmp$Association__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs>
    Table_Archives_tmp?: boolean | FinalScores_tmp$Table_Archives_tmpArgs<ExtArgs>
    _count?: boolean | FinalScores_tmpCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FinalScores_tmpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FinalScores_tmpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FinalScores_tmpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinalScores_tmp"
    objects: {
      Association__Players_And_FinalScores_With_Sessions_tmp: Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>[]
      Table_Archives_tmp: Prisma.$Table_Archives_tmpPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Start: Date
      End: Date
      Columns: number
      Surrendered: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["finalScores_tmp"]>
    composites: {}
  }

  type FinalScores_tmpGetPayload<S extends boolean | null | undefined | FinalScores_tmpDefaultArgs> = $Result.GetResult<Prisma.$FinalScores_tmpPayload, S>

  type FinalScores_tmpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinalScores_tmpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinalScores_tmpCountAggregateInputType | true
    }

  export interface FinalScores_tmpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinalScores_tmp'], meta: { name: 'FinalScores_tmp' } }
    /**
     * Find zero or one FinalScores_tmp that matches the filter.
     * @param {FinalScores_tmpFindUniqueArgs} args - Arguments to find a FinalScores_tmp
     * @example
     * // Get one FinalScores_tmp
     * const finalScores_tmp = await prisma.finalScores_tmp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinalScores_tmpFindUniqueArgs>(args: SelectSubset<T, FinalScores_tmpFindUniqueArgs<ExtArgs>>): Prisma__FinalScores_tmpClient<$Result.GetResult<Prisma.$FinalScores_tmpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinalScores_tmp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinalScores_tmpFindUniqueOrThrowArgs} args - Arguments to find a FinalScores_tmp
     * @example
     * // Get one FinalScores_tmp
     * const finalScores_tmp = await prisma.finalScores_tmp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinalScores_tmpFindUniqueOrThrowArgs>(args: SelectSubset<T, FinalScores_tmpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinalScores_tmpClient<$Result.GetResult<Prisma.$FinalScores_tmpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinalScores_tmp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalScores_tmpFindFirstArgs} args - Arguments to find a FinalScores_tmp
     * @example
     * // Get one FinalScores_tmp
     * const finalScores_tmp = await prisma.finalScores_tmp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinalScores_tmpFindFirstArgs>(args?: SelectSubset<T, FinalScores_tmpFindFirstArgs<ExtArgs>>): Prisma__FinalScores_tmpClient<$Result.GetResult<Prisma.$FinalScores_tmpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinalScores_tmp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalScores_tmpFindFirstOrThrowArgs} args - Arguments to find a FinalScores_tmp
     * @example
     * // Get one FinalScores_tmp
     * const finalScores_tmp = await prisma.finalScores_tmp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinalScores_tmpFindFirstOrThrowArgs>(args?: SelectSubset<T, FinalScores_tmpFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinalScores_tmpClient<$Result.GetResult<Prisma.$FinalScores_tmpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinalScores_tmps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalScores_tmpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinalScores_tmps
     * const finalScores_tmps = await prisma.finalScores_tmp.findMany()
     * 
     * // Get first 10 FinalScores_tmps
     * const finalScores_tmps = await prisma.finalScores_tmp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const finalScores_tmpWithIdOnly = await prisma.finalScores_tmp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinalScores_tmpFindManyArgs>(args?: SelectSubset<T, FinalScores_tmpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinalScores_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinalScores_tmp.
     * @param {FinalScores_tmpCreateArgs} args - Arguments to create a FinalScores_tmp.
     * @example
     * // Create one FinalScores_tmp
     * const FinalScores_tmp = await prisma.finalScores_tmp.create({
     *   data: {
     *     // ... data to create a FinalScores_tmp
     *   }
     * })
     * 
     */
    create<T extends FinalScores_tmpCreateArgs>(args: SelectSubset<T, FinalScores_tmpCreateArgs<ExtArgs>>): Prisma__FinalScores_tmpClient<$Result.GetResult<Prisma.$FinalScores_tmpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinalScores_tmps.
     * @param {FinalScores_tmpCreateManyArgs} args - Arguments to create many FinalScores_tmps.
     * @example
     * // Create many FinalScores_tmps
     * const finalScores_tmp = await prisma.finalScores_tmp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinalScores_tmpCreateManyArgs>(args?: SelectSubset<T, FinalScores_tmpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinalScores_tmps and returns the data saved in the database.
     * @param {FinalScores_tmpCreateManyAndReturnArgs} args - Arguments to create many FinalScores_tmps.
     * @example
     * // Create many FinalScores_tmps
     * const finalScores_tmp = await prisma.finalScores_tmp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinalScores_tmps and only return the `id`
     * const finalScores_tmpWithIdOnly = await prisma.finalScores_tmp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinalScores_tmpCreateManyAndReturnArgs>(args?: SelectSubset<T, FinalScores_tmpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinalScores_tmpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinalScores_tmp.
     * @param {FinalScores_tmpDeleteArgs} args - Arguments to delete one FinalScores_tmp.
     * @example
     * // Delete one FinalScores_tmp
     * const FinalScores_tmp = await prisma.finalScores_tmp.delete({
     *   where: {
     *     // ... filter to delete one FinalScores_tmp
     *   }
     * })
     * 
     */
    delete<T extends FinalScores_tmpDeleteArgs>(args: SelectSubset<T, FinalScores_tmpDeleteArgs<ExtArgs>>): Prisma__FinalScores_tmpClient<$Result.GetResult<Prisma.$FinalScores_tmpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinalScores_tmp.
     * @param {FinalScores_tmpUpdateArgs} args - Arguments to update one FinalScores_tmp.
     * @example
     * // Update one FinalScores_tmp
     * const finalScores_tmp = await prisma.finalScores_tmp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinalScores_tmpUpdateArgs>(args: SelectSubset<T, FinalScores_tmpUpdateArgs<ExtArgs>>): Prisma__FinalScores_tmpClient<$Result.GetResult<Prisma.$FinalScores_tmpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinalScores_tmps.
     * @param {FinalScores_tmpDeleteManyArgs} args - Arguments to filter FinalScores_tmps to delete.
     * @example
     * // Delete a few FinalScores_tmps
     * const { count } = await prisma.finalScores_tmp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinalScores_tmpDeleteManyArgs>(args?: SelectSubset<T, FinalScores_tmpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinalScores_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalScores_tmpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinalScores_tmps
     * const finalScores_tmp = await prisma.finalScores_tmp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinalScores_tmpUpdateManyArgs>(args: SelectSubset<T, FinalScores_tmpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinalScores_tmps and returns the data updated in the database.
     * @param {FinalScores_tmpUpdateManyAndReturnArgs} args - Arguments to update many FinalScores_tmps.
     * @example
     * // Update many FinalScores_tmps
     * const finalScores_tmp = await prisma.finalScores_tmp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinalScores_tmps and only return the `id`
     * const finalScores_tmpWithIdOnly = await prisma.finalScores_tmp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinalScores_tmpUpdateManyAndReturnArgs>(args: SelectSubset<T, FinalScores_tmpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinalScores_tmpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinalScores_tmp.
     * @param {FinalScores_tmpUpsertArgs} args - Arguments to update or create a FinalScores_tmp.
     * @example
     * // Update or create a FinalScores_tmp
     * const finalScores_tmp = await prisma.finalScores_tmp.upsert({
     *   create: {
     *     // ... data to create a FinalScores_tmp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinalScores_tmp we want to update
     *   }
     * })
     */
    upsert<T extends FinalScores_tmpUpsertArgs>(args: SelectSubset<T, FinalScores_tmpUpsertArgs<ExtArgs>>): Prisma__FinalScores_tmpClient<$Result.GetResult<Prisma.$FinalScores_tmpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinalScores_tmps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalScores_tmpCountArgs} args - Arguments to filter FinalScores_tmps to count.
     * @example
     * // Count the number of FinalScores_tmps
     * const count = await prisma.finalScores_tmp.count({
     *   where: {
     *     // ... the filter for the FinalScores_tmps we want to count
     *   }
     * })
    **/
    count<T extends FinalScores_tmpCountArgs>(
      args?: Subset<T, FinalScores_tmpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinalScores_tmpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinalScores_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalScores_tmpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinalScores_tmpAggregateArgs>(args: Subset<T, FinalScores_tmpAggregateArgs>): Prisma.PrismaPromise<GetFinalScores_tmpAggregateType<T>>

    /**
     * Group by FinalScores_tmp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinalScores_tmpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinalScores_tmpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinalScores_tmpGroupByArgs['orderBy'] }
        : { orderBy?: FinalScores_tmpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinalScores_tmpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinalScores_tmpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinalScores_tmp model
   */
  readonly fields: FinalScores_tmpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinalScores_tmp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinalScores_tmpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Association__Players_And_FinalScores_With_Sessions_tmp<T extends FinalScores_tmp$Association__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs> = {}>(args?: Subset<T, FinalScores_tmp$Association__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Association__Players_And_FinalScores_With_Sessions_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Table_Archives_tmp<T extends FinalScores_tmp$Table_Archives_tmpArgs<ExtArgs> = {}>(args?: Subset<T, FinalScores_tmp$Table_Archives_tmpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Table_Archives_tmpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FinalScores_tmp model
   */
  interface FinalScores_tmpFieldRefs {
    readonly id: FieldRef<"FinalScores_tmp", 'Int'>
    readonly Start: FieldRef<"FinalScores_tmp", 'DateTime'>
    readonly End: FieldRef<"FinalScores_tmp", 'DateTime'>
    readonly Columns: FieldRef<"FinalScores_tmp", 'Int'>
    readonly Surrendered: FieldRef<"FinalScores_tmp", 'Boolean'>
    readonly createdAt: FieldRef<"FinalScores_tmp", 'DateTime'>
    readonly updatedAt: FieldRef<"FinalScores_tmp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinalScores_tmp findUnique
   */
  export type FinalScores_tmpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalScores_tmp
     */
    select?: FinalScores_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalScores_tmp
     */
    omit?: FinalScores_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalScores_tmpInclude<ExtArgs> | null
    /**
     * Filter, which FinalScores_tmp to fetch.
     */
    where: FinalScores_tmpWhereUniqueInput
  }

  /**
   * FinalScores_tmp findUniqueOrThrow
   */
  export type FinalScores_tmpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalScores_tmp
     */
    select?: FinalScores_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalScores_tmp
     */
    omit?: FinalScores_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalScores_tmpInclude<ExtArgs> | null
    /**
     * Filter, which FinalScores_tmp to fetch.
     */
    where: FinalScores_tmpWhereUniqueInput
  }

  /**
   * FinalScores_tmp findFirst
   */
  export type FinalScores_tmpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalScores_tmp
     */
    select?: FinalScores_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalScores_tmp
     */
    omit?: FinalScores_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalScores_tmpInclude<ExtArgs> | null
    /**
     * Filter, which FinalScores_tmp to fetch.
     */
    where?: FinalScores_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinalScores_tmps to fetch.
     */
    orderBy?: FinalScores_tmpOrderByWithRelationInput | FinalScores_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinalScores_tmps.
     */
    cursor?: FinalScores_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinalScores_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinalScores_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinalScores_tmps.
     */
    distinct?: FinalScores_tmpScalarFieldEnum | FinalScores_tmpScalarFieldEnum[]
  }

  /**
   * FinalScores_tmp findFirstOrThrow
   */
  export type FinalScores_tmpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalScores_tmp
     */
    select?: FinalScores_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalScores_tmp
     */
    omit?: FinalScores_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalScores_tmpInclude<ExtArgs> | null
    /**
     * Filter, which FinalScores_tmp to fetch.
     */
    where?: FinalScores_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinalScores_tmps to fetch.
     */
    orderBy?: FinalScores_tmpOrderByWithRelationInput | FinalScores_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinalScores_tmps.
     */
    cursor?: FinalScores_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinalScores_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinalScores_tmps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinalScores_tmps.
     */
    distinct?: FinalScores_tmpScalarFieldEnum | FinalScores_tmpScalarFieldEnum[]
  }

  /**
   * FinalScores_tmp findMany
   */
  export type FinalScores_tmpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalScores_tmp
     */
    select?: FinalScores_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalScores_tmp
     */
    omit?: FinalScores_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalScores_tmpInclude<ExtArgs> | null
    /**
     * Filter, which FinalScores_tmps to fetch.
     */
    where?: FinalScores_tmpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinalScores_tmps to fetch.
     */
    orderBy?: FinalScores_tmpOrderByWithRelationInput | FinalScores_tmpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinalScores_tmps.
     */
    cursor?: FinalScores_tmpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinalScores_tmps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinalScores_tmps.
     */
    skip?: number
    distinct?: FinalScores_tmpScalarFieldEnum | FinalScores_tmpScalarFieldEnum[]
  }

  /**
   * FinalScores_tmp create
   */
  export type FinalScores_tmpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalScores_tmp
     */
    select?: FinalScores_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalScores_tmp
     */
    omit?: FinalScores_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalScores_tmpInclude<ExtArgs> | null
    /**
     * The data needed to create a FinalScores_tmp.
     */
    data: XOR<FinalScores_tmpCreateInput, FinalScores_tmpUncheckedCreateInput>
  }

  /**
   * FinalScores_tmp createMany
   */
  export type FinalScores_tmpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinalScores_tmps.
     */
    data: FinalScores_tmpCreateManyInput | FinalScores_tmpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinalScores_tmp createManyAndReturn
   */
  export type FinalScores_tmpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalScores_tmp
     */
    select?: FinalScores_tmpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinalScores_tmp
     */
    omit?: FinalScores_tmpOmit<ExtArgs> | null
    /**
     * The data used to create many FinalScores_tmps.
     */
    data: FinalScores_tmpCreateManyInput | FinalScores_tmpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinalScores_tmp update
   */
  export type FinalScores_tmpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalScores_tmp
     */
    select?: FinalScores_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalScores_tmp
     */
    omit?: FinalScores_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalScores_tmpInclude<ExtArgs> | null
    /**
     * The data needed to update a FinalScores_tmp.
     */
    data: XOR<FinalScores_tmpUpdateInput, FinalScores_tmpUncheckedUpdateInput>
    /**
     * Choose, which FinalScores_tmp to update.
     */
    where: FinalScores_tmpWhereUniqueInput
  }

  /**
   * FinalScores_tmp updateMany
   */
  export type FinalScores_tmpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinalScores_tmps.
     */
    data: XOR<FinalScores_tmpUpdateManyMutationInput, FinalScores_tmpUncheckedUpdateManyInput>
    /**
     * Filter which FinalScores_tmps to update
     */
    where?: FinalScores_tmpWhereInput
    /**
     * Limit how many FinalScores_tmps to update.
     */
    limit?: number
  }

  /**
   * FinalScores_tmp updateManyAndReturn
   */
  export type FinalScores_tmpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalScores_tmp
     */
    select?: FinalScores_tmpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinalScores_tmp
     */
    omit?: FinalScores_tmpOmit<ExtArgs> | null
    /**
     * The data used to update FinalScores_tmps.
     */
    data: XOR<FinalScores_tmpUpdateManyMutationInput, FinalScores_tmpUncheckedUpdateManyInput>
    /**
     * Filter which FinalScores_tmps to update
     */
    where?: FinalScores_tmpWhereInput
    /**
     * Limit how many FinalScores_tmps to update.
     */
    limit?: number
  }

  /**
   * FinalScores_tmp upsert
   */
  export type FinalScores_tmpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalScores_tmp
     */
    select?: FinalScores_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalScores_tmp
     */
    omit?: FinalScores_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalScores_tmpInclude<ExtArgs> | null
    /**
     * The filter to search for the FinalScores_tmp to update in case it exists.
     */
    where: FinalScores_tmpWhereUniqueInput
    /**
     * In case the FinalScores_tmp found by the `where` argument doesn't exist, create a new FinalScores_tmp with this data.
     */
    create: XOR<FinalScores_tmpCreateInput, FinalScores_tmpUncheckedCreateInput>
    /**
     * In case the FinalScores_tmp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinalScores_tmpUpdateInput, FinalScores_tmpUncheckedUpdateInput>
  }

  /**
   * FinalScores_tmp delete
   */
  export type FinalScores_tmpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalScores_tmp
     */
    select?: FinalScores_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalScores_tmp
     */
    omit?: FinalScores_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalScores_tmpInclude<ExtArgs> | null
    /**
     * Filter which FinalScores_tmp to delete.
     */
    where: FinalScores_tmpWhereUniqueInput
  }

  /**
   * FinalScores_tmp deleteMany
   */
  export type FinalScores_tmpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinalScores_tmps to delete
     */
    where?: FinalScores_tmpWhereInput
    /**
     * Limit how many FinalScores_tmps to delete.
     */
    limit?: number
  }

  /**
   * FinalScores_tmp.Association__Players_And_FinalScores_With_Sessions_tmp
   */
  export type FinalScores_tmp$Association__Players_And_FinalScores_With_Sessions_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    select?: Association__Players_And_FinalScores_With_Sessions_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association__Players_And_FinalScores_With_Sessions_tmp
     */
    omit?: Association__Players_And_FinalScores_With_Sessions_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Association__Players_And_FinalScores_With_Sessions_tmpInclude<ExtArgs> | null
    where?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
    orderBy?: Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithRelationInput | Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithRelationInput[]
    cursor?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum | Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum[]
  }

  /**
   * FinalScores_tmp.Table_Archives_tmp
   */
  export type FinalScores_tmp$Table_Archives_tmpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table_Archives_tmp
     */
    select?: Table_Archives_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table_Archives_tmp
     */
    omit?: Table_Archives_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Table_Archives_tmpInclude<ExtArgs> | null
    where?: Table_Archives_tmpWhereInput
    orderBy?: Table_Archives_tmpOrderByWithRelationInput | Table_Archives_tmpOrderByWithRelationInput[]
    cursor?: Table_Archives_tmpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Table_Archives_tmpScalarFieldEnum | Table_Archives_tmpScalarFieldEnum[]
  }

  /**
   * FinalScores_tmp without action
   */
  export type FinalScores_tmpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinalScores_tmp
     */
    select?: FinalScores_tmpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinalScores_tmp
     */
    omit?: FinalScores_tmpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinalScores_tmpInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Users_tmpScalarFieldEnum: {
    id: 'id',
    Name: 'Name',
    Password: 'Password',
    RefreshToken: 'RefreshToken',
    DarkMode: 'DarkMode',
    Show_Session_Names: 'Show_Session_Names',
    Show_Session_Date: 'Show_Session_Date',
    View_Sessions: 'View_Sessions',
    View_Sessions_Desc: 'View_Sessions_Desc',
    Statistics_View: 'Statistics_View',
    Statistics_View_Month: 'Statistics_View_Month',
    Statistics_View_Year: 'Statistics_View_Year',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Users_tmpScalarFieldEnum = (typeof Users_tmpScalarFieldEnum)[keyof typeof Users_tmpScalarFieldEnum]


  export const Association__Users_And_Sessions_tmpScalarFieldEnum: {
    InputType: 'InputType',
    Scores_Visible: 'Scores_Visible',
    View: 'View',
    View_Month: 'View_Month',
    View_Year: 'View_Year',
    View_CustomDate: 'View_CustomDate',
    Statistics_Show_Border: 'Statistics_Show_Border',
    Statistics_View: 'Statistics_View',
    Statistics_View_Month: 'Statistics_View_Month',
    Statistics_View_Year: 'Statistics_View_Year',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    UserID: 'UserID',
    SessionID: 'SessionID'
  };

  export type Association__Users_And_Sessions_tmpScalarFieldEnum = (typeof Association__Users_And_Sessions_tmpScalarFieldEnum)[keyof typeof Association__Users_And_Sessions_tmpScalarFieldEnum]


  export const Sessions_tmpScalarFieldEnum: {
    id: 'id',
    Name: 'Name',
    Color: 'Color',
    Columns: 'Columns',
    View_List_Years: 'View_List_Years',
    CurrentGameStart: 'CurrentGameStart',
    LastPlayed: 'LastPlayed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Sessions_tmpScalarFieldEnum = (typeof Sessions_tmpScalarFieldEnum)[keyof typeof Sessions_tmpScalarFieldEnum]


  export const Players_tmpScalarFieldEnum: {
    id: 'id',
    Name: 'Name',
    Color: 'Color',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Players_tmpScalarFieldEnum = (typeof Players_tmpScalarFieldEnum)[keyof typeof Players_tmpScalarFieldEnum]


  export const Table_Columns_tmpScalarFieldEnum: {
    id: 'id',
    Column: 'Column',
    Upper_Table_1: 'Upper_Table_1',
    Upper_Table_2: 'Upper_Table_2',
    Upper_Table_3: 'Upper_Table_3',
    Upper_Table_4: 'Upper_Table_4',
    Upper_Table_5: 'Upper_Table_5',
    Upper_Table_6: 'Upper_Table_6',
    Upper_Table_Score: 'Upper_Table_Score',
    Upper_Table_Add35: 'Upper_Table_Add35',
    Upper_Table_TotalScore: 'Upper_Table_TotalScore',
    Bottom_Table_1: 'Bottom_Table_1',
    Bottom_Table_2: 'Bottom_Table_2',
    Bottom_Table_3: 'Bottom_Table_3',
    Bottom_Table_4: 'Bottom_Table_4',
    Bottom_Table_5: 'Bottom_Table_5',
    Bottom_Table_6: 'Bottom_Table_6',
    Bottom_Table_7: 'Bottom_Table_7',
    Bottom_Table_Score: 'Bottom_Table_Score',
    Bottom_Table_TotalScore: 'Bottom_Table_TotalScore',
    TotalScore: 'TotalScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    PlayerID: 'PlayerID'
  };

  export type Table_Columns_tmpScalarFieldEnum = (typeof Table_Columns_tmpScalarFieldEnum)[keyof typeof Table_Columns_tmpScalarFieldEnum]


  export const Table_Archives_tmpScalarFieldEnum: {
    id: 'id',
    Table: 'Table',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    FinalScoreID: 'FinalScoreID'
  };

  export type Table_Archives_tmpScalarFieldEnum = (typeof Table_Archives_tmpScalarFieldEnum)[keyof typeof Table_Archives_tmpScalarFieldEnum]


  export const Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum: {
    IsWinner: 'IsWinner',
    Score: 'Score',
    Wins__Before: 'Wins__Before',
    Wins__After: 'Wins__After',
    Wins__Before_Year: 'Wins__Before_Year',
    Wins__After_Year: 'Wins__After_Year',
    Wins__Before_Month: 'Wins__Before_Month',
    Wins__After_Month: 'Wins__After_Month',
    Wins__Before_SinceCustomDate: 'Wins__Before_SinceCustomDate',
    Wins__After_SinceCustomDate: 'Wins__After_SinceCustomDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    SessionID: 'SessionID',
    PlayerID: 'PlayerID',
    FinalScoreID: 'FinalScoreID'
  };

  export type Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum = (typeof Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum)[keyof typeof Association__Players_And_FinalScores_With_Sessions_tmpScalarFieldEnum]


  export const Association__Sessions_And_Players_tmpScalarFieldEnum: {
    Gnadenwurf_Used: 'Gnadenwurf_Used',
    Order_Index: 'Order_Index',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    SessionID: 'SessionID',
    PlayerID: 'PlayerID'
  };

  export type Association__Sessions_And_Players_tmpScalarFieldEnum = (typeof Association__Sessions_And_Players_tmpScalarFieldEnum)[keyof typeof Association__Sessions_And_Players_tmpScalarFieldEnum]


  export const FinalScores_tmpScalarFieldEnum: {
    id: 'id',
    Start: 'Start',
    End: 'End',
    Columns: 'Columns',
    Surrendered: 'Surrendered',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FinalScores_tmpScalarFieldEnum = (typeof FinalScores_tmpScalarFieldEnum)[keyof typeof FinalScores_tmpScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'enum_Users_View_Sessions'
   */
  export type Enumenum_Users_View_SessionsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'enum_Users_View_Sessions'>
    


  /**
   * Reference to a field of type 'enum_Users_View_Sessions[]'
   */
  export type ListEnumenum_Users_View_SessionsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'enum_Users_View_Sessions[]'>
    


  /**
   * Reference to a field of type 'enum_Users_Statistics_View'
   */
  export type Enumenum_Users_Statistics_ViewFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'enum_Users_Statistics_View'>
    


  /**
   * Reference to a field of type 'enum_Users_Statistics_View[]'
   */
  export type ListEnumenum_Users_Statistics_ViewFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'enum_Users_Statistics_View[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'enum_Association__Users_And_Sessions_InputType'
   */
  export type Enumenum_Association__Users_And_Sessions_InputTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'enum_Association__Users_And_Sessions_InputType'>
    


  /**
   * Reference to a field of type 'enum_Association__Users_And_Sessions_InputType[]'
   */
  export type ListEnumenum_Association__Users_And_Sessions_InputTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'enum_Association__Users_And_Sessions_InputType[]'>
    


  /**
   * Reference to a field of type 'enum_Association__Users_And_Sessions_View'
   */
  export type Enumenum_Association__Users_And_Sessions_ViewFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'enum_Association__Users_And_Sessions_View'>
    


  /**
   * Reference to a field of type 'enum_Association__Users_And_Sessions_View[]'
   */
  export type ListEnumenum_Association__Users_And_Sessions_ViewFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'enum_Association__Users_And_Sessions_View[]'>
    


  /**
   * Reference to a field of type 'enum_Association__Users_And_Sessions_Statistics_View'
   */
  export type Enumenum_Association__Users_And_Sessions_Statistics_ViewFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'enum_Association__Users_And_Sessions_Statistics_View'>
    


  /**
   * Reference to a field of type 'enum_Association__Users_And_Sessions_Statistics_View[]'
   */
  export type ListEnumenum_Association__Users_And_Sessions_Statistics_ViewFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'enum_Association__Users_And_Sessions_Statistics_View[]'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type Users_tmpWhereInput = {
    AND?: Users_tmpWhereInput | Users_tmpWhereInput[]
    OR?: Users_tmpWhereInput[]
    NOT?: Users_tmpWhereInput | Users_tmpWhereInput[]
    id?: IntFilter<"Users_tmp"> | number
    Name?: StringFilter<"Users_tmp"> | string
    Password?: StringFilter<"Users_tmp"> | string
    RefreshToken?: StringNullableFilter<"Users_tmp"> | string | null
    DarkMode?: BoolFilter<"Users_tmp"> | boolean
    Show_Session_Names?: BoolFilter<"Users_tmp"> | boolean
    Show_Session_Date?: BoolFilter<"Users_tmp"> | boolean
    View_Sessions?: Enumenum_Users_View_SessionsFilter<"Users_tmp"> | $Enums.enum_Users_View_Sessions
    View_Sessions_Desc?: BoolFilter<"Users_tmp"> | boolean
    Statistics_View?: Enumenum_Users_Statistics_ViewFilter<"Users_tmp"> | $Enums.enum_Users_Statistics_View
    Statistics_View_Month?: IntFilter<"Users_tmp"> | number
    Statistics_View_Year?: IntFilter<"Users_tmp"> | number
    createdAt?: DateTimeFilter<"Users_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Users_tmp"> | Date | string
    List___Association__Users_And_Sessions?: Association__Users_And_Sessions_tmpListRelationFilter
  }

  export type Users_tmpOrderByWithRelationInput = {
    id?: SortOrder
    Name?: SortOrder
    Password?: SortOrder
    RefreshToken?: SortOrderInput | SortOrder
    DarkMode?: SortOrder
    Show_Session_Names?: SortOrder
    Show_Session_Date?: SortOrder
    View_Sessions?: SortOrder
    View_Sessions_Desc?: SortOrder
    Statistics_View?: SortOrder
    Statistics_View_Month?: SortOrder
    Statistics_View_Year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    List___Association__Users_And_Sessions?: Association__Users_And_Sessions_tmpOrderByRelationAggregateInput
  }

  export type Users_tmpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Users_tmpWhereInput | Users_tmpWhereInput[]
    OR?: Users_tmpWhereInput[]
    NOT?: Users_tmpWhereInput | Users_tmpWhereInput[]
    Name?: StringFilter<"Users_tmp"> | string
    Password?: StringFilter<"Users_tmp"> | string
    RefreshToken?: StringNullableFilter<"Users_tmp"> | string | null
    DarkMode?: BoolFilter<"Users_tmp"> | boolean
    Show_Session_Names?: BoolFilter<"Users_tmp"> | boolean
    Show_Session_Date?: BoolFilter<"Users_tmp"> | boolean
    View_Sessions?: Enumenum_Users_View_SessionsFilter<"Users_tmp"> | $Enums.enum_Users_View_Sessions
    View_Sessions_Desc?: BoolFilter<"Users_tmp"> | boolean
    Statistics_View?: Enumenum_Users_Statistics_ViewFilter<"Users_tmp"> | $Enums.enum_Users_Statistics_View
    Statistics_View_Month?: IntFilter<"Users_tmp"> | number
    Statistics_View_Year?: IntFilter<"Users_tmp"> | number
    createdAt?: DateTimeFilter<"Users_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Users_tmp"> | Date | string
    List___Association__Users_And_Sessions?: Association__Users_And_Sessions_tmpListRelationFilter
  }, "id">

  export type Users_tmpOrderByWithAggregationInput = {
    id?: SortOrder
    Name?: SortOrder
    Password?: SortOrder
    RefreshToken?: SortOrderInput | SortOrder
    DarkMode?: SortOrder
    Show_Session_Names?: SortOrder
    Show_Session_Date?: SortOrder
    View_Sessions?: SortOrder
    View_Sessions_Desc?: SortOrder
    Statistics_View?: SortOrder
    Statistics_View_Month?: SortOrder
    Statistics_View_Year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Users_tmpCountOrderByAggregateInput
    _avg?: Users_tmpAvgOrderByAggregateInput
    _max?: Users_tmpMaxOrderByAggregateInput
    _min?: Users_tmpMinOrderByAggregateInput
    _sum?: Users_tmpSumOrderByAggregateInput
  }

  export type Users_tmpScalarWhereWithAggregatesInput = {
    AND?: Users_tmpScalarWhereWithAggregatesInput | Users_tmpScalarWhereWithAggregatesInput[]
    OR?: Users_tmpScalarWhereWithAggregatesInput[]
    NOT?: Users_tmpScalarWhereWithAggregatesInput | Users_tmpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users_tmp"> | number
    Name?: StringWithAggregatesFilter<"Users_tmp"> | string
    Password?: StringWithAggregatesFilter<"Users_tmp"> | string
    RefreshToken?: StringNullableWithAggregatesFilter<"Users_tmp"> | string | null
    DarkMode?: BoolWithAggregatesFilter<"Users_tmp"> | boolean
    Show_Session_Names?: BoolWithAggregatesFilter<"Users_tmp"> | boolean
    Show_Session_Date?: BoolWithAggregatesFilter<"Users_tmp"> | boolean
    View_Sessions?: Enumenum_Users_View_SessionsWithAggregatesFilter<"Users_tmp"> | $Enums.enum_Users_View_Sessions
    View_Sessions_Desc?: BoolWithAggregatesFilter<"Users_tmp"> | boolean
    Statistics_View?: Enumenum_Users_Statistics_ViewWithAggregatesFilter<"Users_tmp"> | $Enums.enum_Users_Statistics_View
    Statistics_View_Month?: IntWithAggregatesFilter<"Users_tmp"> | number
    Statistics_View_Year?: IntWithAggregatesFilter<"Users_tmp"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Users_tmp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users_tmp"> | Date | string
  }

  export type Association__Users_And_Sessions_tmpWhereInput = {
    AND?: Association__Users_And_Sessions_tmpWhereInput | Association__Users_And_Sessions_tmpWhereInput[]
    OR?: Association__Users_And_Sessions_tmpWhereInput[]
    NOT?: Association__Users_And_Sessions_tmpWhereInput | Association__Users_And_Sessions_tmpWhereInput[]
    InputType?: Enumenum_Association__Users_And_Sessions_InputTypeFilter<"Association__Users_And_Sessions_tmp"> | $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible?: BoolFilter<"Association__Users_And_Sessions_tmp"> | boolean
    View?: Enumenum_Association__Users_And_Sessions_ViewFilter<"Association__Users_And_Sessions_tmp"> | $Enums.enum_Association__Users_And_Sessions_View
    View_Month?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    View_Year?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    View_CustomDate?: DateTimeFilter<"Association__Users_And_Sessions_tmp"> | Date | string
    Statistics_Show_Border?: BoolFilter<"Association__Users_And_Sessions_tmp"> | boolean
    Statistics_View?: Enumenum_Association__Users_And_Sessions_Statistics_ViewFilter<"Association__Users_And_Sessions_tmp"> | $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    Statistics_View_Year?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    createdAt?: DateTimeFilter<"Association__Users_And_Sessions_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Association__Users_And_Sessions_tmp"> | Date | string
    UserID?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    SessionID?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    Session?: XOR<Sessions_tmpScalarRelationFilter, Sessions_tmpWhereInput>
    User?: XOR<Users_tmpScalarRelationFilter, Users_tmpWhereInput>
  }

  export type Association__Users_And_Sessions_tmpOrderByWithRelationInput = {
    InputType?: SortOrder
    Scores_Visible?: SortOrder
    View?: SortOrder
    View_Month?: SortOrder
    View_Year?: SortOrder
    View_CustomDate?: SortOrder
    Statistics_Show_Border?: SortOrder
    Statistics_View?: SortOrder
    Statistics_View_Month?: SortOrder
    Statistics_View_Year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserID?: SortOrder
    SessionID?: SortOrder
    Session?: Sessions_tmpOrderByWithRelationInput
    User?: Users_tmpOrderByWithRelationInput
  }

  export type Association__Users_And_Sessions_tmpWhereUniqueInput = Prisma.AtLeast<{
    UserID_SessionID?: Association__Users_And_Sessions_tmpUserIDSessionIDCompoundUniqueInput
    AND?: Association__Users_And_Sessions_tmpWhereInput | Association__Users_And_Sessions_tmpWhereInput[]
    OR?: Association__Users_And_Sessions_tmpWhereInput[]
    NOT?: Association__Users_And_Sessions_tmpWhereInput | Association__Users_And_Sessions_tmpWhereInput[]
    InputType?: Enumenum_Association__Users_And_Sessions_InputTypeFilter<"Association__Users_And_Sessions_tmp"> | $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible?: BoolFilter<"Association__Users_And_Sessions_tmp"> | boolean
    View?: Enumenum_Association__Users_And_Sessions_ViewFilter<"Association__Users_And_Sessions_tmp"> | $Enums.enum_Association__Users_And_Sessions_View
    View_Month?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    View_Year?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    View_CustomDate?: DateTimeFilter<"Association__Users_And_Sessions_tmp"> | Date | string
    Statistics_Show_Border?: BoolFilter<"Association__Users_And_Sessions_tmp"> | boolean
    Statistics_View?: Enumenum_Association__Users_And_Sessions_Statistics_ViewFilter<"Association__Users_And_Sessions_tmp"> | $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    Statistics_View_Year?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    createdAt?: DateTimeFilter<"Association__Users_And_Sessions_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Association__Users_And_Sessions_tmp"> | Date | string
    UserID?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    SessionID?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    Session?: XOR<Sessions_tmpScalarRelationFilter, Sessions_tmpWhereInput>
    User?: XOR<Users_tmpScalarRelationFilter, Users_tmpWhereInput>
  }, "UserID_SessionID">

  export type Association__Users_And_Sessions_tmpOrderByWithAggregationInput = {
    InputType?: SortOrder
    Scores_Visible?: SortOrder
    View?: SortOrder
    View_Month?: SortOrder
    View_Year?: SortOrder
    View_CustomDate?: SortOrder
    Statistics_Show_Border?: SortOrder
    Statistics_View?: SortOrder
    Statistics_View_Month?: SortOrder
    Statistics_View_Year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserID?: SortOrder
    SessionID?: SortOrder
    _count?: Association__Users_And_Sessions_tmpCountOrderByAggregateInput
    _avg?: Association__Users_And_Sessions_tmpAvgOrderByAggregateInput
    _max?: Association__Users_And_Sessions_tmpMaxOrderByAggregateInput
    _min?: Association__Users_And_Sessions_tmpMinOrderByAggregateInput
    _sum?: Association__Users_And_Sessions_tmpSumOrderByAggregateInput
  }

  export type Association__Users_And_Sessions_tmpScalarWhereWithAggregatesInput = {
    AND?: Association__Users_And_Sessions_tmpScalarWhereWithAggregatesInput | Association__Users_And_Sessions_tmpScalarWhereWithAggregatesInput[]
    OR?: Association__Users_And_Sessions_tmpScalarWhereWithAggregatesInput[]
    NOT?: Association__Users_And_Sessions_tmpScalarWhereWithAggregatesInput | Association__Users_And_Sessions_tmpScalarWhereWithAggregatesInput[]
    InputType?: Enumenum_Association__Users_And_Sessions_InputTypeWithAggregatesFilter<"Association__Users_And_Sessions_tmp"> | $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible?: BoolWithAggregatesFilter<"Association__Users_And_Sessions_tmp"> | boolean
    View?: Enumenum_Association__Users_And_Sessions_ViewWithAggregatesFilter<"Association__Users_And_Sessions_tmp"> | $Enums.enum_Association__Users_And_Sessions_View
    View_Month?: IntWithAggregatesFilter<"Association__Users_And_Sessions_tmp"> | number
    View_Year?: IntWithAggregatesFilter<"Association__Users_And_Sessions_tmp"> | number
    View_CustomDate?: DateTimeWithAggregatesFilter<"Association__Users_And_Sessions_tmp"> | Date | string
    Statistics_Show_Border?: BoolWithAggregatesFilter<"Association__Users_And_Sessions_tmp"> | boolean
    Statistics_View?: Enumenum_Association__Users_And_Sessions_Statistics_ViewWithAggregatesFilter<"Association__Users_And_Sessions_tmp"> | $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month?: IntWithAggregatesFilter<"Association__Users_And_Sessions_tmp"> | number
    Statistics_View_Year?: IntWithAggregatesFilter<"Association__Users_And_Sessions_tmp"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Association__Users_And_Sessions_tmp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Association__Users_And_Sessions_tmp"> | Date | string
    UserID?: IntWithAggregatesFilter<"Association__Users_And_Sessions_tmp"> | number
    SessionID?: IntWithAggregatesFilter<"Association__Users_And_Sessions_tmp"> | number
  }

  export type Sessions_tmpWhereInput = {
    AND?: Sessions_tmpWhereInput | Sessions_tmpWhereInput[]
    OR?: Sessions_tmpWhereInput[]
    NOT?: Sessions_tmpWhereInput | Sessions_tmpWhereInput[]
    id?: IntFilter<"Sessions_tmp"> | number
    Name?: StringFilter<"Sessions_tmp"> | string
    Color?: StringFilter<"Sessions_tmp"> | string
    Columns?: IntFilter<"Sessions_tmp"> | number
    View_List_Years?: IntNullableListFilter<"Sessions_tmp">
    CurrentGameStart?: DateTimeNullableFilter<"Sessions_tmp"> | Date | string | null
    LastPlayed?: DateTimeFilter<"Sessions_tmp"> | Date | string
    createdAt?: DateTimeFilter<"Sessions_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Sessions_tmp"> | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpListRelationFilter
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpListRelationFilter
    Association__Users_And_Sessions_tmp?: Association__Users_And_Sessions_tmpListRelationFilter
  }

  export type Sessions_tmpOrderByWithRelationInput = {
    id?: SortOrder
    Name?: SortOrder
    Color?: SortOrder
    Columns?: SortOrder
    View_List_Years?: SortOrder
    CurrentGameStart?: SortOrderInput | SortOrder
    LastPlayed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpOrderByRelationAggregateInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpOrderByRelationAggregateInput
    Association__Users_And_Sessions_tmp?: Association__Users_And_Sessions_tmpOrderByRelationAggregateInput
  }

  export type Sessions_tmpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Sessions_tmpWhereInput | Sessions_tmpWhereInput[]
    OR?: Sessions_tmpWhereInput[]
    NOT?: Sessions_tmpWhereInput | Sessions_tmpWhereInput[]
    Name?: StringFilter<"Sessions_tmp"> | string
    Color?: StringFilter<"Sessions_tmp"> | string
    Columns?: IntFilter<"Sessions_tmp"> | number
    View_List_Years?: IntNullableListFilter<"Sessions_tmp">
    CurrentGameStart?: DateTimeNullableFilter<"Sessions_tmp"> | Date | string | null
    LastPlayed?: DateTimeFilter<"Sessions_tmp"> | Date | string
    createdAt?: DateTimeFilter<"Sessions_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Sessions_tmp"> | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpListRelationFilter
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpListRelationFilter
    Association__Users_And_Sessions_tmp?: Association__Users_And_Sessions_tmpListRelationFilter
  }, "id">

  export type Sessions_tmpOrderByWithAggregationInput = {
    id?: SortOrder
    Name?: SortOrder
    Color?: SortOrder
    Columns?: SortOrder
    View_List_Years?: SortOrder
    CurrentGameStart?: SortOrderInput | SortOrder
    LastPlayed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Sessions_tmpCountOrderByAggregateInput
    _avg?: Sessions_tmpAvgOrderByAggregateInput
    _max?: Sessions_tmpMaxOrderByAggregateInput
    _min?: Sessions_tmpMinOrderByAggregateInput
    _sum?: Sessions_tmpSumOrderByAggregateInput
  }

  export type Sessions_tmpScalarWhereWithAggregatesInput = {
    AND?: Sessions_tmpScalarWhereWithAggregatesInput | Sessions_tmpScalarWhereWithAggregatesInput[]
    OR?: Sessions_tmpScalarWhereWithAggregatesInput[]
    NOT?: Sessions_tmpScalarWhereWithAggregatesInput | Sessions_tmpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sessions_tmp"> | number
    Name?: StringWithAggregatesFilter<"Sessions_tmp"> | string
    Color?: StringWithAggregatesFilter<"Sessions_tmp"> | string
    Columns?: IntWithAggregatesFilter<"Sessions_tmp"> | number
    View_List_Years?: IntNullableListFilter<"Sessions_tmp">
    CurrentGameStart?: DateTimeNullableWithAggregatesFilter<"Sessions_tmp"> | Date | string | null
    LastPlayed?: DateTimeWithAggregatesFilter<"Sessions_tmp"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Sessions_tmp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sessions_tmp"> | Date | string
  }

  export type Players_tmpWhereInput = {
    AND?: Players_tmpWhereInput | Players_tmpWhereInput[]
    OR?: Players_tmpWhereInput[]
    NOT?: Players_tmpWhereInput | Players_tmpWhereInput[]
    id?: IntFilter<"Players_tmp"> | number
    Name?: StringFilter<"Players_tmp"> | string
    Color?: StringFilter<"Players_tmp"> | string
    createdAt?: DateTimeFilter<"Players_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Players_tmp"> | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpListRelationFilter
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpListRelationFilter
    Table_Columns_tmp?: Table_Columns_tmpListRelationFilter
  }

  export type Players_tmpOrderByWithRelationInput = {
    id?: SortOrder
    Name?: SortOrder
    Color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpOrderByRelationAggregateInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpOrderByRelationAggregateInput
    Table_Columns_tmp?: Table_Columns_tmpOrderByRelationAggregateInput
  }

  export type Players_tmpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Players_tmpWhereInput | Players_tmpWhereInput[]
    OR?: Players_tmpWhereInput[]
    NOT?: Players_tmpWhereInput | Players_tmpWhereInput[]
    Name?: StringFilter<"Players_tmp"> | string
    Color?: StringFilter<"Players_tmp"> | string
    createdAt?: DateTimeFilter<"Players_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Players_tmp"> | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpListRelationFilter
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpListRelationFilter
    Table_Columns_tmp?: Table_Columns_tmpListRelationFilter
  }, "id">

  export type Players_tmpOrderByWithAggregationInput = {
    id?: SortOrder
    Name?: SortOrder
    Color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Players_tmpCountOrderByAggregateInput
    _avg?: Players_tmpAvgOrderByAggregateInput
    _max?: Players_tmpMaxOrderByAggregateInput
    _min?: Players_tmpMinOrderByAggregateInput
    _sum?: Players_tmpSumOrderByAggregateInput
  }

  export type Players_tmpScalarWhereWithAggregatesInput = {
    AND?: Players_tmpScalarWhereWithAggregatesInput | Players_tmpScalarWhereWithAggregatesInput[]
    OR?: Players_tmpScalarWhereWithAggregatesInput[]
    NOT?: Players_tmpScalarWhereWithAggregatesInput | Players_tmpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Players_tmp"> | number
    Name?: StringWithAggregatesFilter<"Players_tmp"> | string
    Color?: StringWithAggregatesFilter<"Players_tmp"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Players_tmp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Players_tmp"> | Date | string
  }

  export type Table_Columns_tmpWhereInput = {
    AND?: Table_Columns_tmpWhereInput | Table_Columns_tmpWhereInput[]
    OR?: Table_Columns_tmpWhereInput[]
    NOT?: Table_Columns_tmpWhereInput | Table_Columns_tmpWhereInput[]
    id?: IntFilter<"Table_Columns_tmp"> | number
    Column?: IntFilter<"Table_Columns_tmp"> | number
    Upper_Table_1?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_2?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_3?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_4?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_5?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_6?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_Score?: IntFilter<"Table_Columns_tmp"> | number
    Upper_Table_Add35?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_TotalScore?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_1?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_2?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_3?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_4?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_5?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_6?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_7?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_Score?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_TotalScore?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    TotalScore?: IntFilter<"Table_Columns_tmp"> | number
    createdAt?: DateTimeFilter<"Table_Columns_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Table_Columns_tmp"> | Date | string
    PlayerID?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Players_tmp?: XOR<Players_tmpNullableScalarRelationFilter, Players_tmpWhereInput> | null
  }

  export type Table_Columns_tmpOrderByWithRelationInput = {
    id?: SortOrder
    Column?: SortOrder
    Upper_Table_1?: SortOrderInput | SortOrder
    Upper_Table_2?: SortOrderInput | SortOrder
    Upper_Table_3?: SortOrderInput | SortOrder
    Upper_Table_4?: SortOrderInput | SortOrder
    Upper_Table_5?: SortOrderInput | SortOrder
    Upper_Table_6?: SortOrderInput | SortOrder
    Upper_Table_Score?: SortOrder
    Upper_Table_Add35?: SortOrderInput | SortOrder
    Upper_Table_TotalScore?: SortOrderInput | SortOrder
    Bottom_Table_1?: SortOrderInput | SortOrder
    Bottom_Table_2?: SortOrderInput | SortOrder
    Bottom_Table_3?: SortOrderInput | SortOrder
    Bottom_Table_4?: SortOrderInput | SortOrder
    Bottom_Table_5?: SortOrderInput | SortOrder
    Bottom_Table_6?: SortOrderInput | SortOrder
    Bottom_Table_7?: SortOrderInput | SortOrder
    Bottom_Table_Score?: SortOrderInput | SortOrder
    Bottom_Table_TotalScore?: SortOrderInput | SortOrder
    TotalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    PlayerID?: SortOrderInput | SortOrder
    Players_tmp?: Players_tmpOrderByWithRelationInput
  }

  export type Table_Columns_tmpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Table_Columns_tmpWhereInput | Table_Columns_tmpWhereInput[]
    OR?: Table_Columns_tmpWhereInput[]
    NOT?: Table_Columns_tmpWhereInput | Table_Columns_tmpWhereInput[]
    Column?: IntFilter<"Table_Columns_tmp"> | number
    Upper_Table_1?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_2?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_3?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_4?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_5?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_6?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_Score?: IntFilter<"Table_Columns_tmp"> | number
    Upper_Table_Add35?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_TotalScore?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_1?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_2?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_3?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_4?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_5?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_6?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_7?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_Score?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_TotalScore?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    TotalScore?: IntFilter<"Table_Columns_tmp"> | number
    createdAt?: DateTimeFilter<"Table_Columns_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Table_Columns_tmp"> | Date | string
    PlayerID?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Players_tmp?: XOR<Players_tmpNullableScalarRelationFilter, Players_tmpWhereInput> | null
  }, "id">

  export type Table_Columns_tmpOrderByWithAggregationInput = {
    id?: SortOrder
    Column?: SortOrder
    Upper_Table_1?: SortOrderInput | SortOrder
    Upper_Table_2?: SortOrderInput | SortOrder
    Upper_Table_3?: SortOrderInput | SortOrder
    Upper_Table_4?: SortOrderInput | SortOrder
    Upper_Table_5?: SortOrderInput | SortOrder
    Upper_Table_6?: SortOrderInput | SortOrder
    Upper_Table_Score?: SortOrder
    Upper_Table_Add35?: SortOrderInput | SortOrder
    Upper_Table_TotalScore?: SortOrderInput | SortOrder
    Bottom_Table_1?: SortOrderInput | SortOrder
    Bottom_Table_2?: SortOrderInput | SortOrder
    Bottom_Table_3?: SortOrderInput | SortOrder
    Bottom_Table_4?: SortOrderInput | SortOrder
    Bottom_Table_5?: SortOrderInput | SortOrder
    Bottom_Table_6?: SortOrderInput | SortOrder
    Bottom_Table_7?: SortOrderInput | SortOrder
    Bottom_Table_Score?: SortOrderInput | SortOrder
    Bottom_Table_TotalScore?: SortOrderInput | SortOrder
    TotalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    PlayerID?: SortOrderInput | SortOrder
    _count?: Table_Columns_tmpCountOrderByAggregateInput
    _avg?: Table_Columns_tmpAvgOrderByAggregateInput
    _max?: Table_Columns_tmpMaxOrderByAggregateInput
    _min?: Table_Columns_tmpMinOrderByAggregateInput
    _sum?: Table_Columns_tmpSumOrderByAggregateInput
  }

  export type Table_Columns_tmpScalarWhereWithAggregatesInput = {
    AND?: Table_Columns_tmpScalarWhereWithAggregatesInput | Table_Columns_tmpScalarWhereWithAggregatesInput[]
    OR?: Table_Columns_tmpScalarWhereWithAggregatesInput[]
    NOT?: Table_Columns_tmpScalarWhereWithAggregatesInput | Table_Columns_tmpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Table_Columns_tmp"> | number
    Column?: IntWithAggregatesFilter<"Table_Columns_tmp"> | number
    Upper_Table_1?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_2?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_3?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_4?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_5?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_6?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_Score?: IntWithAggregatesFilter<"Table_Columns_tmp"> | number
    Upper_Table_Add35?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_TotalScore?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_1?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_2?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_3?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_4?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_5?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_6?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_7?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_Score?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_TotalScore?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
    TotalScore?: IntWithAggregatesFilter<"Table_Columns_tmp"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Table_Columns_tmp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Table_Columns_tmp"> | Date | string
    PlayerID?: IntNullableWithAggregatesFilter<"Table_Columns_tmp"> | number | null
  }

  export type Table_Archives_tmpWhereInput = {
    AND?: Table_Archives_tmpWhereInput | Table_Archives_tmpWhereInput[]
    OR?: Table_Archives_tmpWhereInput[]
    NOT?: Table_Archives_tmpWhereInput | Table_Archives_tmpWhereInput[]
    id?: IntFilter<"Table_Archives_tmp"> | number
    Table?: JsonNullableListFilter<"Table_Archives_tmp">
    createdAt?: DateTimeFilter<"Table_Archives_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Table_Archives_tmp"> | Date | string
    FinalScoreID?: IntNullableFilter<"Table_Archives_tmp"> | number | null
    FinalScores_tmp?: XOR<FinalScores_tmpNullableScalarRelationFilter, FinalScores_tmpWhereInput> | null
  }

  export type Table_Archives_tmpOrderByWithRelationInput = {
    id?: SortOrder
    Table?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    FinalScoreID?: SortOrderInput | SortOrder
    FinalScores_tmp?: FinalScores_tmpOrderByWithRelationInput
  }

  export type Table_Archives_tmpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Table_Archives_tmpWhereInput | Table_Archives_tmpWhereInput[]
    OR?: Table_Archives_tmpWhereInput[]
    NOT?: Table_Archives_tmpWhereInput | Table_Archives_tmpWhereInput[]
    Table?: JsonNullableListFilter<"Table_Archives_tmp">
    createdAt?: DateTimeFilter<"Table_Archives_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Table_Archives_tmp"> | Date | string
    FinalScoreID?: IntNullableFilter<"Table_Archives_tmp"> | number | null
    FinalScores_tmp?: XOR<FinalScores_tmpNullableScalarRelationFilter, FinalScores_tmpWhereInput> | null
  }, "id">

  export type Table_Archives_tmpOrderByWithAggregationInput = {
    id?: SortOrder
    Table?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    FinalScoreID?: SortOrderInput | SortOrder
    _count?: Table_Archives_tmpCountOrderByAggregateInput
    _avg?: Table_Archives_tmpAvgOrderByAggregateInput
    _max?: Table_Archives_tmpMaxOrderByAggregateInput
    _min?: Table_Archives_tmpMinOrderByAggregateInput
    _sum?: Table_Archives_tmpSumOrderByAggregateInput
  }

  export type Table_Archives_tmpScalarWhereWithAggregatesInput = {
    AND?: Table_Archives_tmpScalarWhereWithAggregatesInput | Table_Archives_tmpScalarWhereWithAggregatesInput[]
    OR?: Table_Archives_tmpScalarWhereWithAggregatesInput[]
    NOT?: Table_Archives_tmpScalarWhereWithAggregatesInput | Table_Archives_tmpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Table_Archives_tmp"> | number
    Table?: JsonNullableListFilter<"Table_Archives_tmp">
    createdAt?: DateTimeWithAggregatesFilter<"Table_Archives_tmp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Table_Archives_tmp"> | Date | string
    FinalScoreID?: IntNullableWithAggregatesFilter<"Table_Archives_tmp"> | number | null
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpWhereInput = {
    AND?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereInput[]
    OR?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput[]
    NOT?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereInput[]
    IsWinner?: BoolFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | boolean
    Score?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__Before?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__After?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__Before_Year?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__After_Year?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__Before_Month?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__After_Month?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__Before_SinceCustomDate?: IntNullableFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number | null
    Wins__After_SinceCustomDate?: IntNullableFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number | null
    createdAt?: DateTimeFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | Date | string
    SessionID?: IntNullableFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number | null
    PlayerID?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    FinalScoreID?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    FinalScores_tmp?: XOR<FinalScores_tmpScalarRelationFilter, FinalScores_tmpWhereInput>
    Sessions_tmp?: XOR<Sessions_tmpNullableScalarRelationFilter, Sessions_tmpWhereInput> | null
    Players_tmp?: XOR<Players_tmpScalarRelationFilter, Players_tmpWhereInput>
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithRelationInput = {
    IsWinner?: SortOrder
    Score?: SortOrder
    Wins__Before?: SortOrder
    Wins__After?: SortOrder
    Wins__Before_Year?: SortOrder
    Wins__After_Year?: SortOrder
    Wins__Before_Month?: SortOrder
    Wins__After_Month?: SortOrder
    Wins__Before_SinceCustomDate?: SortOrderInput | SortOrder
    Wins__After_SinceCustomDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SessionID?: SortOrderInput | SortOrder
    PlayerID?: SortOrder
    FinalScoreID?: SortOrder
    FinalScores_tmp?: FinalScores_tmpOrderByWithRelationInput
    Sessions_tmp?: Sessions_tmpOrderByWithRelationInput
    Players_tmp?: Players_tmpOrderByWithRelationInput
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput = Prisma.AtLeast<{
    PlayerID_FinalScoreID?: Association__Players_And_FinalScores_With_Sessions_tmpPlayerIDFinalScoreIDCompoundUniqueInput
    AND?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereInput[]
    OR?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput[]
    NOT?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereInput[]
    IsWinner?: BoolFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | boolean
    Score?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__Before?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__After?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__Before_Year?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__After_Year?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__Before_Month?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__After_Month?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__Before_SinceCustomDate?: IntNullableFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number | null
    Wins__After_SinceCustomDate?: IntNullableFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number | null
    createdAt?: DateTimeFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | Date | string
    SessionID?: IntNullableFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number | null
    PlayerID?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    FinalScoreID?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    FinalScores_tmp?: XOR<FinalScores_tmpScalarRelationFilter, FinalScores_tmpWhereInput>
    Sessions_tmp?: XOR<Sessions_tmpNullableScalarRelationFilter, Sessions_tmpWhereInput> | null
    Players_tmp?: XOR<Players_tmpScalarRelationFilter, Players_tmpWhereInput>
  }, "PlayerID_FinalScoreID">

  export type Association__Players_And_FinalScores_With_Sessions_tmpOrderByWithAggregationInput = {
    IsWinner?: SortOrder
    Score?: SortOrder
    Wins__Before?: SortOrder
    Wins__After?: SortOrder
    Wins__Before_Year?: SortOrder
    Wins__After_Year?: SortOrder
    Wins__Before_Month?: SortOrder
    Wins__After_Month?: SortOrder
    Wins__Before_SinceCustomDate?: SortOrderInput | SortOrder
    Wins__After_SinceCustomDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SessionID?: SortOrderInput | SortOrder
    PlayerID?: SortOrder
    FinalScoreID?: SortOrder
    _count?: Association__Players_And_FinalScores_With_Sessions_tmpCountOrderByAggregateInput
    _avg?: Association__Players_And_FinalScores_With_Sessions_tmpAvgOrderByAggregateInput
    _max?: Association__Players_And_FinalScores_With_Sessions_tmpMaxOrderByAggregateInput
    _min?: Association__Players_And_FinalScores_With_Sessions_tmpMinOrderByAggregateInput
    _sum?: Association__Players_And_FinalScores_With_Sessions_tmpSumOrderByAggregateInput
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereWithAggregatesInput = {
    AND?: Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereWithAggregatesInput | Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereWithAggregatesInput[]
    OR?: Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereWithAggregatesInput[]
    NOT?: Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereWithAggregatesInput | Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereWithAggregatesInput[]
    IsWinner?: BoolWithAggregatesFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | boolean
    Score?: IntWithAggregatesFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__Before?: IntWithAggregatesFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__After?: IntWithAggregatesFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__Before_Year?: IntWithAggregatesFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__After_Year?: IntWithAggregatesFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__Before_Month?: IntWithAggregatesFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__After_Month?: IntWithAggregatesFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__Before_SinceCustomDate?: IntNullableWithAggregatesFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number | null
    Wins__After_SinceCustomDate?: IntNullableWithAggregatesFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | Date | string
    SessionID?: IntNullableWithAggregatesFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number | null
    PlayerID?: IntWithAggregatesFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    FinalScoreID?: IntWithAggregatesFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
  }

  export type Association__Sessions_And_Players_tmpWhereInput = {
    AND?: Association__Sessions_And_Players_tmpWhereInput | Association__Sessions_And_Players_tmpWhereInput[]
    OR?: Association__Sessions_And_Players_tmpWhereInput[]
    NOT?: Association__Sessions_And_Players_tmpWhereInput | Association__Sessions_And_Players_tmpWhereInput[]
    Gnadenwurf_Used?: BoolFilter<"Association__Sessions_And_Players_tmp"> | boolean
    Order_Index?: IntFilter<"Association__Sessions_And_Players_tmp"> | number
    createdAt?: DateTimeFilter<"Association__Sessions_And_Players_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Association__Sessions_And_Players_tmp"> | Date | string
    SessionID?: IntFilter<"Association__Sessions_And_Players_tmp"> | number
    PlayerID?: IntFilter<"Association__Sessions_And_Players_tmp"> | number
    Players_tmp?: XOR<Players_tmpScalarRelationFilter, Players_tmpWhereInput>
    Sessions_tmp?: XOR<Sessions_tmpScalarRelationFilter, Sessions_tmpWhereInput>
  }

  export type Association__Sessions_And_Players_tmpOrderByWithRelationInput = {
    Gnadenwurf_Used?: SortOrder
    Order_Index?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SessionID?: SortOrder
    PlayerID?: SortOrder
    Players_tmp?: Players_tmpOrderByWithRelationInput
    Sessions_tmp?: Sessions_tmpOrderByWithRelationInput
  }

  export type Association__Sessions_And_Players_tmpWhereUniqueInput = Prisma.AtLeast<{
    SessionID_PlayerID?: Association__Sessions_And_Players_tmpSessionIDPlayerIDCompoundUniqueInput
    AND?: Association__Sessions_And_Players_tmpWhereInput | Association__Sessions_And_Players_tmpWhereInput[]
    OR?: Association__Sessions_And_Players_tmpWhereInput[]
    NOT?: Association__Sessions_And_Players_tmpWhereInput | Association__Sessions_And_Players_tmpWhereInput[]
    Gnadenwurf_Used?: BoolFilter<"Association__Sessions_And_Players_tmp"> | boolean
    Order_Index?: IntFilter<"Association__Sessions_And_Players_tmp"> | number
    createdAt?: DateTimeFilter<"Association__Sessions_And_Players_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Association__Sessions_And_Players_tmp"> | Date | string
    SessionID?: IntFilter<"Association__Sessions_And_Players_tmp"> | number
    PlayerID?: IntFilter<"Association__Sessions_And_Players_tmp"> | number
    Players_tmp?: XOR<Players_tmpScalarRelationFilter, Players_tmpWhereInput>
    Sessions_tmp?: XOR<Sessions_tmpScalarRelationFilter, Sessions_tmpWhereInput>
  }, "SessionID_PlayerID">

  export type Association__Sessions_And_Players_tmpOrderByWithAggregationInput = {
    Gnadenwurf_Used?: SortOrder
    Order_Index?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SessionID?: SortOrder
    PlayerID?: SortOrder
    _count?: Association__Sessions_And_Players_tmpCountOrderByAggregateInput
    _avg?: Association__Sessions_And_Players_tmpAvgOrderByAggregateInput
    _max?: Association__Sessions_And_Players_tmpMaxOrderByAggregateInput
    _min?: Association__Sessions_And_Players_tmpMinOrderByAggregateInput
    _sum?: Association__Sessions_And_Players_tmpSumOrderByAggregateInput
  }

  export type Association__Sessions_And_Players_tmpScalarWhereWithAggregatesInput = {
    AND?: Association__Sessions_And_Players_tmpScalarWhereWithAggregatesInput | Association__Sessions_And_Players_tmpScalarWhereWithAggregatesInput[]
    OR?: Association__Sessions_And_Players_tmpScalarWhereWithAggregatesInput[]
    NOT?: Association__Sessions_And_Players_tmpScalarWhereWithAggregatesInput | Association__Sessions_And_Players_tmpScalarWhereWithAggregatesInput[]
    Gnadenwurf_Used?: BoolWithAggregatesFilter<"Association__Sessions_And_Players_tmp"> | boolean
    Order_Index?: IntWithAggregatesFilter<"Association__Sessions_And_Players_tmp"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Association__Sessions_And_Players_tmp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Association__Sessions_And_Players_tmp"> | Date | string
    SessionID?: IntWithAggregatesFilter<"Association__Sessions_And_Players_tmp"> | number
    PlayerID?: IntWithAggregatesFilter<"Association__Sessions_And_Players_tmp"> | number
  }

  export type FinalScores_tmpWhereInput = {
    AND?: FinalScores_tmpWhereInput | FinalScores_tmpWhereInput[]
    OR?: FinalScores_tmpWhereInput[]
    NOT?: FinalScores_tmpWhereInput | FinalScores_tmpWhereInput[]
    id?: IntFilter<"FinalScores_tmp"> | number
    Start?: DateTimeFilter<"FinalScores_tmp"> | Date | string
    End?: DateTimeFilter<"FinalScores_tmp"> | Date | string
    Columns?: IntFilter<"FinalScores_tmp"> | number
    Surrendered?: BoolFilter<"FinalScores_tmp"> | boolean
    createdAt?: DateTimeFilter<"FinalScores_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"FinalScores_tmp"> | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpListRelationFilter
    Table_Archives_tmp?: Table_Archives_tmpListRelationFilter
  }

  export type FinalScores_tmpOrderByWithRelationInput = {
    id?: SortOrder
    Start?: SortOrder
    End?: SortOrder
    Columns?: SortOrder
    Surrendered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpOrderByRelationAggregateInput
    Table_Archives_tmp?: Table_Archives_tmpOrderByRelationAggregateInput
  }

  export type FinalScores_tmpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FinalScores_tmpWhereInput | FinalScores_tmpWhereInput[]
    OR?: FinalScores_tmpWhereInput[]
    NOT?: FinalScores_tmpWhereInput | FinalScores_tmpWhereInput[]
    Start?: DateTimeFilter<"FinalScores_tmp"> | Date | string
    End?: DateTimeFilter<"FinalScores_tmp"> | Date | string
    Columns?: IntFilter<"FinalScores_tmp"> | number
    Surrendered?: BoolFilter<"FinalScores_tmp"> | boolean
    createdAt?: DateTimeFilter<"FinalScores_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"FinalScores_tmp"> | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpListRelationFilter
    Table_Archives_tmp?: Table_Archives_tmpListRelationFilter
  }, "id">

  export type FinalScores_tmpOrderByWithAggregationInput = {
    id?: SortOrder
    Start?: SortOrder
    End?: SortOrder
    Columns?: SortOrder
    Surrendered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FinalScores_tmpCountOrderByAggregateInput
    _avg?: FinalScores_tmpAvgOrderByAggregateInput
    _max?: FinalScores_tmpMaxOrderByAggregateInput
    _min?: FinalScores_tmpMinOrderByAggregateInput
    _sum?: FinalScores_tmpSumOrderByAggregateInput
  }

  export type FinalScores_tmpScalarWhereWithAggregatesInput = {
    AND?: FinalScores_tmpScalarWhereWithAggregatesInput | FinalScores_tmpScalarWhereWithAggregatesInput[]
    OR?: FinalScores_tmpScalarWhereWithAggregatesInput[]
    NOT?: FinalScores_tmpScalarWhereWithAggregatesInput | FinalScores_tmpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FinalScores_tmp"> | number
    Start?: DateTimeWithAggregatesFilter<"FinalScores_tmp"> | Date | string
    End?: DateTimeWithAggregatesFilter<"FinalScores_tmp"> | Date | string
    Columns?: IntWithAggregatesFilter<"FinalScores_tmp"> | number
    Surrendered?: BoolWithAggregatesFilter<"FinalScores_tmp"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FinalScores_tmp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FinalScores_tmp"> | Date | string
  }

  export type Users_tmpCreateInput = {
    Name: string
    Password: string
    RefreshToken?: string | null
    DarkMode: boolean
    Show_Session_Names: boolean
    Show_Session_Date: boolean
    View_Sessions: $Enums.enum_Users_View_Sessions
    View_Sessions_Desc: boolean
    Statistics_View: $Enums.enum_Users_Statistics_View
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: Date | string
    updatedAt?: Date | string
    List___Association__Users_And_Sessions?: Association__Users_And_Sessions_tmpCreateNestedManyWithoutUserInput
  }

  export type Users_tmpUncheckedCreateInput = {
    id?: number
    Name: string
    Password: string
    RefreshToken?: string | null
    DarkMode: boolean
    Show_Session_Names: boolean
    Show_Session_Date: boolean
    View_Sessions: $Enums.enum_Users_View_Sessions
    View_Sessions_Desc: boolean
    Statistics_View: $Enums.enum_Users_Statistics_View
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: Date | string
    updatedAt?: Date | string
    List___Association__Users_And_Sessions?: Association__Users_And_Sessions_tmpUncheckedCreateNestedManyWithoutUserInput
  }

  export type Users_tmpUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    RefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    DarkMode?: BoolFieldUpdateOperationsInput | boolean
    Show_Session_Names?: BoolFieldUpdateOperationsInput | boolean
    Show_Session_Date?: BoolFieldUpdateOperationsInput | boolean
    View_Sessions?: Enumenum_Users_View_SessionsFieldUpdateOperationsInput | $Enums.enum_Users_View_Sessions
    View_Sessions_Desc?: BoolFieldUpdateOperationsInput | boolean
    Statistics_View?: Enumenum_Users_Statistics_ViewFieldUpdateOperationsInput | $Enums.enum_Users_Statistics_View
    Statistics_View_Month?: IntFieldUpdateOperationsInput | number
    Statistics_View_Year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    List___Association__Users_And_Sessions?: Association__Users_And_Sessions_tmpUpdateManyWithoutUserNestedInput
  }

  export type Users_tmpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    RefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    DarkMode?: BoolFieldUpdateOperationsInput | boolean
    Show_Session_Names?: BoolFieldUpdateOperationsInput | boolean
    Show_Session_Date?: BoolFieldUpdateOperationsInput | boolean
    View_Sessions?: Enumenum_Users_View_SessionsFieldUpdateOperationsInput | $Enums.enum_Users_View_Sessions
    View_Sessions_Desc?: BoolFieldUpdateOperationsInput | boolean
    Statistics_View?: Enumenum_Users_Statistics_ViewFieldUpdateOperationsInput | $Enums.enum_Users_Statistics_View
    Statistics_View_Month?: IntFieldUpdateOperationsInput | number
    Statistics_View_Year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    List___Association__Users_And_Sessions?: Association__Users_And_Sessions_tmpUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Users_tmpCreateManyInput = {
    id?: number
    Name: string
    Password: string
    RefreshToken?: string | null
    DarkMode: boolean
    Show_Session_Names: boolean
    Show_Session_Date: boolean
    View_Sessions: $Enums.enum_Users_View_Sessions
    View_Sessions_Desc: boolean
    Statistics_View: $Enums.enum_Users_Statistics_View
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type Users_tmpUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    RefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    DarkMode?: BoolFieldUpdateOperationsInput | boolean
    Show_Session_Names?: BoolFieldUpdateOperationsInput | boolean
    Show_Session_Date?: BoolFieldUpdateOperationsInput | boolean
    View_Sessions?: Enumenum_Users_View_SessionsFieldUpdateOperationsInput | $Enums.enum_Users_View_Sessions
    View_Sessions_Desc?: BoolFieldUpdateOperationsInput | boolean
    Statistics_View?: Enumenum_Users_Statistics_ViewFieldUpdateOperationsInput | $Enums.enum_Users_Statistics_View
    Statistics_View_Month?: IntFieldUpdateOperationsInput | number
    Statistics_View_Year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Users_tmpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    RefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    DarkMode?: BoolFieldUpdateOperationsInput | boolean
    Show_Session_Names?: BoolFieldUpdateOperationsInput | boolean
    Show_Session_Date?: BoolFieldUpdateOperationsInput | boolean
    View_Sessions?: Enumenum_Users_View_SessionsFieldUpdateOperationsInput | $Enums.enum_Users_View_Sessions
    View_Sessions_Desc?: BoolFieldUpdateOperationsInput | boolean
    Statistics_View?: Enumenum_Users_Statistics_ViewFieldUpdateOperationsInput | $Enums.enum_Users_Statistics_View
    Statistics_View_Month?: IntFieldUpdateOperationsInput | number
    Statistics_View_Year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Association__Users_And_Sessions_tmpCreateInput = {
    InputType: $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible: boolean
    View: $Enums.enum_Association__Users_And_Sessions_View
    View_Month: number
    View_Year: number
    View_CustomDate: Date | string
    Statistics_Show_Border: boolean
    Statistics_View: $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: Date | string
    updatedAt: Date | string
    Session: Sessions_tmpCreateNestedOneWithoutAssociation__Users_And_Sessions_tmpInput
    User: Users_tmpCreateNestedOneWithoutList___Association__Users_And_SessionsInput
  }

  export type Association__Users_And_Sessions_tmpUncheckedCreateInput = {
    InputType: $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible: boolean
    View: $Enums.enum_Association__Users_And_Sessions_View
    View_Month: number
    View_Year: number
    View_CustomDate: Date | string
    Statistics_Show_Border: boolean
    Statistics_View: $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: Date | string
    updatedAt: Date | string
    UserID: number
    SessionID: number
  }

  export type Association__Users_And_Sessions_tmpUpdateInput = {
    InputType?: Enumenum_Association__Users_And_Sessions_InputTypeFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible?: BoolFieldUpdateOperationsInput | boolean
    View?: Enumenum_Association__Users_And_Sessions_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_View
    View_Month?: IntFieldUpdateOperationsInput | number
    View_Year?: IntFieldUpdateOperationsInput | number
    View_CustomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Statistics_Show_Border?: BoolFieldUpdateOperationsInput | boolean
    Statistics_View?: Enumenum_Association__Users_And_Sessions_Statistics_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month?: IntFieldUpdateOperationsInput | number
    Statistics_View_Year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Session?: Sessions_tmpUpdateOneRequiredWithoutAssociation__Users_And_Sessions_tmpNestedInput
    User?: Users_tmpUpdateOneRequiredWithoutList___Association__Users_And_SessionsNestedInput
  }

  export type Association__Users_And_Sessions_tmpUncheckedUpdateInput = {
    InputType?: Enumenum_Association__Users_And_Sessions_InputTypeFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible?: BoolFieldUpdateOperationsInput | boolean
    View?: Enumenum_Association__Users_And_Sessions_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_View
    View_Month?: IntFieldUpdateOperationsInput | number
    View_Year?: IntFieldUpdateOperationsInput | number
    View_CustomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Statistics_Show_Border?: BoolFieldUpdateOperationsInput | boolean
    Statistics_View?: Enumenum_Association__Users_And_Sessions_Statistics_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month?: IntFieldUpdateOperationsInput | number
    Statistics_View_Year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserID?: IntFieldUpdateOperationsInput | number
    SessionID?: IntFieldUpdateOperationsInput | number
  }

  export type Association__Users_And_Sessions_tmpCreateManyInput = {
    InputType: $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible: boolean
    View: $Enums.enum_Association__Users_And_Sessions_View
    View_Month: number
    View_Year: number
    View_CustomDate: Date | string
    Statistics_Show_Border: boolean
    Statistics_View: $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: Date | string
    updatedAt: Date | string
    UserID: number
    SessionID: number
  }

  export type Association__Users_And_Sessions_tmpUpdateManyMutationInput = {
    InputType?: Enumenum_Association__Users_And_Sessions_InputTypeFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible?: BoolFieldUpdateOperationsInput | boolean
    View?: Enumenum_Association__Users_And_Sessions_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_View
    View_Month?: IntFieldUpdateOperationsInput | number
    View_Year?: IntFieldUpdateOperationsInput | number
    View_CustomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Statistics_Show_Border?: BoolFieldUpdateOperationsInput | boolean
    Statistics_View?: Enumenum_Association__Users_And_Sessions_Statistics_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month?: IntFieldUpdateOperationsInput | number
    Statistics_View_Year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Association__Users_And_Sessions_tmpUncheckedUpdateManyInput = {
    InputType?: Enumenum_Association__Users_And_Sessions_InputTypeFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible?: BoolFieldUpdateOperationsInput | boolean
    View?: Enumenum_Association__Users_And_Sessions_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_View
    View_Month?: IntFieldUpdateOperationsInput | number
    View_Year?: IntFieldUpdateOperationsInput | number
    View_CustomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Statistics_Show_Border?: BoolFieldUpdateOperationsInput | boolean
    Statistics_View?: Enumenum_Association__Users_And_Sessions_Statistics_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month?: IntFieldUpdateOperationsInput | number
    Statistics_View_Year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserID?: IntFieldUpdateOperationsInput | number
    SessionID?: IntFieldUpdateOperationsInput | number
  }

  export type Sessions_tmpCreateInput = {
    Name: string
    Color: string
    Columns: number
    View_List_Years?: Sessions_tmpCreateView_List_YearsInput | number[]
    CurrentGameStart?: Date | string | null
    LastPlayed: Date | string
    createdAt: Date | string
    updatedAt?: Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpCreateNestedManyWithoutSessions_tmpInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpCreateNestedManyWithoutSessions_tmpInput
    Association__Users_And_Sessions_tmp?: Association__Users_And_Sessions_tmpCreateNestedManyWithoutSessionInput
  }

  export type Sessions_tmpUncheckedCreateInput = {
    id?: number
    Name: string
    Color: string
    Columns: number
    View_List_Years?: Sessions_tmpCreateView_List_YearsInput | number[]
    CurrentGameStart?: Date | string | null
    LastPlayed: Date | string
    createdAt: Date | string
    updatedAt?: Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateNestedManyWithoutSessions_tmpInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUncheckedCreateNestedManyWithoutSessions_tmpInput
    Association__Users_And_Sessions_tmp?: Association__Users_And_Sessions_tmpUncheckedCreateNestedManyWithoutSessionInput
  }

  export type Sessions_tmpUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    Columns?: IntFieldUpdateOperationsInput | number
    View_List_Years?: Sessions_tmpUpdateView_List_YearsInput | number[]
    CurrentGameStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithoutSessions_tmpNestedInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUpdateManyWithoutSessions_tmpNestedInput
    Association__Users_And_Sessions_tmp?: Association__Users_And_Sessions_tmpUpdateManyWithoutSessionNestedInput
  }

  export type Sessions_tmpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    Columns?: IntFieldUpdateOperationsInput | number
    View_List_Years?: Sessions_tmpUpdateView_List_YearsInput | number[]
    CurrentGameStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutSessions_tmpNestedInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUncheckedUpdateManyWithoutSessions_tmpNestedInput
    Association__Users_And_Sessions_tmp?: Association__Users_And_Sessions_tmpUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type Sessions_tmpCreateManyInput = {
    id?: number
    Name: string
    Color: string
    Columns: number
    View_List_Years?: Sessions_tmpCreateView_List_YearsInput | number[]
    CurrentGameStart?: Date | string | null
    LastPlayed: Date | string
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type Sessions_tmpUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    Columns?: IntFieldUpdateOperationsInput | number
    View_List_Years?: Sessions_tmpUpdateView_List_YearsInput | number[]
    CurrentGameStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Sessions_tmpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    Columns?: IntFieldUpdateOperationsInput | number
    View_List_Years?: Sessions_tmpUpdateView_List_YearsInput | number[]
    CurrentGameStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Players_tmpCreateInput = {
    Name: string
    Color: string
    createdAt: Date | string
    updatedAt?: Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpCreateNestedManyWithoutPlayers_tmpInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpCreateNestedManyWithoutPlayers_tmpInput
    Table_Columns_tmp?: Table_Columns_tmpCreateNestedManyWithoutPlayers_tmpInput
  }

  export type Players_tmpUncheckedCreateInput = {
    id?: number
    Name: string
    Color: string
    createdAt: Date | string
    updatedAt?: Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateNestedManyWithoutPlayers_tmpInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUncheckedCreateNestedManyWithoutPlayers_tmpInput
    Table_Columns_tmp?: Table_Columns_tmpUncheckedCreateNestedManyWithoutPlayers_tmpInput
  }

  export type Players_tmpUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithoutPlayers_tmpNestedInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUpdateManyWithoutPlayers_tmpNestedInput
    Table_Columns_tmp?: Table_Columns_tmpUpdateManyWithoutPlayers_tmpNestedInput
  }

  export type Players_tmpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutPlayers_tmpNestedInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUncheckedUpdateManyWithoutPlayers_tmpNestedInput
    Table_Columns_tmp?: Table_Columns_tmpUncheckedUpdateManyWithoutPlayers_tmpNestedInput
  }

  export type Players_tmpCreateManyInput = {
    id?: number
    Name: string
    Color: string
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type Players_tmpUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Players_tmpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Table_Columns_tmpCreateInput = {
    Column: number
    Upper_Table_1?: number | null
    Upper_Table_2?: number | null
    Upper_Table_3?: number | null
    Upper_Table_4?: number | null
    Upper_Table_5?: number | null
    Upper_Table_6?: number | null
    Upper_Table_Score: number
    Upper_Table_Add35?: number | null
    Upper_Table_TotalScore?: number | null
    Bottom_Table_1?: number | null
    Bottom_Table_2?: number | null
    Bottom_Table_3?: number | null
    Bottom_Table_4?: number | null
    Bottom_Table_5?: number | null
    Bottom_Table_6?: number | null
    Bottom_Table_7?: number | null
    Bottom_Table_Score?: number | null
    Bottom_Table_TotalScore?: number | null
    TotalScore: number
    createdAt: Date | string
    updatedAt?: Date | string
    Players_tmp?: Players_tmpCreateNestedOneWithoutTable_Columns_tmpInput
  }

  export type Table_Columns_tmpUncheckedCreateInput = {
    id?: number
    Column: number
    Upper_Table_1?: number | null
    Upper_Table_2?: number | null
    Upper_Table_3?: number | null
    Upper_Table_4?: number | null
    Upper_Table_5?: number | null
    Upper_Table_6?: number | null
    Upper_Table_Score: number
    Upper_Table_Add35?: number | null
    Upper_Table_TotalScore?: number | null
    Bottom_Table_1?: number | null
    Bottom_Table_2?: number | null
    Bottom_Table_3?: number | null
    Bottom_Table_4?: number | null
    Bottom_Table_5?: number | null
    Bottom_Table_6?: number | null
    Bottom_Table_7?: number | null
    Bottom_Table_Score?: number | null
    Bottom_Table_TotalScore?: number | null
    TotalScore: number
    createdAt: Date | string
    updatedAt?: Date | string
    PlayerID?: number | null
  }

  export type Table_Columns_tmpUpdateInput = {
    Column?: IntFieldUpdateOperationsInput | number
    Upper_Table_1?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_2?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_3?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_4?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_5?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_6?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_Score?: IntFieldUpdateOperationsInput | number
    Upper_Table_Add35?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_TotalScore?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_1?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_2?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_3?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_4?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_5?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_6?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_7?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_Score?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_TotalScore?: NullableIntFieldUpdateOperationsInput | number | null
    TotalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Players_tmp?: Players_tmpUpdateOneWithoutTable_Columns_tmpNestedInput
  }

  export type Table_Columns_tmpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Column?: IntFieldUpdateOperationsInput | number
    Upper_Table_1?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_2?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_3?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_4?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_5?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_6?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_Score?: IntFieldUpdateOperationsInput | number
    Upper_Table_Add35?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_TotalScore?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_1?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_2?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_3?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_4?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_5?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_6?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_7?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_Score?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_TotalScore?: NullableIntFieldUpdateOperationsInput | number | null
    TotalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Table_Columns_tmpCreateManyInput = {
    id?: number
    Column: number
    Upper_Table_1?: number | null
    Upper_Table_2?: number | null
    Upper_Table_3?: number | null
    Upper_Table_4?: number | null
    Upper_Table_5?: number | null
    Upper_Table_6?: number | null
    Upper_Table_Score: number
    Upper_Table_Add35?: number | null
    Upper_Table_TotalScore?: number | null
    Bottom_Table_1?: number | null
    Bottom_Table_2?: number | null
    Bottom_Table_3?: number | null
    Bottom_Table_4?: number | null
    Bottom_Table_5?: number | null
    Bottom_Table_6?: number | null
    Bottom_Table_7?: number | null
    Bottom_Table_Score?: number | null
    Bottom_Table_TotalScore?: number | null
    TotalScore: number
    createdAt: Date | string
    updatedAt?: Date | string
    PlayerID?: number | null
  }

  export type Table_Columns_tmpUpdateManyMutationInput = {
    Column?: IntFieldUpdateOperationsInput | number
    Upper_Table_1?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_2?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_3?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_4?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_5?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_6?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_Score?: IntFieldUpdateOperationsInput | number
    Upper_Table_Add35?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_TotalScore?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_1?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_2?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_3?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_4?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_5?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_6?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_7?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_Score?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_TotalScore?: NullableIntFieldUpdateOperationsInput | number | null
    TotalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Table_Columns_tmpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Column?: IntFieldUpdateOperationsInput | number
    Upper_Table_1?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_2?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_3?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_4?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_5?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_6?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_Score?: IntFieldUpdateOperationsInput | number
    Upper_Table_Add35?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_TotalScore?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_1?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_2?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_3?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_4?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_5?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_6?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_7?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_Score?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_TotalScore?: NullableIntFieldUpdateOperationsInput | number | null
    TotalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Table_Archives_tmpCreateInput = {
    Table?: Table_Archives_tmpCreateTableInput | InputJsonValue[]
    createdAt: Date | string
    updatedAt?: Date | string
    FinalScores_tmp?: FinalScores_tmpCreateNestedOneWithoutTable_Archives_tmpInput
  }

  export type Table_Archives_tmpUncheckedCreateInput = {
    id?: number
    Table?: Table_Archives_tmpCreateTableInput | InputJsonValue[]
    createdAt: Date | string
    updatedAt?: Date | string
    FinalScoreID?: number | null
  }

  export type Table_Archives_tmpUpdateInput = {
    Table?: Table_Archives_tmpUpdateTableInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinalScores_tmp?: FinalScores_tmpUpdateOneWithoutTable_Archives_tmpNestedInput
  }

  export type Table_Archives_tmpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Table?: Table_Archives_tmpUpdateTableInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinalScoreID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Table_Archives_tmpCreateManyInput = {
    id?: number
    Table?: Table_Archives_tmpCreateTableInput | InputJsonValue[]
    createdAt: Date | string
    updatedAt?: Date | string
    FinalScoreID?: number | null
  }

  export type Table_Archives_tmpUpdateManyMutationInput = {
    Table?: Table_Archives_tmpUpdateTableInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Table_Archives_tmpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Table?: Table_Archives_tmpUpdateTableInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinalScoreID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateInput = {
    IsWinner: boolean
    Score: number
    Wins__Before: number
    Wins__After: number
    Wins__Before_Year: number
    Wins__After_Year: number
    Wins__Before_Month: number
    Wins__After_Month: number
    Wins__Before_SinceCustomDate?: number | null
    Wins__After_SinceCustomDate?: number | null
    createdAt: Date | string
    updatedAt: Date | string
    FinalScores_tmp: FinalScores_tmpCreateNestedOneWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
    Sessions_tmp?: Sessions_tmpCreateNestedOneWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
    Players_tmp: Players_tmpCreateNestedOneWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateInput = {
    IsWinner: boolean
    Score: number
    Wins__Before: number
    Wins__After: number
    Wins__Before_Year: number
    Wins__After_Year: number
    Wins__Before_Month: number
    Wins__After_Month: number
    Wins__Before_SinceCustomDate?: number | null
    Wins__After_SinceCustomDate?: number | null
    createdAt: Date | string
    updatedAt: Date | string
    SessionID?: number | null
    PlayerID: number
    FinalScoreID: number
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateInput = {
    IsWinner?: BoolFieldUpdateOperationsInput | boolean
    Score?: IntFieldUpdateOperationsInput | number
    Wins__Before?: IntFieldUpdateOperationsInput | number
    Wins__After?: IntFieldUpdateOperationsInput | number
    Wins__Before_Year?: IntFieldUpdateOperationsInput | number
    Wins__After_Year?: IntFieldUpdateOperationsInput | number
    Wins__Before_Month?: IntFieldUpdateOperationsInput | number
    Wins__After_Month?: IntFieldUpdateOperationsInput | number
    Wins__Before_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    Wins__After_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinalScores_tmp?: FinalScores_tmpUpdateOneRequiredWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpNestedInput
    Sessions_tmp?: Sessions_tmpUpdateOneWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpNestedInput
    Players_tmp?: Players_tmpUpdateOneRequiredWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpNestedInput
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateInput = {
    IsWinner?: BoolFieldUpdateOperationsInput | boolean
    Score?: IntFieldUpdateOperationsInput | number
    Wins__Before?: IntFieldUpdateOperationsInput | number
    Wins__After?: IntFieldUpdateOperationsInput | number
    Wins__Before_Year?: IntFieldUpdateOperationsInput | number
    Wins__After_Year?: IntFieldUpdateOperationsInput | number
    Wins__Before_Month?: IntFieldUpdateOperationsInput | number
    Wins__After_Month?: IntFieldUpdateOperationsInput | number
    Wins__Before_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    Wins__After_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SessionID?: NullableIntFieldUpdateOperationsInput | number | null
    PlayerID?: IntFieldUpdateOperationsInput | number
    FinalScoreID?: IntFieldUpdateOperationsInput | number
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateManyInput = {
    IsWinner: boolean
    Score: number
    Wins__Before: number
    Wins__After: number
    Wins__Before_Year: number
    Wins__After_Year: number
    Wins__Before_Month: number
    Wins__After_Month: number
    Wins__Before_SinceCustomDate?: number | null
    Wins__After_SinceCustomDate?: number | null
    createdAt: Date | string
    updatedAt: Date | string
    SessionID?: number | null
    PlayerID: number
    FinalScoreID: number
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyMutationInput = {
    IsWinner?: BoolFieldUpdateOperationsInput | boolean
    Score?: IntFieldUpdateOperationsInput | number
    Wins__Before?: IntFieldUpdateOperationsInput | number
    Wins__After?: IntFieldUpdateOperationsInput | number
    Wins__Before_Year?: IntFieldUpdateOperationsInput | number
    Wins__After_Year?: IntFieldUpdateOperationsInput | number
    Wins__Before_Month?: IntFieldUpdateOperationsInput | number
    Wins__After_Month?: IntFieldUpdateOperationsInput | number
    Wins__Before_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    Wins__After_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyInput = {
    IsWinner?: BoolFieldUpdateOperationsInput | boolean
    Score?: IntFieldUpdateOperationsInput | number
    Wins__Before?: IntFieldUpdateOperationsInput | number
    Wins__After?: IntFieldUpdateOperationsInput | number
    Wins__Before_Year?: IntFieldUpdateOperationsInput | number
    Wins__After_Year?: IntFieldUpdateOperationsInput | number
    Wins__Before_Month?: IntFieldUpdateOperationsInput | number
    Wins__After_Month?: IntFieldUpdateOperationsInput | number
    Wins__Before_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    Wins__After_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SessionID?: NullableIntFieldUpdateOperationsInput | number | null
    PlayerID?: IntFieldUpdateOperationsInput | number
    FinalScoreID?: IntFieldUpdateOperationsInput | number
  }

  export type Association__Sessions_And_Players_tmpCreateInput = {
    Gnadenwurf_Used: boolean
    Order_Index: number
    createdAt: Date | string
    updatedAt: Date | string
    Players_tmp: Players_tmpCreateNestedOneWithoutAssociation__Sessions_And_Players_tmpInput
    Sessions_tmp: Sessions_tmpCreateNestedOneWithoutAssociation__Sessions_And_Players_tmpInput
  }

  export type Association__Sessions_And_Players_tmpUncheckedCreateInput = {
    Gnadenwurf_Used: boolean
    Order_Index: number
    createdAt: Date | string
    updatedAt: Date | string
    SessionID: number
    PlayerID: number
  }

  export type Association__Sessions_And_Players_tmpUpdateInput = {
    Gnadenwurf_Used?: BoolFieldUpdateOperationsInput | boolean
    Order_Index?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Players_tmp?: Players_tmpUpdateOneRequiredWithoutAssociation__Sessions_And_Players_tmpNestedInput
    Sessions_tmp?: Sessions_tmpUpdateOneRequiredWithoutAssociation__Sessions_And_Players_tmpNestedInput
  }

  export type Association__Sessions_And_Players_tmpUncheckedUpdateInput = {
    Gnadenwurf_Used?: BoolFieldUpdateOperationsInput | boolean
    Order_Index?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SessionID?: IntFieldUpdateOperationsInput | number
    PlayerID?: IntFieldUpdateOperationsInput | number
  }

  export type Association__Sessions_And_Players_tmpCreateManyInput = {
    Gnadenwurf_Used: boolean
    Order_Index: number
    createdAt: Date | string
    updatedAt: Date | string
    SessionID: number
    PlayerID: number
  }

  export type Association__Sessions_And_Players_tmpUpdateManyMutationInput = {
    Gnadenwurf_Used?: BoolFieldUpdateOperationsInput | boolean
    Order_Index?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Association__Sessions_And_Players_tmpUncheckedUpdateManyInput = {
    Gnadenwurf_Used?: BoolFieldUpdateOperationsInput | boolean
    Order_Index?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SessionID?: IntFieldUpdateOperationsInput | number
    PlayerID?: IntFieldUpdateOperationsInput | number
  }

  export type FinalScores_tmpCreateInput = {
    Start: Date | string
    End: Date | string
    Columns: number
    Surrendered: boolean
    createdAt: Date | string
    updatedAt: Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpCreateNestedManyWithoutFinalScores_tmpInput
    Table_Archives_tmp?: Table_Archives_tmpCreateNestedManyWithoutFinalScores_tmpInput
  }

  export type FinalScores_tmpUncheckedCreateInput = {
    id?: number
    Start: Date | string
    End: Date | string
    Columns: number
    Surrendered: boolean
    createdAt: Date | string
    updatedAt: Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateNestedManyWithoutFinalScores_tmpInput
    Table_Archives_tmp?: Table_Archives_tmpUncheckedCreateNestedManyWithoutFinalScores_tmpInput
  }

  export type FinalScores_tmpUpdateInput = {
    Start?: DateTimeFieldUpdateOperationsInput | Date | string
    End?: DateTimeFieldUpdateOperationsInput | Date | string
    Columns?: IntFieldUpdateOperationsInput | number
    Surrendered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithoutFinalScores_tmpNestedInput
    Table_Archives_tmp?: Table_Archives_tmpUpdateManyWithoutFinalScores_tmpNestedInput
  }

  export type FinalScores_tmpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Start?: DateTimeFieldUpdateOperationsInput | Date | string
    End?: DateTimeFieldUpdateOperationsInput | Date | string
    Columns?: IntFieldUpdateOperationsInput | number
    Surrendered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutFinalScores_tmpNestedInput
    Table_Archives_tmp?: Table_Archives_tmpUncheckedUpdateManyWithoutFinalScores_tmpNestedInput
  }

  export type FinalScores_tmpCreateManyInput = {
    id?: number
    Start: Date | string
    End: Date | string
    Columns: number
    Surrendered: boolean
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type FinalScores_tmpUpdateManyMutationInput = {
    Start?: DateTimeFieldUpdateOperationsInput | Date | string
    End?: DateTimeFieldUpdateOperationsInput | Date | string
    Columns?: IntFieldUpdateOperationsInput | number
    Surrendered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinalScores_tmpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Start?: DateTimeFieldUpdateOperationsInput | Date | string
    End?: DateTimeFieldUpdateOperationsInput | Date | string
    Columns?: IntFieldUpdateOperationsInput | number
    Surrendered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Enumenum_Users_View_SessionsFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Users_View_Sessions | Enumenum_Users_View_SessionsFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Users_View_Sessions[] | ListEnumenum_Users_View_SessionsFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Users_View_Sessions[] | ListEnumenum_Users_View_SessionsFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Users_View_SessionsFilter<$PrismaModel> | $Enums.enum_Users_View_Sessions
  }

  export type Enumenum_Users_Statistics_ViewFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Users_Statistics_View | Enumenum_Users_Statistics_ViewFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Users_Statistics_View[] | ListEnumenum_Users_Statistics_ViewFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Users_Statistics_View[] | ListEnumenum_Users_Statistics_ViewFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Users_Statistics_ViewFilter<$PrismaModel> | $Enums.enum_Users_Statistics_View
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Association__Users_And_Sessions_tmpListRelationFilter = {
    every?: Association__Users_And_Sessions_tmpWhereInput
    some?: Association__Users_And_Sessions_tmpWhereInput
    none?: Association__Users_And_Sessions_tmpWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Association__Users_And_Sessions_tmpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Users_tmpCountOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Password?: SortOrder
    RefreshToken?: SortOrder
    DarkMode?: SortOrder
    Show_Session_Names?: SortOrder
    Show_Session_Date?: SortOrder
    View_Sessions?: SortOrder
    View_Sessions_Desc?: SortOrder
    Statistics_View?: SortOrder
    Statistics_View_Month?: SortOrder
    Statistics_View_Year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Users_tmpAvgOrderByAggregateInput = {
    id?: SortOrder
    Statistics_View_Month?: SortOrder
    Statistics_View_Year?: SortOrder
  }

  export type Users_tmpMaxOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Password?: SortOrder
    RefreshToken?: SortOrder
    DarkMode?: SortOrder
    Show_Session_Names?: SortOrder
    Show_Session_Date?: SortOrder
    View_Sessions?: SortOrder
    View_Sessions_Desc?: SortOrder
    Statistics_View?: SortOrder
    Statistics_View_Month?: SortOrder
    Statistics_View_Year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Users_tmpMinOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Password?: SortOrder
    RefreshToken?: SortOrder
    DarkMode?: SortOrder
    Show_Session_Names?: SortOrder
    Show_Session_Date?: SortOrder
    View_Sessions?: SortOrder
    View_Sessions_Desc?: SortOrder
    Statistics_View?: SortOrder
    Statistics_View_Month?: SortOrder
    Statistics_View_Year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Users_tmpSumOrderByAggregateInput = {
    id?: SortOrder
    Statistics_View_Month?: SortOrder
    Statistics_View_Year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Enumenum_Users_View_SessionsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Users_View_Sessions | Enumenum_Users_View_SessionsFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Users_View_Sessions[] | ListEnumenum_Users_View_SessionsFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Users_View_Sessions[] | ListEnumenum_Users_View_SessionsFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Users_View_SessionsWithAggregatesFilter<$PrismaModel> | $Enums.enum_Users_View_Sessions
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumenum_Users_View_SessionsFilter<$PrismaModel>
    _max?: NestedEnumenum_Users_View_SessionsFilter<$PrismaModel>
  }

  export type Enumenum_Users_Statistics_ViewWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Users_Statistics_View | Enumenum_Users_Statistics_ViewFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Users_Statistics_View[] | ListEnumenum_Users_Statistics_ViewFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Users_Statistics_View[] | ListEnumenum_Users_Statistics_ViewFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Users_Statistics_ViewWithAggregatesFilter<$PrismaModel> | $Enums.enum_Users_Statistics_View
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumenum_Users_Statistics_ViewFilter<$PrismaModel>
    _max?: NestedEnumenum_Users_Statistics_ViewFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumenum_Association__Users_And_Sessions_InputTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Association__Users_And_Sessions_InputType | Enumenum_Association__Users_And_Sessions_InputTypeFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Association__Users_And_Sessions_InputType[] | ListEnumenum_Association__Users_And_Sessions_InputTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Association__Users_And_Sessions_InputType[] | ListEnumenum_Association__Users_And_Sessions_InputTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Association__Users_And_Sessions_InputTypeFilter<$PrismaModel> | $Enums.enum_Association__Users_And_Sessions_InputType
  }

  export type Enumenum_Association__Users_And_Sessions_ViewFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Association__Users_And_Sessions_View | Enumenum_Association__Users_And_Sessions_ViewFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Association__Users_And_Sessions_View[] | ListEnumenum_Association__Users_And_Sessions_ViewFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Association__Users_And_Sessions_View[] | ListEnumenum_Association__Users_And_Sessions_ViewFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Association__Users_And_Sessions_ViewFilter<$PrismaModel> | $Enums.enum_Association__Users_And_Sessions_View
  }

  export type Enumenum_Association__Users_And_Sessions_Statistics_ViewFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Association__Users_And_Sessions_Statistics_View | Enumenum_Association__Users_And_Sessions_Statistics_ViewFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Association__Users_And_Sessions_Statistics_View[] | ListEnumenum_Association__Users_And_Sessions_Statistics_ViewFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Association__Users_And_Sessions_Statistics_View[] | ListEnumenum_Association__Users_And_Sessions_Statistics_ViewFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Association__Users_And_Sessions_Statistics_ViewFilter<$PrismaModel> | $Enums.enum_Association__Users_And_Sessions_Statistics_View
  }

  export type Sessions_tmpScalarRelationFilter = {
    is?: Sessions_tmpWhereInput
    isNot?: Sessions_tmpWhereInput
  }

  export type Users_tmpScalarRelationFilter = {
    is?: Users_tmpWhereInput
    isNot?: Users_tmpWhereInput
  }

  export type Association__Users_And_Sessions_tmpUserIDSessionIDCompoundUniqueInput = {
    UserID: number
    SessionID: number
  }

  export type Association__Users_And_Sessions_tmpCountOrderByAggregateInput = {
    InputType?: SortOrder
    Scores_Visible?: SortOrder
    View?: SortOrder
    View_Month?: SortOrder
    View_Year?: SortOrder
    View_CustomDate?: SortOrder
    Statistics_Show_Border?: SortOrder
    Statistics_View?: SortOrder
    Statistics_View_Month?: SortOrder
    Statistics_View_Year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserID?: SortOrder
    SessionID?: SortOrder
  }

  export type Association__Users_And_Sessions_tmpAvgOrderByAggregateInput = {
    View_Month?: SortOrder
    View_Year?: SortOrder
    Statistics_View_Month?: SortOrder
    Statistics_View_Year?: SortOrder
    UserID?: SortOrder
    SessionID?: SortOrder
  }

  export type Association__Users_And_Sessions_tmpMaxOrderByAggregateInput = {
    InputType?: SortOrder
    Scores_Visible?: SortOrder
    View?: SortOrder
    View_Month?: SortOrder
    View_Year?: SortOrder
    View_CustomDate?: SortOrder
    Statistics_Show_Border?: SortOrder
    Statistics_View?: SortOrder
    Statistics_View_Month?: SortOrder
    Statistics_View_Year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserID?: SortOrder
    SessionID?: SortOrder
  }

  export type Association__Users_And_Sessions_tmpMinOrderByAggregateInput = {
    InputType?: SortOrder
    Scores_Visible?: SortOrder
    View?: SortOrder
    View_Month?: SortOrder
    View_Year?: SortOrder
    View_CustomDate?: SortOrder
    Statistics_Show_Border?: SortOrder
    Statistics_View?: SortOrder
    Statistics_View_Month?: SortOrder
    Statistics_View_Year?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserID?: SortOrder
    SessionID?: SortOrder
  }

  export type Association__Users_And_Sessions_tmpSumOrderByAggregateInput = {
    View_Month?: SortOrder
    View_Year?: SortOrder
    Statistics_View_Month?: SortOrder
    Statistics_View_Year?: SortOrder
    UserID?: SortOrder
    SessionID?: SortOrder
  }

  export type Enumenum_Association__Users_And_Sessions_InputTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Association__Users_And_Sessions_InputType | Enumenum_Association__Users_And_Sessions_InputTypeFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Association__Users_And_Sessions_InputType[] | ListEnumenum_Association__Users_And_Sessions_InputTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Association__Users_And_Sessions_InputType[] | ListEnumenum_Association__Users_And_Sessions_InputTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Association__Users_And_Sessions_InputTypeWithAggregatesFilter<$PrismaModel> | $Enums.enum_Association__Users_And_Sessions_InputType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumenum_Association__Users_And_Sessions_InputTypeFilter<$PrismaModel>
    _max?: NestedEnumenum_Association__Users_And_Sessions_InputTypeFilter<$PrismaModel>
  }

  export type Enumenum_Association__Users_And_Sessions_ViewWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Association__Users_And_Sessions_View | Enumenum_Association__Users_And_Sessions_ViewFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Association__Users_And_Sessions_View[] | ListEnumenum_Association__Users_And_Sessions_ViewFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Association__Users_And_Sessions_View[] | ListEnumenum_Association__Users_And_Sessions_ViewFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Association__Users_And_Sessions_ViewWithAggregatesFilter<$PrismaModel> | $Enums.enum_Association__Users_And_Sessions_View
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumenum_Association__Users_And_Sessions_ViewFilter<$PrismaModel>
    _max?: NestedEnumenum_Association__Users_And_Sessions_ViewFilter<$PrismaModel>
  }

  export type Enumenum_Association__Users_And_Sessions_Statistics_ViewWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Association__Users_And_Sessions_Statistics_View | Enumenum_Association__Users_And_Sessions_Statistics_ViewFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Association__Users_And_Sessions_Statistics_View[] | ListEnumenum_Association__Users_And_Sessions_Statistics_ViewFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Association__Users_And_Sessions_Statistics_View[] | ListEnumenum_Association__Users_And_Sessions_Statistics_ViewFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Association__Users_And_Sessions_Statistics_ViewWithAggregatesFilter<$PrismaModel> | $Enums.enum_Association__Users_And_Sessions_Statistics_View
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumenum_Association__Users_And_Sessions_Statistics_ViewFilter<$PrismaModel>
    _max?: NestedEnumenum_Association__Users_And_Sessions_Statistics_ViewFilter<$PrismaModel>
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpListRelationFilter = {
    every?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
    some?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
    none?: Association__Players_And_FinalScores_With_Sessions_tmpWhereInput
  }

  export type Association__Sessions_And_Players_tmpListRelationFilter = {
    every?: Association__Sessions_And_Players_tmpWhereInput
    some?: Association__Sessions_And_Players_tmpWhereInput
    none?: Association__Sessions_And_Players_tmpWhereInput
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Association__Sessions_And_Players_tmpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Sessions_tmpCountOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Color?: SortOrder
    Columns?: SortOrder
    View_List_Years?: SortOrder
    CurrentGameStart?: SortOrder
    LastPlayed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Sessions_tmpAvgOrderByAggregateInput = {
    id?: SortOrder
    Columns?: SortOrder
    View_List_Years?: SortOrder
  }

  export type Sessions_tmpMaxOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Color?: SortOrder
    Columns?: SortOrder
    CurrentGameStart?: SortOrder
    LastPlayed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Sessions_tmpMinOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Color?: SortOrder
    Columns?: SortOrder
    CurrentGameStart?: SortOrder
    LastPlayed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Sessions_tmpSumOrderByAggregateInput = {
    id?: SortOrder
    Columns?: SortOrder
    View_List_Years?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Table_Columns_tmpListRelationFilter = {
    every?: Table_Columns_tmpWhereInput
    some?: Table_Columns_tmpWhereInput
    none?: Table_Columns_tmpWhereInput
  }

  export type Table_Columns_tmpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Players_tmpCountOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Players_tmpAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Players_tmpMaxOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Players_tmpMinOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    Color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Players_tmpSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Players_tmpNullableScalarRelationFilter = {
    is?: Players_tmpWhereInput | null
    isNot?: Players_tmpWhereInput | null
  }

  export type Table_Columns_tmpCountOrderByAggregateInput = {
    id?: SortOrder
    Column?: SortOrder
    Upper_Table_1?: SortOrder
    Upper_Table_2?: SortOrder
    Upper_Table_3?: SortOrder
    Upper_Table_4?: SortOrder
    Upper_Table_5?: SortOrder
    Upper_Table_6?: SortOrder
    Upper_Table_Score?: SortOrder
    Upper_Table_Add35?: SortOrder
    Upper_Table_TotalScore?: SortOrder
    Bottom_Table_1?: SortOrder
    Bottom_Table_2?: SortOrder
    Bottom_Table_3?: SortOrder
    Bottom_Table_4?: SortOrder
    Bottom_Table_5?: SortOrder
    Bottom_Table_6?: SortOrder
    Bottom_Table_7?: SortOrder
    Bottom_Table_Score?: SortOrder
    Bottom_Table_TotalScore?: SortOrder
    TotalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    PlayerID?: SortOrder
  }

  export type Table_Columns_tmpAvgOrderByAggregateInput = {
    id?: SortOrder
    Column?: SortOrder
    Upper_Table_1?: SortOrder
    Upper_Table_2?: SortOrder
    Upper_Table_3?: SortOrder
    Upper_Table_4?: SortOrder
    Upper_Table_5?: SortOrder
    Upper_Table_6?: SortOrder
    Upper_Table_Score?: SortOrder
    Upper_Table_Add35?: SortOrder
    Upper_Table_TotalScore?: SortOrder
    Bottom_Table_1?: SortOrder
    Bottom_Table_2?: SortOrder
    Bottom_Table_3?: SortOrder
    Bottom_Table_4?: SortOrder
    Bottom_Table_5?: SortOrder
    Bottom_Table_6?: SortOrder
    Bottom_Table_7?: SortOrder
    Bottom_Table_Score?: SortOrder
    Bottom_Table_TotalScore?: SortOrder
    TotalScore?: SortOrder
    PlayerID?: SortOrder
  }

  export type Table_Columns_tmpMaxOrderByAggregateInput = {
    id?: SortOrder
    Column?: SortOrder
    Upper_Table_1?: SortOrder
    Upper_Table_2?: SortOrder
    Upper_Table_3?: SortOrder
    Upper_Table_4?: SortOrder
    Upper_Table_5?: SortOrder
    Upper_Table_6?: SortOrder
    Upper_Table_Score?: SortOrder
    Upper_Table_Add35?: SortOrder
    Upper_Table_TotalScore?: SortOrder
    Bottom_Table_1?: SortOrder
    Bottom_Table_2?: SortOrder
    Bottom_Table_3?: SortOrder
    Bottom_Table_4?: SortOrder
    Bottom_Table_5?: SortOrder
    Bottom_Table_6?: SortOrder
    Bottom_Table_7?: SortOrder
    Bottom_Table_Score?: SortOrder
    Bottom_Table_TotalScore?: SortOrder
    TotalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    PlayerID?: SortOrder
  }

  export type Table_Columns_tmpMinOrderByAggregateInput = {
    id?: SortOrder
    Column?: SortOrder
    Upper_Table_1?: SortOrder
    Upper_Table_2?: SortOrder
    Upper_Table_3?: SortOrder
    Upper_Table_4?: SortOrder
    Upper_Table_5?: SortOrder
    Upper_Table_6?: SortOrder
    Upper_Table_Score?: SortOrder
    Upper_Table_Add35?: SortOrder
    Upper_Table_TotalScore?: SortOrder
    Bottom_Table_1?: SortOrder
    Bottom_Table_2?: SortOrder
    Bottom_Table_3?: SortOrder
    Bottom_Table_4?: SortOrder
    Bottom_Table_5?: SortOrder
    Bottom_Table_6?: SortOrder
    Bottom_Table_7?: SortOrder
    Bottom_Table_Score?: SortOrder
    Bottom_Table_TotalScore?: SortOrder
    TotalScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    PlayerID?: SortOrder
  }

  export type Table_Columns_tmpSumOrderByAggregateInput = {
    id?: SortOrder
    Column?: SortOrder
    Upper_Table_1?: SortOrder
    Upper_Table_2?: SortOrder
    Upper_Table_3?: SortOrder
    Upper_Table_4?: SortOrder
    Upper_Table_5?: SortOrder
    Upper_Table_6?: SortOrder
    Upper_Table_Score?: SortOrder
    Upper_Table_Add35?: SortOrder
    Upper_Table_TotalScore?: SortOrder
    Bottom_Table_1?: SortOrder
    Bottom_Table_2?: SortOrder
    Bottom_Table_3?: SortOrder
    Bottom_Table_4?: SortOrder
    Bottom_Table_5?: SortOrder
    Bottom_Table_6?: SortOrder
    Bottom_Table_7?: SortOrder
    Bottom_Table_Score?: SortOrder
    Bottom_Table_TotalScore?: SortOrder
    TotalScore?: SortOrder
    PlayerID?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FinalScores_tmpNullableScalarRelationFilter = {
    is?: FinalScores_tmpWhereInput | null
    isNot?: FinalScores_tmpWhereInput | null
  }

  export type Table_Archives_tmpCountOrderByAggregateInput = {
    id?: SortOrder
    Table?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    FinalScoreID?: SortOrder
  }

  export type Table_Archives_tmpAvgOrderByAggregateInput = {
    id?: SortOrder
    FinalScoreID?: SortOrder
  }

  export type Table_Archives_tmpMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    FinalScoreID?: SortOrder
  }

  export type Table_Archives_tmpMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    FinalScoreID?: SortOrder
  }

  export type Table_Archives_tmpSumOrderByAggregateInput = {
    id?: SortOrder
    FinalScoreID?: SortOrder
  }

  export type FinalScores_tmpScalarRelationFilter = {
    is?: FinalScores_tmpWhereInput
    isNot?: FinalScores_tmpWhereInput
  }

  export type Sessions_tmpNullableScalarRelationFilter = {
    is?: Sessions_tmpWhereInput | null
    isNot?: Sessions_tmpWhereInput | null
  }

  export type Players_tmpScalarRelationFilter = {
    is?: Players_tmpWhereInput
    isNot?: Players_tmpWhereInput
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpPlayerIDFinalScoreIDCompoundUniqueInput = {
    PlayerID: number
    FinalScoreID: number
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCountOrderByAggregateInput = {
    IsWinner?: SortOrder
    Score?: SortOrder
    Wins__Before?: SortOrder
    Wins__After?: SortOrder
    Wins__Before_Year?: SortOrder
    Wins__After_Year?: SortOrder
    Wins__Before_Month?: SortOrder
    Wins__After_Month?: SortOrder
    Wins__Before_SinceCustomDate?: SortOrder
    Wins__After_SinceCustomDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SessionID?: SortOrder
    PlayerID?: SortOrder
    FinalScoreID?: SortOrder
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpAvgOrderByAggregateInput = {
    Score?: SortOrder
    Wins__Before?: SortOrder
    Wins__After?: SortOrder
    Wins__Before_Year?: SortOrder
    Wins__After_Year?: SortOrder
    Wins__Before_Month?: SortOrder
    Wins__After_Month?: SortOrder
    Wins__Before_SinceCustomDate?: SortOrder
    Wins__After_SinceCustomDate?: SortOrder
    SessionID?: SortOrder
    PlayerID?: SortOrder
    FinalScoreID?: SortOrder
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpMaxOrderByAggregateInput = {
    IsWinner?: SortOrder
    Score?: SortOrder
    Wins__Before?: SortOrder
    Wins__After?: SortOrder
    Wins__Before_Year?: SortOrder
    Wins__After_Year?: SortOrder
    Wins__Before_Month?: SortOrder
    Wins__After_Month?: SortOrder
    Wins__Before_SinceCustomDate?: SortOrder
    Wins__After_SinceCustomDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SessionID?: SortOrder
    PlayerID?: SortOrder
    FinalScoreID?: SortOrder
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpMinOrderByAggregateInput = {
    IsWinner?: SortOrder
    Score?: SortOrder
    Wins__Before?: SortOrder
    Wins__After?: SortOrder
    Wins__Before_Year?: SortOrder
    Wins__After_Year?: SortOrder
    Wins__Before_Month?: SortOrder
    Wins__After_Month?: SortOrder
    Wins__Before_SinceCustomDate?: SortOrder
    Wins__After_SinceCustomDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SessionID?: SortOrder
    PlayerID?: SortOrder
    FinalScoreID?: SortOrder
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpSumOrderByAggregateInput = {
    Score?: SortOrder
    Wins__Before?: SortOrder
    Wins__After?: SortOrder
    Wins__Before_Year?: SortOrder
    Wins__After_Year?: SortOrder
    Wins__Before_Month?: SortOrder
    Wins__After_Month?: SortOrder
    Wins__Before_SinceCustomDate?: SortOrder
    Wins__After_SinceCustomDate?: SortOrder
    SessionID?: SortOrder
    PlayerID?: SortOrder
    FinalScoreID?: SortOrder
  }

  export type Association__Sessions_And_Players_tmpSessionIDPlayerIDCompoundUniqueInput = {
    SessionID: number
    PlayerID: number
  }

  export type Association__Sessions_And_Players_tmpCountOrderByAggregateInput = {
    Gnadenwurf_Used?: SortOrder
    Order_Index?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SessionID?: SortOrder
    PlayerID?: SortOrder
  }

  export type Association__Sessions_And_Players_tmpAvgOrderByAggregateInput = {
    Order_Index?: SortOrder
    SessionID?: SortOrder
    PlayerID?: SortOrder
  }

  export type Association__Sessions_And_Players_tmpMaxOrderByAggregateInput = {
    Gnadenwurf_Used?: SortOrder
    Order_Index?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SessionID?: SortOrder
    PlayerID?: SortOrder
  }

  export type Association__Sessions_And_Players_tmpMinOrderByAggregateInput = {
    Gnadenwurf_Used?: SortOrder
    Order_Index?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SessionID?: SortOrder
    PlayerID?: SortOrder
  }

  export type Association__Sessions_And_Players_tmpSumOrderByAggregateInput = {
    Order_Index?: SortOrder
    SessionID?: SortOrder
    PlayerID?: SortOrder
  }

  export type Table_Archives_tmpListRelationFilter = {
    every?: Table_Archives_tmpWhereInput
    some?: Table_Archives_tmpWhereInput
    none?: Table_Archives_tmpWhereInput
  }

  export type Table_Archives_tmpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinalScores_tmpCountOrderByAggregateInput = {
    id?: SortOrder
    Start?: SortOrder
    End?: SortOrder
    Columns?: SortOrder
    Surrendered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinalScores_tmpAvgOrderByAggregateInput = {
    id?: SortOrder
    Columns?: SortOrder
  }

  export type FinalScores_tmpMaxOrderByAggregateInput = {
    id?: SortOrder
    Start?: SortOrder
    End?: SortOrder
    Columns?: SortOrder
    Surrendered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinalScores_tmpMinOrderByAggregateInput = {
    id?: SortOrder
    Start?: SortOrder
    End?: SortOrder
    Columns?: SortOrder
    Surrendered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FinalScores_tmpSumOrderByAggregateInput = {
    id?: SortOrder
    Columns?: SortOrder
  }

  export type Association__Users_And_Sessions_tmpCreateNestedManyWithoutUserInput = {
    create?: XOR<Association__Users_And_Sessions_tmpCreateWithoutUserInput, Association__Users_And_Sessions_tmpUncheckedCreateWithoutUserInput> | Association__Users_And_Sessions_tmpCreateWithoutUserInput[] | Association__Users_And_Sessions_tmpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Association__Users_And_Sessions_tmpCreateOrConnectWithoutUserInput | Association__Users_And_Sessions_tmpCreateOrConnectWithoutUserInput[]
    createMany?: Association__Users_And_Sessions_tmpCreateManyUserInputEnvelope
    connect?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
  }

  export type Association__Users_And_Sessions_tmpUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Association__Users_And_Sessions_tmpCreateWithoutUserInput, Association__Users_And_Sessions_tmpUncheckedCreateWithoutUserInput> | Association__Users_And_Sessions_tmpCreateWithoutUserInput[] | Association__Users_And_Sessions_tmpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Association__Users_And_Sessions_tmpCreateOrConnectWithoutUserInput | Association__Users_And_Sessions_tmpCreateOrConnectWithoutUserInput[]
    createMany?: Association__Users_And_Sessions_tmpCreateManyUserInputEnvelope
    connect?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type Enumenum_Users_View_SessionsFieldUpdateOperationsInput = {
    set?: $Enums.enum_Users_View_Sessions
  }

  export type Enumenum_Users_Statistics_ViewFieldUpdateOperationsInput = {
    set?: $Enums.enum_Users_Statistics_View
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Association__Users_And_Sessions_tmpUpdateManyWithoutUserNestedInput = {
    create?: XOR<Association__Users_And_Sessions_tmpCreateWithoutUserInput, Association__Users_And_Sessions_tmpUncheckedCreateWithoutUserInput> | Association__Users_And_Sessions_tmpCreateWithoutUserInput[] | Association__Users_And_Sessions_tmpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Association__Users_And_Sessions_tmpCreateOrConnectWithoutUserInput | Association__Users_And_Sessions_tmpCreateOrConnectWithoutUserInput[]
    upsert?: Association__Users_And_Sessions_tmpUpsertWithWhereUniqueWithoutUserInput | Association__Users_And_Sessions_tmpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Association__Users_And_Sessions_tmpCreateManyUserInputEnvelope
    set?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
    disconnect?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
    delete?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
    connect?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
    update?: Association__Users_And_Sessions_tmpUpdateWithWhereUniqueWithoutUserInput | Association__Users_And_Sessions_tmpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Association__Users_And_Sessions_tmpUpdateManyWithWhereWithoutUserInput | Association__Users_And_Sessions_tmpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Association__Users_And_Sessions_tmpScalarWhereInput | Association__Users_And_Sessions_tmpScalarWhereInput[]
  }

  export type Association__Users_And_Sessions_tmpUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Association__Users_And_Sessions_tmpCreateWithoutUserInput, Association__Users_And_Sessions_tmpUncheckedCreateWithoutUserInput> | Association__Users_And_Sessions_tmpCreateWithoutUserInput[] | Association__Users_And_Sessions_tmpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Association__Users_And_Sessions_tmpCreateOrConnectWithoutUserInput | Association__Users_And_Sessions_tmpCreateOrConnectWithoutUserInput[]
    upsert?: Association__Users_And_Sessions_tmpUpsertWithWhereUniqueWithoutUserInput | Association__Users_And_Sessions_tmpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Association__Users_And_Sessions_tmpCreateManyUserInputEnvelope
    set?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
    disconnect?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
    delete?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
    connect?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
    update?: Association__Users_And_Sessions_tmpUpdateWithWhereUniqueWithoutUserInput | Association__Users_And_Sessions_tmpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Association__Users_And_Sessions_tmpUpdateManyWithWhereWithoutUserInput | Association__Users_And_Sessions_tmpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Association__Users_And_Sessions_tmpScalarWhereInput | Association__Users_And_Sessions_tmpScalarWhereInput[]
  }

  export type Sessions_tmpCreateNestedOneWithoutAssociation__Users_And_Sessions_tmpInput = {
    create?: XOR<Sessions_tmpCreateWithoutAssociation__Users_And_Sessions_tmpInput, Sessions_tmpUncheckedCreateWithoutAssociation__Users_And_Sessions_tmpInput>
    connectOrCreate?: Sessions_tmpCreateOrConnectWithoutAssociation__Users_And_Sessions_tmpInput
    connect?: Sessions_tmpWhereUniqueInput
  }

  export type Users_tmpCreateNestedOneWithoutList___Association__Users_And_SessionsInput = {
    create?: XOR<Users_tmpCreateWithoutList___Association__Users_And_SessionsInput, Users_tmpUncheckedCreateWithoutList___Association__Users_And_SessionsInput>
    connectOrCreate?: Users_tmpCreateOrConnectWithoutList___Association__Users_And_SessionsInput
    connect?: Users_tmpWhereUniqueInput
  }

  export type Enumenum_Association__Users_And_Sessions_InputTypeFieldUpdateOperationsInput = {
    set?: $Enums.enum_Association__Users_And_Sessions_InputType
  }

  export type Enumenum_Association__Users_And_Sessions_ViewFieldUpdateOperationsInput = {
    set?: $Enums.enum_Association__Users_And_Sessions_View
  }

  export type Enumenum_Association__Users_And_Sessions_Statistics_ViewFieldUpdateOperationsInput = {
    set?: $Enums.enum_Association__Users_And_Sessions_Statistics_View
  }

  export type Sessions_tmpUpdateOneRequiredWithoutAssociation__Users_And_Sessions_tmpNestedInput = {
    create?: XOR<Sessions_tmpCreateWithoutAssociation__Users_And_Sessions_tmpInput, Sessions_tmpUncheckedCreateWithoutAssociation__Users_And_Sessions_tmpInput>
    connectOrCreate?: Sessions_tmpCreateOrConnectWithoutAssociation__Users_And_Sessions_tmpInput
    upsert?: Sessions_tmpUpsertWithoutAssociation__Users_And_Sessions_tmpInput
    connect?: Sessions_tmpWhereUniqueInput
    update?: XOR<XOR<Sessions_tmpUpdateToOneWithWhereWithoutAssociation__Users_And_Sessions_tmpInput, Sessions_tmpUpdateWithoutAssociation__Users_And_Sessions_tmpInput>, Sessions_tmpUncheckedUpdateWithoutAssociation__Users_And_Sessions_tmpInput>
  }

  export type Users_tmpUpdateOneRequiredWithoutList___Association__Users_And_SessionsNestedInput = {
    create?: XOR<Users_tmpCreateWithoutList___Association__Users_And_SessionsInput, Users_tmpUncheckedCreateWithoutList___Association__Users_And_SessionsInput>
    connectOrCreate?: Users_tmpCreateOrConnectWithoutList___Association__Users_And_SessionsInput
    upsert?: Users_tmpUpsertWithoutList___Association__Users_And_SessionsInput
    connect?: Users_tmpWhereUniqueInput
    update?: XOR<XOR<Users_tmpUpdateToOneWithWhereWithoutList___Association__Users_And_SessionsInput, Users_tmpUpdateWithoutList___Association__Users_And_SessionsInput>, Users_tmpUncheckedUpdateWithoutList___Association__Users_And_SessionsInput>
  }

  export type Sessions_tmpCreateView_List_YearsInput = {
    set: number[]
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateNestedManyWithoutSessions_tmpInput = {
    create?: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutSessions_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutSessions_tmpInput> | Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutSessions_tmpInput[] | Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutSessions_tmpInput[]
    connectOrCreate?: Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutSessions_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutSessions_tmpInput[]
    createMany?: Association__Players_And_FinalScores_With_Sessions_tmpCreateManySessions_tmpInputEnvelope
    connect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
  }

  export type Association__Sessions_And_Players_tmpCreateNestedManyWithoutSessions_tmpInput = {
    create?: XOR<Association__Sessions_And_Players_tmpCreateWithoutSessions_tmpInput, Association__Sessions_And_Players_tmpUncheckedCreateWithoutSessions_tmpInput> | Association__Sessions_And_Players_tmpCreateWithoutSessions_tmpInput[] | Association__Sessions_And_Players_tmpUncheckedCreateWithoutSessions_tmpInput[]
    connectOrCreate?: Association__Sessions_And_Players_tmpCreateOrConnectWithoutSessions_tmpInput | Association__Sessions_And_Players_tmpCreateOrConnectWithoutSessions_tmpInput[]
    createMany?: Association__Sessions_And_Players_tmpCreateManySessions_tmpInputEnvelope
    connect?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
  }

  export type Association__Users_And_Sessions_tmpCreateNestedManyWithoutSessionInput = {
    create?: XOR<Association__Users_And_Sessions_tmpCreateWithoutSessionInput, Association__Users_And_Sessions_tmpUncheckedCreateWithoutSessionInput> | Association__Users_And_Sessions_tmpCreateWithoutSessionInput[] | Association__Users_And_Sessions_tmpUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: Association__Users_And_Sessions_tmpCreateOrConnectWithoutSessionInput | Association__Users_And_Sessions_tmpCreateOrConnectWithoutSessionInput[]
    createMany?: Association__Users_And_Sessions_tmpCreateManySessionInputEnvelope
    connect?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateNestedManyWithoutSessions_tmpInput = {
    create?: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutSessions_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutSessions_tmpInput> | Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutSessions_tmpInput[] | Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutSessions_tmpInput[]
    connectOrCreate?: Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutSessions_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutSessions_tmpInput[]
    createMany?: Association__Players_And_FinalScores_With_Sessions_tmpCreateManySessions_tmpInputEnvelope
    connect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
  }

  export type Association__Sessions_And_Players_tmpUncheckedCreateNestedManyWithoutSessions_tmpInput = {
    create?: XOR<Association__Sessions_And_Players_tmpCreateWithoutSessions_tmpInput, Association__Sessions_And_Players_tmpUncheckedCreateWithoutSessions_tmpInput> | Association__Sessions_And_Players_tmpCreateWithoutSessions_tmpInput[] | Association__Sessions_And_Players_tmpUncheckedCreateWithoutSessions_tmpInput[]
    connectOrCreate?: Association__Sessions_And_Players_tmpCreateOrConnectWithoutSessions_tmpInput | Association__Sessions_And_Players_tmpCreateOrConnectWithoutSessions_tmpInput[]
    createMany?: Association__Sessions_And_Players_tmpCreateManySessions_tmpInputEnvelope
    connect?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
  }

  export type Association__Users_And_Sessions_tmpUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<Association__Users_And_Sessions_tmpCreateWithoutSessionInput, Association__Users_And_Sessions_tmpUncheckedCreateWithoutSessionInput> | Association__Users_And_Sessions_tmpCreateWithoutSessionInput[] | Association__Users_And_Sessions_tmpUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: Association__Users_And_Sessions_tmpCreateOrConnectWithoutSessionInput | Association__Users_And_Sessions_tmpCreateOrConnectWithoutSessionInput[]
    createMany?: Association__Users_And_Sessions_tmpCreateManySessionInputEnvelope
    connect?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
  }

  export type Sessions_tmpUpdateView_List_YearsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithoutSessions_tmpNestedInput = {
    create?: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutSessions_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutSessions_tmpInput> | Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutSessions_tmpInput[] | Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutSessions_tmpInput[]
    connectOrCreate?: Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutSessions_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutSessions_tmpInput[]
    upsert?: Association__Players_And_FinalScores_With_Sessions_tmpUpsertWithWhereUniqueWithoutSessions_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpsertWithWhereUniqueWithoutSessions_tmpInput[]
    createMany?: Association__Players_And_FinalScores_With_Sessions_tmpCreateManySessions_tmpInputEnvelope
    set?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    disconnect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    delete?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    connect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    update?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithWhereUniqueWithoutSessions_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithWhereUniqueWithoutSessions_tmpInput[]
    updateMany?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithWhereWithoutSessions_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithWhereWithoutSessions_tmpInput[]
    deleteMany?: Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput | Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput[]
  }

  export type Association__Sessions_And_Players_tmpUpdateManyWithoutSessions_tmpNestedInput = {
    create?: XOR<Association__Sessions_And_Players_tmpCreateWithoutSessions_tmpInput, Association__Sessions_And_Players_tmpUncheckedCreateWithoutSessions_tmpInput> | Association__Sessions_And_Players_tmpCreateWithoutSessions_tmpInput[] | Association__Sessions_And_Players_tmpUncheckedCreateWithoutSessions_tmpInput[]
    connectOrCreate?: Association__Sessions_And_Players_tmpCreateOrConnectWithoutSessions_tmpInput | Association__Sessions_And_Players_tmpCreateOrConnectWithoutSessions_tmpInput[]
    upsert?: Association__Sessions_And_Players_tmpUpsertWithWhereUniqueWithoutSessions_tmpInput | Association__Sessions_And_Players_tmpUpsertWithWhereUniqueWithoutSessions_tmpInput[]
    createMany?: Association__Sessions_And_Players_tmpCreateManySessions_tmpInputEnvelope
    set?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
    disconnect?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
    delete?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
    connect?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
    update?: Association__Sessions_And_Players_tmpUpdateWithWhereUniqueWithoutSessions_tmpInput | Association__Sessions_And_Players_tmpUpdateWithWhereUniqueWithoutSessions_tmpInput[]
    updateMany?: Association__Sessions_And_Players_tmpUpdateManyWithWhereWithoutSessions_tmpInput | Association__Sessions_And_Players_tmpUpdateManyWithWhereWithoutSessions_tmpInput[]
    deleteMany?: Association__Sessions_And_Players_tmpScalarWhereInput | Association__Sessions_And_Players_tmpScalarWhereInput[]
  }

  export type Association__Users_And_Sessions_tmpUpdateManyWithoutSessionNestedInput = {
    create?: XOR<Association__Users_And_Sessions_tmpCreateWithoutSessionInput, Association__Users_And_Sessions_tmpUncheckedCreateWithoutSessionInput> | Association__Users_And_Sessions_tmpCreateWithoutSessionInput[] | Association__Users_And_Sessions_tmpUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: Association__Users_And_Sessions_tmpCreateOrConnectWithoutSessionInput | Association__Users_And_Sessions_tmpCreateOrConnectWithoutSessionInput[]
    upsert?: Association__Users_And_Sessions_tmpUpsertWithWhereUniqueWithoutSessionInput | Association__Users_And_Sessions_tmpUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: Association__Users_And_Sessions_tmpCreateManySessionInputEnvelope
    set?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
    disconnect?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
    delete?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
    connect?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
    update?: Association__Users_And_Sessions_tmpUpdateWithWhereUniqueWithoutSessionInput | Association__Users_And_Sessions_tmpUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: Association__Users_And_Sessions_tmpUpdateManyWithWhereWithoutSessionInput | Association__Users_And_Sessions_tmpUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: Association__Users_And_Sessions_tmpScalarWhereInput | Association__Users_And_Sessions_tmpScalarWhereInput[]
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutSessions_tmpNestedInput = {
    create?: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutSessions_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutSessions_tmpInput> | Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutSessions_tmpInput[] | Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutSessions_tmpInput[]
    connectOrCreate?: Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutSessions_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutSessions_tmpInput[]
    upsert?: Association__Players_And_FinalScores_With_Sessions_tmpUpsertWithWhereUniqueWithoutSessions_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpsertWithWhereUniqueWithoutSessions_tmpInput[]
    createMany?: Association__Players_And_FinalScores_With_Sessions_tmpCreateManySessions_tmpInputEnvelope
    set?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    disconnect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    delete?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    connect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    update?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithWhereUniqueWithoutSessions_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithWhereUniqueWithoutSessions_tmpInput[]
    updateMany?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithWhereWithoutSessions_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithWhereWithoutSessions_tmpInput[]
    deleteMany?: Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput | Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput[]
  }

  export type Association__Sessions_And_Players_tmpUncheckedUpdateManyWithoutSessions_tmpNestedInput = {
    create?: XOR<Association__Sessions_And_Players_tmpCreateWithoutSessions_tmpInput, Association__Sessions_And_Players_tmpUncheckedCreateWithoutSessions_tmpInput> | Association__Sessions_And_Players_tmpCreateWithoutSessions_tmpInput[] | Association__Sessions_And_Players_tmpUncheckedCreateWithoutSessions_tmpInput[]
    connectOrCreate?: Association__Sessions_And_Players_tmpCreateOrConnectWithoutSessions_tmpInput | Association__Sessions_And_Players_tmpCreateOrConnectWithoutSessions_tmpInput[]
    upsert?: Association__Sessions_And_Players_tmpUpsertWithWhereUniqueWithoutSessions_tmpInput | Association__Sessions_And_Players_tmpUpsertWithWhereUniqueWithoutSessions_tmpInput[]
    createMany?: Association__Sessions_And_Players_tmpCreateManySessions_tmpInputEnvelope
    set?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
    disconnect?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
    delete?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
    connect?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
    update?: Association__Sessions_And_Players_tmpUpdateWithWhereUniqueWithoutSessions_tmpInput | Association__Sessions_And_Players_tmpUpdateWithWhereUniqueWithoutSessions_tmpInput[]
    updateMany?: Association__Sessions_And_Players_tmpUpdateManyWithWhereWithoutSessions_tmpInput | Association__Sessions_And_Players_tmpUpdateManyWithWhereWithoutSessions_tmpInput[]
    deleteMany?: Association__Sessions_And_Players_tmpScalarWhereInput | Association__Sessions_And_Players_tmpScalarWhereInput[]
  }

  export type Association__Users_And_Sessions_tmpUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<Association__Users_And_Sessions_tmpCreateWithoutSessionInput, Association__Users_And_Sessions_tmpUncheckedCreateWithoutSessionInput> | Association__Users_And_Sessions_tmpCreateWithoutSessionInput[] | Association__Users_And_Sessions_tmpUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: Association__Users_And_Sessions_tmpCreateOrConnectWithoutSessionInput | Association__Users_And_Sessions_tmpCreateOrConnectWithoutSessionInput[]
    upsert?: Association__Users_And_Sessions_tmpUpsertWithWhereUniqueWithoutSessionInput | Association__Users_And_Sessions_tmpUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: Association__Users_And_Sessions_tmpCreateManySessionInputEnvelope
    set?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
    disconnect?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
    delete?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
    connect?: Association__Users_And_Sessions_tmpWhereUniqueInput | Association__Users_And_Sessions_tmpWhereUniqueInput[]
    update?: Association__Users_And_Sessions_tmpUpdateWithWhereUniqueWithoutSessionInput | Association__Users_And_Sessions_tmpUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: Association__Users_And_Sessions_tmpUpdateManyWithWhereWithoutSessionInput | Association__Users_And_Sessions_tmpUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: Association__Users_And_Sessions_tmpScalarWhereInput | Association__Users_And_Sessions_tmpScalarWhereInput[]
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateNestedManyWithoutPlayers_tmpInput = {
    create?: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutPlayers_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutPlayers_tmpInput> | Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutPlayers_tmpInput[] | Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutPlayers_tmpInput[]
    connectOrCreate?: Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutPlayers_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutPlayers_tmpInput[]
    createMany?: Association__Players_And_FinalScores_With_Sessions_tmpCreateManyPlayers_tmpInputEnvelope
    connect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
  }

  export type Association__Sessions_And_Players_tmpCreateNestedManyWithoutPlayers_tmpInput = {
    create?: XOR<Association__Sessions_And_Players_tmpCreateWithoutPlayers_tmpInput, Association__Sessions_And_Players_tmpUncheckedCreateWithoutPlayers_tmpInput> | Association__Sessions_And_Players_tmpCreateWithoutPlayers_tmpInput[] | Association__Sessions_And_Players_tmpUncheckedCreateWithoutPlayers_tmpInput[]
    connectOrCreate?: Association__Sessions_And_Players_tmpCreateOrConnectWithoutPlayers_tmpInput | Association__Sessions_And_Players_tmpCreateOrConnectWithoutPlayers_tmpInput[]
    createMany?: Association__Sessions_And_Players_tmpCreateManyPlayers_tmpInputEnvelope
    connect?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
  }

  export type Table_Columns_tmpCreateNestedManyWithoutPlayers_tmpInput = {
    create?: XOR<Table_Columns_tmpCreateWithoutPlayers_tmpInput, Table_Columns_tmpUncheckedCreateWithoutPlayers_tmpInput> | Table_Columns_tmpCreateWithoutPlayers_tmpInput[] | Table_Columns_tmpUncheckedCreateWithoutPlayers_tmpInput[]
    connectOrCreate?: Table_Columns_tmpCreateOrConnectWithoutPlayers_tmpInput | Table_Columns_tmpCreateOrConnectWithoutPlayers_tmpInput[]
    createMany?: Table_Columns_tmpCreateManyPlayers_tmpInputEnvelope
    connect?: Table_Columns_tmpWhereUniqueInput | Table_Columns_tmpWhereUniqueInput[]
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateNestedManyWithoutPlayers_tmpInput = {
    create?: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutPlayers_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutPlayers_tmpInput> | Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutPlayers_tmpInput[] | Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutPlayers_tmpInput[]
    connectOrCreate?: Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutPlayers_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutPlayers_tmpInput[]
    createMany?: Association__Players_And_FinalScores_With_Sessions_tmpCreateManyPlayers_tmpInputEnvelope
    connect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
  }

  export type Association__Sessions_And_Players_tmpUncheckedCreateNestedManyWithoutPlayers_tmpInput = {
    create?: XOR<Association__Sessions_And_Players_tmpCreateWithoutPlayers_tmpInput, Association__Sessions_And_Players_tmpUncheckedCreateWithoutPlayers_tmpInput> | Association__Sessions_And_Players_tmpCreateWithoutPlayers_tmpInput[] | Association__Sessions_And_Players_tmpUncheckedCreateWithoutPlayers_tmpInput[]
    connectOrCreate?: Association__Sessions_And_Players_tmpCreateOrConnectWithoutPlayers_tmpInput | Association__Sessions_And_Players_tmpCreateOrConnectWithoutPlayers_tmpInput[]
    createMany?: Association__Sessions_And_Players_tmpCreateManyPlayers_tmpInputEnvelope
    connect?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
  }

  export type Table_Columns_tmpUncheckedCreateNestedManyWithoutPlayers_tmpInput = {
    create?: XOR<Table_Columns_tmpCreateWithoutPlayers_tmpInput, Table_Columns_tmpUncheckedCreateWithoutPlayers_tmpInput> | Table_Columns_tmpCreateWithoutPlayers_tmpInput[] | Table_Columns_tmpUncheckedCreateWithoutPlayers_tmpInput[]
    connectOrCreate?: Table_Columns_tmpCreateOrConnectWithoutPlayers_tmpInput | Table_Columns_tmpCreateOrConnectWithoutPlayers_tmpInput[]
    createMany?: Table_Columns_tmpCreateManyPlayers_tmpInputEnvelope
    connect?: Table_Columns_tmpWhereUniqueInput | Table_Columns_tmpWhereUniqueInput[]
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithoutPlayers_tmpNestedInput = {
    create?: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutPlayers_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutPlayers_tmpInput> | Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutPlayers_tmpInput[] | Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutPlayers_tmpInput[]
    connectOrCreate?: Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutPlayers_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutPlayers_tmpInput[]
    upsert?: Association__Players_And_FinalScores_With_Sessions_tmpUpsertWithWhereUniqueWithoutPlayers_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpsertWithWhereUniqueWithoutPlayers_tmpInput[]
    createMany?: Association__Players_And_FinalScores_With_Sessions_tmpCreateManyPlayers_tmpInputEnvelope
    set?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    disconnect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    delete?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    connect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    update?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithWhereUniqueWithoutPlayers_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithWhereUniqueWithoutPlayers_tmpInput[]
    updateMany?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithWhereWithoutPlayers_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithWhereWithoutPlayers_tmpInput[]
    deleteMany?: Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput | Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput[]
  }

  export type Association__Sessions_And_Players_tmpUpdateManyWithoutPlayers_tmpNestedInput = {
    create?: XOR<Association__Sessions_And_Players_tmpCreateWithoutPlayers_tmpInput, Association__Sessions_And_Players_tmpUncheckedCreateWithoutPlayers_tmpInput> | Association__Sessions_And_Players_tmpCreateWithoutPlayers_tmpInput[] | Association__Sessions_And_Players_tmpUncheckedCreateWithoutPlayers_tmpInput[]
    connectOrCreate?: Association__Sessions_And_Players_tmpCreateOrConnectWithoutPlayers_tmpInput | Association__Sessions_And_Players_tmpCreateOrConnectWithoutPlayers_tmpInput[]
    upsert?: Association__Sessions_And_Players_tmpUpsertWithWhereUniqueWithoutPlayers_tmpInput | Association__Sessions_And_Players_tmpUpsertWithWhereUniqueWithoutPlayers_tmpInput[]
    createMany?: Association__Sessions_And_Players_tmpCreateManyPlayers_tmpInputEnvelope
    set?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
    disconnect?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
    delete?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
    connect?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
    update?: Association__Sessions_And_Players_tmpUpdateWithWhereUniqueWithoutPlayers_tmpInput | Association__Sessions_And_Players_tmpUpdateWithWhereUniqueWithoutPlayers_tmpInput[]
    updateMany?: Association__Sessions_And_Players_tmpUpdateManyWithWhereWithoutPlayers_tmpInput | Association__Sessions_And_Players_tmpUpdateManyWithWhereWithoutPlayers_tmpInput[]
    deleteMany?: Association__Sessions_And_Players_tmpScalarWhereInput | Association__Sessions_And_Players_tmpScalarWhereInput[]
  }

  export type Table_Columns_tmpUpdateManyWithoutPlayers_tmpNestedInput = {
    create?: XOR<Table_Columns_tmpCreateWithoutPlayers_tmpInput, Table_Columns_tmpUncheckedCreateWithoutPlayers_tmpInput> | Table_Columns_tmpCreateWithoutPlayers_tmpInput[] | Table_Columns_tmpUncheckedCreateWithoutPlayers_tmpInput[]
    connectOrCreate?: Table_Columns_tmpCreateOrConnectWithoutPlayers_tmpInput | Table_Columns_tmpCreateOrConnectWithoutPlayers_tmpInput[]
    upsert?: Table_Columns_tmpUpsertWithWhereUniqueWithoutPlayers_tmpInput | Table_Columns_tmpUpsertWithWhereUniqueWithoutPlayers_tmpInput[]
    createMany?: Table_Columns_tmpCreateManyPlayers_tmpInputEnvelope
    set?: Table_Columns_tmpWhereUniqueInput | Table_Columns_tmpWhereUniqueInput[]
    disconnect?: Table_Columns_tmpWhereUniqueInput | Table_Columns_tmpWhereUniqueInput[]
    delete?: Table_Columns_tmpWhereUniqueInput | Table_Columns_tmpWhereUniqueInput[]
    connect?: Table_Columns_tmpWhereUniqueInput | Table_Columns_tmpWhereUniqueInput[]
    update?: Table_Columns_tmpUpdateWithWhereUniqueWithoutPlayers_tmpInput | Table_Columns_tmpUpdateWithWhereUniqueWithoutPlayers_tmpInput[]
    updateMany?: Table_Columns_tmpUpdateManyWithWhereWithoutPlayers_tmpInput | Table_Columns_tmpUpdateManyWithWhereWithoutPlayers_tmpInput[]
    deleteMany?: Table_Columns_tmpScalarWhereInput | Table_Columns_tmpScalarWhereInput[]
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutPlayers_tmpNestedInput = {
    create?: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutPlayers_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutPlayers_tmpInput> | Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutPlayers_tmpInput[] | Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutPlayers_tmpInput[]
    connectOrCreate?: Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutPlayers_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutPlayers_tmpInput[]
    upsert?: Association__Players_And_FinalScores_With_Sessions_tmpUpsertWithWhereUniqueWithoutPlayers_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpsertWithWhereUniqueWithoutPlayers_tmpInput[]
    createMany?: Association__Players_And_FinalScores_With_Sessions_tmpCreateManyPlayers_tmpInputEnvelope
    set?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    disconnect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    delete?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    connect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    update?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithWhereUniqueWithoutPlayers_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithWhereUniqueWithoutPlayers_tmpInput[]
    updateMany?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithWhereWithoutPlayers_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithWhereWithoutPlayers_tmpInput[]
    deleteMany?: Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput | Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput[]
  }

  export type Association__Sessions_And_Players_tmpUncheckedUpdateManyWithoutPlayers_tmpNestedInput = {
    create?: XOR<Association__Sessions_And_Players_tmpCreateWithoutPlayers_tmpInput, Association__Sessions_And_Players_tmpUncheckedCreateWithoutPlayers_tmpInput> | Association__Sessions_And_Players_tmpCreateWithoutPlayers_tmpInput[] | Association__Sessions_And_Players_tmpUncheckedCreateWithoutPlayers_tmpInput[]
    connectOrCreate?: Association__Sessions_And_Players_tmpCreateOrConnectWithoutPlayers_tmpInput | Association__Sessions_And_Players_tmpCreateOrConnectWithoutPlayers_tmpInput[]
    upsert?: Association__Sessions_And_Players_tmpUpsertWithWhereUniqueWithoutPlayers_tmpInput | Association__Sessions_And_Players_tmpUpsertWithWhereUniqueWithoutPlayers_tmpInput[]
    createMany?: Association__Sessions_And_Players_tmpCreateManyPlayers_tmpInputEnvelope
    set?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
    disconnect?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
    delete?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
    connect?: Association__Sessions_And_Players_tmpWhereUniqueInput | Association__Sessions_And_Players_tmpWhereUniqueInput[]
    update?: Association__Sessions_And_Players_tmpUpdateWithWhereUniqueWithoutPlayers_tmpInput | Association__Sessions_And_Players_tmpUpdateWithWhereUniqueWithoutPlayers_tmpInput[]
    updateMany?: Association__Sessions_And_Players_tmpUpdateManyWithWhereWithoutPlayers_tmpInput | Association__Sessions_And_Players_tmpUpdateManyWithWhereWithoutPlayers_tmpInput[]
    deleteMany?: Association__Sessions_And_Players_tmpScalarWhereInput | Association__Sessions_And_Players_tmpScalarWhereInput[]
  }

  export type Table_Columns_tmpUncheckedUpdateManyWithoutPlayers_tmpNestedInput = {
    create?: XOR<Table_Columns_tmpCreateWithoutPlayers_tmpInput, Table_Columns_tmpUncheckedCreateWithoutPlayers_tmpInput> | Table_Columns_tmpCreateWithoutPlayers_tmpInput[] | Table_Columns_tmpUncheckedCreateWithoutPlayers_tmpInput[]
    connectOrCreate?: Table_Columns_tmpCreateOrConnectWithoutPlayers_tmpInput | Table_Columns_tmpCreateOrConnectWithoutPlayers_tmpInput[]
    upsert?: Table_Columns_tmpUpsertWithWhereUniqueWithoutPlayers_tmpInput | Table_Columns_tmpUpsertWithWhereUniqueWithoutPlayers_tmpInput[]
    createMany?: Table_Columns_tmpCreateManyPlayers_tmpInputEnvelope
    set?: Table_Columns_tmpWhereUniqueInput | Table_Columns_tmpWhereUniqueInput[]
    disconnect?: Table_Columns_tmpWhereUniqueInput | Table_Columns_tmpWhereUniqueInput[]
    delete?: Table_Columns_tmpWhereUniqueInput | Table_Columns_tmpWhereUniqueInput[]
    connect?: Table_Columns_tmpWhereUniqueInput | Table_Columns_tmpWhereUniqueInput[]
    update?: Table_Columns_tmpUpdateWithWhereUniqueWithoutPlayers_tmpInput | Table_Columns_tmpUpdateWithWhereUniqueWithoutPlayers_tmpInput[]
    updateMany?: Table_Columns_tmpUpdateManyWithWhereWithoutPlayers_tmpInput | Table_Columns_tmpUpdateManyWithWhereWithoutPlayers_tmpInput[]
    deleteMany?: Table_Columns_tmpScalarWhereInput | Table_Columns_tmpScalarWhereInput[]
  }

  export type Players_tmpCreateNestedOneWithoutTable_Columns_tmpInput = {
    create?: XOR<Players_tmpCreateWithoutTable_Columns_tmpInput, Players_tmpUncheckedCreateWithoutTable_Columns_tmpInput>
    connectOrCreate?: Players_tmpCreateOrConnectWithoutTable_Columns_tmpInput
    connect?: Players_tmpWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Players_tmpUpdateOneWithoutTable_Columns_tmpNestedInput = {
    create?: XOR<Players_tmpCreateWithoutTable_Columns_tmpInput, Players_tmpUncheckedCreateWithoutTable_Columns_tmpInput>
    connectOrCreate?: Players_tmpCreateOrConnectWithoutTable_Columns_tmpInput
    upsert?: Players_tmpUpsertWithoutTable_Columns_tmpInput
    disconnect?: Players_tmpWhereInput | boolean
    delete?: Players_tmpWhereInput | boolean
    connect?: Players_tmpWhereUniqueInput
    update?: XOR<XOR<Players_tmpUpdateToOneWithWhereWithoutTable_Columns_tmpInput, Players_tmpUpdateWithoutTable_Columns_tmpInput>, Players_tmpUncheckedUpdateWithoutTable_Columns_tmpInput>
  }

  export type Table_Archives_tmpCreateTableInput = {
    set: InputJsonValue[]
  }

  export type FinalScores_tmpCreateNestedOneWithoutTable_Archives_tmpInput = {
    create?: XOR<FinalScores_tmpCreateWithoutTable_Archives_tmpInput, FinalScores_tmpUncheckedCreateWithoutTable_Archives_tmpInput>
    connectOrCreate?: FinalScores_tmpCreateOrConnectWithoutTable_Archives_tmpInput
    connect?: FinalScores_tmpWhereUniqueInput
  }

  export type Table_Archives_tmpUpdateTableInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type FinalScores_tmpUpdateOneWithoutTable_Archives_tmpNestedInput = {
    create?: XOR<FinalScores_tmpCreateWithoutTable_Archives_tmpInput, FinalScores_tmpUncheckedCreateWithoutTable_Archives_tmpInput>
    connectOrCreate?: FinalScores_tmpCreateOrConnectWithoutTable_Archives_tmpInput
    upsert?: FinalScores_tmpUpsertWithoutTable_Archives_tmpInput
    disconnect?: FinalScores_tmpWhereInput | boolean
    delete?: FinalScores_tmpWhereInput | boolean
    connect?: FinalScores_tmpWhereUniqueInput
    update?: XOR<XOR<FinalScores_tmpUpdateToOneWithWhereWithoutTable_Archives_tmpInput, FinalScores_tmpUpdateWithoutTable_Archives_tmpInput>, FinalScores_tmpUncheckedUpdateWithoutTable_Archives_tmpInput>
  }

  export type FinalScores_tmpCreateNestedOneWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    create?: XOR<FinalScores_tmpCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, FinalScores_tmpUncheckedCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
    connectOrCreate?: FinalScores_tmpCreateOrConnectWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
    connect?: FinalScores_tmpWhereUniqueInput
  }

  export type Sessions_tmpCreateNestedOneWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    create?: XOR<Sessions_tmpCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, Sessions_tmpUncheckedCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
    connectOrCreate?: Sessions_tmpCreateOrConnectWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
    connect?: Sessions_tmpWhereUniqueInput
  }

  export type Players_tmpCreateNestedOneWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    create?: XOR<Players_tmpCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, Players_tmpUncheckedCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
    connectOrCreate?: Players_tmpCreateOrConnectWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
    connect?: Players_tmpWhereUniqueInput
  }

  export type FinalScores_tmpUpdateOneRequiredWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpNestedInput = {
    create?: XOR<FinalScores_tmpCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, FinalScores_tmpUncheckedCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
    connectOrCreate?: FinalScores_tmpCreateOrConnectWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
    upsert?: FinalScores_tmpUpsertWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
    connect?: FinalScores_tmpWhereUniqueInput
    update?: XOR<XOR<FinalScores_tmpUpdateToOneWithWhereWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, FinalScores_tmpUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>, FinalScores_tmpUncheckedUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
  }

  export type Sessions_tmpUpdateOneWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpNestedInput = {
    create?: XOR<Sessions_tmpCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, Sessions_tmpUncheckedCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
    connectOrCreate?: Sessions_tmpCreateOrConnectWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
    upsert?: Sessions_tmpUpsertWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
    disconnect?: Sessions_tmpWhereInput | boolean
    delete?: Sessions_tmpWhereInput | boolean
    connect?: Sessions_tmpWhereUniqueInput
    update?: XOR<XOR<Sessions_tmpUpdateToOneWithWhereWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, Sessions_tmpUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>, Sessions_tmpUncheckedUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
  }

  export type Players_tmpUpdateOneRequiredWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpNestedInput = {
    create?: XOR<Players_tmpCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, Players_tmpUncheckedCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
    connectOrCreate?: Players_tmpCreateOrConnectWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
    upsert?: Players_tmpUpsertWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
    connect?: Players_tmpWhereUniqueInput
    update?: XOR<XOR<Players_tmpUpdateToOneWithWhereWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, Players_tmpUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>, Players_tmpUncheckedUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
  }

  export type Players_tmpCreateNestedOneWithoutAssociation__Sessions_And_Players_tmpInput = {
    create?: XOR<Players_tmpCreateWithoutAssociation__Sessions_And_Players_tmpInput, Players_tmpUncheckedCreateWithoutAssociation__Sessions_And_Players_tmpInput>
    connectOrCreate?: Players_tmpCreateOrConnectWithoutAssociation__Sessions_And_Players_tmpInput
    connect?: Players_tmpWhereUniqueInput
  }

  export type Sessions_tmpCreateNestedOneWithoutAssociation__Sessions_And_Players_tmpInput = {
    create?: XOR<Sessions_tmpCreateWithoutAssociation__Sessions_And_Players_tmpInput, Sessions_tmpUncheckedCreateWithoutAssociation__Sessions_And_Players_tmpInput>
    connectOrCreate?: Sessions_tmpCreateOrConnectWithoutAssociation__Sessions_And_Players_tmpInput
    connect?: Sessions_tmpWhereUniqueInput
  }

  export type Players_tmpUpdateOneRequiredWithoutAssociation__Sessions_And_Players_tmpNestedInput = {
    create?: XOR<Players_tmpCreateWithoutAssociation__Sessions_And_Players_tmpInput, Players_tmpUncheckedCreateWithoutAssociation__Sessions_And_Players_tmpInput>
    connectOrCreate?: Players_tmpCreateOrConnectWithoutAssociation__Sessions_And_Players_tmpInput
    upsert?: Players_tmpUpsertWithoutAssociation__Sessions_And_Players_tmpInput
    connect?: Players_tmpWhereUniqueInput
    update?: XOR<XOR<Players_tmpUpdateToOneWithWhereWithoutAssociation__Sessions_And_Players_tmpInput, Players_tmpUpdateWithoutAssociation__Sessions_And_Players_tmpInput>, Players_tmpUncheckedUpdateWithoutAssociation__Sessions_And_Players_tmpInput>
  }

  export type Sessions_tmpUpdateOneRequiredWithoutAssociation__Sessions_And_Players_tmpNestedInput = {
    create?: XOR<Sessions_tmpCreateWithoutAssociation__Sessions_And_Players_tmpInput, Sessions_tmpUncheckedCreateWithoutAssociation__Sessions_And_Players_tmpInput>
    connectOrCreate?: Sessions_tmpCreateOrConnectWithoutAssociation__Sessions_And_Players_tmpInput
    upsert?: Sessions_tmpUpsertWithoutAssociation__Sessions_And_Players_tmpInput
    connect?: Sessions_tmpWhereUniqueInput
    update?: XOR<XOR<Sessions_tmpUpdateToOneWithWhereWithoutAssociation__Sessions_And_Players_tmpInput, Sessions_tmpUpdateWithoutAssociation__Sessions_And_Players_tmpInput>, Sessions_tmpUncheckedUpdateWithoutAssociation__Sessions_And_Players_tmpInput>
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateNestedManyWithoutFinalScores_tmpInput = {
    create?: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutFinalScores_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutFinalScores_tmpInput> | Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutFinalScores_tmpInput[] | Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutFinalScores_tmpInput[]
    connectOrCreate?: Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutFinalScores_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutFinalScores_tmpInput[]
    createMany?: Association__Players_And_FinalScores_With_Sessions_tmpCreateManyFinalScores_tmpInputEnvelope
    connect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
  }

  export type Table_Archives_tmpCreateNestedManyWithoutFinalScores_tmpInput = {
    create?: XOR<Table_Archives_tmpCreateWithoutFinalScores_tmpInput, Table_Archives_tmpUncheckedCreateWithoutFinalScores_tmpInput> | Table_Archives_tmpCreateWithoutFinalScores_tmpInput[] | Table_Archives_tmpUncheckedCreateWithoutFinalScores_tmpInput[]
    connectOrCreate?: Table_Archives_tmpCreateOrConnectWithoutFinalScores_tmpInput | Table_Archives_tmpCreateOrConnectWithoutFinalScores_tmpInput[]
    createMany?: Table_Archives_tmpCreateManyFinalScores_tmpInputEnvelope
    connect?: Table_Archives_tmpWhereUniqueInput | Table_Archives_tmpWhereUniqueInput[]
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateNestedManyWithoutFinalScores_tmpInput = {
    create?: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutFinalScores_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutFinalScores_tmpInput> | Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutFinalScores_tmpInput[] | Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutFinalScores_tmpInput[]
    connectOrCreate?: Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutFinalScores_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutFinalScores_tmpInput[]
    createMany?: Association__Players_And_FinalScores_With_Sessions_tmpCreateManyFinalScores_tmpInputEnvelope
    connect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
  }

  export type Table_Archives_tmpUncheckedCreateNestedManyWithoutFinalScores_tmpInput = {
    create?: XOR<Table_Archives_tmpCreateWithoutFinalScores_tmpInput, Table_Archives_tmpUncheckedCreateWithoutFinalScores_tmpInput> | Table_Archives_tmpCreateWithoutFinalScores_tmpInput[] | Table_Archives_tmpUncheckedCreateWithoutFinalScores_tmpInput[]
    connectOrCreate?: Table_Archives_tmpCreateOrConnectWithoutFinalScores_tmpInput | Table_Archives_tmpCreateOrConnectWithoutFinalScores_tmpInput[]
    createMany?: Table_Archives_tmpCreateManyFinalScores_tmpInputEnvelope
    connect?: Table_Archives_tmpWhereUniqueInput | Table_Archives_tmpWhereUniqueInput[]
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithoutFinalScores_tmpNestedInput = {
    create?: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutFinalScores_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutFinalScores_tmpInput> | Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutFinalScores_tmpInput[] | Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutFinalScores_tmpInput[]
    connectOrCreate?: Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutFinalScores_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutFinalScores_tmpInput[]
    upsert?: Association__Players_And_FinalScores_With_Sessions_tmpUpsertWithWhereUniqueWithoutFinalScores_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpsertWithWhereUniqueWithoutFinalScores_tmpInput[]
    createMany?: Association__Players_And_FinalScores_With_Sessions_tmpCreateManyFinalScores_tmpInputEnvelope
    set?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    disconnect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    delete?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    connect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    update?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithWhereUniqueWithoutFinalScores_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithWhereUniqueWithoutFinalScores_tmpInput[]
    updateMany?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithWhereWithoutFinalScores_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithWhereWithoutFinalScores_tmpInput[]
    deleteMany?: Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput | Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput[]
  }

  export type Table_Archives_tmpUpdateManyWithoutFinalScores_tmpNestedInput = {
    create?: XOR<Table_Archives_tmpCreateWithoutFinalScores_tmpInput, Table_Archives_tmpUncheckedCreateWithoutFinalScores_tmpInput> | Table_Archives_tmpCreateWithoutFinalScores_tmpInput[] | Table_Archives_tmpUncheckedCreateWithoutFinalScores_tmpInput[]
    connectOrCreate?: Table_Archives_tmpCreateOrConnectWithoutFinalScores_tmpInput | Table_Archives_tmpCreateOrConnectWithoutFinalScores_tmpInput[]
    upsert?: Table_Archives_tmpUpsertWithWhereUniqueWithoutFinalScores_tmpInput | Table_Archives_tmpUpsertWithWhereUniqueWithoutFinalScores_tmpInput[]
    createMany?: Table_Archives_tmpCreateManyFinalScores_tmpInputEnvelope
    set?: Table_Archives_tmpWhereUniqueInput | Table_Archives_tmpWhereUniqueInput[]
    disconnect?: Table_Archives_tmpWhereUniqueInput | Table_Archives_tmpWhereUniqueInput[]
    delete?: Table_Archives_tmpWhereUniqueInput | Table_Archives_tmpWhereUniqueInput[]
    connect?: Table_Archives_tmpWhereUniqueInput | Table_Archives_tmpWhereUniqueInput[]
    update?: Table_Archives_tmpUpdateWithWhereUniqueWithoutFinalScores_tmpInput | Table_Archives_tmpUpdateWithWhereUniqueWithoutFinalScores_tmpInput[]
    updateMany?: Table_Archives_tmpUpdateManyWithWhereWithoutFinalScores_tmpInput | Table_Archives_tmpUpdateManyWithWhereWithoutFinalScores_tmpInput[]
    deleteMany?: Table_Archives_tmpScalarWhereInput | Table_Archives_tmpScalarWhereInput[]
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutFinalScores_tmpNestedInput = {
    create?: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutFinalScores_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutFinalScores_tmpInput> | Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutFinalScores_tmpInput[] | Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutFinalScores_tmpInput[]
    connectOrCreate?: Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutFinalScores_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutFinalScores_tmpInput[]
    upsert?: Association__Players_And_FinalScores_With_Sessions_tmpUpsertWithWhereUniqueWithoutFinalScores_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpsertWithWhereUniqueWithoutFinalScores_tmpInput[]
    createMany?: Association__Players_And_FinalScores_With_Sessions_tmpCreateManyFinalScores_tmpInputEnvelope
    set?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    disconnect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    delete?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    connect?: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput | Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput[]
    update?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithWhereUniqueWithoutFinalScores_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithWhereUniqueWithoutFinalScores_tmpInput[]
    updateMany?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithWhereWithoutFinalScores_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithWhereWithoutFinalScores_tmpInput[]
    deleteMany?: Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput | Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput[]
  }

  export type Table_Archives_tmpUncheckedUpdateManyWithoutFinalScores_tmpNestedInput = {
    create?: XOR<Table_Archives_tmpCreateWithoutFinalScores_tmpInput, Table_Archives_tmpUncheckedCreateWithoutFinalScores_tmpInput> | Table_Archives_tmpCreateWithoutFinalScores_tmpInput[] | Table_Archives_tmpUncheckedCreateWithoutFinalScores_tmpInput[]
    connectOrCreate?: Table_Archives_tmpCreateOrConnectWithoutFinalScores_tmpInput | Table_Archives_tmpCreateOrConnectWithoutFinalScores_tmpInput[]
    upsert?: Table_Archives_tmpUpsertWithWhereUniqueWithoutFinalScores_tmpInput | Table_Archives_tmpUpsertWithWhereUniqueWithoutFinalScores_tmpInput[]
    createMany?: Table_Archives_tmpCreateManyFinalScores_tmpInputEnvelope
    set?: Table_Archives_tmpWhereUniqueInput | Table_Archives_tmpWhereUniqueInput[]
    disconnect?: Table_Archives_tmpWhereUniqueInput | Table_Archives_tmpWhereUniqueInput[]
    delete?: Table_Archives_tmpWhereUniqueInput | Table_Archives_tmpWhereUniqueInput[]
    connect?: Table_Archives_tmpWhereUniqueInput | Table_Archives_tmpWhereUniqueInput[]
    update?: Table_Archives_tmpUpdateWithWhereUniqueWithoutFinalScores_tmpInput | Table_Archives_tmpUpdateWithWhereUniqueWithoutFinalScores_tmpInput[]
    updateMany?: Table_Archives_tmpUpdateManyWithWhereWithoutFinalScores_tmpInput | Table_Archives_tmpUpdateManyWithWhereWithoutFinalScores_tmpInput[]
    deleteMany?: Table_Archives_tmpScalarWhereInput | Table_Archives_tmpScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumenum_Users_View_SessionsFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Users_View_Sessions | Enumenum_Users_View_SessionsFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Users_View_Sessions[] | ListEnumenum_Users_View_SessionsFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Users_View_Sessions[] | ListEnumenum_Users_View_SessionsFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Users_View_SessionsFilter<$PrismaModel> | $Enums.enum_Users_View_Sessions
  }

  export type NestedEnumenum_Users_Statistics_ViewFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Users_Statistics_View | Enumenum_Users_Statistics_ViewFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Users_Statistics_View[] | ListEnumenum_Users_Statistics_ViewFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Users_Statistics_View[] | ListEnumenum_Users_Statistics_ViewFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Users_Statistics_ViewFilter<$PrismaModel> | $Enums.enum_Users_Statistics_View
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumenum_Users_View_SessionsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Users_View_Sessions | Enumenum_Users_View_SessionsFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Users_View_Sessions[] | ListEnumenum_Users_View_SessionsFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Users_View_Sessions[] | ListEnumenum_Users_View_SessionsFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Users_View_SessionsWithAggregatesFilter<$PrismaModel> | $Enums.enum_Users_View_Sessions
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumenum_Users_View_SessionsFilter<$PrismaModel>
    _max?: NestedEnumenum_Users_View_SessionsFilter<$PrismaModel>
  }

  export type NestedEnumenum_Users_Statistics_ViewWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Users_Statistics_View | Enumenum_Users_Statistics_ViewFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Users_Statistics_View[] | ListEnumenum_Users_Statistics_ViewFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Users_Statistics_View[] | ListEnumenum_Users_Statistics_ViewFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Users_Statistics_ViewWithAggregatesFilter<$PrismaModel> | $Enums.enum_Users_Statistics_View
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumenum_Users_Statistics_ViewFilter<$PrismaModel>
    _max?: NestedEnumenum_Users_Statistics_ViewFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumenum_Association__Users_And_Sessions_InputTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Association__Users_And_Sessions_InputType | Enumenum_Association__Users_And_Sessions_InputTypeFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Association__Users_And_Sessions_InputType[] | ListEnumenum_Association__Users_And_Sessions_InputTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Association__Users_And_Sessions_InputType[] | ListEnumenum_Association__Users_And_Sessions_InputTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Association__Users_And_Sessions_InputTypeFilter<$PrismaModel> | $Enums.enum_Association__Users_And_Sessions_InputType
  }

  export type NestedEnumenum_Association__Users_And_Sessions_ViewFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Association__Users_And_Sessions_View | Enumenum_Association__Users_And_Sessions_ViewFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Association__Users_And_Sessions_View[] | ListEnumenum_Association__Users_And_Sessions_ViewFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Association__Users_And_Sessions_View[] | ListEnumenum_Association__Users_And_Sessions_ViewFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Association__Users_And_Sessions_ViewFilter<$PrismaModel> | $Enums.enum_Association__Users_And_Sessions_View
  }

  export type NestedEnumenum_Association__Users_And_Sessions_Statistics_ViewFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Association__Users_And_Sessions_Statistics_View | Enumenum_Association__Users_And_Sessions_Statistics_ViewFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Association__Users_And_Sessions_Statistics_View[] | ListEnumenum_Association__Users_And_Sessions_Statistics_ViewFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Association__Users_And_Sessions_Statistics_View[] | ListEnumenum_Association__Users_And_Sessions_Statistics_ViewFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Association__Users_And_Sessions_Statistics_ViewFilter<$PrismaModel> | $Enums.enum_Association__Users_And_Sessions_Statistics_View
  }

  export type NestedEnumenum_Association__Users_And_Sessions_InputTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Association__Users_And_Sessions_InputType | Enumenum_Association__Users_And_Sessions_InputTypeFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Association__Users_And_Sessions_InputType[] | ListEnumenum_Association__Users_And_Sessions_InputTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Association__Users_And_Sessions_InputType[] | ListEnumenum_Association__Users_And_Sessions_InputTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Association__Users_And_Sessions_InputTypeWithAggregatesFilter<$PrismaModel> | $Enums.enum_Association__Users_And_Sessions_InputType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumenum_Association__Users_And_Sessions_InputTypeFilter<$PrismaModel>
    _max?: NestedEnumenum_Association__Users_And_Sessions_InputTypeFilter<$PrismaModel>
  }

  export type NestedEnumenum_Association__Users_And_Sessions_ViewWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Association__Users_And_Sessions_View | Enumenum_Association__Users_And_Sessions_ViewFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Association__Users_And_Sessions_View[] | ListEnumenum_Association__Users_And_Sessions_ViewFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Association__Users_And_Sessions_View[] | ListEnumenum_Association__Users_And_Sessions_ViewFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Association__Users_And_Sessions_ViewWithAggregatesFilter<$PrismaModel> | $Enums.enum_Association__Users_And_Sessions_View
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumenum_Association__Users_And_Sessions_ViewFilter<$PrismaModel>
    _max?: NestedEnumenum_Association__Users_And_Sessions_ViewFilter<$PrismaModel>
  }

  export type NestedEnumenum_Association__Users_And_Sessions_Statistics_ViewWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.enum_Association__Users_And_Sessions_Statistics_View | Enumenum_Association__Users_And_Sessions_Statistics_ViewFieldRefInput<$PrismaModel>
    in?: $Enums.enum_Association__Users_And_Sessions_Statistics_View[] | ListEnumenum_Association__Users_And_Sessions_Statistics_ViewFieldRefInput<$PrismaModel>
    notIn?: $Enums.enum_Association__Users_And_Sessions_Statistics_View[] | ListEnumenum_Association__Users_And_Sessions_Statistics_ViewFieldRefInput<$PrismaModel>
    not?: NestedEnumenum_Association__Users_And_Sessions_Statistics_ViewWithAggregatesFilter<$PrismaModel> | $Enums.enum_Association__Users_And_Sessions_Statistics_View
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumenum_Association__Users_And_Sessions_Statistics_ViewFilter<$PrismaModel>
    _max?: NestedEnumenum_Association__Users_And_Sessions_Statistics_ViewFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Association__Users_And_Sessions_tmpCreateWithoutUserInput = {
    InputType: $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible: boolean
    View: $Enums.enum_Association__Users_And_Sessions_View
    View_Month: number
    View_Year: number
    View_CustomDate: Date | string
    Statistics_Show_Border: boolean
    Statistics_View: $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: Date | string
    updatedAt: Date | string
    Session: Sessions_tmpCreateNestedOneWithoutAssociation__Users_And_Sessions_tmpInput
  }

  export type Association__Users_And_Sessions_tmpUncheckedCreateWithoutUserInput = {
    InputType: $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible: boolean
    View: $Enums.enum_Association__Users_And_Sessions_View
    View_Month: number
    View_Year: number
    View_CustomDate: Date | string
    Statistics_Show_Border: boolean
    Statistics_View: $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: Date | string
    updatedAt: Date | string
    SessionID: number
  }

  export type Association__Users_And_Sessions_tmpCreateOrConnectWithoutUserInput = {
    where: Association__Users_And_Sessions_tmpWhereUniqueInput
    create: XOR<Association__Users_And_Sessions_tmpCreateWithoutUserInput, Association__Users_And_Sessions_tmpUncheckedCreateWithoutUserInput>
  }

  export type Association__Users_And_Sessions_tmpCreateManyUserInputEnvelope = {
    data: Association__Users_And_Sessions_tmpCreateManyUserInput | Association__Users_And_Sessions_tmpCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Association__Users_And_Sessions_tmpUpsertWithWhereUniqueWithoutUserInput = {
    where: Association__Users_And_Sessions_tmpWhereUniqueInput
    update: XOR<Association__Users_And_Sessions_tmpUpdateWithoutUserInput, Association__Users_And_Sessions_tmpUncheckedUpdateWithoutUserInput>
    create: XOR<Association__Users_And_Sessions_tmpCreateWithoutUserInput, Association__Users_And_Sessions_tmpUncheckedCreateWithoutUserInput>
  }

  export type Association__Users_And_Sessions_tmpUpdateWithWhereUniqueWithoutUserInput = {
    where: Association__Users_And_Sessions_tmpWhereUniqueInput
    data: XOR<Association__Users_And_Sessions_tmpUpdateWithoutUserInput, Association__Users_And_Sessions_tmpUncheckedUpdateWithoutUserInput>
  }

  export type Association__Users_And_Sessions_tmpUpdateManyWithWhereWithoutUserInput = {
    where: Association__Users_And_Sessions_tmpScalarWhereInput
    data: XOR<Association__Users_And_Sessions_tmpUpdateManyMutationInput, Association__Users_And_Sessions_tmpUncheckedUpdateManyWithoutUserInput>
  }

  export type Association__Users_And_Sessions_tmpScalarWhereInput = {
    AND?: Association__Users_And_Sessions_tmpScalarWhereInput | Association__Users_And_Sessions_tmpScalarWhereInput[]
    OR?: Association__Users_And_Sessions_tmpScalarWhereInput[]
    NOT?: Association__Users_And_Sessions_tmpScalarWhereInput | Association__Users_And_Sessions_tmpScalarWhereInput[]
    InputType?: Enumenum_Association__Users_And_Sessions_InputTypeFilter<"Association__Users_And_Sessions_tmp"> | $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible?: BoolFilter<"Association__Users_And_Sessions_tmp"> | boolean
    View?: Enumenum_Association__Users_And_Sessions_ViewFilter<"Association__Users_And_Sessions_tmp"> | $Enums.enum_Association__Users_And_Sessions_View
    View_Month?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    View_Year?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    View_CustomDate?: DateTimeFilter<"Association__Users_And_Sessions_tmp"> | Date | string
    Statistics_Show_Border?: BoolFilter<"Association__Users_And_Sessions_tmp"> | boolean
    Statistics_View?: Enumenum_Association__Users_And_Sessions_Statistics_ViewFilter<"Association__Users_And_Sessions_tmp"> | $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    Statistics_View_Year?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    createdAt?: DateTimeFilter<"Association__Users_And_Sessions_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Association__Users_And_Sessions_tmp"> | Date | string
    UserID?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
    SessionID?: IntFilter<"Association__Users_And_Sessions_tmp"> | number
  }

  export type Sessions_tmpCreateWithoutAssociation__Users_And_Sessions_tmpInput = {
    Name: string
    Color: string
    Columns: number
    View_List_Years?: Sessions_tmpCreateView_List_YearsInput | number[]
    CurrentGameStart?: Date | string | null
    LastPlayed: Date | string
    createdAt: Date | string
    updatedAt?: Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpCreateNestedManyWithoutSessions_tmpInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpCreateNestedManyWithoutSessions_tmpInput
  }

  export type Sessions_tmpUncheckedCreateWithoutAssociation__Users_And_Sessions_tmpInput = {
    id?: number
    Name: string
    Color: string
    Columns: number
    View_List_Years?: Sessions_tmpCreateView_List_YearsInput | number[]
    CurrentGameStart?: Date | string | null
    LastPlayed: Date | string
    createdAt: Date | string
    updatedAt?: Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateNestedManyWithoutSessions_tmpInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUncheckedCreateNestedManyWithoutSessions_tmpInput
  }

  export type Sessions_tmpCreateOrConnectWithoutAssociation__Users_And_Sessions_tmpInput = {
    where: Sessions_tmpWhereUniqueInput
    create: XOR<Sessions_tmpCreateWithoutAssociation__Users_And_Sessions_tmpInput, Sessions_tmpUncheckedCreateWithoutAssociation__Users_And_Sessions_tmpInput>
  }

  export type Users_tmpCreateWithoutList___Association__Users_And_SessionsInput = {
    Name: string
    Password: string
    RefreshToken?: string | null
    DarkMode: boolean
    Show_Session_Names: boolean
    Show_Session_Date: boolean
    View_Sessions: $Enums.enum_Users_View_Sessions
    View_Sessions_Desc: boolean
    Statistics_View: $Enums.enum_Users_Statistics_View
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type Users_tmpUncheckedCreateWithoutList___Association__Users_And_SessionsInput = {
    id?: number
    Name: string
    Password: string
    RefreshToken?: string | null
    DarkMode: boolean
    Show_Session_Names: boolean
    Show_Session_Date: boolean
    View_Sessions: $Enums.enum_Users_View_Sessions
    View_Sessions_Desc: boolean
    Statistics_View: $Enums.enum_Users_Statistics_View
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type Users_tmpCreateOrConnectWithoutList___Association__Users_And_SessionsInput = {
    where: Users_tmpWhereUniqueInput
    create: XOR<Users_tmpCreateWithoutList___Association__Users_And_SessionsInput, Users_tmpUncheckedCreateWithoutList___Association__Users_And_SessionsInput>
  }

  export type Sessions_tmpUpsertWithoutAssociation__Users_And_Sessions_tmpInput = {
    update: XOR<Sessions_tmpUpdateWithoutAssociation__Users_And_Sessions_tmpInput, Sessions_tmpUncheckedUpdateWithoutAssociation__Users_And_Sessions_tmpInput>
    create: XOR<Sessions_tmpCreateWithoutAssociation__Users_And_Sessions_tmpInput, Sessions_tmpUncheckedCreateWithoutAssociation__Users_And_Sessions_tmpInput>
    where?: Sessions_tmpWhereInput
  }

  export type Sessions_tmpUpdateToOneWithWhereWithoutAssociation__Users_And_Sessions_tmpInput = {
    where?: Sessions_tmpWhereInput
    data: XOR<Sessions_tmpUpdateWithoutAssociation__Users_And_Sessions_tmpInput, Sessions_tmpUncheckedUpdateWithoutAssociation__Users_And_Sessions_tmpInput>
  }

  export type Sessions_tmpUpdateWithoutAssociation__Users_And_Sessions_tmpInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    Columns?: IntFieldUpdateOperationsInput | number
    View_List_Years?: Sessions_tmpUpdateView_List_YearsInput | number[]
    CurrentGameStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithoutSessions_tmpNestedInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUpdateManyWithoutSessions_tmpNestedInput
  }

  export type Sessions_tmpUncheckedUpdateWithoutAssociation__Users_And_Sessions_tmpInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    Columns?: IntFieldUpdateOperationsInput | number
    View_List_Years?: Sessions_tmpUpdateView_List_YearsInput | number[]
    CurrentGameStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutSessions_tmpNestedInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUncheckedUpdateManyWithoutSessions_tmpNestedInput
  }

  export type Users_tmpUpsertWithoutList___Association__Users_And_SessionsInput = {
    update: XOR<Users_tmpUpdateWithoutList___Association__Users_And_SessionsInput, Users_tmpUncheckedUpdateWithoutList___Association__Users_And_SessionsInput>
    create: XOR<Users_tmpCreateWithoutList___Association__Users_And_SessionsInput, Users_tmpUncheckedCreateWithoutList___Association__Users_And_SessionsInput>
    where?: Users_tmpWhereInput
  }

  export type Users_tmpUpdateToOneWithWhereWithoutList___Association__Users_And_SessionsInput = {
    where?: Users_tmpWhereInput
    data: XOR<Users_tmpUpdateWithoutList___Association__Users_And_SessionsInput, Users_tmpUncheckedUpdateWithoutList___Association__Users_And_SessionsInput>
  }

  export type Users_tmpUpdateWithoutList___Association__Users_And_SessionsInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    RefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    DarkMode?: BoolFieldUpdateOperationsInput | boolean
    Show_Session_Names?: BoolFieldUpdateOperationsInput | boolean
    Show_Session_Date?: BoolFieldUpdateOperationsInput | boolean
    View_Sessions?: Enumenum_Users_View_SessionsFieldUpdateOperationsInput | $Enums.enum_Users_View_Sessions
    View_Sessions_Desc?: BoolFieldUpdateOperationsInput | boolean
    Statistics_View?: Enumenum_Users_Statistics_ViewFieldUpdateOperationsInput | $Enums.enum_Users_Statistics_View
    Statistics_View_Month?: IntFieldUpdateOperationsInput | number
    Statistics_View_Year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Users_tmpUncheckedUpdateWithoutList___Association__Users_And_SessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    RefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    DarkMode?: BoolFieldUpdateOperationsInput | boolean
    Show_Session_Names?: BoolFieldUpdateOperationsInput | boolean
    Show_Session_Date?: BoolFieldUpdateOperationsInput | boolean
    View_Sessions?: Enumenum_Users_View_SessionsFieldUpdateOperationsInput | $Enums.enum_Users_View_Sessions
    View_Sessions_Desc?: BoolFieldUpdateOperationsInput | boolean
    Statistics_View?: Enumenum_Users_Statistics_ViewFieldUpdateOperationsInput | $Enums.enum_Users_Statistics_View
    Statistics_View_Month?: IntFieldUpdateOperationsInput | number
    Statistics_View_Year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutSessions_tmpInput = {
    IsWinner: boolean
    Score: number
    Wins__Before: number
    Wins__After: number
    Wins__Before_Year: number
    Wins__After_Year: number
    Wins__Before_Month: number
    Wins__After_Month: number
    Wins__Before_SinceCustomDate?: number | null
    Wins__After_SinceCustomDate?: number | null
    createdAt: Date | string
    updatedAt: Date | string
    FinalScores_tmp: FinalScores_tmpCreateNestedOneWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
    Players_tmp: Players_tmpCreateNestedOneWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutSessions_tmpInput = {
    IsWinner: boolean
    Score: number
    Wins__Before: number
    Wins__After: number
    Wins__Before_Year: number
    Wins__After_Year: number
    Wins__Before_Month: number
    Wins__After_Month: number
    Wins__Before_SinceCustomDate?: number | null
    Wins__After_SinceCustomDate?: number | null
    createdAt: Date | string
    updatedAt: Date | string
    PlayerID: number
    FinalScoreID: number
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutSessions_tmpInput = {
    where: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    create: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutSessions_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutSessions_tmpInput>
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateManySessions_tmpInputEnvelope = {
    data: Association__Players_And_FinalScores_With_Sessions_tmpCreateManySessions_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateManySessions_tmpInput[]
    skipDuplicates?: boolean
  }

  export type Association__Sessions_And_Players_tmpCreateWithoutSessions_tmpInput = {
    Gnadenwurf_Used: boolean
    Order_Index: number
    createdAt: Date | string
    updatedAt: Date | string
    Players_tmp: Players_tmpCreateNestedOneWithoutAssociation__Sessions_And_Players_tmpInput
  }

  export type Association__Sessions_And_Players_tmpUncheckedCreateWithoutSessions_tmpInput = {
    Gnadenwurf_Used: boolean
    Order_Index: number
    createdAt: Date | string
    updatedAt: Date | string
    PlayerID: number
  }

  export type Association__Sessions_And_Players_tmpCreateOrConnectWithoutSessions_tmpInput = {
    where: Association__Sessions_And_Players_tmpWhereUniqueInput
    create: XOR<Association__Sessions_And_Players_tmpCreateWithoutSessions_tmpInput, Association__Sessions_And_Players_tmpUncheckedCreateWithoutSessions_tmpInput>
  }

  export type Association__Sessions_And_Players_tmpCreateManySessions_tmpInputEnvelope = {
    data: Association__Sessions_And_Players_tmpCreateManySessions_tmpInput | Association__Sessions_And_Players_tmpCreateManySessions_tmpInput[]
    skipDuplicates?: boolean
  }

  export type Association__Users_And_Sessions_tmpCreateWithoutSessionInput = {
    InputType: $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible: boolean
    View: $Enums.enum_Association__Users_And_Sessions_View
    View_Month: number
    View_Year: number
    View_CustomDate: Date | string
    Statistics_Show_Border: boolean
    Statistics_View: $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: Date | string
    updatedAt: Date | string
    User: Users_tmpCreateNestedOneWithoutList___Association__Users_And_SessionsInput
  }

  export type Association__Users_And_Sessions_tmpUncheckedCreateWithoutSessionInput = {
    InputType: $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible: boolean
    View: $Enums.enum_Association__Users_And_Sessions_View
    View_Month: number
    View_Year: number
    View_CustomDate: Date | string
    Statistics_Show_Border: boolean
    Statistics_View: $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: Date | string
    updatedAt: Date | string
    UserID: number
  }

  export type Association__Users_And_Sessions_tmpCreateOrConnectWithoutSessionInput = {
    where: Association__Users_And_Sessions_tmpWhereUniqueInput
    create: XOR<Association__Users_And_Sessions_tmpCreateWithoutSessionInput, Association__Users_And_Sessions_tmpUncheckedCreateWithoutSessionInput>
  }

  export type Association__Users_And_Sessions_tmpCreateManySessionInputEnvelope = {
    data: Association__Users_And_Sessions_tmpCreateManySessionInput | Association__Users_And_Sessions_tmpCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpsertWithWhereUniqueWithoutSessions_tmpInput = {
    where: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    update: XOR<Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithoutSessions_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateWithoutSessions_tmpInput>
    create: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutSessions_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutSessions_tmpInput>
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithWhereUniqueWithoutSessions_tmpInput = {
    where: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    data: XOR<Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithoutSessions_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateWithoutSessions_tmpInput>
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithWhereWithoutSessions_tmpInput = {
    where: Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput
    data: XOR<Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyMutationInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutSessions_tmpInput>
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput = {
    AND?: Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput | Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput[]
    OR?: Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput[]
    NOT?: Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput | Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput[]
    IsWinner?: BoolFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | boolean
    Score?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__Before?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__After?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__Before_Year?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__After_Year?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__Before_Month?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__After_Month?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    Wins__Before_SinceCustomDate?: IntNullableFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number | null
    Wins__After_SinceCustomDate?: IntNullableFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number | null
    createdAt?: DateTimeFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | Date | string
    SessionID?: IntNullableFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number | null
    PlayerID?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
    FinalScoreID?: IntFilter<"Association__Players_And_FinalScores_With_Sessions_tmp"> | number
  }

  export type Association__Sessions_And_Players_tmpUpsertWithWhereUniqueWithoutSessions_tmpInput = {
    where: Association__Sessions_And_Players_tmpWhereUniqueInput
    update: XOR<Association__Sessions_And_Players_tmpUpdateWithoutSessions_tmpInput, Association__Sessions_And_Players_tmpUncheckedUpdateWithoutSessions_tmpInput>
    create: XOR<Association__Sessions_And_Players_tmpCreateWithoutSessions_tmpInput, Association__Sessions_And_Players_tmpUncheckedCreateWithoutSessions_tmpInput>
  }

  export type Association__Sessions_And_Players_tmpUpdateWithWhereUniqueWithoutSessions_tmpInput = {
    where: Association__Sessions_And_Players_tmpWhereUniqueInput
    data: XOR<Association__Sessions_And_Players_tmpUpdateWithoutSessions_tmpInput, Association__Sessions_And_Players_tmpUncheckedUpdateWithoutSessions_tmpInput>
  }

  export type Association__Sessions_And_Players_tmpUpdateManyWithWhereWithoutSessions_tmpInput = {
    where: Association__Sessions_And_Players_tmpScalarWhereInput
    data: XOR<Association__Sessions_And_Players_tmpUpdateManyMutationInput, Association__Sessions_And_Players_tmpUncheckedUpdateManyWithoutSessions_tmpInput>
  }

  export type Association__Sessions_And_Players_tmpScalarWhereInput = {
    AND?: Association__Sessions_And_Players_tmpScalarWhereInput | Association__Sessions_And_Players_tmpScalarWhereInput[]
    OR?: Association__Sessions_And_Players_tmpScalarWhereInput[]
    NOT?: Association__Sessions_And_Players_tmpScalarWhereInput | Association__Sessions_And_Players_tmpScalarWhereInput[]
    Gnadenwurf_Used?: BoolFilter<"Association__Sessions_And_Players_tmp"> | boolean
    Order_Index?: IntFilter<"Association__Sessions_And_Players_tmp"> | number
    createdAt?: DateTimeFilter<"Association__Sessions_And_Players_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Association__Sessions_And_Players_tmp"> | Date | string
    SessionID?: IntFilter<"Association__Sessions_And_Players_tmp"> | number
    PlayerID?: IntFilter<"Association__Sessions_And_Players_tmp"> | number
  }

  export type Association__Users_And_Sessions_tmpUpsertWithWhereUniqueWithoutSessionInput = {
    where: Association__Users_And_Sessions_tmpWhereUniqueInput
    update: XOR<Association__Users_And_Sessions_tmpUpdateWithoutSessionInput, Association__Users_And_Sessions_tmpUncheckedUpdateWithoutSessionInput>
    create: XOR<Association__Users_And_Sessions_tmpCreateWithoutSessionInput, Association__Users_And_Sessions_tmpUncheckedCreateWithoutSessionInput>
  }

  export type Association__Users_And_Sessions_tmpUpdateWithWhereUniqueWithoutSessionInput = {
    where: Association__Users_And_Sessions_tmpWhereUniqueInput
    data: XOR<Association__Users_And_Sessions_tmpUpdateWithoutSessionInput, Association__Users_And_Sessions_tmpUncheckedUpdateWithoutSessionInput>
  }

  export type Association__Users_And_Sessions_tmpUpdateManyWithWhereWithoutSessionInput = {
    where: Association__Users_And_Sessions_tmpScalarWhereInput
    data: XOR<Association__Users_And_Sessions_tmpUpdateManyMutationInput, Association__Users_And_Sessions_tmpUncheckedUpdateManyWithoutSessionInput>
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutPlayers_tmpInput = {
    IsWinner: boolean
    Score: number
    Wins__Before: number
    Wins__After: number
    Wins__Before_Year: number
    Wins__After_Year: number
    Wins__Before_Month: number
    Wins__After_Month: number
    Wins__Before_SinceCustomDate?: number | null
    Wins__After_SinceCustomDate?: number | null
    createdAt: Date | string
    updatedAt: Date | string
    FinalScores_tmp: FinalScores_tmpCreateNestedOneWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
    Sessions_tmp?: Sessions_tmpCreateNestedOneWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutPlayers_tmpInput = {
    IsWinner: boolean
    Score: number
    Wins__Before: number
    Wins__After: number
    Wins__Before_Year: number
    Wins__After_Year: number
    Wins__Before_Month: number
    Wins__After_Month: number
    Wins__Before_SinceCustomDate?: number | null
    Wins__After_SinceCustomDate?: number | null
    createdAt: Date | string
    updatedAt: Date | string
    SessionID?: number | null
    FinalScoreID: number
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutPlayers_tmpInput = {
    where: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    create: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutPlayers_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutPlayers_tmpInput>
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateManyPlayers_tmpInputEnvelope = {
    data: Association__Players_And_FinalScores_With_Sessions_tmpCreateManyPlayers_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateManyPlayers_tmpInput[]
    skipDuplicates?: boolean
  }

  export type Association__Sessions_And_Players_tmpCreateWithoutPlayers_tmpInput = {
    Gnadenwurf_Used: boolean
    Order_Index: number
    createdAt: Date | string
    updatedAt: Date | string
    Sessions_tmp: Sessions_tmpCreateNestedOneWithoutAssociation__Sessions_And_Players_tmpInput
  }

  export type Association__Sessions_And_Players_tmpUncheckedCreateWithoutPlayers_tmpInput = {
    Gnadenwurf_Used: boolean
    Order_Index: number
    createdAt: Date | string
    updatedAt: Date | string
    SessionID: number
  }

  export type Association__Sessions_And_Players_tmpCreateOrConnectWithoutPlayers_tmpInput = {
    where: Association__Sessions_And_Players_tmpWhereUniqueInput
    create: XOR<Association__Sessions_And_Players_tmpCreateWithoutPlayers_tmpInput, Association__Sessions_And_Players_tmpUncheckedCreateWithoutPlayers_tmpInput>
  }

  export type Association__Sessions_And_Players_tmpCreateManyPlayers_tmpInputEnvelope = {
    data: Association__Sessions_And_Players_tmpCreateManyPlayers_tmpInput | Association__Sessions_And_Players_tmpCreateManyPlayers_tmpInput[]
    skipDuplicates?: boolean
  }

  export type Table_Columns_tmpCreateWithoutPlayers_tmpInput = {
    Column: number
    Upper_Table_1?: number | null
    Upper_Table_2?: number | null
    Upper_Table_3?: number | null
    Upper_Table_4?: number | null
    Upper_Table_5?: number | null
    Upper_Table_6?: number | null
    Upper_Table_Score: number
    Upper_Table_Add35?: number | null
    Upper_Table_TotalScore?: number | null
    Bottom_Table_1?: number | null
    Bottom_Table_2?: number | null
    Bottom_Table_3?: number | null
    Bottom_Table_4?: number | null
    Bottom_Table_5?: number | null
    Bottom_Table_6?: number | null
    Bottom_Table_7?: number | null
    Bottom_Table_Score?: number | null
    Bottom_Table_TotalScore?: number | null
    TotalScore: number
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type Table_Columns_tmpUncheckedCreateWithoutPlayers_tmpInput = {
    id?: number
    Column: number
    Upper_Table_1?: number | null
    Upper_Table_2?: number | null
    Upper_Table_3?: number | null
    Upper_Table_4?: number | null
    Upper_Table_5?: number | null
    Upper_Table_6?: number | null
    Upper_Table_Score: number
    Upper_Table_Add35?: number | null
    Upper_Table_TotalScore?: number | null
    Bottom_Table_1?: number | null
    Bottom_Table_2?: number | null
    Bottom_Table_3?: number | null
    Bottom_Table_4?: number | null
    Bottom_Table_5?: number | null
    Bottom_Table_6?: number | null
    Bottom_Table_7?: number | null
    Bottom_Table_Score?: number | null
    Bottom_Table_TotalScore?: number | null
    TotalScore: number
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type Table_Columns_tmpCreateOrConnectWithoutPlayers_tmpInput = {
    where: Table_Columns_tmpWhereUniqueInput
    create: XOR<Table_Columns_tmpCreateWithoutPlayers_tmpInput, Table_Columns_tmpUncheckedCreateWithoutPlayers_tmpInput>
  }

  export type Table_Columns_tmpCreateManyPlayers_tmpInputEnvelope = {
    data: Table_Columns_tmpCreateManyPlayers_tmpInput | Table_Columns_tmpCreateManyPlayers_tmpInput[]
    skipDuplicates?: boolean
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpsertWithWhereUniqueWithoutPlayers_tmpInput = {
    where: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    update: XOR<Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithoutPlayers_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateWithoutPlayers_tmpInput>
    create: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutPlayers_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutPlayers_tmpInput>
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithWhereUniqueWithoutPlayers_tmpInput = {
    where: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    data: XOR<Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithoutPlayers_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateWithoutPlayers_tmpInput>
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithWhereWithoutPlayers_tmpInput = {
    where: Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput
    data: XOR<Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyMutationInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutPlayers_tmpInput>
  }

  export type Association__Sessions_And_Players_tmpUpsertWithWhereUniqueWithoutPlayers_tmpInput = {
    where: Association__Sessions_And_Players_tmpWhereUniqueInput
    update: XOR<Association__Sessions_And_Players_tmpUpdateWithoutPlayers_tmpInput, Association__Sessions_And_Players_tmpUncheckedUpdateWithoutPlayers_tmpInput>
    create: XOR<Association__Sessions_And_Players_tmpCreateWithoutPlayers_tmpInput, Association__Sessions_And_Players_tmpUncheckedCreateWithoutPlayers_tmpInput>
  }

  export type Association__Sessions_And_Players_tmpUpdateWithWhereUniqueWithoutPlayers_tmpInput = {
    where: Association__Sessions_And_Players_tmpWhereUniqueInput
    data: XOR<Association__Sessions_And_Players_tmpUpdateWithoutPlayers_tmpInput, Association__Sessions_And_Players_tmpUncheckedUpdateWithoutPlayers_tmpInput>
  }

  export type Association__Sessions_And_Players_tmpUpdateManyWithWhereWithoutPlayers_tmpInput = {
    where: Association__Sessions_And_Players_tmpScalarWhereInput
    data: XOR<Association__Sessions_And_Players_tmpUpdateManyMutationInput, Association__Sessions_And_Players_tmpUncheckedUpdateManyWithoutPlayers_tmpInput>
  }

  export type Table_Columns_tmpUpsertWithWhereUniqueWithoutPlayers_tmpInput = {
    where: Table_Columns_tmpWhereUniqueInput
    update: XOR<Table_Columns_tmpUpdateWithoutPlayers_tmpInput, Table_Columns_tmpUncheckedUpdateWithoutPlayers_tmpInput>
    create: XOR<Table_Columns_tmpCreateWithoutPlayers_tmpInput, Table_Columns_tmpUncheckedCreateWithoutPlayers_tmpInput>
  }

  export type Table_Columns_tmpUpdateWithWhereUniqueWithoutPlayers_tmpInput = {
    where: Table_Columns_tmpWhereUniqueInput
    data: XOR<Table_Columns_tmpUpdateWithoutPlayers_tmpInput, Table_Columns_tmpUncheckedUpdateWithoutPlayers_tmpInput>
  }

  export type Table_Columns_tmpUpdateManyWithWhereWithoutPlayers_tmpInput = {
    where: Table_Columns_tmpScalarWhereInput
    data: XOR<Table_Columns_tmpUpdateManyMutationInput, Table_Columns_tmpUncheckedUpdateManyWithoutPlayers_tmpInput>
  }

  export type Table_Columns_tmpScalarWhereInput = {
    AND?: Table_Columns_tmpScalarWhereInput | Table_Columns_tmpScalarWhereInput[]
    OR?: Table_Columns_tmpScalarWhereInput[]
    NOT?: Table_Columns_tmpScalarWhereInput | Table_Columns_tmpScalarWhereInput[]
    id?: IntFilter<"Table_Columns_tmp"> | number
    Column?: IntFilter<"Table_Columns_tmp"> | number
    Upper_Table_1?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_2?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_3?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_4?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_5?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_6?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_Score?: IntFilter<"Table_Columns_tmp"> | number
    Upper_Table_Add35?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Upper_Table_TotalScore?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_1?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_2?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_3?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_4?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_5?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_6?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_7?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_Score?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    Bottom_Table_TotalScore?: IntNullableFilter<"Table_Columns_tmp"> | number | null
    TotalScore?: IntFilter<"Table_Columns_tmp"> | number
    createdAt?: DateTimeFilter<"Table_Columns_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Table_Columns_tmp"> | Date | string
    PlayerID?: IntNullableFilter<"Table_Columns_tmp"> | number | null
  }

  export type Players_tmpCreateWithoutTable_Columns_tmpInput = {
    Name: string
    Color: string
    createdAt: Date | string
    updatedAt?: Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpCreateNestedManyWithoutPlayers_tmpInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpCreateNestedManyWithoutPlayers_tmpInput
  }

  export type Players_tmpUncheckedCreateWithoutTable_Columns_tmpInput = {
    id?: number
    Name: string
    Color: string
    createdAt: Date | string
    updatedAt?: Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateNestedManyWithoutPlayers_tmpInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUncheckedCreateNestedManyWithoutPlayers_tmpInput
  }

  export type Players_tmpCreateOrConnectWithoutTable_Columns_tmpInput = {
    where: Players_tmpWhereUniqueInput
    create: XOR<Players_tmpCreateWithoutTable_Columns_tmpInput, Players_tmpUncheckedCreateWithoutTable_Columns_tmpInput>
  }

  export type Players_tmpUpsertWithoutTable_Columns_tmpInput = {
    update: XOR<Players_tmpUpdateWithoutTable_Columns_tmpInput, Players_tmpUncheckedUpdateWithoutTable_Columns_tmpInput>
    create: XOR<Players_tmpCreateWithoutTable_Columns_tmpInput, Players_tmpUncheckedCreateWithoutTable_Columns_tmpInput>
    where?: Players_tmpWhereInput
  }

  export type Players_tmpUpdateToOneWithWhereWithoutTable_Columns_tmpInput = {
    where?: Players_tmpWhereInput
    data: XOR<Players_tmpUpdateWithoutTable_Columns_tmpInput, Players_tmpUncheckedUpdateWithoutTable_Columns_tmpInput>
  }

  export type Players_tmpUpdateWithoutTable_Columns_tmpInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithoutPlayers_tmpNestedInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUpdateManyWithoutPlayers_tmpNestedInput
  }

  export type Players_tmpUncheckedUpdateWithoutTable_Columns_tmpInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutPlayers_tmpNestedInput
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUncheckedUpdateManyWithoutPlayers_tmpNestedInput
  }

  export type FinalScores_tmpCreateWithoutTable_Archives_tmpInput = {
    Start: Date | string
    End: Date | string
    Columns: number
    Surrendered: boolean
    createdAt: Date | string
    updatedAt: Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpCreateNestedManyWithoutFinalScores_tmpInput
  }

  export type FinalScores_tmpUncheckedCreateWithoutTable_Archives_tmpInput = {
    id?: number
    Start: Date | string
    End: Date | string
    Columns: number
    Surrendered: boolean
    createdAt: Date | string
    updatedAt: Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateNestedManyWithoutFinalScores_tmpInput
  }

  export type FinalScores_tmpCreateOrConnectWithoutTable_Archives_tmpInput = {
    where: FinalScores_tmpWhereUniqueInput
    create: XOR<FinalScores_tmpCreateWithoutTable_Archives_tmpInput, FinalScores_tmpUncheckedCreateWithoutTable_Archives_tmpInput>
  }

  export type FinalScores_tmpUpsertWithoutTable_Archives_tmpInput = {
    update: XOR<FinalScores_tmpUpdateWithoutTable_Archives_tmpInput, FinalScores_tmpUncheckedUpdateWithoutTable_Archives_tmpInput>
    create: XOR<FinalScores_tmpCreateWithoutTable_Archives_tmpInput, FinalScores_tmpUncheckedCreateWithoutTable_Archives_tmpInput>
    where?: FinalScores_tmpWhereInput
  }

  export type FinalScores_tmpUpdateToOneWithWhereWithoutTable_Archives_tmpInput = {
    where?: FinalScores_tmpWhereInput
    data: XOR<FinalScores_tmpUpdateWithoutTable_Archives_tmpInput, FinalScores_tmpUncheckedUpdateWithoutTable_Archives_tmpInput>
  }

  export type FinalScores_tmpUpdateWithoutTable_Archives_tmpInput = {
    Start?: DateTimeFieldUpdateOperationsInput | Date | string
    End?: DateTimeFieldUpdateOperationsInput | Date | string
    Columns?: IntFieldUpdateOperationsInput | number
    Surrendered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithoutFinalScores_tmpNestedInput
  }

  export type FinalScores_tmpUncheckedUpdateWithoutTable_Archives_tmpInput = {
    id?: IntFieldUpdateOperationsInput | number
    Start?: DateTimeFieldUpdateOperationsInput | Date | string
    End?: DateTimeFieldUpdateOperationsInput | Date | string
    Columns?: IntFieldUpdateOperationsInput | number
    Surrendered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutFinalScores_tmpNestedInput
  }

  export type FinalScores_tmpCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    Start: Date | string
    End: Date | string
    Columns: number
    Surrendered: boolean
    createdAt: Date | string
    updatedAt: Date | string
    Table_Archives_tmp?: Table_Archives_tmpCreateNestedManyWithoutFinalScores_tmpInput
  }

  export type FinalScores_tmpUncheckedCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    id?: number
    Start: Date | string
    End: Date | string
    Columns: number
    Surrendered: boolean
    createdAt: Date | string
    updatedAt: Date | string
    Table_Archives_tmp?: Table_Archives_tmpUncheckedCreateNestedManyWithoutFinalScores_tmpInput
  }

  export type FinalScores_tmpCreateOrConnectWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    where: FinalScores_tmpWhereUniqueInput
    create: XOR<FinalScores_tmpCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, FinalScores_tmpUncheckedCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
  }

  export type Sessions_tmpCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    Name: string
    Color: string
    Columns: number
    View_List_Years?: Sessions_tmpCreateView_List_YearsInput | number[]
    CurrentGameStart?: Date | string | null
    LastPlayed: Date | string
    createdAt: Date | string
    updatedAt?: Date | string
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpCreateNestedManyWithoutSessions_tmpInput
    Association__Users_And_Sessions_tmp?: Association__Users_And_Sessions_tmpCreateNestedManyWithoutSessionInput
  }

  export type Sessions_tmpUncheckedCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    id?: number
    Name: string
    Color: string
    Columns: number
    View_List_Years?: Sessions_tmpCreateView_List_YearsInput | number[]
    CurrentGameStart?: Date | string | null
    LastPlayed: Date | string
    createdAt: Date | string
    updatedAt?: Date | string
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUncheckedCreateNestedManyWithoutSessions_tmpInput
    Association__Users_And_Sessions_tmp?: Association__Users_And_Sessions_tmpUncheckedCreateNestedManyWithoutSessionInput
  }

  export type Sessions_tmpCreateOrConnectWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    where: Sessions_tmpWhereUniqueInput
    create: XOR<Sessions_tmpCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, Sessions_tmpUncheckedCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
  }

  export type Players_tmpCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    Name: string
    Color: string
    createdAt: Date | string
    updatedAt?: Date | string
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpCreateNestedManyWithoutPlayers_tmpInput
    Table_Columns_tmp?: Table_Columns_tmpCreateNestedManyWithoutPlayers_tmpInput
  }

  export type Players_tmpUncheckedCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    id?: number
    Name: string
    Color: string
    createdAt: Date | string
    updatedAt?: Date | string
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUncheckedCreateNestedManyWithoutPlayers_tmpInput
    Table_Columns_tmp?: Table_Columns_tmpUncheckedCreateNestedManyWithoutPlayers_tmpInput
  }

  export type Players_tmpCreateOrConnectWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    where: Players_tmpWhereUniqueInput
    create: XOR<Players_tmpCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, Players_tmpUncheckedCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
  }

  export type FinalScores_tmpUpsertWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    update: XOR<FinalScores_tmpUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, FinalScores_tmpUncheckedUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
    create: XOR<FinalScores_tmpCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, FinalScores_tmpUncheckedCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
    where?: FinalScores_tmpWhereInput
  }

  export type FinalScores_tmpUpdateToOneWithWhereWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    where?: FinalScores_tmpWhereInput
    data: XOR<FinalScores_tmpUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, FinalScores_tmpUncheckedUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
  }

  export type FinalScores_tmpUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    Start?: DateTimeFieldUpdateOperationsInput | Date | string
    End?: DateTimeFieldUpdateOperationsInput | Date | string
    Columns?: IntFieldUpdateOperationsInput | number
    Surrendered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Table_Archives_tmp?: Table_Archives_tmpUpdateManyWithoutFinalScores_tmpNestedInput
  }

  export type FinalScores_tmpUncheckedUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    id?: IntFieldUpdateOperationsInput | number
    Start?: DateTimeFieldUpdateOperationsInput | Date | string
    End?: DateTimeFieldUpdateOperationsInput | Date | string
    Columns?: IntFieldUpdateOperationsInput | number
    Surrendered?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Table_Archives_tmp?: Table_Archives_tmpUncheckedUpdateManyWithoutFinalScores_tmpNestedInput
  }

  export type Sessions_tmpUpsertWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    update: XOR<Sessions_tmpUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, Sessions_tmpUncheckedUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
    create: XOR<Sessions_tmpCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, Sessions_tmpUncheckedCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
    where?: Sessions_tmpWhereInput
  }

  export type Sessions_tmpUpdateToOneWithWhereWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    where?: Sessions_tmpWhereInput
    data: XOR<Sessions_tmpUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, Sessions_tmpUncheckedUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
  }

  export type Sessions_tmpUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    Columns?: IntFieldUpdateOperationsInput | number
    View_List_Years?: Sessions_tmpUpdateView_List_YearsInput | number[]
    CurrentGameStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUpdateManyWithoutSessions_tmpNestedInput
    Association__Users_And_Sessions_tmp?: Association__Users_And_Sessions_tmpUpdateManyWithoutSessionNestedInput
  }

  export type Sessions_tmpUncheckedUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    Columns?: IntFieldUpdateOperationsInput | number
    View_List_Years?: Sessions_tmpUpdateView_List_YearsInput | number[]
    CurrentGameStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUncheckedUpdateManyWithoutSessions_tmpNestedInput
    Association__Users_And_Sessions_tmp?: Association__Users_And_Sessions_tmpUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type Players_tmpUpsertWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    update: XOR<Players_tmpUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, Players_tmpUncheckedUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
    create: XOR<Players_tmpCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, Players_tmpUncheckedCreateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
    where?: Players_tmpWhereInput
  }

  export type Players_tmpUpdateToOneWithWhereWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    where?: Players_tmpWhereInput
    data: XOR<Players_tmpUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput, Players_tmpUncheckedUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput>
  }

  export type Players_tmpUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUpdateManyWithoutPlayers_tmpNestedInput
    Table_Columns_tmp?: Table_Columns_tmpUpdateManyWithoutPlayers_tmpNestedInput
  }

  export type Players_tmpUncheckedUpdateWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Sessions_And_Players_tmp?: Association__Sessions_And_Players_tmpUncheckedUpdateManyWithoutPlayers_tmpNestedInput
    Table_Columns_tmp?: Table_Columns_tmpUncheckedUpdateManyWithoutPlayers_tmpNestedInput
  }

  export type Players_tmpCreateWithoutAssociation__Sessions_And_Players_tmpInput = {
    Name: string
    Color: string
    createdAt: Date | string
    updatedAt?: Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpCreateNestedManyWithoutPlayers_tmpInput
    Table_Columns_tmp?: Table_Columns_tmpCreateNestedManyWithoutPlayers_tmpInput
  }

  export type Players_tmpUncheckedCreateWithoutAssociation__Sessions_And_Players_tmpInput = {
    id?: number
    Name: string
    Color: string
    createdAt: Date | string
    updatedAt?: Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateNestedManyWithoutPlayers_tmpInput
    Table_Columns_tmp?: Table_Columns_tmpUncheckedCreateNestedManyWithoutPlayers_tmpInput
  }

  export type Players_tmpCreateOrConnectWithoutAssociation__Sessions_And_Players_tmpInput = {
    where: Players_tmpWhereUniqueInput
    create: XOR<Players_tmpCreateWithoutAssociation__Sessions_And_Players_tmpInput, Players_tmpUncheckedCreateWithoutAssociation__Sessions_And_Players_tmpInput>
  }

  export type Sessions_tmpCreateWithoutAssociation__Sessions_And_Players_tmpInput = {
    Name: string
    Color: string
    Columns: number
    View_List_Years?: Sessions_tmpCreateView_List_YearsInput | number[]
    CurrentGameStart?: Date | string | null
    LastPlayed: Date | string
    createdAt: Date | string
    updatedAt?: Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpCreateNestedManyWithoutSessions_tmpInput
    Association__Users_And_Sessions_tmp?: Association__Users_And_Sessions_tmpCreateNestedManyWithoutSessionInput
  }

  export type Sessions_tmpUncheckedCreateWithoutAssociation__Sessions_And_Players_tmpInput = {
    id?: number
    Name: string
    Color: string
    Columns: number
    View_List_Years?: Sessions_tmpCreateView_List_YearsInput | number[]
    CurrentGameStart?: Date | string | null
    LastPlayed: Date | string
    createdAt: Date | string
    updatedAt?: Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateNestedManyWithoutSessions_tmpInput
    Association__Users_And_Sessions_tmp?: Association__Users_And_Sessions_tmpUncheckedCreateNestedManyWithoutSessionInput
  }

  export type Sessions_tmpCreateOrConnectWithoutAssociation__Sessions_And_Players_tmpInput = {
    where: Sessions_tmpWhereUniqueInput
    create: XOR<Sessions_tmpCreateWithoutAssociation__Sessions_And_Players_tmpInput, Sessions_tmpUncheckedCreateWithoutAssociation__Sessions_And_Players_tmpInput>
  }

  export type Players_tmpUpsertWithoutAssociation__Sessions_And_Players_tmpInput = {
    update: XOR<Players_tmpUpdateWithoutAssociation__Sessions_And_Players_tmpInput, Players_tmpUncheckedUpdateWithoutAssociation__Sessions_And_Players_tmpInput>
    create: XOR<Players_tmpCreateWithoutAssociation__Sessions_And_Players_tmpInput, Players_tmpUncheckedCreateWithoutAssociation__Sessions_And_Players_tmpInput>
    where?: Players_tmpWhereInput
  }

  export type Players_tmpUpdateToOneWithWhereWithoutAssociation__Sessions_And_Players_tmpInput = {
    where?: Players_tmpWhereInput
    data: XOR<Players_tmpUpdateWithoutAssociation__Sessions_And_Players_tmpInput, Players_tmpUncheckedUpdateWithoutAssociation__Sessions_And_Players_tmpInput>
  }

  export type Players_tmpUpdateWithoutAssociation__Sessions_And_Players_tmpInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithoutPlayers_tmpNestedInput
    Table_Columns_tmp?: Table_Columns_tmpUpdateManyWithoutPlayers_tmpNestedInput
  }

  export type Players_tmpUncheckedUpdateWithoutAssociation__Sessions_And_Players_tmpInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutPlayers_tmpNestedInput
    Table_Columns_tmp?: Table_Columns_tmpUncheckedUpdateManyWithoutPlayers_tmpNestedInput
  }

  export type Sessions_tmpUpsertWithoutAssociation__Sessions_And_Players_tmpInput = {
    update: XOR<Sessions_tmpUpdateWithoutAssociation__Sessions_And_Players_tmpInput, Sessions_tmpUncheckedUpdateWithoutAssociation__Sessions_And_Players_tmpInput>
    create: XOR<Sessions_tmpCreateWithoutAssociation__Sessions_And_Players_tmpInput, Sessions_tmpUncheckedCreateWithoutAssociation__Sessions_And_Players_tmpInput>
    where?: Sessions_tmpWhereInput
  }

  export type Sessions_tmpUpdateToOneWithWhereWithoutAssociation__Sessions_And_Players_tmpInput = {
    where?: Sessions_tmpWhereInput
    data: XOR<Sessions_tmpUpdateWithoutAssociation__Sessions_And_Players_tmpInput, Sessions_tmpUncheckedUpdateWithoutAssociation__Sessions_And_Players_tmpInput>
  }

  export type Sessions_tmpUpdateWithoutAssociation__Sessions_And_Players_tmpInput = {
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    Columns?: IntFieldUpdateOperationsInput | number
    View_List_Years?: Sessions_tmpUpdateView_List_YearsInput | number[]
    CurrentGameStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithoutSessions_tmpNestedInput
    Association__Users_And_Sessions_tmp?: Association__Users_And_Sessions_tmpUpdateManyWithoutSessionNestedInput
  }

  export type Sessions_tmpUncheckedUpdateWithoutAssociation__Sessions_And_Players_tmpInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    Color?: StringFieldUpdateOperationsInput | string
    Columns?: IntFieldUpdateOperationsInput | number
    View_List_Years?: Sessions_tmpUpdateView_List_YearsInput | number[]
    CurrentGameStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    LastPlayed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Association__Players_And_FinalScores_With_Sessions_tmp?: Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutSessions_tmpNestedInput
    Association__Users_And_Sessions_tmp?: Association__Users_And_Sessions_tmpUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutFinalScores_tmpInput = {
    IsWinner: boolean
    Score: number
    Wins__Before: number
    Wins__After: number
    Wins__Before_Year: number
    Wins__After_Year: number
    Wins__Before_Month: number
    Wins__After_Month: number
    Wins__Before_SinceCustomDate?: number | null
    Wins__After_SinceCustomDate?: number | null
    createdAt: Date | string
    updatedAt: Date | string
    Sessions_tmp?: Sessions_tmpCreateNestedOneWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
    Players_tmp: Players_tmpCreateNestedOneWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpInput
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutFinalScores_tmpInput = {
    IsWinner: boolean
    Score: number
    Wins__Before: number
    Wins__After: number
    Wins__Before_Year: number
    Wins__After_Year: number
    Wins__Before_Month: number
    Wins__After_Month: number
    Wins__Before_SinceCustomDate?: number | null
    Wins__After_SinceCustomDate?: number | null
    createdAt: Date | string
    updatedAt: Date | string
    SessionID?: number | null
    PlayerID: number
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateOrConnectWithoutFinalScores_tmpInput = {
    where: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    create: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutFinalScores_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutFinalScores_tmpInput>
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateManyFinalScores_tmpInputEnvelope = {
    data: Association__Players_And_FinalScores_With_Sessions_tmpCreateManyFinalScores_tmpInput | Association__Players_And_FinalScores_With_Sessions_tmpCreateManyFinalScores_tmpInput[]
    skipDuplicates?: boolean
  }

  export type Table_Archives_tmpCreateWithoutFinalScores_tmpInput = {
    Table?: Table_Archives_tmpCreateTableInput | InputJsonValue[]
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type Table_Archives_tmpUncheckedCreateWithoutFinalScores_tmpInput = {
    id?: number
    Table?: Table_Archives_tmpCreateTableInput | InputJsonValue[]
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type Table_Archives_tmpCreateOrConnectWithoutFinalScores_tmpInput = {
    where: Table_Archives_tmpWhereUniqueInput
    create: XOR<Table_Archives_tmpCreateWithoutFinalScores_tmpInput, Table_Archives_tmpUncheckedCreateWithoutFinalScores_tmpInput>
  }

  export type Table_Archives_tmpCreateManyFinalScores_tmpInputEnvelope = {
    data: Table_Archives_tmpCreateManyFinalScores_tmpInput | Table_Archives_tmpCreateManyFinalScores_tmpInput[]
    skipDuplicates?: boolean
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpsertWithWhereUniqueWithoutFinalScores_tmpInput = {
    where: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    update: XOR<Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithoutFinalScores_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateWithoutFinalScores_tmpInput>
    create: XOR<Association__Players_And_FinalScores_With_Sessions_tmpCreateWithoutFinalScores_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedCreateWithoutFinalScores_tmpInput>
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithWhereUniqueWithoutFinalScores_tmpInput = {
    where: Association__Players_And_FinalScores_With_Sessions_tmpWhereUniqueInput
    data: XOR<Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithoutFinalScores_tmpInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateWithoutFinalScores_tmpInput>
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyWithWhereWithoutFinalScores_tmpInput = {
    where: Association__Players_And_FinalScores_With_Sessions_tmpScalarWhereInput
    data: XOR<Association__Players_And_FinalScores_With_Sessions_tmpUpdateManyMutationInput, Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutFinalScores_tmpInput>
  }

  export type Table_Archives_tmpUpsertWithWhereUniqueWithoutFinalScores_tmpInput = {
    where: Table_Archives_tmpWhereUniqueInput
    update: XOR<Table_Archives_tmpUpdateWithoutFinalScores_tmpInput, Table_Archives_tmpUncheckedUpdateWithoutFinalScores_tmpInput>
    create: XOR<Table_Archives_tmpCreateWithoutFinalScores_tmpInput, Table_Archives_tmpUncheckedCreateWithoutFinalScores_tmpInput>
  }

  export type Table_Archives_tmpUpdateWithWhereUniqueWithoutFinalScores_tmpInput = {
    where: Table_Archives_tmpWhereUniqueInput
    data: XOR<Table_Archives_tmpUpdateWithoutFinalScores_tmpInput, Table_Archives_tmpUncheckedUpdateWithoutFinalScores_tmpInput>
  }

  export type Table_Archives_tmpUpdateManyWithWhereWithoutFinalScores_tmpInput = {
    where: Table_Archives_tmpScalarWhereInput
    data: XOR<Table_Archives_tmpUpdateManyMutationInput, Table_Archives_tmpUncheckedUpdateManyWithoutFinalScores_tmpInput>
  }

  export type Table_Archives_tmpScalarWhereInput = {
    AND?: Table_Archives_tmpScalarWhereInput | Table_Archives_tmpScalarWhereInput[]
    OR?: Table_Archives_tmpScalarWhereInput[]
    NOT?: Table_Archives_tmpScalarWhereInput | Table_Archives_tmpScalarWhereInput[]
    id?: IntFilter<"Table_Archives_tmp"> | number
    Table?: JsonNullableListFilter<"Table_Archives_tmp">
    createdAt?: DateTimeFilter<"Table_Archives_tmp"> | Date | string
    updatedAt?: DateTimeFilter<"Table_Archives_tmp"> | Date | string
    FinalScoreID?: IntNullableFilter<"Table_Archives_tmp"> | number | null
  }

  export type Association__Users_And_Sessions_tmpCreateManyUserInput = {
    InputType: $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible: boolean
    View: $Enums.enum_Association__Users_And_Sessions_View
    View_Month: number
    View_Year: number
    View_CustomDate: Date | string
    Statistics_Show_Border: boolean
    Statistics_View: $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: Date | string
    updatedAt: Date | string
    SessionID: number
  }

  export type Association__Users_And_Sessions_tmpUpdateWithoutUserInput = {
    InputType?: Enumenum_Association__Users_And_Sessions_InputTypeFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible?: BoolFieldUpdateOperationsInput | boolean
    View?: Enumenum_Association__Users_And_Sessions_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_View
    View_Month?: IntFieldUpdateOperationsInput | number
    View_Year?: IntFieldUpdateOperationsInput | number
    View_CustomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Statistics_Show_Border?: BoolFieldUpdateOperationsInput | boolean
    Statistics_View?: Enumenum_Association__Users_And_Sessions_Statistics_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month?: IntFieldUpdateOperationsInput | number
    Statistics_View_Year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Session?: Sessions_tmpUpdateOneRequiredWithoutAssociation__Users_And_Sessions_tmpNestedInput
  }

  export type Association__Users_And_Sessions_tmpUncheckedUpdateWithoutUserInput = {
    InputType?: Enumenum_Association__Users_And_Sessions_InputTypeFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible?: BoolFieldUpdateOperationsInput | boolean
    View?: Enumenum_Association__Users_And_Sessions_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_View
    View_Month?: IntFieldUpdateOperationsInput | number
    View_Year?: IntFieldUpdateOperationsInput | number
    View_CustomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Statistics_Show_Border?: BoolFieldUpdateOperationsInput | boolean
    Statistics_View?: Enumenum_Association__Users_And_Sessions_Statistics_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month?: IntFieldUpdateOperationsInput | number
    Statistics_View_Year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SessionID?: IntFieldUpdateOperationsInput | number
  }

  export type Association__Users_And_Sessions_tmpUncheckedUpdateManyWithoutUserInput = {
    InputType?: Enumenum_Association__Users_And_Sessions_InputTypeFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible?: BoolFieldUpdateOperationsInput | boolean
    View?: Enumenum_Association__Users_And_Sessions_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_View
    View_Month?: IntFieldUpdateOperationsInput | number
    View_Year?: IntFieldUpdateOperationsInput | number
    View_CustomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Statistics_Show_Border?: BoolFieldUpdateOperationsInput | boolean
    Statistics_View?: Enumenum_Association__Users_And_Sessions_Statistics_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month?: IntFieldUpdateOperationsInput | number
    Statistics_View_Year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SessionID?: IntFieldUpdateOperationsInput | number
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateManySessions_tmpInput = {
    IsWinner: boolean
    Score: number
    Wins__Before: number
    Wins__After: number
    Wins__Before_Year: number
    Wins__After_Year: number
    Wins__Before_Month: number
    Wins__After_Month: number
    Wins__Before_SinceCustomDate?: number | null
    Wins__After_SinceCustomDate?: number | null
    createdAt: Date | string
    updatedAt: Date | string
    PlayerID: number
    FinalScoreID: number
  }

  export type Association__Sessions_And_Players_tmpCreateManySessions_tmpInput = {
    Gnadenwurf_Used: boolean
    Order_Index: number
    createdAt: Date | string
    updatedAt: Date | string
    PlayerID: number
  }

  export type Association__Users_And_Sessions_tmpCreateManySessionInput = {
    InputType: $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible: boolean
    View: $Enums.enum_Association__Users_And_Sessions_View
    View_Month: number
    View_Year: number
    View_CustomDate: Date | string
    Statistics_Show_Border: boolean
    Statistics_View: $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month: number
    Statistics_View_Year: number
    createdAt: Date | string
    updatedAt: Date | string
    UserID: number
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithoutSessions_tmpInput = {
    IsWinner?: BoolFieldUpdateOperationsInput | boolean
    Score?: IntFieldUpdateOperationsInput | number
    Wins__Before?: IntFieldUpdateOperationsInput | number
    Wins__After?: IntFieldUpdateOperationsInput | number
    Wins__Before_Year?: IntFieldUpdateOperationsInput | number
    Wins__After_Year?: IntFieldUpdateOperationsInput | number
    Wins__Before_Month?: IntFieldUpdateOperationsInput | number
    Wins__After_Month?: IntFieldUpdateOperationsInput | number
    Wins__Before_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    Wins__After_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinalScores_tmp?: FinalScores_tmpUpdateOneRequiredWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpNestedInput
    Players_tmp?: Players_tmpUpdateOneRequiredWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpNestedInput
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateWithoutSessions_tmpInput = {
    IsWinner?: BoolFieldUpdateOperationsInput | boolean
    Score?: IntFieldUpdateOperationsInput | number
    Wins__Before?: IntFieldUpdateOperationsInput | number
    Wins__After?: IntFieldUpdateOperationsInput | number
    Wins__Before_Year?: IntFieldUpdateOperationsInput | number
    Wins__After_Year?: IntFieldUpdateOperationsInput | number
    Wins__Before_Month?: IntFieldUpdateOperationsInput | number
    Wins__After_Month?: IntFieldUpdateOperationsInput | number
    Wins__Before_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    Wins__After_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerID?: IntFieldUpdateOperationsInput | number
    FinalScoreID?: IntFieldUpdateOperationsInput | number
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutSessions_tmpInput = {
    IsWinner?: BoolFieldUpdateOperationsInput | boolean
    Score?: IntFieldUpdateOperationsInput | number
    Wins__Before?: IntFieldUpdateOperationsInput | number
    Wins__After?: IntFieldUpdateOperationsInput | number
    Wins__Before_Year?: IntFieldUpdateOperationsInput | number
    Wins__After_Year?: IntFieldUpdateOperationsInput | number
    Wins__Before_Month?: IntFieldUpdateOperationsInput | number
    Wins__After_Month?: IntFieldUpdateOperationsInput | number
    Wins__Before_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    Wins__After_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerID?: IntFieldUpdateOperationsInput | number
    FinalScoreID?: IntFieldUpdateOperationsInput | number
  }

  export type Association__Sessions_And_Players_tmpUpdateWithoutSessions_tmpInput = {
    Gnadenwurf_Used?: BoolFieldUpdateOperationsInput | boolean
    Order_Index?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Players_tmp?: Players_tmpUpdateOneRequiredWithoutAssociation__Sessions_And_Players_tmpNestedInput
  }

  export type Association__Sessions_And_Players_tmpUncheckedUpdateWithoutSessions_tmpInput = {
    Gnadenwurf_Used?: BoolFieldUpdateOperationsInput | boolean
    Order_Index?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerID?: IntFieldUpdateOperationsInput | number
  }

  export type Association__Sessions_And_Players_tmpUncheckedUpdateManyWithoutSessions_tmpInput = {
    Gnadenwurf_Used?: BoolFieldUpdateOperationsInput | boolean
    Order_Index?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlayerID?: IntFieldUpdateOperationsInput | number
  }

  export type Association__Users_And_Sessions_tmpUpdateWithoutSessionInput = {
    InputType?: Enumenum_Association__Users_And_Sessions_InputTypeFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible?: BoolFieldUpdateOperationsInput | boolean
    View?: Enumenum_Association__Users_And_Sessions_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_View
    View_Month?: IntFieldUpdateOperationsInput | number
    View_Year?: IntFieldUpdateOperationsInput | number
    View_CustomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Statistics_Show_Border?: BoolFieldUpdateOperationsInput | boolean
    Statistics_View?: Enumenum_Association__Users_And_Sessions_Statistics_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month?: IntFieldUpdateOperationsInput | number
    Statistics_View_Year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: Users_tmpUpdateOneRequiredWithoutList___Association__Users_And_SessionsNestedInput
  }

  export type Association__Users_And_Sessions_tmpUncheckedUpdateWithoutSessionInput = {
    InputType?: Enumenum_Association__Users_And_Sessions_InputTypeFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible?: BoolFieldUpdateOperationsInput | boolean
    View?: Enumenum_Association__Users_And_Sessions_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_View
    View_Month?: IntFieldUpdateOperationsInput | number
    View_Year?: IntFieldUpdateOperationsInput | number
    View_CustomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Statistics_Show_Border?: BoolFieldUpdateOperationsInput | boolean
    Statistics_View?: Enumenum_Association__Users_And_Sessions_Statistics_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month?: IntFieldUpdateOperationsInput | number
    Statistics_View_Year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserID?: IntFieldUpdateOperationsInput | number
  }

  export type Association__Users_And_Sessions_tmpUncheckedUpdateManyWithoutSessionInput = {
    InputType?: Enumenum_Association__Users_And_Sessions_InputTypeFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_InputType
    Scores_Visible?: BoolFieldUpdateOperationsInput | boolean
    View?: Enumenum_Association__Users_And_Sessions_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_View
    View_Month?: IntFieldUpdateOperationsInput | number
    View_Year?: IntFieldUpdateOperationsInput | number
    View_CustomDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Statistics_Show_Border?: BoolFieldUpdateOperationsInput | boolean
    Statistics_View?: Enumenum_Association__Users_And_Sessions_Statistics_ViewFieldUpdateOperationsInput | $Enums.enum_Association__Users_And_Sessions_Statistics_View
    Statistics_View_Month?: IntFieldUpdateOperationsInput | number
    Statistics_View_Year?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserID?: IntFieldUpdateOperationsInput | number
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateManyPlayers_tmpInput = {
    IsWinner: boolean
    Score: number
    Wins__Before: number
    Wins__After: number
    Wins__Before_Year: number
    Wins__After_Year: number
    Wins__Before_Month: number
    Wins__After_Month: number
    Wins__Before_SinceCustomDate?: number | null
    Wins__After_SinceCustomDate?: number | null
    createdAt: Date | string
    updatedAt: Date | string
    SessionID?: number | null
    FinalScoreID: number
  }

  export type Association__Sessions_And_Players_tmpCreateManyPlayers_tmpInput = {
    Gnadenwurf_Used: boolean
    Order_Index: number
    createdAt: Date | string
    updatedAt: Date | string
    SessionID: number
  }

  export type Table_Columns_tmpCreateManyPlayers_tmpInput = {
    id?: number
    Column: number
    Upper_Table_1?: number | null
    Upper_Table_2?: number | null
    Upper_Table_3?: number | null
    Upper_Table_4?: number | null
    Upper_Table_5?: number | null
    Upper_Table_6?: number | null
    Upper_Table_Score: number
    Upper_Table_Add35?: number | null
    Upper_Table_TotalScore?: number | null
    Bottom_Table_1?: number | null
    Bottom_Table_2?: number | null
    Bottom_Table_3?: number | null
    Bottom_Table_4?: number | null
    Bottom_Table_5?: number | null
    Bottom_Table_6?: number | null
    Bottom_Table_7?: number | null
    Bottom_Table_Score?: number | null
    Bottom_Table_TotalScore?: number | null
    TotalScore: number
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithoutPlayers_tmpInput = {
    IsWinner?: BoolFieldUpdateOperationsInput | boolean
    Score?: IntFieldUpdateOperationsInput | number
    Wins__Before?: IntFieldUpdateOperationsInput | number
    Wins__After?: IntFieldUpdateOperationsInput | number
    Wins__Before_Year?: IntFieldUpdateOperationsInput | number
    Wins__After_Year?: IntFieldUpdateOperationsInput | number
    Wins__Before_Month?: IntFieldUpdateOperationsInput | number
    Wins__After_Month?: IntFieldUpdateOperationsInput | number
    Wins__Before_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    Wins__After_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    FinalScores_tmp?: FinalScores_tmpUpdateOneRequiredWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpNestedInput
    Sessions_tmp?: Sessions_tmpUpdateOneWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpNestedInput
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateWithoutPlayers_tmpInput = {
    IsWinner?: BoolFieldUpdateOperationsInput | boolean
    Score?: IntFieldUpdateOperationsInput | number
    Wins__Before?: IntFieldUpdateOperationsInput | number
    Wins__After?: IntFieldUpdateOperationsInput | number
    Wins__Before_Year?: IntFieldUpdateOperationsInput | number
    Wins__After_Year?: IntFieldUpdateOperationsInput | number
    Wins__Before_Month?: IntFieldUpdateOperationsInput | number
    Wins__After_Month?: IntFieldUpdateOperationsInput | number
    Wins__Before_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    Wins__After_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SessionID?: NullableIntFieldUpdateOperationsInput | number | null
    FinalScoreID?: IntFieldUpdateOperationsInput | number
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutPlayers_tmpInput = {
    IsWinner?: BoolFieldUpdateOperationsInput | boolean
    Score?: IntFieldUpdateOperationsInput | number
    Wins__Before?: IntFieldUpdateOperationsInput | number
    Wins__After?: IntFieldUpdateOperationsInput | number
    Wins__Before_Year?: IntFieldUpdateOperationsInput | number
    Wins__After_Year?: IntFieldUpdateOperationsInput | number
    Wins__Before_Month?: IntFieldUpdateOperationsInput | number
    Wins__After_Month?: IntFieldUpdateOperationsInput | number
    Wins__Before_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    Wins__After_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SessionID?: NullableIntFieldUpdateOperationsInput | number | null
    FinalScoreID?: IntFieldUpdateOperationsInput | number
  }

  export type Association__Sessions_And_Players_tmpUpdateWithoutPlayers_tmpInput = {
    Gnadenwurf_Used?: BoolFieldUpdateOperationsInput | boolean
    Order_Index?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Sessions_tmp?: Sessions_tmpUpdateOneRequiredWithoutAssociation__Sessions_And_Players_tmpNestedInput
  }

  export type Association__Sessions_And_Players_tmpUncheckedUpdateWithoutPlayers_tmpInput = {
    Gnadenwurf_Used?: BoolFieldUpdateOperationsInput | boolean
    Order_Index?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SessionID?: IntFieldUpdateOperationsInput | number
  }

  export type Association__Sessions_And_Players_tmpUncheckedUpdateManyWithoutPlayers_tmpInput = {
    Gnadenwurf_Used?: BoolFieldUpdateOperationsInput | boolean
    Order_Index?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SessionID?: IntFieldUpdateOperationsInput | number
  }

  export type Table_Columns_tmpUpdateWithoutPlayers_tmpInput = {
    Column?: IntFieldUpdateOperationsInput | number
    Upper_Table_1?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_2?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_3?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_4?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_5?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_6?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_Score?: IntFieldUpdateOperationsInput | number
    Upper_Table_Add35?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_TotalScore?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_1?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_2?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_3?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_4?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_5?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_6?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_7?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_Score?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_TotalScore?: NullableIntFieldUpdateOperationsInput | number | null
    TotalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Table_Columns_tmpUncheckedUpdateWithoutPlayers_tmpInput = {
    id?: IntFieldUpdateOperationsInput | number
    Column?: IntFieldUpdateOperationsInput | number
    Upper_Table_1?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_2?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_3?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_4?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_5?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_6?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_Score?: IntFieldUpdateOperationsInput | number
    Upper_Table_Add35?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_TotalScore?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_1?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_2?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_3?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_4?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_5?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_6?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_7?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_Score?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_TotalScore?: NullableIntFieldUpdateOperationsInput | number | null
    TotalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Table_Columns_tmpUncheckedUpdateManyWithoutPlayers_tmpInput = {
    id?: IntFieldUpdateOperationsInput | number
    Column?: IntFieldUpdateOperationsInput | number
    Upper_Table_1?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_2?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_3?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_4?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_5?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_6?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_Score?: IntFieldUpdateOperationsInput | number
    Upper_Table_Add35?: NullableIntFieldUpdateOperationsInput | number | null
    Upper_Table_TotalScore?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_1?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_2?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_3?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_4?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_5?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_6?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_7?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_Score?: NullableIntFieldUpdateOperationsInput | number | null
    Bottom_Table_TotalScore?: NullableIntFieldUpdateOperationsInput | number | null
    TotalScore?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpCreateManyFinalScores_tmpInput = {
    IsWinner: boolean
    Score: number
    Wins__Before: number
    Wins__After: number
    Wins__Before_Year: number
    Wins__After_Year: number
    Wins__Before_Month: number
    Wins__After_Month: number
    Wins__Before_SinceCustomDate?: number | null
    Wins__After_SinceCustomDate?: number | null
    createdAt: Date | string
    updatedAt: Date | string
    SessionID?: number | null
    PlayerID: number
  }

  export type Table_Archives_tmpCreateManyFinalScores_tmpInput = {
    id?: number
    Table?: Table_Archives_tmpCreateTableInput | InputJsonValue[]
    createdAt: Date | string
    updatedAt?: Date | string
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUpdateWithoutFinalScores_tmpInput = {
    IsWinner?: BoolFieldUpdateOperationsInput | boolean
    Score?: IntFieldUpdateOperationsInput | number
    Wins__Before?: IntFieldUpdateOperationsInput | number
    Wins__After?: IntFieldUpdateOperationsInput | number
    Wins__Before_Year?: IntFieldUpdateOperationsInput | number
    Wins__After_Year?: IntFieldUpdateOperationsInput | number
    Wins__Before_Month?: IntFieldUpdateOperationsInput | number
    Wins__After_Month?: IntFieldUpdateOperationsInput | number
    Wins__Before_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    Wins__After_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Sessions_tmp?: Sessions_tmpUpdateOneWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpNestedInput
    Players_tmp?: Players_tmpUpdateOneRequiredWithoutAssociation__Players_And_FinalScores_With_Sessions_tmpNestedInput
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateWithoutFinalScores_tmpInput = {
    IsWinner?: BoolFieldUpdateOperationsInput | boolean
    Score?: IntFieldUpdateOperationsInput | number
    Wins__Before?: IntFieldUpdateOperationsInput | number
    Wins__After?: IntFieldUpdateOperationsInput | number
    Wins__Before_Year?: IntFieldUpdateOperationsInput | number
    Wins__After_Year?: IntFieldUpdateOperationsInput | number
    Wins__Before_Month?: IntFieldUpdateOperationsInput | number
    Wins__After_Month?: IntFieldUpdateOperationsInput | number
    Wins__Before_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    Wins__After_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SessionID?: NullableIntFieldUpdateOperationsInput | number | null
    PlayerID?: IntFieldUpdateOperationsInput | number
  }

  export type Association__Players_And_FinalScores_With_Sessions_tmpUncheckedUpdateManyWithoutFinalScores_tmpInput = {
    IsWinner?: BoolFieldUpdateOperationsInput | boolean
    Score?: IntFieldUpdateOperationsInput | number
    Wins__Before?: IntFieldUpdateOperationsInput | number
    Wins__After?: IntFieldUpdateOperationsInput | number
    Wins__Before_Year?: IntFieldUpdateOperationsInput | number
    Wins__After_Year?: IntFieldUpdateOperationsInput | number
    Wins__Before_Month?: IntFieldUpdateOperationsInput | number
    Wins__After_Month?: IntFieldUpdateOperationsInput | number
    Wins__Before_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    Wins__After_SinceCustomDate?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SessionID?: NullableIntFieldUpdateOperationsInput | number | null
    PlayerID?: IntFieldUpdateOperationsInput | number
  }

  export type Table_Archives_tmpUpdateWithoutFinalScores_tmpInput = {
    Table?: Table_Archives_tmpUpdateTableInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Table_Archives_tmpUncheckedUpdateWithoutFinalScores_tmpInput = {
    id?: IntFieldUpdateOperationsInput | number
    Table?: Table_Archives_tmpUpdateTableInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Table_Archives_tmpUncheckedUpdateManyWithoutFinalScores_tmpInput = {
    id?: IntFieldUpdateOperationsInput | number
    Table?: Table_Archives_tmpUpdateTableInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}